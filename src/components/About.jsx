import { about } from "../portfolio";
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";

function About() {
  const { name, role, description, resume, social } = about;

  return (
    <div className="mt-12 flex flex-col items-center">
      <h1 className="text-5xl uppercase">
        Hi,I am <span className="text-blue-400">{name}</span>
      </h1>
      <h2 className="mb-10 mt-10  text-3xl uppercase">A {role}.</h2>
      <p className=" max-w-[600px]  text-sm">{description}</p>
      <div className="mt-10 flex items-center space-x-5">
        <a href={resume}>
          <button className="relative h-12 w-40 overflow-hidden border-2 border-solid border-blue-400 text-blue-400 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-blue-500 before:duration-300 before:ease-out hover:text-white hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
            <span className="relative z-10">Resume</span>
          </button>
        </a>
        <>
          <a
            href={social.github}
            className="relative  block w-fit text-3xl  transition duration-300 after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-blue-400 after:transition after:duration-300 after:content-[''] hover:text-blue-400 after:hover:scale-x-100"
          >
            <GrGithub />
          </a>
          <a
            href={social.linkedin}
            className="relative block w-fit text-3xl  transition duration-300 after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-blue-400 after:transition after:duration-300 after:content-[''] hover:text-blue-400 after:hover:scale-x-100"
          >
            <FaLinkedin />
          </a>
        </>
      </div>
    </div>
  );
}

export default About;
