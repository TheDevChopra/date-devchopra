"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  AlertTriangle,
  Lightbulb,
} from "lucide-react";

export default function FlagsAndTerms() {
  const [batSignalActive, setBatSignalActive] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "green" | "red">("all");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-sage-dark" />;
      case "Leaf":
        return <Leaf className="w-5 h-5 text-sage-dark" />;
      case "Clock":
        return <Clock className="w-5 h-5 text-sage-dark" />;
      case "ChefHat":
        return <ChefHat className="w-5 h-5 text-sage-dark" />;
      case "Users":
        return <Users className="w-5 h-5 text-rose" />;
      case "Mic":
        return <Mic className="w-5 h-5 text-rose" />;
      case "Sparkle":
        return <Sparkle className="w-5 h-5 text-rose" />;
      default:
        return <CheckCircle className="w-5 h-5 text-cocoa" />;
    }
  };

  const toggleBatSignal = () => {
    setBatSignalActive(!batSignalActive);
  };

  return (
    <section id="flags" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="inline-block px-3 py-1 rounded-full bg-blush text-ink text-xs font-semibold uppercase tracking-wider mb-2 border border-rose/30">
          Transparency & Disclaimers
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-3">
          Green Flags &amp; &ldquo;Red-ish&rdquo; Flags
        </h2>
        <p className="text-ink-soft text-sm sm:text-base leading-relaxed">
          Zero filters, zero toxic surprises. Full disclosure with healthy self-aware humour.
        </p>

        {/* Tab Filters for Mobile / Quick Navigation */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all border ${
              activeTab === "all"
                ? "bg-ink text-cream border-ink"
                : "bg-paper text-ink border-ink/10 hover:bg-cream"
            }`}
          >
            Show All Flags
          </button>
          <button
            onClick={() => setActiveTab("green")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all border ${
              activeTab === "green"
                ? "bg-sage-dark text-ink font-bold border-sage-dark"
                : "bg-paper text-ink border-ink/10 hover:bg-cream"
            }`}
          >
            Green Flags
          </button>
          <button
            onClick={() => setActiveTab("red")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all border ${
              activeTab === "red"
                ? "bg-rose text-ink font-bold border-rose"
                : "bg-paper text-ink border-ink/10 hover:bg-cream"
            }`}
          >
            Red-ish Flags
          </button>
        </div>
      </div>

      {/* Flags Grid: Two columns on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Left Column: Green Flags */}
        {(activeTab === "all" || activeTab === "green") && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 px-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <h3 className="font-serif text-xl font-bold text-ink">The Green Flags</h3>
              <span className="text-xs text-ink-muted">({greenFlags.length} items)</span>
            </div>

            {greenFlags.map((flag) => (
              <div
                key={flag.id}
                className="paper-card p-4 sm:p-5 border-l-4 border-l-emerald-500 hover:shadow-hover-card transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sage flex items-center justify-center flex-shrink-0 border border-sage-dark/30">
                    {getIcon(flag.icon)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-ink">{flag.label}</h4>
                    <p className="text-xs sm:text-sm text-ink-soft mt-1 leading-relaxed">
                      {flag.description}
                    </p>
                    <div className="mt-2.5 inline-block px-2.5 py-1 rounded-md bg-sage/50 border border-sage-dark/20 text-[11px] font-medium text-cocoa">
                      💡 {flag.punchline}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Right Column: Red-ish Flags */}
        {(activeTab === "all" || activeTab === "red") && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 px-1">
              <span className="w-2.5 h-2.5 rounded-full bg-rose" />
              <h3 className="font-serif text-xl font-bold text-ink">The &ldquo;Red-ish&rdquo; Flags</h3>
              <span className="text-xs text-ink-muted">({redIshFlags.length} self-aware disclaimers)</span>
            </div>

            {redIshFlags.map((flag) => (
              <div
                key={flag.id}
                className="paper-card p-4 sm:p-5 border-l-4 border-l-rose hover:shadow-hover-card transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blush flex items-center justify-center flex-shrink-0 border border-rose/30">
                    {getIcon(flag.icon)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-ink">{flag.label}</h4>
                    <p className="text-xs sm:text-sm text-ink-soft mt-1 leading-relaxed">
                      {flag.description}
                    </p>
                    <div className="mt-2.5 inline-block px-2.5 py-1 rounded-md bg-blush/60 border border-rose/30 text-[11px] font-medium text-cocoa">
                      ⚠️ {flag.punchline}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Dedicated Batman Comic-Panel Card with Easter Egg */}
      <div className="mt-10">
        <motion.div
          layout
          className={`paper-card p-6 sm:p-7 relative overflow-hidden border-2 transition-all duration-300 ${
            batSignalActive
              ? "bg-ink text-cream border-butter shadow-2xl"
              : "bg-paper text-ink border-ink/15 hover:border-ink/30"
          }`}
        >
          {/* Top Tape decoration */}
          <div className="tape-strip -top-3 right-1/2 translate-x-1/2 rotate-1" />

          {/* Bat Signal Beam Animation */}
          {batSignalActive && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.25, scale: 1 }}
              className="absolute -top-10 -right-10 w-80 h-80 bg-butter rounded-full blur-3xl pointer-events-none"
            />
          )}

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 relative z-10">
            <div className="flex items-start gap-4">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 border transition-colors ${
                  batSignalActive
                    ? "bg-butter text-ink border-amber-300 shadow-md"
                    : "bg-ink text-cream border-ink"
                }`}
              >
                <Moon className="w-6 h-6" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-butter-dark">
                    The Batman Disclaimer
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-cream/10 border border-cream/20 text-[10px] font-medium">
                    Self-Aware Nickname
                  </span>
                </div>
                <h3
                  className={`font-serif text-2xl font-bold mt-0.5 ${
                    batSignalActive ? "text-cream" : "text-ink"
                  }`}
                >
                  {batmanCard.label}
                </h3>
              </div>
            </div>

            {/* Bat-Signal Easter Egg Trigger */}
            <button
              onClick={toggleBatSignal}
              className={`px-4 py-2.5 rounded-full text-xs font-semibold cursor-pointer active:scale-95 transition-all shadow-sm flex items-center gap-2 border ${
                batSignalActive
                  ? "bg-butter text-ink border-butter-dark hover:bg-butter-light"
                  : "bg-ink text-cream border-ink hover:bg-ink-soft"
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
              <span>{batSignalActive ? "Bat-Signal: ON (Tap to Dim)" : "Tap for Bat-Signal"}</span>
            </button>
          </div>

          {/* Batman Description */}
          <div className="mt-4 pt-4 border-t border-ink/10 relative z-10">
            <p
              className={`text-sm sm:text-base leading-relaxed ${
                batSignalActive ? "text-cream/90" : "text-ink-soft"
              }`}
            >
              {batmanCard.description}
            </p>

            {/* Core Values Guarantee */}
            <div
              className={`mt-3 p-3 rounded-xl border flex items-start gap-2.5 ${
                batSignalActive
                  ? "bg-cream/10 border-cream/20 text-cream/90"
                  : "bg-cream border-ink/10 text-ink"
              }`}
            >
              <Lightbulb className="w-4 h-4 text-butter flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-medium leading-relaxed">
                <strong className="underline decoration-butter decoration-2 underline-offset-2">
                  The Golden Rule:
                </strong>{" "}
                Care does not mean control. Trust, autonomy, personal space, and independent choices
                are 100% sacred. No superhero surveillance.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
