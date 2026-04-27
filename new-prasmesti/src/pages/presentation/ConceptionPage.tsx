import React from 'react';
import Navbar from '../../components/Navbar';
import Conception from '../../components/presentation/Conception';
import Footer from '../../components/Footer';
import SmoothCursor from '../../components/SmoothCursor';

function ConceptionPage() {
  React.useEffect(() => { window.scrollTo({ top: 0 }); }, []);
  return (
    <div className="site-root">
      <SmoothCursor />
      <Navbar />
      <main className="site-main"><Conception /></main>
      <Footer />
    </div>
  );
}

export default ConceptionPage;
