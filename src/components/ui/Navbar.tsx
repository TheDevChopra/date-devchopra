"use client";

import React, { useState, useEffect } from "react";
import { Coffee } from "lucide-react";
import { getDevAge } from "@/content/profile";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const age = getDevAge();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
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
      className={`fixed top-3 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 w-[92%] max-w-[400px] pointer-events-none ${
        scrolled ? "opacity-100 translate-y-0" : "opacity-95"
      }`}
    >
      <div className="pointer-events-auto flex items-center justify-between px-3.5 py-2 rounded-full bg-cream/95 backdrop-blur-md border border-rose/30 shadow-md text-xs font-medium text-ink">
        {/* Brand / Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-1.5 font-serif font-bold text-sm text-ink hover:text-cocoa transition-colors cursor-pointer"
          aria-label="Scroll to top"
        >
          <span className="w-2 h-2 rounded-full bg-rose inline-block" />
          <span>Dev Chopra</span>
          <span className="text-[10px] font-sans font-medium px-1.5 py-0.5 rounded-full bg-blush text-cocoa">
            {age}
          </span>
        </button>

        {/* Action Button: One-thumb reach */}
        <button
          onClick={() => scrollTo("closing")}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ink text-cream hover:bg-ink-soft active:scale-95 transition-all text-xs font-medium cursor-pointer shadow-sm min-h-[36px]"
          aria-label="Jump to coffee invitation"
        >
          <Coffee className="w-3.5 h-3.5 text-butter" />
          <span>Coffee?</span>
        </button>
      </div>
    </nav>
  );
}
