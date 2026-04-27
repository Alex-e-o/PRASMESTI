import React from 'react';
import Navbar from '../components/Navbar';
import Presentation from '../components/Presentation';
import Footer from '../components/Footer';
import SmoothCursor from '../components/SmoothCursor';

function PresentationPage() {
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="site-root">
      <SmoothCursor />
      <Navbar />
      <main className="site-main">
        <Presentation />
      </main>
      <Footer />
    </div>
  );
}

export default PresentationPage;
