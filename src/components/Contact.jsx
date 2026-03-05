import { contact } from "../portfolio";

function Contact() {
  if (!contact.email) return null;
  return (
    <section id="contact" className="mt-20 flex flex-col items-center">
      <h2 className="mb-4 text-center uppercase">Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <button className="relative h-12 w-40 overflow-hidden border-2 border-solid border-blue-400 text-blue-400 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-blue-500 before:duration-300 before:ease-out hover:text-white hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
          <span className="relative z-10">Email Me</span>
        </button>
      </a>
    </section>
  );
}

export default Contact;
