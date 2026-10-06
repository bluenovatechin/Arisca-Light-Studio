import React, { useMemo, useState, lazy, Suspense } from 'react';
import { ArrowRight, ArrowUpRight, ChevronDown, MapPin, Clock, Phone, Ruler, PenTool, Images, Sparkles } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { clientProjects, seoFaqs, clientTestimonials, enrichedProducts } from '../data/ariscaData';
import { useCart } from '../context/CartContext';
import SeoHead from '../components/SeoHead';
import LightCard from '../components/LightCard';
import ProductCard from '../components/ProductCard';
const LightingCalculator = lazy(() => import('../components/LightingCalculator'));
import { tug } from '../utils/tug';
import { useCollection, collectionCategories, coverImage } from '../data/collection';

const HERO_PIECES = [
  { id: 'wall-002', cat: 'wall', label: 'Alabaster wall light' },
  { id: 'pendants-020', cat: 'pendants', label: 'Layered glass pendant' },
  { id: 'floor-table-045', cat: 'floor-table', label: 'Brass dome table lamp' }
];
const FEATURED = [
  'chandeliers-060', 'pendants-100', 'wall-120', 'floor-table-020',
  'chandeliers-200', 'pendants-150', 'wall-mirror-040', 'floor-table-002'
];

function HeroStage({ lit, onToggle }) {
  return (
    <div className={`stage ${lit ? 'is-lit' : ''}`}>
      <div className="stage-arches">
        {HERO_PIECES.map((p, i) => (
          <a key={p.id} href={`/collection/${p.id}`} className={`arch arch-${i}`} aria-label={p.label}>
            <img
              src={`/assets/collection/${p.cat}/${p.id}-studio.webp`}
              alt={p.label}
              width={600}
              height={800}
              fetchpriority={i === 1 ? 'high' : 'low'}
              loading={i === 1 ? 'eager' : 'lazy'}
              decoding="async"
            />
            <img
              src={`/assets/collection/${p.cat}/${p.id}-scene.webp`}
              alt=""
              aria-hidden="true"
              className="arch-scene"
              width={600}
              height={800}
              loading="lazy"
              decoding="async"
            />
          </a>
        ))}
      </div>
      <button
        type="button"
        className="stage-cord"
        onClick={(e) => { tug(e.currentTarget); onToggle(); }}
        aria-pressed={lit}
        aria-label={lit ? 'Lights off: switch the room photos off' : 'Pull me: switch the lights on'}
      >
        <span className="stage-cord-line" />
        <span className="stage-cord-bead" />
        {/* Both hints stay rendered and cross-fade, so the cord never shifts */}
        <span className="stage-cord-hint" aria-hidden="true">
          <span className="hint-off">Pull me</span>
          <span className="hint-on">Lights off</span>
        </span>
      </button>
    </div>
  );
}

export default function HomePage({ onNavigate }) {
  const { openConsultModal } = useCart();
  const items = useCollection();
  const [heroLit, setHeroLit] = useState(false);
  const [editLit, setEditLit] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [downlightFilter, setDownlightFilter] = useState('all');

  const displayedDownlights = useMemo(() => {
    if (downlightFilter === 'all') {
      return enrichedProducts.slice(0, 8);
    }
    return enrichedProducts.filter((p) => p.categoryKey === downlightFilter).slice(0, 8);
  }, [downlightFilter]);

  const featured = useMemo(() => (items ? FEATURED.map((id) => items.find((i) => i.id === id)).filter(Boolean) : null), [items]);
  const counts = useMemo(() => {
    const c = {};
    (items || []).forEach((i) => (c[i.cat] = (c[i.cat] || 0) + 1));
    return c;
  }, [items]);

  return (
    <div className={`home ${heroLit ? 'home-lit' : ''}`}>
      <SeoHead
        title="Arisca Light Studio Ahmedabad | Chandeliers, Pendants, Wall Lights & Downlights"
        description="Discover over a thousand designer chandeliers, pendant lights, wall lights and lamps at Arisca Light Studio, Jagatpur Road, Ahmedabad. See every piece in the studio and in a real room, then visit us to see them lit."
        canonicalUrl="https://www.ariscalightstudio.com/"
      />

      {/* ============ HERO ============ */}
      <section className="hero-v2">
        <div className="hero-v2-glow" aria-hidden="true" />
        <div className="container hero-v2-inner">
          <div className="hero-v2-copy">
            <p className="eyebrow"><span className="eyebrow-lines" aria-hidden="true" />Arisca Light Studio · Ahmedabad</p>
            <h1 className="display-title display-xl">
              Light that <em>lives</em> in your room.
            </h1>
            <p className="lede">
              Chandeliers, pendants, wall lights and lamps — every piece shown twice: as it is, and as it will be once it's
              switched on in a home like yours.
            </p>
            <div className="hero-v2-cta">
              <a href="/collection" className="btn-pill btn-pill-solid">Explore the collection <ArrowRight size={17} /></a>
              <button type="button" className="btn-pill btn-pill-ghost" onClick={openConsultModal}>Book a studio visit</button>
            </div>
            <dl className="hero-stats">
              <div><dt>Designer pieces</dt><dd>{items ? items.length.toLocaleString('en-IN') : '1,100+'}</dd></div>
              <div><dt>Collections</dt><dd>{collectionCategories.length}</dd></div>
              <div><dt>Downlight models</dt><dd>{enrichedProducts.length}</dd></div>
            </dl>
          </div>
          <HeroStage lit={heroLit} onToggle={() => setHeroLit((l) => !l)} />
        </div>
      </section>

      {/* ============ CATEGORIES ============ */}
      <section className="section-v2">
        <div className="container">
          <div className="section-head-row">
            <div>
              <p className="eyebrow"><span className="eyebrow-lines" aria-hidden="true" />Five ways to light a room</p>
              <h2 className="section-heading">Start with where the light goes.</h2>
            </div>
            <a href="/collection" className="link-arrow">All pieces <ArrowRight size={15} /></a>
          </div>

          <div className="cat-arches">
            {collectionCategories.map((c, i) => (
              <a key={c.key} href={`/collection?cat=${c.key}`} className="cat-arch" style={{ '--i': i }}>
                <span className="cat-arch-media">
                  <img src={coverImage(c.key, 'scene')} alt={`${c.label} interior atmosphere`} loading="lazy" width={600} height={800} />
                  <img src={coverImage(c.key)} alt={`${c.label} studio luminaire`} loading="lazy" className="cat-arch-studio" width={600} height={800} />
                </span>
                <span className="cat-arch-text">
                  <strong>{c.label}</strong>
                  <span>{counts[c.key] ? `${counts[c.key]} pieces` : c.tagline}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED EDIT ============ */}
      <section className={`section-v2 edit-section ${editLit ? 'lights-on' : ''}`}>
        <div className="container">
          <div className="section-head-row">
            <div>
              <p className="eyebrow"><span className="eyebrow-lines" aria-hidden="true" />The studio edit</p>
              <h2 className="section-heading">Hover to switch them on.</h2>
              <p className="lede">Each light starts as a clean studio shot. Hover — or tap the switch — to see it at home.</p>
            </div>
            <button
              type="button"
              className={`lc-switch lc-switch-lg ${editLit ? 'is-lit' : ''}`}
              aria-pressed={editLit}
              aria-label={editLit ? 'All lights on' : 'All lights off'}
              onClick={() => setEditLit((l) => !l)}
            >
              <span className="lc-switch-track"><span className="lc-switch-knob" /></span>
              <span className="lc-switch-label">{editLit ? 'All lights on' : 'All lights off'}</span>
            </button>
          </div>

          <div className="coll-grid coll-grid-4">
            {featured
              ? featured.map((item) => <LightCard key={item.id} item={item} lit={editLit} />)
              : FEATURED.map((id) => (
                  <div key={id} className="lc lc-skeleton" aria-hidden="true"><div className="lc-media" /><div className="lc-meta"><span /><span /></div></div>
                ))}
          </div>

          <div className="center-row">
            <a href="/collection" className="btn-pill btn-pill-ghost">See all {items ? items.length.toLocaleString('en-IN') : ''} pieces <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      {/* ============ DOWNLIGHTS SHOWCASE SECTION ============ */}
      <section className="section-v2 downlights-showcase-section" id="downlights">
        <div className="container">
          <div className="section-head-row">
            <div>
              <p className="eyebrow"><span className="eyebrow-lines" aria-hidden="true" />Architectural Lighting</p>
              <h2 className="section-heading">Engineered Downlights & Spotlights</h2>
              <p className="lede">
                Anti-glare deep recessed COB spotlights, surface cylinders, and slim SSK panels. True Ra &gt; 90 color fidelity and optical precision for gypsum ceilings.
              </p>
            </div>
            <a href="/shop" className="link-arrow">All {enrichedProducts.length} models <ArrowRight size={15} /></a>
          </div>

          <div className="downlights-tabs-bar">
            {[
              { id: 'all', label: 'All Models', count: enrichedProducts.length },
              { id: 'cob', label: 'COB Downlights', count: enrichedProducts.filter((p) => p.categoryKey === 'cob').length },
              { id: 'cylinder', label: 'Surface Cylinders', count: enrichedProducts.filter((p) => p.categoryKey === 'cylinder').length },
              { id: 'panel', label: 'SSK Panels', count: enrichedProducts.filter((p) => p.categoryKey === 'panel').length }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`downlights-tab-pill ${downlightFilter === tab.id ? 'is-active' : ''}`}
                onClick={() => setDownlightFilter(tab.id)}
              >
                {tab.label} <span className="tab-badge">{tab.count}</span>
              </button>
            ))}
          </div>

          <div className="home-downlights-grid">
            {displayedDownlights.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="downlights-showcase-footer">
            <div className="downlights-perks-row">
              <div className="dl-perk">
                <span className="dl-perk-bullet" />
                <span>Deep anti-glare reflector cones</span>
              </div>
              <div className="dl-perk">
                <span className="dl-perk-bullet" />
                <span>Architectural Ra &gt; 90 CRI rating</span>
              </div>
              <div className="dl-perk">
                <span className="dl-perk-bullet" />
                <span>2-Year direct studio warranty</span>
              </div>
              <div className="dl-perk">
                <span className="dl-perk-bullet" />
                <span>Ahmedabad on-site beam layout survey</span>
              </div>
            </div>

            <div className="downlights-cta-banner">
              <div className="dl-cta-text">
                <h3>Looking for room lux calculation & fixture count?</h3>
                <p>We inspect your site, calculate false ceiling depths, and recommend precise beam spreads.</p>
              </div>
              <div className="dl-cta-actions">
                <a href="/shop" className="btn-pill btn-pill-solid">Explore Full Downlight Catalog <ArrowRight size={16} /></a>
                <button type="button" className="btn-pill btn-pill-ghost" onClick={openConsultModal}>Book Free Site Survey</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ARCHITECTURAL SPOTLIGHT BAND ============ */}
      <section className="section-v2">
        <div className="container">
          <div className="band">
            <div className="band-copy">
              <p className="eyebrow"><span className="eyebrow-lines" aria-hidden="true" />Laser Ceiling Survey</p>
              <h2 className="section-heading">The light you don't notice — until it's gone.</h2>
              <p className="lede">
                Deep anti-glare COB downlights, surface cylinders and slim panels for false ceilings. {enrichedProducts.length} models
                with clear wattage, beam and finish options, and studio pricing.
              </p>
              <div className="band-links">
                <a href="/shop?category=cob" className="chip chip-link">COB downlights</a>
                <a href="/shop?category=cylinder" className="chip chip-link">Surface cylinders</a>
                <a href="/shop?category=panel" className="chip chip-link">LED panels</a>
              </div>
              <a href="/shop" className="btn-pill btn-pill-solid">Shop downlights <ArrowRight size={17} /></a>
            </div>
            <div className="band-media">
              <img src="/assets/optimized/projects/dsc09758-a01hkH3Y9uhcKEc0.webp" alt="Downlights and pendants installed at the Arisca studio" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="section-v2 services-v2">
        <div className="container">
          <div className="section-head-row">
            <div>
              <p className="eyebrow"><span className="eyebrow-lines" aria-hidden="true" />Beyond the showroom</p>
              <h2 className="section-heading">We help you get it right.</h2>
            </div>
          </div>
          <div className="services-grid">
            <a href="/home-consultancy" className="service-card">
              <Ruler size={22} aria-hidden="true" />
              <h3>Home lighting consultancy</h3>
              <p>We visit, measure your ceilings and plan every fixture — sizes, drops, beam angles and switching.</p>
              <span className="link-arrow">How it works <ArrowRight size={15} /></span>
            </a>
            <a href="/interior-designers" className="service-card">
              <PenTool size={22} aria-hidden="true" />
              <h3>For architects & designers</h3>
              <p>Trade pricing, sample loans, specification sheets and priority delivery for your projects.</p>
              <span className="link-arrow">Trade programme <ArrowRight size={15} /></span>
            </a>
            <a href="/client-diaries" className="service-card">
              <Images size={22} aria-hidden="true" />
              <h3>Client projects</h3>
              <p>Homes across Ahmedabad lit by Arisca — from penthouse foyers to double-height stairwells.</p>
              <span className="link-arrow">See the projects <ArrowRight size={15} /></span>
            </a>
          </div>

          <div className="project-strip">
            {clientProjects.slice(0, 4).map((p) => (
              <a key={p.id} href="/client-diaries" className="project-tile">
                <img src={p.url} alt={`${p.title}, ${p.location}`} loading="lazy" />
                <span><strong>{p.title}</strong>{p.location}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LUX CALCULATOR ============ */}
      <section className="section-v2 calc-wrap">
        <div className="container">
          <Suspense fallback={<div className="calc-placeholder" style={{ minHeight: '280px' }} aria-busy="true" />}>
            <LightingCalculator onNavigate={onNavigate} />
          </Suspense>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="section-v2">
        <div className="container">
          <p className="eyebrow"><span className="eyebrow-lines" aria-hidden="true" />In their words</p>
          <div className="quotes">
            {clientTestimonials.map((t) => (
              <figure key={t.id} className="quote">
                <blockquote>“{t.text}”</blockquote>
                <figcaption><strong>{t.author}</strong> · {t.location}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VISIT ============ */}
      <section className="section-v2" id="showroom">
        <div className="container">
          <div className="visit">
            <div className="visit-copy">
              <p className="eyebrow"><span className="eyebrow-lines" aria-hidden="true" />Visit the studio</p>
              <h2 className="section-heading">Photos can't show you glow. Come and see it.</h2>
              <ul className="visit-list">
                <li><MapPin size={18} aria-hidden="true" /> B-103, Money Plant High Street, Jagatpur Road, Ahmedabad 382470</li>
                <li><Clock size={18} aria-hidden="true" /> Monday – Saturday, 10:00 am – 8:30 pm · Sunday by appointment</li>
                <li><Phone size={18} aria-hidden="true" /> <a href="tel:+919898086656">+91 98980 86656</a></li>
              </ul>
              <div className="hero-v2-cta">
                <button type="button" className="btn-pill btn-pill-solid" onClick={openConsultModal}>Book a visit</button>
                <a className="btn-pill btn-pill-wa" href="https://wa.me/919898086656" target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={16} /> WhatsApp</a>
                <a className="btn-pill btn-pill-ghost" href="https://maps.google.com/?q=Arisca+Light+Studio+Ahmedabad" target="_blank" rel="noopener noreferrer">Directions <ArrowUpRight size={16} /></a>
              </div>
            </div>
            <div className="visit-map">
              <iframe
                title="Arisca Light Studio on Google Maps"
                src="https://maps.google.com/maps?q=Arisca%20light%20studio,%20B%20-%20103,%20Money%20Plant%20High%20Street,%20Ahmedabad&t=m&z=14&ie=UTF8&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section-v2">
        <div className="container faq-v2">
          <div>
            <p className="eyebrow"><span className="eyebrow-lines" aria-hidden="true" />Questions</p>
            <h2 className="section-heading">Good to know.</h2>
          </div>
          <div className="faq-list">
            {seoFaqs.map((f, i) => (
              <div key={f.q} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                <button type="button" onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}>
                  <span>{f.q}</span>
                  <ChevronDown size={18} aria-hidden="true" />
                </button>
                <div className="faq-answer" hidden={openFaq !== i}><p>{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
