"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timelineSteps } from "@/content/sections";
import { TimelineStep } from "@/types";
import {
  Car,
  MapPin,
  Footprints,
  Coffee,
  Music,
  Heart,
  Sparkles,
  Clock,
  ChevronDown,
  Gift,
} from "lucide-react";

export default function DateTimeline() {
  const [revealedEggs, setRevealedEggs] = useState<Record<number, boolean>>({});

  const toggleEasterEgg = (stepNumber: number) => {
    setRevealedEggs((prev) => ({
      ...prev,
      [stepNumber]: !prev[stepNumber],
    }));
  };

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "Car":
        return <Car className="w-5 h-5 text-cocoa" />;
      case "MapPin":
        return <MapPin className="w-5 h-5 text-cocoa" />;
      case "Footprints":
        return <Footprints className="w-5 h-5 text-cocoa" />;
      case "Coffee":
        return <Coffee className="w-5 h-5 text-cocoa" />;
      case "Music":
        return <Music className="w-5 h-5 text-cocoa" />;
      case "Heart":
        return <Heart className="w-5 h-5 text-rose fill-rose/20" />;
      default:
        return <Sparkles className="w-5 h-5 text-cocoa" />;
    }
  };

  return (
    <section id="timeline" className="py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-14">
        <span className="inline-block px-3 py-1 rounded-full bg-sage text-ink text-xs font-semibold uppercase tracking-wider mb-2 border border-sage-dark/30">
          Hypothetical Blueprint
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-3">
          Date.exe
        </h2>
        <p className="text-ink-soft text-sm sm:text-base leading-relaxed">
          A low-pressure, high-chemistry plan with an unreasonable number of little surprises.
          (100% customizable and mutually comfortable, of course).
        </p>
      </div>

      {/* Vertical Interactive Timeline */}
      <div className="relative">
        {/* Central Connecting Line */}
        <div className="absolute left-6 sm:left-1/2 top-4 bottom-8 -translate-x-1/2 w-0.5 bg-gradient-to-b from-rose via-butter to-sage" />

        <div className="space-y-8 sm:space-y-12">
          {timelineSteps.map((step, idx) => {
            const isEggRevealed = revealedEggs[step.stepNumber];
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? "sm:flex-row-reverse" : ""
                } gap-6 sm:gap-12`}
              >
                {/* Timeline Center Node Badge */}
                <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-2xl bg-cream border-2 border-cocoa shadow-md z-20">
                  {getStepIcon(step.icon)}
                </div>

                {/* Content Card (Left or Right on desktop, offset on mobile) */}
                <div className="ml-14 sm:ml-0 sm:w-[calc(50%-2.5rem)] w-full">
                  <div className="paper-card p-5 sm:p-6 relative border hover:border-ink/20 shadow-scrapbook transition-all">
                    {/* Step Number Tag & Time */}
                    <div className="flex items-center justify-between gap-2 border-b border-ink/10 pb-3 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-butter text-[11px] font-bold text-ink uppercase tracking-wider">
                        Phase 0{step.stepNumber}
                      </span>
                      {step.timeEstimate && (
                        <div className="flex items-center gap-1 text-[11px] font-medium text-cocoa">
                          <Clock className="w-3 h-3" />
                          <span>{step.timeEstimate}</span>
                        </div>
                      )}
                    </div>

                    {/* Step Title & Location */}
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">
                      {step.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-cocoa/80 mt-1 mb-2.5">
                      <MapPin className="w-3.5 h-3.5 text-rose" />
                      <span>{step.location}</span>
                    </div>

                    {/* Description */}
                    <p className="text-ink-soft text-xs sm:text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Vibe Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] uppercase font-bold text-ink-muted">Vibe:</span>
                      <span className="text-xs font-medium text-ink bg-cream px-2 py-0.5 rounded border border-ink/10">
                        {step.vibe}
                      </span>
                    </div>

                    {/* Interactive Surprise / Easter Egg Reveal Button */}
                    <div className="pt-3 border-t border-ink/10">
                      <button
                        onClick={() => toggleEasterEgg(step.stepNumber)}
                        className="w-full flex items-center justify-between gap-2 py-1.5 text-xs font-medium text-cocoa hover:text-ink transition-colors cursor-pointer"
                        aria-expanded={isEggRevealed}
                      >
                        <span className="flex items-center gap-1.5">
                          <Gift className="w-3.5 h-3.5 text-rose" />
                          <span>{isEggRevealed ? "Hide little surprise" : "Peek little surprise"}</span>
                        </span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform ${
                            isEggRevealed ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isEggRevealed && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden mt-2"
                          >
                            <div className="p-2.5 rounded-lg bg-blush/60 border border-rose/30 text-xs text-ink leading-snug">
                              <p className="font-handwriting text-base text-ink mb-1">
                                ✨ {step.surpriseHint}
                              </p>
                              <p className="text-[11px] text-cocoa font-medium">
                                ({step.easterEggText})
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Empty balancing spacer for alternating layout on desktop */}
                <div className="hidden sm:block sm:w-[calc(50%-2.5rem)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
