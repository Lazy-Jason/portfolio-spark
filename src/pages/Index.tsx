import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { GameJamsSection } from "@/components/GameJamsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <GameJamsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
