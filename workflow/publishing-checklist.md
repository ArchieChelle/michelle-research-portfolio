# Publishing Checklist

The bridge between VS Code and Framer. Run this checklist before publishing any case study or writing piece.

---

## Pre-publish (still in VS Code)

### Content review
- [ ] Frontmatter is complete (`title`, `slug`, `status`, `methods`, `hero_image`)
- [ ] Outcome line is one sentence and leads with the result
- [ ] Every metric has a number (no vague "significantly improved")
- [ ] Reflection section is filled in (signals seniority)
- [ ] Voice check: read it aloud — does it sound like a strategist?
- [ ] No filler phrases (`in order to`, `had the opportunity to`, `worked closely with`)

### Asset readiness
- [ ] Hero image exists in `/assets/case-study-heroes/`
- [ ] Image is sized appropriately (recommend 1600×900 minimum, optimized)
- [ ] Image filename matches the slug (`new-playbook.jpg`, not `IMG_0234.jpg`)
- [ ] Any in-page diagrams or charts are in `/assets/`

### SEO + metadata
- [ ] Title is under 60 characters (or has a shortened SEO version)
- [ ] First paragraph works as a meta description (~155 characters)
- [ ] Slug is lowercase, hyphenated, descriptive

---

## In Framer

### Setup
- [ ] Create CMS entry (or page if not using CMS)
- [ ] Set the slug to match the markdown frontmatter
- [ ] Set status to `Published` (or keep as `Draft` for review first)

### Content
- [ ] Paste markdown content into Framer's CMS rich text field
- [ ] Verify headings rendered correctly (H1, H2, H3)
- [ ] Verify lists, tables, and block quotes look right
- [ ] Upload hero image to Framer
- [ ] Link any in-line images
- [ ] Apply brand styles (Newsreader for headings, IBM Plex Sans for body)

### Layout
- [ ] Asymmetric grid breaks render correctly
- [ ] CTA buttons use Ember `#A35139`
- [ ] Pull quotes render in Ember
- [ ] Section dividers are 1px Wisteria

---

## Post-publish

### QA
- [ ] Open the live page on **desktop**
- [ ] Open the live page on **mobile** (use Chrome DevTools device toolbar if needed)
- [ ] Check all internal links
- [ ] Test the contact form (Formspree submission)
- [ ] Confirm reduced-motion preference respected (System Preferences → Accessibility → reduce motion)

### Distribution
- [ ] Update the markdown file frontmatter: `status: published`
- [ ] Move LinkedIn version (if applicable) to `/content/writing/published/`
- [ ] Add the live URL to the markdown frontmatter
- [ ] Share on LinkedIn with a hook + the URL
- [ ] Update `linkedin.com/in/exantusmich` Featured section if it's a marquee piece

---

## Rollback

If something looks broken in Framer:

1. Don't panic
2. In Framer, revert to the previous published version
3. Fix in VS Code, re-paste, re-publish
4. The markdown file is your source of truth — Framer is the renderer
