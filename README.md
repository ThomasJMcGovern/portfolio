# TJ McGovern’s portfolio

A Next.js App Router site running with Bun. The homepage combines a full-body portrait, handwritten signature, paper texture, and sketch navigation.

## Local development

```bash
bun install
bun run dev
```

Use the local URL printed by Next.js. An existing development instance may use port 3311.

## Pages

- `/`: portrait collage with links to Work, About, and Contact.
- `/work`: project index, sourced from `lib/projects.ts`.
- `/work/[slug]`: individual project scaffolds; full case studies still need content.
- `/about`: initial bio scaffold.
- `/contact`: email and Instagram links.

Original images are preserved in `public/assets/originals/` and rendered with Next.js Image. Sketch navigation lives in `components/sketch.tsx`; shared interior layout lives in `components/notebook-page.tsx`.

See [the drawing brief](docs/sketch-brief.md) for the custom artwork to make next.

## Checks

```bash
bun run lint
bun run build
```
