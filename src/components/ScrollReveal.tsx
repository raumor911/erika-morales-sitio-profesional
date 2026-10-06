import React from 'react';
import { useInView } from '../hooks/useInView';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  displacementPx?: number;
}

/**
 * ScrollReveal: Elegant, accessible scroll reveal component.
 * - Smooth entrance (opacity 0 -> 1, translateY 18px -> 0px).
 * - Timing: ~260ms duration with cubic-bezier(0.16, 1, 0.3, 1).
 * - Stagger support via delayMs.
 * - Automatically respects prefers-reduced-motion (no displacement, instant appearance).
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delayMs = 0,
  displacementPx = 18,
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: '280ms',
        transitionDelay: `${delayMs}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : `translateY(${displacementPx}px)`,
        willChange: isInView ? 'auto' : 'opacity, transform',
      }}
      className={`transition-[opacity,transform] ${className}`}
    >
      {children}
    </div>
  );
};
