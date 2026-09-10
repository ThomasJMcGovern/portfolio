import Link from "next/link";
import { NotebookPage } from "@/components/notebook-page";
import { projects } from "@/lib/projects";

export const metadata = { title: "Selected work — TJ McGovern" };
export default function Work() {
  return <NotebookPage title="A few things I’ve made." note="At work & on my own time">
    <div className="project-list">{projects.map(project => <article className="project-link" key={project.slug}>
      <span className="project-category">{project.category} / {project.role}</span>
      <Link className="project-title-link" href={`/work/${project.slug}`}><h2>{project.name}<span aria-hidden="true">↗</span></h2></Link>
      <p>{project.summary}</p>
      <div className="project-actions"><Link href={`/work/${project.slug}`}>Read the story</Link>{project.url && <a href={project.url} target="_blank" rel="noopener noreferrer">{project.linkLabel} ↗</a>}</div>
    </article>)}</div>
  </NotebookPage>;
}
