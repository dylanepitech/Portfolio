import { Project } from "./interface";

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce d'aménagement intérieur",
    shortDescription:
      "Réalisation d'un e-commerce en partenariat avec mobalpa marseille. ",
    fullDescription: `Réalisation intégrale d'un site de e-commerce en partenaria avec mobalpa (Archideco) de la maquette a la conception de l'application en passant par l'hebergement et l'intégration d'une IA tout en respectant les voeux du clients et en tenant un cahier des charge et une charte graphique.
      
      Caractéristiques principales:
      • Panel d'administration des ventes et des produits
      • Suggestion automatique des produits similaire
      • Réalisaton de la partie paiment, suivis de livraison..
      • Création de facture visionnable et téléchargeable
      • Déploiement de l'application`,
    image: "/archideco.png",
    githubLink: "https://github.com/dylanepitech/archideco-front",
    // demoLink: "https://demo-link.com",
    technologies: [
      { name: "Symfony 7.1", color: "bg-blue-500" },
      { name: "React Typescript", color: "bg-orange-500" },
      { name: "NodeJS", color: "bg-red-500" },
    ],
  },
  {
    id: 1,
    title: "Mon portfolio",
    shortDescription: "Réalisation d'un portfolio",
    fullDescription: `Réalisation d'un portfolio déployer et conceptioner via ReactJS/Vitejs dans le but de promouvoir les projets réaliser (personelle et scolaire).
      
      Caractéristiques principales:
      • Respect d'une bonne structure de code
      • Déploiment en CI/CD, et vérification via des pipelines
      • Dockerisation de l'application
      • Ajout d'un linter eslint`,
    image: "/portfolio.png",
    githubLink: "https://github.com/dylanepitech/portfolio",
    // demoLink: "https://demo-link.com",
    technologies: [
      { name: "React Typescript", color: "bg-orange-500" },
      { name: "Docker", color: "bg-cyan-500" },
    ],
  },
];
