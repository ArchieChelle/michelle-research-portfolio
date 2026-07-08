# New Playbook — Case Study Update Log

**Date:** 2026-07-07
**Case study:** Aligning Stakeholders and Prioritizing Mobile Roadmap Concepts (`new-playbook`)
**Client:** NBCUniversal — SportsEngine

## Files touched

| File | Change |
|---|---|
| `content/case-studies/new-playbook-mobile-roadmap.md` | Full draft — placeholders filled + sharpened |
| `outputs/new-playbook-mobile-roadmap-2026-04-28.md` | Kept byte-identical mirror of the draft |
| `site/src/content/case-studies/new-playbook.md` | Frontmatter reconciled to match the draft |

## Source material

All filled-in facts came from two Notion exports (uploaded as zips) plus the Kano results screenshots inside them:

- **Internal Stakeholder Update** (created Jan 31, 2023) — executive summary of Kano findings + the 13-feature importance ranking.
- **Mobile Stakeholder Interview / Vision Validation Plan** (last edited Feb 03, 2023) — interview themes and quotes, vision-workshop structure, Kano survey instrument, results table, and recommendations.
- **Kano results screenshot** — the continuous-analysis table with exact importance scores (Direct Message 5.68 → Chat Polling 3.38) and Kano class per feature.

No figures were invented. Where the source did not support a claim, the gap was flagged rather than filled.

---

## Round 1 — Filled the `[TO FILL]` placeholders

Replaced every placeholder in the draft with sourced content:

- **Sample / recruitment** — named the real channels: Intellizoom panel, in-app mobile intercept, internal employee network, club/org network; screener (child in youth sports + current apps used).
- **Finding 1 theme table** — five stakeholder themes, each with a real interview quote mapped to its vision-workshop team (Payment, Communication, Scheduling, Onboarding, Sharing/Video-Social).
- **Study design specs** — research question, population, sample, metric, and the actual functional/dysfunctional/importance question wording.
- **Finding 3 (Kano)** — corrected the method description: the study used a **4-category** model (Must-have / Performance / Attractive / Indifferent), not the textbook 6-category Kano; removed the speculative "mixed with Best-Worst/MaxDiff" concern (no evidence of it in the source).
- **Finding 4 matrix** — full 13-concept table with real importance scores and Kano class.
- **Impact / Reflection** — rewritten against the evidence; honest about the 12-of-13-Attractive limitation.
- **Frontmatter** — `last_updated` → 2026-07-07; footer "Project completed" corrected 2024 → **2023** (matches source dates).

---

## Round 2 — Sharpening pass (recommendations 1–6)

1. **Stripped the working-notes voice.** Removed every "flag this / confirm before publishing / add scores here" aside from the body. The Finding 3 table lost its "Evidence status → Confirmed/Gap" column and is now a clean two-column instrument spec.
2. **Reframed the Kano limitation as a decision, not a defect.** Stated once, in Approach: because 12 of 13 concepts classified as Attractive, the self-stated **importance score** — not the Kano label — was treated as the primary ranking signal. No longer re-litigated across three sections.
3. **Put a number on impact.** Impact now leads with *concentrating 2023 mobile engineering capacity on the 5 funded investments* instead of spreading it across a 13-item wishlist. (No NPS or invented headcount used.)
4. **Graded the decision column.** Finding 4's binary "Invest / Deprioritize" became **Roadmap priority: High / Medium / Defer**, matching the source's actual grading (Direct Message + Notifications What/How + Team Fees = High; Notifications When = Medium; the rest = Defer; Chat Polling = Defer/omit). Funded five sit above the 5.09 cut line.
5. **Reconciled the site frontmatter** (`site/src/content/case-studies/new-playbook.md`) so what renders matches the draft: timeline **8 → 12 weeks**, sample **"executive" → "internal"** stakeholders, sharpened `heroOutcome`, and `approach` / `dataAnalysis` / `impact` lines updated to the honest importance-score framing (dropped the unsupported "feasibility and strategic fit" scoring claim).
6. **Led with the thesis.** Surfaced the pull quote to the top as an epigraph: *"The mobile roadmap did not need more ideas. It needed shared decision criteria."*

### Timeline

Confirmed by owner as **12 weeks** (frontmatter, at-a-glance, and site file all updated).

---

## Final prioritization (as it now reads)

| Concept | Theme | Kano class | Importance (0–7) | Roadmap priority |
|---|---|---|---|---|
| Direct Message | Chat | Attractive | 5.68 | High |
| Notifications – What | Notifications | Attractive | 5.42 | High |
| Notifications – How | Notifications | Attractive | 5.36 | High |
| Paying Team Fees | Payments | Attractive | 5.21 | High |
| Notifications – When | Notifications | Attractive | 5.09 | Medium |
| In-App Content | Content | Attractive | 4.81 | Defer |
| Buying Team Gear | Payments | Attractive | 4.77 | Defer |
| Sending & Requesting Money | Payments | Attractive | 4.66 | Defer |
| Purchasing Equipment | Payments | Attractive | 4.62 | Defer |
| Register & Pay for Program | Onboarding | Attractive | 4.55 | Defer |
| Travel-Related Fees | Payments | Attractive | 4.54 | Defer |
| Group Message | Chat | Attractive | 3.77 | Defer |
| Chat Polling | Chat | Indifferent | 3.38 | Defer (omit) |

---

## Open items before publishing

- **Feasibility/viability matrix** — a formal tech × business × human-values assessment was scoped as the next step, but per-concept feasibility scores are not in the exported material. If located, fold them into the Finding 4 table.
- **Business outcome number** — no post-launch adoption/engagement or headcount/budget figure is currently evidenced. Add one if available; none was invented.
- **Status** — draft still carries `status: draft`; flip to `ready`/`published` per the publishing checklist when assets and QA are done.

---

## Git status

All three files are updated locally and **uncommitted** (awaiting go-ahead to commit + push to `claude/new-playbook-content-details-04o9hk`).
