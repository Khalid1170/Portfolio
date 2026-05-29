import { cn } from "@/lib/utils";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#project" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sync scroll positioning state
  useEffect(() => {
    const handleScroll = () => {
      // FIX: Changed from window.screenY to window.scrollY to accurately target page coordinates
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync systemic theme context configurations
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <nav
      className={cn(
        // FIX: Replaced md:fixed with universal fixed so mobile navigation handles fixed tracking points smoothly
        "fixed top-0 w-full z-40 transition-all duration-300 left-0 right-0",
        isScrolled 
          ? "py-3 bg-background/80 backdrop-blur-md border-b border-border/40 shadow-xs" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* Brand Architecture Link Logo */}
        <a
          className="text-xl font-bold text-primary flex items-center z-50"
          href="#hero"
        >
          <span className="relative">
            <span className="text-foreground">Khalid</span> Portfolio
          </span>
        </a>

        {/* Desktop Interface Layout Controls */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Core Toggle Module */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-secondary/20 hover:bg-secondary border border-border/40 text-muted-foreground hover:text-foreground transition-all duration-200"
            aria-label="Toggle structural theme palette"
          >
            {isDarkMode ? (
              <Sun className="h-4 w-4 text-yellow-400" />
            ) : (
              <Moon className="h-4 w-4 text-blue-500" />
            )}
          </button>
        </div>

        {/* Mobile Interface Trigger Menu Mechanics */}
        <div className="flex items-center gap-4 md:hidden z-50">
          {/* Quick theme action access for fast mobile toggle interaction */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-secondary/30 text-muted-foreground"
            aria-label="Toggle mobile theme palette"
          >
            {isDarkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-blue-500" />}
          </button>

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground focus:outline-hidden"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Interface Slide-out Fullscreen Dropdown Overlay Panel */}
        <div
          className={cn(
            // FIX: Repaired backdrop-blur spelling mistake from original script framework
            "fixed inset-0 bg-background/98 backdrop-blur-lg z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none -translate-y-4"
          )}
        >
          <div className="flex flex-col space-y-8 text-center text-2xl font-semibold tracking-tight">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

      </div>
    </nav>
  );
};