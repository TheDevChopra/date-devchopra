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
        return <HeartHandshake className="w-5 h-5 text-cocoa" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-cocoa" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-cocoa" />;
      case "Compass":
        return <Compass className="w-5 h-5 text-cocoa" />;
      default:
        return <Sparkles className="w-5 h-5 text-cocoa" />;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="personality" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="inline-block px-3 py-1 rounded-full bg-butter/80 text-ink text-xs font-semibold uppercase tracking-wider mb-2 border border-amber-200/50">
          The Recipe
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-3">
          The Personality Mix
        </h2>
        <p className="text-ink-soft text-sm sm:text-base leading-relaxed">
          Four distinct ingredients that make up the Dev experience. Tap any card to peek under the hood.
        </p>
      </div>

      {/* 4 Cards Grid: 1 col on mobile, 2 col on tablet/desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {personalityCards.map((card, idx) => {
          const isExpanded = expandedId === card.id;

          return (
            <motion.div
              key={card.id}
              layout
              transition={{ layout: { duration: 0.3, ease: "easeOut" } }}
              className={`paper-card p-5 sm:p-6 transition-all duration-300 relative overflow-hidden border ${
                isExpanded ? "ring-2 ring-cocoa/20 shadow-hover-card" : "hover:border-ink/20"
              }`}
            >
              {/* Corner Tape strip on odd cards */}
              {idx % 2 === 0 ? (
                <div className="tape-strip tape-strip-rose -top-2.5 right-6 rotate-2" />
              ) : (
                <div className="tape-strip tape-strip-sage -top-2.5 left-6 -rotate-2" />
              )}

              {/* Card Header clickable button */}
              <button
                type="button"
                onClick={() => toggleExpand(card.id)}
                className="w-full text-left flex items-start justify-between gap-3 cursor-pointer group focus:outline-none"
                aria-expanded={isExpanded}
                aria-controls={`card-content-${card.id}`}
              >
                <div className="flex items-start gap-3.5">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 ${card.color} border shadow-sm`}>
                    {getIcon(card.icon)}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-cocoa">
                        {card.tag}
                      </span>
                      {card.badge && (
                        <span className="px-2 py-0.5 rounded-full bg-cream border border-ink/10 text-[10px] font-medium text-ink-muted">
                          {card.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink mt-0.5 group-hover:text-cocoa transition-colors">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Expand Indicator */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border border-ink/10 bg-cream flex-shrink-0 transition-transform duration-300 ${
                    isExpanded ? "rotate-180 bg-blush border-rose/40" : "group-hover:bg-cream"
                  }`}
                >
                  <ChevronDown className="w-4 h-4 text-ink" />
                </div>
              </button>

              {/* Short summary always visible */}
              <p className="text-ink-soft text-sm sm:text-base mt-3 leading-relaxed">
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
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {/* Handwritten Quote banner */}
                    <div className="mt-4 p-3 rounded-xl bg-cream border border-ink/10 flex items-start gap-2.5">
                      <Quote className="w-4 h-4 text-cocoa flex-shrink-0 mt-0.5" />
                      <p className="font-handwriting text-base sm:text-lg text-ink font-medium leading-snug">
                        {card.quote}
                      </p>
                    </div>

                    {/* Bullet Points */}
                    <ul className="mt-4 space-y-2 text-xs sm:text-sm text-ink-soft">
                      {card.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-cocoa flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{detail}</span>
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
