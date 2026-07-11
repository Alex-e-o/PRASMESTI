import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SmoothCursor from '../../components/SmoothCursor';
import ImplementationCountryStats from '../../components/presentation/ImplementationCountryStats';
import { getCountryBySlug } from '../../data/implementationCountries';

function ImplementationCountryPage() {
  const { slug } = useParams<{ slug: string }>();
  React.useEffect(() => { window.scrollTo({ top: 0 }); }, [slug]);

  const country = slug ? getCountryBySlug(slug) : undefined;
  if (!country) {
    return <Navigate to="/presentation/implementation" replace />;
  }

  return (
    <div className="site-root">
      <SmoothCursor />
      <Navbar />
      <main id="main" className="site-main">
        <ImplementationCountryStats country={country} />
      </main>
      <Footer />
    </div>
  );
}

export default ImplementationCountryPage;
