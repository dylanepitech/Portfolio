import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import { NavItems } from "../utils/interface";
import raccoon from "../assets/head.png";
import { Menu, X } from "lucide-react";

export default function Navbar(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const linkElements: NavItems[] = [
    {
      link: "#ParcoursSection",
      text: "Mon parcours",
    },
    {
      link: "#SkillSection",
      text: "Mes Compétences",
    },
    {
      link: "#AboutSection",
      text: "À Propos de Moi",
    },
    {
      link: "#ProjectsSection",
      text: "Mes Projets",
    },
    {
      link: "#Footer",
      text: "Me Contacter",
    },
  ];

  return (
    <nav className="glassmorphism fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:justify-center h-12 md:gap-10">
          <div className="flex items-center">
            <a href="#HeroSection">
              <img src={raccoon} alt="Raccoon head" className="h-6 w-6" />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {linkElements.map((item: NavItems, index: number) => (
                <a
                  key={index}
                  href={item.link}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Ouvrir le menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {linkElements.map((item: NavItems, index: number) => (
              <Link
                key={index}
                to={item.link}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
