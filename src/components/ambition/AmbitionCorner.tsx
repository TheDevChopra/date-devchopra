"use client";

import React from "react";
import { ambitionHighlights } from "@/content/sections";
import { HeartHandshake, ShieldCheck } from "lucide-react";

export default function AmbitionCorner() {
  return (
    <section id="ambition" className="py-10 px-4 w-full">
      {/* Section Header */}
      <div className="text-center mb-6">
        <span className="inline-block px-3 py-0.5 rounded-full bg-butter text-ink text-[10px] font-bold uppercase tracking-wider mb-2 border border-amber-300/40">
          Career &amp; Drive
        </span>
        <h2 className="font-serif text-2xl font-bold text-ink mb-1.5">
          The Ambition Corner
        </h2>
        <p className="text-ink-soft text-xs leading-relaxed max-w-[300px] mx-auto">
          Not a corporate résumé. Just proof that I take personal responsibility seriously.
        </p>
      </div>

      {/* 2x2 Mobile Grid */}
      <div className="grid grid-cols-2 gap-2.5 w-full mb-4">
        {ambitionHighlights.map((item, idx) => (
          <div
            key={idx}
            className="paper-card p-3 border shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="font-serif text-2xl font-bold text-cocoa leading-tight mb-0.5">
                {item.number}
              </div>
              <h3 className="font-bold text-xs text-ink mb-1">
                {item.label}
              </h3>
              <p className="text-[11px] text-ink-soft leading-snug">
                {item.desc}
              </p>
            </div>

            <div className="mt-2 pt-1.5 border-t border-ink/10 flex items-center gap-1 text-[9px] font-semibold text-cocoa/70">
              <ShieldCheck className="w-3 h-3 text-sage-dark" />
              <span>Verified Fact</span>
            </div>
          </div>
        ))}
      </div>

      {/* Partner Support Callout Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-blush/60 via-cream to-sage/40 border border-rose/30 shadow-sm relative overflow-hidden w-full">
        {/* Corner washi tape */}
        <div className="tape-strip tape-strip-rose -top-2 right-6 rotate-2" />

        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-paper flex items-center justify-center flex-shrink-0 border border-rose/30 shadow-sm mt-0.5">
            <HeartHandshake className="w-5 h-5 text-cocoa" />
          </div>

          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-cocoa block">
              Relationship Promise
            </span>
            <h3 className="font-serif text-lg font-bold text-ink leading-tight mt-0.5">
              In Your Corner, Not In Your Way
            </h3>
            <p className="text-ink-soft text-xs mt-1.5 leading-relaxed">
              Your ambitions and career goals are entirely yours. Whether you want to build a company or pursue art, I will be your loudest cheerleader, never a barrier.
            </p>
            <p className="font-handwriting text-base text-ink mt-2">
              &ldquo;Zero ego. Pure support.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
