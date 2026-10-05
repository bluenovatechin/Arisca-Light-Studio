import React from 'react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import LightCard from '../components/LightCard';
import { useCollection } from '../data/collection';
import {
  Heart,
  ShoppingBag,
  MessageCircle,
  ArrowRight,
  RotateCcw,
  Sparkles
} from 'lucide-react';

export default function WishlistPage({ onNavigate }) {
  const {
    wishlist,
    addToCart,
    wishlistCount,
    showToast
  } = useCart();
  const collection = useCollection();

  // Collection pieces are saved in inquiry shape; look them up to render the full card
  const isPiece = (p) => p.href?.startsWith('/collection/');
  const savedPieces = collection
    ? wishlist.filter(isPiece).map((p) => collection.find((i) => i.id === p.id)).filter(Boolean)
    : [];
  const savedDownlights = wishlist.filter((p) => !isPiece(p));

  const handleAddAllToCart = () => {
    wishlist.forEach((item) => {
      addToCart(item, 1);
    });
    showToast(`Added ${wishlist.length} saved luminaires to your inquiry basket!`);
  };

  const handleWhatsAppAll = () => {
    let msg = `Hello Arisca Light Studio! 🌟\n\nI have saved these ${wishlist.length} favorite luminaires on your website and would love to get a project quotation:\n\n`;
    wishlist.forEach((item, index) => {
      msg += `${index + 1}. *${item.title}* ${item.finish ? ` (${item.finish})` : ''}\n`;
    });
    msg += `\nPlease let me know pricing and availability in Ahmedabad.`;
    window.open(`https://wa.me/919898086656?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="wishlist-page-wrapper">
      <section className="wishlist-hero-header">
        <div className="container">
          <span className="section-badge">
            <Heart size={14} /> Curated Favorites
          </span>
          <h1 className="wishlist-main-title">Your Saved Luminaires</h1>
          <p className="wishlist-main-subtitle">
            Keep track of the downlights, chandeliers, and architectural fixtures you love. Move them into your inquiry basket whenever you are ready.
          </p>
        </div>
      </section>

      <section className="section wishlist-content-section">
        <div className="container">
          {wishlistCount === 0 ? (
            <div className="wishlist-empty-state">
              <div className="empty-heart-circle">
                <Heart size={44} />
              </div>
              <h3>No Saved Luminaires Yet</h3>
              <p>
                As you browse our architectural catalog, tap the heart icon on any fixture to save it to your wishlist.
              </p>
              <button
                className="btn btn-primary btn-lg"
                onClick={() => onNavigate('/collection')}
              >
                Browse the collection <ArrowRight size={18} />
              </button>
            </div>
          ) : (
            <>
              {/* Actions Header */}
              <div className="wishlist-toolbar">
                <div className="wishlist-counter">
                  You have saved <strong>{wishlistCount}</strong> {wishlistCount === 1 ? 'fixture' : 'fixtures'}
                </div>

                <div className="wishlist-toolbar-actions">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={handleAddAllToCart}
                  >
                    <ShoppingBag size={16} /> Move All to Inquiry Basket
                  </button>

                  <button
                    className="btn btn-whatsapp btn-sm"
                    onClick={handleWhatsAppAll}
                  >
                    <MessageCircle size={16} /> Inquire Favorites on WhatsApp
                  </button>
                </div>
              </div>

              {savedPieces.length > 0 && (
                <div className="coll-grid wishlist-grid">
                  {savedPieces.map((item) => <LightCard key={item.id} item={item} />)}
                </div>
              )}

              {savedDownlights.length > 0 && (
                <div className="products-grid">
                  {savedDownlights.map((prod) => (
                    <ProductCard
                      key={prod.id}
                      product={prod}
                      onNavigate={onNavigate}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
