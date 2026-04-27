import React from 'react';
import Navbar from '../../components/Navbar';
import Objectifs from '../../components/presentation/Objectifs';
import Footer from '../../components/Footer';
import SmoothCursor from '../../components/SmoothCursor';

function ObjectifsPage() {
  React.useEffect(() => { window.scrollTo({ top: 0 }); }, []);
  return (
    <div className="site-root">
      <SmoothCursor />
      <Navbar />
      <main className="site-main"><Objectifs /></main>
      <Footer />
    </div>
  );
}

export default ObjectifsPage;
