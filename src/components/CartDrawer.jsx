import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { siteInfo, studioLocationInfo } from '../data/ariscaData';
import {
  X,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  MessageCircle,
  FileText,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function CartDrawer({ onNavigate }) {
  const {
    cart,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartTotalCount,
    cartTotalPrice,
    cartTotalMrp,
    cartSavings,
    cartOnRequestCount,
    generateWhatsAppInquiryUrl,
    openConsultModal
  } = useCart();

  const [notes, setNotes] = useState('');

  if (!isCartOpen) return null;

  const handleWhatsAppClick = () => {
    let url = generateWhatsAppInquiryUrl();
    if (notes.trim()) {
      url += encodeURIComponent(`\n\nProject / Site Notes: ${notes.trim()}`);
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleConsultClick = () => {
    closeCart();
    openConsultModal();
  };

  return (
    <div className="drawer-overlay" onClick={closeCart} role="dialog" aria-modal="true" aria-label="Inquiry Basket">
      <aside
        className="drawer-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="drawer-header">
          <div className="drawer-title-wrap">
            <ShoppingBag className="cart-header-icon" size={22} />
            <div>
              <h3>Inquiry Cart</h3>
              <span className="drawer-subtitle">
                {cartTotalCount} {cartTotalCount === 1 ? 'luminaire fixture' : 'luminaire fixtures'} selected
              </span>
            </div>
          </div>
          <button
            className="drawer-close-btn"
            onClick={closeCart}
            aria-label="Close cart drawer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping / Survey Progress Indicator */}
        {cartTotalPrice > 0 && (
          <div className="cart-incentive-banner">
            <Sparkles size={14} className="gold-text" />
            <span>
              {cartTotalPrice >= 25000
                ? '🎉 Congratulations! You unlocked FREE On-Site Laser Measurement & Lighting Layout!'
                : `Add ₹${(25000 - cartTotalPrice).toLocaleString('en-IN')} more to unlock FREE on-site laser survey across Ahmedabad!`}
            </span>
          </div>
        )}

        {/* Drawer Content */}
        <div className="drawer-content custom-scrollbar">
          {cart.length === 0 ? (
            <div className="drawer-empty-state">
              <div className="empty-icon-circle">
                <ShoppingBag size={40} />
              </div>
              <h4>Your Inquiry Cart is Empty</h4>
              <p>
                Browse our architectural catalog of LOFY downlights, anti-glare COB fixtures, chandeliers, and surface cylinders to build your lighting plan.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => {
                  closeCart();
                  onNavigate('/collection');
                }}
              >
                Explore Lighting Collection <ArrowRight size={16} />
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {cart.map(({ product, quantity }) => {
                const priced = typeof product.price === 'number';
                const itemPrice = product.price;
                const itemTotal = priced ? itemPrice * quantity : 0;
                return (
                  <div key={product.id} className="cart-item-card">
                    <div className="cart-item-img-wrap">
                      <img
                        src={product.thumbnail || product.images?.[0]?.url}
                        alt={product.title}
                        loading="lazy"
                      />
                    </div>
                    <div className="cart-item-info">
                      <div className="cart-item-header">
                        <h4
                          className="cart-item-title"
                          onClick={() => {
                            closeCart();
                            onNavigate(product.href || `/product/${product.slug}`);
                          }}
                        >
                          {product.title}
                        </h4>
                        <button
                          className="item-remove-btn"
                          onClick={() => removeFromCart(product.id)}
                          title="Remove fixture"
                          aria-label={`Remove ${product.title}`}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div className="cart-item-tags">
                        {product.finish && <span className="cart-tag">{product.finish}</span>}
                        {product.wattage
                          ? <span className="cart-tag">{product.wattage}W</span>
                          : product.itemNo && <span className="cart-tag">No. {product.itemNo}</span>}
                      </div>

                      <div className="cart-item-footer">
                        <div className="quantity-controls">
                          <button
                            className="qty-btn"
                            onClick={() => updateQuantity(product.id, -1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={13} />
                          </button>
                          <span className="qty-value">{quantity}</span>
                          <button
                            className="qty-btn"
                            onClick={() => updateQuantity(product.id, 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus size={13} />
                          </button>
                        </div>

                        <div className="cart-item-price-wrap">
                          {priced ? (
                            <>
                              <span className="item-unit-calc">₹{itemPrice.toLocaleString('en-IN')} × {quantity}</span>
                              <span className="item-total-price">₹{itemTotal.toLocaleString('en-IN')}</span>
                            </>
                          ) : (
                            <span className="item-unit-calc">Price on request</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Project / Site Notes Field */}
              <div className="cart-notes-box">
                <label htmlFor="cart-notes">Project Location & Ceiling Notes (Optional):</label>
                <textarea
                  id="cart-notes"
                  placeholder="e.g. 4BHK Villa in Bodakdev, false ceiling height 10.5ft, electrical pre-wiring stage..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={2}
                />
              </div>

              {/* Studio Assurances */}
              <div className="drawer-assurances">
                <div className="assurance-row">
                  <CheckCircle2 size={15} className="gold-text" />
                  <span>Includes 2-Year Studio Warranty & Genuine Driver Ballast</span>
                </div>
                <div className="assurance-row">
                  <MapPin size={15} className="gold-text" />
                  <span>Showroom: B - 103, Money Plant High Street, Jagatpur Rd, Ahmedabad</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer with Financial Summary */}
        {cart.length > 0 && (
          <div className="drawer-footer">
            <div className="cart-summary-totals">
              {cartOnRequestCount > 0 && (
                <div className="summary-row">
                  <span>{cartOnRequestCount} {cartOnRequestCount === 1 ? 'piece' : 'pieces'} from the collection</span>
                  <span>Price on request</span>
                </div>
              )}
              {cartTotalPrice > 0 && (
                <>
                  <div className="summary-row">
                    <span>Downlights subtotal</span>
                    <span>₹{cartTotalMrp.toLocaleString('en-IN')}</span>
                  </div>
                  {cartSavings > 0 && (
                    <div className="summary-row savings">
                      <span>Studio Instant Discount</span>
                      <span>-₹{cartSavings.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="summary-row total-highlight">
                    <span>Estimated Total (Incl. GST)</span>
                    <span className="total-amount">₹{cartTotalPrice.toLocaleString('en-IN')}</span>
                  </div>
                </>
              )}
            </div>

            <div className="drawer-footer-actions">
              <button
                className="btn btn-whatsapp btn-block"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle size={18} /> Request Formal WhatsApp Quotation
              </button>

              <button
                className="btn btn-secondary btn-block"
                onClick={handleConsultClick}
              >
                <FileText size={18} /> Book Free In-Home Laser Survey
              </button>
            </div>

            <div className="drawer-footer-bottom">
              <button className="clear-cart-btn" onClick={clearCart}>
                Clear Cart
              </button>
              <span className="price-disclaimer">
                Wholesale trade pricing available for certified architects
              </span>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
