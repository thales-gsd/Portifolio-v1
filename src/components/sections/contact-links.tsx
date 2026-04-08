import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const links = [
  {
    name: "GitHub",
    content: "github.com/thales-gsd",
    href: "https://github.com/thales-gsd",
    icon: <FaGithub size={20} />
  },
  {
    name: "LinkedIn",
    content: "linkedin.com/in/thales-dipa",
    href: "https://www.linkedin.com/in/thales-dipapidis/",
    icon: <FaLinkedin size={20} />
  },
  {
    name: "Whatsapp",
    content: "+55 (19) 99297-3027",
    href: "https://wa.me/+5519992873027",
    icon: <FaWhatsapp size={20} />
  },
  {
    name: "Email",
    content: "contact.thales.dipapidis@gmail.com",
    href: "mailto:contact.thales.dipapidis@gmail.com",
    icon: <BiLogoGmail size={20} />
  },
  {
    name: "Instagram",
    content: "instagram.com/gcx.dipa",
    href: "https://www.instagram.com/gcx.dipa",
    icon: <FaInstagram size={20} />
  }
];

export default function ContactLinks() {
  return (
    <div className="flex flex-col items-start justify-center p-8 gap-4">
      <h1 className="text-2xl mb-4">
        Links
      </h1>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-lg hover:underline"
        >
          {link.icon}
          <span>{link.content}</span>
        </Link>
      ))}
    </div>
  );
}