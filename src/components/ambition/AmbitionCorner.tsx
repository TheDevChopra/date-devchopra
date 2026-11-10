"use client";

import React from "react";
import { ambitionHighlights } from "@/content/sections";
import { TrendingUp, Award, Rocket, HeartHandshake, ShieldCheck } from "lucide-react";

export default function AmbitionCorner() {
  return (
    <section id="ambition" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="inline-block px-3 py-1 rounded-full bg-butter text-ink text-xs font-semibold uppercase tracking-wider mb-2 border border-amber-300/40">
          Career & Drive
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-3">
          The Ambition Corner
        </h2>
        <p className="text-ink-soft text-sm sm:text-base leading-relaxed">
          Not a corporate résumé. Just proof that I take personal responsibility seriously.
        </p>
      </div>

      {/* Grid of Highlight Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {ambitionHighlights.map((item, idx) => (
          <div
            key={idx}
            className="paper-card p-5 sm:p-6 border hover:border-ink/20 shadow-scrapbook flex flex-col justify-between transition-all"
          >
            <div>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-cocoa mb-1">
                {item.number}
              </div>
              <h3 className="font-bold text-base text-ink mb-2">
                {item.label}
              </h3>
              <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-ink/10 flex items-center gap-1.5 text-[11px] font-semibold text-cocoa/70">
              <ShieldCheck className="w-3.5 h-3.5 text-sage-dark" />
              <span>Verified Fact</span>
            </div>
          </div>
        ))}
      </div>

      {/* Partner Support Callout Banner */}
      <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blush/60 via-cream to-sage/40 border border-rose/30 shadow-sm relative overflow-hidden">
        {/* Corner washi tape */}
        <div className="tape-strip tape-strip-rose -top-2.5 right-10 rotate-3" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-paper flex items-center justify-center flex-shrink-0 border border-rose/30 shadow-sm">
              <HeartHandshake className="w-6 h-6 text-cocoa" />
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-cocoa">
                Relationship Promise
              </span>
              <h3 className="font-serif text-2xl font-bold text-ink mt-0.5">
                In Your Corner, Not In Your Way
              </h3>
              <p className="text-ink-soft text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
                Your ambitions, career goals, or personal creative projects are entirely yours.
                Whether you want to build a Fortune 500 company, write poetry, or pivot into psychology,
                I will be your loudest cheerleader, never a barrier.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-auto flex-shrink-0">
            <div className="p-3 rounded-xl bg-paper border border-ink/10 text-center">
              <p className="font-handwriting text-xl text-ink">
                &ldquo;Zero ego. Pure support.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
