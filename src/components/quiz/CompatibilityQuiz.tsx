"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quizQuestions, quizResults } from "@/data/quiz";
import { QuizQuestion } from "@/types";
import {
  Sparkles,
  RotateCcw,
  Coffee,
  CheckCircle2,
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
        try {
          confetti({
            particleCount: 40,
            spread: 55,
            origin: { y: 0.7 },
            colors: ["#E9A8B0", "#F6E7B8", "#DDE8D8", "#765747"],
          });
        } catch (e) {
          // ignore
        }
      }
    }, 400);
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setLastReaction(null);
    setIsCompleted(false);
  };

  const getResult = () => {
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
    <section id="quiz" className="py-10 px-4 w-full">
      {/* Section Header */}
      <div className="text-center mb-6">
        <span className="inline-block px-3 py-0.5 rounded-full bg-butter text-ink text-[10px] font-bold uppercase tracking-wider mb-2 border border-amber-300/40">
          Interactive Mini-Game
        </span>
        <h2 className="font-serif text-2xl font-bold text-ink mb-1">
          The Compatibility Test™
        </h2>
        <p className="text-ink-soft text-xs leading-relaxed max-w-[280px] mx-auto">
          Four unscientific questions to test our theoretical chemistry.
        </p>
        <span className="text-xs text-cocoa font-handwriting text-sm block mt-0.5">
          (Zero data stored • 100% just for laughs)
        </span>
      </div>

      {/* Main Quiz Card */}
      <div className="paper-card p-4 relative border-2 border-rose/30 shadow-sm w-full">
        {/* Washi Tape */}
        <div className="tape-strip tape-strip-rose -top-2.5 left-1/2 -translate-x-1/2 rotate-1" />

        {!isCompleted ? (
          <div>
            {/* Progress Header */}
            <div className="flex items-center justify-between border-b border-ink/10 pb-3 mb-4">
              <div className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-rose text-ink flex items-center justify-center font-bold text-[10px]">
                  {currentQuestionIndex + 1}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-cocoa">
                  Question {currentQuestionIndex + 1} of {quizQuestions.length}
                </span>
              </div>

              {/* Progress Dots */}
              <div className="flex items-center gap-1">
                {quizQuestions.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all ${
                      i === currentQuestionIndex
                        ? "w-4 bg-ink"
                        : i < currentQuestionIndex
                        ? "w-1.5 bg-sage-dark"
                        : "w-1.5 bg-ink/10"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Question Text */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQ.id}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="font-serif text-lg font-bold text-ink leading-snug">
                  {currentQ.question}
                </h3>
                <p className="text-[11px] text-cocoa font-medium mt-0.5 mb-4">
                  {currentQ.subtitle}
                </p>

                {/* Option Buttons (Min 48px height for thumbs) */}
                <div className="space-y-2">
                  {currentQ.options.map((opt) => {
                    const isSelected = selectedAnswers[currentQ.id] === opt.id;

                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleSelectOption(currentQ.id, opt.id, opt.reaction)}
                        className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2.5 min-h-[48px] active:scale-[0.99] ${
                          isSelected
                            ? "bg-blush border-rose shadow-sm"
                            : "bg-paper hover:bg-cream border-ink/10"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-xl flex-shrink-0">{opt.emoji}</span>
                          <span className="text-xs font-medium text-ink leading-snug">
                            {opt.label}
                          </span>
                        </div>

                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${
                            isSelected
                              ? "bg-rose border-rose text-ink"
                              : "border-ink/20 bg-white"
                          }`}
                        >
                          {isSelected && <CheckCircle2 className="w-3 h-3 text-ink" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Instant Reaction Toast */}
                {lastReaction && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 p-2 rounded-lg bg-butter/90 border border-amber-200 text-center text-xs font-semibold text-cocoa"
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
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center py-2"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage text-ink text-[10px] font-bold uppercase tracking-wider mb-3 border border-sage-dark/40">
              <Sparkles className="w-3 h-3 text-cocoa" />
              <span>{result.badge}</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-ink mb-2 leading-tight">
              {result.title}
            </h3>

            <p className="text-ink-soft text-xs leading-relaxed mb-4">
              {result.description}
            </p>

            {/* Verdict Callout */}
            <div className="p-3 rounded-xl bg-blush/60 border border-rose/30 text-left mb-4">
              <div className="flex items-start gap-2.5">
                <Coffee className="w-4 h-4 text-cocoa flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-cocoa">
                    Official Verdict
                  </p>
                  <p className="text-xs font-semibold text-ink mt-0.5">
                    {result.coffeeVerdict}
                  </p>
                  <p className="text-[10px] text-ink-muted mt-1 font-mono">
                    {result.vibeMatch}
                  </p>
                </div>
              </div>
            </div>

            {/* Retake Button & Continue CTA */}
            <div className="flex flex-col gap-2 w-full">
              <a
                href="#closing"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-ink text-cream text-xs font-semibold cursor-pointer active:scale-95 shadow-sm min-h-[44px]"
              >
                <span>Continue to Coffee Invitation</span>
                <ArrowRight className="w-3.5 h-3.5 text-rose" />
              </a>

              <button
                onClick={handleReset}
                className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-cream border border-ink/15 text-xs font-semibold text-ink cursor-pointer active:scale-95 min-h-[40px]"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
