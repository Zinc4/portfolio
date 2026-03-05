import { header } from "../portfolio";
import Navbar from "../components/Navbar";

function Header() {
  const { homepage, title } = header;

  return (
    <header
      className="h-29 m-auto flex w-11/12 max-w-[1100px] items-center justify-between py-10 pt-10"
      id="homepage"
    >
      <h2>
        {homepage ? (
          <a
            href={homepage}
            className="relative block w-fit  transition duration-300 after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-blue-400 after:transition after:duration-300 after:content-[''] hover:text-blue-400 after:hover:scale-x-100"
          >
            {title}
          </a>
        ) : (
          title
        )}
      </h2>
      <Navbar />
    </header>
  );
}

export default Header;
