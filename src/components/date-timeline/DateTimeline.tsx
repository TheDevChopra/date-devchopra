"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timelineSteps } from "@/content/sections";
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
        return <Car className="w-4 h-4 text-cocoa" />;
      case "MapPin":
        return <MapPin className="w-4 h-4 text-cocoa" />;
      case "Footprints":
        return <Footprints className="w-4 h-4 text-cocoa" />;
      case "Coffee":
        return <Coffee className="w-4 h-4 text-cocoa" />;
      case "Music":
        return <Music className="w-4 h-4 text-cocoa" />;
      case "Heart":
        return <Heart className="w-4 h-4 text-rose fill-rose/20" />;
      default:
        return <Sparkles className="w-4 h-4 text-cocoa" />;
    }
  };

  return (
    <section id="timeline" className="py-10 px-4 w-full">
      {/* Section Header */}
      <div className="text-center mb-8">
        <span className="inline-block px-3 py-0.5 rounded-full bg-sage text-ink text-[10px] font-bold uppercase tracking-wider mb-2 border border-sage-dark/30">
          Hypothetical Blueprint
        </span>
        <h2 className="font-serif text-2xl font-bold text-ink mb-1.5">
          Date.exe
        </h2>
        <p className="text-ink-soft text-xs leading-relaxed max-w-[300px] mx-auto">
          A low-pressure, high-chemistry plan with an unreasonable number of little surprises.
        </p>
      </div>

      {/* Clean Mobile Vertical Roadmap */}
      <div className="relative pl-2">
        {/* Continuous Timeline Line */}
        <div className="absolute left-[18px] top-4 bottom-6 w-0.5 bg-gradient-to-b from-rose via-butter to-sage" />

        <div className="space-y-5">
          {timelineSteps.map((step) => {
            const isEggRevealed = revealedEggs[step.stepNumber];

            return (
              <div key={step.stepNumber} className="relative flex items-start">
                {/* Node Circle Badge */}
                <div className="absolute left-0 top-0.5 flex items-center justify-center w-9 h-9 rounded-xl bg-cream border-2 border-cocoa shadow-sm z-10 flex-shrink-0">
                  {getStepIcon(step.icon)}
                </div>

                {/* Content Card */}
                <div className="ml-12 w-[calc(100%-3rem)]">
                  <div className="paper-card p-3.5 relative border shadow-sm">
                    {/* Header: Phase & Time */}
                    <div className="flex items-center justify-between gap-1 pb-2 mb-2 border-b border-ink/10">
                      <span className="px-2 py-0.5 rounded-full bg-butter text-[10px] font-bold text-ink uppercase tracking-wider">
                        0{step.stepNumber}
                      </span>
                      {step.timeEstimate && (
                        <div className="flex items-center gap-1 text-[10px] font-medium text-cocoa">
                          <Clock className="w-3 h-3" />
                          <span>{step.timeEstimate}</span>
                        </div>
                      )}
                    </div>

                    {/* Title & Location */}
                    <h3 className="font-serif text-base font-bold text-ink leading-snug">
                      {step.title}
                    </h3>
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-cocoa/80 mt-0.5 mb-2">
                      <MapPin className="w-3 h-3 text-rose flex-shrink-0" />
                      <span>{step.location}</span>
                    </div>

                    {/* Description */}
                    <p className="text-ink-soft text-xs leading-relaxed mb-2.5">
                      {step.description}
                    </p>

                    {/* Vibe Pill */}
                    <div className="inline-block text-[10px] font-medium text-ink bg-cream px-2 py-0.5 rounded border border-ink/10 mb-2">
                      Vibe: {step.vibe}
                    </div>

                    {/* Interactive Surprise Peek Button */}
                    <div className="pt-2 border-t border-ink/10">
                      <button
                        onClick={() => toggleEasterEgg(step.stepNumber)}
                        className="w-full flex items-center justify-between text-xs font-semibold text-cocoa hover:text-ink transition-colors cursor-pointer min-h-[36px]"
                        aria-expanded={isEggRevealed}
                      >
                        <span className="flex items-center gap-1.5">
                          <Gift className="w-3.5 h-3.5 text-rose" />
                          <span>{isEggRevealed ? "Hide surprise" : "Peek little surprise"}</span>
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
                            className="overflow-hidden mt-1.5"
                          >
                            <div className="p-2 rounded-lg bg-blush/60 border border-rose/30 text-xs text-ink leading-snug">
                              <p className="font-handwriting text-base text-ink mb-0.5">
                                ✨ {step.surpriseHint}
                              </p>
                              <p className="text-[10px] text-cocoa font-medium">
                                ({step.easterEggText})
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
