import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import { partnersLogo } from "./data/partners";
import Slider from "./components/Slider";
import RoadMapSection from "./components/RoadmapSection";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-screen min-h-screen fixed z-0 flex justify-center px-6 py-40 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-25"></div>
        <img
          src="mesh.svg"
          alt="Mesh"
          className="opacity-15 absolute bottom-1 h-[600px] z-10"
        />
        <div className="bg-gradient-to-c from-transparent via-transparent to-white absolute inset-0 z-20"></div>
      </div>
      <div className="relative z-20 scroll-smooth">
        <NavBar />
        <div className="container mx-auto">
          <HeroSection />
          <Slider images={partnersLogo}></Slider>
          <AboutSection></AboutSection>
          <RoadMapSection></RoadMapSection>
          <FeaturesSection></FeaturesSection>
          <TestimonialsSection></TestimonialsSection>
          <PricingSection></PricingSection>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
