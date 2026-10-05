import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import {
  X,
  Plus,
  Minus,
  ShoppingBag,
  MessageCircle,
  Heart,
  ArrowRight,
  ShieldCheck,
  Check,
  Sparkles
} from 'lucide-react';

export default function ProductModal({ onNavigate }) {
  const {
    activeProductModal,
    closeProductModal,
    addToCart,
    toggleWishlist,
    isInWishlist
  } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!activeProductModal) return null;
  const product = activeProductModal;

  const isFavorited = isInWishlist(product.id);
  const images = product.images && product.images.length > 0
    ? product.images
    : [{ url: product.thumbnail }];
  const currentImgUrl = images[selectedImageIndex]?.url || product.thumbnail;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    closeProductModal();
  };

  const handleWhatsApp = () => {
    const rawNumber = '9898086656';
    const text = `Hello Arisca Light Studio! 🌟\n\nI am inquiring about:\n• *${product.title}*\n• Quantity: ${quantity} units\n• Finish: ${product.finish || 'Dual Tone'}\n• Wattage: ${product.wattage ? product.wattage + 'W' : 'Architectural'}\n\nPlease share price estimate and availability for site measurement in Ahmedabad.`;
    window.open(`https://wa.me/${rawNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const handleFullPageView = () => {
    closeProductModal();
    onNavigate(`/product/${product.slug}`);
  };

  return (
    <div className="modal-backdrop" onClick={closeProductModal}>
      <div
        className="modal-container product-modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-product-title"
      >
        <button
          className="modal-close-btn"
          onClick={closeProductModal}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="product-modal-grid">
          {/* Gallery Column */}
          <div className="modal-gallery-column">
            <div className="modal-main-img-wrap">
              <img
                src={currentImgUrl}
                alt={product.title}
                className="modal-main-img"
              />
              {product.ribbon && (
                <span className="modal-ribbon">
                  <Sparkles size={12} /> {product.ribbon}
                </span>
              )}
            </div>

            {images.length > 1 && (
              <div className="modal-thumbs-row">
                {images.map((img, idx) => (
                  <button
                    key={img.id || idx}
                    className={`modal-thumb-btn ${idx === selectedImageIndex ? 'active' : ''}`}
                    onClick={() => setSelectedImageIndex(idx)}
                    aria-label={`View image ${idx + 1}`}
                  >
                    <img src={img.url} alt={`Thumbnail ${idx + 1}`} loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details & Action Column */}
          <div className="modal-details-column">
            <div className="modal-header-section">
              <div className="modal-category-row">
                <span className="spec-badge">{product.type || 'COB Downlight'}</span>
                <span className="spec-badge spec-badge-muted">{product.finish || 'Dual Tone'}</span>
                <span className="stock-pill">
                  <Check size={12} /> In Stock
                </span>
              </div>

              <h2 id="modal-product-title" className="modal-title">
                {product.title}
              </h2>
              {product.subtitle && (
                <p className="modal-subtitle">{product.subtitle}</p>
              )}
            </div>

            {/* Price & Discount Callout */}
            <div className="pricing-policy-banner">
              <div className="pricing-header">
                <div className="price-main-display">
                  <span className="pricing-value">{product.formattedPrice}</span>
                  {product.mrp && product.mrp > product.price && (
                    <span className="price-modal-mrp">{product.formattedMrp}</span>
                  )}
                  {product.discountPercent > 0 && (
                    <span className="modal-discount-tag">-{product.discountPercent}% OFF</span>
                  )}
                </div>
                <div className="subtotal-indicator">
                  Subtotal: <strong>₹{((product.price || 1450) * quantity).toLocaleString('en-IN')}</strong>
                </div>
              </div>
              <p className="pricing-desc">
                Includes GST • Free on-site laser measurement across Ahmedabad • 2-Year Studio Warranty.
              </p>
            </div>

            {/* Product Description */}
            <div
              className="modal-description"
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />

            {/* Luminaire Specs Highlights */}
            {product.specs && (
              <div className="modal-specs-box">
                <h4 className="specs-title">Architectural Luminaire Specs</h4>
                <div className="specs-grid">
                  <div className="spec-item">
                    <span className="spec-key">Power / Wattage:</span>
                    <span className="spec-val">{product.specs.wattage}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-key">Lumen Output:</span>
                    <span className="spec-val">{product.specs.lumens}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-key">Color Rendering:</span>
                    <span className="spec-val">{product.specs.cri}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-key">Beam Angle:</span>
                    <span className="spec-val">{product.specs.beamAngle}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-key">Housing:</span>
                    <span className="spec-val">{product.specs.housing}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-key">Mounting:</span>
                    <span className="spec-val">{product.specs.mounting}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Quantity Selector & Action CTAs */}
            <div className="modal-action-row">
              <div className="quantity-controls large-qty">
                <button
                  className="qty-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="qty-value">{quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>

              <button
                className="btn btn-primary btn-lg flex-1"
                onClick={handleAddToCart}
              >
                <ShoppingBag size={18} /> Add to Inquiry Basket
              </button>

              <button
                className={`action-circle-btn large-circle ${isFavorited ? 'favorited' : ''}`}
                onClick={() => toggleWishlist(product)}
                title={isFavorited ? 'Remove favorite' : 'Save favorite'}
                aria-label="Toggle favorite"
              >
                <Heart size={20} fill={isFavorited ? '#2bb3ac' : 'none'} color={isFavorited ? '#2bb3ac' : '#ffffff'} />
              </button>
            </div>

            <div className="modal-secondary-actions">
              <button
                className="btn btn-whatsapp btn-block"
                onClick={handleWhatsApp}
              >
                <MessageCircle size={18} /> Direct WhatsApp Inquiry
              </button>

              <button
                className="btn btn-secondary btn-block"
                onClick={handleFullPageView}
              >
                View Full Product Page & Photometrics <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
