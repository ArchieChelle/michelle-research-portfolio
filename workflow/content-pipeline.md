# Content Pipeline

How the LinkedIn cadence feeds the portfolio writing section — and vice versa.

---

## The flow

```
   LinkedIn post (short)  ←→  Portfolio essay (long)
              ↓
        Both link back to
              ↓
       A case study or framework
```

A great LinkedIn post and a great portfolio essay are usually the same idea at two different lengths. Don't write them separately — write them together.

---

## Working pattern

### Step 1 — Capture the idea
When something interesting hits you (a research insight, a stakeholder pattern, a method you tried), drop a 3-line note into `/content/writing/_drafts/`.

Filename format: `YYYY-MM-DD-slug.md`
Example: `2026-04-26-research-not-decks.md`

### Step 2 — Develop in VS Code
Use `/templates/writing-post-template.md`. Fill in:
- The promise (one sentence)
- The argument
- The evidence (link to a case study)
- The so-what

### Step 3 — Cut a LinkedIn version
At the bottom of the same file, write the LinkedIn version. Trim 60–70%. Lead with the strongest line.

### Step 4 — Publish in two places
- **LinkedIn first** (test the hook in the wild)
- **Portfolio second** (only if it gets traction OR if it's foundational thought leadership)

### Step 5 — Move to published
- Move the markdown file from `_drafts/` to `published/`
- Update frontmatter: `status: published`, add `linkedin_url`

---

## What earns a portfolio slot

Not every LinkedIn post belongs in the portfolio Writing section. A piece earns a portfolio slot if it does **one** of these:

1. **Reframes a problem** — gives the reader a new way to see something they already deal with
2. **Connects to a case study** — extends or theorizes about work you've actually shipped
3. **Establishes method authority** — shows you have a point of view on how research should be done

If it's just a hot take or a relatable observation, leave it on LinkedIn.

---

## Cadence

Aligned with your current LinkedIn strategy (2–3x per week):
- **2 posts per week** → keep these as LinkedIn-only
- **1 post per week** → develop into a portfolio essay if it earns a slot

Goal: **3 portfolio writing pieces** before launching the Writing section, then steady drip.

---

## Cross-linking

Every portfolio essay should link to **at least one case study** in your portfolio.
Every case study should link to **at least one portfolio essay** that develops the thinking.

This builds the internal link graph that keeps recruiters and hiring managers reading.
