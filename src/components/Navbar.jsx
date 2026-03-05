function Navbar() {
  return (
    <nav className="flex items-center">
      <ul className="relative mr-6 flex space-x-8">
        <li>
          <a
            href="#projects"
            className="relative block w-fit  transition duration-300 after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-blue-400 after:transition after:duration-300 after:content-[''] hover:text-blue-400 after:hover:scale-x-100"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="relative block w-fit  transition duration-300 after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-blue-400 after:transition after:duration-300 after:content-[''] hover:text-blue-400 after:hover:scale-x-100"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="relative block w-fit  transition duration-300 after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-blue-400 after:transition after:duration-300 after:content-[''] hover:text-blue-400 after:hover:scale-x-100"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
