import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Fades in elements marked with `data-reveal` as they enter the viewport.
// Content stays fully visible when JavaScript, IntersectionObserver, or motion is unavailable.
function RevealOnScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]:not(.is-visible)');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    document.documentElement.classList.add('reveal-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

export default RevealOnScroll;
