// Markdown document templates — loaded before app.js
const TEMPLATES_DATABASE = [
  // ── PROFILE ──────────────────────────────────────────────
  {
    id: "profile-developer",
    title: "Developer GitHub Profile",
    desc: "Professional GitHub profile with badges, tech stack, stats, and featured work.",
    type: "profile",
    content: `# Hi there, I'm [Your Name] 👋

[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-blue?style=flat-square&logo=google-chrome)](https://yoursite.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=flat-square&logo=linkedin)](https://linkedin.com/in/yourhandle)
[![Twitter](https://img.shields.io/badge/Twitter-Follow-1DA1F2?style=flat-square&logo=twitter)](https://twitter.com/yourhandle)
[![Blog](https://img.shields.io/badge/Blog-Read-orange?style=flat-square&logo=rss)](https://blog.yoursite.com)

> 💻 Full-Stack Engineer · 🚀 Open Source Contributor · 📚 Technical Writer

## About

I'm a software engineer with **5+ years** of experience building scalable web applications and developer tools. I care deeply about clean architecture, developer experience, and shipping products that solve real problems.

**Currently:** Senior Engineer at [Company] · Previously at [Company B], [Company C]

## Tech Stack

**Languages & Frameworks**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Go](https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

**Infrastructure & Tools**

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white)

## GitHub Stats

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=yourusername&show_icons=true&theme=default&hide_border=true&count_private=true)
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=yourusername&layout=compact&theme=default&hide_border=true)

## Featured Projects

| Project | Description | Tech | Stars |
|---------|-------------|------|-------|
| [AwesomeApp](https://github.com/you/awesomeapp) | Real-time collaboration platform for remote teams | React, Node, Redis | ⭐ 340 |
| [CLI Toolkit](https://github.com/you/cli-toolkit) | Zero-config CLI scaffolding for monorepos | Go, Cobra | ⭐ 180 |
| [DataPipe](https://github.com/you/datapipe) | Lightweight ETL pipeline for small datasets | Python, Pandas | ⭐ 95 |

## Work Experience

| Role | Company | Period | Highlights |
|------|---------|--------|------------|
| Senior Engineer | [Company] | 2023–Present | Led migration to microservices, 40% latency reduction |
| Software Engineer | [Company B] | 2021–2023 | Built payment processing system handling $2M/day |
| Junior Developer | [Company C] | 2019–2021 | Shipped mobile app with 50K+ downloads |

## Writing & Talks

- 📝 [How We Cut API Latency by 40%](https://blog.yoursite.com/latency) — Engineering blog
- 🎤 [Building Developer Tools at Scale](https://youtube.com/watch?v=xxx) — DevConf 2025
- 📖 [Contributing to Open Source: A Practical Guide](https://blog.yoursite.com/oss) — Medium

## Currently

- 🔭 Building **[current side project]** — a tool for [problem it solves]
- 🌱 Deep-diving into **Rust** and **distributed systems**
- 💡 Ask me about **system design, React performance, and API design**
- 📫 Reach me at **your@email.com** or [open an issue](https://github.com/you/you/issues)
`
  },
  {
    id: "profile-student",
    title: "Student / Fresher Profile",
    desc: "Academic profile highlighting education, projects, internships, and skills.",
    type: "profile",
    content: `# Hi, I'm [Your Name] 👋

🎓 B.Tech Computer Science · [University Name] · Class of 2026
📍 [City, Country] · 📧 [your@email.com] · 📱 +91 XXXXX XXXXX

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin)](https://linkedin.com/in/yourhandle)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github)](https://github.com/yourusername)
[![LeetCode](https://img.shields.io/badge/LeetCode-FFA116?style=flat&logo=leetcode&logoColor=black)](https://leetcode.com/yourhandle)
[![CodeChef](https://img.shields.io/badge/CodeChef-5B4638?style=flat)](https://codechef.com/users/yourhandle)

## Objective

Motivated computer science student with strong foundations in algorithms, data structures, and full-stack development. Seeking internship or full-time opportunities to contribute to production software while continuing to grow as an engineer.

## Education

| Degree | Institution | Period | Score |
|--------|-------------|--------|-------|
| B.Tech in CSE | [University Name] | 2022–2026 | CGPA 8.7/10 |
| Class XII (CBSE) | [School Name] | 2022 | 94.2% |
| Class X (CBSE) | [School Name] | 2020 | 96.8% |

**Relevant Coursework:** Data Structures, Algorithms, Operating Systems, Database Management, Computer Networks, Machine Learning, Software Engineering

## Technical Skills

| Category | Skills |
|----------|--------|
| **Languages** | Python, Java, C++, JavaScript, SQL |
| **Web** | HTML, CSS, React, Node.js, Express, REST APIs |
| **Databases** | MySQL, MongoDB, PostgreSQL (basics) |
| **Tools** | Git, GitHub, VS Code, Linux, Docker (basics) |
| **Concepts** | OOP, DSA, Agile, CI/CD basics |

## Projects

### 📦 E-Commerce Analytics Dashboard
> Full-stack analytics dashboard for small retailers to track sales and inventory.

- Built with **React + Node.js + PostgreSQL**
- Features: JWT auth, real-time charts (Chart.js), CSV export, role-based access
- **Impact:** Used by 3 local businesses during pilot testing
- [Live Demo](https://demo.example.com) · [Source Code](https://github.com/you/ecommerce-dashboard)

### 🤖 Sentiment Analysis API
> NLP microservice classifying product reviews as positive, negative, or neutral.

- **Stack:** Python, FastAPI, scikit-learn, Docker
- Trained on 50K Amazon reviews; achieved **89% accuracy** on test set
- Deployed on Railway with CI/CD via GitHub Actions
- [Source Code](https://github.com/you/sentiment-api)

### 📱 Campus Event Manager
> Mobile-first web app for university event registration and attendance tracking.

- **Stack:** React, Firebase, Tailwind CSS
- QR code check-in, push notifications, admin dashboard
- **500+ registrations** across 12 campus events
- [Source Code](https://github.com/you/campus-events)

## Internships & Experience

| Role | Organization | Duration | Key Work |
|------|-------------|----------|----------|
| SDE Intern | [Company Name] | May–Jul 2025 | Built internal admin panel; reduced manual reporting by 60% |
| Open Source Contributor | [Project Name] | 2024–Present | 15 merged PRs; fixed bugs in authentication module |

## Certifications & Achievements

- ✅ **AWS Cloud Practitioner** — Amazon Web Services (2025)
- ✅ **Google Data Analytics** — Coursera (2024)
- ✅ **Hackathon Winner** — [Hackathon Name] 2024 (1st place, 120 teams)
- 🏆 Solved **400+ problems** on LeetCode (Rating: 1650)

## Extracurricular

- **Technical Lead** — [University Coding Club] (2024–Present)
- Organized 3 hackathons with 200+ participants
- Mentored 15 juniors in DSA preparation

## Connect

Feel free to reach out for collaborations, internship opportunities, or just to say hi!

📧 your@email.com · 💼 [LinkedIn](https://linkedin.com/in/yourhandle) · 🐙 [GitHub](https://github.com/yourusername)
`
  },
  {
    id: "profile-designer",
    title: "Designer / Creative Portfolio",
    desc: "Visual portfolio for UI/UX designers, illustrators, and creative professionals.",
    type: "profile",
    content: `# [Your Name] — UI/UX Designer

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-5b9a8b?style=flat-square)](https://portfolio.yoursite.com)
[![Dribbble](https://img.shields.io/badge/Dribbble-EA4C89?style=flat-square&logo=dribbble)](https://dribbble.com/yourhandle)
[![Behance](https://img.shields.io/badge/Behance-1769FF?style=flat-square&logo=behance)](https://behance.net/yourhandle)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin)](https://linkedin.com/in/yourhandle)

> Designing thoughtful digital experiences that balance aesthetics with usability.

## About Me

I'm a product designer with **4 years** of experience crafting interfaces for SaaS, fintech, and consumer apps. I believe great design is invisible — it guides users effortlessly toward their goals.

**Specialties:** User research · Design systems · Prototyping · Accessibility (WCAG 2.1)

## Design Process

\`\`\`
Research → Define → Ideate → Prototype → Test → Iterate → Ship
\`\`\`

| Phase | Activities | Deliverables |
|-------|-----------|--------------|
| Research | User interviews, competitive analysis, analytics review | Research report, personas, journey maps |
| Define | Problem framing, success metrics | Problem statement, design brief |
| Ideate | Sketching, wireframing, design workshops | Low-fi wireframes, concept boards |
| Prototype | High-fidelity mockups, interactive prototypes | Figma prototypes, component specs |
| Test | Usability testing, A/B tests | Test reports, iteration backlog |

## Featured Work

### 💳 FinFlow — Personal Finance App
**Role:** Lead Designer · **Duration:** 6 months · **Team:** 2 designers, 4 engineers

Redesigned the budgeting experience for 200K+ monthly active users.

| Metric | Before | After |
|--------|--------|-------|
| Task completion (add expense) | 68% | 91% |
| Time on task | 45 sec | 18 sec |
| App Store rating | 3.8 | 4.6 |

- Conducted 12 user interviews and 3 rounds of usability testing
- Built a 40-component design system in Figma
- [Case Study](https://portfolio.yoursite.com/finflow) · [Dribbble Shots](https://dribbble.com/shots/finflow)

### 🏥 HealthTrack — Patient Portal
**Role:** UX Designer · **Duration:** 4 months

Simplified appointment booking and medical record access for a regional hospital network.

- Reduced booking steps from 8 to 3
- Achieved **WCAG 2.1 AA** compliance across all screens
- [Case Study](https://portfolio.yoursite.com/healthtrack)

### 🛒 ShopLocal — E-Commerce Redesign
**Role:** UI Designer · **Duration:** 3 months

Visual refresh and mobile-first redesign for a local marketplace platform.

- Increased mobile conversion by **23%**
- Created illustration system and icon library (80+ icons)
- [Behance Project](https://behance.net/gallery/shoplocal)

## Skills & Tools

| Category | Tools |
|----------|-------|
| **Design** | Figma, Sketch, Adobe XD, Illustrator, Photoshop |
| **Prototyping** | Figma, Principle, ProtoPie |
| **Research** | Maze, Hotjar, Google Analytics, UserTesting |
| **Collaboration** | Notion, Miro, Jira, Slack |
| **Code** | HTML, CSS, basic React (for design handoff) |

## Testimonials

> *"[Your Name] transformed our product's UX. User complaints dropped 50% within a month of launch."*
> — [Product Manager Name], [Company]

> *"One of the most detail-oriented designers I've worked with. The design system alone saved us weeks."*
> — [Engineering Lead Name], [Company]

## Experience

| Role | Company | Period |
|------|---------|--------|
| Senior Product Designer | [Company A] | 2023–Present |
| UI/UX Designer | [Company B] | 2021–2023 |
| Freelance Designer | Self-employed | 2019–2021 |

## Let's Work Together

📧 your@email.com · 🌐 [portfolio.yoursite.com](https://portfolio.yoursite.com)
`
  },
  {
    id: "profile-maintainer",
    title: "Open Source Maintainer Profile",
    desc: "Profile for OSS maintainers showcasing projects, contributions, and community work.",
    type: "profile",
    content: `# [Your Name] — Open Source Maintainer

[![GitHub followers](https://img.shields.io/github/followers/yourusername?style=flat-square)](https://github.com/yourusername)
[![GitHub Sponsors](https://img.shields.io/badge/Sponsor-❤-ea4aaa?style=flat-square&logo=github-sponsors)](https://github.com/sponsors/yourusername)
[![OpenSSF](https://img.shields.io/badge/OpenSSF-Best_Practices-blue?style=flat-square)](https://bestpractices.coreinfrastructure.org/)

> Building tools developers love. Maintaining **[project-name]** and contributing to the broader open source ecosystem.

## Maintainer Of

### [project-name](https://github.com/you/project-name) — ⭐ 2.4K stars

A [brief description of what the project does and why it matters].

| Stat | Value |
|------|-------|
| Weekly downloads (npm) | 45,000 |
| Contributors | 87 |
| Open issues | 23 |
| Latest release | v3.2.1 (Jul 2026) |
| License | MIT |

**Recent milestones:**
- v3.0 — Complete rewrite with TypeScript, 3× performance improvement
- Reached 2,000 GitHub stars (March 2026)
- Featured in [Publication/Newsletter]

### [second-project](https://github.com/you/second-project) — ⭐ 890 stars

[Description of second major project]

## Contribution Activity

![GitHub Activity Graph](https://github-readme-activity-graph.vercel.app/graph?username=yourusername&theme=minimal&hide_border=true)

## Other Contributions

| Project | Contribution | PRs Merged |
|---------|-------------|------------|
| [popular-lib/react](https://github.com/popular-lib/react) | Bug fixes, documentation | 12 |
| [infra-tool/terraform-provider](https://github.com/infra-tool/terraform-provider) | New resource types | 5 |
| [docs-site/vitepress](https://github.com/docs-site/vitepress) | Plugin development | 3 |

## Community Involvement

- **Organizer** — [Local Meetup Name] (monthly, 80+ attendees)
- **Speaker** — [Conference Name] 2025: "Maintaining OSS at Scale"
- **Mentor** — Google Summer of Code 2024, 2 students
- **Reviewer** — [Foundation/Program] grant review panel

## Philosophy

I believe open source thrives when:

1. **Documentation is a first-class citizen** — if it's not documented, it doesn't exist
2. **Contributors are welcomed warmly** — good first issues, clear CONTRIBUTING guide
3. **Breaking changes are communicated early** — migration guides, deprecation warnings
4. **Security is proactive** — dependency audits, responsible disclosure policy

## Support My Work

If my projects have helped you, consider:

- ⭐ Starring repositories you find useful
- 🐛 Reporting bugs with clear reproduction steps
- 💰 [Sponsoring on GitHub](https://github.com/sponsors/yourusername)
- 📣 Sharing projects with your team

## Contact

- 🐛 Bug reports: [GitHub Issues](https://github.com/you/project-name/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/you/project-name/discussions)
- 📧 Email: your@email.com
- 🐦 Twitter: [@yourhandle](https://twitter.com/yourhandle)
`
  },

  // ── SOFTWARE APPLICATION ───────────────────────────────
  {
    id: "software-app",
    title: "Application Documentation",
    desc: "Complete guide for a desktop, web, or mobile application with setup, config, and usage.",
    type: "software",
    content: `# AppName — [One-Line Description]

![Version](https://img.shields.io/badge/version-2.4.1-blue.svg)
![Build](https://img.shields.io/github/actions/workflow/status/you/appname/ci.yml?branch=main)
![Coverage](https://img.shields.io/codecov/c/github/you/appname)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Windows%20%7C%20Linux-lightgrey)

> **AppName** is a [brief description — what it does, who it's for, and the core problem it solves].

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Development](#development)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Features

| Feature | Description |
|---------|-------------|
| ⚡ **Performance** | Handles 10K concurrent users with < 50ms p95 latency |
| 🔒 **Security** | End-to-end encryption, OAuth 2.0, SOC 2 compliant |
| 🎨 **Modern UI** | Responsive design with dark/light mode support |
| 🌐 **Cross-Platform** | macOS 12+, Windows 10+, Ubuntu 20.04+ |
| 📦 **Plugin System** | Extend functionality with community plugins |
| 🔄 **Auto-Sync** | Real-time sync across devices via cloud or LAN |

## Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| Node.js | 18.x | 20.x LTS |
| RAM | 4 GB | 8 GB |
| Disk | 500 MB | 2 GB |
| OS | macOS 12 / Win 10 / Ubuntu 20.04 | Latest stable |

## Installation

### Quick Install (npm)

\`\`\`bash
npm install -g appname
appname --version   # Should print 2.4.1
\`\`\`

### From Source

\`\`\`bash
git clone https://github.com/yourusername/appname.git
cd appname
npm install
npm run build
npm link            # Makes 'appname' available globally
\`\`\`

### Docker

\`\`\`bash
docker pull yourusername/appname:latest
docker run -d -p 3000:3000 -v appname-data:/data yourusername/appname:latest
\`\`\`

## Configuration

Create a \`.env\` file in the root directory (or copy from \`.env.example\`):

\`\`\`env
# Server
APP_PORT=3000
APP_HOST=0.0.0.0
APP_ENV=production

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/appdb
DATABASE_POOL_SIZE=20

# Authentication
JWT_SECRET=your_256_bit_secret_here
JWT_EXPIRY=24h
OAUTH_GOOGLE_CLIENT_ID=your_client_id
OAUTH_GOOGLE_CLIENT_SECRET=your_client_secret

# Storage
S3_BUCKET=appname-uploads
S3_REGION=us-east-1
S3_ACCESS_KEY=your_access_key
S3_SECRET_KEY=your_secret_key

# Feature Flags
ENABLE_ANALYTICS=true
ENABLE_BETA_FEATURES=false
MAX_UPLOAD_SIZE_MB=50
\`\`\`

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| \`APP_PORT\` | No | \`3000\` | HTTP server port |
| \`DATABASE_URL\` | Yes | — | PostgreSQL connection string |
| \`JWT_SECRET\` | Yes | — | Secret for signing tokens (min 32 chars) |
| \`S3_BUCKET\` | No | — | S3 bucket for file uploads |

## Usage

### CLI Commands

\`\`\`bash
appname start                    # Start the server
appname start --port 8080        # Custom port
appname migrate                  # Run database migrations
appname seed                     # Seed demo data
appname export --format json     # Export all data
appname doctor                   # Health check all dependencies
\`\`\`

### npm Scripts (Development)

\`\`\`bash
npm run dev          # Start with hot reload
npm run build        # Production build
npm test             # Run full test suite
npm run test:watch   # Watch mode
npm run lint         # ESLint check
npm run lint:fix     # Auto-fix lint issues
npm run type-check   # TypeScript validation
\`\`\`

### API Quick Example

\`\`\`bash
# Create a resource
curl -X POST http://localhost:3000/api/v1/items \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Example", "tags": ["demo"]}'

# List resources
curl http://localhost:3000/api/v1/items?page=1&limit=10 \\
  -H "Authorization: Bearer YOUR_TOKEN"
\`\`\`

## Project Structure

\`\`\`
appname/
├── src/
│   ├── api/              # REST route handlers
│   │   ├── routes/
│   │   └── middleware/
│   ├── services/         # Business logic layer
│   ├── models/           # Database models (Prisma)
│   ├── utils/            # Shared utilities
│   ├── config/           # App configuration
│   └── index.ts          # Entry point
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── docs/                 # Extended documentation
├── scripts/              # Build & deploy scripts
├── prisma/
│   └── schema.prisma
├── docker-compose.yml
├── Dockerfile
└── package.json
\`\`\`

## Development

\`\`\`bash
# Start local dependencies
docker-compose up -d postgres redis

# Run migrations
npm run db:migrate

# Start dev server
npm run dev
# → http://localhost:3000
# → API docs at http://localhost:3000/docs
\`\`\`

## Troubleshooting

| Problem | Solution |
|---------|----------|
| \`EADDRINUSE\` on port 3000 | Change \`APP_PORT\` or kill existing process: \`lsof -ti:3000 \\| xargs kill\` |
| Database connection refused | Ensure PostgreSQL is running: \`docker-compose up -d postgres\` |
| \`JWT_SECRET\` error on start | Set a secret ≥ 32 characters in \`.env\` |
| Slow first load | Run \`npm run build\` before \`npm start\` in production |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines. We use [Conventional Commits](https://conventionalcommits.org).

## License

MIT License — see [LICENSE](LICENSE) for details.
© 2026 [Your Name / Organization]
`
  },
  {
    id: "software-changelog",
    title: "Release Changelog",
    desc: "SemVer-based changelog following Keep a Changelog with detailed release notes.",
    type: "software",
    content: `# Changelog

All notable changes to **AppName** are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added
- Collaborative editing with operational transforms
- Webhook support for document events

### Changed
- Migrated from Webpack to Vite for 60% faster builds

---

## [3.2.0] — 2026-07-07

### Added
- **Export to PDF** — one-click PDF export with custom page sizes and margins
- **Keyboard shortcut overlay** — press \`?\` to view all shortcuts
- **Dark mode** with system preference detection (\`prefers-color-scheme\`)
- **Template library** — 32 pre-built markdown templates across 8 categories
- New \`--config\` CLI flag for custom configuration file path

### Changed
- Improved large document rendering performance by **40%** (virtualized preview pane)
- Migrated authentication from JWT to opaque session tokens with rotation
- Updated minimum Node.js requirement from 16 to 18 LTS
- Redesigned settings panel with grouped sections

### Fixed
- Line number misalignment during scroll in documents > 5,000 lines ([#142](https://github.com/you/app/issues/142))
- LocalStorage quota exceeded error on documents > 4MB ([#137](https://github.com/you/app/issues/137))
- Cursor position lost when switching between editor modes ([#128](https://github.com/you/app/issues/128))
- Export filename not sanitizing special characters ([#119](https://github.com/you/app/issues/119))

### Security
- Patched XSS vulnerability in custom HTML block rendering (CVE-2026-XXXX)
- Updated \`marked\` dependency to 9.1.0

---

## [3.1.0] — 2026-05-20

### Added
- WYSIWYG editing mode with bidirectional markdown sync
- Autosave to localStorage with configurable interval
- Word count and reading time in status bar
- Drag-and-drop image upload support

### Changed
- Sidebar cheat sheet reorganized into 11 categories
- Preview pane now supports GitHub-flavored markdown tables

### Fixed
- Undo/redo stack corruption after paste operations ([#98](https://github.com/you/app/issues/98))
- Preview not updating on rapid typing ([#91](https://github.com/you/app/issues/91))

---

## [3.0.0] — 2026-03-15

### Breaking Changes
- Dropped support for Node.js < 18
- Renamed config key \`editor.theme\` → \`ui.colorScheme\`
- Removed deprecated \`importFile()\` API — use \`importDocument()\` instead
- Plugin API v1 removed — migrate to [Plugin API v2](docs/plugin-migration.md)

### Added
- Full TypeScript rewrite with strict mode
- Plugin API v2 with lifecycle hooks (\`onLoad\`, \`onSave\`, \`onExport\`)
- Split-pane resizable layout with persisted divider position
- Custom CSS injection for preview styling

### Removed
- Legacy XML import format
- Flash-based export (deprecated since v2.5)

---

## [2.5.0] — 2026-01-10

### Added
- DOCX import and export via Mammoth.js
- Syntax highlighting in code blocks (50+ languages)
- Document version history (last 50 states)

---

## [2.0.0] — 2025-09-01

### Added
- Complete UI redesign
- Real-time split-pane preview
- Local backup and restore

---

## [1.0.0] — 2025-06-15

### Added
- Initial public release
- Core markdown editor with toolbar formatting
- File open/save via File System Access API
- Light and dark themes

---

## Migration Guides

| From → To | Guide |
|-----------|-------|
| 2.x → 3.0 | [Migration Guide](docs/migrate-v3.md) |
| Plugin v1 → v2 | [Plugin Migration](docs/plugin-migration.md) |

## Release Schedule

We aim for minor releases monthly and patch releases as needed. Major releases happen 1–2 times per year with a 6-month deprecation window for breaking changes.
`
  },
  {
    id: "software-mobile",
    title: "Mobile App Store Listing",
    desc: "App store description, release notes, and metadata for iOS/Android apps.",
    type: "software",
    content: `# AppName — Mobile App Documentation

## App Store Listing

### App Name
**AppName — [Tagline]**

### Subtitle (iOS, 30 chars max)
Smart [category] for everyone

### Short Description (Google Play, 80 chars)
[One compelling sentence about what the app does and its key benefit.]

### Full Description

**AppName** helps you [core value proposition] — whether you're [use case 1], [use case 2], or [use case 3].

**Key Features:**

- 📋 **Smart Lists** — Create, organize, and share lists with real-time collaboration
- 🔔 **Reminders** — Location and time-based notifications that actually work
- 📊 **Insights** — Weekly analytics showing your productivity patterns
- 🔄 **Sync** — Seamless sync across iPhone, iPad, Android, and web
- 🌙 **Dark Mode** — Easy on the eyes, day or night
- 🔒 **Privacy First** — Your data stays on your device; optional encrypted cloud backup

**Why AppName?**

Unlike other [category] apps, AppName is built with a focus on speed and simplicity. No ads, no tracking, no unnecessary permissions.

**What users are saying:**

> ⭐⭐⭐⭐⭐ "Finally an app that just works." — App Store Review
> ⭐⭐⭐⭐⭐ "Replaced three apps for me." — Google Play Review

**Premium Features (AppName Pro):**
- Unlimited lists and collaborators
- Advanced export (PDF, CSV, Markdown)
- Custom themes and icons
- Priority support

Download free. Upgrade anytime.

### Keywords (iOS, 100 chars max)
productivity,tasks,organize,planner,notes,collaboration,lists,reminders

### Category
- **Primary:** Productivity
- **Secondary:** Utilities

### Age Rating
4+ (No objectionable content)

### Screenshots Required

| Device | Size | Count |
|--------|------|-------|
| iPhone 6.7" | 1290 × 2796 | 5–10 |
| iPhone 6.5" | 1284 × 2778 | 5–10 |
| iPad 12.9" | 2048 × 2732 | 5–10 |
| Android Phone | 1080 × 1920 | 5–8 |
| Android Tablet | 1200 × 1920 | 5–8 |

### Screenshot Captions

1. **"Organize everything in one place"** — Home screen with categorized lists
2. **"Collaborate in real-time"** — Shared list with live cursors
3. **"Never miss a deadline"** — Reminder notification and scheduling UI
4. **"Track your progress"** — Weekly insights dashboard
5. **"Beautiful on every device"** — Dark mode on phone and tablet

---

## Version Release Notes

### Version 4.2.0 (Build 420)

**What's New:**
- 🎉 Introducing **Smart Suggestions** — AppName now suggests list items based on your habits
- 📱 Redesigned widget for iOS 18 and Android 14
- ⚡ 2× faster app launch time
- 🐛 Fixed crash when editing lists with 500+ items

**Improvements:**
- Improved offline mode reliability
- Better VoiceOver / TalkBack accessibility labels
- Reduced app size by 15MB

**Bug Fixes:**
- Fixed sync conflict resolution on slow networks
- Fixed keyboard covering input field on small screens
- Fixed date picker timezone issues

---

## Technical Metadata

| Field | iOS | Android |
|-------|-----|---------|
| Bundle ID | \`com.yourcompany.appname\` | \`com.yourcompany.appname\` |
| Min OS | iOS 16.0 | Android 10 (API 29) |
| Target OS | iOS 18 | Android 14 (API 34) |
| App Size | 45 MB | 38 MB |
| Languages | EN, ES, FR, DE, JA, KO, PT, HI | EN, ES, FR, DE, JA, KO, PT, HI |

## Privacy Policy Summary

| Data Type | Collected | Linked to Identity | Used for Tracking |
|-----------|-----------|-------------------|-------------------|
| Email (account) | Yes | Yes | No |
| Usage analytics | Optional | No | No |
| Crash logs | Yes | No | No |
| Location (reminders) | Optional | No | No |
| Contacts (sharing) | Optional | Yes | No |

## Support Information

- **Support URL:** https://appname.com/support
- **Privacy Policy:** https://appname.com/privacy
- **Marketing URL:** https://appname.com
`
  },
  {
    id: "software-desktop",
    title: "Desktop Application Guide",
    desc: "Documentation for Electron/Tauri desktop apps with install, shortcuts, and system integration.",
    type: "software",
    content: `# AppName Desktop — User & Developer Guide

![Version](https://img.shields.io/badge/version-1.8.0-blue)
![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Windows%20%7C%20Linux-lightgrey)
![Electron](https://img.shields.io/badge/Electron-28-47848F?logo=electron)

> A native desktop experience for [what the app does], built with Electron and optimized for performance.

## Download & Install

| Platform | Download | Size | Requirements |
|----------|----------|------|--------------|
| macOS (Apple Silicon) | [AppName-1.8.0-arm64.dmg](releases) | 92 MB | macOS 12+ |
| macOS (Intel) | [AppName-1.8.0-x64.dmg](releases) | 98 MB | macOS 12+ |
| Windows | [AppName-Setup-1.8.0.exe](releases) | 85 MB | Windows 10+ |
| Windows (Portable) | [AppName-1.8.0-portable.exe](releases) | 85 MB | Windows 10+ |
| Linux (AppImage) | [AppName-1.8.0.AppImage](releases) | 95 MB | Ubuntu 20.04+ |
| Linux (deb) | [appname_1.8.0_amd64.deb](releases) | 88 MB | Debian/Ubuntu |
| Linux (Flatpak) | [Flathub](https://flathub.org/apps/com.appname) | 90 MB | Any distro |

### macOS Install

1. Download the \`.dmg\` file for your chip (Apple Silicon or Intel)
2. Open the DMG and drag AppName to Applications
3. On first launch: **System Settings → Privacy & Security → Open Anyway**

### Windows Install

\`\`\`powershell
# Via winget
winget install AppName.AppName

# Silent install
AppName-Setup-1.8.0.exe /S
\`\`\`

### Linux Install

\`\`\`bash
# AppImage
chmod +x AppName-1.8.0.AppImage && ./AppName-1.8.0.AppImage

# Debian/Ubuntu
sudo dpkg -i appname_1.8.0_amd64.deb

# Flatpak
flatpak install flathub com.appname.AppName
\`\`\`

## Keyboard Shortcuts

| Action | macOS | Windows / Linux |
|--------|-------|-----------------|
| New document | \`⌘N\` | \`Ctrl+N\` |
| Open file | \`⌘O\` | \`Ctrl+O\` |
| Save | \`⌘S\` | \`Ctrl+S\` |
| Save As | \`⌘⇧S\` | \`Ctrl+Shift+S\` |
| Export PDF | \`⌘E\` | \`Ctrl+E\` |
| Toggle preview | \`⌘P\` | \`Ctrl+P\` |
| Find & Replace | \`⌘F\` | \`Ctrl+F\` |
| Toggle sidebar | \`⌘B\` | \`Ctrl+B\` |
| Toggle theme | \`⌘D\` | \`Ctrl+D\` |
| Command palette | \`⌘⇧P\` | \`Ctrl+Shift+P\` |
| Preferences | \`⌘,\` | \`Ctrl+,\` |
| Quit | \`⌘Q\` | \`Alt+F4\` |

## System Integration

### macOS

- **Menu bar icon** — Quick access to recent documents
- **Touch Bar** — Formatting shortcuts on supported MacBooks
- **Handoff** — Continue editing on iPhone/iPad (with companion app)
- **Spotlight** — Search documents from system search

### Windows

- **System tray** — Minimize to tray with quick actions
- **Jump lists** — Recent files in taskbar right-click menu
- **File associations** — Open \`.md\`, \`.markdown\`, \`.txt\` files directly

### Linux

- **Desktop entry** — Full freedesktop.org integration
- **Global menu** — Ubuntu Unity / GNOME global menu support
- **File manager** — "Open with AppName" context menu

## Settings & Preferences

| Setting | Options | Default |
|---------|---------|---------|
| Theme | System / Light / Dark | System |
| Font family | Any system font | Inter |
| Font size | 12–24 px | 15 px |
| Tab size | 2 / 4 / 8 spaces | 2 |
| Line numbers | On / Off | On |
| Word wrap | On / Off | On |
| Autosave interval | 5s / 15s / 30s / Off | 15s |
| Default export format | PDF / HTML / DOCX | PDF |
| Spell check | On / Off | On |
| Update channel | Stable / Beta | Stable |

Settings are stored at:
- **macOS:** \`~/Library/Application Support/AppName/config.json\`
- **Windows:** \`%APPDATA%\\AppName\\config.json\`
- **Linux:** \`~/.config/appname/config.json\`

## Auto-Updates

AppName checks for updates automatically on launch (stable channel).

\`\`\`bash
# Check manually
appname --check-updates

# Disable auto-updates
# Settings → General → Automatically check for updates → Off
\`\`\`

## Building from Source

\`\`\`bash
git clone https://github.com/you/appname-desktop.git
cd appname-desktop
npm install
npm run dev          # Development with hot reload
npm run build:mac    # macOS .dmg
npm run build:win    # Windows .exe
npm run build:linux  # Linux AppImage + deb
\`\`\`

## Troubleshooting

| Issue | Fix |
|-------|-----|
| App won't open on macOS | Right-click → Open, or allow in Security settings |
| Blank window on Linux | Try \`--disable-gpu\` flag or update graphics drivers |
| High memory usage | Disable preview pane or reduce open tabs |
| Sync not working | Check firewall allows outbound HTTPS to sync.appname.com |
| Fonts look blurry (Windows) | Settings → Display → Scale → 100% recommended |

## Uninstall

| Platform | Method |
|----------|--------|
| macOS | Drag from Applications to Trash; remove \`~/Library/Application Support/AppName\` |
| Windows | Settings → Apps → AppName → Uninstall |
| Linux | \`sudo apt remove appname\` or \`flatpak uninstall com.appname.AppName\` |
`
  },

  // ── OPEN SOURCE ────────────────────────────────────────
  {
    id: "opensource-lib",
    title: "Open Source Library Documentation",
    desc: "Full-featured docs for an open-source library with badges, API reference, and examples.",
    type: "opensource",
    content: `# library-name

[![npm version](https://img.shields.io/npm/v/library-name.svg)](https://www.npmjs.com/package/library-name)
[![npm downloads](https://img.shields.io/npm/dm/library-name.svg)](https://www.npmjs.com/package/library-name)
[![bundle size](https://img.shields.io/bundlephobia/minzip/library-name)](https://bundlephobia.com/package/library-name)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![CI](https://github.com/org/library-name/actions/workflows/ci.yml/badge.svg)](https://github.com/org/library-name/actions)
[![Coverage](https://img.shields.io/codecov/c/github/org/library-name)](https://codecov.io/gh/org/library-name)

> A minimal, zero-dependency library for [what it does] — used by [notable projects] and trusted in production.

## Why library-name?

| Feature | library-name | alternative-a | alternative-b |
|---------|-------------|---------------|---------------|
| Bundle size | **1.8 kB** | 12 kB | 8 kB |
| Dependencies | **0** | 3 | 1 |
| TypeScript | **Built-in** | @types package | Partial |
| Tree-shakeable | **Yes** | No | Yes |
| Browser support | **IE11+** | Modern only | Modern only |
| Test coverage | **100%** | 85% | 72% |

## Installation

\`\`\`bash
npm install library-name
# or
yarn add library-name
# or
pnpm add library-name
\`\`\`

### CDN (Browser)

\`\`\`html
<script src="https://cdn.jsdelivr.net/npm/library-name@3/dist/library-name.min.js"></script>
<script>
  const result = LibraryName.doSomething('hello');
</script>
\`\`\`

## Quick Start

\`\`\`typescript
import { doSomething, configure, createClient } from 'library-name';

// Global configuration
configure({
  debug: true,
  timeout: 5000,
  retries: 3,
});

// Basic usage
const result = doSomething('input string');
console.log(result);
// → { value: 'processed: input string', meta: { duration: 2 } }

// Advanced usage with client
const client = createClient({ apiKey: 'your-key' });
const batch = await client.processBatch(['a', 'b', 'c']);
\`\`\`

## API Reference

### \`doSomething(input, options?)\`

Process a single input string and return a result object.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| \`input\` | \`string\` | — | **Required.** The input to process |
| \`options.strict\` | \`boolean\` | \`false\` | Throw on invalid input instead of returning null |
| \`options.timeout\` | \`number\` | \`5000\` | Processing timeout in milliseconds |
| \`options.format\` | \`'json' \\| 'text'\` | \`'json'\` | Output format |

**Returns:** \`Promise<Result>\`

\`\`\`typescript
interface Result {
  value: string;
  meta: {
    duration: number;
    cached: boolean;
  };
}
\`\`\`

### \`configure(options)\`

Set global defaults for all subsequent calls.

### \`createClient(config)\`

Create an isolated client instance with its own configuration.

### \`doSomething.sync(input)\`

Synchronous variant for environments without async support.

## Examples

### Express Middleware

\`\`\`typescript
import express from 'express';
import { doSomething } from 'library-name';

const app = express();

app.use('/api/process', async (req, res) => {
  const result = await doSomething(req.body.input, { strict: true });
  res.json(result);
});
\`\`\`

### React Hook

\`\`\`tsx
import { useState, useCallback } from 'react';
import { doSomething } from 'library-name';

function useProcessor() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const process = useCallback(async (input: string) => {
    setLoading(true);
    try {
      const res = await doSomething(input);
      setResult(res);
    } finally {
      setLoading(false);
    }
  }, []);

  return { result, loading, process };
}
\`\`\`

## FAQ

**Q: Does it work in Node.js and the browser?**
A: Yes. Same API in both environments. Node 16+ and all modern browsers.

**Q: Is it ESM and CJS compatible?**
A: Yes. Import with \`import\` or \`require()\`.

**Q: How do I report a bug?**
A: [Open an issue](https://github.com/org/library-name/issues) with a minimal reproduction.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Good first issues are [labeled here](https://github.com/org/library-name/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).

## License

MIT © [Your Name](https://github.com/yourusername)
`
  },
  {
    id: "opensource-contributing",
    title: "Contributing Guide",
    desc: "Comprehensive contributing guidelines for open-source projects.",
    type: "opensource",
    content: `# Contributing to [Project Name]

Thank you for your interest in contributing! This guide will help you get started.

## Code of Conduct

This project follows the [Contributor Covenant](CODE_OF_CONDUCT.md). By participating, you agree to uphold a welcoming and respectful community.

## Ways to Contribute

| Type | How | Skill Level |
|------|-----|-------------|
| 🐛 Bug reports | [Open an issue](https://github.com/org/project/issues/new?template=bug.md) | Any |
| 💡 Feature requests | [Open a discussion](https://github.com/org/project/discussions) | Any |
| 📝 Documentation | Fix typos, add examples, improve guides | Beginner |
| 🔧 Code | Fix bugs, implement features | Intermediate |
| 🧪 Tests | Improve coverage, add edge cases | Intermediate |
| 🌐 Translations | Help localize the project | Any |
| 👀 Reviews | Review open pull requests | Advanced |

## Getting Started

### Prerequisites

| Tool | Version | Check |
|------|---------|-------|
| Node.js | 18+ | \`node --version\` |
| npm | 9+ | \`npm --version\` |
| Git | 2.30+ | \`git --version\` |

### Setup

\`\`\`bash
# 1. Fork the repo on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/project-name.git
cd project-name

# 2. Add upstream remote
git remote add upstream https://github.com/org/project-name.git

# 3. Install dependencies
npm install

# 4. Verify everything works
npm test
npm run lint
\`\`\`

## Development Workflow

\`\`\`bash
# Always branch from latest main
git checkout main
git pull upstream main

# Create a feature branch
git checkout -b feat/short-description

# Make changes, then verify
npm run dev          # Start dev server
npm test             # Run tests
npm run lint         # Check code style
npm run type-check   # TypeScript validation

# Commit and push
git add .
git commit -m "feat: add short description"
git push origin feat/short-description
\`\`\`

## Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

| Type | Description | Example |
|------|-------------|---------|
| \`feat\` | New feature | \`feat: add CSV export\` |
| \`fix\` | Bug fix | \`fix: handle empty input\` |
| \`docs\` | Documentation only | \`docs: update API examples\` |
| \`refactor\` | Code restructure (no behavior change) | \`refactor: extract parser module\` |
| \`test\` | Adding or updating tests | \`test: add edge cases for parser\` |
| \`chore\` | Build, CI, or tooling | \`chore: update eslint config\` |
| \`perf\` | Performance improvement | \`perf: cache parsed results\` |

## Pull Request Process

1. **Fill out the PR template** completely
2. **Link related issues** — \`Closes #123\`
3. **Update CHANGELOG.md** under \`[Unreleased]\`
4. **Ensure CI passes** — all checks must be green
5. **Request review** from a maintainer
6. **Address feedback** — push additional commits to your branch
7. **Squash merge** — maintainer will squash on merge

### PR Checklist

- [ ] Tests added/updated for changes
- [ ] Documentation updated if needed
- [ ] CHANGELOG.md updated
- [ ] No decrease in test coverage
- [ ] Commit messages follow convention
- [ ] Branch is up to date with \`main\`

## Project Structure

\`\`\`
project-name/
├── src/           # Source code
├── tests/         # Test files (mirror src/ structure)
├── docs/          # Documentation
├── examples/      # Usage examples
├── .github/       # Issue/PR templates, CI workflows
└── CHANGELOG.md
\`\`\`

## Getting Help

- 💬 [GitHub Discussions](https://github.com/org/project/discussions) — questions and ideas
- 🐛 [GitHub Issues](https://github.com/org/project/issues) — bugs and feature requests
- 📧 Email maintainers: maintainers@project.org

**Thank you for making [Project Name] better!**
`
  },
  {
    id: "opensource-security",
    title: "Security Policy",
    desc: "Security policy with vulnerability reporting, supported versions, and disclosure process.",
    type: "opensource",
    content: `# Security Policy

## Supported Versions

| Version | Supported | End of Life |
|---------|-----------|-------------|
| 3.x | ✅ Active | — |
| 2.x | ✅ Security fixes only | 2027-01-01 |
| 1.x | ❌ Unsupported | 2025-06-01 |

Only the latest minor release in each major version receives security patches.

## Reporting a Vulnerability

**Please do NOT report security vulnerabilities through public GitHub issues.**

### How to Report

1. **Email:** security@yourproject.org
2. **PGP Key:** [Download public key](https://yourproject.org/.well-known/pgp-key.txt)
   - Fingerprint: \`ABCD 1234 5678 90EF\`
3. **GitHub:** Use [Private Vulnerability Reporting](https://github.com/org/project/security/advisories/new) if enabled

### What to Include

| Field | Description |
|-------|-------------|
| **Description** | Clear explanation of the vulnerability |
| **Impact** | What an attacker could achieve |
| **Reproduction** | Step-by-step instructions or PoC |
| **Affected versions** | Which versions are vulnerable |
| **Suggested fix** | If you have one (optional but appreciated) |

### Response Timeline

| Stage | Timeline |
|-------|----------|
| Acknowledgment | Within **48 hours** |
| Initial assessment | Within **5 business days** |
| Fix development | Within **30 days** (severity dependent) |
| Public disclosure | Within **90 days** of report (coordinated) |

## Severity Classification

| Severity | Criteria | Response |
|----------|----------|----------|
| **Critical** | Remote code execution, auth bypass | Patch within 7 days |
| **High** | Data exposure, privilege escalation | Patch within 14 days |
| **Medium** | XSS, CSRF, information disclosure | Patch within 30 days |
| **Low** | Minor information leaks, DoS (limited) | Next scheduled release |

## Security Best Practices for Users

### Dependency Auditing

\`\`\`bash
npm audit
npm audit fix
\`\`\`

### Environment Variables

Never commit secrets. Use environment variables or a secrets manager:

\`\`\`env
# .env (never commit this file)
API_SECRET_KEY=use_a_strong_random_key_here
DATABASE_URL=postgresql://user:pass@host:5432/db
\`\`\`

### Input Validation

Always validate and sanitize user input:

\`\`\`typescript
import { z } from 'zod';

const inputSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
});

const safe = inputSchema.parse(userInput);
\`\`\`

## Known Security Considerations

| Area | Risk | Mitigation |
|------|------|------------|
| HTML rendering | XSS via user content | Content Security Policy, sanitization |
| File uploads | Malicious files | Type validation, size limits, sandboxed storage |
| API endpoints | Rate limiting bypass | Per-IP and per-token rate limits |
| Dependencies | Supply chain attacks | Lock files, automated audit in CI |

## Security Hall of Fame

We thank the following researchers for responsibly disclosing vulnerabilities:

| Researcher | Date | Severity | CVE |
|-----------|------|----------|-----|
| [Name] | 2026-03 | Medium | CVE-2026-XXXX |
| [Name] | 2025-11 | Low | CVE-2025-XXXX |

## Security Updates

Subscribe to security advisories:
- Watch this repo with "Security alerts" enabled
- Join the [security mailing list](mailto:security-announce@yourproject.org)
`
  },
  {
    id: "opensource-coc",
    title: "Code of Conduct",
    desc: "Community code of conduct based on Contributor Covenant with enforcement guidelines.",
    type: "opensource",
    content: `# Code of Conduct

## Our Pledge

We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, caste, color, religion, or sexual identity and orientation.

We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.

## Our Standards

### Positive Behavior

- Demonstrating empathy and kindness toward others
- Being respectful of differing opinions, viewpoints, and experiences
- Giving and gracefully accepting constructive feedback
- Accepting responsibility and apologizing to those affected by our mistakes
- Focusing on what is best for the overall community
- Showing gratitude for community contributions, however small

### Unacceptable Behavior

- The use of sexualized language or imagery, and sexual attention or advances of any kind
- Trolling, insulting or derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information without explicit permission
- Doxxing or sharing personal information without consent
- Other conduct which could reasonably be considered inappropriate in a professional setting
- Sustained disruption of talks, meetings, or other community events
- Advocating for, or encouraging, any of the above behavior

## Enforcement Responsibilities

Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful.

## Scope

This Code of Conduct applies within all community spaces, including:

| Space | Examples |
|-------|---------|
| GitHub | Issues, PRs, discussions, code reviews |
| Chat | Discord, Slack, IRC channels |
| Events | Meetups, conferences, hackathons |
| Social media | When officially representing the project |
| Email | Direct communication with maintainers |

It also applies when an individual is officially representing the community in public spaces.

## Enforcement

### Reporting

Report unacceptable behavior to:

| Contact | Channel |
|---------|---------|
| Primary | conduct@project.org |
| Backup | [Team member name] via DM |
| Anonymous | [Google Form / reporting link] |

All complaints will be reviewed and investigated promptly and fairly. All community leaders are obligated to respect the privacy and security of the reporter.

### Enforcement Guidelines

| Level | Consequence | Example Violation |
|-------|-------------|-------------------|
| **1. Correction** | Private written warning | Inappropriate language, first offense |
| **2. Warning** | Warning with consequences for continued behavior | Repeated minor violations |
| **3. Temporary Ban** | Temporary ban from community (1–4 weeks) | Sustained harassment, targeted attacks |
| **4. Permanent Ban** | Permanent ban from all community spaces | Violence, threats, pattern of harassment |

Community leaders will follow these Community Impact Guidelines in determining the consequences for any action they deem in violation of this Code of Conduct.

## Attribution

This Code of Conduct is adapted from the [Contributor Covenant](https://www.contributor-covenant.org), version 2.1, available at [https://www.contributor-covenant.org/version/2/1/code_of_conduct.html](https://www.contributor-covenant.org/version/2/1/code_of_conduct.html).

Community Impact Guidelines were inspired by [Mozilla's code of conduct enforcement ladder](https://github.com/mozilla/diversity).

For answers to common questions about this code of conduct, see the FAQ at [https://www.contributor-covenant.org/faq](https://www.contributor-covenant.org/faq).
`
  },

  // ── RESEARCH ───────────────────────────────────────────
  {
    id: "research-paper",
    title: "Research Paper Repository",
    desc: "Structured academic paper documentation with abstract, methodology, results, and citations.",
    type: "research",
    content: `# [Paper Title]: [Subtitle Describing the Approach]

**Authors:** [Author 1]¹, [Author 2]², [Author 3]¹
**Affiliations:** ¹[Department, University A], ²[Institute B]
**Correspondence:** [author1@university.edu](mailto:author1@university.edu)
**Published:** [Conference/Journal Name], [Month Year]
**arXiv:** [arxiv.org/abs/XXXX.XXXXX](https://arxiv.org/abs/XXXX.XXXXX)

[![Paper PDF](https://img.shields.io/badge/Paper-PDF-red)](paper.pdf)
[![Dataset](https://img.shields.io/badge/Dataset-Available-green)](https://huggingface.co/datasets/org/dataset)
[![Code](https://img.shields.io/badge/Code-GitHub-black)](https://github.com/you/repo)
[![Model](https://img.shields.io/badge/Model-🤗_HuggingFace-yellow)](https://huggingface.co/org/model)

## Abstract

[2–4 sentence abstract. State the problem, your approach, key quantitative results, and broader implications. Example:]

> We present **[Method Name]**, a novel approach to [problem] that achieves [key result]. Unlike prior work that relies on [limitation], our method [innovation]. Experiments on [N] benchmarks demonstrate improvements of [X]% over the previous state of the art, while requiring [Y]× fewer compute resources. We release code, pretrained models, and evaluation scripts to facilitate reproducibility.

## Key Contributions

1. **[Contribution 1]** — We propose [method/technique] that addresses [specific limitation of prior work]
2. **[Contribution 2]** — We introduce [dataset/benchmark] with [N] samples across [M] domains
3. **[Contribution 3]** — We demonstrate [X]% improvement on [benchmark] with comprehensive ablation studies
4. **Open Resources** — Code, models, and data available under [license]

## Methodology

### Problem Formulation

Given input \`X\` and parameters \`θ\`, we optimize:

\`\`\`
L(θ) = L_task(θ) + λ · L_regularization(θ)
\`\`\`

### Architecture Overview

\`\`\`
Input → Encoder → [Proposed Module] → Decoder → Output
                      ↓
              Auxiliary Loss
\`\`\`

### Dataset

| Dataset | Samples | Domains | Train/Val/Test | Source |
|---------|---------|---------|----------------|--------|
| [Dataset A] | 50,000 | 12 | 40K / 5K / 5K | [Link] |
| [Dataset B] | 10,000 | 3 | 8K / 1K / 1K | [Link] |
| [Our Dataset] | 25,000 | 8 | 20K / 2.5K / 2.5K | This work |

### Training Details

| Hyperparameter | Value |
|----------------|-------|
| Base model | [Model Name] |
| Optimizer | AdamW (β₁=0.9, β₂=0.999) |
| Learning rate | 3e-4 (cosine decay) |
| Batch size | 128 (effective 512 with grad accumulation) |
| Epochs | 50 (early stopping, patience=5) |
| Warmup steps | 1,000 |
| Weight decay | 0.01 |
| Hardware | 4× NVIDIA A100 80GB |
| Training time | ~18 hours |
| Framework | PyTorch 2.1, HuggingFace Transformers 4.36 |

## Results

### Main Results

| Method | [Metric 1] | [Metric 2] | [Metric 3] | Params |
|--------|-----------|-----------|-----------|--------|
| Baseline A | 72.1 | 0.698 | 45.2 | 110M |
| Baseline B | 78.4 | 0.762 | 42.8 | 340M |
| Prior SOTA | 83.2 | 0.821 | 38.1 | 1.2B |
| **Ours (full)** | **87.6** | **0.869** | **35.4** | 125M |
| Ours (ablation) | 85.1 | 0.847 | 36.2 | 125M |

### Ablation Study

| Component Removed | Δ [Metric 1] | Δ [Metric 2] |
|-------------------|-------------|-------------|
| Proposed module | -4.2% | -0.038 |
| Auxiliary loss | -1.8% | -0.015 |
| Data augmentation | -2.1% | -0.019 |
| Full model | — | — |

## Reproducing Results

\`\`\`bash
git clone https://github.com/you/research-repo
cd research-repo
pip install -r requirements.txt

# Download data
python scripts/download_data.py

# Train
python train.py --config configs/main.yaml

# Evaluate
python evaluate.py --checkpoint checkpoints/best.pt --split test

# Expected output: [Metric 1]=87.4±0.3, [Metric 2]=0.866±0.005
\`\`\`

## Citation

\`\`\`bibtex
@inproceedings{author2026title,
  title     = {[Paper Title]: [Subtitle]},
  author    = {Author, First and Author, Second and Author, Third},
  booktitle = {Proceedings of [Conference Name]},
  year      = {2026},
  pages     = {1--12}
}
\`\`\`

## License

Code and models: [Apache 2.0](LICENSE). Dataset: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
`
  },
  {
    id: "research-dataset",
    title: "Research Dataset Card",
    desc: "Dataset card with schema, statistics, collection process, and usage instructions.",
    type: "research",
    content: `# [Dataset Name] — [Short Description]

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![HuggingFace](https://img.shields.io/badge/🤗-Dataset-yellow)](https://huggingface.co/datasets/org/dataset-name)
[![Size](https://img.shields.io/badge/Samples-25K-blue)]()
[![Version](https://img.shields.io/badge/Version-2.1-green)]()

## Dataset Summary

[Dataset Name] is a [size]-sample dataset for [task] across [N] domains. Collected from [sources] between [date range], it addresses [gap in existing datasets] and includes [unique features like annotations, metadata, etc.].

## Dataset Details

| Property | Value |
|----------|-------|
| **Homepage** | https://dataset.example.com |
| **Repository** | https://github.com/org/dataset-name |
| **Paper** | [arxiv.org/abs/XXXX.XXXXX](https://arxiv.org/abs/XXXX.XXXXX) |
| **Size** | 25,000 samples (1.2 GB uncompressed) |
| **Format** | JSON Lines (.jsonl) / Parquet |
| **Language(s)** | English (primary), Spanish (5%) |
| **Task(s)** | Text classification, sentiment analysis |
| **License** | CC BY 4.0 |
| **Version** | 2.1 (July 2026) |
| **Curated by** | [Lab/Organization Name] |

## Data Structure

\`\`\`json
{
  "id": "sample_00001",
  "text": "The product exceeded my expectations in every way.",
  "label": "positive",
  "label_id": 2,
  "confidence": 0.95,
  "metadata": {
    "source": "amazon_reviews",
    "domain": "electronics",
    "language": "en",
    "word_count": 8,
    "annotator_id": "ann_042",
    "collection_date": "2025-11-15",
    "quality_score": 0.92
  }
}
\`\`\`

### Field Descriptions

| Field | Type | Description |
|-------|------|-------------|
| \`id\` | string | Unique sample identifier |
| \`text\` | string | Input text (max 512 tokens) |
| \`label\` | string | Human-readable label |
| \`label_id\` | int | Numeric label (0=negative, 1=neutral, 2=positive) |
| \`confidence\` | float | Inter-annotator agreement score |
| \`metadata.source\` | string | Data collection source |
| \`metadata.domain\` | string | Product/service domain |
| \`metadata.quality_score\` | float | Automated quality filter score |

## Splits

| Split | Samples | % of Total | Label Distribution (neg/neu/pos) |
|-------|---------|-----------|----------------------------------|
| Train | 20,000 | 80% | 30% / 20% / 50% |
| Validation | 2,500 | 10% | 30% / 20% / 50% |
| Test | 2,500 | 10% | 30% / 20% / 50% |

## Collection Process

1. **Source identification** — Identified 5 public review platforms with permissive licenses
2. **Filtering** — Removed duplicates, non-English text, and samples < 5 words
3. **Annotation** — 3 annotators per sample via Label Studio; majority vote for label
4. **Quality control** — Inter-annotator agreement (Cohen's κ = 0.84); removed samples below 0.7
5. **Deduplication** — MinHash LSH with 0.9 similarity threshold

## Usage

### HuggingFace Datasets

\`\`\`python
from datasets import load_dataset

dataset = load_dataset("org/dataset-name")
print(dataset["train"][0])
print(f"Train size: {len(dataset['train'])}")
\`\`\`

### Direct Download

\`\`\`bash
wget https://dataset.example.com/v2.1/dataset-name.jsonl.gz
gunzip dataset-name.jsonl.gz
\`\`\`

### Loading with Pandas

\`\`\`python
import pandas as pd

df = pd.read_json("dataset-name.jsonl", lines=True)
print(df.label.value_counts())
print(df.metadata.apply(pd.Series).domain.value_counts())
\`\`\`

## Baseline Results

| Model | Accuracy | F1 (macro) | F1 (weighted) |
|-------|----------|-----------|---------------|
| Majority class | 50.0% | 0.222 | 0.333 |
| TF-IDF + LogReg | 78.3% | 0.761 | 0.782 |
| BERT-base | 89.1% | 0.885 | 0.891 |
| RoBERTa-large | 91.4% | 0.910 | 0.914 |

## Known Limitations

- **Language:** English-only (5% Spanish in v2.1, not fully validated)
- **Domain bias:** Over-represented in electronics and books categories
- **Temporal:** Collected 2024–2025; may not reflect current language patterns
- **Annotation:** Sarcasm and mixed sentiment often labeled as neutral
- **Size:** May be insufficient for training large models from scratch

## Ethical Considerations

- All source data was publicly available with permissive licenses
- PII was removed using automated detection + manual review
- Annotators were compensated at local fair wage rates
- Dataset should not be used for surveillance or discriminatory profiling

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 2.1 | Jul 2026 | Added 5K Spanish samples, quality scores |
| 2.0 | Mar 2026 | Expanded to 25K samples, new domains |
| 1.0 | Sep 2025 | Initial release (10K samples) |

## Citation

\`\`\`bibtex
@dataset{author2026datasetname,
  author  = {Author, First and Author, Second},
  title   = {[Dataset Name]: A [Size]-Sample Dataset for [Task]},
  year    = {2026},
  publisher = {HuggingFace},
  url     = {https://huggingface.co/datasets/org/dataset-name}
}
\`\`\`
`
  },
  {
    id: "research-literature",
    title: "Literature Review Notes",
    desc: "Structured literature review with paper summaries, comparison matrix, and research gaps.",
    type: "research",
    content: `# Literature Review: [Research Topic]

**Author:** [Your Name]
**Institution:** [University / Lab]
**Date Started:** 2026-07-07
**Last Updated:** 2026-07-07
**Advisor:** [Advisor Name]

## Research Question

> How can [specific technique/approach] be applied to [problem domain] to improve [metric/outcome] while addressing [key constraint]?

## Scope & Search Strategy

### Databases Searched

| Database | Query | Results | Included |
|----------|-------|---------|----------|
| Google Scholar | \`"[topic]" AND "[method]"\` | 342 | 28 |
| IEEE Xplore | \`[topic] AND [method]\` | 156 | 15 |
| ACL Anthology | \`[topic]\` | 89 | 12 |
| arXiv (cs.CL) | \`[topic]\` | 210 | 18 |
| **Total unique** | | **~500** | **45** |

### Inclusion Criteria

- Published 2020–2026
- Peer-reviewed or widely cited preprints (>50 citations)
- Directly addresses [topic] or closely related sub-problems
- Reports quantitative results on standard benchmarks

### Exclusion Criteria

- Survey papers (referenced separately)
- Non-English publications
- No publicly available implementation or sufficient methodological detail

## Paper Summaries

### Tier 1: Directly Relevant

#### [Author et al., 2025] — "[Paper Title]"

| Field | Detail |
|-------|--------|
| **Venue** | NeurIPS 2025 |
| **Citations** | 142 |
| **Code** | [github.com/...](https://github.com) |
| **Key Idea** | [1-2 sentence summary of approach] |
| **Results** | [Metric]: [X]% on [Benchmark] (SOTA at time of publication) |
| **Strengths** | Novel architecture, strong empirical results, ablation studies |
| **Weaknesses** | Requires large compute, limited to English, no code for data pipeline |
| **Relevance** | ★★★★★ — Directly addresses our research question |

#### [Author et al., 2024] — "[Paper Title]"

| Field | Detail |
|-------|--------|
| **Venue** | ACL 2024 |
| **Citations** | 89 |
| **Key Idea** | [Summary] |
| **Results** | [Metric]: [Y]% on [Benchmark] |
| **Strengths** | Efficient, runs on consumer GPU |
| **Weaknesses** | Limited evaluation, small dataset |
| **Relevance** | ★★★★☆ — Relevant method, different application domain |

### Tier 2: Background & Foundations

#### [Author et al., 2023] — "[Foundational Paper]"

- Introduced [key concept] widely adopted in subsequent work
- Established [benchmark] now standard in the field
- Relevance: ★★★☆☆ — Foundational but predates recent advances

## Comparison Matrix

| Paper | Year | Method | Dataset | [Metric 1] | [Metric 2] | Compute | Code |
|-------|------|--------|---------|-----------|-----------|---------|------|
| [A et al.] | 2025 | Transformer + X | Benchmark-1 | 87.6 | 0.869 | 4×A100 | ✅ |
| [B et al.] | 2024 | CNN + Y | Benchmark-1 | 83.2 | 0.821 | 1×V100 | ✅ |
| [C et al.] | 2024 | GNN + Z | Benchmark-2 | 79.1 | 0.785 | 2×A100 | ❌ |
| [D et al.] | 2023 | RNN baseline | Benchmark-1 | 72.4 | 0.710 | CPU | ✅ |
| **Our target** | — | TBD | Both | >85.0 | >0.85 | ≤2×A100 | ✅ |

## Thematic Analysis

### Theme 1: [e.g., Attention Mechanisms]

Most recent work (2024–2025) has shifted from standard self-attention to [variant]. [A et al., 2025] demonstrated that [finding], while [B et al., 2024] showed [contrasting finding]. The consensus appears to be [synthesis].

### Theme 2: [e.g., Data Efficiency]

A growing body of work focuses on achieving competitive results with less data. [C et al., 2024] achieved [X]% with only [N] samples using [technique]. This is particularly relevant given our constraint of [limited labeled data].

### Theme 3: [e.g., Evaluation Practices]

Several papers ([D et al., 2023]; [E et al., 2025]) have criticized the over-reliance on [benchmark], arguing that [concern]. We should evaluate on both [benchmark-1] and [benchmark-2].

## Research Gaps

| # | Gap | Evidence | Our Opportunity |
|---|-----|----------|-----------------|
| 1 | No work combines [X] with [Y] | 0/45 papers | Novel architecture |
| 2 | Limited evaluation on [domain] | Only 3 papers test on non-English | Multilingual extension |
| 3 | Compute requirements prohibitive | 80% require ≥4 GPUs | Efficient variant |
| 4 | Reproducibility issues | 40% no public code | Full open-source release |

## Proposed Approach

Based on this review, we propose:

1. **[Method component 1]** — inspired by [A et al., 2025] but adapted for [constraint]
2. **[Method component 2]** — addressing gap #1 by combining [X] and [Y]
3. **Evaluation** — both [benchmark-1] and [benchmark-2], plus new [domain] test set

## References

1. [Author, A., & Author, B. (2025). Paper title. *NeurIPS 2025*.](https://arxiv.org/abs/XXXX.XXXXX)
2. [Author, C., et al. (2024). Paper title. *ACL 2024*.](https://aclanthology.org/XXXX.XXXXX)
3. [Author, D., et al. (2023). Paper title. *Journal Name, 45*(3), 123–145.](https://doi.org/XX.XXXX/XXXX)
`
  },
  {
    id: "research-lab-notebook",
    title: "Lab Notebook Entry",
    desc: "Structured lab notebook entry with hypothesis, protocol, observations, and next steps.",
    type: "research",
    content: `# Lab Notebook — Entry #047

| Field | Value |
|-------|-------|
| **Date** | 2026-07-07 |
| **Researcher** | [Your Name] |
| **Project** | [Project Name] |
| **Experiment ID** | EXP-047 |
| **Status** | ✅ Complete |
| **Related Entries** | #045 (baseline), #046 (data prep) |

## Objective

Test whether increasing dropout from 0.1 to 0.3 reduces the train-validation accuracy gap observed in EXP-045 (baseline overfitting: 7.2% gap).

## Hypothesis

> Adding stronger regularization (dropout 0.3 + label smoothing 0.1) will reduce the train-val accuracy gap to < 3% while maintaining validation accuracy within 1% of the baseline (87.3%).

## Background

From EXP-045 (baseline BERT fine-tuning):
- Train accuracy: 94.2%, Val accuracy: 87.3% (gap: 6.9%)
- Class 3 recall: 0.72 (lowest among all classes)
- Model converged by epoch 2; epochs 3–5 showed minimal improvement

## Protocol

### Configuration

\`\`\`yaml
experiment_id: EXP-047
model: bert-base-uncased
task: text-classification
num_labels: 5

# Changes from EXP-045
dropout: 0.3          # was 0.1
label_smoothing: 0.1   # was 0.0
learning_rate: 1e-5    # was 2e-5

# Unchanged
batch_size: 32
epochs: 5
optimizer: AdamW
weight_decay: 0.01
warmup_ratio: 0.1
seed: 42
\`\`\`

### Environment

| Component | Version |
|-----------|---------|
| Python | 3.11.4 |
| PyTorch | 2.1.0 |
| Transformers | 4.36.0 |
| GPU | NVIDIA A100 40GB |
| CUDA | 12.1 |

### Procedure

1. Load preprocessed dataset from \`data/processed/v2/\` (same as EXP-045)
2. Initialize model with modified dropout
3. Train for 5 epochs with early stopping (patience=2)
4. Evaluate on validation and test sets
5. Run per-class error analysis
6. Compare against EXP-045 results

## Observations

### Training Log

| Epoch | Train Loss | Val Loss | Train Acc | Val Acc | Val F1 | Time |
|-------|-----------|---------|-----------|---------|--------|------|
| 1 | 0.412 | 0.389 | 88.1% | 86.4% | 0.859 | 4m 12s |
| 2 | 0.287 | 0.312 | 91.3% | 88.7% | 0.881 | 4m 08s |
| 3 | 0.241 | 0.298 | 92.8% | 89.1% | 0.887 | 4m 10s |
| 4 | 0.218 | 0.305 | 93.5% | 88.9% | 0.884 | 4m 09s |
| 5 (early stop) | — | — | — | — | — | — |

Best checkpoint: Epoch 3 (val F1 = 0.887)

### Per-Class Results (Validation)

| Class | Precision | Recall | F1 | Support | Δ vs EXP-045 |
|-------|-----------|--------|----|---------|--------------|
| Class 0 | 0.91 | 0.93 | 0.92 | 750 | +0.02 |
| Class 1 | 0.88 | 0.86 | 0.87 | 500 | +0.03 |
| Class 2 | 0.90 | 0.91 | 0.91 | 600 | +0.01 |
| Class 3 | 0.82 | 0.78 | 0.80 | 400 | **+0.06** |
| Class 4 | 0.93 | 0.94 | 0.94 | 250 | +0.00 |

### Comparison with Baseline (EXP-045)

| Metric | EXP-045 | EXP-047 | Δ |
|--------|---------|---------|---|
| Val Accuracy | 87.3% | 89.1% | **+1.8%** ✅ |
| Val F1 | 0.871 | 0.887 | **+0.016** ✅ |
| Train-Val Gap | 6.9% | 3.7% | **-3.2%** ✅ |
| Class 3 Recall | 0.72 | 0.78 | **+0.06** ✅ |
| Training Time | 22 min | 20 min | -2 min |

## Conclusions

1. **Hypothesis confirmed** — Regularization reduced overfitting gap from 6.9% to 3.7%
2. **Validation accuracy improved** — +1.8% (89.1% vs 87.3%), exceeding our 1% threshold
3. **Class 3 improved most** — Recall +6%, suggesting regularization helps minority class
4. **Early stopping at epoch 3** — Model converges faster with regularization

## Artifacts

| Artifact | Path |
|----------|------|
| Checkpoint | \`checkpoints/EXP-047/best.pt\` |
| Training log | \`logs/EXP-047/training.json\` |
| W&B run | [wandb.ai/project/runs/abc123](https://wandb.ai) |
| Config | \`configs/EXP-047.yaml\` |

## Next Steps

- [ ] **EXP-048** — Test data augmentation (back-translation) on top of EXP-047 config
- [ ] **EXP-049** — Try RoBERTa-large with same regularization settings
- [ ] Error analysis on remaining Class 3 failures (22% false negatives)
- [ ] Update model card with EXP-047 results

## Notes

Training was stable across 3 seeds (42, 123, 456) with val accuracy 88.7–89.3%. Will use seed 42 for reproducibility.
`
  },

  // ── DEVOPS / IaC ───────────────────────────────────────
  {
    id: "devops-iac",
    title: "Infrastructure as Code Guide",
    desc: "Infrastructure repo guide with Terraform structure, deployment, and runbooks.",
    type: "devops",
    content: `# Infrastructure — [Project / Environment Name]

> Manages cloud infrastructure for **[Project Name]** using Terraform, Ansible, and AWS.

[![Terraform](https://img.shields.io/badge/Terraform-1.7-623CE4?logo=terraform)](https://www.terraform.io/)
[![Ansible](https://img.shields.io/badge/Ansible-2.16-EE0000?logo=ansible)](https://www.ansible.com/)
[![AWS](https://img.shields.io/badge/AWS-Deployed-FF9900?logo=amazon-aws)](https://aws.amazon.com/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-1.29-326CE5?logo=kubernetes)](https://kubernetes.io/)

## Architecture Overview

\`\`\`
┌─────────────────────────────────────────────────────────┐
│                  AWS Region: us-east-1                   │
│                                                         │
│  ┌──── VPC (10.0.0.0/16) ──────────────────────────┐  │
│  │                                                   │  │
│  │  Public Subnets (10.0.1.0/24, 10.0.2.0/24)     │  │
│  │  ┌──────────┐  ┌──────────┐                      │  │
│  │  │   ALB    │  │ NAT GW   │                      │  │
│  │  └────┬─────┘  └──────────┘                      │  │
│  │       │                                           │  │
│  │  Private Subnets (10.0.10.0/24, 10.0.11.0/24)  │  │
│  │  ┌────▼─────┐  ┌──────────┐  ┌──────────────┐  │  │
│  │  │   ECS    │  │  Redis   │  │ RDS Postgres │  │  │
│  │  │ Fargate  │  │ Cluster  │  │  (Multi-AZ)  │  │  │
│  │  └──────────┘  └──────────┘  └──────────────┘  │  │
│  │                                                   │  │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
│  S3 (assets) │ CloudFront (CDN) │ Route53 (DNS)        │
└─────────────────────────────────────────────────────────┘
\`\`\`

## Repository Structure

\`\`\`
infrastructure/
├── terraform/
│   ├── modules/
│   │   ├── vpc/              # VPC, subnets, NAT, IGW
│   │   ├── ecs/              # ECS cluster, services, task defs
│   │   ├── rds/              # PostgreSQL with backups
│   │   ├── alb/              # Application Load Balancer
│   │   ├── redis/            # ElastiCache Redis
│   │   ├── s3/               # Buckets with lifecycle policies
│   │   └── monitoring/       # CloudWatch alarms, dashboards
│   ├── environments/
│   │   ├── dev/              # Development (minimal resources)
│   │   ├── staging/          # Staging (prod-like, smaller)
│   │   └── prod/             # Production (HA, multi-AZ)
│   ├── backend.tf            # S3 remote state config
│   └── versions.tf             # Provider version constraints
├── ansible/
│   ├── roles/
│   │   ├── common/           # Base server config
│   │   ├── docker/           # Docker installation
│   │   └── monitoring/       # Node exporter, log agents
│   ├── inventories/
│   │   ├── dev.yml
│   │   ├── staging.yml
│   │   └── prod.yml
│   └── site.yml
├── scripts/
│   ├── deploy.sh             # Orchestrated deployment
│   ├── rollback.sh           # Rollback to previous version
│   ├── plan-all.sh           # Plan all environments
│   └── cost-report.sh        # Monthly cost breakdown
└── docs/
    ├── architecture.md
    └── runbooks/
\`\`\`

## Prerequisites

| Tool | Version | Install |
|------|---------|---------|
| Terraform | ≥ 1.7 | \`brew install terraform\` |
| AWS CLI | ≥ 2.0 | \`brew install awscli\` |
| Ansible | ≥ 2.16 | \`pip install ansible\` |
| kubectl | ≥ 1.29 | \`brew install kubectl\` |
| direnv | latest | \`brew install direnv\` |

## Getting Started

\`\`\`bash
# Configure AWS credentials
aws configure
# or use SSO: aws sso login --profile project-dev

# Navigate to target environment
cd terraform/environments/dev

# Initialize Terraform (first time only)
terraform init

# Review planned changes
terraform plan -out=plan.tfplan

# Apply changes
terraform apply plan.tfplan
\`\`\`

## Environment Variables

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| \`AWS_PROFILE\` | AWS CLI profile | ✅ | \`project-dev\` |
| \`TF_VAR_environment\` | Target environment | ✅ | \`dev\` |
| \`TF_VAR_db_password\` | RDS master password | ✅ | (from secrets manager) |
| \`TF_VAR_domain_name\` | Application domain | Prod only | \`app.example.com\` |
| \`TF_VAR_instance_type\` | ECS task size | No | \`FARGATE_2vCPU_4GB\` |

## Deployment Runbooks

### Standard Deployment

\`\`\`bash
./scripts/deploy.sh --env staging --version v1.2.0
# Steps: terraform plan → apply → ansible playbook → smoke tests
\`\`\`

### Production Deployment

\`\`\`bash
# Requires approval
./scripts/deploy.sh --env prod --version v1.2.0 --require-approval
# Steps: plan review → manual approval → apply → canary deploy → full rollout
\`\`\`

### Rollback

\`\`\`bash
./scripts/rollback.sh --env prod --version v1.1.0
# Steps: revert ECS task definition → verify health checks → notify team
\`\`\`

## Cost Estimates (Monthly)

| Resource | Dev | Staging | Production |
|----------|-----|---------|------------|
| ECS Fargate | $15 | $35 | $140 |
| RDS PostgreSQL | $0 (shared) | $25 | $90 |
| ElastiCache Redis | $0 | $15 | $45 |
| ALB | $0 | $18 | $22 |
| S3 + CloudFront | $2 | $5 | $15 |
| NAT Gateway | $0 | $32 | $64 |
| CloudWatch | $1 | $3 | $10 |
| **Total** | **~$18** | **~$133** | **~$386** |

## Monitoring & Alerts

| Alert | Threshold | Channel | Runbook |
|-------|-----------|---------|---------|
| High CPU | > 85% for 5 min | PagerDuty | [runbook/high-cpu.md](docs/runbooks/high-cpu.md) |
| RDS connections | > 80% pool | Slack #alerts | [runbook/db-connections.md](docs/runbooks/db-connections.md) |
| 5xx error rate | > 1% for 3 min | PagerDuty | [runbook/5xx-errors.md](docs/runbooks/5xx-errors.md) |
| Disk usage | > 90% | Slack #alerts | [runbook/disk-usage.md](docs/runbooks/disk-usage.md) |

## State Management

- **Backend:** S3 bucket \`project-terraform-state\` with DynamoDB locking
- **Workspaces:** One workspace per environment
- **Never** commit \`.tfstate\` files to git
`
  },
  {
    id: "devops-cicd",
    title: "CI/CD Pipeline Documentation",
    desc: "GitHub Actions pipeline stages, environments, deployment gates, and rollback procedures.",
    type: "devops",
    content: `# CI/CD Pipeline Documentation

**Project:** [Project Name]
**Platform:** GitHub Actions
**Last Updated:** 2026-07-07
**Owner:** [Team Name]

## Pipeline Overview

\`\`\`
Push/PR → Lint & Type Check → Unit Tests → Build Image → Integration Tests
                                                              ↓
                                              Deploy Staging (auto)
                                                              ↓
                                              E2E Tests → Deploy Prod (manual)
\`\`\`

## Workflows

| Workflow | Trigger | Duration | Purpose |
|----------|---------|----------|---------|
| \`ci.yml\` | Push to any branch, PRs | ~8 min | Lint, test, build |
| \`deploy-staging.yml\` | Merge to \`develop\` | ~12 min | Deploy to staging |
| \`deploy-prod.yml\` | Manual dispatch | ~15 min | Deploy to production |
| \`rollback.yml\` | Manual dispatch | ~5 min | Rollback production |
| \`security-scan.yml\` | Weekly + on PR | ~10 min | Dependency & container scan |

## Stage Details

### 1. Lint & Code Quality

\`\`\`yaml
lint:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with: { node-version: '20', cache: 'npm' }
    - run: npm ci
    - run: npm run lint
    - run: npm run type-check
    - run: npm run format:check
\`\`\`

| Check | Tool | Failure Action |
|-------|------|----------------|
| ESLint | eslint | Block merge |
| TypeScript | tsc --noEmit | Block merge |
| Prettier | prettier --check | Block merge |
| Commit messages | commitlint | Warn only |

### 2. Build & Push Docker Image

\`\`\`yaml
build:
  needs: [lint, test-unit]
  outputs:
    image-tag: \${{ steps.meta.outputs.tags }}
  steps:
    - uses: docker/build-push-action@v5
      with:
        push: true
        tags: \${{ env.REGISTRY }}/\${{ env.IMAGE }}:\${{ github.sha }}
        cache-from: type=gha
        cache-to: type=gha,mode=max
\`\`\`

### 3. Test Suite

| Test Type | Framework | Coverage Threshold | Duration |
|-----------|-----------|-------------------|----------|
| Unit | Jest | 80% lines | ~2 min |
| Integration | Supertest + Testcontainers | 70% lines | ~4 min |
| E2E | Playwright | Key user flows | ~6 min |
| Contract | Pact | API contracts | ~2 min |

### 4. Deployment Gates

| Environment | Branch | Auto-Deploy | Approval | Smoke Tests |
|-------------|--------|-------------|----------|-------------|
| Dev | Any feature branch | ✅ On push | None | Basic health check |
| Staging | \`develop\` | ✅ On merge | None | Full test suite |
| Production | \`main\` | ❌ Manual | 1 reviewer | Full + canary (10%) |

## Environments

| Environment | URL | Cluster | Replicas | Database |
|-------------|-----|---------|----------|----------|
| Dev | https://dev.app.internal.com | ECS dev | 1 | Shared dev RDS |
| Staging | https://staging.app.com | ECS staging | 2 | Staging RDS |
| Production | https://app.com | ECS prod | 4–8 (auto-scale) | Prod RDS (Multi-AZ) |

## Secrets Management

| Secret | Storage | Rotation |
|--------|---------|----------|
| \`AWS_ACCESS_KEY_ID\` | GitHub Secrets | 90 days |
| \`AWS_SECRET_ACCESS_KEY\` | GitHub Secrets | 90 days |
| \`DATABASE_URL\` | AWS Secrets Manager | 30 days |
| \`DOCKER_REGISTRY_TOKEN\` | GitHub Secrets | 90 days |
| \`SLACK_WEBHOOK_URL\` | GitHub Secrets | On compromise |

## Rollback Procedure

### Automated Rollback

\`\`\`bash
# Via GitHub Actions UI:
# Actions → Rollback Production → Run workflow
# Input: number of deployment steps to rollback (default: 1)
\`\`\`

### Manual Rollback

1. Identify last stable image tag: \`aws ecs describe-services --cluster prod\`
2. Update task definition to previous image
3. Force new deployment: \`aws ecs update-service --force-new-deployment\`
4. Monitor health checks for 15 minutes
5. Verify key metrics in DataDog dashboard
6. File post-incident report within 24 hours

## Notifications

| Event | Channel | Recipients |
|-------|---------|------------|
| Build failed | Slack #ci-alerts | PR author + team |
| Staging deployed | Slack #deployments | Team |
| Prod deploy started | Slack #deployments | Team + on-call |
| Prod deploy failed | PagerDuty | On-call engineer |
| Security scan findings | Slack #security | Security team |
`
  },
  {
    id: "devops-kubernetes",
    title: "Kubernetes Deployment Guide",
    desc: "K8s deployment manifests, Helm charts, scaling, and troubleshooting guide.",
    type: "devops",
    content: `# Kubernetes Deployment Guide — [Application Name]

**Cluster:** EKS \`prod-cluster\` (us-east-1)
**Namespace:** \`app-production\`
**Helm Chart:** \`charts/appname\` v2.4.0

## Quick Reference

\`\`\`bash
# Check deployment status
kubectl get pods -n app-production -l app=appname

# View logs
kubectl logs -f deployment/appname -n app-production --tail=100

# Scale manually
kubectl scale deployment/appname --replicas=6 -n app-production

# Rollout status
kubectl rollout status deployment/appname -n app-production
\`\`\`

## Architecture

\`\`\`
Internet → Ingress (nginx) → Service (ClusterIP) → Deployment (3-8 pods)
                                                        ↓
                                              ConfigMap + Secrets
                                                        ↓
                                              External: RDS, Redis, S3
\`\`\`

## Resource Manifests

### Deployment

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: appname
  namespace: app-production
  labels:
    app: appname
    version: "2.4.0"
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  selector:
    matchLabels:
      app: appname
  template:
    metadata:
      labels:
        app: appname
    spec:
      containers:
        - name: appname
          image: registry.example.com/appname:2.4.0
          ports:
            - containerPort: 3000
          resources:
            requests:
              cpu: 250m
              memory: 512Mi
            limits:
              cpu: 1000m
              memory: 1Gi
          envFrom:
            - configMapRef:
                name: appname-config
            - secretRef:
                name: appname-secrets
          livenessProbe:
            httpGet:
              path: /health
              port: 3000
            initialDelaySeconds: 15
            periodSeconds: 10
          readinessProbe:
            httpGet:
              path: /ready
              port: 3000
            initialDelaySeconds: 5
            periodSeconds: 5
\`\`\`

### Horizontal Pod Autoscaler

\`\`\`yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: appname-hpa
  namespace: app-production
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: appname
  minReplicas: 3
  maxReplicas: 8
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70
    - type: Resource
      resource:
        name: memory
        target:
          type: Utilization
          averageUtilization: 80
\`\`\`

## Helm Deployment

\`\`\`bash
# Install/upgrade
helm upgrade --install appname ./charts/appname \\
  --namespace app-production \\
  --values ./charts/appname/values-prod.yaml \\
  --set image.tag=2.4.0 \\
  --wait --timeout 5m

# Dry run
helm upgrade --install appname ./charts/appname \\
  --namespace app-production \\
  --values ./charts/appname/values-prod.yaml \\
  --dry-run --debug
\`\`\`

## Values (Production)

| Parameter | Value | Description |
|-----------|-------|-------------|
| \`replicaCount\` | 3 | Initial replicas |
| \`image.tag\` | 2.4.0 | Container image tag |
| \`resources.requests.cpu\` | 250m | CPU request per pod |
| \`resources.limits.memory\` | 1Gi | Memory limit per pod |
| \`autoscaling.enabled\` | true | HPA enabled |
| \`autoscaling.maxReplicas\` | 8 | Max scale-out |
| \`ingress.host\` | app.example.com | Public hostname |
| \`ingress.tls\` | true | HTTPS enabled |

## Troubleshooting

| Symptom | Diagnosis | Fix |
|---------|-----------|-----|
| Pods CrashLoopBackOff | \`kubectl logs <pod> --previous\` | Check env vars, image tag, entrypoint |
| OOMKilled | \`kubectl describe pod <pod>\` | Increase memory limits or fix memory leak |
| 502 from Ingress | \`kubectl get endpoints\` | Pods not ready; check readiness probe |
| Slow rollout | \`kubectl rollout status\` | Check image pull, resource constraints |
| HPA not scaling | \`kubectl describe hpa\` | Verify metrics-server is running |

## Useful Commands

\`\`\`bash
# Port-forward for local debugging
kubectl port-forward svc/appname 3000:3000 -n app-production

# Execute shell in pod
kubectl exec -it deployment/appname -n app-production -- /bin/sh

# View events
kubectl get events -n app-production --sort-by='.lastTimestamp'

# Rollback deployment
kubectl rollout undo deployment/appname -n app-production
\`\`\`
`
  },
  {
    id: "devops-monitoring",
    title: "Monitoring & Alerting Setup",
    desc: "Observability stack configuration with metrics, logs, alerts, and dashboards.",
    type: "devops",
    content: `# Monitoring & Alerting — [Service Name]

**Stack:** Prometheus + Grafana + Alertmanager + Loki
**Owner:** [Team Name]
**On-call:** [PagerDuty rotation link]

## Observability Stack

| Component | Purpose | URL |
|-----------|---------|-----|
| Grafana | Dashboards & visualization | https://grafana.internal.com |
| Prometheus | Metrics collection & storage | https://prometheus.internal.com |
| Alertmanager | Alert routing & deduplication | https://alertmanager.internal.com |
| Loki | Log aggregation | https://loki.internal.com |
| Tempo | Distributed tracing | https://tempo.internal.com |

## Key Dashboards

| Dashboard | UID | Purpose |
|-----------|-----|---------|
| Service Overview | \`svc-overview\` | Request rate, latency, errors (RED metrics) |
| Infrastructure | \`infra-health\` | CPU, memory, disk, network per node |
| Database | \`db-postgres\` | Connections, query latency, replication lag |
| Business Metrics | \`biz-kpis\` | Signups, conversions, revenue events |
| CI/CD | \`cicd-pipeline\` | Build times, deploy frequency, failure rate |

## SLIs & SLOs

| SLI | SLO Target | Measurement Window | Error Budget |
|-----|-----------|-------------------|--------------|
| Availability | 99.9% (43.8 min downtime/mo) | 30-day rolling | 43.8 min |
| Latency (p95) | < 200ms | 30-day rolling | 5% of requests |
| Latency (p99) | < 500ms | 30-day rolling | 1% of requests |
| Error rate | < 0.1% | 30-day rolling | 0.1% of requests |

## Alert Rules

### Critical (PagerDuty — immediate)

\`\`\`yaml
- alert: ServiceDown
  expr: up{job="appname"} == 0
  for: 1m
  labels:
    severity: critical
  annotations:
    summary: "AppName service is down"
    runbook: "https://wiki.internal.com/runbooks/service-down"

- alert: HighErrorRate
  expr: rate(http_requests_total{status=~"5.."}[5m]) / rate(http_requests_total[5m]) > 0.05
  for: 3m
  labels:
    severity: critical
  annotations:
    summary: "Error rate above 5% for 3 minutes"
\`\`\`

### Warning (Slack — business hours)

\`\`\`yaml
- alert: HighLatency
  expr: histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m])) > 0.5
  for: 5m
  labels:
    severity: warning
  annotations:
    summary: "p95 latency above 500ms"

- alert: DiskSpaceLow
  expr: node_filesystem_avail_bytes / node_filesystem_size_bytes < 0.15
  for: 10m
  labels:
    severity: warning
  annotations:
    summary: "Disk space below 15%"
\`\`\`

## Alert Routing

| Severity | Channel | Response Time | Escalation |
|----------|---------|---------------|------------|
| Critical | PagerDuty → Phone | 5 min | → Tech Lead at 15 min |
| Warning | Slack #alerts | 30 min | → On-call if unacked 1 hr |
| Info | Slack #monitoring | Best effort | None |

## Log Queries (Loki)

\`\`\`logql
# Error logs in last hour
{app="appname"} |= "error" | json | level="error"

# Slow requests (> 1s)
{app="appname"} | json | duration > 1000

# 5xx responses
{app="appname"} | json | status >= 500
\`\`\`

## Instrumentation

### Application Metrics (Prometheus client)

\`\`\`typescript
import { Counter, Histogram, register } from 'prom-client';

const httpRequestsTotal = new Counter({
  name: 'http_requests_total',
  help: 'Total HTTP requests',
  labelNames: ['method', 'route', 'status'],
});

const httpRequestDuration = new Histogram({
  name: 'http_request_duration_seconds',
  help: 'HTTP request duration',
  labelNames: ['method', 'route'],
  buckets: [0.01, 0.05, 0.1, 0.25, 0.5, 1, 2.5, 5],
});
\`\`\`

## On-Call Runbook Quick Links

| Scenario | Runbook | Avg Resolution |
|----------|---------|----------------|
| Service down | [service-down.md](runbooks/service-down.md) | 15 min |
| High CPU | [high-cpu.md](runbooks/high-cpu.md) | 20 min |
| Database issues | [db-issues.md](runbooks/db-issues.md) | 30 min |
| Memory leak | [memory-leak.md](runbooks/memory-leak.md) | 45 min |
| Deployment failure | [deploy-failure.md](runbooks/deploy-failure.md) | 10 min |
`
  },

  // ── ML / AI ────────────────────────────────────────────
  {
    id: "ml-model",
    title: "ML / AI Model Card",
    desc: "Model card with training details, evaluation metrics, bias analysis, and usage guidelines.",
    type: "ml",
    content: `# [Model Name] — [Task Description]

[![HuggingFace](https://img.shields.io/badge/🤗-Model-yellow)](https://huggingface.co/org/model-name)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)
[![Model Size](https://img.shields.io/badge/Params-125M-green)]()
[![Benchmark](https://img.shields.io/badge/Benchmark-92.4%25_Accuracy-blue)]()

## Model Details

| Property | Value |
|----------|-------|
| **Model type** | Transformer (BERT-based encoder) |
| **Architecture** | bert-base-uncased + classification head |
| **Parameters** | 125M (110M base + 15M head) |
| **Task** | Text classification (5-class sentiment) |
| **Training Data** | [Dataset Name] v2.1 (20K samples) |
| **Languages** | English |
| **License** | Apache 2.0 |
| **Developed by** | [Organization / Team] |
| **Last updated** | July 2026 |
| **Version** | 1.2.0 |

## Intended Use

### Primary Use Cases

- Product review sentiment classification
- Customer feedback categorization
- Social media mention analysis

### Out-of-Scope Uses

- ❌ High-stakes decisions (medical, legal, financial) without human review
- ❌ Non-English text (performance degrades significantly)
- ❌ Real-time streaming at > 10K requests/sec without batching
- ❌ Generating text (this is a classification model only)

## Quick Start

\`\`\`bash
pip install transformers torch
\`\`\`

\`\`\`python
from transformers import pipeline

classifier = pipeline(
    "text-classification",
    model="org/model-name",
    device=0  # GPU; use -1 for CPU
)

# Single prediction
result = classifier("This product exceeded all my expectations!")
print(result)
# [{'label': 'POSITIVE', 'score': 0.9998}]

# Batch prediction
texts = ["Great product!", "Terrible experience.", "It was okay."]
results = classifier(texts)
for text, res in zip(texts, results):
    print(f"{text} → {res['label']} ({res['score']:.3f})")
\`\`\`

## Training Configuration

\`\`\`python
from transformers import TrainingArguments

training_args = TrainingArguments(
    output_dir="./checkpoints",
    num_train_epochs=3,
    per_device_train_batch_size=16,
    per_device_eval_batch_size=32,
    learning_rate=2e-5,
    weight_decay=0.01,
    warmup_ratio=0.1,
    fp16=True,
    evaluation_strategy="epoch",
    save_strategy="epoch",
    load_best_model_at_end=True,
    metric_for_best_model="f1",
    seed=42,
)
\`\`\`

| Hyperparameter | Value |
|----------------|-------|
| Base model | bert-base-uncased |
| Optimizer | AdamW |
| Learning rate | 2e-5 (cosine schedule) |
| Batch size | 16 (effective 64 with grad accumulation) |
| Epochs | 3 |
| Hardware | 1× NVIDIA A100 40GB |
| Training time | ~22 minutes |

## Evaluation Results

### Overall Metrics

| Dataset | Accuracy | F1 (macro) | F1 (weighted) | Precision | Recall |
|---------|----------|-----------|---------------|-----------|--------|
| Test (in-domain) | 92.4% | 0.918 | 0.921 | 0.920 | 0.918 |
| Benchmark A | 89.1% | 0.885 | 0.889 | 0.887 | 0.885 |
| Benchmark B (OOD) | 78.3% | 0.761 | 0.775 | 0.770 | 0.763 |

### Per-Class Performance (Test Set)

| Class | Precision | Recall | F1 | Support |
|-------|-----------|--------|----|---------|
| Very Negative | 0.94 | 0.91 | 0.92 | 500 |
| Negative | 0.89 | 0.92 | 0.91 | 800 |
| Neutral | 0.87 | 0.85 | 0.86 | 600 |
| Positive | 0.93 | 0.94 | 0.94 | 900 |
| Very Positive | 0.96 | 0.95 | 0.96 | 700 |

## Bias & Limitations

| Limitation | Impact | Mitigation |
|-----------|--------|------------|
| Training data bias | Over-predicts positive for marketing text | Use confidence thresholds; human review below 0.7 |
| Domain sensitivity | -5% accuracy on technical reviews | Fine-tune on domain-specific data |
| Length constraint | Performance drops on text > 256 tokens | Truncate or chunk long inputs |
| Sarcasm detection | Poor (F1 = 0.42 on sarcasm subset) | Do not rely on for sarcastic content |
| Demographic bias | Slightly lower accuracy on non-standard English | Evaluate on target demographic |

## Environmental Impact

| Metric | Value |
|--------|-------|
| Training energy | ~0.5 kWh (1× A100, 22 min) |
| CO₂ equivalent | ~0.2 kg |
| Inference (per 1K requests) | ~0.01 kWh |

## Citation

\`\`\`bibtex
@article{author2026modelname,
  title   = {[Model Name]: A Fine-tuned Transformer for [Task]},
  author  = {Author, First and Author, Second},
  journal = {arXiv preprint arXiv:XXXX.XXXXX},
  year    = {2026}
}
\`\`\`
`
  },
  {
    id: "ml-experiment",
    title: "ML Experiment Log",
    desc: "Track ML experiments with configurations, results, comparisons, and learnings.",
    type: "ml",
    content: `# ML Experiment Log — [Project Name]

| Field | Value |
|-------|-------|
| **Goal** | Achieve > 90% F1 on [task] with < 2× A100 GPUs |
| **Researcher** | [Your Name] |
| **Start Date** | 2026-07-01 |
| **Status** | 🔄 Active (3/5 experiments complete) |
| **Tracking** | [W&B Project](https://wandb.ai/team/project) |

---

## Experiment #001 — Baseline

| Field | Value |
|-------|-------|
| **Date** | 2026-07-01 |
| **Status** | ✅ Complete |
| **Duration** | 22 min |

### Configuration

\`\`\`yaml
model: bert-base-uncased
task: text-classification
num_labels: 5
batch_size: 32
learning_rate: 2e-5
epochs: 5
optimizer: AdamW
weight_decay: 0.01
dropout: 0.1
seed: 42
\`\`\`

### Results

| Metric | Train | Validation | Test |
|--------|-------|-----------|------|
| Loss | 0.183 | 0.241 | 0.257 |
| Accuracy | 94.2% | 87.3% | 86.8% |
| F1 (macro) | 0.941 | 0.871 | 0.865 |

### Observations

- Model converges by epoch 2; epochs 3–5 show minimal improvement
- Slight overfitting: train-val accuracy gap of **6.9%**
- Class 3 (Neutral) has lowest recall: **0.72**
- Training stable across 3 seeds (±0.3% val accuracy)

---

## Experiment #002 — Increased Regularization

| Field | Value |
|-------|-------|
| **Date** | 2026-07-03 |
| **Status** | ✅ Complete |
| **Changes** | dropout 0.1→0.3, label smoothing 0.1, lr 2e-5→1e-5 |

### Results

| Metric | Validation | Δ vs #001 |
|--------|-----------|-----------|
| Accuracy | 89.1% | **+1.8%** ✅ |
| F1 (macro) | 0.887 | **+0.016** ✅ |
| Train-Val Gap | 3.7% | **-3.2%** ✅ |
| Class 3 Recall | 0.78 | **+0.06** ✅ |

### Observations

- Regularization successfully reduced overfitting
- Best checkpoint at epoch 3 (early stopping)
- Slightly longer training time due to lower LR

---

## Experiment #003 — Data Augmentation

| Field | Value |
|-------|-------|
| **Date** | 2026-07-05 |
| **Status** | ✅ Complete |
| **Changes** | Back-translation augmentation (EN→DE→EN), 2× training data |

### Results

| Metric | Validation | Δ vs #002 |
|--------|-----------|-----------|
| Accuracy | 90.4% | **+1.3%** ✅ |
| F1 (macro) | 0.898 | **+0.011** ✅ |
| Class 3 Recall | 0.83 | **+0.05** ✅ |
| Training Time | 48 min | +28 min ⚠️ |

### Observations

- Augmentation helps minority classes most
- Some augmented samples are low quality (nonsensical back-translations)
- Filtering augmented samples by BLEU score > 0.3 may help

---

## Experiment #004 — RoBERTa-large

| Field | Value |
|-------|-------|
| **Date** | 2026-07-07 |
| **Status** | 🔄 In Progress |
| **Changes** | roberta-large base, same config as #003 |

### Preliminary Results (Epoch 2)

| Metric | Validation | Δ vs #003 |
|--------|-----------|-----------|
| Accuracy | 91.2% | **+0.8%** (in progress) |
| F1 (macro) | 0.906 | **+0.008** |

---

## Summary Table

| Exp | Model | Config | Val Acc | Val F1 | Gap | Time | Notes |
|-----|-------|--------|---------|--------|-----|------|-------|
| #001 | BERT-base | Baseline | 87.3% | 0.871 | 6.9% | 22m | Overfitting |
| #002 | BERT-base | +Regularization | 89.1% | 0.887 | 3.7% | 20m | Best BERT |
| #003 | BERT-base | +Augmentation | 90.4% | 0.898 | 4.1% | 48m | Slower |
| #004 | RoBERTa-large | #003 config | 91.2%* | 0.906* | TBD | TBD | In progress |
| #005 | TBD | Ensemble #002+#003 | TBD | TBD | TBD | TBD | Planned |

## Key Learnings

1. **Regularization matters more than model size** for this dataset size (20K)
2. **Data augmentation** gives diminishing returns after 2× data
3. **Class 3 (Neutral)** is consistently hardest — needs targeted strategies
4. **Early stopping** at epoch 3 is optimal for BERT-base

## TODO

- [ ] Complete EXP-004 (RoBERTa-large)
- [ ] EXP-005: Ensemble top-2 models
- [ ] Error analysis on remaining Class 3 failures
- [ ] Test on out-of-domain benchmark
- [ ] Write model card with final results
`
  },
  {
    id: "ml-finetuning",
    title: "Fine-Tuning Guide",
    desc: "Step-by-step guide for fine-tuning LLMs with LoRA, QLoRA, and full fine-tuning.",
    type: "ml",
    content: `# Fine-Tuning Guide — [Base Model Name]

**Target Task:** [Task description]
**Base Model:** [e.g., Llama-3-8B, Mistral-7B, BERT-base]
**Method:** LoRA / QLoRA / Full fine-tuning
**Last Updated:** 2026-07-07

## Overview

This guide walks through fine-tuning [base model] on [your dataset] for [task]. We compare three approaches and recommend [method] for most use cases.

| Method | GPU Memory | Training Time | Quality | Recommended For |
|--------|-----------|---------------|---------|-----------------|
| Full fine-tuning | 80GB+ (A100) | Slow | Best | Large datasets (>100K), max quality |
| LoRA | 24GB (RTX 4090) | Fast | Near-best | Most use cases |
| QLoRA | 16GB (RTX 4080) | Fast | Good | Limited GPU budget |

## Prerequisites

\`\`\`bash
pip install torch transformers datasets peft bitsandbytes accelerate wandb
pip install trl  # for SFTTrainer
\`\`\`

| Requirement | Minimum | Recommended |
|-------------|---------|-------------|
| GPU VRAM | 16 GB (QLoRA) | 40 GB (LoRA) |
| RAM | 32 GB | 64 GB |
| Disk | 50 GB free | 100 GB free |
| Python | 3.10+ | 3.11 |

## Dataset Preparation

### Expected Format

\`\`\`json
{"instruction": "Classify the sentiment of this review.", "input": "Great product, fast shipping!", "output": "positive"}
{"instruction": "Classify the sentiment of this review.", "input": "Broken on arrival, waste of money.", "output": "negative"}
\`\`\`

### Prepare Dataset

\`\`\`python
from datasets import load_dataset

dataset = load_dataset("json", data_files="train.jsonl")
dataset = dataset["train"].train_test_split(test_size=0.1, seed=42)

def format_prompt(example):
    return {
        "text": f"### Instruction:\\n{example['instruction']}\\n\\n### Input:\\n{example['input']}\\n\\n### Response:\\n{example['output']}"
    }

dataset = dataset.map(format_prompt)
print(f"Train: {len(dataset['train'])}, Eval: {len(dataset['test'])}")
\`\`\`

## LoRA Fine-Tuning (Recommended)

\`\`\`python
from transformers import AutoModelForCausalLM, AutoTokenizer, TrainingArguments
from peft import LoraConfig, get_peft_model
from trl import SFTTrainer

model_name = "meta-llama/Llama-3-8B"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(
    model_name,
    torch_dtype="auto",
    device_map="auto",
)

lora_config = LoraConfig(
    r=16,
    lora_alpha=32,
    target_modules=["q_proj", "v_proj", "k_proj", "o_proj"],
    lora_dropout=0.05,
    task_type="CAUSAL_LM",
)

model = get_peft_model(model, lora_config)
model.print_trainable_parameters()
# trainable params: 13.6M || all params: 8.0B || trainable%: 0.17%

training_args = TrainingArguments(
    output_dir="./checkpoints/lora",
    num_train_epochs=3,
    per_device_train_batch_size=4,
    gradient_accumulation_steps=4,
    learning_rate=2e-4,
    fp16=True,
    logging_steps=10,
    eval_strategy="epoch",
    save_strategy="epoch",
    load_best_model_at_end=True,
)

trainer = SFTTrainer(
    model=model,
    args=training_args,
    train_dataset=dataset["train"],
    eval_dataset=dataset["test"],
    tokenizer=tokenizer,
    max_seq_length=512,
)

trainer.train()
model.save_pretrained("./checkpoints/lora/final")
\`\`\`

## Hyperparameter Guide

| Parameter | LoRA | QLoRA | Full FT | Notes |
|-----------|------|-------|---------|-------|
| Learning rate | 1e-4 – 3e-4 | 1e-4 – 2e-4 | 1e-5 – 5e-5 | Higher for LoRA |
| LoRA rank (r) | 8 – 64 | 8 – 32 | N/A | Higher = more capacity |
| LoRA alpha | 2× rank | 2× rank | N/A | Scaling factor |
| Batch size | 4 – 8 | 2 – 4 | 1 – 4 | Limited by VRAM |
| Epochs | 1 – 5 | 1 – 3 | 1 – 3 | Watch for overfitting |
| Max seq length | 512 – 2048 | 512 – 1024 | 512 – 4096 | Task dependent |

## Evaluation

\`\`\`python
from peft import PeftModel

base_model = AutoModelForCausalLM.from_pretrained(model_name, device_map="auto")
model = PeftModel.from_pretrained(base_model, "./checkpoints/lora/final")

# Run evaluation
results = trainer.evaluate()
print(f"Eval loss: {results['eval_loss']:.4f}")
\`\`\`

## Results (Our Runs)

| Config | Val Loss | Task Accuracy | Training Time | GPU |
|--------|----------|--------------|---------------|-----|
| LoRA r=16 | 0.342 | 91.2% | 45 min | 1× A100 40GB |
| LoRA r=64 | 0.318 | 92.8% | 68 min | 1× A100 40GB |
| QLoRA r=16 | 0.358 | 90.1% | 52 min | 1× RTX 4090 |
| Full FT | 0.305 | 93.4% | 4.2 hr | 2× A100 80GB |

## Troubleshooting

| Issue | Solution |
|-------|----------|
| CUDA OOM | Reduce batch size, enable gradient checkpointing, use QLoRA |
| Loss not decreasing | Lower learning rate, check data formatting, increase LoRA rank |
| Overfitting | Reduce epochs, increase dropout, add more training data |
| Slow training | Enable fp16/bf16, increase batch size, use flash attention |
`
  },
  {
    id: "ml-prompts",
    title: "Prompt Engineering Playbook",
    desc: "Structured prompt templates, testing framework, and best practices for LLM applications.",
    type: "ml",
    content: `# Prompt Engineering Playbook — [Project Name]

**LLM:** [GPT-4 / Claude 3.5 / Llama 3]
**Use Case:** [Task description]
**Last Updated:** 2026-07-07
**Owner:** [Team / Researcher]

## Prompt Design Principles

1. **Be specific** — Vague prompts produce vague outputs
2. **Provide examples** — 2–5 few-shot examples dramatically improve quality
3. **Define format** — Specify exact output structure (JSON, markdown, etc.)
4. **Set constraints** — Length limits, tone, things to avoid
5. **Iterate systematically** — Change one variable at a time

## Prompt Templates

### Classification

\`\`\`
You are a sentiment classifier. Classify the following text into exactly one category: positive, negative, or neutral.

Rules:
- Output ONLY the category label, nothing else
- If mixed sentiment, choose the dominant one
- Sarcasm should be classified by literal meaning

Examples:
Text: "Absolutely love this product!"
Category: positive

Text: "It broke after one day."
Category: negative

Text: "It works as described."
Category: neutral

Text: "{user_input}"
Category:
\`\`\`

### Summarization

\`\`\`
Summarize the following article in 3-5 bullet points.

Requirements:
- Each bullet should be one concise sentence
- Capture the main argument and key evidence
- Do not include your own opinions
- Use plain language accessible to a general audience

Article:
{article_text}

Summary:
\`\`\`

### Structured Extraction

\`\`\`
Extract the following information from the text below. Return valid JSON only.

Schema:
{
  "company_name": string,
  "founded_year": number | null,
  "headquarters": string | null,
  "products": string[],
  "revenue_mentioned": string | null
}

If a field cannot be determined, use null. Do not guess.

Text:
{input_text}

JSON:
\`\`\`

### Chain-of-Thought Reasoning

\`\`\`
Solve the following problem step by step. Show your reasoning before giving the final answer.

Problem: {problem}

Think through this carefully:
1. What information is given?
2. What do I need to find?
3. What approach should I use?
4. Calculate step by step.
5. State the final answer clearly.

Solution:
\`\`\`

## Testing Framework

### Test Case Structure

\`\`\`yaml
test_cases:
  - id: "classify-001"
    prompt_template: "classification"
    input: "Best purchase I've made this year!"
    expected: "positive"
    tags: ["easy", "clear-positive"]

  - id: "classify-002"
    prompt_template: "classification"
    input: "Oh great, another broken product. Just what I needed."
    expected: "negative"
    tags: ["hard", "sarcasm"]

  - id: "classify-003"
    prompt_template: "classification"
    input: "It arrived on Tuesday."
    expected: "neutral"
    tags: ["easy", "neutral"]
\`\`\`

### Evaluation Script

\`\`\`python
import json
from openai import OpenAI

client = OpenAI()

def run_prompt(template, input_text, model="gpt-4"):
    prompt = TEMPLATES[template].replace("{user_input}", input_text)
    response = client.chat.completions.create(
        model=model,
        messages=[{"role": "user", "content": prompt}],
        temperature=0,
        max_tokens=50,
    )
    return response.choices[0].message.content.strip()

def evaluate(test_cases):
    results = []
    for case in test_cases:
        actual = run_prompt(case["prompt_template"], case["input"])
        correct = actual.lower() == case["expected"].lower()
        results.append({**case, "actual": actual, "correct": correct})
    
    accuracy = sum(r["correct"] for r in results) / len(results)
    print(f"Accuracy: {accuracy:.1%} ({sum(r['correct'] for r in results)}/{len(results)})")
    return results
\`\`\`

## Results Log

| Prompt Version | Model | Test Cases | Accuracy | Avg Latency | Cost/1K |
|-------------|-------|-----------|----------|-------------|---------|
| v1 (zero-shot) | GPT-4 | 50 | 78.0% | 1.2s | $0.03 |
| v2 (+ 3 examples) | GPT-4 | 50 | 92.0% | 1.8s | $0.05 |
| v3 (+ CoT) | GPT-4 | 50 | 94.0% | 2.4s | $0.08 |
| v2 (+ 3 examples) | Claude 3.5 | 50 | 93.0% | 1.5s | $0.04 |
| v2 (+ 3 examples) | Llama 3 70B | 50 | 86.0% | 0.8s | $0.01 |

## Best Practices

| Do | Don't |
|----|-------|
| Use temperature=0 for deterministic tasks | Use high temperature for factual extraction |
| Test on edge cases (sarcasm, ambiguity) | Only test on easy examples |
| Version control your prompts | Edit prompts without tracking changes |
| Measure cost per request | Ignore token usage at scale |
| Include failure examples in few-shot | Only show successful examples |
| Set max_tokens appropriately | Leave max_tokens unlimited |

## Prompt Versioning

| Version | Date | Changes | Accuracy Δ |
|---------|------|---------|-----------|
| v1.0 | 2026-06-01 | Initial zero-shot prompt | 78.0% |
| v1.1 | 2026-06-15 | Added 3 few-shot examples | 92.0% (+14%) |
| v1.2 | 2026-07-01 | Added sarcasm handling rule | 93.0% (+1%) |
| v2.0 | 2026-07-07 | Chain-of-thought for hard cases | 94.0% (+1%) |
`
  },

  // ── API & WEB SERVICE ──────────────────────────────────
  {
    id: "api-rest",
    title: "REST API Reference",
    desc: "Comprehensive REST API docs with endpoints, auth, pagination, and error handling.",
    type: "api",
    content: `# [Project Name] API Reference

**Version:** v2.0  |  **Base URL:** \`https://api.example.com/v2\`
**OpenAPI Spec:** [openapi.yaml](openapi.yaml)  |  **Postman:** [Collection](https://postman.com/collection)

[![API Status](https://img.shields.io/badge/API-Online-brightgreen)](https://status.example.com)
[![OpenAPI](https://img.shields.io/badge/OpenAPI-3.1-6BA539)](openapi.yaml)

## Authentication

All API requests require a Bearer token in the Authorization header.

\`\`\`http
Authorization: Bearer YOUR_API_TOKEN
Content-Type: application/json
Accept: application/json
\`\`\`

### Obtaining a Token

\`\`\`bash
curl -X POST https://api.example.com/v2/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{"email": "user@example.com", "password": "your_password"}'
\`\`\`

\`\`\`json
{
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "refresh_token": "dGhpcyBpcyBhIHJlZnJlc2g...",
  "expires_in": 3600,
  "token_type": "Bearer"
}
\`\`\`

## Pagination

List endpoints support cursor-based pagination:

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| \`limit\` | integer | 20 | Results per page (max 100) |
| \`cursor\` | string | — | Cursor from previous response |
| \`sort\` | string | \`created_at\` | Sort field |
| \`order\` | string | \`desc\` | \`asc\` or \`desc\` |

## Endpoints

### Documents

#### List Documents

\`\`\`http
GET /documents?limit=20&sort=created_at&order=desc
\`\`\`

**Response \`200 OK\`**

\`\`\`json
{
  "data": [
    {
      "id": "doc_abc123",
      "title": "My Document",
      "content_preview": "# Hello World\\n\\nFirst paragraph...",
      "word_count": 342,
      "tags": ["tutorial", "draft"],
      "status": "published",
      "created_at": "2026-07-07T10:30:00Z",
      "updated_at": "2026-07-07T14:22:00Z"
    }
  ],
  "pagination": {
    "next_cursor": "eyJpZCI6ImRvY19hYmMxMjMifQ==",
    "has_more": true,
    "total_count": 145
  }
}
\`\`\`

#### Create Document

\`\`\`http
POST /documents
\`\`\`

\`\`\`json
{
  "title": "New Document",
  "content": "# Hello World\\n\\nMarkdown content here.",
  "tags": ["tutorial"],
  "status": "draft"
}
\`\`\`

**Response \`201 Created\`**

\`\`\`json
{
  "data": {
    "id": "doc_xyz789",
    "title": "New Document",
    "word_count": 4,
    "status": "draft",
    "created_at": "2026-07-07T15:00:00Z"
  }
}
\`\`\`

#### Get / Update / Delete Document

\`\`\`http
GET    /documents/{id}
PATCH  /documents/{id}
DELETE /documents/{id}
\`\`\`

### Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| \`GET\` | \`/users/me\` | Get current user profile |
| \`PATCH\` | \`/users/me\` | Update profile |
| \`GET\` | \`/users/me/api-keys\` | List API keys |
| \`POST\` | \`/users/me/api-keys\` | Create API key |
| \`DELETE\` | \`/users/me/api-keys/{id}\` | Revoke API key |

## Error Codes

| Status | Code | Description | Resolution |
|--------|------|-------------|------------|
| 400 | \`INVALID_PARAMS\` | Missing or malformed parameters | Check request body against schema |
| 401 | \`UNAUTHORIZED\` | Invalid or expired token | Refresh token or re-authenticate |
| 403 | \`FORBIDDEN\` | Insufficient permissions | Check API key scopes |
| 404 | \`NOT_FOUND\` | Resource does not exist | Verify resource ID |
| 409 | \`CONFLICT\` | Resource already exists | Use unique identifier |
| 422 | \`VALIDATION_ERROR\` | Field validation failed | Check \`errors\` array in response |
| 429 | \`RATE_LIMITED\` | Too many requests | Wait and retry; check \`Retry-After\` header |
| 500 | \`SERVER_ERROR\` | Internal server error | Retry; contact support if persistent |

**Error Response Format:**

\`\`\`json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Title is required",
    "details": [
      {"field": "title", "message": "must not be empty"}
    ]
  }
}
\`\`\`

## Rate Limits

| Plan | Requests/min | Requests/day | Burst |
|------|-------------|--------------|-------|
| Free | 60 | 1,000 | 10 |
| Pro | 600 | 50,000 | 50 |
| Enterprise | Custom | Unlimited | Custom |

Rate limit headers are included in every response:
\`\`\`
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 45
X-RateLimit-Reset: 1720350000
\`\`\`
`
  },
  {
    id: "api-graphql",
    title: "GraphQL API Documentation",
    desc: "GraphQL schema, queries, mutations, subscriptions, and error handling.",
    type: "api",
    content: `# [Project] GraphQL API

**Endpoint:** \`https://api.example.com/graphql\`
**Playground:** \`https://api.example.com/graphql/playground\`
**Schema:** [Download SDL](schema.graphql)

## Authentication

\`\`\`http
POST /graphql
Authorization: Bearer <token>
Content-Type: application/json
\`\`\`

## Schema Types

\`\`\`graphql
type Document {
  id: ID!
  title: String!
  content: String!
  wordCount: Int!
  tags: [String!]!
  status: DocumentStatus!
  author: User!
  collaborators: [User!]!
  createdAt: DateTime!
  updatedAt: DateTime!
}

enum DocumentStatus {
  DRAFT
  PUBLISHED
  ARCHIVED
}

type User {
  id: ID!
  name: String!
  email: String!
  avatarUrl: String
  role: UserRole!
}

enum UserRole {
  ADMIN
  EDITOR
  VIEWER
}

type DocumentConnection {
  edges: [DocumentEdge!]!
  pageInfo: PageInfo!
  totalCount: Int!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}
\`\`\`

## Queries

### List Documents (Paginated)

\`\`\`graphql
query GetDocuments($first: Int, $after: String, $filter: DocumentFilter) {
  documents(first: $first, after: $after, filter: $filter) {
    edges {
      node {
        id
        title
        wordCount
        status
        tags
        author { id name }
        createdAt
        updatedAt
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
    totalCount
  }
}
\`\`\`

**Variables:**
\`\`\`json
{
  "first": 20,
  "after": null,
  "filter": { "status": "PUBLISHED", "tags": ["tutorial"] }
}
\`\`\`

### Get Single Document

\`\`\`graphql
query GetDocument($id: ID!) {
  document(id: $id) {
    id
    title
    content
    wordCount
    tags
    status
    author { id name email }
    collaborators { id name }
    createdAt
    updatedAt
  }
}
\`\`\`

## Mutations

### Create Document

\`\`\`graphql
mutation CreateDocument($input: CreateDocumentInput!) {
  createDocument(input: $input) {
    document {
      id
      title
      status
      createdAt
    }
    errors {
      field
      message
      code
    }
  }
}
\`\`\`

**Variables:**
\`\`\`json
{
  "input": {
    "title": "New Document",
    "content": "# Hello\\n\\nMarkdown content.",
    "tags": ["tutorial"],
    "status": "DRAFT"
  }
}
\`\`\`

### Update Document

\`\`\`graphql
mutation UpdateDocument($id: ID!, $input: UpdateDocumentInput!) {
  updateDocument(id: $id, input: $input) {
    document { id title updatedAt }
    errors { field message }
  }
}
\`\`\`

## Subscriptions

\`\`\`graphql
subscription OnDocumentUpdated($id: ID!) {
  documentUpdated(id: $id) {
    id
    content
    wordCount
    updatedAt
    updatedBy { id name }
  }
}
\`\`\`

## Error Handling

| Error Type | HTTP Status | Description |
|-----------|-------------|-------------|
| \`GRAPHQL_VALIDATION_FAILED\` | 400 | Invalid query syntax |
| \`UNAUTHENTICATED\` | 401 | Missing or invalid token |
| \`FORBIDDEN\` | 403 | Insufficient permissions |
| \`NOT_FOUND\` | 200* | Resource not found (*GraphQL returns 200 with errors) |
| \`RATE_LIMITED\` | 429 | Too many requests |

**Error Response:**
\`\`\`json
{
  "data": { "document": null },
  "errors": [
    {
      "message": "Document not found",
      "extensions": { "code": "NOT_FOUND", "documentId": "doc_invalid" }
    }
  ]
}
\`\`\`

## Rate Limits

| Plan | Queries/min | Complexity Limit |
|------|------------|-----------------|
| Free | 60 | 1,000 |
| Pro | 600 | 10,000 |
| Enterprise | Custom | Custom |
`
  },
  {
    id: "api-webhook",
    title: "Webhook Integration Guide",
    desc: "Webhook setup, event types, payload schemas, signature verification, and retry logic.",
    type: "api",
    content: `# Webhook Integration Guide

**API Version:** v2.0
**Last Updated:** 2026-07-07

## Overview

Webhooks notify your application in real-time when events occur in [Project Name]. Instead of polling, your server receives HTTP POST requests with event payloads.

## Setup

### 1. Register a Webhook Endpoint

\`\`\`bash
curl -X POST https://api.example.com/v2/webhooks \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://your-server.com/webhooks/appname",
    "events": ["document.created", "document.updated", "document.deleted"],
    "secret": "whsec_your_signing_secret"
  }'
\`\`\`

\`\`\`json
{
  "id": "wh_abc123",
  "url": "https://your-server.com/webhooks/appname",
  "events": ["document.created", "document.updated", "document.deleted"],
  "status": "active",
  "created_at": "2026-07-07T10:00:00Z"
}
\`\`\`

### 2. Verify Endpoint (Challenge)

When you register a webhook, we send a verification request:

\`\`\`json
{
  "type": "endpoint.verification",
  "challenge": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
}
\`\`\`

Your server must respond with the challenge value within 10 seconds:

\`\`\`json
{ "challenge": "a1b2c3d4-e5f6-7890-abcd-ef1234567890" }
\`\`\`

## Event Types

| Event | Description | Payload Fields |
|-------|-------------|----------------|
| \`document.created\` | New document created | \`document\` object |
| \`document.updated\` | Document content or metadata changed | \`document\`, \`changes\` |
| \`document.deleted\` | Document permanently deleted | \`document.id\` |
| \`document.published\` | Document status changed to published | \`document\` |
| \`user.invited\` | User invited to collaborate | \`user\`, \`invited_by\` |
| \`export.completed\` | Async export job finished | \`export\` with download URL |

## Payload Format

\`\`\`json
{
  "id": "evt_abc123",
  "type": "document.updated",
  "created_at": "2026-07-07T14:30:00Z",
  "data": {
    "document": {
      "id": "doc_xyz789",
      "title": "Updated Title",
      "word_count": 450,
      "status": "published",
      "updated_at": "2026-07-07T14:30:00Z"
    },
    "changes": {
      "title": { "from": "Old Title", "to": "Updated Title" },
      "content": { "changed": true }
    }
  }
}
\`\`\`

## Signature Verification

Every webhook includes an \`X-Signature\` header. **Always verify signatures** to prevent spoofing.

\`\`\`python
import hmac
import hashlib

def verify_signature(payload_body: bytes, signature: str, secret: str) -> bool:
    expected = hmac.new(
        secret.encode(),
        payload_body,
        hashlib.sha256
    ).hexdigest()
    return hmac.compare_digest(f"sha256={expected}", signature)
\`\`\`

\`\`\`typescript
import crypto from 'crypto';

function verifySignature(payload: string, signature: string, secret: string): boolean {
  const expected = 'sha256=' + crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
}
\`\`\`

## Retry Policy

| Attempt | Delay | Total Elapsed |
|---------|-------|---------------|
| 1 | Immediate | 0 |
| 2 | 1 minute | 1 min |
| 3 | 5 minutes | 6 min |
| 4 | 30 minutes | 36 min |
| 5 | 2 hours | 2 hr 36 min |

After 5 failed attempts, the webhook is marked as \`failed\` and you'll receive an email notification.

### Expected Response

- **Status:** \`200\` – \`299\` (success)
- **Timeout:** 10 seconds
- **Idempotency:** Use \`event.id\` to deduplicate (we may send the same event twice)

## Testing

\`\`\`bash
# Send a test event
curl -X POST https://api.example.com/v2/webhooks/wh_abc123/test \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -d '{"event_type": "document.created"}'
\`\`\`

### Local Development with ngrok

\`\`\`bash
ngrok http 3000
# Register the ngrok URL as your webhook endpoint
\`\`\`

## Best Practices

| Practice | Why |
|----------|-----|
| Respond with 200 immediately | Process events asynchronously to avoid timeouts |
| Verify signatures | Prevent unauthorized requests |
| Handle duplicates | Use event ID for idempotency |
| Log all events | Debug delivery issues |
| Monitor failure rate | Set up alerts if > 5% events fail |
`
  },
  {
    id: "api-sdk",
    title: "SDK Quickstart Guide",
    desc: "Client SDK installation and usage examples for JavaScript, Python, and Go.",
    type: "api",
    content: `# SDK Quickstart — [Project Name]

Official client libraries for the [Project Name] API.

| Language | Package | Version | Install |
|----------|---------|---------|---------|
| JavaScript/TypeScript | \`@appname/sdk\` | 2.1.0 | \`npm install @appname/sdk\` |
| Python | \`appname-sdk\` | 2.1.0 | \`pip install appname-sdk\` |
| Go | \`github.com/appname/sdk-go\` | 2.1.0 | \`go get github.com/appname/sdk-go\` |

## Authentication

All SDKs accept an API key or OAuth token:

\`\`\`bash
export APPNAME_API_KEY="sk_live_your_api_key_here"
\`\`\`

---

## JavaScript / TypeScript

### Installation & Setup

\`\`\`bash
npm install @appname/sdk
\`\`\`

\`\`\`typescript
import { AppNameClient } from '@appname/sdk';

const client = new AppNameClient({
  apiKey: process.env.APPNAME_API_KEY,
  // baseUrl: 'https://api.example.com/v2',  // optional
  // timeout: 30000,  // optional, ms
});

// Verify connection
const health = await client.health.check();
console.log(health.status); // "ok"
\`\`\`

### CRUD Operations

\`\`\`typescript
// Create
const doc = await client.documents.create({
  title: 'My Document',
  content: '# Hello World\\n\\nMarkdown content.',
  tags: ['tutorial'],
});

// List with pagination
const page = await client.documents.list({
  limit: 20,
  sort: 'created_at',
  order: 'desc',
});
for (const doc of page.data) {
  console.log(doc.id, doc.title);
}

// Get, update, delete
const fetched = await client.documents.get('doc_abc123');
const updated = await client.documents.update('doc_abc123', { title: 'New Title' });
await client.documents.delete('doc_abc123');
\`\`\`

### Error Handling

\`\`\`typescript
import { AppNameError, RateLimitError, ValidationError } from '@appname/sdk';

try {
  await client.documents.create({ title: '' });
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(error.details); // [{ field: 'title', message: 'required' }]
  } else if (error instanceof RateLimitError) {
    console.log(\`Retry after \${error.retryAfter}s\`);
  } else if (error instanceof AppNameError) {
    console.log(error.code, error.message);
  }
}
\`\`\`

---

## Python

### Installation & Setup

\`\`\`bash
pip install appname-sdk
\`\`\`

\`\`\`python
from appname import AppNameClient

client = AppNameClient(api_key="sk_live_your_api_key_here")

# Verify connection
health = client.health.check()
print(health.status)  # "ok"
\`\`\`

### CRUD Operations

\`\`\`python
# Create
doc = client.documents.create(
    title="My Document",
    content="# Hello World\\n\\nMarkdown content.",
    tags=["tutorial"],
)
print(doc.id, doc.title)

# List with auto-pagination
for doc in client.documents.list(limit=20):
    print(doc.id, doc.title, doc.word_count)

# Get, update, delete
doc = client.documents.get("doc_abc123")
doc = client.documents.update("doc_abc123", title="New Title")
client.documents.delete("doc_abc123")
\`\`\`

### Async Support

\`\`\`python
import asyncio
from appname import AsyncAppNameClient

async def main():
    async with AsyncAppNameClient(api_key="sk_live_...") as client:
        docs = await client.documents.list(limit=10)
        for doc in docs:
            print(doc.title)

asyncio.run(main())
\`\`\`

---

## Go

### Installation & Setup

\`\`\`bash
go get github.com/appname/sdk-go/v2
\`\`\`

\`\`\`go
package main

import (
    "context"
    "fmt"
    "os"

    appname "github.com/appname/sdk-go/v2"
)

func main() {
    client := appname.NewClient(os.Getenv("APPNAME_API_KEY"))

    doc, err := client.Documents.Create(context.Background(), &appname.CreateDocumentParams{
        Title:   "My Document",
        Content: "# Hello World\\n\\nMarkdown content.",
        Tags:    []string{"tutorial"},
    })
    if err != nil {
        panic(err)
    }
    fmt.Printf("Created: %s\\n", doc.ID)
}
\`\`\`

## SDK Comparison

| Feature | JS/TS | Python | Go |
|---------|-------|--------|-----|
| Type safety | ✅ Full | ✅ Type hints | ✅ Native |
| Async support | ✅ Promise | ✅ asyncio | ✅ Context |
| Auto-pagination | ✅ Iterator | ✅ Iterator | ✅ Pager |
| Webhook verification | ✅ Built-in | ✅ Built-in | ✅ Built-in |
| Retry logic | ✅ Exponential backoff | ✅ Exponential backoff | ✅ Exponential backoff |
| Min version | Node 18+ | Python 3.9+ | Go 1.21+ |
`
  },

  // ── INTERNAL DOCS ────────────────────────────────────────
  {
    id: "internal-project",
    title: "Internal Project Documentation",
    desc: "Team onboarding, conventions, deployment info, and stakeholder contacts.",
    type: "internal",
    content: `# [Project Name] — Internal Documentation

> 🔒 **Internal Use Only** — Do not share outside [Company Name]

| Field | Value |
|-------|-------|
| **Team** | [Team Name] |
| **Slack** | [#project-channel](https://slack.com) |
| **Jira** | [PROJ Board](https://jira.company.com/projects/PROJ) |
| **Confluence** | [Project Wiki](https://confluence.company.com/PROJ) |
| **On-call** | [PagerDuty Schedule](https://pagerduty.com) |

## Project Overview

**What is it?**
[2-3 sentence description of the project, its purpose, and business value.]

**Problem it solves:** [What pain point does this address?]
**Target users:** [Internal teams / external customers / both]
**Launch date:** [Date] | **Current version:** v2.4.1

### Stakeholders

| Role | Name | Contact | Responsibility |
|------|------|---------|----------------|
| Product Manager | [Name] | @slack-handle | Roadmap, priorities, stakeholder communication |
| Tech Lead | [Name] | @slack-handle | Architecture, technical decisions, code review |
| Engineering Manager | [Name] | @slack-handle | Team capacity, hiring, escalations |
| QA Lead | [Name] | @slack-handle | Test strategy, release sign-off |
| DevOps | [Name] | @slack-handle | Infrastructure, deployments, monitoring |
| Design | [Name] | @slack-handle | UI/UX, design system |

## Onboarding Checklist

### Week 1

- [ ] Get GitHub access to [org/project-repo](https://github.com/company/project)
- [ ] Join Slack channels: #project, #deployments, #project-alerts
- [ ] Set up local dev environment (see below)
- [ ] Complete security training (required annually)
- [ ] Review architecture diagram and system design doc
- [ ] Meet with Tech Lead for codebase walkthrough (30 min)
- [ ] Shadow an on-call engineer for one shift

### Week 2

- [ ] Pick up a "good first issue" from the backlog
- [ ] Submit your first PR (documentation or small fix)
- [ ] Review team conventions and coding standards
- [ ] Set up monitoring dashboard access (DataDog, Sentry)

## Local Development Setup

\`\`\`bash
# Prerequisites: Node 20, Docker, AWS CLI
git clone https://github.com/company/project-name.git
cd project-name
cp .env.example .env        # Ask Tech Lead for secret values

# Start dependencies
docker-compose up -d postgres redis

# Install and run
npm install
npm run db:migrate
npm run db:seed             # Optional: demo data
npm run dev
# → http://localhost:3000
# → API docs at http://localhost:3000/docs
\`\`\`

### Common Issues

| Problem | Solution |
|---------|----------|
| Port 3000 in use | \`lsof -ti:3000 \\| xargs kill\` or change \`APP_PORT\` |
| DB connection error | \`docker-compose up -d postgres\` and check \`.env\` |
| Missing env vars | Compare your \`.env\` with \`.env.example\`; ask in #project |

## Conventions

### Git Workflow

- **Branch naming:** \`feat/PROJ-123-short-description\`, \`fix/PROJ-456-bug-description\`
- **Commits:** [Conventional Commits](https://conventionalcommits.org) — \`feat:\`, \`fix:\`, \`docs:\`, etc.
- **PRs:** 2 approvals required + CI green + no unresolved comments
- **Merge strategy:** Squash merge to \`main\`

### Code Style

| Tool | Config | Command |
|------|--------|---------|
| Formatter | Prettier | \`npm run format\` |
| Linter | ESLint | \`npm run lint\` |
| Types | TypeScript strict | \`npm run type-check\` |
| Tests | Jest + Playwright | \`npm test\` |

## Deployments

| Environment | Branch | URL | Trigger | Approval |
|-------------|--------|-----|---------|----------|
| Dev | feature branches | dev.internal.company.com | Push | None |
| Staging | \`develop\` | staging.company.com | PR merge | None |
| Production | \`main\` | app.company.com | Manual | Tech Lead |

## Monitoring & Alerts

| Tool | Purpose | Link |
|------|---------|------|
| DataDog | APM, metrics, logs | [Dashboard](https://app.datadoghq.com/dashboard/abc) |
| Sentry | Error tracking | [Project](https://sentry.io/organizations/company/projects/project) |
| PagerDuty | On-call alerts | [Schedule](https://company.pagerduty.com) |
| Status Page | Public status | [status.company.com](https://status.company.com) |

## Key Documents

| Document | Location |
|----------|----------|
| Architecture Decision Records | [docs/adr/](docs/adr/) |
| API Specification | [docs/api/openapi.yaml](docs/api/openapi.yaml) |
| Runbooks | [docs/runbooks/](docs/runbooks/) |
| Security Review | [Confluence link] |
`
  },
  {
    id: "internal-runbook",
    title: "Operational Runbook",
    desc: "Step-by-step runbook for incident response and common operational tasks.",
    type: "internal",
    content: `# Operational Runbook — [Service Name]

| Field | Value |
|-------|-------|
| **Owner** | [Team Name] |
| **On-call** | [PagerDuty rotation](https://pagerduty.com) |
| **Last Updated** | 2026-07-07 |
| **Last Tested** | 2026-06-15 |
| **Service Tier** | Tier 1 (Critical) |

## Escalation Path

| Level | Who | When | Contact |
|-------|-----|------|---------|
| L1 | On-call Engineer | First 15 min | PagerDuty auto-page |
| L2 | Tech Lead | After 15 min unresolved | @tech-lead on Slack |
| L3 | Engineering Manager | After 30 min | @eng-manager |
| L4 | VP Engineering | P1 lasting > 1 hour | @vp-eng |

## Severity Definitions

| Severity | Impact | Response Time | Example |
|----------|--------|---------------|---------|
| P1 | Service down or data loss | 5 min | Complete outage, payment failures |
| P2 | Major degradation | 15 min | 50%+ error rate, slow responses |
| P3 | Minor impact | 1 hour | Single feature broken, non-critical |
| P4 | Cosmetic / low impact | Next business day | UI glitch, non-urgent bug |

---

## Incident Procedures

### High CPU Usage (> 85% for 5 min)

**Alert:** \`HighCPUUtilization\` in PagerDuty

\`\`\`bash
# 1. Check current CPU
aws cloudwatch get-metric-statistics \\
  --namespace AWS/ECS --metric-name CPUUtilization \\
  --dimensions Name=ServiceName,Value=api-service \\
  --start-time $(date -u -d '15 min ago' +%Y-%m-%dT%H:%M:%S) \\
  --end-time $(date -u +%Y-%m-%dT%H:%M:%S) \\
  --period 60 --statistics Average

# 2. Check if traffic spike or code issue
# DataDog: compare request rate vs baseline

# 3. Scale up if traffic-driven
aws ecs update-service \\
  --cluster prod-cluster \\
  --service api-service \\
  --desired-count 6

# 4. If code issue, consider rollback
./scripts/rollback.sh --env prod --steps 1
\`\`\`

**Resolution criteria:** CPU < 70% for 10 minutes

---

### Database Connection Exhaustion

**Alert:** \`DatabaseConnectionsHigh\` in PagerDuty

\`\`\`sql
-- 1. Check active connections
SELECT count(*), state FROM pg_stat_activity GROUP BY state;

-- 2. Identify long-running queries
SELECT pid, now() - query_start AS duration, query, state
FROM pg_stat_activity
WHERE state != 'idle'
ORDER BY duration DESC
LIMIT 10;

-- 3. Kill idle connections older than 5 minutes
SELECT pg_terminate_backend(pid)
FROM pg_stat_activity
WHERE state = 'idle'
AND query_start < NOW() - INTERVAL '5 minutes';
\`\`\`

\`\`\`bash
# 4. If persistent, restart connection pooler
kubectl rollout restart deployment/pgbouncer -n app-production
\`\`\`

---

### Service Completely Down

**Alert:** \`ServiceDown\` — health check failing

\`\`\`bash
# 1. Check ECS task status
aws ecs describe-services \\
  --cluster prod-cluster \\
  --services api-service \\
  --query 'services[0].{running:runningCount,desired:desiredCount,events:events[:3]}'

# 2. Check recent task failures
aws ecs list-tasks --cluster prod-cluster --desired-status STOPPED --max-items 5
aws ecs describe-tasks --cluster prod-cluster --tasks <task-arn>

# 3. Check logs
aws logs tail /ecs/api-service --since 15m --follow

# 4. Rollback if recent deployment
./scripts/rollback.sh --env prod --steps 1

# 5. If not deployment-related, force new deployment
aws ecs update-service --cluster prod-cluster --service api-service --force-new-deployment
\`\`\`

---

## Routine Maintenance

### Weekly

- [ ] Review error rate trends in Sentry
- [ ] Check disk usage on all nodes
- [ ] Verify backup completion (RDS snapshots)

### Monthly

- [ ] Review and rotate access keys
- [ ] Update dependency security patches
- [ ] Test rollback procedure in staging
- [ ] Review and update this runbook

---

## Post-Incident Template

**Incident ID:** INC-2026-XXX
**Date:** [Date] | **Duration:** [X hours] | **Severity:** P[1/2/3]

### Timeline

| Time (UTC) | Event |
|-----------|-------|
| HH:MM | Alert triggered — [alert name] |
| HH:MM | On-call engineer acknowledged |
| HH:MM | Root cause identified — [description] |
| HH:MM | Mitigation applied — [action taken] |
| HH:MM | Service fully restored |
| HH:MM | All-clear declared |

### Root Cause

[Detailed description of what caused the incident]

### Impact

- **Users affected:** [number/percentage]
- **Duration of impact:** [X minutes]
- **Revenue impact:** [if applicable]

### Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| [Preventive fix] | @engineer | [Date] | Open |
| [Monitoring improvement] | @devops | [Date] | Open |
| [Runbook update] | @on-call | [Date] | Open |
`
  },
  {
    id: "internal-meeting",
    title: "Team Meeting Notes",
    desc: "Structured meeting notes with attendees, agenda, decisions, and action items.",
    type: "internal",
    content: `# Team Meeting Notes — [Meeting Title]

| Field | Value |
|-------|-------|
| **Date** | 2026-07-07 |
| **Time** | 10:00 – 10:45 AM (UTC+5:30) |
| **Location** | Zoom / Conference Room B |
| **Facilitator** | [Name] |
| **Note-taker** | [Name] |
| **Type** | Weekly Sprint Review |

## Attendees

| Name | Role | Present |
|------|------|---------|
| [Name] | Product Manager | ✅ |
| [Name] | Tech Lead | ✅ |
| [Name] | Engineer | ✅ |
| [Name] | Engineer | ✅ |
| [Name] | QA Lead | ✅ |
| [Name] | Designer | ❌ (PTO) |
| [Name] | Engineering Manager | ✅ |

## Agenda

| # | Topic | Owner | Time |
|---|-------|-------|------|
| 1 | Sprint review — completed work | [Name] | 10 min |
| 2 | Sprint metrics & velocity | [Name] | 5 min |
| 3 | Blockers & risks | All | 10 min |
| 4 | Upcoming sprint planning preview | [Name] | 10 min |
| 5 | Open discussion | All | 10 min |

## Discussion Notes

### 1. Sprint Review

**Completed this sprint (Sprint 24):**

| Ticket | Description | Owner | Status |
|--------|-------------|-------|--------|
| PROJ-301 | User authentication refactor | [Name] | ✅ Done |
| PROJ-305 | Export to PDF feature | [Name] | ✅ Done |
| PROJ-308 | Fix line number scroll bug | [Name] | ✅ Done |
| PROJ-310 | API rate limiting | [Name] | ✅ Done |
| PROJ-312 | Dark mode system preference | [Name] | ✅ Done |

**Not completed (carried over):**

| Ticket | Description | Owner | Reason |
|--------|-------------|-------|--------|
| PROJ-315 | Webhook integration | [Name] | Blocked on API design review |
| PROJ-318 | Performance optimization | [Name] | Scope larger than estimated |

### 2. Sprint Metrics

| Metric | Sprint 23 | Sprint 24 | Trend |
|--------|-----------|-----------|-------|
| Velocity (story points) | 34 | 38 | ↑ |
| Completion rate | 85% | 83% | → |
| Bugs introduced | 2 | 1 | ↓ |
| PR review time (avg) | 4.2 hrs | 3.1 hrs | ↓ |
| Deploy frequency | 3/week | 4/week | ↑ |

### 3. Blockers & Risks

| Blocker | Impact | Owner | Resolution |
|---------|--------|-------|------------|
| API design for webhooks not finalized | PROJ-315 blocked | [PM Name] | Design review scheduled for Wed |
| Staging environment unstable | QA testing delayed | [DevOps] | RDS upgrade planned this weekend |
| Key engineer on PTO next week | Reduced capacity | [EM] | Defer PROJ-320 to Sprint 26 |

**Risks:**
- Production deploy for v2.5 scheduled next week — need full regression pass
- Third-party API (payment provider) changing their API in August — plan migration

### 4. Upcoming Sprint Preview (Sprint 25)

**Proposed priorities:**
1. PROJ-315 — Webhook integration (unblock)
2. PROJ-318 — Performance optimization (carry over)
3. PROJ-322 — Template library v2
4. PROJ-325 — Accessibility audit fixes
5. PROJ-328 — Documentation update

**Estimated capacity:** 36 story points (1 engineer on PTO)

## Decisions Made

| # | Decision | Rationale | Decided By |
|---|----------|-----------|------------|
| D1 | Defer PROJ-320 (mobile responsive) to Sprint 26 | Reduced capacity next week | Team consensus |
| D2 | Use webhook design from API team's RFC #42 | Already reviewed and approved by architecture | [Tech Lead] |
| D3 | Schedule production deploy for Thursday (not Friday) | More time to monitor before weekend | [EM] |

## Action Items

| # | Action | Owner | Due Date | Status |
|---|--------|-------|----------|--------|
| A1 | Finalize webhook API design | [PM] | 2026-07-09 | Open |
| A2 | Complete staging RDS upgrade | [DevOps] | 2026-07-08 | Open |
| A3 | Write regression test plan for v2.5 | [QA] | 2026-07-10 | Open |
| A4 | Update sprint board for Sprint 25 | [Tech Lead] | 2026-07-08 | Open |
| A5 | Share payment API migration timeline | [PM] | 2026-07-14 | Open |

## Next Meeting

**Date:** 2026-07-14, 10:00 AM
**Focus:** Sprint 25 planning + v2.5 deploy retrospective
`
  },
  {
    id: "internal-adr",
    title: "Architecture Decision Record",
    desc: "ADR template for documenting significant technical decisions with context and consequences.",
    type: "internal",
    content: `# ADR-012: Adopt PostgreSQL over MongoDB for Primary Data Store

| Field | Value |
|-------|-------|
| **Status** | Accepted |
| **Date** | 2026-07-07 |
| **Deciders** | [Tech Lead], [Engineer 1], [Engineer 2], [EM] |
| **Consulted** | [DevOps], [Data Team] |
| **Related ADRs** | [ADR-008: Database Selection Criteria](adr-008.md) |

## Context

[Project Name] is building a document management platform that needs a primary data store. The application handles:

- Structured user and document metadata (users, documents, tags, permissions)
- Relational data (users ↔ documents ↔ collaborators ↔ organizations)
- Full-text search on document content
- ACID transactions for billing and permission changes
- Expected scale: 50K users, 2M documents in year 1

We evaluated PostgreSQL, MongoDB, and MySQL as candidates. The team has strong SQL experience but limited MongoDB production experience.

## Decision

We will use **PostgreSQL 16** as the primary data store, with the following stack:

| Component | Choice | Purpose |
|-----------|--------|---------|
| Database | PostgreSQL 16 | Primary data store |
| ORM | Prisma | Schema management, migrations, type-safe queries |
| Full-text search | PostgreSQL tsvector + GIN index | Document content search |
| Connection pooling | PgBouncer | Connection management in production |
| Hosting | AWS RDS (Multi-AZ) | Managed PostgreSQL with automated backups |

## Alternatives Considered

### Option A: MongoDB

| Pros | Cons |
|------|------|
| Flexible schema for document content | Team lacks production MongoDB experience |
| Native JSON storage | Weaker transaction support for billing |
| Horizontal scaling via sharding | Relational queries (permissions, joins) are awkward |
| | Full-text search requires Atlas Search (additional cost) |
| | Schema drift risk without strict validation |

**Verdict:** Rejected — relational data model doesn't fit document-oriented storage well.

### Option B: MySQL

| Pros | Cons |
|------|------|
| Team familiarity | Weaker JSON support than PostgreSQL |
| Wide hosting support | Less powerful full-text search |
| Good performance | No native array types |
| | Fewer advanced features (CTEs, window functions less mature) |

**Verdict:** Rejected — PostgreSQL offers strictly more capabilities for our use case.

### Option C: PostgreSQL (Selected)

| Pros | Cons |
|------|------|
| Strong ACID transactions | Vertical scaling limits (mitigated by read replicas) |
| Excellent JSON/JSONB support | Slightly more complex setup than MongoDB Atlas |
| Built-in full-text search | Schema migrations require discipline |
| Rich indexing (GIN, GiST, B-tree) | |
| Team SQL expertise | |
| Prisma provides excellent DX | |
| AWS RDS Multi-AZ for HA | |

**Verdict:** Selected — best fit for relational + search requirements.

## Consequences

### Positive

- Type-safe database access via Prisma generates TypeScript types from schema
- ACID transactions ensure billing and permission changes are consistent
- Full-text search without additional infrastructure or cost
- Team can be productive immediately with familiar SQL
- Strong ecosystem of tools (pgAdmin, DataDog integration, migration tools)

### Negative

- Schema changes require migration files and deployment coordination
- Horizontal write scaling limited (acceptable for year 1 projections)
- JSON document content stored as TEXT with tsvector index (not native document store)
- Need to manage connection pooling (PgBouncer) for production

### Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Write scaling bottleneck at >100K users | Plan read replicas; evaluate Citus extension if needed |
| Migration failures in production | Test migrations on staging clone; use Prisma migrate deploy |
| Full-text search quality vs Elasticsearch | Evaluate Elasticsearch if search quality insufficient (ADR-015) |

## Implementation Plan

| Step | Owner | Timeline |
|------|-------|----------|
| Set up Prisma schema with core models | [Engineer 1] | Week 1 |
| Configure RDS PostgreSQL (staging) | [DevOps] | Week 1 |
| Implement migrations for v1 schema | [Engineer 1] | Week 2 |
| Add full-text search indexes | [Engineer 2] | Week 2 |
| Set up PgBouncer in production | [DevOps] | Week 3 |
| Load testing with 2M document dataset | [Engineer 2] | Week 4 |

## References

- [ADR-008: Database Selection Criteria](adr-008.md)
- [PostgreSQL Full-Text Search Documentation](https://www.postgresql.org/docs/16/textsearch.html)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Load test results (Confluence)](https://confluence.company.com/load-test-results)
`
  },
  {
    id: "advanced-animated-profile",
    title: "Animated Developer Profile",
    desc: "Advanced GitHub profile README featuring waving title headers, typing animations, visitor counters, activity graphs, and tech stack badges.",
    type: "advanced",
    content: `# <p align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&height=220&text=Rajkumar%20PR&fontAlign=50&fontAlignY=38&fontSize=48&color=0:4B0082,40:6A0DAD,100:8A2BE2&fontColor=ffffff"/>
</p>
<p align="center">

<p align="center">
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=30&duration=3000&pause=500&color=8A2BE2&center=true&vCenter=true&width=700&lines=Hi+Welcome+To+My+Git"/>
</p>

> 💻 Python Full-Stack Developer · 🚀 Penetration Tester · 



![](https://komarev.com/ghpvc/?username=its-rajkumarpadmanabhan&label=Profile%20views&color=0e75b6&style=flat)

<p align="center">
Passionate about building scalable web applications, securing digital systems, and solving real-world problems through technology.
</p>

### 🚀 About Me

* 🛡️ Experienced in Web Application Security & Python Development 
* 🔭 Working on Python Full Stack Projects
* 🌱 Learning Software Architecture & Technologies
* 💡 Love creating secure, efficient, and user-friendly applications
* 🤝 Open to collaboration on Web Development and Open Source Projects

### 🛠️ Tech Stack



| 🔐 Security | ⚙️ Tools | 🚀 Practices |
| :--- | :--- | :--- |
| Penetration Testing | Git / GitHub | Agile Development |
| Vulnerability Assessment | Linux | Code Reviews |
| Secure Code Review | VS Code | Debugging |
| Web App Security | Postman | Problem Solving |


# 📈 Contribution Graph

[![Activity Graph](https://github-readme-activity-graph.vercel.app/graph?username=its-rajkumarpadmanabhan&theme=tokyo-night)](https://github.com/its-rajkumarpadmanabhan)


### 🏆 Certifications

* Certified Python Full Stack Developer
* Certificate in Penetration Testing
* Data Analytics & Visualization – Accenture
* Artificial Intelligence Program – Cognizant
* Virtual Experience Program – Infosys
* Corporate Etiquette – TCS iON
* Basics of IoT & Machine Learning
* Basic Telecom Training – BSNL


### 🌐 Languages

* 🇬🇧 English | 🇮🇳 Malayalam | 🇮🇳 Tamil

<!-- Icons Section -->
<p align="center">
  <img src="https://skillicons.dev/icons?i=python,django,flask,html,css,js,bootstrap,angular,mysql,mongodb,git,github,linux,vscode,postman" />
</p>


⭐ *Building secure software, solving real-world problems, and continuously learning new technologies.*
`
  },
  {
    id: "advanced-project-dashboard",
    title: "Interactive Project Showcase",
    desc: "An advanced project readme with dynamic progress bars, animated alerts, collapsible dropdowns, and live SVG stats widgets.",
    type: "advanced",
    content: `# 🚀 SuperProject — Advanced Showcase

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&height=100&text=SuperProject&fontSize=40&color=100:00dbde,0:fc00ff&fontColor=ffffff"/>
</p>

## 📊 Live Project Status

| Metric | Status | Trend |
| :--- | :--- | :---: |
| Build Status | ![Build](https://img.shields.io/github/actions/workflow/status/you/repo/ci.yml?branch=main) | 📈 |
| Test Coverage | ![Coverage](https://img.shields.io/codecov/c/github/you/repo?color=brightgreen) | 🟢 |
| Code Quality | ![Linter](https://img.shields.io/badge/eslint-passing-brightgreen) | 🛡️ |

### 🛠️ Feature Roadmap & Progress

- **Core Engine v2** [██████████████████░░░] 90%
- **Web UI & Themes** [████████████░░░░░░░░░] 60%
- **API Documentation** [█████████████████████] 100%

---

## 💡 Quick Demo (Collapsible Breakdown)

<details>
<summary><b>🔍 Expand to see advanced system architecture</b></summary>

\`\`\`
┌────────────────┐      ┌───────────────┐      ┌─────────────────┐
│  Client App    │ ───▶ │  API Gateway  │ ───▶ │ Microservices   │
│  (React / WS)  │ ◀─── │  (Nginx/SSL)  │ ◀─── │ (Go / Node.js)  │
└────────────────┘      └───────────────┘      └────────┬────────┘
                                                        │
                                                ┌───────▼────────┐
                                                │ PostgreSQL DB  │
                                                └────────────────┘
\`\`\`
</details>

## 🎨 Technology Badges

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=ts,react,nextjs,nodejs,postgres,redis,docker,githubactions,aws" />
  </a>
</p>

⭐ *Loved this project? Give it a star to show your support!*
`
  }
];
