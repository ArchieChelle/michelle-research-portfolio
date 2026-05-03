# Color Palette — Plum & Ember

Quick reference. Copy tokens directly when working in Astro.

## Tokens

| Token | Hex | Role |
|---|---|---|
| `--mr-bg` | `#EEE9DF` | Page background · Canvas |
| `--mr-surface` | `#FFFFFF` | Cards · Modals · Surface |
| `--mr-text` | `#3A2D34` | Body text · Captions |
| `--mr-heading` | `#3F2A52` | Headings · Navigation |
| `--mr-cta` | `#A35139` | Buttons · Links · Marks |
| `--mr-soft` | `#BEAEDB` | Cards · Tags · Illustrations |
| `--mr-highlight` | `#FFB162` | Selective callouts only |
| `--mr-rule` | `rgba(58,45,52,.18)` | Dividers · Borders · Hairlines |

## Usage rules

- **Headings & nav:** `--mr-heading`
- **Body copy:** `--mr-text`
- **Primary CTA buttons, links, accent marks:** `--mr-cta`
- **Hero image background panel:** `--mr-soft`
- **Page & canvas background:** `--mr-bg`
- **Cards and modals:** `--mr-surface`
- **Dividers, borders, rules:** `--mr-rule`

## Usage ratio guideline

Color should appear in roughly these proportions across any layout:

| Color | Proportion | Role |
|---|---|---|
| Background | 55% | The ground — dominant |
| Heading | 25% | Structure and voice |
| CTA | 10% | Direction and action |
| Soft Accent | 6% | Decoration |
| Highlight | 4% | Emphasis — use sparingly |

## Avoid

- Don't use `--mr-soft` for text — it's a panel and decoration color only
- Don't use `--mr-highlight` for large fills — it's a selective accent, not a base
- Don't introduce colors outside this palette
- Soft Accent and Highlight are decorative, not load-bearing — they earn their use
