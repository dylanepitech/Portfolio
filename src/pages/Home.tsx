import { ReactElement } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ParcoursSection from "../components/ParcoursSection";

export default function Home(): ReactElement {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ParcoursSection />
    </>
  );
}
