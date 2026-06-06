import { useEffect, useState } from "react";

export const Home = () => {
  const [showBg, setShowBg] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBg(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {showBg && <StarBackground />}

      <Navbar />

      <main>
        <HeroSection />
        <WorkSection />
        <AboutMe />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
};