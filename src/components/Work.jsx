import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers, CheckCircle2, ChevronLeft, ChevronRight, X, Construction } from "lucide-react";

const projects = [
  {
    id: "tagmycar",
    title: "TagMyCar",
    status: "development", // Added developmental state mapping
    liveUrl: "https://tagmycar-9ndc.vercel.app/",
    tagline: "Automotive Marketplace & Physical-to-Digital Sales Engine",
    description: "A hybrid automotive marketplace bridging physical environments with online listings. The platform generates dynamic QR codes for vehicles, allowing passing buyers to instantly view comprehensive spec sheets, pricing, and history while listing the car simultaneously on a centralized public marketplace.",
    bulletPoints: [
      "Instant physical-to-digital lead generation via custom QR indexing",
      "Centralized peer-to-peer automotive marketplace",
      "Real-time listing management and fluid consumer dashboards"
    ],
    images: [
      "/tagmycar.png"
    ]
  },
  {
    id: "sitetailor",
    title: "SiteTailor",
    status: "production",
    liveUrl: "https://bwk-mq43.vercel.app/",
    tagline: "Bespoke Web Development & Managed Digital Solutions",
    description: "A modern digital agency model delivering custom web architecture, complete digital transformations, and high-performance brand redesigns. Features an integrated recurring subscription framework providing businesses with dedicated monthly structural updates and continuous optimization.",
    bulletPoints: [
      "End-to-end frontend and backend corporate web tailoring",
      "Fixed-rate monthly maintenance and priority iteration pipelines",
      "Optimized performance scaling for localized and enterprise brands"
    ],
    images: [
      "/sitetailor.png"
    ]
  },
  {
    id: "homehelp",
    title: "HomeHelp",
    status: "development", // Added developmental state mapping
    liveUrl: "https://homehelp.vercel.app/",
    tagline: "On-Demand Hyperlocal Task Marketplace",
    description: "A two-sided freelance service marketplace connecting residential property clients with flexible workforce options. The engine pairs everyday home tasks with verified local students seeking part-time income or certified tradespeople looking to capture secondary off-hour contract pipelines.",
    bulletPoints: [
      "Diverse fulfillment tags: Furniture Assembly, Deep Cleaning, and Landscaping",
      "Asymmetric marketplace mechanics balancing standard rates with trade experts",
      "Responsive service booking portals built for real-time customer dispatch"
    ],
    images: [
      "/homehelp.png"
    ]
  }
];

export const WorkSection = () => {
  const [imageIndices, setImageIndices] = useState({
    tagmycar: 0,
    sitetailor: 0,
    homehelp: 0,
  });

  // Lightbox view states
  const [lightboxImage, setLightboxImage] = useState(null);

  const handleImageSelect = (projectId, index) => {
    setImageIndices((prev) => ({ ...prev, [projectId]: index }));
  };

  const handlePrevSlide = (e, project) => {
    e.stopPropagation(); // Prevents triggering the lightbox on button click
    const currentIndex = imageIndices[project.id] || 0;
    const nextIndex = currentIndex === 0 ? project.images.length - 1 : currentIndex - 1;
    handleImageSelect(project.id, nextIndex);
  };

  const handleNextSlide = (e, project) => {
    e.stopPropagation(); // Prevents triggering the lightbox on button click
    const currentIndex = imageIndices[project.id] || 0;
    const nextIndex = currentIndex === project.images.length - 1 ? 0 : currentIndex + 1;
    handleImageSelect(project.id, nextIndex);
  };

  return (
    <section id="project" className="py-32 px-4 relative bg-transparent overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="text-left max-w-xl">
            <div className="inline-flex items-center gap-2 text-primary font-mono text-sm tracking-widest uppercase mb-3">
              <Layers className="w-4 h-4" /> Selected Production Output
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Featured <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Projects</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-left max-w-sm text-sm sm:text-base leading-relaxed">
            A meticulous showcase of full-stack web architectures, production deployments, and commercial client systems.
          </p>
        </div>

        {/* Project Deck Layout */}
        <div className="space-y-24">
          {projects.map((project, projectIdx) => {
            const currentImgIndex = imageIndices[project.id] || 0;
            const currentImageUrl = project.images[currentImgIndex];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: projectIdx * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-border/40 pb-20 last:border-0 last:pb-0"
              >
                
                {/* Content Panel */}
                <div className="lg:col-span-5 flex flex-col space-y-5 text-left order-2 lg:order-1">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-bold tracking-tight text-foreground">
                        {project.title}
                      </h3>
                      
                      {/* Dynamic Development Status Badge */}
                      {project.status === "development" && (
                        <span className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-500 dark:text-amber-400 px-2.5 py-0.5 rounded-md text-[11px] font-semibold tracking-wide backdrop-blur-md shadow-xs">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
                          </span>
                          Under Construction
                        </span>
                      )}
                    </div>
                    
                    <p className="text-primary font-medium text-sm mt-1 tracking-wide">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-muted-foreground/90 font-normal text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2.5 pt-2">
                    {project.bulletPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* External Live Trigger */}
                  <div className="pt-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold bg-secondary/80 hover:bg-secondary border border-border px-5 py-2.5 rounded-xl text-foreground hover:text-primary transition-all duration-300 shadow-sm"
                    >
                      Launch Live Application
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Picture Slide Stage Panel */}
                <div className="lg:col-span-7 flex flex-col space-y-3 order-1 lg:order-2 w-full">
                  
                  {/* Active Slide Viewer Frame */}
                  <div 
                    onClick={() => setLightboxImage(currentImageUrl)}
                    className="relative aspect-[16/10] w-full rounded-2xl border border-border/60 bg-card/10 backdrop-blur-sm overflow-hidden group shadow-md cursor-zoom-in"
                  >
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImgIndex}
                        src={currentImageUrl}
                        alt={`${project.title} Interface View ${currentImgIndex + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </AnimatePresence>

                    {/* Left/Right Slide Swipe Toggles */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => handlePrevSlide(e, project)}
                          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-background/80 border border-border/40 text-foreground hover:text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md backdrop-blur-md z-20 hover:scale-105"
                          aria-label="Previous screenshot"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={(e) => handleNextSlide(e, project)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-background/80 border border-border/40 text-foreground hover:text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md backdrop-blur-md z-20 hover:scale-105"
                          aria-label="Next screenshot"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}

                    {/* Subtle Overlay Badge */}
                    <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-md px-3 py-1 rounded-lg border border-border/40 text-[11px] font-mono font-semibold text-muted-foreground shadow-sm z-20">
                      Capture {currentImgIndex + 1} / {project.images.length}
                    </div>
                  </div>

                  {/* Interactive Carousel Pill Tabs */}
                  {project.images.length > 1 && (
                    <div className="flex items-center gap-2 justify-end pt-1">
                      {project.images.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          onClick={() => handleImageSelect(project.id, dotIdx)}
                          className={`h-2.5 rounded-full transition-all duration-300 relative ${
                            currentImgIndex === dotIdx 
                              ? "w-8 bg-primary" 
                              : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                          }`}
                          aria-label={`Go to screenshot slide ${dotIdx + 1}`}
                        >
                          {currentImgIndex === dotIdx && (
                            <motion.span
                              layoutId={`activeDot-${project.id}`}
                              className="absolute inset-0 bg-primary rounded-full"
                              transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                  
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Full-Screen Zoom Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 bg-background/90 backdrop-blur-xl z-50 flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            {/* Close Button Anchor */}
            <button 
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 p-2.5 rounded-xl bg-secondary/80 hover:bg-secondary border border-border text-foreground transition-all duration-200 z-50 hover:scale-105"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Expanded Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-7xl max-h-[85vh] w-full rounded-2xl border border-border/80 overflow-hidden shadow-2xl bg-card"
              onClick={(e) => e.stopPropagation()} // Stop modal dismiss when clicking the image itself
            >
              <img 
                src={lightboxImage} 
                alt="Expanded full screen application preview" 
                className="w-full h-full object-contain max-h-[85vh] mx-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};