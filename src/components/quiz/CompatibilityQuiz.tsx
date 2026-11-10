"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quizQuestions, quizResults } from "@/data/quiz";
import { QuizQuestion } from "@/types";
import {
  Sparkles,
  HelpCircle,
  RotateCcw,
  Coffee,
  Heart,
  CheckCircle2,
  Smile,
  ArrowRight,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function CompatibilityQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [lastReaction, setLastReaction] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ: QuizQuestion = quizQuestions[currentQuestionIndex];

  const handleSelectOption = (qId: number, optId: string, reaction: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optId }));
    setLastReaction(reaction);

    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setLastReaction(null);
      } else {
        setIsCompleted(true);
        // Trigger celebratory confetti on quiz completion!
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 },
            colors: ["#E9A8B0", "#F6E7B8", "#DDE8D8", "#765747"],
          });
        } catch (e) {
          // ignore if canvas-confetti fails or is blocked
        }
      }
    }, 450);
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setLastReaction(null);
    setIsCompleted(false);
  };

  // Determine which funny verdict to show
  const getResult = () => {
    // If predominantly picked first option -> highVibe or romantic
    const optIds = Object.values(selectedAnswers);
    if (optIds.includes("c") || optIds.includes("a")) {
      return quizResults.romanticSoul;
    } else if (optIds.includes("d")) {
      return quizResults.adventurous;
    }
    return quizResults.highVibe;
  };

  const result = getResult();

  return (
    <section id="quiz" className="py-16 sm:py-24 px-4 sm:px-6 max-w-3xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="inline-block px-3 py-1 rounded-full bg-butter text-ink text-xs font-semibold uppercase tracking-wider mb-2 border border-amber-300/40">
          Interactive Mini-Game
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-3">
          The Compatibility Test™
        </h2>
        <p className="text-ink-soft text-sm sm:text-base leading-relaxed">
          Four completely unscientific questions to determine our theoretical chemistry.
        </p>
        <span className="text-xs text-cocoa font-handwriting text-base mt-1 inline-block">
          (Zero data stored • 100% just for laughs)
        </span>
      </div>

      {/* Main Quiz Card */}
      <div className="paper-card p-6 sm:p-8 relative border-2 border-rose/30 shadow-scrapbook">
        {/* Washi Tape */}
        <div className="tape-strip tape-strip-rose -top-3 left-1/2 -translate-x-1/2 rotate-1" />

        {!isCompleted ? (
          <div>
            {/* Progress Header */}
            <div className="flex items-center justify-between border-b border-ink/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-rose text-ink flex items-center justify-center font-bold text-xs">
                  {currentQuestionIndex + 1}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-cocoa">
                  Question {currentQuestionIndex + 1} of {quizQuestions.length}
                </span>
              </div>

              {/* Progress dots */}
              <div className="flex items-center gap-1.5">
                {quizQuestions.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all ${
                      i === currentQuestionIndex
                        ? "w-6 bg-ink"
                        : i < currentQuestionIndex
                        ? "w-2 bg-sage-dark"
                        : "w-2 bg-ink/10"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Question Text */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQ.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink leading-snug">
                  {currentQ.question}
                </h3>
                <p className="text-xs sm:text-sm text-cocoa font-medium mt-1 mb-6">
                  {currentQ.subtitle}
                </p>

                {/* Option Buttons */}
                <div className="space-y-3">
                  {currentQ.options.map((opt) => {
                    const isSelected = selectedAnswers[currentQ.id] === opt.id;

                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleSelectOption(currentQ.id, opt.id, opt.reaction)}
                        className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 min-h-[52px] ${
                          isSelected
                            ? "bg-blush border-rose shadow-sm"
                            : "bg-paper hover:bg-cream border-ink/10 hover:border-ink/30 active:scale-[0.99]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl flex-shrink-0">{opt.emoji}</span>
                          <span className="text-xs sm:text-sm font-medium text-ink leading-snug">
                            {opt.label}
                          </span>
                        </div>

                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                            isSelected
                              ? "bg-rose border-rose text-ink"
                              : "border-ink/20 bg-white"
                          }`}
                        >
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-ink" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Instant Reaction Toast */}
                {lastReaction && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 rounded-lg bg-butter/80 border border-amber-200 text-center text-xs font-semibold text-cocoa"
                  >
                    💬 {lastReaction}
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          /* Quiz Result Card */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center py-4"
          >
            {/* Result Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage text-ink text-xs font-bold uppercase tracking-wider mb-4 border border-sage-dark/40">
              <Sparkles className="w-3.5 h-3.5 text-cocoa" />
              <span>{result.badge}</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-3">
              {result.title}
            </h3>

            <p className="text-ink-soft text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-6">
              {result.description}
            </p>

            {/* Verdict Callout */}
            <div className="p-4 rounded-xl bg-blush/60 border border-rose/30 max-w-md mx-auto mb-6 text-left">
              <div className="flex items-start gap-3">
                <Coffee className="w-5 h-5 text-cocoa flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-cocoa">
                    Official Verdict
                  </p>
                  <p className="text-sm font-semibold text-ink mt-0.5">
                    {result.coffeeVerdict}
                  </p>
                  <p className="text-xs text-ink-muted mt-1 font-mono">
                    {result.vibeMatch}
                  </p>
                </div>
              </div>
            </div>

            {/* Retake Button & Coffee CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleReset}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-cream hover:bg-paper border border-ink/15 text-xs font-semibold text-ink cursor-pointer transition-all active:scale-95"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>

              <a
                href="#closing"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-ink hover:bg-ink-soft text-cream text-xs font-semibold cursor-pointer transition-all active:scale-95 shadow-sm"
              >
                <span>Continue to Closing</span>
                <ArrowRight className="w-3.5 h-3.5 text-rose" />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
