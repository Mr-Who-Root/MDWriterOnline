# MDWriter Online

A modern, privacy-first Markdown editor that runs entirely in your browser. Write in Markdown or rich text, preview changes in real time, start from professional templates, and export clean `.md` files — no account, no backend, no data leaving your device.

---

## Why MDWriter Online?

Most online editors require sign-up, store your documents on remote servers, or lock basic features behind paywalls. MDWriter Online takes a different approach:

- **Private by design** — all editing and autosave happen in your browser via `localStorage`
- **Zero setup** — no build tools, no dependencies to install for end users
- **Practical output** — produces standard Markdown you can use on GitHub, in docs, blogs, or any workflow
- **Beginner-friendly** — formatting toolbar, cheat sheet, and rich text mode lower the learning curve

---

## Features

### Editing

| Feature | Description |
|---------|-------------|
| **Split view** | Edit Markdown alongside a live rendered preview |
| **Markdown only** | Full-width source editor with line numbers |
| **Rich text mode** | Word-style editing with automatic Markdown sync |
| **Formatting toolbar** | Bold, italic, headings, lists, links, images, code blocks, and tables |
| **Undo / redo** | Full edit history with up to 100 states |
| **Resizable panes** | Drag the divider to adjust editor and preview width |
| **Syntax autocomplete** | Smart suggestions for emoji, headings, links, and containers |

### Content & Export

| Feature | Description |
|---------|-------------|
| **Template library** | 32 ready-to-use documents across 8 categories |
| **Cheat sheet sidebar** | Searchable Markdown syntax reference with one-click insert |
| **Copy as Markdown** | Copy the full document to your clipboard |
| **Export `.md`** | Download your work as a standard Markdown file |
| **Word & character count** | Live stats in the footer status bar |

### Experience

| Feature | Description |
|---------|-------------|
| **Dark & light themes** | Toggle appearance; preference is saved locally |
| **Autosave** | Drafts persist across refreshes and accidental tab closes |
| **Responsive layout** | Usable on desktop and smaller screens |

---

## Template Library

Start quickly with structured templates for common documentation needs:

| Category | Examples |
|----------|----------|
| Profile | Developer portfolio, student profile, designer portfolio |
| Software | Application docs, changelog, mobile store listing |
| Open Source | Library documentation, contributing guide, security policy |
| Research | Paper repository, dataset card, literature review |
| DevOps / IaC | Infrastructure guide, CI/CD docs, Kubernetes deployment |
| ML / AI | Model card, experiment log, fine-tuning guide |
| API & Web | REST reference, GraphQL docs, webhook integration |
| Internal Docs | Team documentation, runbooks, meeting notes, ADRs |

Open **Templates** from the header to browse, filter by category, and load any template into the editor.

---

## Quick Start

### Option 1 — Open directly

Open `index.html` in any modern browser (Chrome, Firefox, Safari, or Edge).

### Option 2 — Local dev server (recommended)

```bash
git clone https://github.com/Mr-Who-Root/MDWriterOnline.git
cd MDWriterOnline
npm run dev
```

Then visit `http://localhost:3000`.

### Option 3 — One-off serve

```bash
npx serve .
```

No compilation step is required. The app is plain HTML, CSS, and JavaScript.

---

## Usage

1. **Start writing** — type in the Markdown editor or switch to rich text mode
2. **Format content** — use the toolbar, cheat sheet, or raw Markdown syntax
3. **Preview live** — split view updates as you type
4. **Use a template** — click **Templates** in the header to load a starter document
5. **Save your work** — drafts autosave locally; use **Export .md** to download a file

Your document is restored automatically the next time you open the app in the same browser.

---

## Privacy

MDWriter Online does not:

- Require user accounts or authentication
- Upload documents to a server
- Track or store content outside your browser

Drafts are saved only to `localStorage` on your device. Clearing browser data will remove saved drafts.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Core | HTML5, CSS3, vanilla JavaScript |
| Markdown rendering | [marked](https://marked.js.org/) |
| HTML → Markdown | [Turndown](https://github.com/mixmark-io/turndown) |
| DOCX support | [Mammoth.js](https://github.com/mwilliamson/mammoth.js) |
| Fonts | Inter, Source Sans 3, Fira Code |

---

## Project Structure

```
MDWriterOnline/
├── index.html          # Application shell and layout
├── app.js              # Editor engine, UI logic, and event handling
├── templates-data.js   # Template library (32 documents)
├── styles.css          # Design system, themes, and responsive styles
├── favicon.svg         # Application icon
└── package.json        # Dev server script
```

---

## Development

```bash
# Install dev dependencies (optional — only needed for local server)
npm install

# Start local server on port 3000
npm run dev
```

To add a new template, append an entry to `TEMPLATES_DATABASE` in `templates-data.js` with `id`, `title`, `desc`, `type`, and `content` fields. If you introduce a new category, add a matching tab in `index.html` and update `CATEGORY_LABELS` / `CATEGORY_COLORS` in `app.js`.

---

## Browser Support

Works in all modern browsers that support:

- ES6+ JavaScript
- CSS Grid and Flexbox
- `localStorage`
- Clipboard API (for copy/export actions)

---

## Author

Made with ❤️ by **Mr-Who**

---

## License

This project is licensed under the [MIT License](LICENSE).
