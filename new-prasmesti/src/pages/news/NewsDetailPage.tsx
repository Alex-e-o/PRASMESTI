import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import NewsDetail from '../../components/news/NewsDetail';
import Footer from '../../components/Footer';
import SmoothCursor from '../../components/SmoothCursor';

function NewsDetailPage() {
  const { slug = '' } = useParams();
  React.useEffect(() => { window.scrollTo({ top: 0 }); }, [slug]);
  return (
    <div className="site-root">
      <SmoothCursor />
      <Navbar />
      <main id="main" className="site-main"><NewsDetail slug={slug} /></main>
      <Footer />
    </div>
  );
}

export default NewsDetailPage;
