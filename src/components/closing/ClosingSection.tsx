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
  MessageCircle,
  Copy,
  Check,
  Send,
  X,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function ClosingSection() {
  const [coffeeModalOpen, setCoffeeModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCoffeeClick = () => {
    // Fire celebratory flower confetti
    try {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
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
    <footer id="closing" className="py-20 sm:py-28 px-4 sm:px-6 relative bg-gradient-to-t from-blush/40 via-cream to-cream">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-80 bg-rose/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto text-center">
        {/* Subtle Decorative Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream border border-rose/30 text-ink text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
          <Heart className="w-3.5 h-3.5 text-rose fill-rose" />
          <span>The Next Step</span>
        </div>

        {/* Main Closing Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-tight mb-4">
          Anyway, that&apos;s a little about me.
        </h2>

        {/* Supporting Copy */}
        <p className="text-ink-soft text-base sm:text-lg max-w-lg mx-auto mb-4 leading-relaxed font-normal">
          &ldquo;The better stories are for an actual conversation.&rdquo;
        </p>

        <p className="text-xs sm:text-sm text-cocoa font-medium mb-10">
          If you made it this far, I owe you at least a very good coffee recommendation.
        </p>

        {/* Primary CTA Button */}
        <div className="flex flex-col items-center justify-center gap-4">
          <button
            onClick={handleCoffeeClick}
            className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-ink text-cream hover:bg-ink-soft active:scale-95 transition-all duration-200 shadow-hover-card font-medium text-base sm:text-lg cursor-pointer"
            aria-label="Should we get coffee sometime?"
          >
            <Coffee className="w-5 h-5 text-butter animate-wiggle" />
            <span>{devProfile.contact.coffeeCTA}</span>
            <span className="w-7 h-7 rounded-full bg-rose text-ink flex items-center justify-center text-xs font-bold transition-transform group-hover:scale-110">
              ☕
            </span>
          </button>

          <span className="text-xs text-ink-muted font-handwriting text-base">
            (Zero pressure • Friendly conversations welcome)
          </span>
        </div>

        {/* Secondary Contact Links */}
        <div className="mt-12 pt-8 border-t border-ink/10 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-ink">
          {devProfile.contact.instagramPlaceholder && (
            <a
              href={devProfile.contact.instagramPlaceholder}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-paper hover:bg-cream border border-ink/10 transition-all shadow-sm active:scale-95"
            >
              <Instagram className="w-4 h-4 text-rose" />
              <span>Instagram: @thedevchopra</span>
            </a>
          )}

          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-paper hover:bg-cream border border-ink/10 transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            {copiedEmail ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Email Copied!</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 text-cocoa" />
                <span>the.chopra.dev@gmail.com</span>
              </>
            )}
          </button>
        </div>

        {/* Back to top button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cream hover:bg-paper border border-ink/10 text-xs font-medium text-ink-soft hover:text-ink transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to top</span>
          </button>
        </div>

        {/* Bottom credits & disclaimer */}
        <div className="mt-12 text-xs text-ink-muted/80 space-y-1.5 border-t border-ink/10 pt-6">
          <p>
            Designed &amp; built with thoughtful code, warm coffee &amp; zero pretense.
          </p>
          <p className="text-[11px]">
            Delhi, India • {new Date().getFullYear()} •{" "}
            <span className="font-handwriting text-sm text-cocoa">date.devchopra.life</span>
          </p>
        </div>
      </div>

      {/* Coffee Modal */}
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
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-paper rounded-2xl max-w-md w-full p-6 sm:p-7 border border-rose/30 shadow-2xl relative text-left"
            >
              <button
                onClick={() => setCoffeeModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-cream hover:bg-rose/20 text-ink flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-12 h-12 rounded-2xl bg-butter flex items-center justify-center mb-4 border border-amber-300/60 shadow-sm">
                <Coffee className="w-6 h-6 text-cocoa" />
              </div>

              <span className="text-[11px] font-bold uppercase tracking-wider text-cocoa">
                Official Invitation
              </span>
              <h3 className="font-serif text-2xl font-bold text-ink mt-0.5 mb-2">
                Coffee sounds wonderful.
              </h3>

              <p className="text-sm text-ink-soft leading-relaxed mb-4">
                Whether you prefer a cozy corner in Connaught Place, dad&apos;s cafe on a Sunday,
                or hot chocolate at a quiet terrace — I&apos;d love to hear your story.
              </p>

              <div className="p-3.5 rounded-xl bg-cream border border-ink/10 mb-5 space-y-2 text-xs">
                <p className="font-semibold text-ink flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-rose" />
                  <span>How to connect directly:</span>
                </p>
                <div className="flex flex-col gap-2 pt-1">
                  <a
                    href="https://instagram.com/thedevchopra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg bg-paper hover:bg-blush/40 border border-ink/10 transition-colors"
                  >
                    <span className="font-medium">Direct Message on Instagram</span>
                    <span className="text-cocoa font-bold">@thedevchopra →</span>
                  </a>
                  <a
                    href="mailto:the.chopra.dev@gmail.com?subject=Hey%20Dev,%20saw%20your%20website"
                    className="flex items-center justify-between p-2 rounded-lg bg-paper hover:bg-blush/40 border border-ink/10 transition-colors"
                  >
                    <span className="font-medium">Send a friendly Email</span>
                    <span className="text-cocoa font-bold">the.chopra.dev@gmail.com →</span>
                  </a>
                </div>
              </div>

              <p className="text-[11px] text-ink-muted text-center font-handwriting text-base">
                &ldquo;No rush, no expectations. Have a lovely rest of your day!&rdquo;
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
