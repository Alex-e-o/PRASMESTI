import React from 'react';
import Navbar from '../../components/Navbar';
import ImplementationStatus from '../../components/presentation/ImplementationStatus';
import Footer from '../../components/Footer';
import SmoothCursor from '../../components/SmoothCursor';

function ImplementationStatusPage() {
  React.useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  return (
    <div className="site-root">
      <SmoothCursor />
      <Navbar />
      <main className="site-main">
        <ImplementationStatus />
      </main>
      <Footer />
    </div>
  );
}

export default ImplementationStatusPage;
