"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, ArrowDown } from "lucide-react";
import FallingPetals from "./FallingPetals";

interface FlowerShowerProps {
  onEnter: () => void;
  isEntered: boolean;
}

export default function FlowerShower({ onEnter, isEntered }: FlowerShowerProps) {
  if (isEntered) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        key="entrance-overlay"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
        className="fixed inset-0 z-50 flex justify-center bg-[#F0E8DF] select-none"
      >
        {/* Mobile-Frame Screen (Max 430px wide) */}
        <div className="w-full max-w-[430px] min-h-screen bg-gradient-to-b from-blush via-cream to-cream flex flex-col justify-between px-5 py-8 text-center relative overflow-hidden sm:shadow-2xl sm:border-x sm:border-ink/5">
          {/* Animated Petals contained within the mobile frame */}
          <FallingPetals count={24} />

          {/* Top Bar with Branding & Skip Button */}
          <header className="relative z-40 w-full flex items-center justify-between text-[11px] tracking-wider uppercase font-semibold text-cocoa/80 pt-2">
            <div className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-rose animate-pulse" />
              <span>date.devchopra.life</span>
            </div>

            <button
              onClick={onEnter}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-cream/90 backdrop-blur-sm border border-rose/30 text-ink text-[11px] font-medium cursor-pointer shadow-sm active:scale-95 transition-all min-h-[36px]"
              aria-label="Skip introduction and proceed to main page"
            >
              <span>Skip intro</span>
              <ArrowDown className="w-3 h-3 text-cocoa" />
            </button>
          </header>

          {/* Central Mobile Card */}
          <main className="relative z-40 my-auto flex flex-col items-center w-full px-2">
            {/* Playful Floating Badge */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-butter/95 border border-amber-200/80 text-ink text-xs font-semibold shadow-sm mb-5 transform -rotate-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-cocoa animate-wiggle" />
              <span>A very unofficial digital hello</span>
              <Heart className="w-3 h-3 text-rose fill-rose" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
              className="font-serif text-3xl sm:text-4xl text-ink font-bold leading-[1.2] tracking-tight mb-3"
            >
              Hey, Potential <br />
              <span className="italic font-normal text-cocoa underline decoration-rose decoration-wavy decoration-2 underline-offset-4">
                Future Wife.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="text-sm sm:text-base text-ink-soft max-w-[290px] font-normal mb-8 leading-relaxed mx-auto"
            >
              Well, this is an interesting way to meet, isn&apos;t it?
            </motion.p>

            {/* Mobile Thumb Enter Button */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="w-full flex flex-col items-center gap-2.5"
            >
              <button
                onClick={onEnter}
                className="group relative flex items-center justify-center gap-2.5 w-full py-4 px-6 rounded-full bg-ink text-cream hover:bg-ink-soft active:scale-[0.98] transition-all shadow-md font-medium text-base cursor-pointer min-h-[52px]"
                aria-label="Enter Dev's little universe"
              >
                <span>Enter Dev&apos;s little universe</span>
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-rose text-ink text-xs font-bold transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </button>

              <span className="text-xs text-ink-muted/80 font-handwriting text-base">
                (Takes ~2 minutes • 100% zero pressure)
              </span>
            </motion.div>
          </main>

          {/* Footer Details */}
          <footer className="relative z-40 w-full flex flex-col items-center gap-1 text-center pb-2">
            <p className="flex items-center gap-1.5 text-[11px] text-ink-muted font-medium">
              <span>Delhi</span>
              <span>•</span>
              <span>Hopeless Romantic</span>
              <span>•</span>
              <span>AI &amp; Music</span>
            </p>
            <p className="text-[12px] text-cocoa/70 font-handwriting">
              &ldquo;The website introduces Dev. The conversation discovers Dev.&rdquo;
            </p>
          </footer>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
