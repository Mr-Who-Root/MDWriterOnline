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
const paneResizer = document.getElementById('pane-resizer');
const statusMessage = document.getElementById('status-message');
const statusIndicator = document.getElementById('status-indicator');
const wordCountEl = document.getElementById('word-count');
const charCountEl = document.getElementById('char-count');

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

// Templates loaded from templates-data.js (TEMPLATES_DATABASE)


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
      document.getElementById('star-request-message').textContent = "Markdown code copied to clipboard!";
      openModal('modal-star-request');
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
    document.getElementById('star-request-message').textContent = "Document exported successfully!";
    openModal('modal-star-request');
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

  wordCountEl.textContent = wordCount;
  charCountEl.textContent = charCount;
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
    editorContainer.style.gridTemplateColumns = '';
    paneMarkdown.style.display = 'flex';
    panePreview.style.display = 'flex';
    paneWysiwyg.style.display = 'none';
    if (paneResizer) paneResizer.style.display = 'flex';
  } else if (mode === 'editor') {
    editorContainer.className = 'editor-panes-container editor-only';
    editorContainer.style.gridTemplateColumns = '';
    paneMarkdown.style.display = 'flex';
    panePreview.style.display = 'none';
    paneWysiwyg.style.display = 'none';
    if (paneResizer) paneResizer.style.display = 'none';
  } else if (mode === 'wysiwyg') {
    editorContainer.className = 'editor-panes-container wysiwyg-only';
    editorContainer.style.gridTemplateColumns = '';
    paneMarkdown.style.display = 'none';
    panePreview.style.display = 'none';
    paneWysiwyg.style.display = 'flex';
    if (paneResizer) paneResizer.style.display = 'none';
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
    api: 'API & Web', internal: 'Internal Docs', advanced: 'Advanced'
  };
  const CATEGORY_COLORS = {
    profile: '#5b9a8b', software: '#4a8bc2', opensource: '#5a9e6f',
    research: '#c4923a', devops: '#c45c5c', ml: '#8b6cb5',
    api: '#c4773a', internal: '#6b7a8a', advanced: '#a855f7'
  };
  templates.forEach(tpl => {
    const card = document.createElement('div');
    card.className = 'template-card';
    card.onclick = () => selectTemplate(tpl.id);
    const color = CATEGORY_COLORS[tpl.type] || '#5b9a8b';
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
    if (!editorContainer.classList.contains('split-view')) return;
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
