import { lazy, Suspense, useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection.jsx";
// import { GithubSection } from "../components/GitHubSection.jsx";

// Code-splitting chunks
const StarBackground = lazy(() => import("../components/StarBackground").then(m => ({ default: m.StarBackground })));
const WorkSection = lazy(() => import("../components/Work.jsx").then(m => ({ default: m.WorkSection })));
const AboutMe = lazy(() => import("../components/AboutMe.jsx").then(m => ({ default: m.AboutMe })));
const SkillsSection = lazy(() => import("../components/SkillsSection.jsx").then(m => ({ default: m.SkillsSection })));
const ContactSection = lazy(() => import("../components/Contact.jsx").then(m => ({ default: m.ContactSection })));
const GithubSection = lazy(() =>
  import("../components/GithubSection.jsx").then(m => ({ default: m.GithubSection }))
);

export const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check viewport width immediately on mount
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* HARD PROTECTION: Absolutely zero StarBackground downloads or calculations on mobile viewports */}
      {!isMobile && (
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      )}

      <Navbar />

      <main className="space-y-24">

        {/* Hero Section paints immediately */}
        <div className="fade-in-up">
          <HeroSection />
        </div>

        <Suspense fallback={<div className="min-h-[40vh] bg-transparent" />}>
          <div className="fade-in-up delay-1">
            <WorkSection />
          </div>
        </Suspense>

        <Suspense fallback={<div className="min-h-[40vh] bg-transparent" />}>
          <div className="fade-in-up delay-2">
            <AboutMe />
          </div>
        </Suspense>

        <Suspense fallback={<div className="min-h-[30vh] bg-transparent" />}>
          <div className="fade-in-up delay-3">
            <SkillsSection />
          </div>
        </Suspense>


              <Suspense fallback={<div className="min-h-[30vh] bg-transparent" />}>
          <div className="fade-in-up delay-3">
            <GithubSection/>
          </div>
        </Suspense>

        <Suspense fallback={<div className="min-h-[40vh] bg-transparent" />}>
          <div className="fade-in-up delay-4">
            <ContactSection />
          </div>
        </Suspense>

      </main>
    </div>
  );
};