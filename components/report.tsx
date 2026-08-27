import type { CSSProperties, ReactNode } from "react";

/* ------------------------------------------------------------------ */
/* Glitch tape label — the misregistered neon sticker from the report */
/* ------------------------------------------------------------------ */
export function Tape({
  lines,
  color = "bg-acid text-ink",
  ghostColor,
  className = "",
}: {
  lines: [string, string];
  color?: string;
  ghostColor?: string;
  className?: string;
}) {
  return (
    <span className={`tape text-base sm:text-lg ${color} ${className}`}>
      {lines[0]}
      <span
        aria-hidden
        className={`tape-ghost ${ghostColor ?? color}`}
      >
        ▪▪ {lines[1]}
      </span>
    </span>
  );
}

/* ------------------------------------------------- */
/* Terminal caption: ■ NAME / DETAIL / ID: 000000    */
/* ------------------------------------------------- */
export function Meta({
  name,
  detail,
  id,
  className = "",
}: {
  name: string;
  detail: string;
  id: string;
  className?: string;
}) {
  return (
    <div className={`term text-sm leading-tight sm:text-base ${className}`}>
      ■ {name}
      <br />
      {detail}
      <br />
      ID: {id}
    </div>
  );
}

/* ----------------------------------------------------------------- */
/* Art panel — duotone/scan-texture placeholder standing in for      */
/* screenshots & photographs until real scans are dropped in          */
/* ----------------------------------------------------------------- */
const ART_STYLES: Record<string, string> = {
  "signal-dots": "bg-signal text-ink/60 art-dots",
  "acid-scan": "bg-[#0f2b0f] text-acid art-dots art-scan",
  "orchid-streak": "bg-orchid art-blur-streak",
  "ink-scan": "bg-[#181818] art-scan",
  "sun-dots": "bg-sun text-ink/50 art-dots",
  "dusk-streak": "bg-[#2a2440] art-blur-streak",
};

export function ArtPanel({
  variant,
  meta,
  metaTone = "text-bone",
  className = "",
  children,
  style,
}: {
  variant: keyof typeof ART_STYLES;
  meta?: { name: string; detail: string; id: string };
  metaTone?: string;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <figure
      className={`relative overflow-hidden ${ART_STYLES[variant]} ${className}`}
      style={style}
    >
      {children}
      {meta && (
        <figcaption className="absolute left-3 top-3">
          <Meta {...meta} className={metaTone} />
        </figcaption>
      )}
    </figure>
  );
}

/* --------------------------------------------------------- */
/* Section divider — binary rain columns + [ TITLE ] center  */
/* --------------------------------------------------------- */
function BinaryColumn({ chars, className }: { chars: number; className?: string }) {
  const bits = Array.from({ length: chars }, (_, i) =>
    ((i * 7 + chars) % 2 === 0 ? "10101010101" : "01010101010"),
  ).join("\n");
  return (
    <pre
      aria-hidden
      className={`term select-none text-[11px] leading-[1.25] sm:text-sm ${className}`}
    >
      {bits}
    </pre>
  );
}

export function Divider({
  title,
  chapter,
  page,
  tone = "text-acid",
}: {
  title: string;
  chapter: string;
  page: string;
  tone?: string;
}) {
  return (
    <section
      data-chapter={chapter}
      data-page={page}
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-ink"
    >
      <div className={`absolute inset-0 flex justify-between px-[4%] opacity-70 ${tone}`}>
        {Array.from({ length: 8 }, (_, i) => (
          <BinaryColumn
            key={i}
            chars={26 + ((i * 5) % 9)}
            className={i % 3 === 1 ? "self-end" : i % 3 === 2 ? "self-center" : ""}
          />
        ))}
      </div>
      <h2 className="term relative z-10 bg-ink px-6 py-2 text-4xl text-bone sm:text-6xl">
        [ {title} ]
      </h2>
    </section>
  );
}

/* ------------------------------------------------------ */
/* Full-bleed pull-quote page on a solid colour field     */
/* ------------------------------------------------------ */
export function PullQuote({
  quote,
  attribution,
  chapter,
  page,
  className = "bg-signal text-ink",
}: {
  quote: string;
  attribution: string;
  chapter: string;
  page: string;
  className?: string;
}) {
  return (
    <section
      data-chapter={chapter}
      data-page={page}
      className={`flex min-h-[85vh] flex-col items-center justify-center gap-8 px-6 py-24 text-center ${className}`}
    >
      <p className="display max-w-5xl text-[13vw] sm:text-[7.5vw]">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="term text-xl sm:text-2xl">{attribution}</p>
    </section>
  );
}

/* -------------------- */
/* Marquee text strip   */
/* -------------------- */
export function Marquee({
  text,
  className = "bg-acid text-ink",
}: {
  text: string;
  className?: string;
}) {
  const chunk = ` ${text} ▪▪▪ `;
  return (
    <div className={`overflow-hidden border-y border-ink/60 ${className}`}>
      <div className="marquee-track term py-1.5 text-xl sm:text-2xl">
        <span className="whitespace-pre">{chunk.repeat(6)}</span>
        <span aria-hidden className="whitespace-pre">
          {chunk.repeat(6)}
        </span>
      </div>
    </div>
  );
}

/* ------------------------------- */
/* EXPLORE-style neon action link  */
/* ------------------------------- */
export function Explore({
  href,
  label = "EXPLORE PROJECT",
  external = true,
}: {
  href: string;
  label?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="term inline-block bg-acid px-3 py-1 text-lg text-ink transition-transform hover:-translate-y-0.5 hover:bg-signal hover:text-bone"
    >
      {label}
    </a>
  );
}
