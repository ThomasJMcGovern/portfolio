import Link from "next/link";

export function NotebookPage({ title, note, children }: { title: string; note: string; children: React.ReactNode }) {
  return <main className="notebook-page">
    <header className="page-header"><Link href="/" className="back-link">← Back to the sketchbook</Link><nav aria-label="Main navigation"><Link href="/work">Work</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></nav></header>
    <div className="page-title"><p>{note}</p><h1>{title}</h1></div>
    {children}
  </main>;
}
