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
- `/work/[slug]`: six project stories: Gist GEO, Gist Widget Builder, Graffiti Turf War, ValleyPAA, Brewlune, and DEADPOINT.
- `/about`: professional background and personal projects.
- `/contact`: email and Instagram links.

Original images are preserved in `public/assets/originals/` and rendered with Next.js Image. Homepage navigation uses the supplied laptop, illustrated portrait, and postal sticker PNGs. The initial SVG drawing component remains in `components/sketch.tsx` for the contact page; shared interior layout lives in `components/notebook-page.tsx`.

See [the drawing brief](docs/sketch-brief.md) for the custom artwork to make next.

## Checks

```bash
bun run lint
bun run build
```

Project copy combines TJ’s supplied account of his professional contributions with the local audit. Brewlune results are dated experiment observations. Screenshots and video can be added when available. External links open in a new tab; no unverified Gist product URL is guessed. The former `/work/widget-console` URL redirects to `/work/gist-widget-builder`.

Brewlune includes a user-supplied September 10, 2026 screen recording in `public/videos/brewlune-chatgpt-demo.mp4`, encoded as H.264/AAC MP4 with fast-start metadata. The player has native controls, inline mobile playback, and a download link.
