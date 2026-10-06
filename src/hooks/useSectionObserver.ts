import { useEffect, useRef } from 'react';
import { trackSectionView } from '../lib/telemetry';

/**
 * Custom hook that tracks when a strategic section becomes visible in the viewport.
 * Dispatches a section_view event exactly once per page load.
 */
export function useSectionObserver(sectionName: string) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            trackSectionView(sectionName);
            observer.disconnect();
            break;
          }
        }
      },
      {
        threshold: 0.25, // Trigger when 25% of the section is visible
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [sectionName]);

  return ref;
}

/**
 * Page-level observer hook that automatically attaches an IntersectionObserver
 * to any container having `data-telemetry-section="<name>"`.
 * Fires section_view once per section per page view.
 */
export function usePageSectionsObserver(dependencyKey?: any) {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    // Allow DOM to settle after page render
    const timeoutId = setTimeout(() => {
      const sectionElements = document.querySelectorAll<HTMLElement>('[data-telemetry-section]');
      if (!sectionElements.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              const sectionName = target.getAttribute('data-telemetry-section');
              if (sectionName) {
                trackSectionView(sectionName);
              }
              observer.unobserve(target);
            }
          }
        },
        {
          threshold: 0.2,
        }
      );

      sectionElements.forEach((el) => observer.observe(el));

      return () => {
        observer.disconnect();
      };
    }, 150);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [dependencyKey]);
}
