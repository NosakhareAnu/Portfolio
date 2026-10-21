import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const root = document.documentElement;
    const supported = window.matchMedia('(hover: hover) and (pointer: fine) and (forced-colors: none)');
    const interactive = 'a[href], button:not(:disabled), [role="button"], summary';
    const native = 'input, textarea, select, [contenteditable]:not([contenteditable="false"]), iframe';

    const hide = () => {
      root.classList.remove('has-custom-cursor');
      cursor.classList.remove('is-visible', 'is-pressed');
    };

    const move = (event) => {
      if (!supported.matches || event.pointerType !== 'mouse' || event.target.closest(native)) {
        hide();
        return;
      }

      // Follow the actual pointer immediately: no lag, trail, or animation loop.
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      cursor.classList.toggle('is-interactive', Boolean(event.target.closest(interactive)));
      cursor.classList.add('is-visible');
      root.classList.add('has-custom-cursor');
    };
    const press = (event) => {
      move(event);
      cursor.classList.toggle('is-pressed', event.pointerType === 'mouse' && cursor.classList.contains('is-visible'));
    };
    const release = () => cursor.classList.remove('is-pressed');
    const leave = (event) => { if (!event.relatedTarget) hide(); };
    const keyboard = (event) => { if (event.key === 'Tab') hide(); };

    document.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerover', move, { passive: true });
    document.addEventListener('pointerdown', press, { passive: true });
    document.addEventListener('pointerup', release, { passive: true });
    document.addEventListener('pointerout', leave);
    document.addEventListener('pointercancel', hide);
    document.addEventListener('keydown', keyboard);
    document.addEventListener('visibilitychange', hide);
    window.addEventListener('blur', hide);
    supported.addEventListener('change', hide);

    return () => {
      hide();
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerover', move);
      document.removeEventListener('pointerdown', press);
      document.removeEventListener('pointerup', release);
      document.removeEventListener('pointerout', leave);
      document.removeEventListener('pointercancel', hide);
      document.removeEventListener('keydown', keyboard);
      document.removeEventListener('visibilitychange', hide);
      window.removeEventListener('blur', hide);
      supported.removeEventListener('change', hide);
    };
  }, []);

  return (
    <div className="custom-cursor-layer" aria-hidden="true">
      <div className="custom-cursor" ref={cursorRef}>
        <svg className="custom-cursor-arrow" width="24" height="30" viewBox="0 0 24 30" focusable="false">
          <path d="M3 2V23L8.5 18L13 27L17 25L12.5 16H20Z" />
        </svg>
      </div>
    </div>
  );
}
