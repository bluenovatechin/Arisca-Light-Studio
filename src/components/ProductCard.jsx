import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Heart, Plus, Check, Sparkles } from 'lucide-react';

/**
 * Architectural downlight card. The whole card is a real link to the product
 * page (works with middle-click / open in new tab); save and add-to-inquiry are
 * small, always-visible buttons layered above it.
 */
// Cards use the 640px copies in /optimized/products/640/ (the originals are 1400px)
const cardImage = (src) => src?.replace('/optimized/products/', '/optimized/products/640/');

export default function ProductCard({ product, priority = false }) {
  const [hovered, setHovered] = useState(false);
  const { addToCart, toggleWishlist, isInWishlist, cart } = useCart();

  const href = `/product/${product.slug}`;
  const isFavorited = isInWishlist(product.id);
  const inBasket = cart.some((c) => c.product.id === product.id);
  const primaryImg = cardImage(product.thumbnail || product.images?.[0]?.url);
  const secondaryImg = cardImage(product.images?.[1]?.url);

  return (
    <article className="pc" onMouseEnter={() => setHovered(true)}>
      <a href={href} className="pc-link">
        <span className="pc-media">
          <img
            src={primaryImg}
            alt={`${product.title} - ${product.finish ? product.finish + ' ' : ''}${product.wattage ? product.wattage + 'W ' : ''}Architectural Downlight | Arisca Light Studio Ahmedabad`}
            width={640}
            height={640}
            loading={priority ? 'eager' : 'lazy'}
            fetchpriority={priority ? 'high' : undefined}
            decoding="async"
          />
          {/* second photo is only fetched once someone actually hovers (never on phones) */}
          {hovered && secondaryImg && secondaryImg !== primaryImg && (
            <img className="pc-media-alt" src={secondaryImg} alt={`${product.title} in-room detail - Arisca Light Studio`} loading="lazy" decoding="async" />
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
