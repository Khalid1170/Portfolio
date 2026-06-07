import { ArrowDown, Briefcase, FileText, Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[80vh] sm:min-h-screen flex flex-col items-center justify-start sm:justify-center pt-28 pb-30 sm:py-0 px-2 overflow-hidden bg-background"
    >
      {/* Background Tech Mesh & Glows */}
      <div className="absolute " />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-4xl mx-auto text-center z-10 my-auto sm:my-0">
        <div className="flex flex-col items-center space-y-9 md:space-y-8">
          
          {/* Status Badge */}
          <div className="fade-in-up delay-1">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for Opportunities
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="fade-in-up delay-2 text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            Hello, I'm <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
              Khalid Abdi
            </span>
          </h1>

          {/* Subtitle / Tagline */}
          <p className="fade-in-up delay-3 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-normal">
            Full-stack web developer based in Bristol building modern, responsive web applications with React, JavaScript, and Python. I enjoy turning ideas and designs into fully functional, production-ready products with clean, scalable code.
          </p>

          {/* Call To Action Buttons */}
          <div className="fade-in-up delay-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full pt-2">
            <a
              href="#project"
              className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-medium px-6 py-3.5 w-full sm:w-auto rounded-xl hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Briefcase className="w-4 h-4" />
              View My Work
            </a>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-secondary/50 border border-border/80 text-foreground font-medium px-6 py-3.5 w-full sm:w-auto rounded-xl hover:bg-secondary hover:border-border backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4 text-muted-foreground" />
              Let's Connect
            </a>
          </div>
          
        </div>
      </div>

      {/* Modern Scrolling Indicator */}
      <div 
        className="fade-in delay-4 absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center group cursor-pointer z-20 transition-opacity duration-700"
        onClick={() => document.getElementById("project")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-[10px] sm:text-xs tracking-widest uppercase font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300 mb-1.5 sm:mb-2.5">
          Scroll Down
        </span>
        <div className="flex items-start justify-center pt-2 w-7 h-11 sm:w-8 sm:h-12 rounded-full border-2 border-muted-foreground/30 group-hover:border-primary/60 transition-colors duration-300">
          <div className="w-1.5 h-2.5 sm:h-3 bg-primary rounded-full animate-bounce [animation-duration:2s]" />
        </div>
      </div>
    </section>
  );
};