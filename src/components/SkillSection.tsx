import { motion } from "framer-motion";
import { Chrome, Database, Server, Settings } from "lucide-react";
import { skillCategories } from "../utils/interface";
import { ReactElement } from "react";

export default function SkillSection(): ReactElement {
  const skillCategories: skillCategories[] = [
    {
      title: "Frontend",
      icon: <Chrome className="w-8 h-8 text-blue-400" />,
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "Vue/Nuxt.js", level: 70 },
        { name: "Angular/Nest.js", level: 70 },
        { name: "Twig / Blade", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
      ],
    },
    {
      title: "Backend",
      icon: <Database className="w-8 h-8 text-purple-400" />,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Symfony", level: 80 },
        { name: "Laravel", level: 70 },
        { name: "API Platform", level: 80 },
        { name: "Django", level: 70 },
      ],
    },
    {
      title: "Database",
      icon: <Server className="w-8 h-8 text-pink-400" />,
      skills: [
        { name: "MySQL", level: 90 },
        { name: "MongoDB", level: 70 },
        { name: "PostgreSQL", level: 90 },
      ],
    },
    {
      title: "Outils",
      icon: <Settings className="w-8 h-8 text-green-400" />,
      skills: [
        { name: "Git", level: 85 },
        { name: "Github / Bitbucket", level: 90 },
        { name: "Docker", level: 80 },
        { name: "VS Code", level: 100 },
        { name: "PHPStorm", level: 100 },
        { name: "Postman", level: 100 },
      ],
    },
  ];

  return (
    <section id="SkillSection" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
        >
          -Mes Compétences-
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800 hover:border-blue-500 transition duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="mr-4 bg-gray-800 p-3 rounded-full">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-gray-300">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        }}
                        className="h-full bg-gradient-to-r from-blue-400 to-purple-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
