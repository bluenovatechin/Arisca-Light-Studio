import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Heart, MessageCircle, Plus, Check, FileText, MoveHorizontal } from 'lucide-react';
import SeoHead from '../components/SeoHead';
import LightCard, { FINISH_SWATCH } from '../components/LightCard';
import ScaleFigure from '../components/ScaleFigure';
import { useCart } from '../context/CartContext';
import {
  useCollection,
  categoryByKey,
  studioImage,
  sceneImage,
  toInquiryProduct,
  whatsappLinkFor
} from '../data/collection';

function CompareSlider({ item }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="cmp" style={{ '--pos': `${pos}%` }}>
      <img className="cmp-studio" src={studioImage(item)} alt={`${item.title}, studio photograph`} width={600} height={800} />
      <img className="cmp-scene" src={sceneImage(item)} alt={`${item.title}, styled in a room`} width={600} height={800} />
      <span className="cmp-tag cmp-tag-l">Studio</span>
      <span className="cmp-tag cmp-tag-r">In a room</span>
      <span className="cmp-handle" aria-hidden="true">
        <span className="cmp-knob"><MoveHorizontal size={16} /></span>
      </span>
      <input
        className="cmp-range"
        type="range"
        min="0"
        max="100"
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Drag to compare the studio photo with the room photo"
      />
      <div className="cmp-quick">
        <button type="button" onClick={() => setPos(100)} className={pos > 90 ? 'active' : ''}>Studio</button>
        <button type="button" onClick={() => setPos(50)} className={pos <= 90 && pos >= 10 ? 'active' : ''}>Split</button>
        <button type="button" onClick={() => setPos(0)} className={pos < 10 ? 'active' : ''}>In a room</button>
      </div>
    </div>
  );
}

export default function CollectionItemPage({ id, onNavigate }) {
  const items = useCollection();
  const { addToCart, toggleWishlist, isInWishlist, cart } = useCart();

  const { item, prev, next, related } = useMemo(() => {
    if (!items) return {};
    const idx = items.findIndex((i) => i.id === id);
    if (idx < 0) return { item: null };
    const it = items[idx];
    const sameCat = items.filter((i) => i.cat === it.cat);
    const at = sameCat.indexOf(it);
    const rel = sameCat
      .filter((i) => i !== it && i.type === it.type)
      .map((i) => ({ i, score: (i.finishFamily === it.finishFamily ? 2 : 0) + i.materialTags.filter((m) => it.materialTags.includes(m)).length - Math.abs(sameCat.indexOf(i) - at) / 400 }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((r) => r.i);
    return { item: it, prev: sameCat[at - 1], next: sameCat[at + 1], related: rel };
  }, [items, id]);

  if (!items) {
    return <div className="container item-page item-loading" aria-busy="true"><div className="cmp lc-skeleton" /></div>;
  }

  if (!item) {
    return (
      <div className="container item-page coll-empty">
        <h1>We couldn't find that piece.</h1>
        <p>It may have moved to a new catalog. Browse the full collection instead.</p>
        <a className="btn-pill" href="/collection">Back to the collection</a>
      </div>
    );
  }

  const category = categoryByKey[item.cat];
  const saved = isInWishlist(item.id);
  const inBasket = cart.some((c) => c.product.id === item.id);
  const page = Number(item.id.split('-').pop());

  const specs = [
    ['Item No.', item.no],
    ['Type', item.type],
    ['Light source', item.lamp],
    ['Dimensions', item.size],
    ['Finish', item.finish],
    ['Material', item.material],
    ['SKU', item.sku]
  ].filter(([, v]) => v);

  return (
    <div className="item-page">
      <SeoHead
        title={`${item.title} (${item.no}) | Arisca Light Studio Ahmedabad`}
        description={`${item.title}, item ${item.no}. ${item.material}${item.size ? `, ${item.size}` : ''}. ${item.lamp}. See it in our Ahmedabad studio on Jagatpur Road.`}
        canonicalUrl={`https://www.ariscalightstudio.com/collection/${item.id}`}
        ogImage={sceneImage(item)}
      />

      <div className="container">
        <nav className="crumbs" aria-label="Breadcrumb">
          <a href="/collection">Collection</a>
          <span aria-hidden="true">/</span>
          <a href={`/collection?cat=${item.cat}`}>{category.label}</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">No. {item.no}</span>
        </nav>

        <div className="item-layout">
          <div className="item-visual">
            <CompareSlider key={item.id} item={item} />
          </div>

          <div className="item-info">
            <p className="eyebrow">
              <span className="eyebrow-lines" aria-hidden="true" />
              {category.label}
            </p>
            <h1 className="item-title">{item.title}</h1>
            <p className="item-no">Item No. {item.no}</p>

            <div className="item-chips">
              <span className="chip">
                <span className="lc-swatch" style={{ background: FINISH_SWATCH[item.finishFamily] }} aria-hidden="true" />
                {item.finish || item.finishFamily}
              </span>
              <span className="chip">{item.lamp}</span>
              {item.tags?.map((t) => <span key={t} className="chip chip-accent">{t}</span>)}
            </div>

            <div className="item-actions">
              <button type="button" className="btn-pill btn-pill-solid" onClick={() => addToCart(toInquiryProduct(item))}>
                {inBasket ? <Check size={17} /> : <Plus size={17} />} {inBasket ? 'In your inquiry basket' : 'Add to inquiry basket'}
              </button>
              <a className="btn-pill btn-pill-wa" href={whatsappLinkFor(item)} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={17} /> Ask on WhatsApp
              </a>
              <button
                type="button"
                className={`btn-icon-round ${saved ? 'is-on' : ''}`}
                onClick={() => toggleWishlist(toInquiryProduct(item))}
                aria-pressed={saved}
                aria-label={saved ? 'Remove from saved' : 'Save this light'}
              >
                <Heart size={18} fill={saved ? 'currentColor' : 'none'} />
              </button>
            </div>
            <p className="item-note">Price on request — we'll confirm pricing, finish options and lead time. Trade pricing for architects and designers.</p>

            <dl className="spec-sheet">
              {specs.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>

            {item.variants && (
              <div className="variants">
                <h2>Also available in {item.variants.length} sizes</h2>
                <table>
                  <thead>
                    <tr><th scope="col">Item No.</th><th scope="col">Size</th><th scope="col">Light source</th></tr>
                  </thead>
                  <tbody>
                    {item.variants.map((v) => (
                      <tr key={v.no + v.size}><td>{v.no}</td><td>{v.size}</td><td>{v.lamp}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <a className="item-catalog-link" href={`${category.pdf}#page=${page}`} target="_blank" rel="noopener noreferrer">
              <FileText size={16} />
              <span>
                Page {page} of the {category.label} catalog
                <small>PDF · {category.pdfSize}</small>
              </span>
            </a>
          </div>
        </div>

        {Object.keys(item.dims).length > 0 && (
          <section className="item-scale">
            <div>
              <p className="eyebrow"><span className="eyebrow-lines" aria-hidden="true" />Scale</p>
              <h2 className="section-heading">How big is it, really?</h2>
              <p className="lede">Catalog photos flatter. Here is the {item.type.toLowerCase()} beside a person, so you can picture it over your table or beside your bed.</p>
            </div>
            <ScaleFigure type={item.type} dims={item.dims} />
          </section>
        )}

        <nav className="item-pager" aria-label="Previous and next pieces">
          {prev ? (
            <a href={`/collection/${prev.id}`} className="item-pager-link">
              <ArrowLeft size={16} /> <span><small>Previous</small>No. {prev.no}</span>
            </a>
          ) : <span />}
          {next && (
            <a href={`/collection/${next.id}`} className="item-pager-link next">
              <span><small>Next</small>No. {next.no}</span> <ArrowRight size={16} />
            </a>
          )}
        </nav>

        {related.length > 0 && (
          <section className="item-related">
            <div className="section-head-row">
              <h2 className="section-heading">More {item.type.toLowerCase()}s like this</h2>
              <a className="link-arrow" href={`/collection?cat=${item.cat}&type=${encodeURIComponent(item.type)}`}>
                See all <ArrowRight size={15} />
              </a>
            </div>
            <div className="rail">
              {related.map((r) => <LightCard key={r.id} item={r} />)}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
