"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, ArrowDown, Volume2, VolumeX } from "lucide-react";
import FallingPetals from "./FallingPetals";

interface FlowerShowerProps {
  onEnter: () => void;
  isEntered: boolean;
}

export default function FlowerShower({ onEnter, isEntered }: FlowerShowerProps) {
  const [skipHovered, setSkipHovered] = useState(false);

  // If already entered, don't show the entrance overlay
  if (isEntered) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        key="entrance-overlay"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-between overflow-hidden bg-gradient-to-b from-blush via-cream to-cream px-6 py-10 sm:py-16 text-center select-none"
      >
        {/* Animated Petals in background */}
        <FallingPetals count={32} />

        {/* Top bar with subtle branding & Skip button */}
        <header className="relative z-40 w-full max-w-lg flex items-center justify-between text-xs tracking-wider uppercase font-semibold text-cocoa/70">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-rose animate-ping" />
            <span>date.devchopra.life</span>
          </div>

          <button
            onClick={onEnter}
            onMouseEnter={() => setSkipHovered(true)}
            onMouseLeave={() => setSkipHovered(false)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream/80 backdrop-blur-sm border border-rose/30 text-ink hover:bg-white transition-all text-xs font-medium cursor-pointer shadow-sm active:scale-95"
            aria-label="Skip introduction and proceed to main page"
          >
            <span>Skip intro</span>
            <ArrowDown className={`w-3.5 h-3.5 transition-transform ${skipHovered ? "translate-y-0.5" : ""}`} />
          </button>
        </header>

        {/* Central Hero Card */}
        <main className="relative z-40 my-auto flex flex-col items-center max-w-md w-full">
          {/* Playful Floating Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-butter/90 border border-amber-200/60 text-ink text-xs sm:text-sm font-medium shadow-sticker mb-6 transform -rotate-1"
          >
            <Sparkles className="w-4 h-4 text-cocoa animate-wiggle" />
            <span>A very unofficial digital hello</span>
            <Heart className="w-3.5 h-3.5 text-rose fill-rose" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink font-bold leading-[1.15] tracking-tight mb-4"
          >
            Hey, Potential <br />
            <span className="italic font-normal text-cocoa underline decoration-rose decoration-wavy decoration-2 underline-offset-8">
              Future Wife.
            </span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base sm:text-lg text-ink-soft max-w-xs sm:max-w-sm font-normal mb-8 leading-relaxed"
          >
            Well, this is an interesting way to meet, isn&apos;t it?
          </motion.p>

          {/* Enter Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="w-full flex flex-col items-center gap-3"
          >
            <button
              onClick={onEnter}
              className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-ink text-cream hover:bg-ink-soft active:scale-95 transition-all duration-200 shadow-hover-card font-medium text-base sm:text-lg cursor-pointer"
              aria-label="Enter Dev's little universe"
            >
              <span>Enter Dev&apos;s little universe</span>
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-rose text-ink text-xs transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>

            <span className="text-xs text-ink-muted/80 font-handwriting text-base">
              (Takes ~2 minutes • 100% zero pressure)
            </span>
          </motion.div>
        </main>

        {/* Footer subtle details */}
        <footer className="relative z-40 w-full max-w-md flex flex-col items-center gap-1.5 text-center text-xs text-ink-muted">
          <p className="flex items-center gap-1.5">
            <span>Delhi, India</span>
            <span>•</span>
            <span>Hopeless Romantic</span>
            <span>•</span>
            <span>AI & Music Geek</span>
          </p>
          <p className="text-[11px] text-cocoa/60 font-handwriting text-sm">
            &ldquo;The website introduces Dev. The conversation discovers Dev.&rdquo;
          </p>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
}
