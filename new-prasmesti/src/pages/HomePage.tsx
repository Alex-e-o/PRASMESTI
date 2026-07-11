import React from 'react';
import HomeFlagStrip from '../components/HomeFlagStrip';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SmoothCursor from '../components/SmoothCursor';
import PresidentialMessage from '../components/PresidentialMessage';
import RegionalOverview from '../components/RegionalOverview';
import CommissionerVoices from '../components/CommissionerVoices';
import NewsSection from '../components/NewsSection';
import Footer from '../components/Footer';
function HomePage() {
  React.useEffect(() => {
    // Throttlé en rAF : plus de querySelectorAll à chaque mouvement, on ne
    // réinitialise que la section précédemment active (évite le reflow forcé).
    let activeSection: HTMLElement | null = null;
    let frame = 0;
    let pending: { x: number; y: number; target: HTMLElement | null } | null = null;

    const apply = () => {
      frame = 0;
      if (!pending) return;
      const { x, y, target } = pending;
      const section = target?.closest('.site-glow-section') as HTMLElement | null;
      if (section !== activeSection) {
        activeSection?.style.setProperty('--section-glow-opacity', '0');
        activeSection = section;
      }
      if (!section) return;
      const rect = section.getBoundingClientRect();
      section.style.setProperty('--section-cursor-x', `${x - rect.left}px`);
      section.style.setProperty('--section-cursor-y', `${y - rect.top}px`);
      section.style.setProperty('--section-glow-opacity', '1');
    };

    const handlePointerMove = (event: PointerEvent) => {
      pending = { x: event.clientX, y: event.clientY, target: event.target as HTMLElement | null };
      if (!frame) frame = requestAnimationFrame(apply);
    };

    const handlePointerLeave = () => {
      activeSection?.style.setProperty('--section-glow-opacity', '0');
      activeSection = null;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <div className="site-root">
      <SmoothCursor />
      <Navbar />
      <main id="main" className="site-main">
        <Hero />
        <RegionalOverview />
        <PresidentialMessage />
        <CommissionerVoices />
        <NewsSection />
        <HomeFlagStrip />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
