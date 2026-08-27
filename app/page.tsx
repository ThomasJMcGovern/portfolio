import { Reveal } from "@/components/chrome";
import {
  ArtPanel,
  Divider,
  Explore,
  Marquee,
  Meta,
  PullQuote,
  Tape,
} from "@/components/report";

/* ================================================================== */
/* Content                                                             */
/* ================================================================== */

type Project = {
  no: string;
  title: string;
  tagline: string;
  cols: [string, string, string];
  href: string;
  art: Parameters<typeof ArtPanel>[0]["variant"];
  art2: Parameters<typeof ArtPanel>[0]["variant"];
  meta: { name: string; detail: string; id: string };
  page: string;
};

const PROJECTS: Project[] = [
  {
    no: "1.1",
    title: "PitStop",
    tagline: "Keep the machine alive.",
    cols: [
      "A progressive web app for people who'd rather drive their cars than spreadsheet them. PitStop tracks maintenance schedules, service history, and upcoming work for every vehicle in the garage — installable, offline-friendly, and fast on a phone in a parking lot.",
      "Built with React and Firebase: authenticated per-user garages, realtime sync between devices, and push reminders when service windows open. The interface is deliberately utilitarian — big targets, high contrast, readable next to an open hood.",
      "The point wasn't novelty. It was shipping a complete, reliable tool: auth, data modeling, offline behavior, and the unglamorous edge cases that make software feel dependable.",
    ],
    href: "https://github.com/ThomasJMcGovern",
    art: "signal-dots",
    art2: "ink-scan",
    meta: { name: "PitStop", detail: "React / Firebase PWA", id: "2025-11" },
    page: "03",
  },
  {
    no: "1.2",
    title: "GolfGod",
    tagline: "Every shot is data.",
    cols: [
      "A golf statistics platform that treats a round of golf the way a trading desk treats a market: strokes gained, fairway percentages, putting averages — computed live and split by the conditions that actually change outcomes.",
      "Convex powers the backend with reactive queries, so dashboards update the moment data lands. The genius splits are the fun part: performance deltas in wind over 10mph, AM versus PM wave scoring — small datasets interrogated hard.",
      "Typed end-to-end in TypeScript, metric functions covered by unit tests, seeded from controlled CSV pipelines. Toy-sized data, production-shaped architecture.",
    ],
    href: "https://github.com/ThomasJMcGovern",
    art: "acid-scan",
    art2: "dusk-streak",
    meta: { name: "GolfGod", detail: "Convex / React / TypeScript", id: "2026-02" },
    page: "05",
  },
  {
    no: "1.3",
    title: "Widget Console",
    tagline: "Drop it into anything.",
    cols: [
      "A two-part system: an admin console where a customer configures a chat widget — colors, behavior, identity — and an embeddable widget library that renders that configuration on any host page with one script tag.",
      "The hard problems are boundary problems: style isolation inside arbitrary websites, a configuration schema that can grow without breaking old embeds, and a build pipeline that ships the widget as a tiny self-contained bundle.",
      "Console built with React and shadcn/ui; widget compiled standalone with Bun. Two codebases, one contract, versioned carefully.",
    ],
    href: "https://github.com/ThomasJMcGovern",
    art: "orchid-streak",
    art2: "ink-scan",
    meta: { name: "Widget Console", detail: "React / shadcn / Bun", id: "2026-04" },
    page: "06",
  },
  {
    no: "1.4",
    title: "Restore My Independence",
    tagline: "Commerce, stripped bare.",
    cols: [
      "A pre-order storefront for an independent clothing brand — one tee, one drop, no bloat. Built on the thesis that for a first product you don't need a commerce platform, you need a checkout.",
      "Stripe is the entire ledger: checkout sessions, payment state, and order records live where the money lives, so there is no database to drift out of sync with reality. The site itself stays static, fast, and nearly free to run.",
      "Designed to be handed off — a founder can see orders in the Stripe dashboard with zero custom admin surface to maintain.",
    ],
    href: "https://github.com/ThomasJMcGovern",
    art: "sun-dots",
    art2: "signal-dots",
    meta: { name: "RestoreMyIndependence", detail: "Next.js / Stripe", id: "2026-07" },
    page: "08",
  },
];

const CATALOG = [
  "TypeScript",
  "React",
  "Next.js",
  "Bun",
  "Convex",
  "Firebase",
  "Supabase",
  "Stripe",
  "Tailwind CSS",
  "shadcn/ui",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Vercel",
  "Cloudflare",
  "Git / CI",
];

const CATALOG_ART: Parameters<typeof ArtPanel>[0]["variant"][] = [
  "signal-dots",
  "acid-scan",
  "orchid-streak",
  "ink-scan",
  "sun-dots",
  "dusk-streak",
];

/* ================================================================== */
/* Local layout pieces                                                 */
/* ================================================================== */

function ChapterSpread({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <section
      id={project.title.toLowerCase().replace(/\s+/g, "-")}
      data-chapter={`${project.no} ${project.title}`}
      data-page={project.page}
      className="relative overflow-hidden bg-bone text-ink"
    >
      <div
        className={`grid min-h-screen lg:grid-cols-[7fr_5fr] ${
          flip ? "lg:[direction:rtl]" : ""
        }`}
      >
        {/* text card side */}
        <div className="relative px-5 py-16 [direction:ltr] sm:px-10 lg:py-24">
          <Reveal>
            <div className="mb-6 flex items-start gap-4">
              <h2 className="display text-[16vw] sm:text-[8.5vw]">
                {project.title}
              </h2>
            </div>
            <p className="term mb-10 max-w-sm text-lg leading-snug sm:text-xl">
              {project.tagline} ///////////////////////
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {project.cols.map((c, i) => (
              <Reveal key={i} delay={i * 120}>
                <p className="rule-t pt-3 text-[13px] leading-relaxed">{c}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300} className="mt-10">
            <Explore href={project.href} />
          </Reveal>
          <Tape
            lines={["Case study", project.title]}
            color="bg-signal text-bone"
            className="absolute -right-2 top-44 rotate-1 sm:top-56"
          />
        </div>

        {/* imagery side */}
        <div className="grid grid-rows-[3fr_2fr] [direction:ltr]">
          <ArtPanel
            variant={project.art}
            meta={project.meta}
            className="min-h-64"
          />
          <ArtPanel
            variant={project.art2}
            meta={{
              name: "GS and Co.",
              detail: "detail / interface still",
              id: project.meta.id + "-B",
            }}
            metaTone="text-bone/80"
            className="min-h-40 border-t border-ink"
          />
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/* Page                                                                */
/* ================================================================== */

export default function Home() {
  return (
    <main>
      {/* ------------------------------------------------ COVER ---- */}
      <section
        id="cover"
        data-chapter="Cover"
        data-page="00"
        className="relative flex min-h-[92vh] flex-col bg-bone px-5 pb-10 pt-14 text-ink sm:px-10"
      >
        <p className="masthead rise text-center text-3xl">Thomas J McGovern</p>

        <div className="relative mt-10 sm:mt-16">
          <h1 className="display rise text-center text-[17.5vw] leading-[0.84]">
            Portfolio
            <br />
            Report
          </h1>
          <Tape
            lines={["2026 annual", "software edition"]}
            color="bg-signal text-bone"
            className="rise absolute right-[6%] top-[38%] -rotate-1 sm:right-[12%]"
          />
        </div>

        <div className="mx-auto mt-14 grid w-full max-w-5xl grid-cols-3 gap-[8%] sm:mt-20">
          {(["ink-scan", "signal-dots", "dusk-streak"] as const).map((v, i) => (
            <div key={v} className="rise" style={{ animationDelay: `${0.25 + i * 0.15}s` }}>
              <ArtPanel
                variant={v}
                className="aspect-square"
                meta={
                  i === 1
                    ? { name: "T. McGovern", detail: "full-stack", id: "465270" }
                    : undefined
                }
                metaTone="text-bone/80"
              />
            </div>
          ))}
        </div>

        <p className="term rise mx-auto mt-auto max-w-3xl pt-12 text-center text-sm leading-snug text-ink/80 sm:text-base" style={{ animationDelay: "0.7s" }}>
          The work of Thomas J McGovern: software engineer building web apps
          that care about craft.
          <br />
          Explore projects, process, and imagery from a year of shipping. More
          at teejmcgovern.com.
        </p>
      </section>

      <Marquee text="Personality over perfection — build things that carry a pulse" />

      {/* ------------------------------------------- INTRODUCTION ---- */}
      <section
        data-chapter="Introduction"
        data-page="01"
        className="grid bg-bone text-ink lg:grid-cols-[5fr_7fr]"
      >
        <div className="grid grid-rows-[3fr_2fr]">
          <ArtPanel
            variant="signal-dots"
            className="min-h-72"
            meta={{ name: "Jake Wangner", detail: "the eye / opener", id: "24968" }}
          >
            <div className="absolute inset-[18%] rounded-full border-[6px] border-ink/50" />
            <div className="absolute inset-[38%] rounded-full bg-ink/60" />
          </ArtPanel>
          <ArtPanel variant="dusk-streak" className="min-h-44 border-t border-ink" />
        </div>

        <div className="px-5 py-16 sm:px-10 lg:py-24">
          <Reveal>
            <h2 className="display text-[13vw] sm:text-[6.5vw]">
              The work
              <br />
              defining 2026
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="term mt-8 max-w-md text-base leading-snug">
              &ldquo;Software is not subjective. Reliability, clarity,
              craft&thinsp;—&thinsp;these are not opinions.&rdquo;
            </p>
          </Reveal>
          <div className="mt-8 grid max-w-3xl gap-6 sm:grid-cols-2">
            <Reveal delay={200}>
              <p className="rule-t pt-3 text-[13px] leading-relaxed">
                I&apos;m a full-stack engineer working across the modern web
                stack — React, TypeScript, Next.js, and whatever backend the
                problem deserves. The work that stands out has one thing in
                common: a focus on personality over perfection, shipped with the
                discipline of tests, logging, and honest error states.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <p className="rule-t pt-3 text-[13px] leading-relaxed">
                This report collects a year of that work: four shipped projects,
                the tools behind them, and the photography that keeps my eye
                sharp. Audiences are exhausted by sameness — this year, the work
                that cuts through isn&apos;t the work that plays nice.
                It&apos;s the work that plays.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- WORK ---- */}
      <Divider title="Work" chapter="Section 1 — Work" page="02" />

      <ChapterSpread project={PROJECTS[0]} flip={false} />

      <PullQuote
        quote="Ship the weird thing."
        attribution="T. McGovern, engineer"
        chapter="1.1 PitStop"
        page="04"
        className="bg-signal text-ink"
      />

      <ChapterSpread project={PROJECTS[1]} flip />
      <ChapterSpread project={PROJECTS[2]} flip={false} />

      <PullQuote
        quote="Imperfection can be intentional."
        attribution="Field notes, 2026"
        chapter="1.3 Widget Console"
        page="07"
        className="bg-orchid text-ink"
      />

      <ChapterSpread project={PROJECTS[3]} flip />

      {/* ------------------------------------------ INDEX/CATALOG ---- */}
      <section
        data-chapter="Index / Catalog"
        data-page="09"
        className="bg-signal px-5 py-20 text-ink sm:px-10"
      >
        <Reveal>
          <h2 className="term mb-10 text-3xl sm:text-4xl">
            [ Index / Catalog — the toolkit ]
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-5">
          {CATALOG.map((item, i) => (
            <Reveal key={item} delay={(i % 5) * 80}>
              <div className="term mb-2 text-sm">[ {String(i + 1).padStart(2, "0")} ]</div>
              {i % 3 !== 1 ? (
                <ArtPanel
                  variant={CATALOG_ART[i % CATALOG_ART.length]}
                  className="mb-2 aspect-[4/3] max-w-40 border border-ink/40"
                />
              ) : (
                <div className="mb-2 aspect-[4/3] max-w-40" />
              )}
              <div className="term text-base leading-tight">{item}</div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-16">
          <p className="display text-center text-[9vw] sm:text-[5vw]">
            Human first, digital second.
          </p>
        </Reveal>
      </section>

      {/* ------------------------------------------------ ABOUT ---- */}
      <Divider
        title="About"
        chapter="Section 2 — About"
        page="10"
        tone="text-signal"
      />

      <section
        data-chapter="2.1 The Human"
        data-page="11"
        className="grid bg-bone text-ink lg:grid-cols-[7fr_5fr]"
      >
        <div className="px-5 py-16 sm:px-10 lg:py-24">
          <Reveal>
            <h2 className="display text-[14vw] sm:text-[7vw]">
              The human
              <br />
              behind the work
            </h2>
          </Reveal>
          <div className="mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
            <Reveal delay={150}>
              <p className="rule-t pt-3 text-[13px] leading-relaxed">
                I&apos;m TJ — a software engineer who likes the whole stack:
                the data model, the deploy pipeline, and the pixel. I build
                fast, get it working end-to-end, then sand it until it feels
                dependable. Currently shipping web apps with React, TypeScript,
                and Bun, and always keeping one experimental project on the
                bench.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <p className="rule-t pt-3 text-[13px] leading-relaxed">
                Away from the editor I&apos;m usually behind a camera or on a
                golf course — both of which turn out to be excellent training
                for engineering: patience, framing, and accepting that
                conditions change mid-round. Life is messy. Tap into that truth
                and the work connects.
              </p>
            </Reveal>
          </div>
          <Reveal delay={380} className="mt-10">
            <div className="term grid max-w-md gap-4 text-base sm:grid-cols-2">
              <div>
                ■ Location
                <br />
                United States
                <br />
                ID: PST-EST
              </div>
              <div>
                ■ Currently
                <br />
                Open to interesting work
                <br />
                ID: 2026-08
              </div>
            </div>
          </Reveal>
        </div>
        <ArtPanel
          variant="ink-scan"
          className="min-h-80"
          meta={{ name: "Self portrait", detail: "scan pending", id: "000001" }}
          metaTone="text-bone/80"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="masthead text-[10rem] text-bone/20">TJ</span>
          </div>
        </ArtPanel>
      </section>

      {/* ------------------------------------------- PHOTOGRAPHY ---- */}
      <section
        data-chapter="2.2 Stills"
        data-page="12"
        className="bg-bone px-5 py-20 text-ink sm:px-10"
      >
        <Reveal>
          <div className="mb-4 flex flex-wrap items-baseline gap-6">
            <h2 className="display text-[12vw] sm:text-[6vw]">Stills</h2>
            <p className="term max-w-xs text-base leading-snug">
              Photography catalog — awaiting scans. ////////////
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-5">
          {Array.from({ length: 10 }, (_, i) => (
            <Reveal key={i} delay={(i % 5) * 70}>
              <div className="term mb-2 text-sm">[ {String(i + 1).padStart(2, "0")} ]</div>
              <div className="flex aspect-[3/4] items-end border border-ink/30 p-2">
                <span className="term text-xs text-ink/40">
                  ■ reserved
                  <br />
                  film / digital
                  <br />
                  ID: tbd
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Marquee
        text="Get in touch — open to interesting work"
        className="bg-orchid text-ink"
      />

      {/* ----------------------------------------------- CONTACT ---- */}
      <section
        id="contact"
        data-chapter="Colophon / Contact"
        data-page="13"
        className="relative flex min-h-[90vh] flex-col bg-ink px-5 py-20 text-bone sm:px-10"
      >
        <Reveal>
          <h2 className="display text-[16vw] leading-[0.84] text-bone sm:text-[10vw]">
            Get in
            <br />
            touch
          </h2>
        </Reveal>
        <Tape
          lines={["No agencies", "just build"]}
          color="bg-acid text-ink"
          className="absolute right-[8%] top-[18%] rotate-2"
        />
        <div className="mt-14 grid max-w-2xl gap-8 sm:grid-cols-2">
          <Reveal delay={120}>
            <a href="mailto:tjmcgovern8@gmail.com" className="group block">
              <Meta
                name="Email"
                detail="tjmcgovern8@gmail.com"
                id="primary"
                className="text-bone transition-colors group-hover:text-acid"
              />
            </a>
          </Reveal>
          <Reveal delay={220}>
            <a
              href="https://github.com/ThomasJMcGovern"
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <Meta
                name="GitHub"
                detail="github.com/ThomasJMcGovern"
                id="code"
                className="text-bone transition-colors group-hover:text-acid"
              />
            </a>
          </Reveal>
          <Reveal delay={320}>
            <Meta name="Site" detail="teejmcgovern.com" id="here" className="text-bone" />
          </Reveal>
          <Reveal delay={420}>
            <Meta
              name="Location"
              detail="United States / remote"
              id="anywhere"
              className="text-bone"
            />
          </Reveal>
        </div>

        <div className="term mt-auto grid gap-2 border-t border-bone/20 pt-6 text-sm text-bone/50 sm:grid-cols-3">
          <span>© 2026 Thomas J McGovern</span>
          <span>Set in Big Shoulders Stencil / VT323 / Archivo / Instrument Serif</span>
          <span>Built with Next.js — deployed on Vercel</span>
        </div>
      </section>
    </main>
  );
}
