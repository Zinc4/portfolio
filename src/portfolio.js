import { FaReact } from "react-icons/fa";

const header = {
  homepage: "#homepage",
  title: "HS.",
};

const about = {
  name: "Hanggoro Seto",
  role: "Full Stack MERN",
  description:
    "Self-taught student programmer interested in React, Next.js, Node.js (Express), MongoDB, Tailwind CSS, and Golang. Committed to creating clean, scalable code. Actively update in new technology science. Eager to contribute enthusiasm, adaptability, and a strong drive for improvement to impactful projects.",
  resume:
    "https://drive.google.com/file/d/1GtD7kbNXXwZhCX4SF_fNAzt9vAgarEK-/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/hanggoro-seto-firmandani-84a5a917b/",
    github: "https://github.com/Zinc4?tab=repositories",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "React-Pizza",
    image: "react-pizza.png",
    description:
      "A simple website for ordering pizza built with React Router and Redux ",
    stack: ["Javascript", "React", "TailwindCSS"],
    sourceCode: "https://github.com/Zinc4/React-pizza",
    livePreview: "https://fast-react-pizza-beta-virid.vercel.app",
  },
  {
    name: "Worldwise",
    image: "worldwise.png",
    description:
      "a website that aims to mark various places from all over the world with the help of maps",
    stack: ["Javascript", "React", "CSS"],
    sourceCode: "https://github.com/Zinc4/WorldWise",
    livePreview: "https://worldwise-phi.vercel.app",
  },
  {
    name: "React-Movie",
    image: "react-usepopcorn.png",
    description:
      "a website with the aim of searching for films with an API, bookmark and giving a rating.",
    stack: ["Javascript", "React", "CSS"],
    sourceCode: "https://github.com/Zinc4/UsePopCorn---React-Movie",
    livePreview: "https://usepopcorn-lac.vercel.app",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "JavaScript",
  "TailwindCSS",
  "React",
  "Redux",
  "Git",
  "Express",
  "NodejS",
  // {
  //   component: <FaReact />,
  //   name: "React",
  // },
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "hanggoroseto8@gmail.com",
};

export { header, about, projects, skills, contact };
