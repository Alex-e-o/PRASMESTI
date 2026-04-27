import React from 'react';
import Navbar from '../../components/Navbar';
import Enjeux from '../../components/presentation/Enjeux';
import Footer from '../../components/Footer';
import SmoothCursor from '../../components/SmoothCursor';

function EnjeuxPage() {
  React.useEffect(() => { window.scrollTo({ top: 0 }); }, []);
  return (
    <div className="site-root">
      <SmoothCursor />
      <Navbar />
      <main className="site-main"><Enjeux /></main>
      <Footer />
    </div>
  );
}

export default EnjeuxPage;
