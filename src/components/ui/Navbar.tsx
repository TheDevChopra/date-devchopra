"use client";

import React, { useState, useEffect } from "react";
import { Heart, Sparkles, Coffee, ArrowUp } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);

      const sections = ["hero", "personality", "playlist", "flags", "timeline", "ambition", "scrapbook", "quiz", "closing"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 w-[92%] max-w-xl pointer-events-none ${
        scrolled ? "opacity-100 translate-y-0" : "opacity-90"
      }`}
    >
      <div className="pointer-events-auto flex items-center justify-between px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-cream/90 backdrop-blur-md border border-rose/30 shadow-scrapbook text-xs font-medium text-ink">
        {/* Brand / Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-1.5 font-serif font-bold text-sm sm:text-base text-ink hover:text-cocoa transition-colors"
          aria-label="Scroll to top"
        >
          <span className="w-2 h-2 rounded-full bg-rose inline-block" />
          <span>Dev Chopra</span>
        </button>

        {/* Quick Nav Links (hidden on tiny screens, icon on mobile) */}
        <div className="hidden sm:flex items-center gap-1 text-[11px] text-ink-soft">
          <button
            onClick={() => scrollTo("personality")}
            className={`px-2.5 py-1 rounded-full transition-all ${
              activeSection === "personality" ? "bg-blush text-ink font-semibold" : "hover:text-ink"
            }`}
          >
            Vibe
          </button>
          <button
            onClick={() => scrollTo("playlist")}
            className={`px-2.5 py-1 rounded-full transition-all ${
              activeSection === "playlist" ? "bg-powder text-ink font-semibold" : "hover:text-ink"
            }`}
          >
            Music
          </button>
          <button
            onClick={() => scrollTo("timeline")}
            className={`px-2.5 py-1 rounded-full transition-all ${
              activeSection === "timeline" ? "bg-sage text-ink font-semibold" : "hover:text-ink"
            }`}
          >
            Date.exe
          </button>
          <button
            onClick={() => scrollTo("scrapbook")}
            className={`px-2.5 py-1 rounded-full transition-all ${
              activeSection === "scrapbook" ? "bg-butter text-ink font-semibold" : "hover:text-ink"
            }`}
          >
            Photos
          </button>
          <button
            onClick={() => scrollTo("quiz")}
            className={`px-2.5 py-1 rounded-full transition-all ${
              activeSection === "quiz" ? "bg-rose-light text-ink font-semibold" : "hover:text-ink"
            }`}
          >
            Quiz
          </button>
        </div>

        {/* Action Button */}
        <button
          onClick={() => scrollTo("closing")}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ink text-cream hover:bg-ink-soft active:scale-95 transition-all text-xs font-medium cursor-pointer shadow-sm"
        >
          <Coffee className="w-3.5 h-3.5 text-butter" />
          <span>Coffee?</span>
        </button>
      </div>
    </nav>
  );
}
