import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <nav className="hidden md:flex gap-6">
            <a
              href="#about"
              className="text-sm font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all"
              data-testid="link-nav-about"
            >
              About
            </a>
            <a
              href="#publications"
              className="text-sm font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all"
              data-testid="link-nav-publications"
            >
              Publications
            </a>
            <a
              href="#writing"
              className="text-sm font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all"
              data-testid="link-nav-writing"
            >
              Writing
            </a>
            <a
              href="#cv"
              className="text-sm font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all"
              data-testid="link-nav-cv"
            >
              CV
            </a>
          </nav>

          <div className="md:hidden" />

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
