import { Briefcase, Mail, Github } from "lucide-react";

const techStack = ["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Tailwind CSS"];

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-background pt-2 pb-16"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-3xl mx-auto text-center z-10 flex flex-col items-center">

        {/* Status badge */}
        <div className="fade-in-up delay-1 mb-6">
          <div className="inline-flex items-center gap-2 bg-secondary/50 border border-border/60 px-4 py-1.5 rounded-full text-xs font-medium text-muted-foreground backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
            </span>
            Available for opportunities
          </div>
        </div>

        {/* Headline */}
        <h1 className="fade-in-up delay-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-5">
          Hello, I'm{" "}
          <span className="bg-gradient-to-br from-primary via-primary/90 to-primary/60 bg-clip-text text-transparent">
            Khalid Abdi
          </span>
        </h1>

        {/* Subtitle */}
        <p className="fade-in-up delay-3 text-sm sm:text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed mb-6">
          Full-stack developer based in{" "}
          <span className="text-foreground font-medium">Bristol</span> — building
          modern, responsive web apps with{" "}
          <span className="text-foreground font-medium">React</span>,{" "}
          <span className="text-foreground font-medium">JavaScript</span>, and{" "}
          <span className="text-foreground font-medium">Python</span>.
        </p>

        {/* Tech stack pills */}
        <div className="fade-in-up delay-3 flex flex-wrap items-center justify-center gap-1.5 mb-8">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] text-muted-foreground/60 px-3 py-1 rounded-full border border-border/30 bg-secondary/20 tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="fade-in-up delay-4 flex flex-col sm:flex-row items-center justify-center gap-2.5 mb-10 w-full max-w-sm sm:max-w-none">
          <a
            href="#project"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-medium px-5 py-2.5 rounded-xl hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto text-sm"
          >
            <Briefcase className="w-3.5 h-3.5" />
            View my work
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-secondary/40 border border-border/60 text-foreground font-medium px-5 py-2.5 rounded-xl hover:bg-secondary transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto text-sm"
          >
            <Mail className="w-3.5 h-3.5 text-muted-foreground" />
            Let's connect
          </a>

          <a
            href="https://github.com/Khalid1170"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-secondary/40 border border-border/60 text-foreground font-medium px-5 py-2.5 rounded-xl hover:bg-secondary transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto text-sm"
          >
            <Github className="w-3.5 h-3.5 text-muted-foreground" />
            GitHub
          </a>
        </div>

        {/* Stats row */}
        <div className="fade-in-up delay-4 flex items-center gap-6 sm:gap-10 justify-center">
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-xl sm:text-2xl font-bold tracking-tight">3+</span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-foreground/50">Projects</span>
          </div>
          <div className="w-px h-7 bg-border/40" />
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-xl sm:text-2xl font-bold tracking-tight">2+</span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-foreground/50">Years building</span>
          </div>
          <div className="w-px h-7 bg-border/40" />
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-xl sm:text-2xl font-bold tracking-tight">Full-stack</span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-foreground/50">Frontend & backend</span>
          </div>
        </div>

      </div>

      {/* Scroll indicator — hidden on short/mobile viewports */}
      <div
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 cursor-pointer opacity-30 hover:opacity-70 transition-opacity z-20"
        onClick={() => document.getElementById("project")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground">Scroll</span>
        <div className="flex items-start justify-center pt-1.5 w-5 h-8 rounded-full border border-border/40">
          <div className="w-0.5 h-1.5 bg-primary rounded-full animate-bounce [animation-duration:2s]" />
        </div>
      </div>
    </section>
  );
};