export function Sketch({ kind }: { kind: "work" | "about" | "contact" }) {
  return (
    <svg viewBox="0 0 180 140" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {kind === "work" ? <>
        <path d="M29 21 148 17 153 100 26 104Z M34 26 143 24 146 94 33 97Z M26 104 9 122 164 121 153 100 M13 127 163 125" />
        <path d="m73 48-18 14 18 13m32-29 18 14-16 15m-17-32-9 39M62 115l49-1M22 15 16 4m140 14 13-9M5 77l13-3" />
      </> : kind === "about" ? <>
        <path d="M66 30c-25 10-27 54-10 69 17 17 48 11 60-7 16-22 8-55-10-66M51 44l-6-18 18 5 5-18 14 13 14-19 6 18 19-7-5 24M65 62l6-2m27-1 6 2M83 64l-4 16 9 1M69 89q16 13 30-3M56 106l-21 21m71-22 28 24M43 124q40-18 79 0" />
        <path d="M25 55Q8 69 24 89M142 41q18 18 8 44M22 52l-4 11 11-4M146 84l6 7 6-9" />
      </> : <>
        <path d="m18 36 139-8 16 85-134 13Z M20 39l70 46 47-53 M40 120l33-46m36-2 43 39M23 32l118-8M43 131l109-10" />
        <path d="M73 17q-18-13-21 1m-3 1 5 7 7-5M151 18l9-12m-1 25 14-2" />
      </>}
    </svg>
  );
}
