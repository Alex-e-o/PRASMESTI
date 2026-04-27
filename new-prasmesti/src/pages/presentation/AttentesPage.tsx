import React from 'react';
import Navbar from '../../components/Navbar';
import Attentes from '../../components/presentation/Attentes';
import Footer from '../../components/Footer';
import SmoothCursor from '../../components/SmoothCursor';

function AttentesPage() {
  React.useEffect(() => { window.scrollTo({ top: 0 }); }, []);
  return (
    <div className="site-root">
      <SmoothCursor />
      <Navbar />
      <main className="site-main"><Attentes /></main>
      <Footer />
    </div>
  );
}

export default AttentesPage;
