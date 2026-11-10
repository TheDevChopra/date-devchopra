"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { devProfile, getDevAge } from "@/content/profile";
import { Heart, Sparkles, MapPin, Music, ChefHat, Briefcase, Smile, MessageCircle } from "lucide-react";

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
    <section id="hero" className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Subtle Background Accent */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-blush/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Main Grid: Stacked on Mobile, 2-Column on Desktop */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left / Top: Polaroid Media Card */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.7 }}
          className="relative w-full max-w-xs sm:max-w-sm flex-shrink-0"
        >
          {/* Top Tape decoration */}
          <div className="tape-strip -top-3 left-1/2 -translate-x-1/2 rotate-1" />

          {/* Polaroid Frame */}
          <div
            onClick={handleNextFact}
            className="polaroid-frame cursor-pointer select-none relative group transform transition-transform hover:scale-[1.02] active:scale-95"
            title="Tap for a random Dev fun fact!"
          >
            {/* Image Placeholder */}
            <div className="relative aspect-[4/4.2] w-full rounded-md overflow-hidden bg-blush/30 border border-ink/5">
              <Image
                src="/media/photos/dev-hero-still.svg"
                alt="Dev Chopra portrait placeholder"
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Heart Burst Easter Egg on tap */}
              {photoTapped && (
                <div className="absolute inset-0 flex items-center justify-center bg-rose/20 backdrop-blur-[1px] animate-fade-in pointer-events-none">
                  <Heart className="w-16 h-16 text-rose fill-rose animate-ping" />
                </div>
              )}

              {/* Tap Prompt Badge */}
              <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-full bg-cream/90 backdrop-blur-sm border border-rose/30 text-[10px] font-semibold text-cocoa flex items-center gap-1 shadow-sm">
                <Sparkles className="w-3 h-3 text-rose" />
                <span>Tap for quirk</span>
              </div>
            </div>

            {/* Polaroid Handwritten Caption */}
            <div className="mt-3 text-center">
              <p className="font-handwriting text-2xl text-ink leading-tight">
                Dev Chopra, {age}
              </p>
              <p className="text-[11px] uppercase tracking-wider text-cocoa/70 font-semibold mt-0.5">
                Delhi • Single Since 2005 • Growth Engineer
              </p>
            </div>
          </div>

          {/* Interactive Speech Bubble under polaroid */}
          <motion.div
            key={funFactIndex}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mt-3 p-3 rounded-2xl bg-butter/80 border border-amber-200/60 shadow-sm text-center relative"
          >
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-butter/80 rotate-45 border-l border-t border-amber-200/60" />
            <p className="font-handwriting text-lg sm:text-xl text-ink leading-snug">
              {funFacts[funFactIndex]}
            </p>
            <span className="text-[10px] text-cocoa/70 font-sans uppercase font-bold tracking-wider mt-1 block">
              (Tap photo to shuffle)
            </span>
          </motion.div>
        </motion.div>

        {/* Right / Bottom: Hero Story & Badges */}
        <div className="flex-1 text-left w-full">
          {/* Greeting Tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose/20 text-ink text-xs font-semibold mb-3 border border-rose/30">
            <span className="w-1.5 h-1.5 rounded-full bg-rose inline-block" />
            <span>Meet Dev Chopra</span>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-[1.2] mb-4">
            Hi, I&apos;m Dev. <br />
            <span className="text-cocoa font-normal italic">
              A little romantic, a little chaotic,
            </span>{" "}
            and usually thinking about 12 things at once.
          </h2>

          {/* Body Copy */}
          <p className="text-ink-soft text-base sm:text-lg leading-relaxed mb-6">
            Growth Marketing Engineer by day, aspiring bedroom guitarist & DJ by night.
            I plan dates like season finales, take my sweet time making serious decisions,
            and firmly believe in good banter, deep respect, and never letting food get cold.
          </p>

          {/* Quick-Facts Pill Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5 mb-6 text-xs sm:text-sm">
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-paper border border-ink/5 shadow-sm">
              <MapPin className="w-4 h-4 text-cocoa flex-shrink-0" />
              <span>Delhi, India (Rohini)</span>
            </div>

            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-paper border border-ink/5 shadow-sm">
              <ChefHat className="w-4 h-4 text-rose flex-shrink-0" />
              <span>Pure Veg & Can Cook</span>
            </div>

            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-paper border border-ink/5 shadow-sm">
              <Briefcase className="w-4 h-4 text-sage-dark flex-shrink-0" />
              <span>Growth @ Veena Studio</span>
            </div>

            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-paper border border-ink/5 shadow-sm">
              <Heart className="w-4 h-4 text-rose flex-shrink-0 fill-rose/20" />
              <span>Quality Time Enthusiast</span>
            </div>
          </div>

          {/* Core Philosophy Banner */}
          <div className="p-3.5 rounded-xl bg-blush/40 border border-rose/20 flex items-start gap-3">
            <Smile className="w-5 h-5 text-cocoa flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs uppercase tracking-wider font-bold text-cocoa">Core Ground Rule</p>
              <p className="text-xs sm:text-sm text-ink-soft mt-0.5 font-medium">
                &ldquo;The website introduces Dev. The conversation discovers Dev.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
