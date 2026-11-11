"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryItems } from "@/data/gallery";
import { GalleryMediaItem } from "@/types";
import { Play, X, Film, Maximize2 } from "lucide-react";

export default function VisualScrapbook() {
  const [selectedItem, setSelectedItem] = useState<GalleryMediaItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Snaps" },
    { id: "candid", label: "Candid" },
    { id: "dance", label: "Dance" },
    { id: "music", label: "Music" },
    { id: "cafe", label: "Cafe" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="scrapbook" className="py-10 px-4 w-full">
      {/* Section Header */}
      <div className="text-center mb-6">
        <span className="inline-block px-3 py-0.5 rounded-full bg-rose/20 text-ink text-[10px] font-bold uppercase tracking-wider mb-2 border border-rose/30">
          Digital Photo Album
        </span>
        <h2 className="font-serif text-2xl font-bold text-ink mb-1.5">
          The Visual Scrapbook
        </h2>
        <p className="text-ink-soft text-xs leading-relaxed max-w-[300px] mx-auto">
          Candid snapshots, living room dance rehearsals, and dad&apos;s cafe visits.
        </p>

        {/* Horizontally scrollable Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 mt-4 scrollbar-none justify-start px-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all border min-h-[34px] ${
                activeCategory === cat.id
                  ? "bg-ink text-cream border-ink shadow-sm"
                  : "bg-paper text-ink border-ink/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Single-Column Mobile Polaroid Feed */}
      <div className="flex flex-col gap-6 w-full">
        {filteredItems.map((item, idx) => {
          const isVideo = item.type === "video";
          const imageSrc = isVideo ? item.poster || item.src : item.src;

          return (
            <div
              key={item.id}
              className="polaroid-frame cursor-pointer select-none group relative w-full active:scale-[0.99] transition-transform"
              onClick={() => setSelectedItem(item)}
            >
              {/* Corner Washi Tape decoration */}
              {idx % 2 === 0 ? (
                <div className="tape-strip tape-strip-rose -top-2.5 right-6 rotate-2" />
              ) : (
                <div className="tape-strip tape-strip-sage -top-2.5 left-6 -rotate-2" />
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
                  sizes="(max-width: 480px) 100vw, 400px"
                  className="object-cover"
                />

                {/* Video Play Overlay Badge */}
                {isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center bg-ink/10">
                    <div className="w-11 h-11 rounded-full bg-cream/95 text-ink flex items-center justify-center shadow-md border border-ink/10">
                      <Play className="w-4 h-4 fill-ink ml-0.5" />
                    </div>
                  </div>
                )}

                {/* Tap to expand hint */}
                <div className="absolute top-2 right-2 p-1 rounded-full bg-cream/80 backdrop-blur-sm text-ink shadow-sm">
                  <Maximize2 className="w-3 h-3" />
                </div>
              </div>

              {/* Polaroid Caption Box */}
              <div className="mt-3 text-center px-1">
                <h3 className="font-serif text-base font-bold text-ink leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-ink-soft line-clamp-2 mt-0.5 leading-snug">
                  {item.caption}
                </p>
                {item.polaroidNote && (
                  <p className="font-handwriting text-base text-cocoa mt-1">
                    {item.polaroidNote}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Note under gallery */}
      <div className="mt-6 text-center">
        <p className="font-handwriting text-lg text-cocoa">
          &ldquo;More stories and silly camera rolls are better shared in person.&rdquo;
        </p>
      </div>

      {/* Mobile Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-paper rounded-2xl max-w-[380px] w-full overflow-hidden shadow-2xl border border-cream relative p-5 text-ink"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-cream text-ink flex items-center justify-center cursor-pointer shadow-sm z-20 min-h-[32px]"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Media Container in Modal */}
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-blush/30 border border-ink/10 mb-3">
                <Image
                  src={selectedItem.poster || selectedItem.src}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
                {selectedItem.type === "video" && (
                  <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-full bg-ink/80 text-cream text-[10px] font-mono flex items-center gap-1">
                    <Film className="w-3 h-3 text-butter" />
                    <span>Clip preview {selectedItem.duration ? `(${selectedItem.duration})` : ""}</span>
                  </div>
                )}
              </div>

              {/* Modal Details */}
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="px-2 py-0.5 rounded-full bg-butter text-[10px] font-bold text-ink uppercase tracking-wider">
                  {selectedItem.category}
                </span>
                {selectedItem.polaroidNote && (
                  <span className="text-[11px] text-cocoa font-medium">
                    • {selectedItem.polaroidNote}
                  </span>
                )}
              </div>

              <h3 className="font-serif text-xl font-bold text-ink leading-tight">
                {selectedItem.title}
              </h3>

              <p className="text-ink-soft text-xs mt-1.5 leading-relaxed">
                {selectedItem.caption}
              </p>

              <div className="mt-3 p-2 rounded-lg bg-cream border border-ink/10 flex items-center justify-between text-[11px] text-ink-muted">
                <span>📁 Slot ready for Dev&apos;s real asset</span>
                <span className="font-handwriting text-sm text-cocoa">date.devchopra.life</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
