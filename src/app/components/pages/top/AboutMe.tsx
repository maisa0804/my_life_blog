import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function AboutMe() {
  return (
    <section
      aria-labelledby="about-me-title"
      className="text-text-primary flex max-w-xl flex-col border-text-primary/20 border-1 p-6"
    >
      <div className="relative aspect-[2/1] w-full">
        <Image
          src="/image.JPG"
          alt="pc-card"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col text-center">
        <h5 id="about-me-title" className="h5  text-text-primary">Misato Tanno</h5>
        <p className="text-text-primary caption my-4">Frontend engineer | Traveler</p>
        <p className="text-text-primary caption">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </p>
        <ul className="flex gap-4 mt-8 justify-center">
          <li>
            <a
              href="https://twitter.com/yourname"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              title="Twitter"
            >
              <FaGithub size={28} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yourname"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaLinkedin size={28} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/yourname"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              title="Twitter"
            >
              <FaInstagram size={28} />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 mt-8">
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="border-2 border-text-primary border-opacity-[10%] p-4">
          <p className="text-text-primary caption text-center">My Foog</p>
        </a>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="border-2 border-text-primary border-opacity-[10%] p-4">
          <p className="text-text-primary caption text-center">My Foog</p>
        </a>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="border-2 border-text-primary border-opacity-[10%] p-4">
          <p className="text-text-primary caption text-center">My Foog</p>
        </a>
      </div>
    </section>
  );
}