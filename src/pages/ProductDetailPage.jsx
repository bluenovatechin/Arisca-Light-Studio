import React, { useState } from 'react';
import NotFoundPage from './NotFoundPage';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { openWhatsApp } from '../utils/whatsapp';
import { enrichedProducts, studioLocationInfo } from '../data/ariscaData';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import SeoHead from '../components/SeoHead';
import {
  ChevronRight,
  Heart,
  ShoppingBag,
  Calendar,
  ShieldCheck,
  Check,
  Sparkles,
  Layers,
  Award,
  ArrowLeft,
  ArrowRight,
  Share2,
  Star,
  MapPin,
  Truck,
  CheckCircle2
} from 'lucide-react';

export default function ProductDetailPage({ slug, onNavigate }) {
  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
    openConsultModal,
    showToast
  } = useCart();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const product = enrichedProducts.find((p) => p.slug === slug);
  if (!product) return <NotFoundPage onNavigate={onNavigate} />;

  const isFavorited = isInWishlist(product.id);
  const images = product.images && product.images.length > 0
    ? product.images
    : [{ url: product.thumbnail }];
  const currentImg = images[selectedImageIndex]?.url || product.thumbnail;

  // Related products
  const relatedProducts = enrichedProducts
    .filter((p) => p.id !== product.id && (p.wattage === product.wattage || p.categoryKey === product.categoryKey))
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleWhatsApp = () => {
    const text = `Hello Arisca Light Studio!\n\nI'd like to know more about *${product.title}*:\n• Finish: ${product.finish || 'Dual Tone'}\n• Wattage: ${product.wattage ? product.wattage + 'W' : '—'}\n\nPlease share availability and arrange an on-site visit in Ahmedabad.\n\nProduct link: https://www.ariscalightstudio.com/product/${product.slug}`;
    openWhatsApp(text);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: `Check out ${product.title} at Arisca Light Studio Ahmedabad`,
        url: window.location.href
      });
    } else {
      navigator.clipboard?.writeText(window.location.href);
      showToast('Product link copied to clipboard!');
    }
  };

  return (
    <div className="product-detail-page-wrapper light-theme-detail">
      {/* Maximum SEO for Google Product Rich Snippets */}
      <SeoHead
        title={`${product.title} | Specs & Finishes | Arisca Light Studio Ahmedabad`}
        description={`${product.title} (${product.finish}): ${product.wattage}W high-CRI anti-glare architectural downlight with a 2-year studio warranty. See it lit at our Ahmedabad studio.`}
        keywords={`${product.title}, ${product.title} ahmedabad, ${product.wattage}w downlight, cob downlight ahmedabad`}
        canonicalUrl={`https://www.ariscalightstudio.com/product/${product.slug}`}
        ogImage={product.thumbnail}
        schemaType="Product"
        productData={product}
      />

      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumbs-nav" aria-label="Breadcrumb">
          <button onClick={() => onNavigate('/')}>Home</button>
          <ChevronRight size={14} />
          <button onClick={() => onNavigate('/shop')}>Shop</button>
          <ChevronRight size={14} />
          <span className="current-crumb">{product.title}</span>
        </nav>

        {/* Back Link on Mobile */}
        <button className="back-link-btn" onClick={() => onNavigate('/shop')}>
          <ArrowLeft size={16} /> Back to All Luminaires
        </button>

        {/* Product Hero Layout */}
        <div className="product-detail-grid">
          {/* Gallery Column */}
          <div className="detail-gallery-column">
            <div className="detail-main-img-card">
              <img
                src={currentImg}
                alt={`${product.title} - ${product.finish} Architectural Light in Ahmedabad`}
                className="detail-main-img"
              />
              <div className="detail-floating-badges">
                {product.ribbon && (
                  <span className="product-ribbon">
                    <Sparkles size={12} /> {product.ribbon}
                  </span>
                )}
              </div>
            </div>

            {images.length > 1 && (
              <div className="detail-thumbs-strip">
                {images.map((img, idx) => (
                  <button
                    key={img.id || idx}
                    className={`detail-thumb-btn ${idx === selectedImageIndex ? 'active' : ''}`}
                    onClick={() => setSelectedImageIndex(idx)}
                    aria-label={`View angle ${idx + 1}`}
                  >
                    <img src={img.url} alt={`Angle ${idx + 1}`} loading="lazy" />
                  </button>
                ))}
              </div>
            )}

            {/* Room Suitability Highlights */}
            {product.suitableRooms && product.suitableRooms.length > 0 && (
              <div className="detail-rooms-card">
                <h4>Recommended Interior Applications:</h4>
                <div className="detail-rooms-tags">
                  {product.suitableRooms.map((r, i) => (
                    <span key={i} className="room-tag-pill">
                      ✓ {r}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Info & Purchase Column */}
          <div className="detail-info-column">
            <div className="detail-header">
              <div className="detail-category-row">
                <span className="spec-badge">{product.type || 'COB Downlight'}</span>
                <span className="spec-badge spec-badge-muted">{product.finish || 'Dual Tone'}</span>
                <span className="stock-pill">
                  <Check size={12} /> Studio In-Stock
                </span>
                <div className="detail-rating-pill">
                  <Star size={13} fill="#14958f" color="#14958f" />
                  <span>{product.rating}</span>
                  <span className="reviews">({product.reviewCount} reviews)</span>
                </div>
              </div>

              <h1 className="detail-title">{product.title}</h1>
              {product.subtitle && (
                <p className="detail-subtitle">{product.subtitle}</p>
              )}
            </div>

            <div className="detail-actions-card">
              <p className="detail-booking-note">
                Pricing is shared after a short consultation with our lighting team. Add this to your inquiry or message us directly.
              </p>

              {/* Action Buttons */}
              <div className="detail-action-buttons-grid">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag size={18} /> Add to inquiry
                </button>

                <button
                  className="btn btn-whatsapp btn-lg"
                  onClick={handleWhatsApp}
                >
                  <WhatsAppIcon size={18} /> Ask on WhatsApp
                </button>
              </div>

              <div className="detail-secondary-actions">
                <button
                  className={`btn-ghost-icon ${isFavorited ? 'favorited' : ''}`}
                  onClick={() => toggleWishlist(product)}
                >
                  <Heart size={18} fill={isFavorited ? '#14958f' : 'none'} color={isFavorited ? '#14958f' : '#334155'} />
                  <span>{isFavorited ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
                </button>

                <button className="btn-ghost-icon" onClick={handleShare}>
                  <Share2 size={18} />
                  <span>Share Fixture</span>
                </button>

                <button className="btn-ghost-icon" onClick={openConsultModal}>
                  <Calendar size={18} />
                  <span>Book Free Site Visit</span>
                </button>
              </div>
            </div>

            {/* Delivery & Studio Assurance */}
            <div className="detail-delivery-card">
              <div className="dd-item">
                <Truck size={18} className="gold-text" />
                <div>
                  <strong>Ahmedabad Local Delivery & Pickup</strong>
                  <p>In-stock items ready for same-day pickup at our Jagatpur studio or next-day site delivery.</p>
                </div>
              </div>
              <div className="dd-item">
                <ShieldCheck size={18} className="gold-text" />
                <div>
                  <strong>2-Year Comprehensive Warranty</strong>
                  <p>Full replacement on LED chips & power supply drivers.</p>
                </div>
              </div>
              <div className="dd-item">
                <MapPin size={18} className="gold-text" />
                <div>
                  <strong>Showroom Dark-Room Demo</strong>
                  <p>Experience this fixture illuminated at B-103 Money Plant High Street, SG Hwy, Ahmedabad.</p>
                </div>
              </div>
            </div>

            {/* Product HTML Description */}
            <div
              className="detail-description-text"
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />

            {/* Technical Luminaire Specifications Table */}
            <div className="detail-specs-table-card">
              <h3 className="specs-table-title">Photometric & Hardware Specs</h3>
              <div className="specs-table-grid">
                <div className="spec-cell">
                  <span className="spec-label">Power Rating</span>
                  <span className="spec-data">{product.specs?.wattage || `${product.wattage}W`}</span>
                </div>
                <div className="spec-cell">
                  <span className="spec-label">Total Lumen Output</span>
                  <span className="spec-data">{product.specs?.lumens || `${product.wattage * 95} Lumens`}</span>
                </div>
                <div className="spec-cell">
                  <span className="spec-label">Color Temp (CCT)</span>
                  <span className="spec-data">3000K Warm White / 4000K Neutral</span>
                </div>
                <div className="spec-cell">
                  <span className="spec-label">Color Rendering (CRI)</span>
                  <span className="spec-data">Ra &gt; 90 (High True Color Fidelity)</span>
                </div>
                <div className="spec-cell">
                  <span className="spec-label">Optical Beam Angle</span>
                  <span className="spec-data">{product.specs?.beamAngle || '36° Precision Spot'}</span>
                </div>
                <div className="spec-cell">
                  <span className="spec-label">Glare Protection</span>
                  <span className="spec-data">Deep Reflector Cone (UGR &lt; 19)</span>
                </div>
                <div className="spec-cell">
                  <span className="spec-label">Ceiling Cutout</span>
                  <span className="spec-data">{product.specs?.cutout || '75mm Cutout'}</span>
                </div>
                <div className="spec-cell">
                  <span className="spec-label">Housing Body</span>
                  <span className="spec-data">Die-Cast Aerospace Aluminum</span>
                </div>
                <div className="spec-cell">
                  <span className="spec-label">Mounting Type</span>
                  <span className="spec-data">{product.specs?.mounting || 'Recessed Ceiling'}</span>
                </div>
                <div className="spec-cell">
                  <span className="spec-label">Warranty</span>
                  <span className="spec-data">2-Year Studio Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Recommendation */}
        {relatedProducts.length > 0 && (
          <section className="related-products-section">
            <div className="section-header-row">
              <div>
                <span className="section-badge">
                  <Sparkles size={14} /> Matching Architectural Fixtures
                </span>
                <h2 className="section-title">Frequently Paired Luminaires</h2>
              </div>
              <button
                className="btn btn-secondary view-all-btn"
                onClick={() => onNavigate('/shop')}
              >
                View all downlights <ArrowRight size={16} />
              </button>
            </div>

            <div className="products-grid">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} onNavigate={onNavigate} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
