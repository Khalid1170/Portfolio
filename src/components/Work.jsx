import { useState, useEffect } from "react";
import {
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
      "Centralised peer-to-peer automotive web marketplace application",
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
      "A modern digital agency delivering custom web layouts, optimised performance metrics, and responsive multi-platform designs.",
    bulletPoints: [
      "End-to-end frontend and backend corporate web applications",
      "Fixed-rate monthly maintenance and priority feature development",
      "Optimised performance scaling for local and enterprise brands",
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
    setIndex(project.id, dir === "next" ? (current + 1) % max : (current - 1 + max) % max);
  };

  const openLightbox = (project, index) =>
    setLightbox({ open: true, projectId: project.id, index });
  const closeLightbox = () =>
    setLightbox({ open: false, projectId: null, index: 0 });

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
    <section id="project" className="py-28 px-4 bg-background relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 text-[11px] tracking-widest text-muted-foreground uppercase mb-4">
              <Layers className="w-3 h-3" />
              Selected engineering output
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-none">
              Featured{" "}
              <em className="font-normal not-italic text-muted-foreground italic">Projects</em>
            </h2>
          </div>
          <p className="text-muted-foreground text-xs leading-relaxed border-l border-border pl-4 max-w-[240px]">
            Custom web applications, maintainable system design, and optimised full-stack builds.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-4">
          {projects.map((project, i) => {
            const index = getIndex(project.id);
            const image = project.images[index];
            const isEven = i % 2 === 0;
            const numStr = String(i + 1).padStart(2, "0");
            const urlShort = project.liveUrl.replace("https://", "").replace(/\/$/, "");

            return (
              <div
                key={project.id}
                className="grid lg:grid-cols-12 gap-8 items-center p-6 md:p-8 rounded-2xl border border-border/40 bg-card/30 hover:border-border/70 hover:bg-card/50 transition-all duration-300 group"
              >
                {/* Text */}
                <div
                  className={`lg:col-span-5 flex flex-col gap-4 order-2 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  {/* Counter */}
                  <div className="flex items-center gap-3 text-[11px] tracking-widest text-muted-foreground/50">
                    <span>{numStr}</span>
                    <div className="flex-1 h-px bg-border/30" />
                    <span>0{projects.length}</span>
                  </div>

                  {/* Title + badge */}
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                      {project.status === "development" ? (
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200">
                          In development
                        </span>
                      ) : (
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
                          Live
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-medium text-muted-foreground">{project.tagline}</p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                  <ul className="space-y-2">
                    {project.bulletPoints.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 self-start mt-2 px-4 py-2 rounded-lg border border-border/60 text-xs font-medium hover:bg-secondary transition-colors"
                  >
                    Explore application
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Media */}
                <div
                  className={`lg:col-span-7 order-1 relative ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Ghost number */}
                  <span
                    className="absolute -bottom-4 -right-2 text-[90px] font-bold leading-none select-none pointer-events-none text-border/20 transition-colors duration-300"
                    aria-hidden="true"
                  >
                    {numStr}
                  </span>

                  {/* Browser frame */}
                  <div className="relative rounded-xl border border-border/60 overflow-hidden bg-secondary/20">
                    {/* Address bar */}
                    <div className="flex items-center gap-3 px-3 py-2.5 border-b border-border/40 bg-background/50">
                      <div className="flex gap-1.5 shrink-0">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      </div>
                      <div className="flex-1 flex items-center justify-center bg-background/60 border border-border/30 rounded px-3 py-1 max-w-xs mx-auto">
                        <span className="text-[10px] text-muted-foreground truncate">{urlShort}</span>
                      </div>
                      <RefreshCw className="w-3 h-3 text-muted-foreground/40 shrink-0" />
                    </div>

                    {/* Image */}
                    <div
                      className="relative overflow-hidden aspect-[16/10] cursor-zoom-in group/img"
                      onClick={() => openLightbox(project, index)}
                    >
                      <img
                        src={image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-[1.03]"
                      />

                      {project.images.length > 1 && (
                        <div className="absolute inset-0 flex items-center justify-between px-3 opacity-0 group-hover/img:opacity-100 transition-opacity">
                          <button
                            onClick={(e) => changeImage(project, "prev", e)}
                            className="p-1.5 rounded-full bg-background/80 border border-border/50 hover:scale-105 transition"
                            aria-label="Previous"
                          >
                            <ChevronLeft className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={(e) => changeImage(project, "next", e)}
                            className="p-1.5 rounded-full bg-background/80 border border-border/50 hover:scale-105 transition"
                            aria-label="Next"
                          >
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}

                      {project.images.length > 1 && (
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                          {project.images.map((_, dotIdx) => (
                            <span
                              key={dotIdx}
                              className={`h-1.5 rounded-full transition-all ${
                                dotIdx === index ? "w-4 bg-primary" : "w-1.5 bg-white/40"
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

      {/* Lightbox */}
      {lightbox.open && activeProject && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          {activeProject.images.length > 1 && (
            <>
              <button
                className="absolute left-5 p-2 rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition"
                onClick={(e) => navigateLightbox("prev", e)}
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                className="absolute right-5 p-2 rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition"
                onClick={(e) => navigateLightbox("next", e)}
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <div className="max-w-[88vw] max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={activeProject.images[lightbox.index]}
              alt={activeProject.title}
              className="max-h-[85vh] rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};