# NEXTGEN AI — R26-DS-005 Academic Research Website

Academic information website for the SLIIT final-year research project
**"An Agentic AI Framework for Neuro-Marketing Strategy Generation Based on Cognitive and Behavioural Principles"**.

This site documents the research (domain, components, milestones, documents, presentations, team).
It is separate from the research product itself.

## Pages

| Page | File | Content |
|---|---|---|
| Home | `index.html` | Title, overview, research problem, 4 component cards, integrated pipeline, tech stack |
| Research Domain | `research.html` | Background, literature survey, research gap, problem, objectives, methodology, technologies |
| Components | `components.html` | Tabbed detail for C1–C4: objective, research questions, pipeline, data, models, evaluation, results (deep links: `#c1`–`#c4`) |
| Milestones | `milestones.html` | Assessment timeline with status |
| Documents | `documents.html` | Searchable downloads: charter, proposals, status docs, checklists, theses, research paper |
| Presentations | `presentations.html` | Slide decks per assessment stage |
| About Us | `about.html` | Supervisors, team, contact form (opens email client) |

## Run locally

No install or build step. Either:

- Double-click `index.html`, or
- Serve it: `python -m http.server 8080` in this folder, then open http://localhost:8080

## Edit content

**All text lives in `js/data.js`.** Search it for `// EDIT` and replace:

- Team member student IDs and emails, supervisor emails
- Group contact email and optional GitHub link
- Milestone dates and status (`done` / `current` / `upcoming`)

### Add team photos

Copy each member's photo into `assets/img/team/` with these names:
`fernando.jpg`, `widyasekara.jpg`, `senadeera.jpg`, `samaraweera.jpg`
(square, at least 400 x 400 px). They appear on the About Us cards and on each
component's owner badge. If a photo is missing, the initials are shown instead.

### Add a document or slide deck

1. Copy the PDF into `assets/docs/` (or `assets/slides/`), e.g. `assets/docs/proposal-c1.pdf`
2. In `js/data.js`, set that item's `file: "assets/docs/proposal-c1.pdf"`
3. Items with an empty `file` show "Coming soon"

Use lowercase file names without spaces.

## Deploy (free)

- **GitHub Pages:** push this folder to a repo → Settings → Pages → Deploy from branch `main`, root
- **Vercel / Netlify:** [Nextgen AI APP](https://nextgen-ai-website.vercel.app/)
## Structure

```
├── index.html, research.html, components.html, milestones.html,
│   documents.html, presentations.html, about.html
├── css/style.css        # design system, light/dark themes, responsive layout
├── js/data.js           # ALL site content (edit this)
├── js/main.js           # renders header, footer and each page from data.js
└── assets/
    ├── docs/            # PDF documents
    ├── slides/          # presentation PDFs
    └── img/favicon.svg
```

## Tech

Plain HTML5, CSS3 and vanilla JavaScript — no frameworks, works offline
(Google Fonts load when online, system fonts otherwise). Responsive, dark mode, keyboard-accessible.
