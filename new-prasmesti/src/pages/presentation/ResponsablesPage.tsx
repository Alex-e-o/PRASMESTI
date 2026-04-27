import React from 'react';
import Navbar from '../../components/Navbar';
import Responsables from '../../components/presentation/Responsables';
import Footer from '../../components/Footer';
import SmoothCursor from '../../components/SmoothCursor';

function ResponsablesPage() {
  React.useEffect(() => { window.scrollTo({ top: 0 }); }, []);
  return (
    <div className="site-root">
      <SmoothCursor />
      <Navbar />
      <main className="site-main"><Responsables /></main>
      <Footer />
    </div>
  );
}

export default ResponsablesPage;
