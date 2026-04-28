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
    const handlePointerMove = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const section = target?.closest('.site-glow-section') as HTMLElement | null;

      document.querySelectorAll<HTMLElement>('.site-glow-section').forEach((el) => {
        if (el !== section) el.style.setProperty('--section-glow-opacity', '0');
      });

      if (!section) return;

      const rect = section.getBoundingClientRect();
      section.style.setProperty('--section-cursor-x', `${event.clientX - rect.left}px`);
      section.style.setProperty('--section-cursor-y', `${event.clientY - rect.top}px`);
      section.style.setProperty('--section-glow-opacity', '1');
    };

    const handlePointerLeave = () => {
      document.querySelectorAll<HTMLElement>('.site-glow-section').forEach((el) => {
        el.style.setProperty('--section-glow-opacity', '0');
      });
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <div className="site-root">
      <SmoothCursor />
      <Navbar />
      <main className="site-main">
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
