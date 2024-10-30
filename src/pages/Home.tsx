import { ReactElement } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ParcoursSection from "../components/ParcoursSection";
import SkillSection from "../components/SkillSection";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

export default function Home(): ReactElement {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ParcoursSection />
      <SkillSection />
      <AboutSection />
      <Footer />
    </>
  );
}
