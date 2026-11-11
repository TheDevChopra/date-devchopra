"use client";

import React, { useState, useEffect } from "react";
import FlowerShower from "@/components/entrance/FlowerShower";
import Navbar from "@/components/ui/Navbar";
import MeetDev from "@/components/hero/MeetDev";
import PersonalityMix from "@/components/personality/PersonalityMix";
import MusicAndDance from "@/components/playlist/MusicAndDance";
import FlagsAndTerms from "@/components/flags/FlagsAndTerms";
import DateTimeline from "@/components/date-timeline/DateTimeline";
import AmbitionCorner from "@/components/ambition/AmbitionCorner";
import VisualScrapbook from "@/components/scrapbook/VisualScrapbook";
import CompatibilityQuiz from "@/components/quiz/CompatibilityQuiz";
import ClosingSection from "@/components/closing/ClosingSection";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    // If the visitor already entered in this session or has a hash in URL, let them jump straight in
    if (window.location.hash) {
      setHasEntered(true);
    }
  }, []);

  const handleEnter = () => {
    setHasEntered(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-cream selection:bg-rose/40 selection:text-ink w-full overflow-x-hidden flex flex-col">
      {/* Flower Shower Entrance Fullscreen Overlay */}
      <FlowerShower onEnter={handleEnter} isEntered={hasEntered} />

      {/* Floating Navigation (Visible once inside the site) */}
      {hasEntered && <Navbar />}

      {/* Main Experience Content */}
      <main className={`transition-opacity duration-700 w-full overflow-x-hidden flex flex-col flex-1 ${hasEntered ? "opacity-100" : "opacity-0"}`}>
        {/* Section 1: Meet Dev Hero */}
        <MeetDev />

        {/* Section 2: The Personality Mix */}
        <PersonalityMix />

        {/* Section 3: Music & Dance Showcase */}
        <MusicAndDance />

        {/* Section 4: Green Flags, Red-ish Flags & Batman Quirk */}
        <FlagsAndTerms />

        {/* Section 5: Date.exe Timeline */}
        <DateTimeline />

        {/* Section 6: Ambition Corner */}
        <AmbitionCorner />

        {/* Section 7: Visual Scrapbook Polaroid Gallery */}
        <VisualScrapbook />

        {/* Section 8: Unserious Compatibility Quiz */}
        <CompatibilityQuiz />

        {/* Section 9: Closing & Coffee CTA */}
        <ClosingSection />
      </main>
    </div>
  );
}

