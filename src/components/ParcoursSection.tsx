import { motion } from "framer-motion";
import { Code, Briefcase, GraduationCap, Rocket } from "lucide-react";
import { ParcourItems } from "../utils/interface";
import { ReactElement } from "react";

export default function ParcoursSection(): ReactElement {
  const parcours: ParcourItems[] = [
    {
      icon: <Briefcase className="w-8 h-8 text-blue-400" />,
      title: "Reconversion Professionnelle",
      description:
        "Passionnée par le développement, j'ai pris la décision audacieuse de me reconvertir pour suivre ma passion.",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-purple-400" />,
      title: "Formation Intensive",
      description:
        "J'ai suivi une formation intensive en développement web, acquérant des compétences en HTML,PHP,Javascript et bien encore",
    },
    {
      icon: <Code className="w-8 h-8 text-green-400" />,
      title: "Projets Personnels",
      description:
        "J'ai développé plusieurs projets personnels pour mettre en pratique mes nouvelles compétences et explorer différentes technologies.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-pink-400" />,
      title: "Début de Carrière",
      description:
        "Aujourd'hui, aprés un 2 ans je suis prés à me lancer dans le développement, avec un portfolio solide et une passion inébranlable.",
    },
  ];

  return (
    <section id="ParcoursSection" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
        >
          -Mon Parcours-
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {parcours.map((etape, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800 hover:border-blue-500 transition duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 bg-gray-800 p-3 rounded-full">
                  {etape.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {etape.title}
                </h3>
              </div>
              <p className="text-gray-400">{etape.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 text-center"
        >
          <blockquote className="text-lg italic text-gray-300 max-w-2xl mx-auto border-l-4 border-blue-500 pl-4">
            Coder, c’est un peu comme écrire de la poésie : chaque ligne porte
            un morceau d’inspiration, chaque bloc de code raconte une histoire.
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
