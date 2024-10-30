import { useState, useEffect, ReactElement } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function HeroSection(): ReactElement {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="HeroSection"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-20 animate-pulse" />

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse">
            Bonjour, je suis <span className="text-white">Dylan</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Développeur Full Stack | Créateur d&apos;expériences web uniques
          </p>
          <p className="text-3xl md:text-5xl font-bold mb-8">
            <span className="relative">
              <span className="text-blue-500 animate-pulse">npm</span>
              <span className="absolute top-0 left-0 w-full h-full bg-blue-500 filter blur-sm opacity-50 animate-pulse"></span>
            </span>{" "}
            <span className="text-purple-500">install</span>{" "}
            <span className="text-green-500">awesome-dev</span>
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <SocialLink
              href="https://github.com/dylanepitech"
              icon={<Github className="w-6 h-6" />}
              label="GitHub"
            />
            <SocialLink
              href="https://www.linkedin.com/in/dylan-bouraoui-942039259"
              icon={<Linkedin className="w-6 h-6" />}
              label="LinkedIn"
            />
            <SocialLink
              href="mailto:dylan.bouraoui@epitech.eu"
              icon={<Mail className="w-6 h-6" />}
              label="Email"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transition duration-300"
          >
            <a href="#ProjectsSection">Voir mes projets</a>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="text-gray-400 hover:text-white transition duration-300"
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
}
