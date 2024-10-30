export interface NavItems {
  link: string;
  text: string;
}

interface skill {
  name: string;
  level: number;
}

export interface skillCategories {
  title: string;
  icon: React.ReactNode;
  skills: skill[];
}

export interface ParcourItems {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface BioContent {
  text: string;
  passions: ParcourItems[];
}

export interface SocialLink {
  icon: JSX.Element;
  href: string;
  label: string;
}

export interface ContactInfo {
  email: string;
  location: string;
}
