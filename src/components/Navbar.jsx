const cn = (...classes) => classes.filter(Boolean).join(" ");
import { Moon, Sun, ArrowRight, Github } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home",     href: "#hero"    },
  { name: "Projects", href: "#project" },
  { name: "About",    href: "#about"   },
  { name: "Skills",   href: "#skills"  },
  { name: "GitHub",   href: "#github"  },
  { name: "Contact",  href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled]   = useState(false);
  const [isMenuOpen, setIsMenuOpen]   = useState(false);
  const [isDarkMode, setIsDarkMode]   = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      if (!stored) localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
            : "py-4 bg-gradient-to-b from-background/80 to-transparent"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#hero"
            className="text-base font-bold tracking-tight flex items-center gap-0.5"
          >
            <span className="text-foreground">Khalid</span>
            <span className="text-primary">.dev</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 px-3 py-1.5 rounded-lg transition-all duration-150"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-2">
            <div className="w-px h-4 bg-border/50" />
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-border/40 hover:bg-secondary/60 transition"
              aria-label="Toggle theme"
            >
              {isDarkMode
                ? <Sun className="w-3.5 h-3.5 text-yellow-400" />
                : <Moon className="w-3.5 h-3.5 text-blue-400" />}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-border/40 bg-secondary/20 hover:bg-secondary/60 transition"
              aria-label="Toggle theme"
            >
              {isDarkMode
                ? <Sun className="w-3.5 h-3.5 text-yellow-400" />
                : <Moon className="w-3.5 h-3.5 text-blue-400" />}
            </button>

            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-border/40 bg-secondary/20 hover:bg-secondary/60 transition"
              aria-label="Toggle menu"
            >
              <span className="relative flex flex-col gap-[5px] w-4">
                <span className={cn("h-px bg-foreground transition-all duration-300 origin-center",
                  isMenuOpen ? "rotate-45 translate-y-[7px]" : "")} />
                <span className={cn("h-px bg-foreground transition-all duration-300",
                  isMenuOpen ? "opacity-0 scale-x-0" : "")} />
                <span className={cn("h-px bg-foreground transition-all duration-300 origin-center",
                  isMenuOpen ? "-rotate-45 -translate-y-[7px]" : "")} />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/60 backdrop-blur-md"
          onClick={closeMenu}
        />

        {/* Slide-in panel */}
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-72 bg-card border-l border-border flex flex-col transition-transform duration-300",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-border/50">
            <span className="text-sm font-bold tracking-tight">
              Khalid<span className="text-primary">.dev</span>
            </span>
            <button
              onClick={closeMenu}
              className="w-7 h-7 flex items-center justify-center rounded-full border border-border/50 hover:bg-secondary/60 transition text-muted-foreground"
              aria-label="Close menu"
            >
              <span className="text-xs">✕</span>
            </button>
          </div>

          {/* Nav items */}
          <nav className="flex flex-col gap-0.5 p-3 flex-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all"
              >
                {item.name}
                <ArrowRight className="w-3 h-3 text-muted-foreground/30" />
              </a>
            ))}
          </nav>

          {/* Panel footer */}
          <div className="p-3 border-t border-border/50 flex gap-2">
            <a
              href="https://github.com/Khalid1170"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-border/50 text-xs font-medium text-muted-foreground hover:bg-secondary/50 transition"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>
            <button
              onClick={() => { toggleTheme(); }}
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-border/50 text-xs font-medium text-muted-foreground hover:bg-secondary/50 transition"
            >
              {isDarkMode
                ? <><Sun className="w-3.5 h-3.5 text-yellow-400" /> Light</>
                : <><Moon className="w-3.5 h-3.5 text-blue-400" /> Dark</>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};