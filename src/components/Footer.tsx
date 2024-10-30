import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Heart,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { ContactInfo, NavItems, SocialLink } from "../utils/interface";
import { ReactElement } from "react";

export default function Footer(): ReactElement {
  const socialLinks: SocialLink[] = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/dylanepitech",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/dylan-bouraoui-942039259",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:dylan.bouraoui@epitech.eu",
      label: "Mail",
    },
  ];

  const contactInfo: ContactInfo = {
    email: "dylan.bouraoui@epitech.eu",
    location: "Toulon, France",
  };
  const NavItems: NavItems[] = [
    {
      link: "ParcoursSection",
      text: "Mon Parcours",
    },
    {
      link: "SkillSection",
      text: "Mes Compétences",
    },
    {
      link: "AboutSection",
      text: "À Propos de Moi",
    },
    {
      link: "ProjectsSection",
      text: "Mes projects",
    },
  ];

  const handleEmailClick = (): void => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  return (
    <footer id="Footer" className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white">Mon Portfolio</h3>
            <p className="text-gray-400 text-sm">
              Développeur passionné par le backend et l&apos;IA, créant des
              solutions innovantes pour demain.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white">Navigation</h3>
            <ul className="space-y-2">
              {NavItems.map((item: NavItems, key: number) => (
                <li key={key}>
                  <a
                    href={`#${item.link}`}
                    className="text-gray-400 hover:text-blue-400 transition duration-300 text-sm flex items-center gap-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white">Contact</h3>
            <div className="space-y-2">
              <button
                onClick={handleEmailClick}
                className="text-gray-400 hover:text-blue-400 transition duration-300 text-sm flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                {contactInfo.email}
              </button>
              <p className="text-gray-400 text-sm flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                {contactInfo.location}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white">Réseaux</h3>
            <div className="flex gap-4">
              {socialLinks.map(
                (social: SocialLink, key: number): ReactElement => (
                  <motion.a
                    key={key}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition duration-300 text-gray-400 hover:text-blue-400"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                )
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 mt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Dylan Bro. Tous droits réservés.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Fait avec <Heart className="w-4 h-4 text-red-500" /> et beaucoup
              de café
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
