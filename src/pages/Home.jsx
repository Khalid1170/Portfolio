import { lazy, Suspense } from "react";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection.jsx";

// Code-splitting chunks
const StarBackground = lazy(() => import("../components/StarBackground").then(m => ({ default: m.StarBackground })));
const WorkSection = lazy(() => import("../components/Work.jsx").then(m => ({ default: m.WorkSection })));
const AboutMe = lazy(() => import("../components/AboutMe.jsx").then(m => ({ default: m.AboutMe })));
const SkillsSection = lazy(() => import("../components/SkillsSection.jsx").then(m => ({ default: m.SkillsSection })));
const ContactSection = lazy(() => import("../components/Contact.jsx").then(m => ({ default: m.ContactSection })));

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Background canvas runs independently */}
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>

      <Navbar />

      <main className="space-y-24">

        {/* 1. Hero: Instant render, no fallback wait */}
        <div className="fade-in-up">
          <HeroSection />
        </div>

        {/* 2. Work Section: Streams independently */}
        <Suspense fallback={<div className="min-h-[50vh] bg-transparent" />}>
          <div className="fade-in-up delay-1">
            <WorkSection />
          </div>
        </Suspense>

        {/* 3. About Me: Streams independently */}
        <Suspense fallback={<div className="min-h-[40vh] bg-transparent" />}>
          <div className="fade-in-up delay-2">
            <AboutMe />
          </div>
        </Suspense>

        {/* 4. Skills Section: Streams independently */}
        <Suspense fallback={<div className="min-h-[30vh] bg-transparent" />}>
          <div className="fade-in-up delay-3">
            <SkillsSection />
          </div>
        </Suspense>

        {/* 5. Contact Section: Streams independently */}
        <Suspense fallback={<div className="min-h-[40vh] bg-transparent" />}>
          <div className="fade-in-up delay-4">
            <ContactSection />
          </div>
        </Suspense>

      </main>
    </div>
  );
};