import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Heart, Eye, Plus, ShoppingBag, Sparkles, Star, Check } from 'lucide-react';

export default function ProductCard({ product, onNavigate }) {
  const { addToCart, toggleWishlist, isInWishlist, openProductModal } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const isFavorited = isInWishlist(product.id);
  const primaryImg = product.thumbnail || product.images?.[0]?.url;
  const secondaryImg = product.images?.[1]?.url || primaryImg;

  const handleCardClick = () => {
    onNavigate(`/product/${product.slug}`);
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    openProductModal(product);
  };

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <article
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${product.title} priced at ${product.formattedPrice}`}
    >
      {/* Product Image Area */}
      <div className="product-card-img-wrap">
        <img
          src={isHovered && secondaryImg ? secondaryImg : primaryImg}
          alt={`${product.title} - ${product.finish} Architectural Light in Ahmedabad`}
          className="product-card-img"
          loading="lazy"
        />

        {/* Ribbons / Badges */}
        <div className="product-badge-group">
          {product.discountPercent > 0 && (
            <span className="discount-pill">
              -{product.discountPercent}%
            </span>
          )}
          {product.ribbon && (
            <span className="product-ribbon">
              <Sparkles size={11} /> {product.ribbon}
            </span>
          )}
        </div>

        {/* Floating Quick Action Buttons */}
        <div className="product-card-actions">
          <button
            className={`action-circle-btn ${isFavorited ? 'favorited' : ''}`}
            onClick={handleWishlistToggle}
            title={isFavorited ? 'Remove from favorites' : 'Save to favorites'}
            aria-label="Toggle favorite"
          >
            <Heart size={16} fill={isFavorited ? '#14958f' : 'none'} color={isFavorited ? '#14958f' : '#334155'} />
          </button>

          <button
            className="action-circle-btn"
            onClick={handleQuickView}
            title="Quick Preview"
            aria-label="Quick preview"
          >
            <Eye size={16} color="#334155" />
          </button>
        </div>

        {/* Quick Add Overlay on Desktop Hover */}
        <div className="product-card-add-overlay">
          <button
            className={`btn btn-primary btn-sm btn-block ${justAdded ? 'added-success' : ''}`}
            onClick={handleAddToCart}
          >
            {justAdded ? (
              <>
                <Check size={16} /> Added to Cart
              </>
            ) : (
              <>
                <Plus size={16} /> Add to Cart
              </>
            )}
          </button>
        </div>
      </div>

      {/* Product Details Area */}
      <div className="product-card-body">
        <div className="product-card-meta-top">
          <div className="spec-badges-row">
            <span className="spec-badge wattage">{product.wattage ? `${product.wattage}W` : '12W'}</span>
            <span className="spec-badge finish">{product.finish}</span>
          </div>

          <div className="product-rating-pill" title={`${product.rating} out of 5 stars (${product.reviewCount} verified reviews)`}>
            <Star size={12} className="star-icon" fill="#14958f" />
            <span>{product.rating}</span>
            <span className="review-num">({product.reviewCount})</span>
          </div>
        </div>

        <h3 className="product-card-title">{product.title}</h3>
        {product.subtitle && (
          <p className="product-card-subtitle">{product.subtitle}</p>
        )}

        {/* Pricing Area */}
        <div className="product-card-price-row">
          <div className="price-tag-wrap">
            <div className="price-main-line">
              <span className="price-current">{product.formattedPrice}</span>
              {product.mrp && product.mrp > product.price && (
                <span className="price-mrp">{product.formattedMrp}</span>
              )}
            </div>
            <span className="price-subtext">Incl. GST • Free Site Laser Survey</span>
          </div>

          {/* Mobile direct add button */}
          <button
            className={`mobile-quick-add-btn ${justAdded ? 'added-success' : ''}`}
            onClick={handleAddToCart}
            aria-label={`Add ${product.title} to cart`}
            title="Add to cart"
          >
            {justAdded ? <Check size={18} /> : <ShoppingBag size={18} />}
          </button>
        </div>
      </div>
    </article>
  );
}
