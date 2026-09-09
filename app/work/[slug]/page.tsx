import { notFound } from "next/navigation";
import Link from "next/link";
import { NotebookPage } from "@/components/notebook-page";
import { projects } from "@/lib/projects";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export default async function Project({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(project => project.slug === slug);
  if (!project) notFound();
  return <NotebookPage title={project.name} note={project.category}>
    <div className="project-story"><p className="intro-copy">{project.summary}</p><section className="paper-note"><h2>More from behind the scenes soon.</h2><p>I’m putting together the story, screenshots, and details of this project.</p></section><Link className="text-link" href="/work">← All projects</Link></div>
  </NotebookPage>;
}
