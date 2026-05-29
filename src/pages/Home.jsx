import { AboutMe } from "../components/AboutMe.jsx";
import { ContactSection } from "../components/Contact.jsx";
import { HeroSection } from "../components/HeroSection.jsx";
import { Navbar } from "../components/Navbar";
import { SkillsSection } from "../components/SkillsSection.jsx";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { WorkSection } from "../components/Work.jsx";


export const Home = () => {
    return(
    
    <div className ="min-h-screen bg-background text-foreground overflow-x-hidden ">

    {/* Theme Toggle*/}
    {/* <ThemeToggle /> */}
    {/* Background Effects*/}
    < StarBackground />
    {/* Navbar */}
    <Navbar />
    {/* Main Content */}

    <main>
    <HeroSection />

    <AboutMe />
    < SkillsSection />
    <WorkSection />
    <ContactSection />

    </main>
    {/* Footer */}
    
    </div>

    );
};