import { motion } from "framer-motion";
import { Brain, Dock, Server, Puzzle } from "lucide-react";
import { BioContent } from "../utils/interface";

export default function AboutSection() {
  const bioContent: BioContent = {
    text: `Passionné par le développement backend et l'intelligence artificielle, je m'épanouis dans la création d'outils qui optimisent le workflow de mon équipe. Docker fait partie intégrante de mon arsenal technique, me permettant de déployer des solutions robustes et scalables.

    Ma soif d'apprentissage me pousse constamment à explorer de nouvelles technologies et à renouveler mes connaissances. Je crois fermement que l'évolution continue est la clé d'un développeur performant.`,
    passions: [
      {
        icon: <Server className="w-6 h-6 text-blue-400" />,
        title: "Backend",
        description:
          "Spécialisé dans le développement d'APIs robustes et performantes",
      },
      {
        icon: <Brain className="w-6 h-6 text-purple-400" />,
        title: "IA",
        description:
          "Passionné par l'intégration de solutions d'intelligence artificielle",
      },
      {
        icon: <Dock className="w-6 h-6 text-blue-500" />,
        title: "DevOps",
        description: "Expert en conteneurisation et déploiement avec Docker",
      },
      {
        icon: <Puzzle className="w-6 h-6 text-green-400" />,
        title: "Innovation",
        description:
          "Toujours à la recherche de nouvelles solutions techniques",
      },
    ],
  };

  return (
    <section id="AboutSection" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
        >
          -À Propos de Moi-
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio principale */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800 hover:border-blue-500 transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Mon Histoire
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              {bioContent.text.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Passions et spécialités */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {bioContent.passions.map((passion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800 hover:border-blue-500 transition duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4 bg-gray-800 p-3 rounded-full">
                    {passion.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    {passion.title}
                  </h4>
                </div>
                <p className="text-gray-400 text-sm">{passion.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Citation inspirante */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <blockquote className="text-lg italic text-gray-300 max-w-2xl mx-auto border-l-4 border-blue-500 pl-4">
            &quot;L&apos;innovation naît de la passion d&apos;apprendre et du
            désir constant de repousser ses limites.&quot;
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
