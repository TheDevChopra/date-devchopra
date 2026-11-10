"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { musicTracks } from "@/content/sections";
import { TrackItem } from "@/types";
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Disc3,
  Volume2,
  Sparkles,
  Guitar,
  Music,
  Zap,
  Radio,
  Headphones,
} from "lucide-react";

export default function MusicAndDance() {
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const activeTrack: TrackItem = musicTracks[activeTrackIndex];

  const handleNextTrack = () => {
    setActiveTrackIndex((prev) => (prev + 1) % musicTracks.length);
  };

  const handlePrevTrack = () => {
    setActiveTrackIndex((prev) => (prev - 1 + musicTracks.length) % musicTracks.length);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="playlist" className="py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="inline-block px-3 py-1 rounded-full bg-powder text-ink text-xs font-semibold uppercase tracking-wider mb-2 border border-powder-dark/30">
          Audio & Movement
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-3">
          Music, Dance & Mad Science
        </h2>
        <p className="text-ink-soft text-sm sm:text-base leading-relaxed">
          My playlist has range: Qawwali to hard 808s without warning. Plus acoustic guitar and living room DJ sets.
        </p>
      </div>

      {/* Retro Cassette / Media Player Card */}
      <div className="paper-card p-6 sm:p-8 relative overflow-hidden bg-gradient-to-br from-paper to-powder/20 border-powder-dark/20 shadow-scrapbook">
        {/* Top Tape Accent */}
        <div className="tape-strip tape-strip-sage -top-3 left-10 rotate-1" />
        <div className="tape-strip -top-3 right-10 -rotate-2" />

        {/* Player Header */}
        <div className="flex items-center justify-between border-b border-ink/10 pb-4 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-cocoa uppercase tracking-wider">
            <Radio className="w-4 h-4 text-rose animate-pulse" />
            <span>Dev-OS Hi-Fi Sounddeck 2005</span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cream border border-ink/10 text-[10px] font-semibold text-ink-muted">
            <Volume2 className="w-3 h-3 text-cocoa" />
            <span>No Autoplay • Safe For Ears</span>
          </div>
        </div>

        {/* Central Display & Vinyl Graphic */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Vinyl Disc Spin Animation */}
          <div className="md:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center">
              {/* Outer Grooved Vinyl */}
              <motion.div
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="w-full h-full rounded-full bg-ink flex items-center justify-center p-3 shadow-xl relative border-4 border-ink-soft"
              >
                {/* Vinyl Grooves */}
                <div className="w-full h-full rounded-full border border-ink-muted/30 flex items-center justify-center p-4">
                  <div className="w-full h-full rounded-full border border-ink-muted/30 flex items-center justify-center p-4">
                    {/* Inner Label */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-rose flex flex-col items-center justify-center text-ink text-center p-1 border-2 border-cream">
                      <Disc3 className="w-5 h-5 text-ink animate-spin" style={{ animationDuration: "3s" }} />
                      <span className="text-[8px] font-bold uppercase tracking-wider mt-0.5">DEV MIX</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Tonearm Simulation */}
              <div
                className={`absolute -top-2 right-4 w-12 h-20 border-r-2 border-cocoa transform origin-top-right transition-transform duration-500 pointer-events-none ${
                  isPlaying ? "rotate-12" : "-rotate-12"
                }`}
              >
                <div className="w-3 h-3 rounded-full bg-cocoa absolute -top-1 -right-1" />
                <div className="w-4 h-2 bg-ink absolute -bottom-1 -right-1 rounded-sm" />
              </div>
            </div>

            {/* Simulated Audio Visualizer Bars */}
            <div className="flex items-end gap-1.5 h-8 mt-5">
              {[12, 28, 16, 24, 32, 18, 26, 14, 30, 20].map((height, i) => (
                <motion.div
                  key={i}
                  animate={{
                    height: isPlaying ? [height * 0.4, height, height * 0.3] : 6,
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.6 + (i % 4) * 0.2,
                    ease: "easeInOut",
                  }}
                  className={`w-1.5 rounded-full ${
                    isPlaying ? "bg-cocoa" : "bg-ink/20"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Track Info & Commentary */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTrack.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                {/* Track Genre Badge & Energy Meter */}
                <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
                  <span className="px-2.5 py-1 rounded-full bg-powder-dark/30 text-ink text-xs font-bold uppercase tracking-wider">
                    {activeTrack.genre}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-cocoa">
                    <Zap className="w-3.5 h-3.5 text-butter-dark fill-butter-dark" />
                    <span>Energy: {activeTrack.energyLevel}/5</span>
                  </div>
                </div>

                {/* Track Title */}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink leading-tight">
                  {activeTrack.title}
                </h3>

                {/* Artist / Subtitle Note */}
                <p className="text-xs sm:text-sm font-medium text-cocoa mt-1">
                  {activeTrack.artistNote}
                </p>

                {/* Dev's Personal Commentary Note */}
                <div className="mt-4 p-3.5 rounded-xl bg-cream border border-ink/10 relative">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-ink-muted block mb-0.5">
                    Dev&apos;s Liner Notes
                  </span>
                  <p className="font-handwriting text-lg sm:text-xl text-ink leading-snug">
                    &ldquo;{activeTrack.devNote}&rdquo;
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Playback Controls */}
            <div className="mt-6 flex items-center justify-between gap-4 pt-4 border-t border-ink/10">
              <button
                onClick={handlePrevTrack}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-cream hover:bg-paper border border-ink/10 text-ink cursor-pointer active:scale-95 transition-all shadow-sm"
                aria-label="Previous track"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              <button
                onClick={togglePlay}
                className="flex-1 max-w-xs flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-ink hover:bg-ink-soft text-cream font-medium text-sm cursor-pointer active:scale-95 transition-all shadow-sm"
                aria-label={isPlaying ? "Pause visualizer" : "Play track visualizer"}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-cream" />
                    <span>Pause Sounddeck</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-cream" />
                    <span>Simulate Vibe ({activeTrackIndex + 1}/{musicTracks.length})</span>
                  </>
                )}
              </button>

              <button
                onClick={handleNextTrack}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-cream hover:bg-paper border border-ink/10 text-ink cursor-pointer active:scale-95 transition-all shadow-sm"
                aria-label="Next track"
              >
                <SkipForward className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Tracklist Buttons Carousel */}
        <div className="mt-8 pt-5 border-t border-ink/10 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {musicTracks.map((track, i) => (
            <button
              key={track.id}
              onClick={() => {
                setActiveTrackIndex(i);
                setIsPlaying(true);
              }}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all border ${
                activeTrackIndex === i
                  ? "bg-ink text-cream border-ink shadow-sm"
                  : "bg-cream/80 hover:bg-white text-ink border-ink/10"
              }`}
            >
              <span className="mr-1 opacity-70">0{i + 1}.</span>
              <span>{track.genre}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
