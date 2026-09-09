import Image from "next/image";
import Link from "next/link";
import { NotebookPage } from "@/components/notebook-page";

export const metadata = { title: "About — TJ McGovern" };
export default function About() {
  return <NotebookPage title="Hey, I’m TJ." note="The person behind the projects">
    <div className="about-layout"><div className="about-photo"><Image src="/assets/originals/tj-portrait.png" alt="TJ smiling and holding up a peace sign" width={1659} height={948} sizes="(max-width: 700px) 100vw, 50vw" /></div><div><p className="intro-copy">I build things for the web.</p><p>This is a home for what I’m working on, the ideas I’m exploring, and a little bit of me along the way.</p><p>More personal notes coming soon.</p><Link className="text-link" href="/work">Explore my work ↗</Link></div></div>
  </NotebookPage>;
}
