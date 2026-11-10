"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryItems } from "@/data/gallery";
import { GalleryMediaItem } from "@/types";
import {
  Camera,
  Play,
  X,
  Sparkles,
  Maximize2,
  Calendar,
  Film,
  Heart,
  Tag,
} from "lucide-react";

export default function VisualScrapbook() {
  const [selectedItem, setSelectedItem] = useState<GalleryMediaItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Snaps" },
    { id: "candid", label: "Candid Moments" },
    { id: "dance", label: "Dance & Moves" },
    { id: "music", label: "Music Practice" },
    { id: "cafe", label: "Cafe & Life" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="scrapbook" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="inline-block px-3 py-1 rounded-full bg-rose/20 text-ink text-xs font-semibold uppercase tracking-wider mb-2 border border-rose/30">
          Digital Photo Album
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-3">
          The Visual Scrapbook
        </h2>
        <p className="text-ink-soft text-sm sm:text-base leading-relaxed">
          Candid snapshots, living room dance rehearsals, and dad&apos;s cafe visits.
          (Official placeholders ready for Dev&apos;s actual snapshots).
        </p>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all border ${
                activeCategory === cat.id
                  ? "bg-ink text-cream border-ink shadow-sm"
                  : "bg-paper text-ink border-ink/10 hover:bg-cream"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Polaroid Gallery Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <AnimatePresence>
          {filteredItems.map((item, idx) => {
            const isVideo = item.type === "video";
            const imageSrc = isVideo ? item.poster || item.src : item.src;

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`polaroid-frame cursor-pointer select-none group relative transform ${
                  item.rotationClass || ""
                } hover:rotate-0 hover:scale-[1.02]`}
                onClick={() => setSelectedItem(item)}
              >
                {/* Random Washi Tape decoration on some items */}
                {idx % 3 === 0 && (
                  <div className="tape-strip tape-strip-rose -top-3 left-1/2 -translate-x-1/2 rotate-1" />
                )}
                {idx % 3 === 1 && (
                  <div className="tape-strip -top-3 right-6 -rotate-3" />
                )}
                {idx % 3 === 2 && (
                  <div className="tape-strip tape-strip-sage -top-3 left-6 rotate-2" />
                )}

                {/* Media Image / Poster */}
                <div
                  className={`relative w-full rounded overflow-hidden bg-blush/20 border border-ink/5 ${
                    item.aspectRatio === "portrait"
                      ? "aspect-[3/4]"
                      : item.aspectRatio === "landscape"
                      ? "aspect-[4/3]"
                      : "aspect-square"
                  }`}
                >
                  <Image
                    src={imageSrc}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Video Play Overlay Badge */}
                  {isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center bg-ink/10 group-hover:bg-ink/20 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-cream/95 text-ink flex items-center justify-center shadow-lg border border-ink/10 transform group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-ink ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Quick Expand Icon on Hover */}
                  <div className="absolute top-2 right-2 p-1.5 rounded-full bg-cream/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity text-ink shadow-sm">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Polaroid Caption Box */}
                <div className="mt-3.5 text-center px-1">
                  <h3 className="font-serif text-lg font-bold text-ink group-hover:text-cocoa transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-ink-soft line-clamp-2 mt-1 leading-snug">
                    {item.caption}
                  </p>
                  {item.polaroidNote && (
                    <p className="font-handwriting text-base text-cocoa mt-1.5">
                      {item.polaroidNote}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Note under gallery */}
      <div className="mt-12 text-center">
        <p className="font-handwriting text-xl sm:text-2xl text-cocoa">
          &ldquo;More stories and silly camera rolls are better shared in person.&rdquo;
        </p>
      </div>

      {/* Lightbox / Modal for details */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 backdrop-blur-sm p-4 sm:p-6"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-paper rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-cream relative p-6 sm:p-7 text-ink"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-cream hover:bg-rose/20 text-ink flex items-center justify-center cursor-pointer transition-colors shadow-sm z-20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Media Container in Modal */}
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-blush/30 border border-ink/10 mb-4">
                <Image
                  src={selectedItem.poster || selectedItem.src}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
                {selectedItem.type === "video" && (
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-ink/80 text-cream text-xs font-mono flex items-center gap-1.5">
                    <Film className="w-3.5 h-3.5 text-butter" />
                    <span>Clip preview {selectedItem.duration ? `(${selectedItem.duration})` : ""}</span>
                  </div>
                )}
              </div>

              {/* Modal Details */}
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-butter text-[11px] font-bold text-ink uppercase tracking-wider">
                  {selectedItem.category}
                </span>
                {selectedItem.polaroidNote && (
                  <span className="text-xs text-cocoa font-medium">
                    • {selectedItem.polaroidNote}
                  </span>
                )}
              </div>

              <h3 className="font-serif text-2xl font-bold text-ink">
                {selectedItem.title}
              </h3>

              <p className="text-ink-soft text-sm sm:text-base mt-2 leading-relaxed">
                {selectedItem.caption}
              </p>

              <div className="mt-4 p-3 rounded-xl bg-cream border border-ink/10 flex items-center justify-between text-xs text-ink-muted">
                <span>📁 Slot ready for Dev&apos;s real asset</span>
                <span className="font-handwriting text-base text-cocoa">date.devchopra.life</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
