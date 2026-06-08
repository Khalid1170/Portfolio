import { useState, useEffect } from "react";
import {
  ExternalLink,
  Layers,
  ChevronLeft,
  ChevronRight,
  X,
  RefreshCw,
  ArrowUpRight,
} from "lucide-react";
const projects = [
  {
    id: "tagmycar",
    title: "TagMyCar",
    status: "development",
    liveUrl: "https://tagmycar-9ndc.vercel.app/",
    tagline: "Automotive Marketplace & Digital Sales Platform",
    description:
      "A hybrid vehicle marketplace bridging physical sales environments with online listings through an intuitive user dashboard and secure transaction flows.",
    bulletPoints: [
      "Instant vehicle-to-digital lead generation via custom QR indexing",
      "Centralized peer-to-peer automotive web marketplace application",
      "Real-time listing management and responsive user dashboards",
    ],
    images: ["/tagmycar.webp"],
  },
  {
    id: "sitetailor",
    title: "SiteTailor",
    status: "production",
    liveUrl: "https://bwk-mq43.vercel.app/",
    tagline: "Bespoke Web Development & Managed Digital Solutions",
    description:
      "A modern digital agency model delivering custom web layouts, optimized performance metrics, and responsive multi-platform designs.",
    bulletPoints: [
      "End-to-end frontend and backend corporate web applications",
      "Fixed-rate monthly maintenance and priority feature development pipelines",
      "Optimized performance scaling for local and enterprise brands",
    ],
    images: ["/sitetailor.webp"],
  },
  {
    id: "homehelp",
    title: "HomeHelp",
    status: "development",
    liveUrl: "https://homehelp.vercel.app/",
    tagline: "On-Demand Hyperlocal Task Marketplace",
    description:
      "A two-sided freelance service platform connecting residential clients with fully verified independent service professionals in real-time.",
    bulletPoints: [
      "Diverse categories including Furniture Assembly and Deep Cleaning",
      "Marketplace engine balancing standard rates with trade experts",
      "Real-time booking and autonomous scheduling system",
    ],
    images: ["/homehelp.webp", "/dashboardhh.webp", "/inboxhh.webp"],
  },
];

export const WorkSection = () => {
  const [activeImage, setActiveImage] = useState({});
  const [lightbox, setLightbox] = useState({ open: false, projectId: null, index: 0 });

  const activeProject = projects.find((p) => p.id === lightbox.projectId);
  const getIndex = (id) => activeImage[id] || 0;
  const setIndex = (id, index) => setActiveImage((prev) => ({ ...prev, [id]: index }));

  const changeImage = (project, dir, e) => {
    e.stopPropagation();
    const current = getIndex(project.id);
    const max = project.images.length;
    const next = dir === "next" ? (current + 1) % max : (current - 1 + max) % max;
    setIndex(project.id, next);
  };

  const openLightbox = (project, index) => setLightbox({ open: true, projectId: project.id, index });
  const closeLightbox = () => setLightbox({ open: false, projectId: null, index: 0 });

  const navigateLightbox = (dir, e) => {
    e.stopPropagation();
    if (!activeProject) return;
    const max = activeProject.images.length;
    setLightbox((p) => ({
      ...p,
      index: dir === "next" ? (p.index + 1) % max : (p.index - 1 + max) % max,
    }));
  };

  useEffect(() => {
    document.body.style.overflow = lightbox.open ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [lightbox.open]);

  return (
    <section id="project" className="py-32 px-4 bg-background relative overflow-hidden">
      {/* Structural ambient backdrop glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* ── HEADER ── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-secondary/30 backdrop-blur-md text-[11px] font-mono tracking-widest text-primary uppercase mb-4">
              <Layers className="w-3.5 h-3.5 text-primary" />
              Selected Engineering Output
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none font-display text-foreground">
              Featured <span className="bg-gradient-to-r from-muted-foreground via-muted-foreground/70 to-muted-foreground/40 bg-clip-text text-transparent font-light italic">Projects</span>
            </h2>
          </div>

          <p className="text-muted-foreground/80 font-mono text-xs leading-relaxed border-l border-primary/30 pl-4 max-w-[280px]">
            // Custom web applications, maintainable system design, and optimized full-stack engineering.
          </p>
        </div>

        {/* ── PROJECT LIST ── */}
        <div className="space-y-16">
          {projects.map((project, i) => {
            const index = getIndex(project.id);
            const image = project.images[index];
            const isEven = i % 2 === 0;
            const numStr = String(i + 1).padStart(2, "0");
            const urlShort = project.liveUrl.replace("https://", "").replace(/\/$/, "");

            return (
              <div
                key={project.id}
                className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch p-6 md:p-8 rounded-3xl border border-border/40 bg-card/20 backdrop-blur-sm hover:border-border/80 hover:bg-card/40 transition-all duration-500 group"
              >
                {/* TEXT CONTAINER */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-between py-4 order-2 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="space-y-6">
                    {/* Index Counter line layout */}
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs font-semibold tracking-wider text-primary">
                        {numStr} — 0{projects.length}
                      </span>
                      <div className="h-[1px] flex-1 bg-border/40" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        {project.status === "development" ? (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/10 text-amber-500 border border-amber-500/20">
                            In Development
                          </span>
                        ) : (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                            Live System
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium text-foreground/80 leading-snug">{project.tagline}</p>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <ul className="space-y-2.5 pt-2">
                      {project.bulletPoints.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs text-muted-foreground/90">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0 shadow-[0_0_6px_rgba(var(--primary),0.8)]" />
                          <span className="leading-normal">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Interactive Footer */}
                  <div className="pt-8 lg:pt-0">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-secondary/40 border border-border/60 text-xs font-semibold text-foreground tracking-wide hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-sm transition-all duration-300 group/btn"
                    >
                      Explore Application
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </div>
                </div>

                {/* MEDIA / BROWSER INTERFACE */}
                <div
                  className={`lg:col-span-7 order-1 relative flex items-center ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Subtle deep background ghost metric */}
                  <span
                    className="absolute -bottom-10 -right-4 text-[140px] font-black leading-none select-none pointer-events-none text-border/10 group-hover:text-border/20 font-display transition-colors duration-500"
                    aria-hidden="true"
                  >
                    {numStr}
                  </span>

                  {/* Browser frame Container */}
                  <div className="w-full relative rounded-2xl border border-border/60 bg-background/50 shadow-md shadow-black/5 overflow-hidden group-hover:border-border/90 group-hover:shadow-xl group-hover:shadow-black/10 transition-all duration-500">
                    
                    {/* Address Bar Interface */}
                    <div className="flex items-center gap-3 px-4 py-3 border-b border-border/40 bg-secondary/20 backdrop-blur-md">
                      <div className="flex gap-1.5 shrink-0">
                        <span className="w-2.5 h-2.5 rounded-full bg-border/60 group-hover:bg-red-500/70 transition-colors duration-300" />
                        <span className="w-2.5 h-2.5 rounded-full bg-border/60 group-hover:bg-yellow-500/70 transition-colors duration-300" />
                        <span className="w-2.5 h-2.5 rounded-full bg-border/60 group-hover:bg-green-500/70 transition-colors duration-300" />
                      </div>
                      <div className="flex-1 flex items-center justify-center bg-background/40 border border-border/30 rounded-lg px-3 py-1 max-w-sm mx-auto">
                        <span className="text-[10px] font-mono text-muted-foreground/70 truncate tracking-wide">{urlShort}</span>
                      </div>
                      <RefreshCw className="w-3 h-3 text-muted-foreground/40 shrink-0 group-hover:rotate-45 transition-transform duration-500" />
                    </div>

                    {/* Viewport Render Block */}
                    <div
                      className="relative overflow-hidden aspect-[16/10] cursor-zoom-in group/img bg-secondary/10"
                      onClick={() => openLightbox(project, index)}
                    >
                      <img
                        src={image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-[1.025]"
                      />

                      {/* Asynchronous Navigation Arrows */}
                      {project.images.length > 1 && (
                        <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={(e) => changeImage(project, "prev", e)}
                            className="p-2 rounded-xl bg-background/90 text-foreground border border-border shadow-lg backdrop-blur-sm hover:bg-secondary hover:scale-105 active:scale-95 transition-all"
                            aria-label="Previous image"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={(e) => changeImage(project, "next", e)}
                            className="p-2 rounded-xl bg-background/90 text-foreground border border-border shadow-lg backdrop-blur-sm hover:bg-secondary hover:scale-105 active:scale-95 transition-all"
                            aria-label="Next image"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      )}

                      {/* Pagination Status Indicators */}
                      {project.images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 px-2.5 py-1.5 rounded-full bg-background/80 backdrop-blur-md border border-border/40 shadow-sm">
                          {project.images.map((_, dotIdx) => (
                            <span
                              key={dotIdx}
                              className={`h-1.5 rounded-full transition-all duration-300 ${
                                dotIdx === index ? "w-4 bg-primary" : "w-1.5 bg-muted-foreground/30"
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── LIGHTBOX MODAL DECOUPLING ── */}
      {lightbox.open && activeProject && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-md flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-xl bg-secondary/60 text-muted-foreground border border-border/40 hover:text-foreground hover:bg-secondary transition-all"
            aria-label="Close lightbox"
          >
            <X className="w-4 h-4" />
          </button>

          {activeProject.images.length > 1 && (
            <>
              <button
                className="absolute left-6 p-3 rounded-xl bg-secondary/60 text-muted-foreground border border-border/40 hover:text-foreground hover:bg-secondary transition-all"
                onClick={(e) => navigateLightbox("prev", e)}
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                className="absolute right-6 p-3 rounded-xl bg-secondary/60 text-muted-foreground border border-border/40 hover:text-foreground hover:bg-secondary transition-all"
                onClick={(e) => navigateLightbox("next", e)}
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <div className="max-w-[90vw] max-h-[85vh] p-2 bg-card/40 border border-border/40 rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={activeProject.images[lightbox.index]}
              alt={activeProject.title}
              className="max-h-[80vh] rounded-xl object-contain shadow-inner"
            />
          </div>
        </div>
      )}
    </section>
  );
};