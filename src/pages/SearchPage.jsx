import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import SeoHead from '../components/SeoHead';
import LightCard from '../components/LightCard';
import ProductCard from '../components/ProductCard';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { enrichedProducts } from '../data/ariscaData';
import { useCollection, collectionCategories, categoryByKey, coverImage } from '../data/collection';
import { whatsappUrl } from '../utils/whatsapp';

const PAGE = 24;
const POPULAR = ['Chandelier', 'Brass', 'Crystal', 'Marble wall light', 'Pendant', 'Floor lamp', 'Black', 'COB downlight', '12W', 'Living room'];

// "chandeliers" should find "chandelier", "lamps" → "lamp", "glasses" → "glass"
function terms(q) {
  return q
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .map((t) => (t.length > 4 && t.endsWith('es') && !t.endsWith('ses') ? t.slice(0, -2) : t.length > 3 && t.endsWith('s') && !t.endsWith('ss') ? t.slice(0, -1) : t));
}

const downlightText = (p) =>
  [p.title, p.type, p.finish, p.finishCode, `${p.wattage}w`, p.categoryKey, 'downlight cob spotlight', ...(p.suitableRooms || []), ...(p.searchTokens || [])]
    .join(' ')
    .toLowerCase();

export default function SearchPage({ query = '', onNavigate }) {
  const params = new URLSearchParams(query);
  const q = params.get('q') || '';
  const tab = ['collection', 'downlights'].includes(params.get('tab')) ? params.get('tab') : 'all';
  const cat = params.get('cat') || '';

  const items = useCollection();
  const [text, setText] = useState(q);
  const [shown, setShown] = useState(PAGE);
  const inputRef = useRef(null);

  const update = (patch) => {
    const next = new URLSearchParams(query);
    Object.entries(patch).forEach(([k, v]) => (v ? next.set(k, v) : next.delete(k)));
    const qs = next.toString();
    onNavigate(`/search${qs ? `?${qs}` : ''}`, { replace: true, scroll: false });
  };

  // Keep the box in sync with back/forward; debounce typing into the URL
  useEffect(() => setText(q), [q]);
  useEffect(() => {
    if (text === q) return undefined;
    const t = setTimeout(() => update({ q: text.trim(), cat: '' }), 220);
    return () => clearTimeout(t);
  }, [text]);
  useEffect(() => setShown(PAGE), [q, tab, cat]);

  // Focus the box when arriving with nothing typed yet
  useEffect(() => {
    if (!q) inputRef.current?.focus({ preventScroll: true });
  }, []);

  const words = useMemo(() => terms(q), [q]);

  const pieces = useMemo(() => {
    if (!items || !words.length) return [];
    return items.filter((i) => words.every((w) => i.search.includes(w) || i.title.toLowerCase().includes(w)));
  }, [items, words]);

  const downlights = useMemo(() => {
    if (!words.length) return [];
    return enrichedProducts.filter((p) => {
      const hay = downlightText(p);
      return words.every((w) => hay.includes(w));
    });
  }, [words]);

  const catCounts = useMemo(() => {
    const c = {};
    pieces.forEach((i) => (c[i.cat] = (c[i.cat] || 0) + 1));
    return c;
  }, [pieces]);
  const piecesInCat = cat ? pieces.filter((i) => i.cat === cat) : pieces;

  const total = pieces.length + downlights.length;
  const loading = !!q && !items;
  const showDownlights = tab !== 'collection' && downlights.length > 0;
  const showPieces = tab !== 'downlights' && piecesInCat.length > 0;
  const piecesLimit = tab === 'all' ? Math.min(shown, PAGE) : shown;

  const chip = (id, label, count) => (
    <button
      key={id}
      type="button"
      className={`coll-cat ${tab === id ? 'active' : ''}`}
      onClick={() => update({ tab: id === 'all' ? '' : id })}
      aria-pressed={tab === id}
    >
      {label} <span>{count}</span>
    </button>
  );

  return (
    <div className="srch">
      <SeoHead
        title={q ? `“${q}” — Search | Arisca Light Studio` : 'Search lights | Arisca Light Studio'}
        description="Search over a thousand designer lights and architectural downlights at Arisca Light Studio, Ahmedabad."
        canonicalUrl="https://www.ariscalightstudio.com/search"
      />

      <section className="coll-hero srch-hero">
        <div className="container">
          <p className="eyebrow"><span className="eyebrow-lines" aria-hidden="true" />Search</p>
          <form
            className="srch-box"
            role="search"
            toolname="search_lights"
            tooldescription="Search Arisca Light Studio's lights and downlights by type, finish, material, wattage or item number."
            onSubmit={(e) => {
              e.preventDefault();
              update({ q: text.trim(), cat: '' });
              inputRef.current?.blur();
            }}
          >
            <Search size={22} aria-hidden="true" />
            <input
              ref={inputRef}
              type="search"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Chandeliers, brass, crystal, item no…"
              aria-label="Search lights"
              enterKeyHint="search"
              autoComplete="off"
            />
            {text && (
              <button type="button" className="srch-clear" onClick={() => { setText(''); inputRef.current?.focus(); }} aria-label="Clear search">
                <X size={18} />
              </button>
            )}
          </form>

          {q ? (
            <p className="srch-summary" aria-live="polite">
              {loading ? 'Searching…' : total === 0 ? <>No matches for <strong>“{q}”</strong></> : <><strong>{total.toLocaleString('en-IN')}</strong> {total === 1 ? 'result' : 'results'} for <strong>“{q}”</strong></>}
            </p>
          ) : (
            <div className="srch-popular">
              <span>Popular:</span>
              {POPULAR.map((p) => (
                <button key={p} type="button" className="chip chip-link" onClick={() => { setText(p); update({ q: p, cat: '' }); }}>
                  {p}
                </button>
              ))}
            </div>
          )}
        </div>

        {q && (loading || total > 0) && (
          <nav className="container coll-cats srch-tabs" aria-label="Result types">
            {chip('all', 'All', total)}
            {pieces.length > 0 && chip('collection', 'Collection', pieces.length)}
            {downlights.length > 0 && chip('downlights', 'Downlights', downlights.length)}
          </nav>
        )}
      </section>

      <div className="container srch-results">
        {/* Nothing typed yet: browse by category */}
        {!q && (
          <section>
            <h2 className="srch-heading">Or start with a category</h2>
            <ul className="saved-empty-cats">
              {collectionCategories.map((c) => (
                <li key={c.key}>
                  <a href={`/collection?cat=${c.key}`} className="saved-cat">
                    <span className="saved-cat-img">
                      <img src={coverImage(c.key)} alt="" loading="lazy" width={600} height={800} />
                      <img src={coverImage(c.key, 'scene')} alt="" loading="lazy" className="saved-cat-scene" width={600} height={800} />
                    </span>
                    <span className="saved-cat-label">{c.short} <ArrowRight size={14} /></span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {loading && (
          <div className="coll-grid coll-grid-4" aria-busy="true">
            {Array.from({ length: 8 }, (_, i) => <div key={i} className="lc-skeleton srch-skel" />)}
          </div>
        )}

        {/* No results */}
        {q && !loading && total === 0 && (
          <section className="srch-empty">
            <h2 className="section-heading">Nothing matches “{q}” — yet.</h2>
            <p className="lede">Try a simpler word (“brass”, “crystal”, “pendant”) or an item number. We also source many pieces that aren't online — ask us.</p>
            <div className="srch-empty-actions">
              <a className="btn-pill btn-pill-wa" href={whatsappUrl(`Hello Arisca, I'm looking for: ${q}. Can you help?`)} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={16} /> Ask us on WhatsApp
              </a>
              <a className="btn-pill" href="/collection">Browse the collection</a>
            </div>
            <div className="srch-popular">
              <span>Try:</span>
              {POPULAR.slice(0, 6).map((p) => (
                <button key={p} type="button" className="chip chip-link" onClick={() => { setText(p); update({ q: p, cat: '' }); }}>{p}</button>
              ))}
            </div>
          </section>
        )}

        {/* Downlights */}
        {showDownlights && (
          <section className="srch-section">
            <div className="srch-section-head">
              <h2 className="srch-heading">Downlights <span>{downlights.length}</span></h2>
              {tab === 'all' && pieces.length > 0 && <a className="link-arrow srch-more-link" href="/shop">All downlights <ArrowRight size={15} /></a>}
            </div>
            <div className="coll-grid coll-grid-4 srch-grid">
              {downlights.map((p, i) => <ProductCard key={p.id} product={p} onNavigate={onNavigate} priority={i < 4} />)}
            </div>
          </section>
        )}

        {/* Collection pieces */}
        {tab !== 'downlights' && pieces.length > 0 && (
          <section className="srch-section">
            <div className="srch-section-head">
              <h2 className="srch-heading">From the collection <span>{piecesInCat.length}</span></h2>
            </div>
            {Object.keys(catCounts).length > 1 && (
              <div className="srch-cats">
                <button type="button" className={`chip chip-link ${!cat ? 'chip-accent' : ''}`} onClick={() => update({ cat: '' })}>All</button>
                {collectionCategories.filter((c) => catCounts[c.key]).map((c) => (
                  <button key={c.key} type="button" className={`chip chip-link ${cat === c.key ? 'chip-accent' : ''}`} onClick={() => update({ cat: c.key, tab: tab === 'all' ? 'collection' : tab })}>
                    {categoryByKey[c.key].short} <span className="srch-cat-n">{catCounts[c.key]}</span>
                  </button>
                ))}
              </div>
            )}
            {showPieces && (
              <div className="coll-grid coll-grid-4 srch-grid">
                {piecesInCat.slice(0, piecesLimit).map((item, i) => <LightCard key={item.id} item={item} priority={i < 4 && !showDownlights} />)}
              </div>
            )}
            {piecesInCat.length > piecesLimit && (
              <div className="center-row">
                {tab === 'all' ? (
                  <button type="button" className="btn-pill btn-pill-solid" onClick={() => update({ tab: 'collection' })}>
                    See all {piecesInCat.length.toLocaleString('en-IN')} pieces <ArrowRight size={16} />
                  </button>
                ) : (
                  <button type="button" className="btn-pill" onClick={() => setShown((n) => n + PAGE)}>
                    Show more ({(piecesInCat.length - piecesLimit).toLocaleString('en-IN')} left)
                  </button>
                )}
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
