import React from 'react';

function canUseSmoothCursor() {
  if (typeof window === 'undefined' || typeof matchMedia === 'undefined') return false;
  return matchMedia('(pointer: fine)').matches && !matchMedia('(hover: none)').matches;
}

const SmoothCursor: React.FC = () => {
  const [enabled, setEnabled] = React.useState(false);
  const dotRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const active = canUseSmoothCursor();
    setEnabled(active);
    if (!active) return;

    document.body.classList.add('smooth-cursor-active');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let angle = -18;
    let frame = 0;

    if (dotRef.current) {
      dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) rotate(${angle}deg)`;
    }

    const move = (event: PointerEvent) => {
      const dx = event.clientX - mouseX;
      const dy = event.clientY - mouseY;
      mouseX = event.clientX;
      mouseY = event.clientY;

      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        angle = (Math.atan2(dy, dx) * 180) / Math.PI + 135;
      }
    };

    const down = () => {
      dotRef.current?.classList.add('is-pressed');
    };

    const up = () => {
      dotRef.current?.classList.remove('is-pressed');
    };

    const loop = () => {
      cursorX += (mouseX - cursorX) * 0.24;
      cursorY += (mouseY - cursorY) * 0.24;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) rotate(${angle}deg)`;
      }
      frame = window.requestAnimationFrame(loop);
    };

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerdown', down);
    window.addEventListener('pointerup', up);
    frame = window.requestAnimationFrame(loop);

    return () => {
      document.body.classList.remove('smooth-cursor-active');
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerdown', down);
      window.removeEventListener('pointerup', up);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div ref={dotRef} className="smooth-cursor-dot" aria-hidden="true">
      <svg viewBox="0 0 18 26" className="smooth-cursor-arrow">
        <path d="M2 1.5L2.9 19.8L7.6 15.3L10.7 23.6L14 22.1L10.9 13.9L17 13.2L2 1.5Z" fill="#050816" />
      </svg>
    </div>
  );
};

export default SmoothCursor;
