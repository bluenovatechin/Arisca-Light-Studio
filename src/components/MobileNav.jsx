import React from 'react';
import { useCart } from '../context/CartContext';
import { Home, Compass, Heart, ShoppingBag, Menu, X } from 'lucide-react';

export default function MobileNav({ currentRoute, onNavigate }) {
  const {
    openCart,
    cartTotalCount,
    wishlistCount,
    isMobileMenuOpen,
    toggleMobileMenu
  } = useCart();

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile Bottom Navigation">
      <button
        className={`mobile-tab-btn ${currentRoute === '/' && !isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => onNavigate('/')}
        aria-label="Home"
      >
        <Home size={20} />
        <span>Home</span>
      </button>

      <button
        className={`mobile-tab-btn ${currentRoute.startsWith('/collection') && !isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => onNavigate('/collection')}
        aria-label="Browse the collection"
      >
        <Compass size={20} />
        <span>Collection</span>
      </button>

      <button
        className={`mobile-tab-btn ${currentRoute === '/wishlist' && !isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => onNavigate('/wishlist')}
        aria-label={`Wishlist (${wishlistCount})`}
      >
        <div className="tab-icon-wrap">
          <Heart size={20} />
          {wishlistCount > 0 && <span className="tab-badge">{wishlistCount}</span>}
        </div>
        <span>Saved</span>
      </button>

      <button
        className="mobile-tab-btn"
        onClick={openCart}
        aria-label={`Inquiry Basket (${cartTotalCount})`}
      >
        <div className="tab-icon-wrap">
          <ShoppingBag size={20} />
          {cartTotalCount > 0 && <span className="tab-badge gold-tab-badge">{cartTotalCount}</span>}
        </div>
        <span>Inquiry</span>
      </button>

      <button
        className={`mobile-tab-btn ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Open mobile navigation menu"
        aria-expanded={isMobileMenuOpen}
      >
        <div className="tab-icon-wrap">
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </div>
        <span>{isMobileMenuOpen ? 'Close' : 'Menu'}</span>
      </button>
    </nav>
  );
}
