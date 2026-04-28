import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SmoothCursor from '../../components/SmoothCursor';
import ImplementationGabonStats from '../../components/presentation/ImplementationGabonStats';

function ImplementationGabonPage() {
  React.useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  return (
    <div className="site-root">
      <SmoothCursor />
      <Navbar />
      <main className="site-main">
        <ImplementationGabonStats />
      </main>
      <Footer />
    </div>
  );
}

export default ImplementationGabonPage;
