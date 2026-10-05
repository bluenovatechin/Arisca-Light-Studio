import React, { useEffect, useRef, useState } from 'react';
import { useCart } from '../context/CartContext';
import WhatsAppIcon from './WhatsAppIcon';
import { X, ClipboardList, Trash2, CalendarCheck, ArrowRight, MapPin, ShieldCheck } from 'lucide-react';

export default function CartDrawer({ onNavigate }) {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    clearCart,
    cartTotalCount,
    generateWhatsAppInquiryUrl,
    openConsultModal
  } = useCart();

  const [notes, setNotes] = useState('');
  const [confirmClear, setConfirmClear] = useState(false);
  const closeRef = useRef(null);

  // Esc to close, lock the page behind the drawer, move focus into it
  useEffect(() => {
    if (!isCartOpen) {
      setConfirmClear(false);
      return undefined;
    }
    const onKey = (e) => e.key === 'Escape' && closeCart();
    document.addEventListener('keydown', onKey);
    document.body.classList.add('no-scroll');
    const t = setTimeout(() => closeRef.current?.focus({ preventScroll: true }), 60);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('no-scroll');
      clearTimeout(t);
    };
  }, [isCartOpen, closeCart]);

  const handleWhatsAppClick = () => {
    window.open(generateWhatsAppInquiryUrl(notes), '_blank', 'noopener,noreferrer');
  };

  const handleConsultClick = () => {
    closeCart();
    openConsultModal();
  };

  const go = (href) => {
    closeCart();
    onNavigate(href);
  };

  return (
    <div className={`bk ${isCartOpen ? 'is-open' : ''}`} aria-hidden={!isCartOpen}>
      <div className="bk-backdrop" onClick={closeCart} />
      <aside className="bk-panel" role="dialog" aria-modal="true" aria-label="Your inquiry" inert={!isCartOpen ? '' : undefined}>
        <header className="bk-head">
          <div>
            <p className="eyebrow bk-eyebrow"><span className="eyebrow-lines" aria-hidden="true" />Your inquiry</p>
            <h2 className="bk-title">
              {cartTotalCount === 0 ? 'Nothing here yet' : <>{cartTotalCount} {cartTotalCount === 1 ? 'piece' : 'pieces'} <em>to discuss</em></>}
            </h2>
          </div>
          <button ref={closeRef} type="button" className="bk-close" onClick={closeCart} aria-label="Close inquiry">
            <X size={20} />
          </button>
        </header>

        <div className="bk-body">
          {cart.length === 0 ? (
            <div className="bk-empty">
              <div className="bk-empty-art" aria-hidden="true">
                <span className="bk-empty-glow" />
                <ClipboardList size={34} strokeWidth={1.4} />
              </div>
              <h3>Shortlist pieces you'd like to talk about</h3>
              <p>Add lights from the collection, then send the list to us in one message or book a visit — our team will guide you on finishes, sizes and availability.</p>
              <div className="bk-empty-actions">
                <button type="button" className="btn-pill btn-pill-solid" onClick={() => go('/collection')}>
                  Browse the collection <ArrowRight size={16} />
                </button>
                <button type="button" className="btn-pill" onClick={() => go('/wishlist')}>
                  Open saved lights
                </button>
              </div>
            </div>
          ) : (
            <>
              <ul className="bk-list">
                {cart.map(({ product }) => {
                  const href = product.href || `/product/${product.slug}`;
                  const meta = [product.itemNo && `No. ${product.itemNo}`, product.finish, product.wattage && `${product.wattage}W`]
                    .filter(Boolean)
                    .join(' · ');
                  return (
                    <li key={product.id} className="bk-item">
                      <a href={href} className="bk-item-img" onClick={(e) => { e.preventDefault(); go(href); }} tabIndex={-1}>
                        <img src={product.thumbnail || product.images?.[0]?.url} alt="" loading="lazy" />
                      </a>
                      <div className="bk-item-info">
                        <a href={href} className="bk-item-title" onClick={(e) => { e.preventDefault(); go(href); }}>
                          {product.title}
                        </a>
                        {meta && <p className="bk-item-meta">{meta}</p>}
                      </div>
                      <button
                        type="button"
                        className="bk-remove"
                        onClick={() => removeFromCart(product.id)}
                        aria-label={`Remove ${product.title}`}
                        title="Remove"
                      >
                        <Trash2 size={15} />
                      </button>
                    </li>
                  );
                })}
              </ul>

              <label className="bk-notes">
                <span>Site notes <small>(optional)</small></span>
                <textarea
                  placeholder="e.g. 4BHK villa in Bodakdev, false ceiling 10.5 ft, wiring stage…"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={2}
                />
              </label>

              <ul className="bk-assure">
                <li><ShieldCheck size={15} aria-hidden="true" /> Our team confirms finishes, sizes and availability with you</li>
                <li><MapPin size={15} aria-hidden="true" /> See them lit at B-103, Money Plant High Street, Jagatpur Rd</li>
              </ul>
            </>
          )}
        </div>

        {cart.length > 0 && (
          <footer className="bk-foot">
            <button type="button" className="btn-pill bk-wa" onClick={handleWhatsAppClick}>
              <WhatsAppIcon size={18} /> Send this list on WhatsApp
            </button>
            <button type="button" className="btn-pill" onClick={handleConsultClick}>
              <CalendarCheck size={17} /> Book a studio or site visit
            </button>

            <div className="bk-foot-row">
              {confirmClear ? (
                <span className="bk-confirm">
                  Empty the list?
                  <button type="button" onClick={() => { clearCart(); setConfirmClear(false); }}>Yes, clear</button>
                  <button type="button" onClick={() => setConfirmClear(false)}>Keep</button>
                </span>
              ) : (
                <button type="button" className="bk-clear" onClick={() => setConfirmClear(true)}>Clear list</button>
              )}
              <button type="button" className="bk-continue" onClick={closeCart}>Keep browsing</button>
            </div>
          </footer>
        )}
      </aside>
    </div>
  );
}
