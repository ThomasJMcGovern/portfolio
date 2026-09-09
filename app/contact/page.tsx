import { NotebookPage } from "@/components/notebook-page";
import { Sketch } from "@/components/sketch";

export const metadata = { title: "Contact — TJ McGovern" };
export default function Contact() {
  return <NotebookPage title="Let’s talk." note="Leave a little note">
    <div className="contact-layout"><div className="contact-drawing"><Sketch kind="contact" /></div><div><p className="intro-copy">Have something in mind?</p><p>A project, an idea, or just a hello.</p><div className="contact-links"><a className="text-link" href="mailto:tjmcgovern8@gmail.com">tjmcgovern8@gmail.com ↗</a><a className="text-link" href="https://www.instagram.com/teejmcgovern/" target="_blank" rel="noopener noreferrer">Instagram @teejmcgovern ↗</a></div></div></div>
  </NotebookPage>;
}
