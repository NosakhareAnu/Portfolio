import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

function ScrollToLocation() {
  const { pathname, hash, key } = useLocation();
  const navigationType = useNavigationType();
  const previousPathname = useRef(null);
  const savedPositions = useRef(new Map());

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Remember the scroll position of each history entry so back/forward can restore it.
  useEffect(() => {
    let frame = 0;
    const savePosition = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => savedPositions.current.set(key, window.scrollY));
    };

    window.addEventListener('scroll', savePosition, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', savePosition);
    };
  }, [key]);

  useEffect(() => {
    const isNewPage = previousPathname.current !== pathname;
    previousPathname.current = pathname;

    if (navigationType === 'POP' && savedPositions.current.has(key)) {
      window.scrollTo({ top: savedPositions.current.get(key), left: 0, behavior: 'instant' });
      return;
    }

    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));

      if (target) {
        // Jump instantly when arriving from another page; glide for in-page navigation.
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        target.scrollIntoView({ behavior: isNewPage || reduceMotion ? 'instant' : 'smooth' });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash, key, navigationType]);

  return null;
}

export default ScrollToLocation;
