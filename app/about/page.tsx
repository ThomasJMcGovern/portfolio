import Image from "next/image";
import Link from "next/link";
import { NotebookPage } from "@/components/notebook-page";

export const metadata = { title: "About — TJ McGovern" };
export default function About() {
  return <NotebookPage title="Hey, I’m TJ." note="The person behind the projects">
    <div className="about-layout"><div className="about-photo"><Image src="/assets/originals/tj-portrait.png" alt="TJ smiling and holding up a peace sign" width={1659} height={948} sizes="(max-width: 700px) 100vw, 50vw" /></div><div><p className="intro-copy">I build products, websites, and the occasional multiplayer city.</p><p>I’m the primary frontend engineer on Gist GEO, where I’ve worked with our designer and engineering team to take the product from a landing page to a shipped, paid SaaS.</p><p>My work spans interfaces, design systems, and GEO research. Outside that work, I make things like Graffiti Turf War. This site brings those different parts together.</p><Link className="text-link" href="/work">Explore my work ↗</Link></div></div>
  </NotebookPage>;
}
