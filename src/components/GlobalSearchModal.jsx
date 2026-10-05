import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  X,
  Tag,
  MapPin,
  Lightbulb,
  ArrowRight,
  TrendingUp,
  Sparkles,
  ShoppingBag,
  SlidersHorizontal,
  BookOpen,
  Download,
  ExternalLink,
  FileText
} from 'lucide-react';
import { searchArisca, priceBrackets, coverageAreas } from '../data/ariscaData';
import { loadCollection, studioImage } from '../data/collection';

export default function GlobalSearchModal({ isOpen, onClose, onNavigate, onQuickView }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState({ products: [], locations: [], categories: [], catalogs: [] });
  const [collectionHits, setCollectionHits] = useState({ total: 0, items: [] });
  const inputRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    loadCollection(); // warm the catalog data while the user types
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return setCollectionHits({ total: 0, items: [] });
    let live = true;
    loadCollection().then((all) => {
      if (!live) return;
      const hits = all.filter((i) => terms.every((t) => i.search.includes(t)));
      setCollectionHits({ total: hits.length, items: hits.slice(0, 8) });
    });
    return () => { live = false; };
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setResults({ products: [], locations: [], categories: [], catalogs: [] });
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults({ products: [], locations: [], categories: [], catalogs: [] });
      return;
    }
    const res = searchArisca(query);
    setResults(res);
  }, [query]);

  if (!isOpen) return null;

  const popularSearches = [
    'Chandelier',
    'Antique Brass',
    'Marble wall light',
    'Crystal',
    'Floor lamp',
    'Under ₹1,500',
    'Anti-glare COB',
    'Surface Cylinder'
  ];

  const handleSelectProduct = (slug) => {
    onClose();
    onNavigate(`/product/${slug}`);
  };

  const handleSelectCategory = (catId) => {
    onClose();
    onNavigate(`/shop?category=${catId}`);
  };

  const handleSelectPrice = (bracket) => {
    onClose();
    onNavigate(`/shop?maxPrice=${bracket.max || 5000}&minPrice=${bracket.min || 0}`);
  };

  const handleSelectLocation = () => {
    onClose();
    onNavigate('/contact#showroom');
  };

  return (
    <div className="search-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Global Search">
      <div className="search-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Search Input Bar */}
        <div className="search-input-header">
          <Search size={22} className="search-modal-icon" />
          <input
            ref={inputRef}
            type="search"
            className="search-modal-input"
            placeholder="Search chandeliers, finishes, item numbers, or 'under 2000'…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button className="search-clear-btn" onClick={() => setQuery('')} aria-label="Clear query">
              <X size={18} />
            </button>
          )}
          <button className="search-modal-close" onClick={onClose} aria-label="Close search">
            <kbd className="esc-key">ESC</kbd>
          </button>
        </div>

        {/* Search Body */}
        <div className="search-modal-body custom-scrollbar">
          {/* If no query: show Popular searches, Price Brackets, and Showroom locations */}
          {!query.trim() ? (
            <div className="search-defaults">
              {/* Popular Searches */}
              <div className="search-section">
                <div className="search-section-label">
                  <TrendingUp size={14} /> Popular Searches in Ahmedabad
                </div>
                <div className="popular-tags-wrap">
                  {popularSearches.map((term, i) => (
                    <button
                      key={i}
                      className="popular-tag-btn"
                      onClick={() => setQuery(term.replace('Under ₹', 'under '))}
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Brackets Filter */}
              <div className="search-section">
                <div className="search-section-label">
                  <Tag size={14} /> Shop by Studio Price Bracket
                </div>
                <div className="search-price-grid">
                  {priceBrackets.map((pb) => (
                    <div
                      key={pb.id}
                      className="search-price-card"
                      onClick={() => handleSelectPrice(pb)}
                    >
                      <div className="sp-label">{pb.label}</div>
                      <div className="sp-desc">{pb.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Showroom & Service Areas */}
              <div className="search-section">
                <div className="search-section-label">
                  <MapPin size={14} /> Studio Locations & On-Site Consultation Areas
                </div>
                <div className="search-locations-pills">
                  {coverageAreas.slice(0, 6).map((area, idx) => (
                    <div
                      key={idx}
                      className="search-location-pill"
                      onClick={handleSelectLocation}
                    >
                      <MapPin size={13} className="pin-icon" />
                      <span className="loc-name">{area.name}</span>
                      <span className="loc-eta">{area.eta}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Results View */
            <div className="search-results-wrapper">
              {collectionHits.total > 0 && (
                <div className="search-result-group">
                  <div className="search-result-title">
                    <Sparkles size={15} /> From the collection ({collectionHits.total})
                  </div>
                  <div className="search-collection-grid">
                    {collectionHits.items.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        className="search-collection-item"
                        onClick={() => { onClose(); onNavigate(`/collection/${item.id}`); }}
                      >
                        <img src={studioImage(item)} alt="" loading="lazy" />
                        <span><strong>{item.title}</strong>No. {item.no}</span>
                      </button>
                    ))}
                  </div>
                  {collectionHits.total > collectionHits.items.length && (
                    <button
                      type="button"
                      className="search-view-all-link"
                      onClick={() => { onClose(); onNavigate(`/collection?q=${encodeURIComponent(query.trim())}`); }}
                    >
                      See all {collectionHits.total} matches in the collection →
                    </button>
                  )}
                </div>
              )}

              {/* Product Matches */}
              {results.products?.length > 0 && (
                <div className="search-result-group">
                  <div className="search-result-title">
                    <Lightbulb size={15} /> Matching Products ({results.products.length})
                  </div>
                  <div className="search-products-list">
                    {results.products.map((prod) => (
                      <div
                        key={prod.id}
                        className="search-product-item"
                        onClick={() => handleSelectProduct(prod.slug)}
                      >
                        <img
                          src={prod.thumbnail}
                          alt={prod.title}
                          className="sp-thumb"
                          loading="lazy"
                        />
                        <div className="sp-info">
                          <div className="sp-title-row">
                            <span className="sp-title">{prod.title}</span>
                            <span className="sp-price">{prod.formattedPrice}</span>
                          </div>
                          <div className="sp-meta-row">
                            <span className="sp-badge">{prod.specs.wattage}</span>
                            <span className="sp-badge finish">{prod.finish}</span>
                            <span className="sp-mrp">MRP {prod.formattedMrp}</span>
                            <span className="sp-discount">{prod.discountPercent}% OFF</span>
                          </div>
                          <p className="sp-rooms">
                            Ideal for: {prod.suitableRooms.slice(0, 2).join(' • ')}
                          </p>
                        </div>
                        <ArrowRight size={16} className="sp-arrow" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Location Matches */}
              {results.locations?.length > 0 && (
                <div className="search-result-group">
                  <div className="search-result-title">
                    <MapPin size={15} /> Showroom & Consultation Areas in Ahmedabad
                  </div>
                  <div className="search-locations-grid">
                    {results.locations.map((loc, i) => (
                      <div
                        key={i}
                        className="search-location-card"
                        onClick={handleSelectLocation}
                      >
                        <div className="sl-name">{loc.name}</div>
                        <div className="sl-meta">
                          <span>{loc.distance} from studio</span> • <span>{loc.eta} service ETA</span>
                        </div>
                        <div className="sl-services">
                          {loc.services.map((s, idx) => (
                            <span key={idx} className="sl-badge">{s}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Category Matches */}
              {results.categories?.length > 0 && (
                <div className="search-result-group">
                  <div className="search-result-title">
                    <Sparkles size={15} /> Luminaire Categories
                  </div>
                  <div className="search-cat-pills">
                    {results.categories.map((cat) => (
                      <div
                        key={cat.id}
                        className="search-cat-pill"
                        onClick={() => handleSelectCategory(cat.id)}
                      >
                        <span className="cat-name">{cat.name}</span>
                        <span className="cat-tagline">{cat.tagline}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Architectural PDF Catalogs Matches */}
              {results.catalogs?.length > 0 && (
                <div className="search-result-group">
                  <div className="search-result-title">
                    <BookOpen size={15} /> Architectural Lookbooks & PDF Catalogs
                  </div>
                  <div className="search-catalogs-grid">
                    {results.catalogs.map((cat) => (
                      <div
                        key={cat.id}
                        className="search-catalog-card"
                        onClick={() => {
                          onClose();
                          onNavigate(`/collection?cat=${cat.categorySlug}`);
                        }}
                      >
                        <img src={cat.coverImage} alt={cat.title} className="sc-img" />
                        <div className="sc-info">
                          <span className="sc-vol">{cat.volume} • {cat.pages}</span>
                          <h4 className="sc-title">{cat.title}</h4>
                          <p className="sc-sub">{cat.subtitle}</p>
                          <div className="sc-actions">
                            <span className="sc-badge">PDF ({cat.fileSize})</span>
                            <span className="sc-link">Browse online →</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* No results */}
              {collectionHits.total === 0 && results.products?.length === 0 && results.locations?.length === 0 && results.categories?.length === 0 && results.catalogs?.length === 0 && (
                <div className="search-no-results">
                  <Lightbulb size={36} className="no-res-icon" />
                  <h4>No exact matches for "{query}"</h4>
                  <p>Try searching for wattages ("12w", "18w"), finishes ("rose gold", "black"), price ("under 2000"), or room ("living room").</p>
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      onClose();
                      onNavigate('/collection');
                    }}
                  >
                    Browse the collection <ArrowRight size={15} />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="search-modal-footer">
          <span>Tip: Press <strong>ESC</strong> to close</span>
          <button
            className="search-view-all-link"
            onClick={() => {
              onClose();
              onNavigate('/collection');
            }}
          >
            Browse the full collection →
          </button>
        </div>
      </div>
    </div>
  );
}
