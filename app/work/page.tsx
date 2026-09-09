import Link from "next/link";
import { NotebookPage } from "@/components/notebook-page";
import { projects } from "@/lib/projects";

export const metadata = { title: "Work — TJ McGovern" };
export default function Work() {
  return <NotebookPage title="Things I’m building." note="Work / projects / ideas">
    <div className="project-list">{projects.map(project => <Link href={`/work/${project.slug}`} className="project-link" key={project.slug}><span className="project-category">{project.category}</span><h2>{project.name}<span aria-hidden="true">↗</span></h2><p>{project.summary}</p></Link>)}</div>
  </NotebookPage>;
}
