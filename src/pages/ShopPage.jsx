import React, { useState, useMemo, useEffect } from 'react';
import { enrichedProducts } from '../data/ariscaData';
import ProductCard from '../components/ProductCard';
import SeoHead from '../components/SeoHead';
import { useCart } from '../context/CartContext';
import {
  Search,
  SlidersHorizontal,
  X,
  Grid,
  Sparkles,
  ShoppingBag,
  RotateCcw,
  ShieldCheck,
  Check,
  Zap,
  Tag,
  ArrowUpDown,
  Filter,
  CheckCircle2,
  Sliders
} from 'lucide-react';

export default function ShopPage({ initialCategory = 'all', query = '', onNavigate }) {
  const { openConsultModal } = useCart();

  // Read URL query params if present in window.location.hash
  const [categoryFilter, setCategoryFilter] = useState(initialCategory);
  const [wattageFilter, setWattageFilter] = useState('all');
  const [finishFilter, setFinishFilter] = useState('all');
  const [roomFilter, setRoomFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Apply URL query params (?category=cob&wattage=12...). The router remounts
  // this page whenever the query changes, so this runs for every new URL.
  useEffect(() => {
    if (query) {
      const params = new URLSearchParams(query);
      if (params.get('category')) setCategoryFilter(params.get('category'));
      if (params.get('wattage')) setWattageFilter(params.get('wattage'));
      if (params.get('room')) setRoomFilter(params.get('room'));
    }
  }, []);

  const categories = [
    { id: 'all', label: 'All Luminaires', count: enrichedProducts.length },
    {
      id: 'cob',
      label: 'COB Downlights',
      count: enrichedProducts.filter((p) => p.categoryKey === 'cob').length
    },
    {
      id: 'cylinder',
      label: 'Surface Cylinders',
      count: enrichedProducts.filter((p) => p.categoryKey === 'cylinder').length
    },
    {
      id: 'panel',
      label: 'SSK LED Panels',
      count: enrichedProducts.filter((p) => p.categoryKey === 'panel').length
    }
  ];

  const wattages = ['all', 7, 8, 12, 15, 18];
  const finishes = [
    'all',
    'Black + Rose Gold',
    'Matte Obsidian Black',
    'Architectural Pure White'
  ];

  const roomOptions = [
    'all',
    'Living Room',
    'Bedroom',
    'Kitchen Island',
    'Dining Area',
    'Foyer & Hallway'
  ];

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return enrichedProducts
      .filter((p) => {
        // Category filter
        if (categoryFilter !== 'all' && p.categoryKey !== categoryFilter) return false;

        // Wattage filter
        if (wattageFilter !== 'all' && p.wattage !== parseInt(wattageFilter, 10)) {
          return false;
        }

        // Finish filter
        if (finishFilter !== 'all') {
          if (finishFilter === 'Black + Rose Gold' && !/bk\+rg|rose/i.test(p.title + p.finish)) return false;
          if (finishFilter === 'Matte Obsidian Black' && !/bk\+bk|black/i.test(p.title + p.finish)) return false;
          if (finishFilter === 'Architectural Pure White' && !/white/i.test(p.title + p.finish)) return false;
        }

        // Room filter
        if (roomFilter !== 'all') {
          if (!p.suitableRooms.some(r => r.toLowerCase().includes(roomFilter.toLowerCase()))) return false;
        }

        // Search Query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matchTitle = p.title.toLowerCase().includes(q);
          const matchType = p.type.toLowerCase().includes(q);
          const matchFinish = p.finish.toLowerCase().includes(q);
          const matchTokens = p.searchTokens?.some(t => t.includes(q));
          if (!matchTitle && !matchType && !matchFinish && !matchTokens) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'wattage-desc') return b.wattage - a.wattage;
        if (sortBy === 'wattage-asc') return a.wattage - b.wattage;
        if (sortBy === 'name') return a.title.localeCompare(b.title);
        return (a.order || 0) - (b.order || 0);
      });
  }, [categoryFilter, wattageFilter, finishFilter, roomFilter, searchQuery, sortBy]);

  const resetAllFilters = () => {
    setCategoryFilter('all');
    setWattageFilter('all');
    setFinishFilter('all');
    setRoomFilter('all');
    setSearchQuery('');
    setSortBy('featured');
  };

  const hasActiveFilters =
    categoryFilter !== 'all' ||
    wattageFilter !== 'all' ||
    finishFilter !== 'all' ||
    roomFilter !== 'all' ||
    searchQuery.trim() !== '';

  return (
    <div className="shop-page-wrapper">
      {/* Maximum SEO for Catalog */}
      <SeoHead
        title={`Architectural Downlights in Ahmedabad | ${enrichedProducts.length} Fixtures | Arisca Light Studio`}
        description="Browse Ahmedabad's complete architectural lighting range. COB downlights, surface cylinders, panels & magnetic track lights. True CRI Ra > 90. Free laser site survey across Ahmedabad."
        keywords="architectural lights ahmedabad, cob downlights, architectural light studio ahmedabad, lofy lighting, false ceiling downlights"
        canonicalUrl="https://www.ariscalightstudio.com/#/shop"
      />

      {/* Shop Hero Banner */}
      <section className="shop-hero-banner">
        <div className="container">
          <span className="section-badge">
            <Sparkles size={14} /> Architectural downlights
          </span>
          <h1 className="shop-hero-title">Architectural Lighting Collection</h1>
          <p className="shop-hero-subtitle">
            Explore 68 master fixtures designed with optical precision and anti-glare technology, for homes and offices across Ahmedabad.
          </p>

          {/* Quick type shortcuts */}
          <div className="shop-price-quick-bar">
            <span className="spqb-title">Shop by type:</span>
            {categories.map((c) => (
              <button
                key={c.id}
                className={`price-pill-btn ${categoryFilter === c.id ? 'active' : ''}`}
                onClick={() => setCategoryFilter(c.id)}
              >
                {c.label}
              </button>
            ))}
            {hasActiveFilters && (
              <button className="price-pill-btn reset" onClick={resetAllFilters}>
                <RotateCcw size={13} /> Reset filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Shop Content Area */}
      <div className="container shop-layout-container">
        {/* Top Control Bar (Mobile filter toggle, Search, Sort & Count) */}
        <div className="shop-toolbar-row">
          <div className="toolbar-left">
            <button
              className="mobile-filter-open-btn"
              onClick={() => setIsMobileFilterOpen(true)}
            >
              <SlidersHorizontal size={18} />
              <span>Filters ({hasActiveFilters ? 'Active' : 'All'})</span>
            </button>

            <span className="products-count-badge">
              Showing <strong>{filteredProducts.length}</strong> of {enrichedProducts.length} fixtures
            </span>
          </div>

          <div className="toolbar-right">
            {/* Search Input within Catalog */}
            <div className="shop-search-inline">
              <Search size={16} />
              <input
                type="text"
                placeholder="Search downlights…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search downlights"
              />
              {searchQuery && (
                <button className="clear-search-btn" onClick={() => setSearchQuery('')} aria-label="Clear">
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Sort Select */}
            <div className="shop-sort-wrap">
              <ArrowUpDown size={15} className="sort-icon" />
              <select
                className="shop-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort products"
              >
                <option value="featured">Featured & Recommended</option>
                <option value="wattage-desc">Wattage: high to low</option>
                <option value="wattage-asc">Wattage: low to high</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Active Filter Chips */}
        {hasActiveFilters && (
          <div className="active-filters-chips-row">
            <span className="af-title">Active Filters:</span>
            {categoryFilter !== 'all' && (
              <span className="filter-chip">
                Category: {categoryFilter}
                <X size={12} onClick={() => setCategoryFilter('all')} />
              </span>
            )}
            {wattageFilter !== 'all' && (
              <span className="filter-chip">
                Wattage: {wattageFilter}W
                <X size={12} onClick={() => setWattageFilter('all')} />
              </span>
            )}
            {finishFilter !== 'all' && (
              <span className="filter-chip">
                Finish: {finishFilter}
                <X size={12} onClick={() => setFinishFilter('all')} />
              </span>
            )}
            {roomFilter !== 'all' && (
              <span className="filter-chip">
                Room: {roomFilter}
                <X size={12} onClick={() => setRoomFilter('all')} />
              </span>
            )}
            <button className="clear-all-chips-btn" onClick={resetAllFilters}>
              Clear All
            </button>
          </div>
        )}

        <div className="shop-main-grid-layout">
          {/* ================= DESKTOP FILTER SIDEBAR ================= */}
          <aside className="shop-filter-sidebar">
            <div className="sidebar-filter-header">
              <h2>
                <Filter size={18} /> Filter Collection
              </h2>
              {hasActiveFilters && (
                <button className="sidebar-reset-link" onClick={resetAllFilters}>
                  Reset
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="filter-group-box">
              <h3 className="filter-group-title">Luminaire Type</h3>
              <div className="filter-checkbox-list">
                {categories.map((cat) => (
                  <label
                    key={cat.id}
                    className={`filter-checkbox-label ${categoryFilter === cat.id ? 'checked' : ''}`}
                  >
                    <input
                      type="radio"
                      name="shop-category"
                      checked={categoryFilter === cat.id}
                      onChange={() => setCategoryFilter(cat.id)}
                    />
                    <span className="label-text">{cat.label}</span>
                    <span className="count-tag">{cat.count}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Wattage Filter */}
            <div className="filter-group-box">
              <h3 className="filter-group-title">Power / Wattage</h3>
              <div className="wattage-pills-grid">
                {wattages.map((w) => (
                  <button
                    key={w}
                    className={`wattage-pill-btn ${wattageFilter === String(w) ? 'active' : ''}`}
                    onClick={() => setWattageFilter(String(w))}
                  >
                    {w === 'all' ? 'All' : `${w}W`}
                  </button>
                ))}
              </div>
            </div>

            {/* Finish Filter */}
            <div className="filter-group-box">
              <h3 className="filter-group-title">Architectural Finish</h3>
              <div className="filter-radio-list">
                {finishes.map((f) => (
                  <label
                    key={f}
                    className={`filter-radio-label ${finishFilter === f ? 'active' : ''}`}
                  >
                    <input
                      type="radio"
                      name="shop-finish"
                      checked={finishFilter === f}
                      onChange={() => setFinishFilter(f)}
                    />
                    <span className="radio-text">{f === 'all' ? 'All Finishes' : f}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Room / Interior Application Filter */}
            <div className="filter-group-box">
              <h3 className="filter-group-title">Interior Space</h3>
              <div className="filter-radio-list">
                {roomOptions.map((r) => (
                  <label
                    key={r}
                    className={`filter-radio-label ${roomFilter === r ? 'active' : ''}`}
                  >
                    <input
                      type="radio"
                      name="shop-room"
                      checked={roomFilter === r}
                      onChange={() => setRoomFilter(r)}
                    />
                    <span className="radio-text">{r === 'all' ? 'All Spaces' : r}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Assistance Banner in Sidebar */}
            <div className="sidebar-assistance-card">
              <CheckCircle2 size={24} className="gold-text mb-2" />
              <h4>Need Layout Assistance?</h4>
              <p>Our lighting engineers provide on-site lux level mapping in Ahmedabad.</p>
              <button
                className="btn btn-secondary btn-sm btn-block"
                onClick={openConsultModal}
              >
                Book Free Site Visit
              </button>
            </div>
          </aside>

          {/* ================= PRODUCTS GRID ================= */}
          <main className="shop-products-main">
            {filteredProducts.length === 0 ? (
              <div className="shop-no-results-box">
                <Search size={44} className="no-res-icon" />
                <h3>No Matching Luminaires Found</h3>
                <p>
                  No fixtures match your current filter selections. Try clearing your search keyword or resetting the filters.
                </p>
                <button className="btn btn-primary" onClick={resetAllFilters}>
                  <RotateCcw size={16} /> Reset All Filters
                </button>
              </div>
            ) : (
              <div className="shop-products-grid">
                {filteredProducts.map((product, i) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onNavigate={onNavigate}
                    priority={i < 4}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* ================= MOBILE FILTER DRAWER ================= */}
      {isMobileFilterOpen && (
        <div className="mobile-filter-drawer-overlay" onClick={() => setIsMobileFilterOpen(false)}>
          <div className="mobile-filter-drawer-panel" onClick={(e) => e.stopPropagation()}>
            <div className="mfd-header">
              <h3>Filter Products</h3>
              <button onClick={() => setIsMobileFilterOpen(false)} aria-label="Close">
                <X size={20} />
              </button>
            </div>

            <div className="mfd-body custom-scrollbar">
              {/* Category */}
              <div className="mfd-section">
                <h4>Luminaire Type</h4>
                <div className="mfd-options-grid">
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      className={`mfd-pill ${categoryFilter === c.id ? 'active' : ''}`}
                      onClick={() => setCategoryFilter(c.id)}
                    >
                      {c.label} ({c.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Wattage */}
              <div className="mfd-section">
                <h4>Wattage</h4>
                <div className="mfd-options-grid">
                  {wattages.map((w) => (
                    <button
                      key={w}
                      className={`mfd-pill ${wattageFilter === String(w) ? 'active' : ''}`}
                      onClick={() => setWattageFilter(String(w))}
                    >
                      {w === 'all' ? 'All' : `${w}W`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Finish */}
              <div className="mfd-section">
                <h4>Finish</h4>
                <div className="mfd-options-grid">
                  {finishes.map((f) => (
                    <button
                      key={f}
                      className={`mfd-pill ${finishFilter === f ? 'active' : ''}`}
                      onClick={() => setFinishFilter(f)}
                    >
                      {f === 'all' ? 'All' : f}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mfd-footer">
              <button className="btn btn-secondary" onClick={resetAllFilters}>
                Reset
              </button>
              <button className="btn btn-primary" onClick={() => setIsMobileFilterOpen(false)}>
                Apply ({filteredProducts.length} Results)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
