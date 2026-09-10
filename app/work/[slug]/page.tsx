import { notFound, permanentRedirect } from "next/navigation";
import Link from "next/link";
import { NotebookPage } from "@/components/notebook-page";
import { projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find(project => project.slug === slug);
  return { title: project ? `${project.name} — TJ McGovern` : "Project not found", description: project?.summary };
}
export default async function Project({ params }: Props) {
  const { slug } = await params;
  if (slug === "widget-console") permanentRedirect("/work/gist-widget-builder");
  const project = projects.find(project => project.slug === slug);
  if (!project) notFound();
  return <NotebookPage title={project.name} note={project.category}>
    <div className="project-story">
      <p className="project-role">{project.role}</p>
      <p className="intro-copy">{project.summary}</p>
      {project.url && <a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer">{project.linkLabel} ↗</a>}
      {project.sections.map(([heading, body]) => <section className="story-section" key={heading}><h2>{heading}</h2><p>{body}</p></section>)}
      <footer className="story-footer"><Link className="text-link" href="/work">← All projects</Link><Link className="text-link" href="/contact">Get in touch ↗</Link></footer>
    </div>
  </NotebookPage>;
}
