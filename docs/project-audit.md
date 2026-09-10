# Portfolio project audit — September 9, 2026

## Scope and limits

Local review of README files, package manifests, source trees, selected implementation files, and Git history. Screened 15 named project folders plus the projects container; examined seven candidates more closely. This was not a runtime, security, or deployment audit. Tests were located but not run. Existing live links in READMEs were not verified. Local code proves implementation exists, not production usage or sole authorship. Team-project descriptions still need TJ’s exact role.

## Recommended first three

| Project | Reason to feature | What to show | Story to develop |
| --- | --- | --- | --- |
| Gist GEO | Strongest professional platform case study | Brand report, citation trend, query/discovery workflow | Turning AI-search observations into useful reporting; focus on the features TJ owned |
| Graffiti Turf War (`paint`) | Most memorable creative project; closely matches this portfolio’s visual identity | Short clip of movement, tagging a wall, and multiplayer interaction | Shared paint rules, server validation, persistent walls, and mobile controls |
| PitStop | Focused product with clear everyday utility | Car health dashboard, service logging, reminder state changing | One maintenance engine reused by UI and scheduled reminders |

Gist GEO: source includes reporting components and measurement infrastructure. The root README calls it WIP; newer campaign/lift docs explicitly describe inert or provisional pieces. Do not present every package as a launched feature or claim measured customer gains. A small sample of McGovern-authored history shows pricing UI, responsive layout, and plan-selection work; this is not an exhaustive contribution analysis.

Graffiti Turf War: actual server gameplay, SQLite persistence, shared paint model, client touch controls, and test files are present. Existing screenshots include `menu.png`, `portrait-v2.png`, and `landscape-v2.png` in the project root. These assets have not been visually evaluated in this audit. Capture fresh gameplay before making a public demo claim.

PitStop: actual reminder stage calculation, health modules, cron route, notifications page, manifest, and five engine test files are present. README documents a live deployment and a 60-test suite; neither live health nor current pass count was checked.

## Other good options

| Project | Best use | Evidence / limitation |
| --- | --- | --- |
| Clothing Try-On | Creative coding / fashion case study | Workbench, layered canvas, cutout editor, catalog import, AI route, and Dexie workspace persistence exist. README is boilerplate and Git history does not describe current scope well; needs a fresh demo. |
| Restore My Independence (`clothing-brand-geo`) | Brand + commerce case study | Product routes and a real Stripe Checkout session handler exist. Inventory logic explicitly allows temporary overshoot from concurrent sessions; do not call it a strict reservation system. Payment configuration and sales are unverified. |
| Gist Widget Builder (`gist-console`) | Second professional case study or part of a Gist collection | Configuration/installation routes, widget entry points, and authenticated owner-checked Convex configuration queries exist. Best shown as configure → preview → embed. Confirm TJ’s role and the actual deployed embed path. |
| Fit Studio | Smaller design experiment | Fashion discovery routes, editor, and curated static feed data exist. Frame as an interface prototype unless backend/social behavior is separately demonstrated. |
| DEADPOINT | Smaller visual/brand project | Brand system, product pages, MDX content; README explicitly says email provider integration and checkout remain unfinished. |

## Lower priority for the opening selection

- SignalSynth: interesting Python product-intelligence application, but repository README points to another owner; establish TJ’s contribution before featuring it as his build.
- Talking Avatar with AI: README explicitly references an external tutorial/original project. Requires a clear account of original additions.
- Website Replicator / Ask Anything: plausible deeper Gist material, but avoid filling the entire portfolio with overlapping widget projects.
- Stonks AI: backend and order-engine work appears in history, but insufficient validation here to rank it above the shortlist.
- GolfGod: the inspected golf directory contains an ESPN scraper; this did not establish the complete golf dashboard described in the current portfolio scaffold. Locate and demonstrate that app before giving it a headline slot.

## Assets supplied this turn

- `05_07_51 PM.png`: colorful Contact Me postal-label graphic — contact navigation.
- `05_04_14 PM.png`: illustrated head — about navigation.
- `04_56_55 PM.png`: hand-drawn laptop — work navigation.

All three were visually inspected. They have not yet replaced the homepage artwork. The postal label has much more color/detail than the other two, so it should be tested at actual navigation size for readability.

## Next evidence to collect

1. Gist GEO: TJ’s exact contribution, a safe-to-share report screenshot, and one concrete before/after improvement.
2. Graffiti Turf War: 15–30 seconds of actual play, ideally with two players.
3. PitStop: dashboard, service entry, and resulting health/reminder update.
4. Each featured project: accurate role, dates, collaborators, usable demo/repository link, and one specific engineering decision. Use verified results only.
