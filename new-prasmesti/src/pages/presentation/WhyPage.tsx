import React from 'react';
import Navbar from '../../components/Navbar';
import WhyPrasmesti from '../../components/presentation/WhyPrasmesti';
import Footer from '../../components/Footer';
import SmoothCursor from '../../components/SmoothCursor';

function WhyPage() {
  React.useEffect(() => { window.scrollTo({ top: 0 }); }, []);
  return (
    <div className="site-root">
      <SmoothCursor />
      <Navbar />
      <main className="site-main"><WhyPrasmesti /></main>
      <Footer />
    </div>
  );
}

export default WhyPage;
