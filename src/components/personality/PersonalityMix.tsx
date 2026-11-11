"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalityCards } from "@/content/sections";
import { HeartHandshake, Sparkles, TrendingUp, Compass, ChevronDown, CheckCircle2, Quote } from "lucide-react";

export default function PersonalityMix() {
  const [expandedId, setExpandedId] = useState<string | null>("romantic");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "HeartHandshake":
        return <HeartHandshake className="w-4 h-4 text-cocoa" />;
      case "Sparkles":
        return <Sparkles className="w-4 h-4 text-cocoa" />;
      case "TrendingUp":
        return <TrendingUp className="w-4 h-4 text-cocoa" />;
      case "Compass":
        return <Compass className="w-4 h-4 text-cocoa" />;
      default:
        return <Sparkles className="w-4 h-4 text-cocoa" />;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="personality" className="py-10 px-4 w-full">
      {/* Section Header */}
      <div className="text-center mb-6">
        <span className="inline-block px-3 py-0.5 rounded-full bg-butter/90 text-ink text-[10px] font-bold uppercase tracking-wider mb-2 border border-amber-200/60">
          The Recipe
        </span>
        <h2 className="font-serif text-2xl font-bold text-ink mb-1.5">
          The Personality Mix
        </h2>
        <p className="text-ink-soft text-xs leading-relaxed max-w-[300px] mx-auto">
          Four distinct ingredients that make up the Dev experience. Tap any card to peek under the hood.
        </p>
      </div>

      {/* Single-Column Mobile Card Stack */}
      <div className="flex flex-col gap-3 w-full">
        {personalityCards.map((card, idx) => {
          const isExpanded = expandedId === card.id;

          return (
            <motion.div
              key={card.id}
              layout
              transition={{ layout: { duration: 0.25, ease: "easeOut" } }}
              className={`paper-card p-4 transition-all duration-200 relative overflow-hidden border ${
                isExpanded ? "ring-2 ring-cocoa/20 shadow-md bg-paper" : "hover:border-ink/20"
              }`}
            >
              {/* Corner Tape strip */}
              {idx % 2 === 0 ? (
                <div className="tape-strip tape-strip-rose -top-2 right-4 rotate-2" />
              ) : (
                <div className="tape-strip tape-strip-sage -top-2 left-4 -rotate-2" />
              )}

              {/* Card Header clickable button (48px+ min height) */}
              <button
                type="button"
                onClick={() => toggleExpand(card.id)}
                className="w-full text-left flex items-start justify-between gap-2.5 cursor-pointer focus:outline-none min-h-[48px]"
                aria-expanded={isExpanded}
                aria-controls={`card-content-${card.id}`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${card.color} border shadow-sm mt-0.5`}>
                    {getIcon(card.icon)}
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cocoa block">
                      {card.tag}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-ink leading-tight mt-0.5">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Expand Indicator */}
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center border border-ink/10 bg-cream flex-shrink-0 transition-transform duration-300 mt-0.5 ${
                    isExpanded ? "rotate-180 bg-blush border-rose/40" : ""
                  }`}
                >
                  <ChevronDown className="w-3.5 h-3.5 text-ink" />
                </div>
              </button>

              {/* Short summary */}
              <p className="text-ink-soft text-xs mt-2 leading-relaxed">
                {card.shortDesc}
              </p>

              {/* Expandable Details Container */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    id={`card-content-${card.id}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    {/* Handwritten Quote banner */}
                    <div className="mt-3 p-2.5 rounded-lg bg-cream border border-ink/10 flex items-start gap-2">
                      <Quote className="w-3.5 h-3.5 text-cocoa flex-shrink-0 mt-0.5" />
                      <p className="font-handwriting text-base text-ink font-medium leading-snug">
                        {card.quote}
                      </p>
                    </div>

                    {/* Bullet Points */}
                    <ul className="mt-3 space-y-1.5 text-xs text-ink-soft">
                      {card.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cocoa flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
