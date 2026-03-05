import { skills } from "../portfolio";

function Skills() {
  if (!skills.length) return null;
  return (
    <section id="skills" className="mt-20 flex flex-col items-center">
      <h2 className=" mb-4 text-center uppercase">Skills</h2>
      <ul className=" m-0 flex w-[95%] max-w-[450px] flex-wrap  justify-center">
        {skills.map((skill) => (
          <li className=" m-2 block cursor-pointer bg-neutral-700 px-4 py-3 shadow-2xl transition duration-300 hover:-translate-y-1">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
