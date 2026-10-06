import React, { useState, useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { useInView } from '../hooks/useInView';

interface AnimatedMetricProps {
  value: string;
  className?: string;
  durationMs?: number;
}

/**
 * AnimatedMetric: Renders an executive count-up animation that fires exactly once when entering the viewport.
 * - Respects exact factual values (never invents numbers, decimals, or suffixes).
 * - Smooth cubic ease-out over 240ms–320ms.
 * - Immediately renders final static string if prefers-reduced-motion is true.
 * - Disconnects observer and cancels animation frame upon completion.
 */
export const AnimatedMetric: React.FC<AnimatedMetricProps> = ({
  value,
  className = '',
  durationMs = 280,
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [ref, isInView] = useInView<HTMLSpanElement>({ threshold: 0.2 });
  const [displayValue, setDisplayValue] = useState<string>(() => {
    // If reduced motion is requested from the start, display final value immediately
    return prefersReducedMotion ? value : value;
  });
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    if (!isInView || hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    // Detect numeric pattern
    // Case A: +2.7M
    const matchDecimalM = value.match(/^([+]?)(\d+\.\d+)(M)$/);
    // Case B: ~90
    const matchTilde = value.match(/^([~]?)(\d+)$/);
    // Case C: +1,300
    const matchThousands = value.match(/^([+]?)(\d+),(\d+)$/);
    // Case D: Pure integer e.g. 200
    const matchInt = value.match(/^(\d+)$/);

    if (matchDecimalM) {
      const prefix = matchDecimalM[1]; // "+"
      const target = parseFloat(matchDecimalM[2]); // 2.7
      const suffix = matchDecimalM[3]; // "M"
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        // Ease out cubic: 1 - pow(1 - progress, 3)
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = target * ease;

        if (progress < 1) {
          setDisplayValue(`${prefix}${current.toFixed(1)}${suffix}`);
          requestAnimationFrame(step);
        } else {
          setDisplayValue(value);
        }
      };
      requestAnimationFrame(step);
    } else if (matchTilde) {
      const prefix = matchTilde[1]; // "~"
      const target = parseInt(matchTilde[2], 10); // 90
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * ease);

        if (progress < 1) {
          setDisplayValue(`${prefix}${current}`);
          requestAnimationFrame(step);
        } else {
          setDisplayValue(value);
        }
      };
      requestAnimationFrame(step);
    } else if (matchThousands) {
      const prefix = matchThousands[1]; // "+"
      const target = parseInt(`${matchThousands[2]}${matchThousands[3]}`, 10); // 1300
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * ease);

        if (progress < 1) {
          setDisplayValue(`${prefix}${current.toLocaleString()}`);
          requestAnimationFrame(step);
        } else {
          setDisplayValue(value);
        }
      };
      requestAnimationFrame(step);
    } else if (matchInt) {
      const target = parseInt(matchInt[1], 10); // 200
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * ease);

        if (progress < 1) {
          setDisplayValue(`${current}`);
          requestAnimationFrame(step);
        } else {
          setDisplayValue(value);
        }
      };
      requestAnimationFrame(step);
    } else {
      // For ordinals like "1er Lugar", render the exact text directly with no numeric distortion
      setDisplayValue(value);
    }
  }, [isInView, value, durationMs, prefersReducedMotion]);

  return (
    <span ref={ref} className={`inline-block tabular-nums transition-opacity duration-200 ${className}`}>
      {displayValue}
    </span>
  );
};
