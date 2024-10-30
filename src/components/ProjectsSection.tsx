import { ReactElement, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";
import { Project, ProjectTech } from "../utils/interface";
import { projects } from "../utils/ProjectsItems";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-20 bg-black" id="ProjectsSection">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
        >
          -Mes Projets-
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(
            (project: Project, index: number): ReactElement => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 cursor-pointer group"
                onClick={(): void => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(
                      (tech: ProjectTech, key: number): ReactElement => (
                        <span
                          key={key}
                          className={`px-2 py-1 rounded-full text-xs text-white ${tech.color}`}
                        >
                          {tech.name}
                        </span>
                      )
                    )}
                  </div>

                  <p className="text-gray-400 text-sm line-clamp-3">
                    {project.shortDescription}
                  </p>

                  <div className="pt-4 flex items-center gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition duration-300"
                      onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                        e.stopPropagation()
                      }
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition duration-300"
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                          e.stopPropagation()
                        }
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
              onClick={(): void => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-900 rounded-lg max-w-4xl w-full border border-gray-600 max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                <X
                  color="violet"
                  className="w-6 h-6 hover:cursor-pointer z-20 absolute top-4 right-4"
                  onClick={(): void => setSelectedProject(null)}
                />

                <div className="relative h-64 md:h-96">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 space-y-6">
                  <h2 className="text-2xl font-bold text-white">
                    {selectedProject.title}
                  </h2>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map(
                      (tech: ProjectTech, key: number): ReactElement => (
                        <span
                          key={key}
                          className={`px-3 py-1 rounded-full text-sm text-white ${tech.color}`}
                        >
                          {tech.name}
                        </span>
                      )
                    )}
                  </div>

                  <div className="text-gray-300 space-y-4">
                    {selectedProject.fullDescription.split("\n").map(
                      (paragraph: string, key: number): ReactElement => (
                        <p key={key}>{paragraph}</p>
                      )
                    )}
                  </div>

                  <div className="flex items-center gap-6 pt-4">
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition duration-300"
                    >
                      <Github className="w-5 h-5" />
                      <span>Voir sur GitHub</span>
                    </a>
                    {selectedProject.demoLink && (
                      <a
                        href={selectedProject.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Voir la démo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
