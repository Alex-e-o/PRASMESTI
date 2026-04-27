import React from 'react';
import Navbar from '../../components/Navbar';
import PresentationDetail from '../../components/presentation/PresentationDetail';
import Footer from '../../components/Footer';
import SmoothCursor from '../../components/SmoothCursor';

function PresentationDetailPage() {
  React.useEffect(() => { window.scrollTo({ top: 0 }); }, []);
  return (
    <div className="site-root">
      <SmoothCursor />
      <Navbar />
      <main className="site-main"><PresentationDetail /></main>
      <Footer />
    </div>
  );
}

export default PresentationDetailPage;
