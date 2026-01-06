import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import MLProjects from "@/components/MLProjects";
import WebProjects from "@/components/WebProjects";
import WebDesignProjects from "@/components/WebDesignProjects";
import UIUXProjects from "@/components/UIUXProjects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <CustomCursor />
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <MLProjects />
      <WebProjects />
      <WebDesignProjects />
      <UIUXProjects />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
