import { projects } from "../portfolio";
import ProjectContainer from "./ProjectContainer";

function Projects() {
  if (!projects.length) return null;
  return (
    <section id="projects" className="mt-20">
      <h2 className=" mb-6 text-center uppercase">Projects</h2>
      <div className="m-0 grid min-w-[100px] grid-cols-[repeat(auto-fit,minmax(18em,1fr))] gap-8">
        {projects.map((project) => (
          <ProjectContainer project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
