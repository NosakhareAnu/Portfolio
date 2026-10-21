import { useEffect, useLayoutEffect, useRef } from 'react';
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
  useLayoutEffect(() => {
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

  useLayoutEffect(() => {
    const isInitialLoad = previousPathname.current === null;
    const isNewPage = previousPathname.current !== pathname;
    previousPathname.current = pathname;

    if (navigationType === 'POP' && savedPositions.current.has(key)) {
      window.scrollTo({ top: savedPositions.current.get(key), left: 0, behavior: 'instant' });
      return;
    }

    if (hash) {
      let id = hash.slice(1);
      try { id = decodeURIComponent(id); } catch { /* Keep malformed fragments harmless. */ }
      const target = document.getElementById(id);

      if (target) {
        // Jump instantly when arriving from another page; glide for in-page navigation.
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        target.scrollIntoView({ behavior: isNewPage || reduceMotion ? 'instant' : 'smooth' });
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (isNewPage && !isInitialLoad) document.getElementById('main-content')?.focus({ preventScroll: true });
  }, [pathname, hash, key, navigationType]);

  return null;
}

export default ScrollToLocation;
