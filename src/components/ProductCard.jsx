import React from 'react';
import { useCart } from '../context/CartContext';
import { Heart, Plus, Check, Sparkles } from 'lucide-react';

/**
 * Architectural downlight card. The whole card is a real link to the product
 * page (works with middle-click / open in new tab); save and add-to-inquiry are
 * small, always-visible buttons layered above it.
 */
export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, isInWishlist, cart } = useCart();

  const href = `/product/${product.slug}`;
  const isFavorited = isInWishlist(product.id);
  const inBasket = cart.some((c) => c.product.id === product.id);
  const primaryImg = product.thumbnail || product.images?.[0]?.url;
  const secondaryImg = product.images?.[1]?.url;

  return (
    <article className="pc">
      <a href={href} className="pc-link" aria-label={product.title}>
        <span className="pc-media">
          <img src={primaryImg} alt={`${product.title}, ${product.finish}`} loading="lazy" decoding="async" />
          {secondaryImg && secondaryImg !== primaryImg && (
            <img className="pc-media-alt" src={secondaryImg} alt="" aria-hidden="true" loading="lazy" decoding="async" />
          )}
          {product.ribbon && (
            <span className="pc-ribbon"><Sparkles size={11} /> {product.ribbon}</span>
          )}
        </span>
        <span className="pc-meta">
          <span className="pc-specs">
            {product.wattage ? `${product.wattage}W` : product.type}
            {product.finish && <> · {product.finish}</>}
          </span>
          <span className="pc-title">{product.title}</span>
          {product.subtitle && <span className="pc-sub">{product.subtitle}</span>}
        </span>
      </a>

      <div className="pc-actions">
        <button
          type="button"
          className={`pc-icon-btn ${isFavorited ? 'is-on' : ''}`}
          onClick={() => toggleWishlist(product)}
          aria-pressed={isFavorited}
          aria-label={isFavorited ? 'Remove from saved' : 'Save this light'}
        >
          <Heart size={16} fill={isFavorited ? 'currentColor' : 'none'} />
        </button>
        <button
          type="button"
          className={`pc-icon-btn ${inBasket ? 'is-on' : ''}`}
          onClick={() => addToCart(product)}
          aria-label={inBasket ? 'Already in your inquiry' : 'Add to inquiry'}
        >
          {inBasket ? <Check size={16} /> : <Plus size={16} />}
        </button>
      </div>
    </article>
  );
}
