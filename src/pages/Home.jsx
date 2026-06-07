import { AboutMe } from "../components/AboutMe.jsx";
import { ContactSection } from "../components/Contact.jsx";
import { HeroSection } from "../components/HeroSection.jsx";
import { Navbar } from "../components/Navbar";
import { SkillsSection } from "../components/SkillsSection.jsx";
import { StarBackground } from "../components/StarBackground";
import { WorkSection } from "../components/Work.jsx";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Background */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="space-y-24">

        <div className="fade-in-up">
          <HeroSection />
        </div>

        <div className="fade-in-up delay-1">
          <WorkSection />
        </div>

        <div className="fade-in-up delay-2">
          <AboutMe />
        </div>

        <div className="fade-in-up delay-3">
          <SkillsSection />
        </div>

        <div className="fade-in-up delay-4">
          <ContactSection />
        </div>

      </main>
    </div>
  );
};