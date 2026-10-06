import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Search, X, SlidersHorizontal, ChevronDown } from 'lucide-react';
import SeoHead from '../components/SeoHead';
import LightCard from '../components/LightCard';
import { tug } from '../utils/tug';
import {
  useCollection,
  collectionCategories,
  categoryByKey,
  finishFamilies,
  materialFamilies
} from '../data/collection';

const PAGE = 36;

const SORTS = {
  catalog: { label: 'Featured', fn: null },
  large: { label: 'Largest first', fn: (a, b) => size(b) - size(a) },
  small: { label: 'Smallest first', fn: (a, b) => size(a) - size(b) },
  no: { label: 'Item number', fn: (a, b) => a.no.localeCompare(b.no, undefined, { numeric: true }) }
};
function size(i) {
  const d = i.dims;
  return Math.max(d.D || 0, d.W || 0, d.L || 0) + (d.FH || d.H || 0);
}

function Select({ label, value, onChange, options }) {
  return (
    <label className={`coll-select ${value ? 'has-value' : ''}`}>
      <span className="sr-only">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">{label}</option>
        {options.map((o) => (
          <option key={o.value ?? o} value={o.value ?? o}>
            {o.label ?? o}
          </option>
        ))}
      </select>
      <ChevronDown size={14} aria-hidden="true" />
    </label>
  );
}

export default function CollectionPage({ query = '', onNavigate }) {
  const items = useCollection();
  const params = useMemo(() => new URLSearchParams(query), [query]);
  const cat = categoryByKey[params.get('cat')] ? params.get('cat') : '';
  const type = params.get('type') || '';
  const finish = params.get('finish') || '';
  const material = params.get('material') || '';
  const source = params.get('source') || '';
  const sort = SORTS[params.get('sort')] ? params.get('sort') : 'catalog';
  const lightsOn = params.get('lights') === 'on';
  const q = params.get('q') || '';

  const [searchText, setSearchText] = useState(q);
  const [visible, setVisible] = useState(PAGE);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const sentinel = useRef(null);

  const update = (patch) => {
    const next = new URLSearchParams(query);
    Object.entries(patch).forEach(([k, v]) => (v ? next.set(k, v) : next.delete(k)));
    const qs = next.toString();
    onNavigate(`/collection${qs ? `?${qs}` : ''}`, { replace: true, scroll: false });
  };

  // Keep the search box in sync with back/forward, and debounce typing into the URL
  useEffect(() => setSearchText(q), [q]);
  useEffect(() => {
    if (searchText === q) return;
    const t = setTimeout(() => update({ q: searchText.trim() }), 220);
    return () => clearTimeout(t);
  }, [searchText]); // eslint-disable-line react-hooks/exhaustive-deps

  const inCategory = useMemo(() => (items || []).filter((i) => !cat || i.cat === cat), [items, cat]);
  const types = useMemo(() => [...new Set(inCategory.map((i) => i.type))].sort(), [inCategory]);

  const results = useMemo(() => {
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    const list = inCategory.filter(
      (i) =>
        (!type || i.type === type) &&
        (!finish || i.finishFamily === finish) &&
        (!material || i.materialTags.includes(material)) &&
        (!source || (source === 'led' ? i.isLed : !i.isLed)) &&
        terms.every((t) => i.search.includes(t))
    );
    return SORTS[sort].fn ? [...list].sort(SORTS[sort].fn) : list;
  }, [inCategory, type, finish, material, source, q, sort]);

  // Reset paging whenever the result set changes
  useEffect(() => setVisible(PAGE), [results]);

  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries[0].isIntersecting && setVisible((v) => v + PAGE),
      { rootMargin: '900px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [results, items]);

  const activeFilters = [type, finish, material, source, q].filter(Boolean).length;
  const category = categoryByKey[cat];
  const counts = useMemo(() => {
    const c = {};
    (items || []).forEach((i) => (c[i.cat] = (c[i.cat] || 0) + 1));
    return c;
  }, [items]);

  return (
    <div className={`coll-page ${lightsOn ? 'lights-on' : ''}`}>
      <SeoHead
        title={`${category ? category.label : 'The Collection'} | Arisca Light Studio Ahmedabad`}
        description={`Browse ${items ? (category ? counts[cat] : items.length) : 'over a thousand'} designer ${category ? category.label.toLowerCase() : 'chandeliers, pendants, wall lights and lamps'} at Arisca Light Studio, Ahmedabad.`}
        canonicalUrl={`https://www.ariscalightstudio.com/collection${cat ? `?cat=${cat}` : ''}`}
      />

      <section className="coll-hero">
        <div className="container coll-hero-inner">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-lines" aria-hidden="true" />
              The Collection
            </p>
            <h1 className="display-title">
              {category ? category.label : (
                <>Every light, <em>in one place.</em></>
              )}
            </h1>
            <p className="lede">
              {category
                ? category.tagline
                : 'Chandeliers, pendants, wall lights and lamps — each one photographed in the studio and styled in a real room. Hover a piece, or flip the switch, to see it lit.'}
            </p>
          </div>

          <button
            type="button"
            className={`pull-switch ${lightsOn ? 'is-on' : ''}`}
            onClick={(e) => {
              // animate the cord span: React rewrites the button's own classes on toggle
              tug(e.currentTarget.querySelector('.pull-switch-cord'));
              update({ lights: lightsOn ? '' : 'on' });
            }}
            aria-pressed={lightsOn}
            aria-label={lightsOn ? 'Switch the room view off' : 'Switch the room view on'}
          >
            <span className="pull-switch-cord" aria-hidden="true">
              <span className="pull-switch-bead" />
            </span>
            {/* Both states are always rendered and cross-faded, so nothing shifts while switching */}
            <span className="pull-switch-text" aria-hidden="true">
              <span className="ps-state ps-off">
                <strong>Lights off</strong>
                <span>Pull to see every piece in a room</span>
              </span>
              <span className="ps-state ps-on">
                <strong>Lights on</strong>
                <span>Every piece, shown in a room</span>
              </span>
            </span>
          </button>
        </div>

        <nav className="container coll-cats" aria-label="Collection categories">
          <button className={`coll-cat ${!cat ? 'active' : ''}`} onClick={() => update({ cat: '', type: '' })}>
            All <span>{items ? items.length : '—'}</span>
          </button>
          {collectionCategories.map((c) => (
            <button
              key={c.key}
              className={`coll-cat ${cat === c.key ? 'active' : ''}`}
              onClick={() => update({ cat: c.key, type: '' })}
            >
              {c.label} <span>{counts[c.key] ?? '—'}</span>
            </button>
          ))}
        </nav>
      </section>

      <div className="coll-toolbar-wrap">
        <div className="container coll-toolbar">
          <label className="coll-search">
            <Search size={16} aria-hidden="true" />
            <span className="sr-only">Search the collection</span>
            <input
              type="search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search item no., finish, material…"
            />
            {searchText && (
              <button type="button" onClick={() => setSearchText('')} aria-label="Clear search">
                <X size={14} />
              </button>
            )}
          </label>

          <button
            type="button"
            className="coll-filter-toggle"
            onClick={() => setFiltersOpen((o) => !o)}
            aria-expanded={filtersOpen}
          >
            <SlidersHorizontal size={15} /> Filters{activeFilters ? ` · ${activeFilters}` : ''}
          </button>

          <div className={`coll-filters ${filtersOpen ? 'open' : ''}`}>
            <Select label="Type" value={type} onChange={(v) => update({ type: v })} options={types} />
            <Select label="Finish" value={finish} onChange={(v) => update({ finish: v })} options={finishFamilies} />
            <Select label="Material" value={material} onChange={(v) => update({ material: v })} options={materialFamilies} />
            <Select
              label="Light source"
              value={source}
              onChange={(v) => update({ source: v })}
              options={[{ value: 'led', label: 'Integrated LED' }, { value: 'bulb', label: 'Bulb (E27 / E14 / G9)' }]}
            />
            <Select
              label="Sort: Featured"
              value={sort === 'catalog' ? '' : sort}
              onChange={(v) => update({ sort: v })}
              options={Object.entries(SORTS).filter(([k]) => k !== 'catalog').map(([value, s]) => ({ value, label: `Sort: ${s.label}` }))}
            />
            {activeFilters > 0 && (
              <button
                type="button"
                className="coll-clear"
                onClick={() => { setSearchText(''); update({ type: '', finish: '', material: '', source: '', q: '' }); }}
              >
                Clear all
              </button>
            )}
          </div>

          <p className="coll-count" aria-live="polite">
            {items ? `${results.length.toLocaleString('en-IN')} ${results.length === 1 ? 'piece' : 'pieces'}` : 'Loading…'}
          </p>
        </div>
      </div>

      <section className="container coll-grid-section">
        {!items ? (
          <div className="coll-grid">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="lc lc-skeleton" aria-hidden="true">
                <div className="lc-media" />
                <div className="lc-meta"><span /><span /></div>
              </div>
            ))}
          </div>
        ) : results.length === 0 ? (
          <div className="coll-empty">
            <h2>Nothing matches — yet.</h2>
            <p>Try a different finish or material, or ask us: we source many more pieces than you see here.</p>
            <button
              className="btn-pill"
              onClick={() => { setSearchText(''); update({ type: '', finish: '', material: '', source: '', q: '' }); }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            <div className="coll-grid">
              {results.slice(0, visible).map((item, idx) => (
                <LightCard key={item.id} item={item} lit={lightsOn} feature={idx % 13 === 6} />
              ))}
            </div>
            {visible < results.length && <div ref={sentinel} className="coll-sentinel" aria-hidden="true" />}
          </>
        )}
      </section>
    </div>
  );
}
