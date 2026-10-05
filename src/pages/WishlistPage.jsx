import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import LightCard from '../components/LightCard';
import { useCollection, collectionCategories, coverImage } from '../data/collection';
import { Heart, ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function WishlistPage({ onNavigate }) {
  const { wishlist, addManyToCart, wishlistCount, clearWishlist } = useCart();
  const collection = useCollection();
  const [confirmClear, setConfirmClear] = useState(false);

  // Collection pieces are saved in inquiry shape; look them up to render the full card
  const isPiece = (p) => p.href?.startsWith('/collection/');
  const savedPieces = collection
    ? wishlist.filter(isPiece).map((p) => collection.find((i) => i.id === p.id)).filter(Boolean)
    : [];
  const savedDownlights = wishlist.filter((p) => !isPiece(p));

  const handleWhatsAppAll = () => {
    let msg = `Hello Arisca Light Studio! 🌟\n\nI have saved these ${wishlist.length} luminaires on your website and would love a project quotation:\n\n`;
    wishlist.forEach((item, index) => {
      msg += `${index + 1}. *${item.title}*${item.finish ? ` (${item.finish})` : ''}\n`;
    });
    msg += `\nPlease let me know pricing and availability in Ahmedabad.`;
    window.open(`https://wa.me/919898086656?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  const clearAll = () => {
    clearWishlist();
    setConfirmClear(false);
  };

  return (
    <div className="saved">
      <section className="coll-hero saved-hero">
        <div className="container">
          <p className="eyebrow"><span className="eyebrow-lines" aria-hidden="true" />Saved lights</p>
          <h1 className="display-title">
            {wishlistCount === 0 ? <>Your shortlist, <em>ready when you are.</em></> : <>Your shortlist of <em>{wishlistCount} {wishlistCount === 1 ? 'light' : 'lights'}.</em></>}
          </h1>
          <p className="lede">
            Tap the heart on any piece to keep it here. When you're ready, move the lot into your inquiry basket or send it to us on WhatsApp in one go.
          </p>
        </div>
      </section>

      {wishlistCount === 0 ? (
        <section className="container saved-empty">
          <div className="saved-empty-intro">
            <span className="saved-empty-heart" aria-hidden="true"><Heart size={26} strokeWidth={1.5} /></span>
            <h2 className="section-heading">Nothing saved yet</h2>
            <p>Start with a family of lights — hover a piece to switch it on in a real room, and heart the ones you love.</p>
          </div>
          <ul className="saved-empty-cats">
            {collectionCategories.map((c) => (
              <li key={c.key}>
                <a href={`/collection?cat=${c.key}`} className="saved-cat">
                  <span className="saved-cat-img">
                    <img src={coverImage(c.key)} alt="" loading="lazy" width={600} height={800} />
                    <img src={coverImage(c.key, 'scene')} alt="" loading="lazy" className="saved-cat-scene" width={600} height={800} />
                  </span>
                  <span className="saved-cat-label">{c.short} <ArrowRight size={14} /></span>
                </a>
              </li>
            ))}
          </ul>
          <div className="center-row">
            <button type="button" className="btn-pill btn-pill-solid" onClick={() => onNavigate('/collection')}>
              Browse the whole collection <ArrowRight size={16} />
            </button>
          </div>
        </section>
      ) : (
        <>
          <div className="saved-bar">
            <div className="container saved-bar-inner">
              <span className="saved-count">
                <Heart size={16} fill="currentColor" aria-hidden="true" />
                <strong>{wishlistCount}</strong> saved
              </span>
              <div className="saved-actions">
                <button type="button" className="btn-pill btn-pill-solid" onClick={() => addManyToCart(wishlist)}>
                  <ShoppingBag size={16} /> Move all to basket
                </button>
                <button type="button" className="btn-pill btn-pill-wa" onClick={handleWhatsAppAll}>
                  <WhatsAppIcon size={16} /> <span><span className="saved-hide-sm">Send list on </span>WhatsApp</span>
                </button>
                {confirmClear ? (
                  <span className="saved-confirm">
                    Clear all?
                    <button type="button" onClick={clearAll}>Yes</button>
                    <button type="button" onClick={() => setConfirmClear(false)}>No</button>
                  </span>
                ) : (
                  <button type="button" className="btn-icon-round" onClick={() => setConfirmClear(true)} aria-label="Clear saved lights" title="Clear saved lights">
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <section className="container saved-grid-section">
            {wishlist.some(isPiece) && !collection && <p className="saved-loading">Loading your saved pieces…</p>}

            {savedPieces.length > 0 && (
              <>
                {savedDownlights.length > 0 && <h2 className="saved-group-title">From the collection</h2>}
                <div className="coll-grid coll-grid-4 saved-grid">
                  {savedPieces.map((item) => <LightCard key={item.id} item={item} />)}
                </div>
              </>
            )}

            {savedDownlights.length > 0 && (
              <>
                {savedPieces.length > 0 && <h2 className="saved-group-title">Architectural downlights</h2>}
                <div className="products-grid saved-grid">
                  {savedDownlights.map((prod) => (
                    <ProductCard key={prod.id} product={prod} onNavigate={onNavigate} />
                  ))}
                </div>
              </>
            )}
          </section>
        </>
      )}
    </div>
  );
}
