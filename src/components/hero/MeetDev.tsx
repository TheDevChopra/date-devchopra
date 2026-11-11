"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { devProfile, getDevAge } from "@/content/profile";
import { Heart, Sparkles, MapPin, ChefHat, Briefcase, Smile } from "lucide-react";

export default function MeetDev() {
  const age = getDevAge();
  const [photoTapped, setPhotoTapped] = useState(false);
  const [funFactIndex, setFunFactIndex] = useState(0);

  const funFacts = [
    "“Mummy ke haath ka khana remains undefeated.”",
    "“Can cook real food. Will still ask what we're ordering.”",
    "“47 browser tabs open in the brain. At least 12 playing music.”",
    "“Currently learning guitar and DJing. Results may vary.”",
    "“Hopeless romantic who plans dates like season finales.”",
  ];

  const handleNextFact = () => {
    setFunFactIndex((prev) => (prev + 1) % funFacts.length);
    setPhotoTapped(true);
    setTimeout(() => setPhotoTapped(false), 1200);
  };

  return (
    <section id="hero" className="relative pt-20 pb-12 px-4 w-full">
      {/* Background Accent */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-blush/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="flex flex-col items-center text-center">
        {/* Greeting Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose/20 text-ink text-xs font-semibold mb-3 border border-rose/30">
          <span className="w-1.5 h-1.5 rounded-full bg-rose inline-block" />
          <span>Meet Dev Chopra</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-ink leading-tight mb-2">
          Hi, I&apos;m Dev. <br />
          <span className="text-cocoa font-normal italic">
            A little romantic, a little chaotic,
          </span>
        </h1>
        <p className="text-ink-soft text-xs sm:text-sm max-w-[320px] mb-6 leading-relaxed">
          Usually thinking about 12 things at once. Growth engineer, bedroom guitarist, and hopeless romantic.
        </p>

        {/* Polaroid Photo Card (Sized for mobile) */}
        <div className="relative w-full max-w-[280px] mb-4">
          {/* Top Tape decoration */}
          <div className="tape-strip -top-2.5 left-1/2 -translate-x-1/2 rotate-1" />

          <div
            onClick={handleNextFact}
            className="polaroid-frame cursor-pointer select-none relative group transform transition-transform active:scale-95"
            title="Tap for a random Dev fun fact!"
          >
            {/* Image Placeholder */}
            <div className="relative aspect-[4/4.3] w-full rounded-md overflow-hidden bg-blush/30 border border-ink/5">
              <Image
                src="/media/photos/dev-hero-still.svg"
                alt="Dev Chopra portrait placeholder"
                fill
                priority
                className="object-cover"
              />

              {/* Heart Burst Easter Egg on tap */}
              {photoTapped && (
                <div className="absolute inset-0 flex items-center justify-center bg-rose/20 backdrop-blur-[1px] pointer-events-none">
                  <Heart className="w-14 h-14 text-rose fill-rose animate-ping" />
                </div>
              )}

              {/* Tap Prompt Badge */}
              <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-cream/95 backdrop-blur-sm border border-rose/30 text-[10px] font-semibold text-cocoa flex items-center gap-1 shadow-sm">
                <Sparkles className="w-3 h-3 text-rose" />
                <span>Tap for quirk</span>
              </div>
            </div>

            {/* Polaroid Handwritten Caption */}
            <div className="mt-2.5 text-center">
              <p className="font-handwriting text-2xl text-ink leading-tight">
                Dev Chopra, {age}
              </p>
              <p className="text-[10px] uppercase tracking-wider text-cocoa/80 font-bold mt-0.5">
                Delhi • Single Since 2005 • Growth Engineer
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Speech Bubble */}
        <motion.div
          key={funFactIndex}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-full max-w-[300px] mb-6 p-3 rounded-2xl bg-butter/90 border border-amber-200/80 shadow-sm text-center relative"
        >
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-butter/90 rotate-45 border-l border-t border-amber-200/80" />
          <p className="font-handwriting text-base text-ink leading-snug">
            {funFacts[funFactIndex]}
          </p>
          <span className="text-[9px] text-cocoa/80 font-sans uppercase font-bold tracking-wider mt-1 block">
            (Tap photo to shuffle)
          </span>
        </motion.div>

        {/* Quick Facts 2x2 Mobile Grid */}
        <div className="grid grid-cols-2 gap-2 w-full mb-5 text-left text-xs">
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-paper border border-ink/5 shadow-sm">
            <MapPin className="w-4 h-4 text-cocoa flex-shrink-0" />
            <span className="leading-tight">Delhi, India (Rohini)</span>
          </div>

          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-paper border border-ink/5 shadow-sm">
            <ChefHat className="w-4 h-4 text-rose flex-shrink-0" />
            <span className="leading-tight">Pure Veg &amp; Can Cook</span>
          </div>

          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-paper border border-ink/5 shadow-sm">
            <Briefcase className="w-4 h-4 text-sage-dark flex-shrink-0" />
            <span className="leading-tight">Growth @ Veena AI</span>
          </div>

          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-paper border border-ink/5 shadow-sm">
            <Heart className="w-4 h-4 text-rose flex-shrink-0 fill-rose/20" />
            <span className="leading-tight">Quality Time Lover</span>
          </div>
        </div>

        {/* Ground Rule Callout */}
        <div className="p-3 rounded-xl bg-blush/50 border border-rose/20 w-full flex items-start gap-2.5 text-left">
          <Smile className="w-4 h-4 text-cocoa flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-[10px] uppercase tracking-wider font-bold text-cocoa">Core Ground Rule</p>
            <p className="text-xs text-ink-soft mt-0.5 font-medium leading-relaxed">
              &ldquo;The website introduces Dev. The conversation discovers Dev.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
