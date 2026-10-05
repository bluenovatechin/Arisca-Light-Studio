import React from 'react';
import SeoHead from '../components/SeoHead';
import { LightbulbOff, Home, Search, Compass, BookOpen, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function NotFoundPage({ onNavigate }) {
  const { openSearch } = useCart();

  const suggestedLinks = [
    { label: 'COB Downlights', path: '/shop' },
    { label: 'Chandeliers Collection', path: '/collection?cat=chandeliers' },
    { label: 'Wall Sconces & Grazers', path: '/collection?cat=wall' },
    { label: 'Architectural Lookbooks', path: '/catalogs' },
    { label: 'Client Project Diaries', path: '/client-diaries' }
  ];

  return (
    <div className="not-found-page-wrapper">
      <SeoHead
        title="404 - Page Not Found | Arisca Light Studio"
        description="The lighting page or fixture you were looking for could not be found. Explore our complete architectural lighting collection and catalogs."
        canonicalUrl="https://www.ariscalightstudio.com/#/404"
      />

      <div className="container">
        <div className="not-found-card">
          <div className="not-found-icon-wrap">
            <LightbulbOff size={48} className="gold-text" />
          </div>
          <span className="section-badge">Error 404 • Unlit Corridor</span>
          <h1 className="not-found-title">This Page Is Not Illuminated</h1>
          <p className="not-found-subtitle">
            The page, luminaire specification, or link you are seeking has either been relocated or no longer exists in our studio catalog.
          </p>

          <div className="not-found-actions">
            <button className="btn btn-primary btn-lg" onClick={() => onNavigate('/')}>
              <Home size={18} /> Return to Studio Home
            </button>
            <button className="btn btn-secondary btn-lg" onClick={openSearch}>
              <Search size={18} /> Search The Catalog
            </button>
          </div>

          <div className="not-found-suggestions">
            <span className="nfs-title">Explore Popular Studio Collections:</span>
            <div className="nfs-pills">
              {suggestedLinks.map((link) => (
                <button
                  key={link.path}
                  className="nfs-pill"
                  onClick={() => onNavigate(link.path)}
                >
                  {link.label} <ArrowRight size={13} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
