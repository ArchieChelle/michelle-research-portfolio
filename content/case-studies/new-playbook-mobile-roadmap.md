---
title: "Aligning Stakeholders and Prioritizing Mobile Roadmap Concepts"
slug: new-playbook-mobile-roadmap
status: draft
methods: Generative Research, Stakeholder Interviews, Vision Workshop, Kano Survey, Roadmap Prioritization
industry: Sports Technology
client: NBCUniversal - SportsEngine
timeline: 12 weeks
hero_image: ../../assets/case-study-heroes/new-playbook-mobile-roadmap.jpg
last_updated: 2026-07-09
---

# Aligning Stakeholders and Prioritizing Mobile Roadmap Concepts

> *"The mobile roadmap did not need more ideas. It needed shared decision criteria."*

> **Outcome:** Reduced 13 competing SportsEngine Mobile concepts to 5 funded roadmap investments, concentrating 2023 engineering capacity on the concepts that combined the strongest satisfaction signal with the clearest stakeholder priority.

---

## At a glance

| | |
|---|---|
| **Role** | Lead UX Researcher |
| **Methods** | 18 internal stakeholder interviews; cross-functional vision workshop; Kano survey; prioritization matrix |
| **Sample** | 18 internal stakeholder interviews (internal stakeholder pool across SportsEngine); Kano survey n=101 (analyzed wave — see Sample note), recruited via Intellizoom panel, in-app mobile intercept, internal employee network, and club/org network |
| **Study design** | 12-week mixed-methods roadmap prioritization study connecting executive themes, workshop concepts, and user satisfaction signals |
| **Team** | Product; Engineering; Analytics; UX; Senior Leadership; 5 cross-functional workshop teams |
| **Outcome** | 13 concepts narrowed to 5 funded investments; 2023 engineering capacity concentrated on Direct Message, notification controls, and team-fee payments, with 8 concepts deferred |

> **Sample note:** The Kano survey was fielded in more than one wave to reach the target sample size for statistical reliability. The figures in this case study derive from the archived wave (**n=101**); the additional fielding (combined ~201) is no longer available and is not included in the analysis. No responses were merged or imputed. Analysis, data, and codebook: `kano-mobile-research` repo (`docs/data_dictionary.md`).

---

## Context

SportsEngine Mobile had a broad set of possible product directions and a leadership team that needed confidence before committing roadmap resources. The team was not short on ideas. It needed a shared way to decide which concepts deserved investment.

The work began as a translation problem: executive vision, team constraints, and user value all needed to move into the same decision frame before the roadmap could sharpen.

## The challenge

Thirteen concepts were competing for attention, and each had a different kind of internal momentum. Some reflected executive priorities. Some came from product and engineering opportunity areas. Others had user-facing promise but unclear feasibility.

The research question was direct: which mobile concepts should SportsEngine prioritize, and what evidence should leadership trust when deciding what to fund?

## Approach

I led a mixed-methods initiative that moved from strategic alignment to concept generation to user validation. Each method answered a different decision need.

- **Internal stakeholder interviews** - I interviewed 18 stakeholders from across SportsEngine to surface the strategic intent behind each candidate direction. This created the source material for shared roadmap criteria rather than letting individual preferences compete informally.
- **Thematic synthesis** - Interview themes clustered into six areas: team admin/rostering and engaging households at signup; communication (chat and notifications); who mobile is designed for (team, household, or individual); engagement/social; collecting payment; and account/profile management. These themes fed directly into the workshop's five concept tracks.
- **Cross-functional vision workshop** - Held over two days in the Minnesota office (November 15–16, 2022), the workshop split attendees into five teams — Communication, Payment, Onboarding, Scheduling, and Sharing/Video-Social — each converting the interview themes into concrete feature concepts. The Sharing/Video-Social track was deprioritized before concepts moved into the survey, since the team judged it out of scope for this roadmap cycle.
- **Kano survey** - I ran a Kano survey (analyzed wave n=101; recruited via Intellizoom, in-app mobile intercept, internal network, and club/org network; screened on youth-sports participation and current app usage) across the 13 remaining concepts to classify each concept's satisfaction impact and capture its importance rating.
- **Prioritization matrix** - The Kano classification separated the field into a clear structure — one Performance concept, one Must-be, two Attractive delighters, and a large Indifferent cluster — so I combined each concept's Kano class with its importance score and weighed both against the existing 2023 roadmap sequence (Chat → Notifications → In-app/Sponsored Content → Payments) to separate the 5 funded investments from the 8 deferrals.

> **Study design specs**
>
> **Research question:** Which SportsEngine Mobile roadmap concepts should leadership prioritize, and how should stakeholder vision, user satisfaction, and roadmap feasibility shape that decision?
>
> **Population:** SportsEngine Mobile users (youth/recreational sports families) and internal cross-functional stakeholders across Product, Engineering, Analytics, UX, and Senior Leadership.
>
> **Sample:** 18 internal stakeholder interviews; Kano survey n=101 (archived wave; see Sample note above), recruited via Intellizoom panel, in-app mobile intercept, internal employee network, and club/org network. The screener confirmed the respondent's child participated in youth sports and captured which apps they currently use to manage their sports life.
>
> **Method:** Mixed-methods roadmap prioritization using stakeholder interviews, thematic synthesis, workshop facilitation, and Kano classification.
>
> **Metric:** Kano class per concept (Must-be, One-dimensional/Performance, Attractive, or Indifferent), assigned via a discrete, count-based Kano evaluation table (6-category, with Reverse and Questionable flags retained), plus a self-stated importance score (7-point scale, coded 0–6).
>
> **Instrument:** Example item (In-App Content) — *Functional:* "If your sport management app provided tools, content, and training to help you get the most of the season, how would you feel?" (I like it / I expect it / I'm neutral / I can live with it / I dislike it). *Dysfunctional:* the same question posed for the feature's absence. *Importance:* "How important is having [feature] on your sports management app?" (7-point scale, not at all → extremely important).
>
> **Analysis:** Classification of record is a discrete, count-based evaluation table (per-respondent Kano labels, aggregated to a dominant category per concept). A continuous, mean-based pass was also run as a cross-check; note that continuous scoring tends to shift more concepts toward Attractive, so the two methods produce different distributions from the same responses. Segment-level cuts were out of scope for the primary readout.
>
> **Limitation:** Most concepts (9 of 13) classified as Indifferent, and importance spanned a narrow band (3.19–4.45 on the 0–6 scale). The standouts were Direct Message (Performance), Notifications–What (Must-be), and two Attractive delighters (In-App Content, Register & Pay). Because the separations were modest, importance refined rank order rather than creating large gaps, so the funding decision leaned on triangulation with stakeholder priority and the existing roadmap sequence rather than on any single score.

## Findings

### Finding 1: The roadmap needed shared decision criteria before it needed more ideas

The stakeholder interviews clarified that the mobile roadmap challenge was not ideation volume. It was alignment. Executive vision needed validation against user priorities before the team could commit resources with confidence. One recurring stakeholder sentiment: "SE Mobile doesn't have a unique value proposition."

The interviews surfaced themes that became the bridge between leadership intent and workshop output. That bridge is the heart of the case: it shows how qualitative synthesis moved into product concepts instead of remaining as a theme list.

| Stakeholder theme | Evidence signal | Workshop concept | Decision question |
|---|---|---|---|
| Payment friction | "The most important thing that we don't allow people to do in the app is to allow parents to pay invoices." | Team 2: Payment — register/pay for programs, purchase equipment, pay team fees, cover travel costs | Does this solve a priority user need? |
| Fragmented communication | Stakeholders flagged chat attachment bugs and inconsistent notification controls (silencing, push delivery). | Team 1: Communication — direct/group messaging, chat polling, notification controls | Does this advance the mobile strategy? |
| Admin and scheduling overhead | "Managing multiple schedules" and rostering came up repeatedly as a household pain point. | Team 4: Scheduling — carpooling and task reminders with iconography/color visualization | Can the team execute it within roadmap constraints? |
| Onboarding friction | "A lot of features of HQ don't work well in mobile," plus gaps in eligibility and registration completion tracking. | Team 3: Onboarding — integrated sign-up/registration, QR-code entry, quick account creation | Does it justify investment now? |
| Undifferentiated engagement value | Concern that the workshop themes "reflect current scope" and "may not be innovative enough to make us a differentiator." | Team 5: Sharing/Video-Social — ultimately deprioritized before the concepts reached the survey | Does it differentiate the mobile experience? |

### Finding 2: The workshop turned broad themes into concepts the team could test

The vision workshop made the strategy operational. Product, engineering, analytics, UX, and leadership moved from broad themes into feature concepts that could be evaluated in a survey and discussed against feasibility.

That transformation matters because it prevents a common roadmap failure: validating ideas that were never clearly connected to the original strategic problem. The workshop created the traceability from theme to concept to prioritization decision — and it was also where Sharing/Video-Social was cut before it consumed further research budget, keeping the Kano survey focused on the 13 concepts leadership actually needed to decide on.

### Finding 3: Kano clarified satisfaction impact and separated the field

The Kano survey gave the team a structured way to understand how each concept could affect user satisfaction. The method fit the decision because the question was not "which feature is most popular?" It was "which concepts create delight, meet expectations, or fail to move satisfaction enough to justify investment?"

Using a discrete, count-based evaluation table, the classification produced a clear structure rather than a flat field: one **Performance** concept (Direct Message), one **Must-be** (Notifications–What), two **Attractive** delighters (In-App Content and Register & Pay), and a large **Indifferent** cluster covering the remaining nine concepts.

| Kano category | Count | Share | Concepts |
|---|---|---|---|
| Must-be (M) | 1 | 7.7% | Notifications–What |
| One-dimensional / Performance (O) | 1 | 7.7% | Direct Message |
| Attractive (A) | 2 | 15.4% | In-App Content; Register & Pay for Program |
| Indifferent (I) | 9 | 69.2% | Group Message; Chat Polling; Notifications–How/When; all 5 Payment concepts |

| Survey element | Instrument |
|---|---|
| Functional question | "If your sport management app provided [feature], how would you feel?" (5-point: like it → dislike it, coded 0–4) |
| Dysfunctional question | "If your sport management app did NOT provide [feature], how would you feel?" (same 5-point scale) |
| Importance question | "How important is having [feature] on your sports management app?" (7-point scale, coded 0–6) |
| Classification | Discrete count-based evaluation table; 6-category (M, O, A, I, plus Reverse and Questionable flags) |
| Cross-check | Continuous mean-based pass (shifts more concepts toward Attractive; not the classification of record) |

### Finding 4: The final decision logic narrowed 13 concepts to 5 investments

The strongest decision was the narrowing itself: 13 possible concepts became 5 funded investments. Because most concepts sat in the Indifferent cluster and importance scores spanned a narrow band (3.19–4.45), no single number cleanly separated the field. The funding decision combined three inputs — Kano class, importance, and the existing 2023 roadmap sequence — with stakeholder priority breaking ties.

| Concept | Theme | Kano class | Importance (0–6) | Roadmap priority |
|---|---|---|---|---|
| Direct Message | Chat | Performance (O) | 4.45 | High |
| Group Message | Chat | Indifferent | 4.38 | Defer |
| Notifications – What | Notifications | Must-be (M) | 4.16 | High |
| Notifications – How | Notifications | Indifferent | 4.15 | High |
| Notifications – When | Notifications | Indifferent | 3.95 | Medium |
| Paying Team Fees | Payments | Indifferent | 3.82 | High |
| In-App Content | Content | Attractive (A) | 3.74 | Defer |
| Buying Team Gear | Payments | Indifferent | 3.59 | Defer |
| Register & Pay for Program | Onboarding | Attractive (A) | 3.57 | Defer |
| Travel-Related Fees | Payments | Indifferent | 3.41 | Defer |
| Sending & Requesting Money | Payments | Indifferent | 3.38 | Defer |
| Purchasing Equipment | Payments | Indifferent | 3.36 | Defer |
| Chat Polling | Chat | Indifferent | 3.19 | Defer (omit) |

The ranking is deliberately not a straight importance sort, and two cases show why:

- **Group Message** drew high stated importance (4.38, second overall) but classified **Indifferent**, so it was deferred behind Direct Message — the only Chat concept that classified **Performance**, where added investment maps directly to added satisfaction.
- **Paying Team Fees** classified Indifferent with mid-range importance (3.82), yet was funded because it sat on the Payments track of the existing roadmap and answered the single loudest stakeholder pain — parents being unable to pay invoices in-app.

The two true **Attractive** delighters, In-App Content and Register & Pay, were deferred this cycle against the roadmap sequence — a documented trade-off worth revisiting, since Attractive concepts are where differentiation tends to come from. A formal feasibility/viability assessment (technology feasibility × business viability × human-values desirability) was scoped as the next step; this table reflects the user-desirability evidence — Kano class and importance — that drove the initial cut.

## Impact

- **Concentrated engineering capacity:** Narrowed a 13-concept wishlist to 5 funded investments — Direct Message, Notifications (What/How/When), and Paying Team Fees — focusing 2023 mobile engineering capacity on the highest-signal work instead of spreading it thin.
- **Roadmap re-sequencing:** The evidence elevated notification controls and team-fee payments alongside the roadmap's original Chat-first plan, rather than following the initial Chat → Notifications → Content → Payments order by default.
- **Roadmap discipline:** Deferred 8 lower-priority concepts (In-App Content, Buying Team Gear, Sending & Requesting Money, Purchasing Equipment, Register & Pay for Program, Travel-Related Fees, Group Message, and Chat Polling), giving Product and Engineering a focused execution list for 2023.
- **Stakeholder confidence:** Replaced informally competing priorities with a documented, evidence-backed ranking shared across Product, Engineering, Analytics, UX, and Senior Leadership.
- **Next-step ownership:** Defined clear follow-on work — a formal feasibility/viability matrix, roadmap adjustments, role-based segmentation for persona work, and deeper research on the top 3 highest-risk initiatives.

## Reflection

The most important methodological choice was sequencing. I did not start with a survey because the team had not yet aligned on what the concepts meant. Stakeholder interviews and workshop synthesis created the shared language that made the Kano survey useful.

The Kano result was also a reminder that method choice shapes the story. Under a discrete, count-based classification, nine of thirteen concepts read as Indifferent, with only a handful of clear standouts; a continuous, mean-based pass on the same responses pushes more concepts toward Attractive. Neither is wrong, but they lead to different-looking roadmaps, so I would pre-register the classification method before fielding and report both lenses side by side rather than letting the choice sit implicit.

Because the standouts were modest and importance spanned a narrow range (3.19–4.45), the decision could not rest on scores alone. Triangulating the Kano class with stakeholder priority and the existing roadmap sequence is what made the cut defensible — and it is why a high-importance-but-Indifferent concept like Group Message was deferred while an Indifferent-but-strategically-urgent concept like team-fee payments was funded.

I would also make the theme-to-concept traceability more explicit, and I would fund a follow-on role-based segmentation. That segmentation was added after the primary readout, once it became clear that a whole-sample ranking hides how value differs by role (coach, parent, player) — and that a personalized, persona-level roadmap would serve the product better than a single aggregate list.

Finally, the feasibility/viability matrix scoped as a next step would strengthen the case if folded into the prioritization table. As it stands, the funding decision rests on user desirability and existing roadmap sequencing — a defensible basis, and a stronger one still with feasibility and strategic fit scored explicitly alongside the Kano data.

---

## Footer

**Project completed:** 2023
**Want to discuss this work?** [Let's connect ->](#contact)

---

## Implementation notes (strip before publishing)

- Hero image: place `new-playbook-mobile-roadmap.jpg` from `/assets/case-study-heroes/` in the hero slot.
- Section dividers: use a thin Wisteria `#BEAEDB` 1px rule between major sections.
- Outcome block quote + top pull quote ("The mobile roadmap did not need more ideas…"): Newsreader italic, indented, Black Coffee `#3A2D34`.
- Theme-to-concept table: render as a readable mapping table, not as a screenshot; use Jacarta `#3F2A52` headers and Parchment `#EEE9DF` background.
- Kano method table: render as a rigor callout with Ember `#A35139` labels for the Functional, Dysfunctional, and Importance rows.
- Prioritization matrix: build as a styled table component with the Roadmap priority column highlighted in Ember `#A35139` (High); call out that the ranking is not a straight importance sort (see the two annotated cases below the table).
- Study design specs: callout box with Parchment `#EEE9DF` background, Jacarta `#3F2A52` border, Black Coffee `#3A2D34` body text, and IBM Plex Sans Mono for spec values.
- Sample note: render as a small footnote/caption styled callout near the At-a-glance block.

### Reconciliation notes (source-of-truth alignment — for review)

This draft was reconciled to the `kano-mobile-research` analysis repo (source of truth); see that repo's `docs/data_dictionary.md`. Judgment calls to confirm:

- **Sample:** changed n=201 → n=101 (archived wave) with a provenance footnote. Wording of the footnote ("additional fielding for statistical reliability") is a placeholder — adjust to match how you want to describe the second wave.
- **Importance scale:** 0–7 → 0–6 (7-point coded 0–6), and all importance values updated to the repo figures.
- **Kano distribution:** the previous draft's "12 of 13 Attractive" did not reproduce from the data; the real dominant-category split is 9 Indifferent / 2 Attractive / 1 Must-be / 1 Performance. Finding 3 and Finding 4 were reframed accordingly.
- **Funded five:** kept the original funded set (Direct Message, Notifications What/How/When, Paying Team Fees) as the business decision, and added explicit rationale where it diverges from a pure importance sort (Group Message deferred despite rank #2; Team Fees funded on strategic grounds). Confirm this matches what was actually funded.
- **Method note:** added the discrete vs continuous explanation as the documented reason the distribution differs from an all-Attractive reading.
- **Segmentation:** reframed as a post-readout addition supporting persona/roadmap work (per your note), rather than simply "out of scope."
- **Open item before publishing:** if the original feasibility/viability matrix or the second survey wave is located, fold per-concept feasibility/strategic-fit scores into Finding 4 and revisit the Sample note.
