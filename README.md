# michelle.research — Portfolio Workspace

This is your VS Code workspace for the **michelle.research** portfolio.

> This repo is the source of truth for the **michelle.research** portfolio — content, assets, brand system, and the Astro site that publishes it all.

---

## The workflow

```
  Draft in VS Code  →  Polish as markdown  →  Implement in Astro  →  Deploy
```

1. **Write** case studies, copy, and posts as `.md` files inside `/content/`
2. **Organize** logos, photos, and visuals inside `/assets/` so Astro components can reference them
3. **Reference** colors, typography, and voice from `/brand/` so everything stays consistent
4. **Build** by implementing polished content into Astro pages and components inside `/site/`

---

## Why markdown?

- **Beginner-friendly.** It's just text with light formatting (`# Heading`, `**bold**`, `- bullet`).
- **Live preview in VS Code.** Open any `.md` file and press `Cmd+Shift+V` (Mac) or `Ctrl+Shift+V` (Windows).
- **Portable.** Content lives in plain markdown, independent of the build tool.
- **Easy to edit with Claude.** Paste any `.md` file into a chat and ask for feedback.

---

## Folder map

```
michelle-research-portfolio/
├── brand/              ← Design system & PRD reference
├── content/            ← All written content (markdown)
│   ├── homepage/         Hero, contact, featured copy
│   ├── case-studies/     One file per case study
│   ├── process/          Triple Diamond + PAIR page
│   └── writing/          Blog posts (drafts → published)
├── assets/             ← Visual files referenced by Astro components
│   ├── logos/            Company logos for carousel
│   ├── portrait/         Hero portrait
│   ├── case-study-heroes/ Hero images per case
│   └── icons/            UI icons (LinkedIn, etc.)
├── templates/          ← Copy these to start new pieces
└── workflow/           ← Personal process notes & checklists
```

---

## First steps

1. Open `/brand/PRD.md` and skim the full project spec.
2. Open `/templates/case-study-template.md` to see how a case study is structured.
3. Start drafting your featured case study in `/content/case-studies/new-playbook.md`.
4. When you're ready to publish, follow `/workflow/publishing-checklist.md`.

---

## Quick keyboard reference for VS Code

| Action | Mac | Windows |
|---|---|---|
| Markdown preview | `Cmd+Shift+V` | `Ctrl+Shift+V` |
| Side-by-side preview | `Cmd+K V` | `Ctrl+K V` |
| Open file | `Cmd+P` | `Ctrl+P` |
| Search across all files | `Cmd+Shift+F` | `Ctrl+Shift+F` |
