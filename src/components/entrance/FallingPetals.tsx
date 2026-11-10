"use client";

import React, { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  rot: number;
  color: string;
  shapeType: number;
}

export default function FallingPetals({ count = 28 }: { count?: number }) {
  const [petals, setPetals] = useState<Petal[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReducedMotion(true);
      return;
    }

    const colors = [
      "#E9A8B0", // Rose
      "#F7E4E5", // Blush
      "#F5CCD1", // Soft rose
      "#F6E7B8", // Butter yellow petal
      "#FFF8F0", // Cream
    ];

    const generated: Petal[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // percentage across screen
      size: 16 + Math.random() * 20, // 16px to 36px
      duration: 5 + Math.random() * 6, // 5s to 11s
      delay: Math.random() * 5,
      drift: -40 + Math.random() * 80, // px drift
      rot: 180 + Math.random() * 360,
      color: colors[i % colors.length],
      shapeType: i % 3,
    }));

    setPetals(generated);
  }, [count]);

  if (reducedMotion || petals.length === 0) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-30" aria-hidden="true">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="falling-petal"
          style={
            {
              left: `${petal.left}%`,
              animationDuration: `${petal.duration}s`,
              animationDelay: `${petal.delay}s`,
              "--drift": `${petal.drift}px`,
              "--rot": `${petal.rot}deg`,
            } as React.CSSProperties
          }
        >
          {petal.shapeType === 0 ? (
            // Curved Rose Petal
            <svg
              width={petal.size}
              height={petal.size * 1.3}
              viewBox="0 0 24 32"
              fill="none"
              style={{ filter: "drop-shadow(0 2px 4px rgba(118, 87, 71, 0.15))" }}
            >
              <path
                d="M12 2C7 6 3 13 3 20C3 26 7 30 12 30C17 30 21 26 21 20C21 13 17 6 12 2Z"
                fill={petal.color}
                fillOpacity="0.85"
              />
            </svg>
          ) : petal.shapeType === 1 ? (
            // Heart-shaped Petal
            <svg
              width={petal.size}
              height={petal.size}
              viewBox="0 0 24 24"
              fill="none"
              style={{ filter: "drop-shadow(0 2px 4px rgba(118, 87, 71, 0.15))" }}
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill={petal.color}
                fillOpacity="0.8"
              />
            </svg>
          ) : (
            // Asymmetric Blossom Petal
            <svg
              width={petal.size}
              height={petal.size * 1.1}
              viewBox="0 0 26 28"
              fill="none"
              style={{ filter: "drop-shadow(0 2px 4px rgba(118, 87, 71, 0.15))" }}
            >
              <path
                d="M13 1C5 5 1 15 5 22C9 29 20 28 23 21C26 14 21 6 13 1Z"
                fill={petal.color}
                fillOpacity="0.75"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}
