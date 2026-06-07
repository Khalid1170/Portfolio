import { Brain, Code, User, ArrowRight } from "lucide-react";

export const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-28 px-4 relative overflow-hidden bg-gradient-to-b from-secondary/10 to-background"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="h-1 w-12 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Biography Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left fade-in-left delay-1">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Full-Stack Developer &{" "}
              <span className="text-primary">Problem Solver</span>
            </h3>

            <div className="space-y-4 text-muted-foreground font-normal text-base md:text-lg leading-relaxed">
              <p>
                I am a full-stack developer specializing in building clean,
                responsive web applications. With a strong foundational core in{" "}
                <span className="text-foreground font-medium">
                  React, JavaScript, Python, and Flask
                </span>
                , I focus on bridging the gap between elegant UI design and
                robust, scalable backend architecture.
              </p>

              <p>
                Collaborative execution is at the heart of my process. Whether
                architecting RESTful APIs or serving as a Scrum Master to guide
                fast-paced development sprints, I prioritize clean
                documentation, version control consistency, and cross-functional
                team alignment.
              </p>

              <p>
                I thrive on solving complex structural logic puzzles with
                readable, maintainable systems, consistently aiming to refine
                user workflows and performance parameters across production
                build cycles.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-6 py-3 rounded-xl hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Get in contact
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Key Core Focus Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4 w-full fade-in-left delay-2">
            {/* Feature 1 */}
            <div className="group relative bg-card/40 backdrop-blur-md p-5 rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:bg-card/70 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                  <Code className="h-5 w-5" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-base text-foreground tracking-tight mb-1">
                    Web Development
                  </h4>

                  <p className="text-sm text-muted-foreground leading-normal">
                    Building modern, full-stack applications with modular
                    architecture—from database configurations to elegant UI
                    elements.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-card/40 backdrop-blur-md p-5 rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:bg-card/70 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                  <User className="h-5 w-5" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-base text-foreground tracking-tight mb-1">
                    UX / UI Strategy
                  </h4>

                  <p className="text-sm text-muted-foreground leading-normal">
                    Designing intuitive architectures focused heavily on web
                    accessibility, component performance, and device
                    flexibility.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-card/40 backdrop-blur-md p-5 rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:bg-card/70 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                  <Brain className="h-5 w-5" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-base text-foreground tracking-tight mb-1">
                    Agile Collaboration
                  </h4>

                  <p className="text-sm text-muted-foreground leading-normal">
                    Practiced managing sprints, structural version control
                    branches via Git, and tracking progress inside Kanban
                    pipelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};