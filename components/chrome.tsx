"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Sticky masthead bar, styled like the report's running header:
 * masthead / doc meta / current chapter / page number.
 * Chapter + page update as sections with [data-chapter][data-page]
 * cross the top of the viewport.
 */
export function HeaderBar() {
  const [chapter, setChapter] = useState("COVER");
  const [page, setPage] = useState("00");

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-chapter]"),
    );
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            setChapter(el.dataset.chapter ?? "");
            setPage(el.dataset.page ?? "");
          }
        }
      },
      // fire when a section occupies the band near the top of the screen
      { rootMargin: "-8% 0px -80% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-bone/20 bg-ink text-bone">
      <div className="flex items-center gap-4 px-4 py-2.5 sm:px-6">
        <a href="#cover" className="masthead text-2xl leading-none">
          McGovern
        </a>
        <div className="hidden text-[10px] uppercase leading-tight tracking-wide sm:block">
          Portfolio
          <br />
          Annual Report
        </div>
        <div className="hidden text-[10px] uppercase leading-tight tracking-wide sm:block">
          V1
          <br />
          2026
        </div>
        <div className="term ml-auto truncate text-lg text-bone/90 sm:text-xl">
          {chapter}
        </div>
        <div className="term text-lg sm:text-xl">{page}</div>
      </div>
    </header>
  );
}

/** Adds .is-in when scrolled into view; pairs with .reveal in globals.css */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
