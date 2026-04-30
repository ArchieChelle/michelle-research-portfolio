# PRD: michelle.research — Portfolio Homepage
**Owner:** Michelle Exantus  
**Last Updated:** April 29, 2026  
**Status:** Ready for Build  
**Platform:** Astro + Formspree

---

## 1. Overview

A professional research portfolio homepage for Michelle Exantus, a Mixed-Methods UX Researcher. The primary goal is to convert a recruiter's 10-second scan into a click — and a hiring manager's deeper review into an interview request. The site is built fresh on the Option B "Signature Split Grid" brand system (Plum + Ember). No legacy visual language from previous portfolio PDF carries over.

---

## 2. Design System

### 2.1 Color Palette
| Token | Hex | Role |
|---|---|---|
| Black Coffee | `#3A2D34` | Body text |
| Jacarta | `#3F2A52` | Headings, Nav |
| Ember | `#A35139` | Primary CTA |
| Wisteria | `#BEAEDB` | Soft accent |
| Amber | `#FFB162` | Highlight accent |
| Parchment | `#EEE9DF` | Background |
| White | `#FFFFFF` | Surface |

### 2.2 Typography
| Role | Font | Size |
|---|---|---|
| Display / H1 | Newsreader | 68px |
| H2 | Newsreader | 42px |
| H3 | Newsreader | 28px |
| Body | IBM Plex Sans | 18px |
| Small / Labels | IBM Plex Sans | 14px |

### 2.3 Spacing
8-point base scale: 8 / 16 / 24 / 32 / 48 / 64 / 96px  
Asymmetry balanced by consistent spacing.

### 2.4 Motion
- Underline sweep on nav links
- Card lift on hover
- Staggered reveal for featured work
- Scroll-triggered accent lines
- Reduced-motion fallback required

### 2.5 Layout
12-column grid. Desktop-first. Asymmetric compositions. Grid-breaking hero image block.

---

## 3. Navigation

**Left:** Michelle Research logo (MR monogram + wordmark + "The Architect Chelle" tagline)  
**Right:** Projects · Process · Writing · Contact  
**CTA:** Small Ember-colored "Let's Connect" button  
**Behavior:** Sticky on scroll. Transparent over hero, solid Parchment on scroll.

---

## 4. Section Specifications

### 4.1 Hero Section
**Layout:** 12-column split. Left 5 cols content. Right 7 cols image block.

**Left Column:**
- Small label: `Mixed-Methods UX Researcher` (IBM Plex Sans, 14px, Jacarta, uppercase tracking)
- Headline: `I design clarity into complexity.` (Instrument Serif, 68px, Jacarta)
- Supporting copy:
  > I partner with product and engineering teams to uncover what users actually need. The insights I deliver are qualified, quantified, and actionable. Built to reach decision-makers, not just decks.
- Primary CTA button: `View Featured Work →` (Ember fill)
- Text link: `Let's Connect` (underline sweep on hover)

**Right Column:**
- Large portrait/image block
- Lavender (Wisteria `#BEAEDB`) background panel
- Ember circle accent element
- Textured paper/card overlay
- Small brush-stroke detail beneath image

---

### 4.2 Companies Worked With
**Layout:** Full-width. Centered.

**Caption (above carousel):** `Trusted by research-led teams.`  
(IBM Plex Sans, 14px, Jacarta, centered, uppercase)

**Animated Logo Carousel:** Continuous horizontal scroll, muted Jacarta tint on logos.  
**Logos:** SportsEngine HQ · SportsEngine Mobile · GolfPass · GolfNow · NBCUniversal · First Family Trust

**Divider:** Thin 1px Wisteria rule above section.

---

### 4.3 Featured Case Study
**Layout:** Asymmetric editorial block.

**Left:** Section number `04` + label `Featured Case Study` (small, uppercase, Jacarta)  
**Center/Right:** Large case card containing:
- Case study hero image
- Industry tag: `Generative Research · Mixed-Methods · End-to-End`
- Title: `The New Playbook: Crafting SportsEngine Mobile's Vision and Value Proposition`
- Short outcome: `Narrowed 13 competing features to 5 strategic investments. Directly influenced leadership to expand team resources.`
- CTA: `Read case study →` (Ember, text link with arrow)

---

### 4.4 Project Grid
**Layout:** 3-card grid.

| Card | Title | Tag | Result |
|---|---|---|---|
| 1 | Smart Scaling: MaxDiff Guiding Our API Strategy for ROI | Strategic Research · Survey · Feature Prioritization | Quantified feature value to guide API investment decisions |
| 2 | Optimizing SEPlay's Pricing Strategy | Evaluative Research · Survey · Feature Prioritization | Tier recommendations adopted by executives to inform pricing strategy |
| 3 | Tax Intel Pro — AI-Powered Document System | Sandbox Project · AI · Document Processing | End-to-end intelligent document processing pipeline in progress |

**Each card includes:** Thumbnail · Category tag · Title · 1-line result · Arrow link  
**Note:** ResearchOps case study to be added as Card 4 when content is ready.

---

### 4.5 My Process
**Layout:** Condensed teaser. Full methodology lives on dedicated `/process` page.

**Framework:** Triple Diamond + PAIR (People + AI Research)  
**Tagline:** `My process follows the Triple Diamond — powered by the PAIR framework at every stage.`

**Condensed Homepage Display:** 3–4 stage headline tiles with stage names and one-line descriptions.  
**CTA:** `Explore my full process →` (links to `/process` page)

**PAIR Stage Mapping (for full process page):**
- Pre-study: AI assists desk research, screener generation, discussion guide drafting
- During: AI supports live transcription, sentiment flagging
- Post-study: AI accelerates synthesis, tagging, reporting — human judgment leads all decisions

---

### 4.6 Writing
**Nav:** Included  
**Launch State:** Light / placeholder treatment. Minimum 3 pieces before full population.  
**Content Pipeline:** Fed by LinkedIn thought leadership cadence.  
**Each entry includes:** Title · Short description · Date · `Read →` link

---

### 4.7 Contact Section
**Headline:** `Let's build what's next.`  
**Subtext:** `Open to new opportunities and collaborations.`  
**Form Fields:** Name · Email · Message · Send button (Ember)  
**Backend:** Formspree  
**Secondary path:** LinkedIn URL (icon link only — no raw email exposed on page)

---

### 4.8 Footer
**Style:** Minimal close. No repeated nav links.  
**Contents:** Copyright line · LinkedIn icon · nothing else.

---

## 5. Page Architecture

| Page | Status |
|---|---|
| `/` — Homepage | Build now |
| `/projects` | Build now (flat grid index) |
| `/projects/new-playbook` | Build now (featured case study) |
| `/projects/smart-scaling` | Build now |
| `/projects/seplay-pricing` | Build now |
| `/projects/tax-intel-pro` | Build now (sandbox label) |
| `/projects/researchops` | Coming soon |
| `/process` | Build now (full PAIR + Triple Diamond) |
| `/writing` | Launch light, populate as content is ready |
| `/contact` | Build now |

---

## 6. Technical Requirements

| Requirement | Decision |
|---|---|
| Build platform | Astro |
| Form backend | Formspree |
| CMS | Astro content collections (project cards + writing posts) |
| Fonts | Newsreader + IBM Plex Sans (Google Fonts) |
| Logo carousel | CSS infinite scroll animation |
| Motion | CSS transitions + scroll-triggered reveals; reduced-motion fallback |
| Responsive | Desktop-first; mobile layout per Option B mockup |

---

## 7. Content Checklist

- [x] Hero copy locked
- [x] Color system locked
- [x] Typography locked
- [x] Featured case study identified (The New Playbook)
- [x] Project grid content identified (3 cards)
- [x] Logo roster confirmed (6 brands)
- [x] Process framework defined (Triple Diamond + PAIR)
- [ ] Hero portrait/photo — needed for image block
- [ ] Company logos — vector files needed for carousel
- [ ] Case study hero images — needed for cards
- [ ] Writing section — 3 pieces minimum before launch
- [ ] ResearchOps case study — content pending

---

## 8. Out of Scope (This Version)

- Blog filtering or tagging system
- Password-protected case studies
- Dark mode
- Multilingual support
- Analytics integration (add post-launch)
