import { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

export type Phase = "reveal" | "compose" | "header";

export function useBrandAnimation() {
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

  return { phase, drawIcon, reduced };
}