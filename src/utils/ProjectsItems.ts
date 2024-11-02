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
      { name: "Symfony 7.1", color: "bg-emerald-500" },
      { name: "React Typescript", color: "bg-orange-500" },
      { name: "NodeJS", color: "bg-red-500" },
      { name: "TailwindCss", color: "bg-cyan-500" },
      { name: "Bitbucket", color: "bg-amber-500" },
    ],
  },
  {
    id: 2,
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
    technologies: [
      { name: "React Typescript", color: "bg-orange-500" },
      { name: "Docker", color: "bg-blue-500" },
      { name: "Github", color: "bg-amber-500" },
    ],
  },
  {
    id: 3,
    title: "Site vitrine pour un Artisan Peintre Décorateur",
    shortDescription:
      "Conception et développement d'un site vitrine moderne mettant en valeur le savoir-faire artisanal d'un peintre décorateur d'intérieur.",
    fullDescription: `
      Création d'une vitrine digitale élégante et professionnelle pour un artisan peintre décorateur d'intérieur. Le projet a été conçu pour refléter l'excellence artisanale et le style unique de l'artisan, tout en respectant méticuleusement sa vision et son identité visuelle.
  
      Vision du projet :
      • Design épuré et moderne mettant en valeur les réalisations
      • Interface intuitive permettant une navigation fluide
      • Mise en avant du portfolio de réalisations avec galerie photo immersive
      • Respect strict de la charte graphique établie avec le client
      • Adaptation responsive pour une expérience optimale sur tous les supports
  
      Points forts du développement :
      • Galerie photo interactive avec zoom et navigation tactile
      • Animations subtiles soulignant l'élégance des réalisations
      • Optimisation SEO pour une meilleure visibilité locale
      • Performance et temps de chargement optimisés pour les images HD
  
      Spécifications techniques :
      • Design personnalisé selon les exigences chromatiques du client
      • Typographie soigneusement sélectionnée pour refléter l'identité artisanale
  
      Impact client :
      • Augmentation significative de la visibilité en ligne
      • Hausse des demandes de devis via le site
      • Retours positifs des clients sur l'expérience utilisateur
      • Portfolio digital professionnel accessible 24/7`,
    image: "/abpf83.png",
    githubLink: "https://bitbucket.org/dylanbro/abpf83/src/main/",
    demoLink: "https://abpf83.fr",
    technologies: [
      { name: "Vuejs TypeScript", color: "bg-green-500" },
      { name: "TailwindCSS", color: "bg-cyan-400" },
      { name: "Docker", color: "bg-blue-500" },
      { name: "Bitbucket", color: "bg-amber-500" },
    ],
  },
];
