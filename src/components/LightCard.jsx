import React, { useState } from 'react';
import { Heart, Plus, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { studioImage, sceneImage, toInquiryProduct } from '../data/collection';

export const FINISH_SWATCH = {
  'Brass & Gold': 'linear-gradient(135deg, #d9bf7f, #a8843f)',
  Black: '#26292a',
  White: '#f6f6f3',
  'Chrome & Silver': 'linear-gradient(135deg, #f1f3f4, #a9b0b4)',
  'Bronze & Copper': 'linear-gradient(135deg, #c48a63, #7b4a32)',
  'Wood & Natural': 'linear-gradient(135deg, #b48a5f, #6e4c2f)',
  Grey: '#8d9395',
  Other: '#14958f'
};

/**
 * Catalog product card with the "lights on" reveal: the studio shot is shown by
 * default; hovering (or flipping the switch on touch screens) washes the room
 * scene in from the fixture outward, like switching the lamp on.
 */
export default function LightCard({ item, lit = false, feature = false }) {
  const { addToCart, toggleWishlist, isInWishlist, cart } = useCart();
  const [switched, setSwitched] = useState(false);
  const isLit = lit || switched;
  const href = `/collection/${item.id}`;
  const saved = isInWishlist(item.id);
  const inBasket = cart.some((c) => c.product.id === item.id);

  return (
    <article className={`lc ${isLit ? 'is-lit' : ''} ${feature ? 'lc-feature' : ''}`}>
      <a href={href} className="lc-media" aria-label={`${item.title}, item ${item.no}`}>
        <img
          className="lc-studio"
          src={studioImage(item)}
          alt={`${item.title} — item ${item.no}`}
          loading="lazy"
          decoding="async"
          width={600}
          height={800}
        />
        <img
          className="lc-scene"
          src={sceneImage(item)}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          width={600}
          height={800}
        />
        <span className="lc-glow" aria-hidden="true" />
        <span className="lc-type">{item.type}</span>
      </a>

      <button
        type="button"
        className="lc-switch"
        aria-pressed={isLit}
        onClick={() => setSwitched((s) => !s)}
        title={isLit ? 'Show studio shot' : 'See it in a room'}
      >
        <span className="lc-switch-track"><span className="lc-switch-knob" /></span>
        <span className="lc-switch-label">{isLit ? 'In a room' : 'Studio'}</span>
      </button>

      <div className="lc-actions">
        <button
          type="button"
          className={`lc-icon-btn ${saved ? 'is-on' : ''}`}
          onClick={() => toggleWishlist(toInquiryProduct(item))}
          aria-label={saved ? 'Remove from saved' : 'Save this light'}
          aria-pressed={saved}
        >
          <Heart size={16} fill={saved ? 'currentColor' : 'none'} />
        </button>
        <button
          type="button"
          className={`lc-icon-btn ${inBasket ? 'is-on' : ''}`}
          onClick={() => addToCart(toInquiryProduct(item))}
          aria-label="Add to inquiry basket"
        >
          {inBasket ? <Check size={16} /> : <Plus size={16} />}
        </button>
      </div>

      <div className="lc-meta">
        <span className="lc-no">No. {item.no}</span>
        <h3 className="lc-title">
          <a href={href}>{item.title}</a>
        </h3>
        <p className="lc-sub">
          <span className="lc-swatch" style={{ background: FINISH_SWATCH[item.finishFamily] }} aria-hidden="true" />
          {item.material || item.finish}
        </p>
      </div>
    </article>
  );
}
