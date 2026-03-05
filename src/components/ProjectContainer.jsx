import { GrGithub } from "react-icons/gr";
import { MdLaunch } from "react-icons/md";

function ProjectContainer({ project }) {
  return (
    <div className="m-0 max-w-sm overflow-hidden rounded  text-center shadow-2xl transition duration-300 hover:scale-105">
      <picture className="block overflow-hidden">
        <img
          src={project.image}
          alt="projects"
          className=" w-full transition duration-300 hover:scale-150"
        />
      </picture>
      <div className="px-4 py-3">
        <h3 className="font-bold">{project.name}</h3>
        <p className="mt-4">{project.description}</p>
        <ul className="mb-5 mt-5 flex flex-wrap justify-center">
          {project.stack.map((item) => (
            <li className="m-2 text-sm font-semibold">{item}</li>
          ))}
        </ul>
        <div className="flex flex-wrap space-x-10">
          <a
            href={project.sourceCode}
            className="relative  block w-fit text-3xl  transition duration-300 after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-blue-400 after:transition after:duration-300 after:content-[''] hover:text-blue-400 after:hover:scale-x-100"
          >
            <GrGithub />
          </a>
          <a
            href={project.livePreview}
            className="relative block w-fit text-3xl  transition duration-300 after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-blue-400 after:transition after:duration-300 after:content-[''] hover:text-blue-400 after:hover:scale-x-100"
          >
            <MdLaunch />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectContainer;
