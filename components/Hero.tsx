"use client";

import {
  LayoutGroup,
  motion,
  useReducedMotion,
  type Transition,
} from "framer-motion";
import { useEffect, useState } from "react";

const EASE = [0.4, 0, 0.2, 1] as const;

const BRAND_LINES = ["NEW", "WORLD", "CADASTRE"] as const;

const LARGE_CIRCLE = 192;
const SMALL_CIRCLE = 96;

type Phase = "reveal" | "compose" | "header";

const motionTransition = (duration: number, reduced: boolean): Transition =>
  reduced ? { duration: 0.01 } : { duration, ease: EASE };

const STROKE_PATHS = [
  { type: "circle" as const, delay: 0.35 },
  { type: "path" as const, d: "M12 13V7", delay: 0.55 },
  {
    type: "path" as const,
    d: "M7.5 9.5C8.8 7.8 10.3 6.8 12 6.8C13.7 6.8 15.2 7.8 16.5 9.5",
    delay: 0.65,
  },
  { type: "path" as const, d: "M6 13H18", delay: 0.75, faint: true },
  { type: "path" as const, d: "M8.5 16.5L12 13L15.5 16.5", delay: 0.85 },
] as const;

function TachymeterDraw({
  active,
  reduced,
  className,
}: {
  active: boolean;
  reduced: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {STROKE_PATHS.map((item) => {
        const key = item.type === "circle" ? "ring" : item.d;
        const shared = {
          stroke: "currentColor",
          strokeWidth: 1.5,
          strokeLinecap: "round" as const,
          strokeLinejoin: "round" as const,
          fill: "none" as const,
          initial: { pathLength: 0, opacity: 0 },
          animate: {
            pathLength: active ? 1 : 0,
            opacity: active
              ? item.type === "path" && "faint" in item && item.faint
                ? 0.35
                : 1
              : 0,
          },
          transition: reduced
            ? { duration: 0.01 }
            : { duration: 0.45, ease: EASE, delay: item.delay },
        };

        if (item.type === "circle") {
          return (
            <motion.circle key={key} cx="12" cy="13" r="8" {...shared} />
          );
        }

        return <motion.path key={key} d={item.d} {...shared} />;
      })}
      <motion.circle
        cx="12"
        cy="13"
        r="1.25"
        fill="currentColor"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: active ? 1 : 0,
          scale: active ? 1 : 0,
        }}
        transition={
          reduced
            ? { duration: 0.01 }
            : { duration: 0.25, ease: EASE, delay: 1.05 }
        }
      />
    </svg>
  );
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const reduced = !!prefersReducedMotion;
  
  const [phase, setPhase] = useState<Phase>(reduced ? "header" : "reveal");
  const [drawIcon, setDrawIcon] = useState(reduced);

  useEffect(() => {
    if (reduced) return;

    const drawTimer = window.setTimeout(() => setDrawIcon(true), 320);
    const composeTimer = window.setTimeout(() => setPhase("compose"), 1250);
    const headerTimer = window.setTimeout(() => setPhase("header"), 1250 + 1500);

    return () => {
      window.clearTimeout(drawTimer);
      window.clearTimeout(composeTimer);
      window.clearTimeout(headerTimer);
    };
  }, [reduced]);

  const isReveal = phase === "reveal";
  const isCompose = phase === "compose";
  const isHeader = phase === "header";
  const showBrandRow = isCompose || isHeader;

  const circleSize = isReveal ? LARGE_CIRCLE : SMALL_CIRCLE;

  const wrapperTransition = motionTransition(isHeader ? 0.7 : isCompose ? 1.5 : 0.55, reduced);

  const composeTransition = motionTransition(1.5, reduced);

  return (
    <section
      aria-label="New World Cadastre"
      className="relative min-h-screen bg-cadastre-white"
    >
      <div className="absolute inset-0 z-0">
      <img 
          src="/hero.jpg" 
          alt="Кадастровые работы" 
          className="w-full h-full object-cover object-left md:object-center"
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Затемнение для красоты */}
      </div>
 
      <h1 className="sr-only">New World Cadastre</h1>
    </section>
  );
}