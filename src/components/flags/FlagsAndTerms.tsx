"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { greenFlags, redIshFlags, batmanCard } from "@/content/sections";
import {
  ShieldCheck,
  Leaf,
  Clock,
  ChefHat,
  Users,
  Mic,
  Sparkle,
  Moon,
  CheckCircle,
  Lightbulb,
} from "lucide-react";

export default function FlagsAndTerms() {
  const [batSignalActive, setBatSignalActive] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "green" | "red">("all");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-4 h-4 text-emerald-700" />;
      case "Leaf":
        return <Leaf className="w-4 h-4 text-emerald-700" />;
      case "Clock":
        return <Clock className="w-4 h-4 text-emerald-700" />;
      case "ChefHat":
        return <ChefHat className="w-4 h-4 text-emerald-700" />;
      case "Users":
        return <Users className="w-4 h-4 text-rose" />;
      case "Mic":
        return <Mic className="w-4 h-4 text-rose" />;
      case "Sparkle":
        return <Sparkle className="w-4 h-4 text-rose" />;
      default:
        return <CheckCircle className="w-4 h-4 text-cocoa" />;
    }
  };

  const toggleBatSignal = () => {
    setBatSignalActive(!batSignalActive);
  };

  return (
    <section id="flags" className="py-10 px-4 w-full">
      {/* Section Header */}
      <div className="text-center mb-6">
        <span className="inline-block px-3 py-0.5 rounded-full bg-blush text-ink text-[10px] font-bold uppercase tracking-wider mb-2 border border-rose/30">
          Transparency &amp; Disclaimers
        </span>
        <h2 className="font-serif text-2xl font-bold text-ink mb-1.5">
          Green &amp; &ldquo;Red-ish&rdquo; Flags
        </h2>
        <p className="text-ink-soft text-xs leading-relaxed max-w-[300px] mx-auto">
          Zero filters, zero toxic baggage. Full disclosure with healthy self-aware humour.
        </p>

        {/* Tab Filters */}
        <div className="flex items-center justify-center gap-1.5 mt-4">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all border min-h-[36px] ${
              activeTab === "all"
                ? "bg-ink text-cream border-ink"
                : "bg-paper text-ink border-ink/10"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab("green")}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all border min-h-[36px] ${
              activeTab === "green"
                ? "bg-emerald-600 text-cream border-emerald-600"
                : "bg-paper text-ink border-ink/10"
            }`}
          >
            Green Flags
          </button>
          <button
            onClick={() => setActiveTab("red")}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all border min-h-[36px] ${
              activeTab === "red"
                ? "bg-rose text-ink font-bold border-rose"
                : "bg-paper text-ink border-ink/10"
            }`}
          >
            Red-ish Flags
          </button>
        </div>
      </div>

      {/* Single-Column Card Feed */}
      <div className="flex flex-col gap-3 w-full">
        {/* Green Flags */}
        {(activeTab === "all" || activeTab === "green") &&
          greenFlags.map((flag) => (
            <div
              key={flag.id}
              className="paper-card p-3.5 border-l-4 border-l-emerald-500 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 border border-emerald-200 mt-0.5">
                  {getIcon(flag.icon)}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm text-ink">{flag.label}</h3>
                  <p className="text-xs text-ink-soft mt-0.5 leading-relaxed">
                    {flag.description}
                  </p>
                  <div className="mt-2 inline-block px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-[10px] font-medium text-emerald-900">
                    💡 {flag.punchline}
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* Red-ish Flags */}
        {(activeTab === "all" || activeTab === "red") &&
          redIshFlags.map((flag) => (
            <div
              key={flag.id}
              className="paper-card p-3.5 border-l-4 border-l-rose shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blush flex items-center justify-center flex-shrink-0 border border-rose/30 mt-0.5">
                  {getIcon(flag.icon)}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm text-ink">{flag.label}</h3>
                  <p className="text-xs text-ink-soft mt-0.5 leading-relaxed">
                    {flag.description}
                  </p>
                  <div className="mt-2 inline-block px-2 py-0.5 rounded bg-blush/60 border border-rose/30 text-[10px] font-medium text-cocoa">
                    ⚠️ {flag.punchline}
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* Dedicated Batman Card */}
        <div className="mt-2">
          <motion.div
            layout
            className={`paper-card p-4 relative overflow-hidden border-2 transition-all duration-300 ${
              batSignalActive
                ? "bg-ink text-cream border-butter shadow-xl"
                : "bg-paper text-ink border-ink/15"
            }`}
          >
            {/* Bat-Signal Glow */}
            {batSignalActive && (
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-butter/30 rounded-full blur-2xl pointer-events-none" />
            )}

            <div className="flex items-center justify-between gap-3 relative z-10 mb-2">
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 border ${
                    batSignalActive
                      ? "bg-butter text-ink border-amber-300 shadow-sm"
                      : "bg-ink text-cream border-ink"
                  }`}
                >
                  <Moon className="w-4 h-4" />
                </div>

                <div>
                  <span className="text-[9px] uppercase tracking-wider font-bold text-butter-dark block">
                    The Batman Quirk
                  </span>
                  <h3
                    className={`font-serif text-lg font-bold leading-tight ${
                      batSignalActive ? "text-cream" : "text-ink"
                    }`}
                  >
                    {batmanCard.label}
                  </h3>
                </div>
              </div>

              {/* Bat-Signal Toggle Button */}
              <button
                onClick={toggleBatSignal}
                className={`px-3 py-1.5 rounded-full text-[11px] font-bold cursor-pointer active:scale-95 transition-all shadow-sm flex items-center gap-1.5 border min-h-[36px] ${
                  batSignalActive
                    ? "bg-butter text-ink border-butter-dark"
                    : "bg-ink text-cream border-ink"
                }`}
              >
                <Moon className="w-3 h-3" />
                <span>{batSignalActive ? "Dim" : "Signal"}</span>
              </button>
            </div>

            <p
              className={`text-xs leading-relaxed relative z-10 ${
                batSignalActive ? "text-cream/90" : "text-ink-soft"
              }`}
            >
              {batmanCard.description}
            </p>

            <div
              className={`mt-2.5 p-2.5 rounded-xl border flex items-start gap-2 text-xs relative z-10 ${
                batSignalActive
                  ? "bg-cream/10 border-cream/20 text-cream/90"
                  : "bg-cream border-ink/10 text-ink"
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5 text-butter flex-shrink-0 mt-0.5" />
              <p className="text-[11px] leading-relaxed">
                <strong>Golden Rule:</strong> Care does not mean control. Trust, autonomy, and independence are 100% sacred.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
