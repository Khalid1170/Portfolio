import { useState, useEffect } from "react";
import {
  ExternalLink,
  Layers,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  X,
  Code2,
} from "lucide-react";

const projects = [
  {
    id: "tagmycar",
    title: "TagMyCar",
    status: "development",
    liveUrl: "https://tagmycar-9ndc.vercel.app/",
    tagline: "Automotive Marketplace & Physical-to-Digital Sales Engine",
    description:
      "A hybrid automotive marketplace bridging physical environments with online listings through an intuitive dashboard and secure transaction flows.",
    bulletPoints: [
      "Instant physical-to-digital lead generation via custom QR indexing",
      "Centralized peer-to-peer automotive marketplace architecture",
      "Real-time listing management and fluid consumer dashboards",
    ],
    images: ["/tagmycar.png"],
  },
  {
    id: "sitetailor",
    title: "SiteTailor",
    status: "production",
    liveUrl: "https://bwk-mq43.vercel.app/",
    tagline: "Bespoke Web Development & Managed Digital Solutions",
    description:
      "A modern digital agency model delivering custom web architecture, hyper-optimized performance metrics, and responsive multi-platform designs.",
    bulletPoints: [
      "End-to-end frontend and backend corporate web tailoring",
      "Fixed-rate monthly maintenance and priority iteration pipelines",
      "Optimized performance scaling for localized and enterprise brands",
    ],
    images: ["/sitetailor.png"],
  },
  {
    id: "homehelp",
    title: "HomeHelp",
    status: "development",
    liveUrl: "https://homehelp.vercel.app/",
    tagline: "On-Demand Hyperlocal Task Marketplace",
    description:
      "A two-sided freelance service marketplace connecting residential clients with fully vetted independent service professionals in real-time.",
    bulletPoints: [
      "Diverse fulfillment tags: Furniture Assembly, Deep Cleaning",
      "Marketplace balancing standard rates with trade experts",
      "Real-time booking and autonomous dispatch system",
    ],
    images: ["/homehelp.png", "/dashboardhh.png", "/inboxhh.png"],
  },
];

export const WorkSection = () => {
  const [activeImage, setActiveImage] = useState({});
  const [lightbox, setLightbox] = useState({
    open: false,
    projectId: null,
    index: 0,
  });

  const activeProject = projects.find((p) => p.id === lightbox.projectId);
  const getIndex = (id) => activeImage[id] || 0;

  const setIndex = (id, index) => {
    setActiveImage((prev) => ({ ...prev, [id]: index }));
  };

  const changeImage = (project, dir, e) => {
    e.stopPropagation();
    const current = getIndex(project.id);
    const max = project.images.length;
    const next = dir === "next" ? (current + 1) % max : (current - 1 + max) % max;
    setIndex(project.id, next);
  };

  const openLightbox = (project, index) => {
    setLightbox({ open: true, projectId: project.id, index });
  };

  const closeLightbox = () => {
    setLightbox({ open: false, projectId: null, index: 0 });
  };

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
    <section id="project" className="py-32 px-4 relative overflow-hidden bg-background text-foreground">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-6 tracking-tight">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              Selected Engineering Output
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Featured <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Projects</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-base leading-relaxed border-l-2 border-border pl-4">
            Production-grade systems, clean architectural patterns, and tailored full-stack builds.
          </p>
        </div>

        {/* PROJECTS CONTAINER */}
        <div className="space-y-32">
          {projects.map((project, i) => {
            const index = getIndex(project.id);
            const image = project.images[index];
            const isEven = i % 2 === 0;

            return (
              <div
                key={project.id}
                className="grid lg:grid-cols-12 gap-12 items-center group relative"
              >
                {/* TEXT CONTENT COLUMN */}
                <div className={`lg:col-span-5 space-y-6 order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-3xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      {project.status === "development" ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                          In Development
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          Production Live
                        </span>
                      )}
                    </div>
                    <p className="text-primary font-medium text-base tracking-wide">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-3 pt-2">
                    {project.bulletPoints.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium text-sm border border-border/60 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
                    >
                      Explore Application 
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </a>
                  </div>
                </div>

                {/* VISUAL / INTERACTIVE MEDIA COLUMN */}
                <div className={`lg:col-span-7 order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative group/media rounded-2xl border bg-secondary/10 backdrop-blur-md p-2 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/30">
                    
                    {/* Browser Mockup Top Bar UI */}
                    <div className="flex items-center justify-between px-3 pb-2 pt-1 border-b border-border/40 mb-2">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-destructive/40" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
                      </div>
                      <div className="bg-background/60 text-[10px] text-muted-foreground px-6 py-0.5 rounded-md border border-border/40 select-none flex items-center gap-1 truncate max-w-[180px]">
                        <Code2 className="w-2.5 h-2.5 shrink-0" /> {project.id}.app
                      </div>
                      <div className="w-12" />
                    </div>

                    {/* Image Stage Container */}
                    <div 
                      onClick={() => openLightbox(project, index)}
                      className="relative overflow-hidden rounded-xl cursor-zoom-in aspect-[16/10] bg-background flex items-center justify-center"
                    >
                      <img
                        src={image}
                        alt={project.title}
                        className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover/media:scale-[1.02]"
                      />

                      {/* Image Carousels Overlay Navigation Controls */}
                      {project.images.length > 1 && (
                        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <button
                            onClick={(e) => changeImage(project, "prev", e)}
                            className="p-2 rounded-full bg-background/80 hover:bg-background backdrop-blur-md border shadow-md text-foreground pointer-events-auto transform transition hover:scale-110 active:scale-95"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={(e) => changeImage(project, "next", e)}
                            className="p-2 rounded-full bg-background/80 hover:bg-background backdrop-blur-md border shadow-md text-foreground pointer-events-auto transform transition hover:scale-110 active:scale-95"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      )}

                      {/* Floating Indicator Dots */}
                      {project.images.length > 1 && (
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 px-2 py-1.5 rounded-full bg-black/40 backdrop-blur-sm">
                          {project.images.map((_, dotIdx) => (
                            <span 
                              key={dotIdx}
                              className={`h-1.5 rounded-full transition-all duration-300 ${dotIdx === index ? "w-4 bg-primary" : "w-1.5 bg-white/40"}`}
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

      {/* FULLSCREEN LIGHTBOX OVERLAY */}
      {lightbox.open && activeProject && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {activeProject.images.length > 1 && (
            <button 
              onClick={(e) => navigateLightbox("prev", e)} 
              className="absolute left-6 p-3 rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-all border border-white/10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          <div className="max-w-[90vw] max-h-[85vh] p-2 relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={activeProject.images[lightbox.index]}
              alt={activeProject.title}
              className="max-w-full max-h-[85vh] rounded-xl object-contain shadow-2xl border border-white/5"
            />
            {activeProject.images.length > 1 && (
              <p className="text-center text-xs text-white/40 mt-4 tracking-wider">
                IMAGE {lightbox.index + 1} OF {activeProject.images.length}
              </p>
            )}
          </div>

          {activeProject.images.length > 1 && (
            <button 
              onClick={(e) => navigateLightbox("next", e)} 
              className="absolute right-6 p-3 rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-all border border-white/10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      )}
    </section>
  );
};