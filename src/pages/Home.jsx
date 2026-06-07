import { lazy, Suspense, useEffect, useState, useRef } from "react";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection.jsx";

const StarBackground = lazy(() =>
  import("../components/StarBackground").then((m) => ({
    default: m.StarBackground,
  }))
);

const WorkSection = lazy(() =>
  import("../components/Work.jsx").then((m) => ({
    default: m.WorkSection,
  }))
);

const AboutMe = lazy(() =>
  import("../components/AboutMe.jsx").then((m) => ({
    default: m.AboutMe,
  }))
);

const SkillsSection = lazy(() =>
  import("../components/SkillsSection.jsx").then((m) => ({
    default: m.SkillsSection,
  }))
);

const ContactSection = lazy(() =>
  import("../components/Contact.jsx").then((m) => ({
    default: m.ContactSection,
  }))
);

export const Home = () => {
  const [showWork, setShowWork] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showContact, setShowContact] = useState(false);

  // ONE observer instead of multiple listeners (important)
  const workRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.section;

            if (id === "work") setShowWork(true);
            if (id === "about") setShowAbout(true);
            if (id === "skills") setShowSkills(true);
            if (id === "contact") setShowContact(true);
          }
        });
      },
      { rootMargin: "200px" } // pre-load before visible
    );

    if (workRef.current) observer.observe(workRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Star background ONLY on desktop */}
      {typeof window !== "undefined" &&
        window.innerWidth >= 768 && (
          <Suspense fallback={null}>
            <StarBackground />
          </Suspense>
        )}

      <Navbar />

      <main className="space-y-24">
        <HeroSection />

        {/* WORK */}
        <div ref={workRef} data-section="work">
          {showWork && (
            <Suspense fallback={null}>
              <WorkSection />
            </Suspense>
          )}
        </div>

        {/* ABOUT */}
        <div ref={aboutRef} data-section="about">
          {showAbout && (
            <Suspense fallback={null}>
              <AboutMe />
            </Suspense>
          )}
        </div>

        {/* SKILLS */}
        <div ref={skillsRef} data-section="skills">
          {showSkills && (
            <Suspense fallback={null}>
              <SkillsSection />
            </Suspense>
          )}
        </div>

        {/* CONTACT */}
        <div ref={contactRef} data-section="contact">
          {showContact && (
            <Suspense fallback={null}>
              <ContactSection />
            </Suspense>
          )}
        </div>
      </main>
    </div>
  );
};