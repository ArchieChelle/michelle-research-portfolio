---
title: "Smart Scaling: MaxDiff Guiding Our API Strategy for ROI"
slug: smart-scaling
status: draft
methods: Evaluative Research, MaxDiff (Best-Worst Scaling), Survey Design, Quantitative Modeling, Feature Prioritization
industry: Sports Technology / SaaS
client: NBCUniversal — SportsEngine HQ
timeline: "[TO FILL: total project duration]"
hero_image: ../../assets/case-study-heroes/smart-scaling.jpg
last_updated: 2026-04-28
---

# Smart Scaling: MaxDiff Guiding Our API Strategy for ROI

> **Outcome:** Prioritized Graph API integration for active web users with CSV-upload workflows — replacing a loudest-voice backlog with a defensible, customer-backed framework that established MaxDiff as a repeatable prioritization tool across the organization.

---

## At a glance

| | |
|---|---|
| **Role** | Lead UX Researcher |
| **Methods** | MaxDiff (Best-Worst Scaling) · Survey design · Quantitative modeling · Attitudinal self-reporting |
| **Sample** | n=170 active web users with recent CSV-upload behavior |
| **Study design** | [TO FILL: X items tested \| Y items per set \| Z tasks per respondent \| estimation model] |
| **Team** | Director of Product · Account Management · Engineering · UX |
| **Outcome** | Graph API integration shipped; MaxDiff adopted as org-wide prioritization standard |

---

## Context

SportsEngine HQ is an all-in-one SaaS platform serving leagues, coaches, and parents managing youth sports operations. Integrations are a competitive battleground — they determine workflow fit, and the wrong build decisions mean wasted engineering and competitive vulnerability. By the time this project began, the team had accumulated a growing backlog of integration requests with no framework for evaluating them against each other.

---

## The challenge

The backlog included requests for Mailchimp, GameChanger, Zapier, and a half-dozen others — all competing for the same finite engineering capacity. The problem wasn't a shortage of opinions. Roadmap decisions defaulted to whoever was most vocal, not to what customers actually valued most. There was no scoring system, no evidence, no framework.

The Director of Product needed a defensible answer to a deceptively simple question: **which integrations do our customers value most, and how do we prove it?**

I was brought in after presenting prioritization methodologies at a bi-annual team fly-in. The mandate was clear: replace gut-feel prioritization with customer-backed evidence.

---

## Approach

The core design challenge was methodological: the team needed relative priority rankings across many options, not just category-level groupings. That ruled out simpler tools.

- **MaxDiff (Best-Worst Scaling)** — chosen because it forces real trade-offs between items, producing a statistically reliable preference share. Kano would have categorized features but couldn't rank within categories. Conjoint would have modeled pricing trade-offs — appropriate for subscription design but overkill without a pricing dimension here. MaxDiff was the right fit: it produces defensible, customer-backed rankings across a competitive set.

- **Attitudinal self-reporting (familiarity + satisfaction measures)** — layered into the survey design to surface not just what users preferred, but whether low-ranked items suffered from unfamiliarity rather than genuine disinterest. This was the mechanism that surfaced the Zapier education gap (Finding 3).

- **Behavioral screener** — participants were required to have uploaded .csv files recently and accessed the platform on web. This was an intentional sample design decision to capture the operational workflow segment most likely to benefit from integration features.

**Study design:** [TO FILL: X integration items tested | Y items per set | Z tasks per respondent | estimation model (e.g., Hierarchical Bayes)]

**Recruited from:** Monthly Account Manager Newsletter · Community Forum · In-product Qualtrics intercept

**Segmented by:** Organization size · Familiarity with 3rd-party products · Satisfaction level

> **Sample boundary:** Because participants were screened for CSV-upload behavior, results are strongest for spreadsheet-heavy operational workflows. Generalization to all SportsEngine roles — coaches, parents, athletes, non-web users — requires a broader validation wave.

---

## Findings

### Finding 1: Scheduling and communication dominate what users are actually trying to do

When users were forced to trade off across integration categories, Scheduling and Email Communication ranked at the top. Game Results & Stats Tracking and Referee Management ranked at the bottom. This wasn't surprising in isolation, but it was strategically important: it established a Jobs-to-Be-Done hierarchy that product could anchor integration decisions to — not feature requests by name, but by the workflow categories users actually needed to accomplish.

*\* Rankings reflect preferences of active web users with recent CSV-upload behavior.*

### Finding 2: Spreadsheets produced the dominant preference signal — by a significant margin

Among the screened segment, spreadsheet integrations captured **39.5% preference share** — approximately 3x the share of Mailchimp (12.6%) and GameChanger (12.5%), the next closest competitors. The separation was statistically robust within the sample. [TO FILL: confidence intervals or bootstrapped intervals if available]

This result gave the team an unambiguous signal for where to concentrate engineering capacity first: the spreadsheet-dependent operational workflow was the highest-value integration target for this segment.

**MaxDiff preference share (top results):**

| Integration | Preference Share |
|---|---|
| Spreadsheets | 39.5% |
| Mailchimp | 12.6% |
| GameChanger | 12.5% |
| Constant Contact | 10.6% |
| TeamGenius | 9.7% |
| Zapier | 4.0% |

### Finding 3: The Zapier education gap — a build opportunity and an activation problem

Zapier enables exactly the spreadsheet automation workflows users said they needed. But only **27.6% of respondents were familiar with it**. Its 4.0% preference share is almost certainly a familiarity floor, not a preference ceiling.

This reframed the opportunity: the team wasn't just looking at what to build, but what to teach. Prioritizing Zapier-compatible workflows without an education strategy would underdeliver on the user value the data actually signaled.

### Finding 4: The GameChanger paradox — request volume is a misleading signal

GameChanger was one of the top three most-requested integrations by name in the backlog. But in the MaxDiff study, Game Results & Stats Tracking — the job-to-be-done that GameChanger primarily serves — ranked at the bottom of user priorities.

The conclusion is methodologically important: **request volume reflects familiarity bias, not user value.** Users request tools they know by name. MaxDiff measures what they actually value when forced to choose. These are different things, and conflating them is how backlogs get captured by the loudest voice.

**The 2x2 this surfaces:**

```
                    HIGH PREFERENCE SHARE    LOW PREFERENCE SHARE
HIGH REQUEST VOL  │ Spreadsheets (build)   │ GameChanger (defer)
LOW REQUEST VOL   │ Zapier (educate+build) │ iScore, Avario (low priority)
```

The bottom-left quadrant — high user value, low awareness — is where the most underserved opportunities live. The study revealed Zapier as one of them.

---

## Impact

- **Feature shipped:** Graph API integration went to production — directly tied to the highest-preference spreadsheet workflow segment identified in the study.
- **Framework established:** MaxDiff adopted as the repeatable integration prioritization tool for the team, replacing volume-based request tracking as the default input to roadmap decisions.
- **New organizational standard:** Request volume ≠ user priority. This reframe changed how the team evaluated future backlog items.
- **Secondary opportunity identified:** Automation education strategy surfaced as a parallel initiative — communicating Zapier's workflow capabilities to the users who needed them but didn't know it existed.

---

## Reflection

The sampling decision was the most consequential methodological choice in this study — and also its primary limitation. Screening for active web users with recent CSV-upload behavior was intentional: it isolated the segment most likely to generate integration-related Jobs to Be Done. But it almost certainly overrepresented spreadsheet-heavy administrative users, which inflated the preference share for spreadsheet integrations relative to what a representative cross-section of all SportsEngine users might show.

In future iterations, stratified sampling would correct for this — ensuring that coaches, parents, athletes, and fans are represented at rates proportional to their actual share of the user base, not their likelihood of uploading a CSV file. The result would produce findings that generalize more confidently across the full platform, not just the most active operational segment.

The Zapier finding is also worth reflecting on: the study design surfaced it as an education gap almost by accident — the familiarity question was included as a segmentation variable, not as a primary research objective. That it produced the most strategically interesting secondary insight in the study is a reminder that attitudinal self-reporting layers (familiarity, satisfaction, confidence) carry more signal than they are often given credit for in purely evaluative research designs.

Finally, the GameChanger paradox validated the methodological choice itself. If the team had relied on request volume alone, GameChanger would have been a top-three priority. MaxDiff moved it to the bottom. That gap between expressed demand and measured value is exactly what the method is designed to surface — and in this case, it changed the roadmap.

---

## Footer

**Project completed:** [TO FILL: year]
**Want to discuss this work?** [Let's connect →](#contact)

---

## Notes for Framer (strip before publishing)

- Hero image: drag `smart-scaling.jpg` from `/assets/case-study-heroes/` into the layout
- Section dividers: thin Wisteria `#BEAEDB` 1px rule between major sections
- Block quotes (sample boundary note): Newsreader, italic, indented — use the pull-quote style
- The preference share table: render as a styled data table with Ember `#A35139` on the top row (Spreadsheets)
- The 2x2 matrix: render as a 4-cell grid component, not as a code block — Jacarta `#3F2A52` borders, labels in IBM Plex Sans 12px uppercase
- MaxDiff design details block in Approach: render as a small callout card (Parchment `#EEE9DF` background, Black Coffee `#3A2D34` text, IBM Plex Sans Mono for the spec values)
- Pull quote candidate for Finding 4: "Request volume reflects familiarity bias, not user value." — render in Ember, Newsreader italic, large
- Evidence boundary note: include at the bottom of the Approach section AND as a standalone callout at the end of Findings, matching the style used in the Canva deck's new page 20
