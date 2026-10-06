import React, { createContext, useContext, useState, useEffect } from 'react';
import { whatsappUrl } from '../utils/whatsapp';
import { enrichedProducts, getLocalAsset } from '../data/ariscaData';

const CartContext = createContext(null);

// Items saved by older versions of the site can carry photo URLs on the old
// website builder's CDN (cdn.zyrosite.com), which sets third-party cookies.
// Refresh known downlights from current data and map any remote photo to its
// local copy, so a saved basket never reaches the old server.
const currentById = new Map(enrichedProducts.map((p) => [p.id, p]));
const isRemote = (u) => typeof u === 'string' && /^https?:\/\//i.test(u);
const localUrl = (u) => {
  if (!isRemote(u)) return u;
  const local = getLocalAsset(u, '');
  return isRemote(local) ? undefined : local;
};
function freshen(product) {
  if (!product || !product.id) return null;
  const current = currentById.get(product.id);
  if (current) return current;
  const out = { ...product, thumbnail: localUrl(product.thumbnail) };
  if (Array.isArray(product.images)) {
    out.images = product.images.map((img) => ({ ...img, url: localUrl(img.url) })).filter((img) => img.url);
  }
  return out;
}

function loadSaved(key) {
  try {
    const saved = JSON.parse(localStorage.getItem(key) || '[]');
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  // Cart state persisted to localStorage
  const [cart, setCart] = useState(() =>
    loadSaved('arisca_cart')
      .map((item) => ({ product: freshen(item?.product) }))
      .filter((item) => item.product)
  );

  // Wishlist state persisted to localStorage
  const [wishlist, setWishlist] = useState(() => loadSaved('arisca_wishlist').map(freshen).filter(Boolean));

  // UI Modals and Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [activeLightbox, setActiveLightbox] = useState(null);
  const [toasts, setToasts] = useState([]);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('arisca_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('Could not save cart to localStorage', e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('arisca_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.warn('Could not save wishlist to localStorage', e);
    }
  }, [wishlist]);

  // Toast notifications: one at a time — a new toast replaces the current one
  // instead of stacking, so rapid actions never pile text up on screen.
  // opts: { title, image, action: 'cart' | 'wishlist', duration }
  const toastTimer = React.useRef(null);
  const showToast = React.useCallback((message, type = 'success', opts = {}) => {
    const id = Date.now() + Math.random().toString(36).slice(2, 6);
    clearTimeout(toastTimer.current);
    setToasts([{ id, message, type, ...opts }]);
    toastTimer.current = setTimeout(() => setToasts([]), opts.duration || 3600);
  }, []);

  const removeToast = (id) => {
    clearTimeout(toastTimer.current);
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Bumped on every add so the header basket icon can play its "landed" pulse
  const [cartPulse, setCartPulse] = useState(0);

  // The inquiry list holds each piece once: Arisca books consultations, it
  // doesn't sell by quantity, so there are no counts or prices here.
  const mergeIntoCart = (prev, product) =>
    prev.some((item) => item.product.id === product.id) ? prev : [...prev, { product }];

  // Adding never hijacks the screen with the drawer; a compact confirmation
  // offers "View inquiry" instead.
  const addToCart = (product) => {
    const already = cart.some((item) => item.product.id === product.id);
    setCart((prev) => mergeIntoCart(prev, product));
    if (!already) setCartPulse((n) => n + 1);
    showToast(product.title, already ? 'info' : 'success', {
      title: already ? 'Already in your inquiry' : 'Added to your inquiry',
      image: product.thumbnail || product.images?.[0]?.url,
      action: 'cart'
    });
  };

  const addManyToCart = (products) => {
    if (!products.length) return;
    setCart((prev) => products.reduce(mergeIntoCart, prev));
    setCartPulse((n) => n + 1);
    showToast(`${products.length} saved ${products.length === 1 ? 'light' : 'lights'} moved across`, 'success', {
      title: 'Added to your inquiry',
      image: products[0].thumbnail || products[0].images?.[0]?.url,
      action: 'cart'
    });
  };

  // Removing happens inside the open drawer, where the list itself shows the change
  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  // Wishlist operations (toast decided outside the updater so StrictMode's
  // double-invoked updaters can't fire it twice)
  const toggleWishlist = (product) => {
    const exists = wishlist.some((p) => p.id === product.id);
    setWishlist((prev) =>
      exists ? prev.filter((p) => p.id !== product.id) : [...prev.filter((p) => p.id !== product.id), product]
    );
    showToast(product.title, exists ? 'info' : 'success', {
      title: exists ? 'Removed from saved lights' : 'Saved to your lights',
      image: product.thumbnail || product.images?.[0]?.url,
      action: exists ? undefined : 'wishlist'
    });
  };

  const clearWishlist = () => {
    setWishlist([]);
    showToast('Your shortlist is empty again.', 'info', { title: 'Saved lights cleared' });
  };

  const isInWishlist = (productId) => {
    return wishlist.some((p) => p.id === productId);
  };

  // Global Search Modal state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  // Global keyboard shortcut (Ctrl+K or Cmd+K) to open search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Mobile Navigation Drawer state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const openMobileMenu = React.useCallback(() => setIsMobileMenuOpen(true), []);
  const closeMobileMenu = React.useCallback(() => setIsMobileMenuOpen(false), []);
  const toggleMobileMenu = React.useCallback(() => setIsMobileMenuOpen((prev) => !prev), []);

  // Modals
  const openCart = React.useCallback(() => setIsCartOpen(true), []);
  const closeCart = React.useCallback(() => setIsCartOpen(false), []);
  const toggleCart = React.useCallback(() => setIsCartOpen((prev) => !prev), []);

  const openConsultModal = () => setIsConsultModalOpen(true);
  const closeConsultModal = () => setIsConsultModalOpen(false);


  const openLightbox = (url, caption) => setActiveLightbox({ url, caption });
  const closeLightbox = () => setActiveLightbox(null);

  const cartTotalCount = cart.length;
  const wishlistCount = wishlist.length;

  // WhatsApp message listing every piece in the inquiry
  const generateWhatsAppInquiryUrl = (notes = '') => {
    if (cart.length === 0) {
      return whatsappUrl('Hello Arisca Light Studio, I would like to know more about your lighting collections and book a consultation.');
    }
    let text = `Hello Arisca Light Studio!\n\nI'd like to discuss these ${cart.length} ${cart.length === 1 ? 'piece' : 'pieces'} and book a consultation:\n\n`;
    cart.forEach(({ product: p }, index) => {
      const details = [p.itemNo && `Item No. ${p.itemNo}`, p.finish, p.wattage && `${p.wattage}W`].filter(Boolean).join(' · ');
      text += `${index + 1}. *${p.title}*${details ? `\n   ${details}` : ''}\n`;
    });
    if (notes.trim()) text += `\n*Site notes:* ${notes.trim()}\n`;
    text += `\nPlease share availability and a convenient time for a studio visit or site visit in Ahmedabad. Thank you!`;
    return whatsappUrl(text);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        addManyToCart,
        cartPulse,
        removeFromCart,
        clearCart,
        toggleWishlist,
        clearWishlist,
        isInWishlist,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        isSearchOpen,
        openSearch,
        closeSearch,
        isConsultModalOpen,
        openConsultModal,
        closeConsultModal,
        isMobileMenuOpen,
        openMobileMenu,
        closeMobileMenu,
        toggleMobileMenu,
        activeLightbox,
        openLightbox,
        closeLightbox,
        cartTotalCount,
        wishlistCount,
        generateWhatsAppInquiryUrl,
        toasts,
        showToast,
        removeToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
