import React, { useMemo } from 'react';
import { ArrowRight, Download, ExternalLink, MessageCircle } from 'lucide-react';
import SeoHead from '../components/SeoHead';
import { collectionCategories, useCollection } from '../data/collection';

const MOSAIC = {
  chandeliers: ['chandeliers-060', 'chandeliers-200', 'chandeliers-090'],
  pendants: ['pendants-020', 'pendants-100', 'pendants-300'],
  wall: ['wall-002', 'wall-060', 'wall-120'],
  'wall-mirror': ['wall-mirror-002', 'wall-mirror-040', 'wall-mirror-100'],
  'floor-table': ['floor-table-045', 'floor-table-020', 'floor-table-002']
};
const img = (id, kind) => `/assets/collection/${id.replace(/-\d+$/, '')}/${id}-${kind}.webp`;

export default function CatalogsPage() {
  const items = useCollection();
  const counts = useMemo(() => {
    const c = {};
    (items || []).forEach((i) => (c[i.cat] = (c[i.cat] || 0) + 1));
    return c;
  }, [items]);

  return (
    <div className="catalogs-v2">
      <SeoHead
        title="Lighting Catalogs | Arisca Light Studio Ahmedabad"
        description="Browse the Lofy lighting catalogs online — chandeliers, pendants, wall lights, mirror lights, floor and table lamps — or download the full PDFs."
        canonicalUrl="https://www.ariscalightstudio.com/catalogs"
      />

      <section className="coll-hero">
        <div className="container">
          <p className="eyebrow"><span className="eyebrow-lines" aria-hidden="true" />Catalogs</p>
          <h1 className="display-title">Five catalogs. <em>Every page, online.</em></h1>
          <p className="lede">
            We've taken every product out of the PDFs so you can browse, filter and compare them here — no 500 MB downloads needed.
            The original catalogs are still here if you'd like them.
          </p>
        </div>
      </section>

      <section className="container catalog-list">
        {collectionCategories.map((c, idx) => (
          <article key={c.key} className="catalog-row">
            <a href={`/collection?cat=${c.key}`} className="catalog-mosaic" aria-label={`Browse ${c.label}`}>
              <img className="cm-big" src={img(MOSAIC[c.key][0], 'scene')} alt={`${c.label} architectural lookbook atmosphere`} loading={idx < 2 ? 'eager' : 'lazy'} />
              <img className="cm-a" src={img(MOSAIC[c.key][1], 'studio')} alt={`${c.label} fixture detailing`} loading="lazy" />
              <img className="cm-b" src={img(MOSAIC[c.key][2], 'studio')} alt={`${c.label} luminaire finish`} loading="lazy" />
            </a>
            <div className="catalog-copy">
              <span className="catalog-vol">Vol. {String(idx + 1).padStart(2, '0')}</span>
              <h2>{c.label}</h2>
              <p>{c.tagline}</p>
              <dl className="catalog-facts">
                <div><dt>Pieces</dt><dd>{counts[c.key] ?? '—'}</dd></div>
                <div><dt>Pages</dt><dd>{c.pages}</dd></div>
                <div><dt>PDF</dt><dd>{c.pdfSize}</dd></div>
              </dl>
              <div className="catalog-actions">
                <a className="btn-pill btn-pill-solid" href={`/collection?cat=${c.key}`}>
                  Browse online <ArrowRight size={16} />
                </a>
                <a className="btn-pill btn-pill-ghost" href={c.pdf} target="_blank" rel="noopener noreferrer">
                  Open PDF <ExternalLink size={15} />
                </a>
                <a className="btn-icon-round" href={c.pdf} download aria-label={`Download the ${c.label} PDF (${c.pdfSize})`} title={`Download PDF (${c.pdfSize})`}>
                  <Download size={17} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="container">
        <div className="band band-soft">
          <div className="band-copy">
            <h2 className="section-heading">Architects & designers</h2>
            <p className="lede">Need printed catalogs, finish samples or specification sheets for a project? Tell us what you're working on.</p>
            <div className="hero-v2-cta">
              <a
                className="btn-pill btn-pill-wa"
                href="https://wa.me/919898086656?text=Hello%20Arisca%20Light%20Studio%2C%20we%20are%20an%20architecture%2Finterior%20design%20firm%20and%20would%20like%20printed%20catalogs%20and%20finish%20samples."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={16} /> Request on WhatsApp
              </a>
              <a className="btn-pill btn-pill-ghost" href="/interior-designers">Trade programme <ArrowRight size={16} /></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
