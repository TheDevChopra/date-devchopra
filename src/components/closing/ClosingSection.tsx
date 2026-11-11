"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { devProfile } from "@/content/profile";
import {
  Coffee,
  Heart,
  Sparkles,
  ArrowUp,
  Instagram,
  Mail,
  Check,
  X,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function ClosingSection() {
  const [coffeeModalOpen, setCoffeeModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCoffeeClick = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.65 },
        colors: ["#E9A8B0", "#F7E4E5", "#F6E7B8", "#765747", "#DDE8D8"],
      });
    } catch (e) {
      // ignore
    }
    setCoffeeModalOpen(true);
  };

  const handleCopyEmail = () => {
    if (devProfile.contact.emailPlaceholder) {
      navigator.clipboard.writeText(devProfile.contact.emailPlaceholder);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="closing" className="pt-12 pb-16 px-4 w-full relative bg-gradient-to-t from-blush/40 via-cream to-cream">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-rose/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full text-center">
        {/* Decorative Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream border border-rose/30 text-ink text-[10px] font-bold uppercase tracking-wider mb-4 shadow-sm">
          <Heart className="w-3 h-3 text-rose fill-rose" />
          <span>The Next Step</span>
        </div>

        {/* Main Closing Heading */}
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink leading-tight mb-2">
          Anyway, that&apos;s a little about me.
        </h2>

        {/* Supporting Copy */}
        <p className="text-ink-soft text-xs sm:text-sm max-w-[290px] mx-auto mb-2 leading-relaxed">
          &ldquo;The better stories are for an actual conversation.&rdquo;
        </p>

        <p className="text-xs text-cocoa font-medium mb-6">
          If you made it this far, I owe you at least a very good coffee recommendation.
        </p>

        {/* Primary CTA Button (Large, thumb-friendly, min 52px height) */}
        <div className="flex flex-col items-center gap-2.5 w-full">
          <button
            onClick={handleCoffeeClick}
            className="group relative flex items-center justify-center gap-2.5 w-full py-4 px-6 rounded-full bg-ink text-cream hover:bg-ink-soft active:scale-[0.98] transition-all shadow-md font-medium text-base cursor-pointer min-h-[52px]"
            aria-label="Should we get coffee sometime?"
          >
            <Coffee className="w-4 h-4 text-butter animate-wiggle" />
            <span>{devProfile.contact.coffeeCTA}</span>
            <span className="w-6 h-6 rounded-full bg-rose text-ink flex items-center justify-center text-xs font-bold transition-transform group-hover:scale-105">
              ☕
            </span>
          </button>

          <span className="text-xs text-ink-muted font-handwriting text-base">
            (Zero pressure • Friendly conversations welcome)
          </span>
        </div>

        {/* Secondary Contact Action Buttons */}
        <div className="mt-8 pt-6 border-t border-ink/10 flex flex-col gap-2.5 text-xs font-medium text-ink w-full">
          {devProfile.contact.instagramPlaceholder && (
            <a
              href={devProfile.contact.instagramPlaceholder}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-paper border border-ink/10 transition-all shadow-sm active:scale-[0.99] min-h-[44px]"
            >
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-rose" />
                <span>Instagram</span>
              </div>
              <span className="text-cocoa font-bold">@thedevchopra →</span>
            </a>
          )}

          <button
            onClick={handleCopyEmail}
            className="flex items-center justify-between p-3 rounded-xl bg-paper border border-ink/10 transition-all shadow-sm active:scale-[0.99] cursor-pointer min-h-[44px]"
          >
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-cocoa" />
              <span>the.chopra.dev@gmail.com</span>
            </div>
            {copiedEmail ? (
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Copied!
              </span>
            ) : (
              <span className="text-cocoa font-bold">Copy →</span>
            )}
          </button>
        </div>

        {/* Back to top button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-cream border border-ink/10 text-xs font-medium text-ink-soft hover:text-ink transition-colors cursor-pointer min-h-[36px]"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to top</span>
          </button>
        </div>

        {/* Bottom credits */}
        <div className="mt-8 text-[11px] text-ink-muted/80 space-y-1 border-t border-ink/10 pt-4">
          <p>Designed with warm coffee &amp; zero pretense.</p>
          <p>
            Delhi, India • {new Date().getFullYear()} •{" "}
            <span className="font-handwriting text-sm text-cocoa">date.devchopra.life</span>
          </p>
        </div>
      </div>

      {/* Coffee Modal (Mobile Sized) */}
      <AnimatePresence>
        {coffeeModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/75 backdrop-blur-sm p-4"
            onClick={() => setCoffeeModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-paper rounded-2xl max-w-[360px] w-full p-5 border border-rose/30 shadow-2xl relative text-left"
            >
              <button
                onClick={() => setCoffeeModalOpen(false)}
                className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full bg-cream text-ink flex items-center justify-center cursor-pointer min-h-[28px]"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-10 h-10 rounded-xl bg-butter flex items-center justify-center mb-3 border border-amber-300/60 shadow-sm">
                <Coffee className="w-5 h-5 text-cocoa" />
              </div>

              <span className="text-[10px] font-bold uppercase tracking-wider text-cocoa block">
                Official Invitation
              </span>
              <h3 className="font-serif text-xl font-bold text-ink leading-tight mt-0.5 mb-1.5">
                Coffee sounds wonderful.
              </h3>

              <p className="text-xs text-ink-soft leading-relaxed mb-3">
                Whether you prefer a cozy corner in CP, dad&apos;s cafe on Sunday, or hot chocolate on a terrace — I&apos;d love to hear your story.
              </p>

              <div className="p-3 rounded-xl bg-cream border border-ink/10 mb-4 space-y-2 text-xs">
                <p className="font-semibold text-ink flex items-center gap-1.5 text-[11px]">
                  <Sparkles className="w-3.5 h-3.5 text-rose" />
                  <span>Connect directly:</span>
                </p>
                <div className="flex flex-col gap-1.5">
                  <a
                    href="https://instagram.com/thedevchopra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg bg-paper border border-ink/10 transition-colors"
                  >
                    <span>Instagram DM</span>
                    <span className="text-cocoa font-bold">@thedevchopra →</span>
                  </a>
                  <a
                    href="mailto:the.chopra.dev@gmail.com?subject=Hey%20Dev,%20saw%20your%20website"
                    className="flex items-center justify-between p-2 rounded-lg bg-paper border border-ink/10 transition-colors"
                  >
                    <span>Email</span>
                    <span className="text-cocoa font-bold">the.chopra.dev@gmail.com →</span>
                  </a>
                </div>
              </div>

              <p className="text-[11px] text-ink-muted text-center font-handwriting text-base">
                &ldquo;No rush, no expectations. Have a lovely day!&rdquo;
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
