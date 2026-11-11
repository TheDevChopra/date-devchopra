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
  Zap,
  Radio,
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
    <section id="playlist" className="py-10 px-4 w-full">
      {/* Section Header */}
      <div className="text-center mb-6">
        <span className="inline-block px-3 py-0.5 rounded-full bg-powder text-ink text-[10px] font-bold uppercase tracking-wider mb-2 border border-powder-dark/30">
          Audio &amp; Movement
        </span>
        <h2 className="font-serif text-2xl font-bold text-ink mb-1.5">
          Music &amp; Dance
        </h2>
        <p className="text-ink-soft text-xs leading-relaxed max-w-[300px] mx-auto">
          Qawwali to hard 808s without warning. Plus acoustic guitar and living room DJ sets.
        </p>
      </div>

      {/* Retro Cassette / Media Player Card */}
      <div className="paper-card p-4 sm:p-5 relative overflow-hidden bg-gradient-to-br from-paper to-powder/20 border-powder-dark/20 shadow-sm w-full">
        {/* Top Tape Accent */}
        <div className="tape-strip tape-strip-sage -top-2 left-6 rotate-1" />

        {/* Player Header */}
        <div className="flex items-center justify-between border-b border-ink/10 pb-3 mb-4">
          <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-cocoa uppercase tracking-wider">
            <Radio className="w-3.5 h-3.5 text-rose animate-pulse" />
            <span>Dev Sounddeck 2005</span>
          </div>

          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-cream border border-ink/10 text-[9px] font-semibold text-ink-muted">
            <Volume2 className="w-3 h-3 text-cocoa" />
            <span>No Autoplay</span>
          </div>
        </div>

        {/* Compact Vinyl Disc & Equalizer */}
        <div className="flex flex-col items-center justify-center mb-4">
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Spinning Vinyl */}
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="w-full h-full rounded-full bg-ink flex items-center justify-center p-2 shadow-lg relative border-2 border-ink-soft"
            >
              <div className="w-full h-full rounded-full border border-ink-muted/30 flex items-center justify-center p-3">
                <div className="w-12 h-12 rounded-full bg-rose flex flex-col items-center justify-center text-ink text-center p-1 border border-cream">
                  <Disc3 className="w-4 h-4 text-ink animate-spin" style={{ animationDuration: "3s" }} />
                  <span className="text-[7px] font-bold uppercase tracking-wider">DEV</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Equalizer Bars */}
          <div className="flex items-end gap-1 h-6 mt-3">
            {[10, 22, 14, 20, 26, 15, 22, 12, 24, 16].map((height, i) => (
              <motion.div
                key={i}
                animate={{
                  height: isPlaying ? [height * 0.4, height, height * 0.3] : 4,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.5 + (i % 4) * 0.15,
                  ease: "easeInOut",
                }}
                className={`w-1 rounded-full ${isPlaying ? "bg-cocoa" : "bg-ink/20"}`}
              />
            ))}
          </div>
        </div>

        {/* Track Info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTrack.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded-full bg-powder-dark/30 text-ink text-[10px] font-bold uppercase tracking-wider">
                {activeTrack.genre}
              </span>
              <div className="flex items-center gap-1 text-[10px] font-semibold text-cocoa">
                <Zap className="w-3 h-3 text-butter-dark fill-butter-dark" />
                <span>Energy: {activeTrack.energyLevel}/5</span>
              </div>
            </div>

            <h3 className="font-serif text-xl font-bold text-ink leading-tight">
              {activeTrack.title}
            </h3>
            <p className="text-[11px] font-medium text-cocoa mt-0.5">
              {activeTrack.artistNote}
            </p>

            {/* Liner Note */}
            <div className="mt-3 p-2.5 rounded-xl bg-cream border border-ink/10 text-left">
              <span className="text-[9px] uppercase font-bold tracking-wider text-ink-muted block">
                Dev&apos;s Liner Notes
              </span>
              <p className="font-handwriting text-base text-ink leading-snug mt-0.5">
                &ldquo;{activeTrack.devNote}&rdquo;
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Playback Controls (Thumb-friendly, min 48px height) */}
        <div className="mt-4 flex items-center justify-between gap-3 pt-3 border-t border-ink/10">
          <button
            onClick={handlePrevTrack}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-cream border border-ink/10 text-ink cursor-pointer active:scale-95 transition-all shadow-sm flex-shrink-0"
            aria-label="Previous track"
          >
            <SkipBack className="w-4 h-4" />
          </button>

          <button
            onClick={togglePlay}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-ink hover:bg-ink-soft text-cream font-medium text-xs cursor-pointer active:scale-95 transition-all shadow-sm min-h-[44px]"
            aria-label={isPlaying ? "Pause visualizer" : "Play track visualizer"}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-cream" />
                <span>Pause Sounddeck</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-cream" />
                <span>Simulate Vibe ({activeTrackIndex + 1}/6)</span>
              </>
            )}
          </button>

          <button
            onClick={handleNextTrack}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-cream border border-ink/10 text-ink cursor-pointer active:scale-95 transition-all shadow-sm flex-shrink-0"
            aria-label="Next track"
          >
            <SkipForward className="w-4 h-4" />
          </button>
        </div>

        {/* Horizontally scrollable genre chips */}
        <div className="mt-3 pt-3 border-t border-ink/10 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {musicTracks.map((track, i) => (
            <button
              key={track.id}
              onClick={() => {
                setActiveTrackIndex(i);
                setIsPlaying(true);
              }}
              className={`flex-shrink-0 px-2.5 py-1 rounded-full text-[11px] font-medium cursor-pointer transition-all border ${
                activeTrackIndex === i
                  ? "bg-ink text-cream border-ink shadow-sm"
                  : "bg-cream/90 text-ink border-ink/10 hover:bg-white"
              }`}
            >
              <span>{track.genre}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
