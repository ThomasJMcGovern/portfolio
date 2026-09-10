import Image from "next/image";
import Link from "next/link";
const navigationArt = {
  work: { src: "work-laptop", width: 1536, height: 1024 },
  about: { src: "about-portrait", width: 1149, height: 1369 },
  contact: { src: "contact-sticker", width: 1480, height: 1063 },
};

export default function Home() {
  return (
    <main className="sketchbook" aria-label="TJ McGovern’s portfolio">
      <div className="portrait">
        <Image
          src="/assets/originals/tj-portrait.png"
          alt="TJ standing with a smile and holding up a peace sign"
          width={1659}
          height={948}
          sizes="(max-width: 600px) 160vh, 175vh"
          preload
          className="portrait-image"
        />
      </div>
      <h1 className="signature">
        <span className="sr-only">TJ McGovern</span>
        <Image
          src="/assets/originals/tj-signature.png"
          alt=""
          width={2163}
          height={727}
          sizes="(max-width: 600px) 80vw, 480px"
          preload
          className="signature-image"
        />
      </h1>
      <nav className="sketch-nav" aria-label="Main navigation">
        {(["work", "about", "contact"] as const).map(kind => (
          <Link key={kind} href={`/${kind}`} className={`sketch-link sketch-${kind}`}>
            <Image
              src={`/assets/originals/${navigationArt[kind].src}.png`}
              width={navigationArt[kind].width}
              height={navigationArt[kind].height}
              alt=""
              sizes="(max-width: 700px) 140px, 240px"
              className="navigation-art"
            />
            <span>{kind === "work" ? "My work" : kind === "about" ? "Who’s this?" : "Say hello"}</span>
            <span className="sr-only"> — {kind}</span>
          </Link>
        ))}
      </nav>
      <svg className="portrait-scribble" viewBox="0 0 800 800" fill="none" aria-hidden="true">
        <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <path d="m340 87-16-23m43 14-3-34m25 30 13-27" />
          <path d="M269 433c-133 7-150 63 104 66 244 3 275-63 116-59M265 442c-95 24-53 53 130 46 163-6 219-44 123-49" />
          <path d="m561 600 8-23 8 21 23 5-21 9-7 25-9-24-21-8Z" />
        </g>
      </svg>
      <p className="margin-note">a little bit of me.<br />a few things I’ve made.</p>
      <svg className="paper-grain" aria-hidden="true" width="100%" height="100%">
        <filter id="paper-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.76" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#paper-grain)" opacity="0.2" />
      </svg>
    </main>
  );
}
