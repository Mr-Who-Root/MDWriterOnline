// MDWriterOnline Core Engine

// Initialize External libraries
const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  hr: '---',
  emDelimiter: '*'
});

// App State
let currentEditorMode = 'split'; // 'split', 'editor', 'wysiwyg'
let autosaveTimer = null;
let pendingConfirmCallback = null; // Custom Confirm modal promise callback
let tablePendingMode = null; // 'markdown' or 'wysiwyg' — tracks which mode triggered table picker
let tableSelectedCols = 3;
let tableSelectedRows = 3;

// Undo/Redo Custom History State Manager
const historyStack = [];
let historyIndex = -1;
const MAX_HISTORY = 100;
let historyDebounceTimer = null;

const saveHistoryState = (text, start, end) => {
  // If the new state is exactly equal to the current index state, avoid duplicate recording
  if (historyIndex >= 0 && historyStack[historyIndex].text === text) return;

  // Clear forward history if user undoes and starts editing from an earlier state
  historyStack.splice(historyIndex + 1);

  historyStack.push({ text, start, end });
  if (historyStack.length > MAX_HISTORY) {
    historyStack.shift();
  }
  historyIndex = historyStack.length - 1;
};

const performUndo = () => {
  if (currentEditorMode === 'wysiwyg') {
    document.execCommand('undo');
  } else {
    if (historyIndex > 0) {
      historyIndex--;
      const state = historyStack[historyIndex];
      textarea.value = state.text;
      textarea.focus();
      textarea.setSelectionRange(state.start, state.end);
      updatePreview();
      updateLineNumbers();
      triggerAutosave();
    }
  }
};

const performRedo = () => {
  if (currentEditorMode === 'wysiwyg') {
    document.execCommand('redo');
  } else {
    if (historyIndex < historyStack.length - 1) {
      historyIndex++;
      const state = historyStack[historyIndex];
      textarea.value = state.text;
      textarea.focus();
      textarea.setSelectionRange(state.start, state.end);
      updatePreview();
      updateLineNumbers();
      triggerAutosave();
    }
  }
};

const recordTypingState = () => {
  if (historyDebounceTimer) clearTimeout(historyDebounceTimer);
  historyDebounceTimer = setTimeout(() => {
    saveHistoryState(textarea.value, textarea.selectionStart, textarea.selectionEnd);
  }, 350);
};

// Autocomplete State
let activeAutocompleteIndex = 0;
let currentAutocompleteMatches = [];
let autocompleteActiveTrigger = null; // 'emoji', 'heading', 'link', 'container'

// Emoji Token Translation Map
const EMOJI_MAP = {
  ':smile:': '😊',
  ':wink:': '😉',
  ':cry:': '😢',
  ':laughing:': '😆',
  ':yum:': '😋',
  ':rocket:': '🚀',
  ':heart:': '❤️',
  ':checkered_flag:': '🏁',
  ':-)': '😊',
  ':-(': '😢',
  '8-)': '😎',
  ';)': '😉'
};

const replaceEmojiTokens = (markdown) => {
  let cleanMd = markdown;
  Object.keys(EMOJI_MAP).forEach(token => {
    const escapedToken = token.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(escapedToken, 'g');
    cleanMd = cleanMd.replace(regex, EMOJI_MAP[token]);
  });
  return cleanMd;
};

// DOM Elements
const textarea = document.getElementById('markdown-textarea');
const previewOutput = document.getElementById('preview-output');
const wysiwygEditor = document.getElementById('wysiwyg-editor');
const lineNumbers = document.getElementById('editor-line-numbers');
const editorContainer = document.getElementById('editor-container');
const statusMessage = document.getElementById('status-message');
const statusIndicator = document.getElementById('status-indicator');
const wordCountEl = document.getElementById('word-count');
const charCountEl = document.getElementById('char-count');
const readTimeEl = document.getElementById('read-time');

// Formatting Toolbar Elements
const formatButtons = document.querySelectorAll('.format-btn');
const btnUndo = document.getElementById('btn-undo');
const btnRedo = document.getElementById('btn-redo');

// Mode Switch buttons
const modeBtns = document.querySelectorAll('.mode-btn');

// Header Actions
const btnNew = document.getElementById('btn-new');
const btnTemplates = document.getElementById('btn-templates');
const btnThemeToggle = document.getElementById('btn-theme-toggle');
const themeSun = document.getElementById('theme-sun');
const themeMoon = document.getElementById('theme-moon');

// Sidebar Elements
const sidebar = document.getElementById('cheat-sheet-sidebar');
const btnToggleSidebar = document.getElementById('btn-toggle-sidebar');
const btnCloseSidebar = document.getElementById('btn-close-sidebar');
const cheatSearch = document.getElementById('cheat-search');
const cheatSheetContent = document.getElementById('cheat-sheet-content');

// Template elements
const modalTemplates = document.getElementById('modal-templates');
const templatesGrid = document.getElementById('templates-grid-container');
const templateTabs = document.querySelectorAll('#modal-templates .tab-btn');

// Database of Cheat Sheet Items (Comprehensive)
const CHEAT_SHEET_ITEMS = [
  {
    category: "Headings",
    items: [
      { name: "Heading 1 (H1)", code: "# Heading", template: "# [Heading 1]\n" },
      { name: "Heading 2 (H2)", code: "## Heading", template: "## [Heading 2]\n" },
      { name: "Heading 3 (H3)", code: "### Heading", template: "### [Heading 3]\n" },
      { name: "Heading 4 (H4)", code: "#### Heading", template: "#### [Heading 4]\n" },
      { name: "Heading 5 (H5)", code: "##### Heading", template: "##### [Heading 5]\n" },
      { name: "Heading 6 (H6)", code: "###### Heading", template: "###### [Heading 6]\n" }
    ]
  },
  {
    category: "Horizontal Rules",
    items: [
      { name: "Rule (Underscores)", code: "___", template: "\n___\n" },
      { name: "Rule (Dashes)", code: "---", template: "\n---\n" },
      { name: "Rule (Asterisks)", code: "***", template: "\n***\n" }
    ]
  },
  {
    category: "Emphasis",
    items: [
      { name: "Bold (Asterisks)", code: "**text**", template: "**[Bold text]**" },
      { name: "Bold (Underscores)", code: "__text__", template: "__[Bold text]__" },
      { name: "Italic (Asterisks)", code: "*text*", template: "*[Italic text]*" },
      { name: "Italic (Underscores)", code: "_text_", template: "_[Italic text]_" },
      { name: "Strikethrough", code: "~~text~~", template: "~~[Strikethrough text]~~" }
    ]
  },
  {
    category: "Blockquotes",
    items: [
      { name: "Standard Quote", code: "> quote", template: "> [Blockquote quote]\n" },
      { name: "Nested Quote (L2)", code: ">> quote", template: "> [Level 1 quote]\n>> [Level 2 nested quote]\n" },
      { name: "Nested Quote (L3)", code: "> > > quote", template: "> [Level 1]\n> > [Level 2]\n> > > [Level 3]\n" }
    ]
  },
  {
    category: "Lists",
    items: [
      { name: "Plus List", code: "+ Item", template: "+ [Plus Item]\n+ Item 2" },
      { name: "Minus List", code: "- Item", template: "- [Minus Item]\n- Item 2" },
      { name: "Asterisk List", code: "* Item", template: "* [Asterisk Item]\n* Item 2" },
      { name: "Nested Sub-list", code: "  - Item", template: "- [Main item]\n  - [Sub-list item]\n    * Deep item" },
      { name: "Ordered List", code: "1. Item", template: "1. [Numbered Item 1]\n2. Numbered Item 2" },
      { name: "Constant Numbers", code: "1. ... 1.", template: "1. [First Item]\n1. [Second Item]\n1. [Third Item]" },
      { name: "Offset Start List", code: "57. Item", template: "57. [Offset item]\n1. Sequential item" }
    ]
  },
  {
    category: "Code",
    items: [
      { name: "Inline Code", code: "`code`", template: "`[inline code]`" },
      { name: "Indented Code", code: "    code", template: "    // [Indented code lines]\n    const foo = 'bar';\n    console.log(foo);" },
      { name: "Fenced Code Block", code: "```\n...\n```", template: "```\n[Sample text fences]\n```\n" },
      { name: "Syntax Highlighted", code: "``` js\n...\n```", template: "```javascript\nvar foo = function (bar) {\n  return bar++;\n};\nconsole.log(foo(5));\n```\n" }
    ]
  },
  {
    category: "Tables",
    items: [
      { name: "Custom Table Builder", code: "| Col | Col |", template: "| Option | Description |\n| ------ | ----------- |\n| [data]   | path to data files |\n| engine | template engine |\n" },
      { name: "Right Aligned Cols", code: "| --:| --:|", template: "| Option | Description |\n| ------:| -----------:|\n| [data]   | right aligned cell |\n| engine | right aligned cell |\n" }
    ]
  },
  {
    category: "Links",
    items: [
      { name: "Standard Link", code: "[text](url)", template: "[[Google]](http://dev.nodeca.com)" },
      { name: "Link with Title", code: "[text](url 'title')", template: "[[link with title]](http://nodeca.github.io/pica/demo/ \"title text!\")" },
      { name: "Autoconverted Link", code: "https://...", template: "https://github.com/nodeca/pica" }
    ]
  },
  {
    category: "Images",
    items: [
      { name: "Minion Image", code: "![Minion](url)", template: "![Minion](https://octodex.github.com/images/minion.png)" },
      { name: "Stormtroopocat", code: "![Storm](url 't')", template: "![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg \"The Stormtroopocat\")" },
      { name: "Footnote Style Image", code: "![Alt][id]", template: "![Alt text][[id]]\n\n[id]: https://octodex.github.com/images/dojocat.jpg \"The Dojocat\"" }
    ]
  },
  {
    category: "Extended Plugins",
    items: [
      { name: "Emoji (Classic)", code: ":smile:", template: ":smile:" },
      { name: "Emoji (Shortcut)", code: ":-)", template: ":-)" },
      { name: "Subscript", code: "H~2~O", template: "H~2~O" },
      { name: "Superscript", code: "19^th^", template: "19^th^" },
      { name: "Inserted text (<ins>)", code: "++text++", template: "++[Inserted text]++" },
      { name: "Marked text (<mark>)", code: "==text==", template: "==[Marked text]==" },
      { name: "Footnotes", code: "[^1] / [^1]:", template: "Footnote 1 link[^first].\nFootnote 2 link[^second].\n\n[^first]: Footnote **can have markup**\n[^second]: Footnote text." },
      { name: "Definition Lists", code: "Term\n: Def", template: "Term 1\n\n:   [Definition 1 details]\n\nTerm 2\n\n:   Definition 2" },
      { name: "Abbreviations", code: "*[HTML]:...", template: "This is HTML abbreviation example.\n\n*[HTML]: Hyper Text Markup Language" },
      { name: "Custom Container", code: "::: warning", template: "::: warning\n*[here be dragons]*\n:::\n" }
    ]
  },
  {
    category: "Typographic replacements",
    items: [
      { name: "Symbols", code: "(c) (tm) +-", template: "(c) (C) (r) (R) (tm) (TM) +-" },
      { name: "Ellipses", code: "...", template: "test.. test... test....." },
      { name: "Smart Quotes", code: "\"text\" 'text'", template: "\"Smartypants, double quotes\" and 'single quotes'" }
    ]
  }
];

// Database of Templates (Category-based)
const TEMPLATES_DATABASE = [
  // PROFILE
  {
    id: "profile-developer",
    title: "Developer GitHub Profile",
    desc: "Professional GitHub profile README with badges, tech stack, and stats.",
    type: "profile",
    content: `# Hi there, I'm [Your Name] 👋

[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-blue?style=flat-square&logo=google-chrome)](https://yoursite.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=flat-square&logo=linkedin)](https://linkedin.com/in/yourhandle)
[![Twitter](https://img.shields.io/badge/Twitter-Follow-1DA1F2?style=flat-square&logo=twitter)](https://twitter.com/yourhandle)

> 💻 Full-Stack Developer | 🚀 Open Source Contributor | 📚 Lifelong Learner

## 🛠️ Tech Stack

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

## 📊 GitHub Stats

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=yourusername&show_icons=true&theme=tokyonight&hide_border=true)
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=yourusername&layout=compact&theme=tokyonight&hide_border=true)

## 📌 Featured Projects

| Project | Description | Stars |
|---------|-------------|-------|
| [AwesomeApp](https://github.com/you/awesomeapp) | Full-stack web application | ⭐ 120 |
| [CLI Tool](https://github.com/you/clitool) | Productivity CLI for developers | ⭐ 80 |

## 💬 About Me

- 🔭 Currently working on **[current project]**
- 🌱 Learning **[technology]**
- 💡 Ask me about **React, Node.js, and System Design**
- 📫 Reach me at **your@email.com**
`
  },
  {
    id: "profile-student",
    title: "Student / Fresher Profile",
    desc: "Clean student profile README highlighting education, projects, and skills.",
    type: "profile",
    content: `# Hi, I'm [Your Name] 👋 — Computer Science Student

🎓 B.Tech | [University Name] | Class of 2025
📍 [City, Country] | 📧 [your@email.com]

## 🎯 Objective

Passionate computer science student seeking opportunities to apply programming knowledge and contribute to real-world software projects.

## 🎓 Education

| Degree | Institution | Year | GPA |
|--------|-------------|------|-----|
| B.Tech in CSE | [University] | 2021–2025 | 8.5/10 |
| Class XII | [School] | 2021 | 94% |

## 💻 Skills

- **Languages:** Python, Java, C++, JavaScript
- **Web:** HTML, CSS, React, Node.js basics
- **Databases:** MySQL, MongoDB basics
- **Tools:** Git, VS Code, Linux terminal

## 🚀 Projects

### 📦 [Project Name](https://github.com/you/project)
> Data analysis dashboard using Python and Pandas.
- Built with **React + Node.js**
- Features: user auth, real-time updates, REST API

## 📜 Certifications

- ✅ Python for Data Science — Coursera
- ✅ Web Development Bootcamp — Udemy

## 🌐 Connect

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=flat)](https://linkedin.com/in/yourhandle)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=flat&logo=github)](https://github.com/yourusername)
`
  },

  // SOFTWARE APPLICATION
  {
    id: "software-app",
    title: "Software Application README",
    desc: "Complete README for a desktop/web/mobile application with setup and usage.",
    type: "software",
    content: `# AppName — [One-Line Description]

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Build](https://img.shields.io/github/actions/workflow/status/you/repo/ci.yml?branch=main)
![License](https://img.shields.io/badge/license-MIT-green.svg)

> **AppName** is a [brief description — what does it do, who is it for?]

## ✨ Features

- ⚡ **Fast** — [performance claim]
- 🔒 **Secure** — [security aspect]
- 🎨 **Beautiful UI** — [design highlight]
- 🌐 **Cross-Platform** — Runs on Windows, macOS, and Linux

## 📦 Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/yourusername/appname.git
cd appname

# Install dependencies
npm install

# Start the application
npm start
\`\`\`

## ⚙️ Configuration

Create a \`.env\` file in the root directory:

\`\`\`env
APP_PORT=3000
APP_ENV=production
DATABASE_URL=postgresql://user:password@localhost:5432/appdb
API_SECRET_KEY=your_secret_key_here
\`\`\`

## 🚀 Usage

\`\`\`bash
npm run dev       # Development mode
npm run build     # Production build
npm test          # Run tests
npm run lint      # Lint code
\`\`\`

## 🗂️ Project Structure

\`\`\`
appname/
├── src/
│   ├── components/     # UI components
│   ├── services/       # Business logic
│   ├── utils/          # Utility functions
│   └── index.js        # Entry point
├── tests/
├── docs/
└── package.json
\`\`\`

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.
`
  },
  {
    id: "software-changelog",
    title: "Software Release Changelog",
    desc: "SemVer-based changelog following Keep a Changelog format.",
    type: "software",
    content: `# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added
- Feature in development

---

## [2.1.0] — 2026-07-07

### Added
- New dark mode with system preference detection
- Export to PDF functionality
- Keyboard shortcut overlay (press \`?\`)

### Changed
- Improved performance of large document rendering by 40%
- Migrated authentication from JWT to session tokens

### Fixed
- Fixed line number misalignment during scroll (#142)
- Resolved LocalStorage quota exceeded error (#137)

---

## [2.0.0] — 2026-05-15

### Breaking Changes
- Dropped support for Node.js < 16
- Renamed config key \`editor.theme\` to \`ui.colorScheme\`

### Added
- Full TypeScript support
- Plugin API v2 with lifecycle hooks

### Removed
- Removed deprecated \`importFile()\` method

---

## [1.0.0] — 2026-01-01

### Added
- Initial public release
- Core markdown editor functionality
- Split-pane live preview
`
  },

  // OPEN SOURCE
  {
    id: "opensource-lib",
    title: "Open Source Library README",
    desc: "Full-featured README for an open-source library with badges and examples.",
    type: "opensource",
    content: `# library-name

[![npm version](https://img.shields.io/npm/v/library-name.svg)](https://www.npmjs.com/package/library-name)
[![Downloads](https://img.shields.io/npm/dm/library-name.svg)](https://www.npmjs.com/package/library-name)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![CI](https://github.com/org/library-name/workflows/CI/badge.svg)](https://github.com/org/library-name/actions)
[![Coverage](https://img.shields.io/codecov/c/github/org/library-name)](https://codecov.io/gh/org/library-name)

> A minimal, zero-dependency library for [what it does].

## Why library-name?

- 🪶 **Tiny** — < 2kB gzipped
- 🌳 **Tree-shakeable** — import only what you need
- 🔷 **TypeScript-first** — full type support out of the box
- ✅ **Battle-tested** — 100% test coverage

## Installation

\`\`\`bash
npm install library-name
# or
yarn add library-name
\`\`\`

## Quick Start

\`\`\`typescript
import { doSomething, configure } from 'library-name';

configure({ option: 'value' });
const result = doSomething('input');
console.log(result);
\`\`\`

## API Reference

### \`doSomething(input, options?)\`

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| \`input\` | \`string\` | — | The input to process |
| \`options.strict\` | \`boolean\` | \`false\` | Enable strict mode |
| \`options.timeout\` | \`number\` | \`5000\` | Timeout in ms |

**Returns:** \`Promise<Result>\`

## Contributing

1. Fork the repository
2. Create your branch: \`git checkout -b feat/my-feature\`
3. Commit: \`git commit -m 'feat: add my feature'\`
4. Push and open a Pull Request

## License

MIT © [Your Name](https://github.com/yourusername)
`
  },
  {
    id: "opensource-contributing",
    title: "CONTRIBUTING.md Guide",
    desc: "Comprehensive contributing guidelines for open-source projects.",
    type: "opensource",
    content: `# Contributing to [Project Name]

Thank you for considering contributing! 🎉

## Getting Started

\`\`\`bash
# Fork the repo, then:
git clone https://github.com/YOUR_USERNAME/project-name.git
cd project-name
npm install
\`\`\`

## How to Contribute

### 🐛 Reporting Bugs

Open an issue with:
- OS and version
- Steps to reproduce
- Expected vs actual behavior

### 💡 Suggesting Features

Open a feature request with:
- Use case description
- Proposed solution
- Alternatives considered

## Development Workflow

\`\`\`bash
git checkout -b feat/your-feature
npm run dev
npm test
npm run lint
\`\`\`

## Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

| Type | Description |
|------|-------------|
| \`feat\` | New feature |
| \`fix\` | Bug fix |
| \`docs\` | Documentation only |
| \`refactor\` | Code restructure |
| \`test\` | Adding tests |
| \`chore\` | Build process or tooling |

**Example:** \`feat: add dark mode support\`

## Pull Request Process

1. Update \`CHANGELOG.md\`
2. Ensure CI passes
3. Request review from a maintainer

**Thank you! ❤️**
`
  },

  // RESEARCH
  {
    id: "research-paper",
    title: "Research Paper README",
    desc: "Structured academic paper README with abstract, methodology, and citations.",
    type: "research",
    content: `# [Research Title]: A Study on [Topic]

**Authors:** [Author 1]¹, [Author 2]²
**Affiliations:** ¹[University], ²[University]
**Published:** [Conference/Journal], [Year]

[![Paper](https://img.shields.io/badge/Paper-PDF-red)](link-to-pdf)
[![Dataset](https://img.shields.io/badge/Dataset-Available-green)](link-to-dataset)
[![Code](https://img.shields.io/badge/Code-GitHub-black)](https://github.com/you/repo)

## 📋 Abstract

[2-4 sentence abstract. Summarize the problem, approach, key findings, and implications.]

## 🔬 Key Contributions

1. **[Contribution 1]** — [Description]
2. **[Contribution 2]** — [Description]
3. Open-source code and datasets

## 🏗️ Methodology

### Dataset

| Dataset | Size | Split (Train/Val/Test) | Source |
|---------|------|------------------------|--------|
| [Dataset A] | 50K samples | 80/10/10 | [Link] |

### Training Details

| Hyperparameter | Value |
|----------------|-------|
| Optimizer | AdamW (lr=3e-4) |
| Batch size | 128 |
| Epochs | 50 |
| Hardware | 4× NVIDIA A100 |

## 📈 Results

| Method | Accuracy | F1-Score |
|--------|----------|----------|
| Baseline | 78.4% | 0.762 |
| Prior SOTA | 83.2% | 0.821 |
| **Ours** | **87.6%** | **0.869** |

## 🛠️ Reproducing Results

\`\`\`bash
git clone https://github.com/you/research-repo
pip install -r requirements.txt
python train.py --config configs/main.yaml
python evaluate.py --checkpoint checkpoints/best.pt
\`\`\`

## 📚 Citation

\`\`\`bibtex
@inproceedings{authorname2026title,
  title     = {[Research Title]},
  author    = {Author, First and Author, Second},
  booktitle = {[Conference Name]},
  year      = {2026}
}
\`\`\`
`
  },
  {
    id: "research-dataset",
    title: "Research Dataset Card",
    desc: "Dataset card with schema, statistics, and usage instructions.",
    type: "research",
    content: `# [Dataset Name] — [Short Description]

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![HuggingFace](https://img.shields.io/badge/🤗-Dataset-yellow)](https://huggingface.co/datasets/)

## Overview

| Property | Value |
|----------|-------|
| **Size** | [N] samples |
| **Format** | JSON / CSV / Parquet |
| **Language** | English |
| **Task** | Classification / Regression |
| **License** | CC BY 4.0 |

## Data Structure

\`\`\`json
{
  "id": "sample_001",
  "text": "Input text or description",
  "label": 1,
  "metadata": {
    "source": "origin",
    "timestamp": "2026-07-07T12:00:00Z"
  }
}
\`\`\`

## Statistics

| Split | Size |
|-------|------|
| Train | 8,000 |
| Validation | 1,000 |
| Test | 1,000 |

## Usage

\`\`\`python
from datasets import load_dataset

dataset = load_dataset("org/dataset-name")
print(dataset["train"][0])
\`\`\`

## Known Limitations

- English-only, limited domain coverage
- Potential annotation bias in [specific area]

## Citation

\`\`\`bibtex
@dataset{authorname2026datasetname,
  author = {Author, First},
  title  = {[Dataset Name]},
  year   = {2026}
}
\`\`\`
`
  },

  // DEVOPS / IaC
  {
    id: "devops-iac",
    title: "Infrastructure as Code README",
    desc: "Infrastructure repo README with Terraform structure, deployment, and runbooks.",
    type: "devops",
    content: `# Infrastructure — [Project / Environment Name]

> Manages infrastructure for **[Project Name]** using Terraform + Ansible on AWS.

[![Terraform](https://img.shields.io/badge/Terraform-1.7-623CE4?logo=terraform)](https://www.terraform.io/)
[![Ansible](https://img.shields.io/badge/Ansible-2.16-EE0000?logo=ansible)](https://www.ansible.com/)
[![AWS](https://img.shields.io/badge/AWS-Deployed-FF9900?logo=amazon-aws)](https://aws.amazon.com/)

## 🗺️ Architecture Overview

\`\`\`
┌─────────────────────────────────────────────┐
│              AWS Region (us-east-1)          │
│                                             │
│  ┌──── VPC (10.0.0.0/16) ───────────────┐  │
│  │   Public Subnets     Private Subnets  │  │
│  │   ┌──────────┐      ┌─────────────┐  │  │
│  │   │   ALB    │─────▶│ ECS Cluster │  │  │
│  │   └──────────┘      └──────┬──────┘  │  │
│  │                     ┌──────▼──────┐  │  │
│  │                     │ RDS Postgres │  │  │
│  │                     └─────────────┘  │  │
│  └───────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
\`\`\`

## 📁 Repository Structure

\`\`\`
infrastructure/
├── terraform/
│   ├── modules/
│   │   ├── vpc/
│   │   ├── ecs/
│   │   ├── rds/
│   │   └── alb/
│   ├── environments/
│   │   ├── dev/
│   │   ├── staging/
│   │   └── prod/
│   └── main.tf
├── ansible/
│   ├── roles/
│   └── site.yml
└── scripts/
    ├── deploy.sh
    └── rollback.sh
\`\`\`

## 🚀 Getting Started

\`\`\`bash
brew install terraform
brew install awscli && aws configure

cd terraform/environments/dev
terraform init
terraform plan -out=plan.tfplan
terraform apply plan.tfplan
\`\`\`

## ⚙️ Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| \`AWS_ACCESS_KEY_ID\` | AWS access key | ✅ |
| \`TF_VAR_db_password\` | RDS master password | ✅ |
| \`TF_VAR_environment\` | Target env (dev/staging/prod) | ✅ |

## 📋 Runbooks

### Rolling Deployment
\`\`\`bash
./scripts/deploy.sh --env prod --version v1.2.0
\`\`\`

### Rollback
\`\`\`bash
./scripts/rollback.sh --env prod --version v1.1.0
\`\`\`

## 📊 Cost Estimates (Monthly)

| Resource | Instance | Cost |
|----------|----------|------|
| ECS Fargate | 2 vCPU, 4GB | ~$70 |
| RDS PostgreSQL | db.t3.medium | ~$45 |
| ALB | — | ~$20 |
| **Total** | | **~$135/mo** |
`
  },
  {
    id: "devops-cicd",
    title: "CI/CD Pipeline Documentation",
    desc: "Document GitHub Actions pipeline stages, environments, and rollback procedures.",
    type: "devops",
    content: `# CI/CD Pipeline Documentation

## Overview

This document describes the continuous integration and deployment pipeline for **[Project Name]**.

## Pipeline Stages

\`\`\`
Push → Lint → Build Image → Test Suite → Deploy Staging → Deploy Prod
\`\`\`

### 1. 🔍 Lint & Code Quality

\`\`\`yaml
lint:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - run: npm ci
    - run: npm run lint
    - run: npm run type-check
\`\`\`

### 2. 🏗️ Build & Push Docker Image

\`\`\`yaml
build:
  needs: lint
  steps:
    - run: docker build -t $IMAGE_NAME:$GITHUB_SHA .
    - run: docker push $IMAGE_NAME:$GITHUB_SHA
\`\`\`

### 3. 🧪 Test Suite

| Test Type | Framework | Coverage Threshold |
|-----------|-----------|-------------------|
| Unit | Jest | 80% |
| Integration | Supertest | 70% |
| E2E | Playwright | Key flows |

### 4. 🚀 Deployment

| Branch | Environment | Auto-Deploy |
|--------|-------------|-------------|
| \`develop\` | Staging | ✅ Yes |
| \`main\` | Production | 🔐 Manual approval |

## Environments

| Environment | URL | Cluster |
|-------------|-----|---------|
| Staging | https://staging.app.com | ECS staging |
| Production | https://app.com | ECS prod |

## Rollback Procedure

1. Identify the last stable image tag
2. Trigger rollback: \`Actions → Rollback → Run workflow\`
3. Monitor metrics for 15 minutes
4. File post-incident report within 24 hours
`
  },

  // ML / AI
  {
    id: "ml-model",
    title: "ML / AI Model Card",
    desc: "Model card for a machine learning or AI model with training details and evaluation.",
    type: "ml",
    content: `# [Model Name] — [Task Description]

[![HuggingFace](https://img.shields.io/badge/🤗-Model_Card-yellow)](https://huggingface.co/org/model)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)

## Model Card

| Property | Value |
|----------|-------|
| **Task** | Text Classification |
| **Architecture** | BERT-base |
| **Parameters** | 125M |
| **Training Data** | [Dataset Name] |
| **Languages** | English |
| **License** | Apache 2.0 |

## Intended Use

**Primary use:** [Describe the primary intended use]

**Out-of-scope uses:**
- Not for high-stakes decisions without human review
- Not suitable for non-English tasks

## Quick Start

\`\`\`bash
pip install transformers torch
\`\`\`

\`\`\`python
from transformers import pipeline

classifier = pipeline("text-classification", model="org/model-name", device=0)
result = classifier("This product is amazing!")
print(result)
# [{'label': 'POSITIVE', 'score': 0.9998}]
\`\`\`

## Training Configuration

\`\`\`python
training_args = TrainingArguments(
    num_train_epochs=3,
    per_device_train_batch_size=16,
    learning_rate=2e-5,
    warmup_ratio=0.1,
    fp16=True,
)
\`\`\`

## Evaluation Results

| Dataset | Accuracy | F1 |
|---------|----------|----|
| Test Set | 92.4% | 0.921 |
| Benchmark A | 89.1% | 0.887 |

## Bias & Limitations

- Known biases from training data composition
- Performance drops ~5% on [specific domain]
- Best performance on inputs ≤ 256 tokens

## Citation

\`\`\`bibtex
@article{authorname2026modelname,
  title   = {[Model Name]: [Paper Title]},
  author  = {Author, First and Author, Second},
  year    = {2026}
}
\`\`\`
`
  },
  {
    id: "ml-experiment",
    title: "ML Experiment Log",
    desc: "Track ML experiments, hyperparameters, results, and learnings.",
    type: "ml",
    content: `# ML Experiment Log — [Project Name]

**Goal:** [What are you trying to achieve?]
**Researcher:** [Your Name]
**Start Date:** 2026-07-07

---

## Experiment #001 — Baseline

**Date:** 2026-07-07 | **Status:** ✅ Complete

### Configuration

\`\`\`yaml
model: bert-base-uncased
task: text-classification
batch_size: 32
learning_rate: 2e-5
epochs: 3
optimizer: AdamW
\`\`\`

### Results

| Metric | Train | Validation | Test |
|--------|-------|-----------|------|
| Loss | 0.183 | 0.241 | 0.257 |
| Accuracy | 94.2% | 87.3% | 86.8% |
| F1 | 0.941 | 0.871 | 0.865 |

### Observations

- Model converges by epoch 2
- Slight overfitting (train/val gap ~7%)
- Class 3 has lowest recall (0.72)

---

## Experiment #002 — Increased Regularization

**Date:** 2026-07-08 | **Status:** 🔄 In Progress

### Changes from #001

- Dropout: 0.1 → 0.3
- Added label smoothing (0.1)
- Reduced learning rate: 2e-5 → 1e-5

### Results

| Metric | Validation | Δ vs #001 |
|--------|-----------|-----------|
| Accuracy | 89.1% | **+1.8%** ✅ |

---

## Summary

| Experiment | Val Accuracy | Notes |
|-----------|--------------|-------|
| #001 Baseline | 87.3% | Overfitting |
| #002 Regularized | 89.1% | Better |
| #003 [Planned] | TBD | Data augmentation |

## TODO

- [ ] Try data augmentation
- [ ] Experiment with RoBERTa-large
- [ ] Error analysis on Class 3
`
  },

  // API & WEB SERVICE
  {
    id: "api-rest",
    title: "REST API Reference",
    desc: "Comprehensive REST API documentation with endpoints, auth, and response examples.",
    type: "api",
    content: `# [Project Name] API Reference

**Version:** v1.0  |  **Base URL:** \`https://api.example.com/v1\`

[![API Status](https://img.shields.io/badge/API-Online-brightgreen)](https://status.example.com)
[![OpenAPI](https://img.shields.io/badge/OpenAPI-3.0-6BA539)](openapi.yaml)

## 🔐 Authentication

\`\`\`http
Authorization: Bearer YOUR_API_TOKEN
Content-Type: application/json
\`\`\`

## 📋 Endpoints

### List Documents

\`\`\`http
GET /documents?page=1&limit=20
\`\`\`

**Response \`200 OK\`**

\`\`\`json
{
  "status": "success",
  "data": {
    "documents": [
      {
        "id": "doc_abc123",
        "title": "My Document",
        "word_count": 342,
        "created_at": "2026-07-07T10:30:00Z"
      }
    ],
    "pagination": { "page": 1, "total": 145 }
  }
}
\`\`\`

### Create Document

\`\`\`http
POST /documents
\`\`\`

\`\`\`json
{
  "title": "New Document",
  "content": "# Hello World\\n\\nMarkdown content.",
  "tags": ["tutorial"]
}
\`\`\`

### Get / Update / Delete Document

\`\`\`http
GET    /documents/{id}
PATCH  /documents/{id}
DELETE /documents/{id}
\`\`\`

## ❌ Error Codes

| Status | Code | Meaning |
|--------|------|---------|
| 400 | \`INVALID_PARAMS\` | Missing or malformed parameters |
| 401 | \`UNAUTHORIZED\` | Invalid or missing token |
| 404 | \`NOT_FOUND\` | Resource does not exist |
| 429 | \`RATE_LIMITED\` | Too many requests |
| 500 | \`SERVER_ERROR\` | Internal server error |

## ⏱️ Rate Limits

| Plan | Requests/min | Requests/day |
|------|-------------|--------------|
| Free | 60 | 1,000 |
| Pro | 600 | 50,000 |
| Enterprise | Custom | Unlimited |
`
  },
  {
    id: "api-graphql",
    title: "GraphQL API Documentation",
    desc: "GraphQL schema docs with queries, mutations, and subscriptions.",
    type: "api",
    content: `# [Project] GraphQL API

**Endpoint:** \`https://api.example.com/graphql\`
**Playground:** \`https://api.example.com/graphql/playground\`

## Authentication

\`\`\`
Authorization: Bearer <token>
\`\`\`

## Schema Types

\`\`\`graphql
type Document {
  id: ID!
  title: String!
  content: String!
  wordCount: Int!
  author: User!
  createdAt: DateTime!
}

type User {
  id: ID!
  name: String!
  email: String!
}
\`\`\`

## Queries

\`\`\`graphql
query GetDocuments($first: Int, $after: String) {
  documents(first: $first, after: $after) {
    edges {
      node { id title wordCount createdAt }
    }
    pageInfo { hasNextPage endCursor }
    totalCount
  }
}
\`\`\`

## Mutations

\`\`\`graphql
mutation CreateDocument($input: CreateDocumentInput!) {
  createDocument(input: $input) {
    document { id title createdAt }
    errors { field message }
  }
}
\`\`\`

**Variables:**
\`\`\`json
{
  "input": {
    "title": "New Document",
    "content": "# Hello\\n\\nMarkdown.",
    "tags": ["tutorial"]
  }
}
\`\`\`

## Subscriptions

\`\`\`graphql
subscription OnDocumentUpdated($id: ID!) {
  documentUpdated(id: $id) {
    id content updatedAt
  }
}
\`\`\`
`
  },

  // INTERNAL PROJECT / FOLDER
  {
    id: "internal-project",
    title: "Internal Project / Team README",
    desc: "Internal documentation with onboarding, contacts, and team conventions.",
    type: "internal",
    content: `# [Project Name] — Internal Documentation

> 🔒 **Internal Use Only** — Do not share outside [Company Name]

**Team:** [Team Name]
**Slack:** [#channel-name](https://slack.com)
**Jira:** [PROJ Board](https://jira.company.com/projects/PROJ)

---

## 🎯 Project Overview

**What is it?** [1-2 sentence description and business value.]

**Stakeholders:**

| Role | Name | Contact |
|------|------|---------|
| Product Manager | [Name] | @slack-handle |
| Tech Lead | [Name] | @slack-handle |
| QA Lead | [Name] | @slack-handle |

## 🚀 Onboarding Checklist

- [ ] Get GitHub access to this repo
- [ ] Join Slack channels: #[project], #deployments
- [ ] Set up local dev environment (see below)
- [ ] Complete security training
- [ ] Review architecture diagram

## 🛠️ Local Setup

\`\`\`bash
git clone https://github.com/company/project-name.git
cd project-name
cp .env.example .env   # Ask Tech Lead for values
npm install
docker-compose up -d
npm run dev
\`\`\`

**Dev:** http://localhost:3000

## 📐 Conventions

- **Branches:** \`feat/PROJ-123-short-description\`
- **Commits:** [Conventional Commits](https://conventionalcommits.org)
- **PRs:** 2 approvals + CI green
- **Formatter:** Prettier | **Linter:** ESLint

## 🚦 Deployments

| Environment | Branch | URL | Trigger |
|-------------|--------|-----|---------|
| Dev | \`develop\` | dev.internal.company.com | Push |
| Staging | \`main\` | staging.company.com | PR merge |
| Production | \`main\` | app.company.com | Manual |

## 📊 Monitoring

| Tool | Purpose | Link |
|------|---------|------|
| DataDog | APM + Metrics | [Dashboard](https://datadoghq.com) |
| PagerDuty | Alerts | [Incidents](https://pagerduty.com) |
| Sentry | Error tracking | [Project](https://sentry.io) |
`
  },
  {
    id: "internal-runbook",
    title: "Operational Runbook",
    desc: "Step-by-step runbook for common operational tasks and incident response.",
    type: "internal",
    content: `# Operational Runbook — [Service Name]

> **Owner:** [Team] | **Last Updated:** 2026-07-07

## 📞 Escalation Path

| Level | Who | When |
|-------|-----|------|
| L1 | On-call Engineer | First 15 min |
| L2 | Tech Lead | After 15 min |
| L3 | Engineering Manager | After 30 min |

---

## 🚨 Incident Procedures

### High CPU Usage (>90%)

\`\`\`bash
# Check CPU usage
aws cloudwatch get-metric-statistics \\
  --namespace AWS/ECS --metric-name CPUUtilization \\
  --period 300 --statistics Average

# Scale up service
aws ecs update-service \\
  --cluster prod-cluster \\
  --service api-service \\
  --desired-count 4
\`\`\`

### Database Connection Exhaustion

\`\`\`sql
-- Check active connections
SELECT count(*) FROM pg_stat_activity;

-- Kill idle connections
SELECT pg_terminate_backend(pid)
FROM pg_stat_activity
WHERE state = 'idle'
AND query_start < NOW() - INTERVAL '5 minutes';
\`\`\`

### Service Completely Down

\`\`\`bash
# Check ECS task status
aws ecs describe-services --cluster prod-cluster --services api-service

# Rollback to previous deployment
./scripts/rollback.sh --service api-service --steps 1
\`\`\`

---

## 📝 Post-Incident Template

**Date:** [Date] | **Duration:** [X hours] | **Severity:** P[1/2/3]

### Timeline

| Time (UTC) | Event |
|-----------|-------|
| HH:MM | Alert triggered |
| HH:MM | Root cause identified |
| HH:MM | Service restored |

### Root Cause

[Description of what caused the incident]

### Action Items

| Action | Owner | Due Date |
|--------|-------|----------|
| [Fix] | @engineer | [Date] |
`
  }
];

// Autocomplete Recommendation Databases
const EMOJI_RECOMMENDATIONS = [
  { value: 'smile', value_to_insert: '😊', desc: '😊 smile' },
  { value: 'wink', value_to_insert: '😉', desc: '😉 wink' },
  { value: 'cry', value_to_insert: '😢', desc: '😢 cry' },
  { value: 'laughing', value_to_insert: '😆', desc: '😆 laughing' },
  { value: 'yum', value_to_insert: '😋', desc: '😋 yum' },
  { value: 'rocket', value_to_insert: '🚀', desc: '🚀 rocket' },
  { value: 'heart', value_to_insert: '❤️', desc: '❤️ heart' },
  { value: 'checkered_flag', value_to_insert: '🏁', desc: '🏁 flag' },
  { value: 'smile_emoticon', value_to_insert: ':-)', desc: ':-) emoticon' },
  { value: 'frown_emoticon', value_to_insert: ':-(', desc: ':-( emoticon' },
  { value: 'cool_emoticon', value_to_insert: '8-)', desc: '8-) emoticon' },
  { value: 'wink_emoticon', value_to_insert: ';)', desc: ';) emoticon' }
];

const HEADING_RECOMMENDATIONS = [
  { value: '# ', desc: '# Heading 1' },
  { value: '## ', desc: '## Heading 2' },
  { value: '### ', desc: '### Heading 3' },
  { value: '#### ', desc: '#### Heading 4' },
  { value: '##### ', desc: '##### Heading 5' },
  { value: '###### ', desc: '###### Heading 6' }
];

const LINK_RECOMMENDATIONS = [
  { value: '[]()', desc: 'Link [text](url)', offset: 1 },
  { value: '[]( "title")', desc: 'Title Link [text](url "title")', offset: 1 },
  { value: '![]()', desc: 'Image ![alt](url)', offset: 2 },
  { value: '![][id]', desc: 'Ref Image ![alt][id]', offset: 2 }
];

const CONTAINER_RECOMMENDATIONS = [
  { value: '::: warning\n\n:::', desc: '::: warning', offset: 12 },
  { value: '::: info\n\n:::', desc: '::: info', offset: 9 },
  { value: '::: note\n\n:::', desc: '::: note', offset: 9 }
];

// --- Caret Position coordinates helper ---
// Returns caret offset {top, left} relative to textarea element
function getCaretCoordinates(element, position) {
  const div = document.createElement('div');
  const style = window.getComputedStyle(element);
  
  const properties = [
    'direction', 'boxSizing', 'width', 'height', 'overflowX', 'overflowY',
    'borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth',
    'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',
    'fontStyle', 'fontVariant', 'fontWeight', 'fontStretch', 'fontSize',
    'lineHeight', 'fontFamily', 'textAlign', 'textTransform', 'textIndent', 'textDecoration',
    'letterSpacing', 'wordSpacing', 'tabSize', 'whiteSpace', 'wordBreak'
  ];
  
  properties.forEach(prop => {
    div.style[prop] = style[prop];
  });
  
  div.style.position = 'absolute';
  div.style.visibility = 'hidden';
  div.style.whiteSpace = 'pre-wrap';
  div.style.wordWrap = 'break-word';
  
  const content = element.value.substring(0, position);
  div.textContent = content;
  
  const span = document.createElement('span');
  span.textContent = element.value.substring(position) || '.';
  div.appendChild(span);
  
  document.body.appendChild(div);
  
  const spanRect = span.getBoundingClientRect();
  const divRect = div.getBoundingClientRect();
  
  const top = spanRect.top - divRect.top + element.offsetTop - element.scrollTop;
  const left = spanRect.left - divRect.left + element.offsetLeft - element.scrollLeft;
  
  document.body.removeChild(div);
  
  return { top, left };
}

// --- INITIALIZATION ---
window.addEventListener('DOMContentLoaded', () => {
  initApp();
});

const initApp = () => {
  // Load local draft
  const draft = localStorage.getItem('md_writer_draft');
  if (draft !== null) {
    textarea.value = draft;
  } else {
    // Default initial template
    textarea.value = TEMPLATES_DATABASE[0].content;
  }
  
  // Set default theme
  const savedTheme = localStorage.getItem('md_writer_theme') || 'dark';
  setTheme(savedTheme);

  // Initialize Line Numbers
  updateLineNumbers();

  // Initialize Preview
  updatePreview();

  // Populate Cheat Sheet Sidebar
  renderCheatSheet(CHEAT_SHEET_ITEMS);

  // Dynamically create and append Autocomplete Popup
  createAutocompletePopup();

  // Set up Event Listeners
  setupEventListeners();

  // Save the starting clean page history state
  saveHistoryState(textarea.value, 0, 0);

  statusMessage.textContent = "Ready";
};

// Create the Autocomplete DOM element
const createAutocompletePopup = () => {
  const popup = document.createElement('div');
  popup.id = 'autocomplete-popup';
  popup.className = 'autocomplete-popup';
  
  // Append inside the textarea's input area container for local positioning context
  document.querySelector('.editor-input-area').appendChild(popup);
};

// --- EVENTS ---
const setupEventListeners = () => {
  // Textarea input syncs
  textarea.addEventListener('input', () => {
    updatePreview();
    updateLineNumbers();
    triggerAutosave();
    handleAutocompleteSearch();
    recordTypingState();
  });

  textarea.addEventListener('scroll', () => {
    lineNumbers.scrollTop = textarea.scrollTop;
    hideAutocomplete();
  });

  textarea.addEventListener('click', () => {
    hideAutocomplete();
  });

  // Textarea key listener for Autocomplete Navigation
  textarea.addEventListener('keydown', (e) => {
    const popup = document.getElementById('autocomplete-popup');
    if (popup && popup.style.display === 'block') {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        navigateAutocomplete(1);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        navigateAutocomplete(-1);
      } else if (e.key === 'Enter' || e.key === 'Tab') {
        e.preventDefault();
        selectAutocompleteItem();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        hideAutocomplete();
      }
    }
  });

  // WYSIWYG edits sync
  wysiwygEditor.addEventListener('input', () => {
    if (currentEditorMode === 'wysiwyg') {
      const html = wysiwygEditor.innerHTML;
      const md = turndownService.turndown(html);
      textarea.value = md;
      triggerAutosave();
    }
  });

  // Mode select buttons
  modeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const mode = btn.dataset.mode;
      switchEditorMode(mode);
    });
  });

  // Formatting Toolbar Buttons
  formatButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const format = btn.dataset.format;
      if (format) {
        applyFormatting(format);
      }
    });
  });

  btnUndo.addEventListener('click', (e) => {
    e.preventDefault();
    performUndo();
  });

  btnRedo.addEventListener('click', (e) => {
    e.preventDefault();
    performRedo();
  });

  // Header button click operations
  btnNew.addEventListener('click', (e) => {
    e.preventDefault();
    showConfirmModal(() => {
      textarea.value = "";
      wysiwygEditor.innerHTML = "";
      
      saveHistoryState(textarea.value, 0, 0);
      
      updatePreview();
      updateLineNumbers();
      triggerAutosave();
      statusMessage.textContent = "New document created";
    });
  });

  btnTemplates.addEventListener('click', (e) => {
    e.preventDefault();
    openTemplatesModal();
  });

  btnThemeToggle.addEventListener('click', (e) => {
    e.preventDefault();
    const activeTheme = document.body.classList.contains('light-theme') ? 'dark' : 'light';
    setTheme(activeTheme);
  });

  btnToggleSidebar.addEventListener('click', (e) => {
    e.preventDefault();
    toggleSidebar();
  });
  btnCloseSidebar.addEventListener('click', (e) => {
    e.preventDefault();
    toggleSidebar();
  });

  // Cheat sheet search input
  cheatSearch.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    filterCheatSheet(q);
  });

  // Export & Copy - Executed instantly
  document.getElementById('btn-copy-code').addEventListener('click', (e) => {
    e.preventDefault();
    const code = textarea.value;
    navigator.clipboard.writeText(code).then(() => {
      statusMessage.textContent = "Markdown code copied to clipboard";
      showToast("Code Copied!");
    });
  });

  document.getElementById('btn-export-md').addEventListener('click', (e) => {
    e.preventDefault();
    const code = textarea.value;
    const blob = new Blob([code], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'document.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    statusMessage.textContent = "Downloaded document.md";
  });

  // Template tabs switcher
  templateTabs.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      templateTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterTemplatesList(btn.dataset.tab);
    });
  });

  // Modal Confirm Action Binder
  document.getElementById('btn-confirm-action').addEventListener('click', (e) => {
    e.preventDefault();
    closeModal('modal-confirm');
    if (pendingConfirmCallback) {
      pendingConfirmCallback();
      pendingConfirmCallback = null;
    }
  });
};

// --- CORE UTILS ---
const setTheme = (theme) => {
  if (theme === 'light') {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
    themeSun.style.display = 'none';
    themeMoon.style.display = 'block';
  } else {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    themeSun.style.display = 'block';
    themeMoon.style.display = 'none';
  }
  localStorage.setItem('md_writer_theme', theme);
};

const updatePreview = () => {
  const markdown = textarea.value;
  const cleanMarkdown = replaceEmojiTokens(markdown);
  const renderedHtml = marked.parse(cleanMarkdown);
  previewOutput.innerHTML = renderedHtml;

  // Update stat counters
  updateStats(markdown);
};

const updateLineNumbers = () => {
  const lines = textarea.value.split('\n').length;
  let numbers = '';
  for (let i = 1; i <= lines; i++) {
    numbers += `${i}\n`;
  }
  lineNumbers.textContent = numbers;
};

const updateStats = (text) => {
  const cleanText = text.trim();
  const wordCount = cleanText ? cleanText.split(/\s+/).filter(w => !w.startsWith('#') && !w.startsWith('-') && !w.startsWith('*')).length : 0;
  const charCount = text.length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  wordCountEl.textContent = wordCount;
  charCountEl.textContent = charCount;
  readTimeEl.textContent = readingTime;
};

const triggerAutosave = () => {
  statusIndicator.classList.add('saving');
  statusMessage.textContent = "Drafting edits...";
  
  if (autosaveTimer) clearTimeout(autosaveTimer);
  autosaveTimer = setTimeout(() => {
    localStorage.setItem('md_writer_draft', textarea.value);
    statusIndicator.classList.remove('saving');
    statusMessage.textContent = "Draft auto-saved locally";
  }, 1000);
};

// --- SIDEBAR DRAWERS ---
const toggleSidebar = () => {
  sidebar.classList.toggle('collapsed');
  btnToggleSidebar.classList.toggle('active');
};

const renderCheatSheet = (sections) => {
  cheatSheetContent.innerHTML = '';
  sections.forEach(sec => {
    const secEl = document.createElement('div');
    secEl.className = 'cheat-section';
    
    const titleEl = document.createElement('div');
    titleEl.className = 'cheat-section-title';
    titleEl.innerHTML = `<span>${sec.category}</span>`;
    secEl.appendChild(titleEl);
    
    const itemsContainer = document.createElement('div');
    itemsContainer.className = 'cheat-section-items';
    
    sec.items.forEach(item => {
      const escapedCode = item.code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      const escapedName = item.name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      
      const rowEl = document.createElement('div');
      rowEl.className = 'cheat-row';
      // Store raw template in data attribute for floating tooltip
      rowEl.dataset.template = item.template;
      rowEl.innerHTML = `
        <div class="cheat-label">${escapedName}</div>
        <div class="cheat-code" title="${item.code}">${escapedCode}</div>
        <button class="cheat-insert-btn" title="Insert syntax">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        </button>
      `;
      
      rowEl.querySelector('.cheat-insert-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentEditorMode === 'wysiwyg') {
          const html = marked.parse(item.template);
          insertHTMLWYSIWYG(html);
        } else {
          insertMarkdownAtCursor(item.template);
        }
        showToast("Syntax Injected!");
      });

      // Floating tooltip: direct mouseenter/mouseleave on the row
      rowEl.addEventListener('mouseenter', () => {
        showFloatingTooltip(rowEl, item.template);
      });
      rowEl.addEventListener('mouseleave', () => {
        hideFloatingTooltip();
      });
      
      itemsContainer.appendChild(rowEl);
    });
    
    secEl.appendChild(itemsContainer);
    cheatSheetContent.appendChild(secEl);
  });
};

const filterCheatSheet = (query) => {
  const sections = document.querySelectorAll('.cheat-section');
  sections.forEach(sec => {
    let visibleRows = 0;
    const rows = sec.querySelectorAll('.cheat-row');
    rows.forEach(row => {
      const name = row.querySelector('.cheat-label').textContent.toLowerCase();
      const code = row.querySelector('.cheat-code').textContent.toLowerCase();
      if (name.includes(query) || code.includes(query)) {
        row.style.display = 'flex';
        visibleRows++;
      } else {
        row.style.display = 'none';
      }
    });

    sec.style.display = visibleRows > 0 ? 'block' : 'none';
  });
};

// --- AUTOCOMPLETE RECOMMENDATIONS ENGINE ---
const handleAutocompleteSearch = () => {
  const text = textarea.value;
  const caretPos = textarea.selectionStart;
  
  if (caretPos === 0) {
    hideAutocomplete();
    return;
  }

  // Find the content of the current line up to the caret
  const lineStartPos = text.lastIndexOf('\n', caretPos - 1) + 1;
  const currentLineToCaret = text.substring(lineStartPos, caretPos);
  
  // Find the last word typed
  const words = currentLineToCaret.split(/\s+/);
  const lastWord = words[words.length - 1];

  let matches = [];
  let trigger = null;

  // 1. Emoji trigger (typing a word starting with ':')
  if (lastWord.startsWith(':')) {
    trigger = 'emoji';
    const query = lastWord.slice(1).toLowerCase();
    matches = EMOJI_RECOMMENDATIONS.filter(item => item.value.toLowerCase().includes(query));
  }
  // 2. Heading trigger (typing '#' at start of line)
  else if (currentLineToCaret === '#' || (currentLineToCaret.startsWith('#') && currentLineToCaret.match(/^#+$/))) {
    trigger = 'heading';
    matches = HEADING_RECOMMENDATIONS;
  }
  // 3. Link/Image bracket trigger (typing '[')
  else if (lastWord === '[') {
    trigger = 'link';
    matches = LINK_RECOMMENDATIONS;
  }
  // 4. Custom container trigger (typing ':::')
  else if (lastWord === ':::') {
    trigger = 'container';
    matches = CONTAINER_RECOMMENDATIONS;
  }

  if (matches.length > 0) {
    autocompleteActiveTrigger = trigger;
    currentAutocompleteMatches = matches;
    activeAutocompleteIndex = 0;
    showAutocomplete(caretPos);
  } else {
    hideAutocomplete();
  }
};

const showAutocomplete = (caretPos) => {
  const popup = document.getElementById('autocomplete-popup');
  if (!popup) return;

  // Calculate pixel coordinates of cursor
  const coords = getCaretCoordinates(textarea, caretPos);
  
  // Align popup just below caret line
  // Offset by 48px to account for the width of line-numbers panel
  popup.style.top = `${coords.top + 20}px`;
  popup.style.left = `${coords.left + 48}px`; 
  popup.style.display = 'block';

  renderAutocompleteList();
};

const renderAutocompleteList = () => {
  const popup = document.getElementById('autocomplete-popup');
  if (!popup) return;

  popup.innerHTML = '';
  currentAutocompleteMatches.forEach((item, index) => {
    const itemEl = document.createElement('div');
    itemEl.className = `autocomplete-item ${index === activeAutocompleteIndex ? 'active' : ''}`;
    itemEl.onclick = () => {
      activeAutocompleteIndex = index;
      selectAutocompleteItem();
    };

    itemEl.innerHTML = `
      <span class="item-value">${item.desc}</span>
      <span class="item-desc">Press Enter</span>
    `;
    popup.appendChild(itemEl);
  });
};

const navigateAutocomplete = (direction) => {
  activeAutocompleteIndex += direction;
  if (activeAutocompleteIndex < 0) {
    activeAutocompleteIndex = currentAutocompleteMatches.length - 1;
  } else if (activeAutocompleteIndex >= currentAutocompleteMatches.length) {
    activeAutocompleteIndex = 0;
  }
  renderAutocompleteList();
  
  // Scroll list container to active item
  const popup = document.getElementById('autocomplete-popup');
  const activeItem = popup.children[activeAutocompleteIndex];
  if (activeItem) {
    popup.scrollTop = activeItem.offsetTop - (popup.clientHeight / 2);
  }
};

const selectAutocompleteItem = () => {
  const option = currentAutocompleteMatches[activeAutocompleteIndex];
  if (!option) return;

  const text = textarea.value;
  const caretPos = textarea.selectionStart;
  const lineStartPos = text.lastIndexOf('\n', caretPos - 1) + 1;
  const currentLineToCaret = text.substring(lineStartPos, caretPos);
  const words = currentLineToCaret.split(/\s+/);
  const lastWord = words[words.length - 1];

  let insertText = option.value;
  let replaceStart = caretPos;
  let newCaretPos = caretPos;

  if (autocompleteActiveTrigger === 'emoji') {
    // Replace trigger word (e.g. :smile) with matching emoji graphical character
    replaceStart = caretPos - lastWord.length;
    insertText = option.value_to_insert || `:${option.value}:`;
    textarea.value = text.substring(0, replaceStart) + insertText + text.substring(caretPos);
    newCaretPos = replaceStart + insertText.length;
  } 
  else if (autocompleteActiveTrigger === 'heading') {
    // Replace line segment with full heading markup
    replaceStart = lineStartPos;
    textarea.value = text.substring(0, replaceStart) + insertText + text.substring(caretPos);
    newCaretPos = replaceStart + insertText.length;
  }
  else if (autocompleteActiveTrigger === 'link') {
    // Replace opening brace '['
    replaceStart = caretPos - 1;
    textarea.value = text.substring(0, replaceStart) + insertText + text.substring(caretPos);
    newCaretPos = replaceStart + option.offset; // Place cursor inside link text brackets
  }
  else if (autocompleteActiveTrigger === 'container') {
    // Replace ':::'
    replaceStart = caretPos - 3;
    textarea.value = text.substring(0, replaceStart) + insertText + text.substring(caretPos);
    newCaretPos = replaceStart + option.offset;
  }

  textarea.focus();
  textarea.setSelectionRange(newCaretPos, newCaretPos);
  
  saveHistoryState(textarea.value, newCaretPos, newCaretPos);

  updatePreview();
  updateLineNumbers();
  triggerAutosave();
  hideAutocomplete();
};

const hideAutocomplete = () => {
  const popup = document.getElementById('autocomplete-popup');
  if (popup) {
    popup.style.display = 'none';
  }
  autocompleteActiveTrigger = null;
  currentAutocompleteMatches = [];
};

// --- EDITOR ENGINE & BIDIRECTIONAL SYNC ---
const switchEditorMode = (mode) => {
  if (mode === currentEditorMode) return;

  const paneMarkdown = document.getElementById('pane-markdown');
  const panePreview = document.getElementById('pane-preview');
  const paneWysiwyg = document.getElementById('pane-wysiwyg-container');

  if (currentEditorMode === 'wysiwyg' && (mode === 'split' || mode === 'editor')) {
    const html = wysiwygEditor.innerHTML;
    const md = turndownService.turndown(html);
    textarea.value = md;
    
    saveHistoryState(textarea.value, textarea.selectionStart, textarea.selectionEnd);

    updatePreview();
    updateLineNumbers();
  } else if ((currentEditorMode === 'split' || currentEditorMode === 'editor') && mode === 'wysiwyg') {
    const md = textarea.value;
    const cleanMd = replaceEmojiTokens(md);
    const html = marked.parse(cleanMd);
    wysiwygEditor.innerHTML = html;
  }

  if (mode === 'split') {
    editorContainer.className = 'editor-panes-container split-view';
    paneMarkdown.style.display = 'flex';
    panePreview.style.display = 'flex';
    paneWysiwyg.style.display = 'none';
  } else if (mode === 'editor') {
    editorContainer.className = 'editor-panes-container editor-only';
    paneMarkdown.style.display = 'flex';
    panePreview.style.display = 'none';
    paneWysiwyg.style.display = 'none';
  } else if (mode === 'wysiwyg') {
    editorContainer.className = 'editor-panes-container wysiwyg-only';
    paneMarkdown.style.display = 'none';
    panePreview.style.display = 'none';
    paneWysiwyg.style.display = 'flex';
  }

  modeBtns.forEach(b => {
    if (b.dataset.mode === mode) b.classList.add('active');
    else b.classList.remove('active');
  });

  currentEditorMode = mode;
  statusMessage.textContent = `Switched to ${mode.toUpperCase()} editor mode`;
};

const insertMarkdownAtCursor = (template) => {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const text = textarea.value;

  const placeholderRegex = /\[(.*?)\]/;
  const match = template.match(placeholderRegex);

  let insertion = template;
  let selectStart = start;
  let selectEnd = start;

  if (start !== end) {
    const selectedText = text.substring(start, end);
    if (match) {
      insertion = template.replace(placeholderRegex, selectedText);
      selectStart = start;
      selectEnd = start + insertion.length;
    } else {
      insertion = selectedText + template;
      selectStart = start;
      selectEnd = start + insertion.length;
    }
  } else {
    if (match) {
      const innerText = match[1];
      insertion = template.replace(placeholderRegex, innerText);
      const offset = template.indexOf(match[0]);
      selectStart = start + offset;
      selectEnd = selectStart + innerText.length;
    } else {
      selectStart = start + template.length;
      selectEnd = selectStart;
    }
  }

  textarea.value = text.substring(0, start) + insertion + text.substring(end);
  textarea.focus();
  textarea.setSelectionRange(selectStart, selectEnd);

  saveHistoryState(textarea.value, selectStart, selectEnd);

  updatePreview();
  updateLineNumbers();
  triggerAutosave();
};

const insertHTMLWYSIWYG = (html) => {
  wysiwygEditor.focus();
  const selection = window.getSelection();
  if (selection.getRangeAt && selection.rangeCount) {
    const range = selection.getRangeAt(0);
    range.deleteContents();

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const fragment = document.createDocumentFragment();
    let node;
    let lastNode;
    while ((node = tempDiv.firstChild)) {
      lastNode = fragment.appendChild(node);
    }
    range.insertNode(fragment);

    if (lastNode) {
      const nextRange = range.cloneRange();
      nextRange.setStartAfter(lastNode);
      nextRange.collapse(true);
      selection.removeAllRanges();
      selection.addRange(nextRange);
    }
  } else {
    wysiwygEditor.innerHTML += html;
  }
  wysiwygEditor.dispatchEvent(new Event('input'));
};

const applyFormatting = (format) => {
  if (currentEditorMode === 'wysiwyg') {
    wysiwygEditor.focus();
    switch (format) {
      case 'bold':
        document.execCommand('bold', false, null);
        break;
      case 'italic':
        document.execCommand('italic', false, null);
        break;
      case 'underline':
        document.execCommand('underline', false, null);
        break;
      case 'strikethrough':
        document.execCommand('strikeThrough', false, null);
        break;
      case 'h1':
        document.execCommand('formatBlock', false, '<h1>');
        break;
      case 'h2':
        document.execCommand('formatBlock', false, '<h2>');
        break;
      case 'h3':
        document.execCommand('formatBlock', false, '<h3>');
        break;
      case 'quote':
        document.execCommand('formatBlock', false, '<blockquote>');
        break;
      case 'link':
        const url = prompt("Enter hyperlink URL:");
        if (url) document.execCommand('createLink', false, url);
        break;
      case 'image':
        const imgUrl = prompt("Enter image source URL:");
        if (imgUrl) document.execCommand('insertImage', false, imgUrl);
        break;
      case 'code':
        insertHTMLWYSIWYG('<code>code</code>');
        break;
      case 'code-block':
        insertHTMLWYSIWYG('<pre><code>// Code block\n</code></pre>');
        break;
      case 'ul':
        document.execCommand('insertUnorderedList', false, null);
        break;
      case 'ol':
        document.execCommand('insertOrderedList', false, null);
        break;
      case 'table':
        tablePendingMode = 'wysiwyg';
        openTablePickerModal();
        break;
    }
  } else {
    switch (format) {
      case 'bold':
        insertMarkdownAtCursor('**[text]**');
        break;
      case 'italic':
        insertMarkdownAtCursor('*[text]*');
        break;
      case 'underline':
        insertMarkdownAtCursor('<u>[text]</u>');
        break;
      case 'strikethrough':
        insertMarkdownAtCursor('~~[text]~~');
        break;
      case 'h1':
        insertMarkdownAtCursor('# [Heading 1]\n');
        break;
      case 'h2':
        insertMarkdownAtCursor('## [Heading 2]\n');
        break;
      case 'h3':
        insertMarkdownAtCursor('### [Heading 3]\n');
        break;
      case 'quote':
        insertMarkdownAtCursor('> [Blockquote]\n');
        break;
      case 'link':
        const linkUrl = prompt("Enter hyperlink URL:", "https://");
        if (linkUrl !== null) {
          insertMarkdownAtCursor(`[[Link text]](${linkUrl})`);
        }
        break;
      case 'image':
        const imgLink = prompt("Enter image source URL:", "https://");
        if (imgLink !== null) {
          insertMarkdownAtCursor(`![[Image description]](${imgLink})`);
        }
        break;
      case 'code':
        insertMarkdownAtCursor('`[inline code]`');
        break;
      case 'code-block':
        insertMarkdownAtCursor('```javascript\n// [code block]\n```\n');
        break;
      case 'ul':
        insertMarkdownAtCursor('- [Bullet Item]\n');
        break;
      case 'ol':
        insertMarkdownAtCursor('1. [Ordered Item]\n');
        break;
      case 'table':
        tablePendingMode = 'markdown';
        openTablePickerModal();
        break;
    }
  }
};

// --- MODALS SYSTEM ---
const openModal = (id) => {
  document.getElementById(id).classList.add('active');
};

const closeModal = (id) => {
  document.getElementById(id).classList.remove('active');
};

window.closeModal = closeModal;

// Custom Confirmation Modal Trigger Helper
const showConfirmModal = (callback) => {
  pendingConfirmCallback = callback;
  openModal('modal-confirm');
};

// --- TEMPLATE SELECTION SYSTEM ---
const openTemplatesModal = () => {
  renderTemplatesGrid(TEMPLATES_DATABASE);
  openModal('modal-templates');
};

const renderTemplatesGrid = (templates) => {
  templatesGrid.innerHTML = '';
  if (templates.length === 0) {
    templatesGrid.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:40px;">No templates in this category yet.</p>';
    return;
  }
  const CATEGORY_LABELS = {
    profile: 'Profile', software: 'Software App', opensource: 'Open Source',
    research: 'Research', devops: 'DevOps / IaC', ml: 'ML / AI',
    api: 'API & Web', internal: 'Internal Docs'
  };
  const CATEGORY_COLORS = {
    profile: '#6366f1', software: '#0ea5e9', opensource: '#10b981',
    research: '#f59e0b', devops: '#ef4444', ml: '#8b5cf6',
    api: '#f97316', internal: '#64748b'
  };
  templates.forEach(tpl => {
    const card = document.createElement('div');
    card.className = 'template-card';
    card.onclick = () => selectTemplate(tpl.id);
    const color = CATEGORY_COLORS[tpl.type] || '#6366f1';
    const label = CATEGORY_LABELS[tpl.type] || tpl.type;
    card.innerHTML = `
      <div class="template-card-header">
        <h4>${tpl.title}</h4>
        <span class="badge" style="background:${color}22;color:${color};border:1px solid ${color}44;">${label}</span>
      </div>
      <p>${tpl.desc}</p>
      <button class="template-card-btn">Load Template</button>
    `;
    templatesGrid.appendChild(card);
  });
};

const filterTemplatesList = (category) => {
  if (category === 'all') {
    renderTemplatesGrid(TEMPLATES_DATABASE);
  } else {
    const filtered = TEMPLATES_DATABASE.filter(t => t.type === category);
    renderTemplatesGrid(filtered);
  }
};

const selectTemplate = (templateId) => {
  const template = TEMPLATES_DATABASE.find(t => t.id === templateId);
  if (!template) return;
  
  showConfirmModal(() => {
    textarea.value = template.content;
    
    saveHistoryState(textarea.value, 0, 0);

    updatePreview();
    updateLineNumbers();
    triggerAutosave();
    
    if (currentEditorMode === 'wysiwyg') {
      wysiwygEditor.innerHTML = marked.parse(template.content);
    }
    
    statusMessage.textContent = `Loaded template: ${template.title}`;
    showToast("Template Loaded!");
    closeModal('modal-templates');
  });
};

// Toast Notifications Helper
const showToast = (message) => {
  const toast = document.createElement('div');
  toast.style.position = 'fixed';
  toast.style.bottom = '40px';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.backgroundColor = '#10b981';
  toast.style.color = '#fff';
  toast.style.padding = '8px 16px';
  toast.style.borderRadius = '20px';
  toast.style.fontSize = '12px';
  toast.style.fontWeight = 'bold';
  toast.style.zIndex = '3000';
  toast.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
  toast.style.opacity = '0';
  toast.style.transition = 'opacity 0.25s ease';
  
  document.body.appendChild(toast);
  toast.textContent = message;
  
  setTimeout(() => {
    toast.style.opacity = '1';
  }, 50);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 250);
  }, 2000);
};

// =============================================
// FLOATING CHEAT SHEET TOOLTIP
// =============================================
const floatingTooltip = document.createElement('div');
floatingTooltip.id = 'cheat-floating-tooltip';
floatingTooltip.innerHTML = `
  <div class="tooltip-section-label tooltip-syntax-label">Syntax / Usage</div>
  <pre class="tooltip-body"></pre>
  <div class="tooltip-section-label tooltip-output-label" style="margin-top:10px;">Rendered Output</div>
  <div class="tooltip-rendered"></div>
`;
document.body.appendChild(floatingTooltip);

let tooltipHideTimer = null;

const showFloatingTooltip = (rowEl, templateText) => {
  if (tooltipHideTimer) clearTimeout(tooltipHideTimer);

  // Populate syntax section
  floatingTooltip.querySelector('.tooltip-body').textContent = templateText;

  // Populate rendered HTML section
  const rendered = floatingTooltip.querySelector('.tooltip-rendered');
  try {
    rendered.innerHTML = marked.parse(replaceEmojiTokens(templateText));
  } catch (e) {
    rendered.textContent = templateText;
  }

  const rect = rowEl.getBoundingClientRect();
  const tooltipW = 300;
  const viewportW = window.innerWidth;
  let left = rect.right + 12;
  if (left + tooltipW > viewportW - 8) {
    left = rect.left - tooltipW - 12;
  }
  let top = rect.top + rect.height / 2 - 50;
  if (top < 8) top = 8;
  const maxBottom = window.innerHeight - 8;
  if (top + 140 > maxBottom) top = maxBottom - 140;

  floatingTooltip.style.left = left + 'px';
  floatingTooltip.style.top = top + 'px';

  // Step 1: make it display:block but still opacity:0
  floatingTooltip.classList.remove('visible');
  floatingTooltip.classList.add('show');

  // Step 2: next frame — add .visible to trigger CSS transition
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      floatingTooltip.classList.add('visible');
    });
  });
};

const hideFloatingTooltip = () => {
  tooltipHideTimer = setTimeout(() => {
    floatingTooltip.classList.remove('visible');
    // Wait for the fade-out transition to finish, then hide
    setTimeout(() => {
      floatingTooltip.classList.remove('show');
    }, 200);
  }, 120);
};

// Tooltip event handling is now done via direct mouseenter/mouseleave
// attached to each .cheat-row inside renderCheatSheet() above.

// =============================================
// TABLE PICKER MODAL
// =============================================
const TABLE_GRID_COLS = 10;
const TABLE_GRID_ROWS = 8;

const openTablePickerModal = () => {
  // Build the grid if not already built
  const gridEl = document.getElementById('table-grid-picker');
  if (!gridEl.childElementCount) {
    for (let r = 1; r <= TABLE_GRID_ROWS; r++) {
      for (let c = 1; c <= TABLE_GRID_COLS; c++) {
        const cell = document.createElement('div');
        cell.className = 'table-grid-cell';
        cell.dataset.row = r;
        cell.dataset.col = c;
        gridEl.appendChild(cell);
      }
    }

    // Hover highlight
    gridEl.addEventListener('mouseover', (e) => {
      const cell = e.target.closest('.table-grid-cell');
      if (!cell) return;
      const hoverRow = parseInt(cell.dataset.row);
      const hoverCol = parseInt(cell.dataset.col);
      highlightTableGrid(hoverRow, hoverCol);
      tableSelectedRows = hoverRow;
      tableSelectedCols = hoverCol;
      document.getElementById('table-size-label').textContent = `${hoverCol} \u00d7 ${hoverRow}`;
      document.getElementById('table-cols-input').value = hoverCol;
      document.getElementById('table-rows-input').value = hoverRow;
    });

    // Click to confirm from grid
    gridEl.addEventListener('click', (e) => {
      const cell = e.target.closest('.table-grid-cell');
      if (!cell) return;
      confirmTableInsert();
    });
  }

  // Reset state
  tableSelectedCols = 3;
  tableSelectedRows = 3;
  document.getElementById('table-size-label').textContent = '3 \u00d7 3';
  document.getElementById('table-cols-input').value = 3;
  document.getElementById('table-rows-input').value = 3;
  highlightTableGrid(3, 3);
  openModal('modal-table-picker');
};

const highlightTableGrid = (maxRow, maxCol) => {
  const cells = document.querySelectorAll('.table-grid-cell');
  cells.forEach(cell => {
    const r = parseInt(cell.dataset.row);
    const c = parseInt(cell.dataset.col);
    cell.classList.toggle('highlighted', r <= maxRow && c <= maxCol);
  });
};

const confirmTableInsert = () => {
  const cols = parseInt(document.getElementById('table-cols-input').value, 10) || tableSelectedCols;
  const rows = parseInt(document.getElementById('table-rows-input').value, 10) || tableSelectedRows;
  if (isNaN(cols) || isNaN(rows) || cols < 1 || rows < 1) return;

  closeModal('modal-table-picker');

  if (tablePendingMode === 'wysiwyg') {
    let htmlTable = '<table><thead><tr>';
    for (let c = 1; c <= cols; c++) htmlTable += `<th>Header ${c}</th>`;
    htmlTable += '</tr></thead><tbody>';
    for (let r = 1; r <= rows; r++) {
      htmlTable += '<tr>';
      for (let c = 1; c <= cols; c++) htmlTable += `<td>Cell ${r}-${c}</td>`;
      htmlTable += '</tr>';
    }
    htmlTable += '</tbody></table>';
    insertHTMLWYSIWYG(htmlTable);
  } else {
    let markdownTable = '\n|';
    for (let c = 1; c <= cols; c++) markdownTable += ` Header ${c} |`;
    markdownTable += '\n|';
    for (let c = 1; c <= cols; c++) markdownTable += ' --- |';
    markdownTable += '\n';
    for (let r = 1; r <= rows; r++) {
      markdownTable += '|';
      for (let c = 1; c <= cols; c++) markdownTable += ` Cell ${r}-${c} |`;
      markdownTable += '\n';
    }
    insertMarkdownAtCursor(markdownTable);
  }
  showToast(`${cols}\u00d7${rows} Table Inserted!`);
};

// Wire up confirm button and manual inputs
document.getElementById('btn-insert-table-confirm').addEventListener('click', () => {
  const cols = parseInt(document.getElementById('table-cols-input').value, 10);
  const rows = parseInt(document.getElementById('table-rows-input').value, 10);
  if (!isNaN(cols) && !isNaN(rows)) {
    tableSelectedCols = cols;
    tableSelectedRows = rows;
  }
  confirmTableInsert();
});

// Sync manual inputs → grid highlight
const syncGridFromInputs = () => {
  const cols = Math.min(parseInt(document.getElementById('table-cols-input').value, 10) || 1, TABLE_GRID_COLS);
  const rows = Math.min(parseInt(document.getElementById('table-rows-input').value, 10) || 1, TABLE_GRID_ROWS);
  highlightTableGrid(rows, cols);
  document.getElementById('table-size-label').textContent = `${cols} \u00d7 ${rows}`;
  tableSelectedCols = cols;
  tableSelectedRows = rows;
};

document.getElementById('table-cols-input').addEventListener('input', syncGridFromInputs);
document.getElementById('table-rows-input').addEventListener('input', syncGridFromInputs);

// =============================================
// PANE DRAG RESIZER
// =============================================
(function initPaneResizer() {
  const resizer = document.getElementById('pane-resizer');
  const container = document.getElementById('editor-container');
  const paneEditor = document.getElementById('pane-markdown');
  const panePreview = document.getElementById('pane-preview');
  if (!resizer || !container) return;

  let isResizing = false;
  let startX = 0;
  let startEditorWidth = 0;
  let containerWidth = 0;

  resizer.addEventListener('mousedown', (e) => {
    isResizing = true;
    startX = e.clientX;
    const containerRect = container.getBoundingClientRect();
    containerWidth = containerRect.width - 6; // subtract resizer width
    startEditorWidth = paneEditor.getBoundingClientRect().width;
    resizer.classList.add('dragging');
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (!isResizing) return;
    const dx = e.clientX - startX;
    let newEditorWidth = startEditorWidth + dx;
    const minWidth = 120;
    const maxWidth = containerWidth - minWidth;
    newEditorWidth = Math.max(minWidth, Math.min(maxWidth, newEditorWidth));
    const newPreviewWidth = containerWidth - newEditorWidth;
    // Use fr units won't work directly — set pixel widths via grid-template-columns
    container.style.gridTemplateColumns = `${newEditorWidth}px 6px ${newPreviewWidth}px`;
  });

  document.addEventListener('mouseup', () => {
    if (!isResizing) return;
    isResizing = false;
    resizer.classList.remove('dragging');
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  });

  // Double-click to reset to 50/50
  resizer.addEventListener('dblclick', () => {
    container.style.gridTemplateColumns = '1fr 6px 1fr';
  });
})();
