import React, { createContext, useContext, useState, useEffect } from 'react';
import { siteInfo } from '../data/ariscaData';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  // Cart state persisted to localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('arisca_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist state persisted to localStorage
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('arisca_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // UI Modals and Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [activeProductModal, setActiveProductModal] = useState(null);
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

  // Toast notifications helper
  const showToast = (message, type = 'success') => {
    const id = Date.now() + Math.random().toString(36).substr(2, 4);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Cart operations
  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added "${product.title}" (${quantity}x) to your Inquiry Cart.`);
    setIsCartOpen(true);
  };

  const updateQuantity = (productId, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removed from inquiry cart.', 'info');
  };

  const clearCart = () => {
    setCart([]);
    showToast('Inquiry cart cleared.', 'info');
  };

  // Wishlist operations
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        showToast(`Removed "${product.title}" from saved favorites.`, 'info');
        return prev.filter((p) => p.id !== product.id);
      } else {
        showToast(`Saved "${product.title}" to your favorites.`);
        return [...prev, product];
      }
    });
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
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const openConsultModal = () => setIsConsultModalOpen(true);
  const closeConsultModal = () => setIsConsultModalOpen(false);

  const openProductModal = (product) => setActiveProductModal(product);
  const closeProductModal = () => setActiveProductModal(null);

  const openLightbox = (url, caption) => setActiveLightbox({ url, caption });
  const closeLightbox = () => setActiveLightbox(null);

  // Derived counts and pricing totals
  const cartTotalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  // Catalog pieces carry price: null ("price on request") and stay out of the totals
  const isPriced = (p) => typeof p.price === 'number';
  const cartTotalPrice = cart.reduce((acc, item) => acc + (isPriced(item.product) ? item.product.price * item.quantity : 0), 0);
  const cartTotalMrp = cart.reduce((acc, item) => acc + (isPriced(item.product) ? (item.product.mrp || item.product.price) * item.quantity : 0), 0);
  const cartOnRequestCount = cart.filter((item) => !isPriced(item.product)).length;
  const cartSavings = Math.max(0, cartTotalMrp - cartTotalPrice);
  const wishlistCount = wishlist.length;

  // Generate WhatsApp inquiry text for cart items
  const generateWhatsAppInquiryUrl = () => {
    const rawNumber = siteInfo.contact.whatsappNumber || '919898086656';
    if (cart.length === 0) {
      const msg = `Hello Arisca Light Studio, I would like to inquire about your architectural lighting collections and request an in-home consultation.`;
      return `https://wa.me/${rawNumber}?text=${encodeURIComponent(msg)}`;
    }

    let text = `Hello Arisca Light Studio! 🌟\n\nI am requesting a quotation & technical consultation for the following ${cartTotalCount} fixture(s):\n\n`;
    let totalAmt = 0;
    cart.forEach((item, index) => {
      const p = item.product;
      text += `${index + 1}. *${p.title}*\n`;
      if (isPriced(p)) {
        totalAmt += p.price * item.quantity;
        text += `   • Quantity: ${item.quantity} units @ ₹${p.price.toLocaleString('en-IN')}\n`;
      } else {
        text += `   • Quantity: ${item.quantity} · price on request\n`;
      }
      if (p.itemNo) text += `   • Item No: ${p.itemNo}\n`;
      if (p.finish) text += `   • Finish: ${p.finish}\n`;
      if (p.wattage) text += `   • Specs: ${p.wattage}W\n`;
      text += '\n';
    });
    if (totalAmt > 0) text += `*Estimated total for priced items: ₹${totalAmt.toLocaleString('en-IN')}*\n\n`;
    text += `Please confirm stock availability, architect trade discount, and schedule a complimentary laser site measurement for my project in Ahmedabad. Thank you!`;

    return `https://wa.me/${rawNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        toggleWishlist,
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
        activeProductModal,
        openProductModal,
        closeProductModal,
        activeLightbox,
        openLightbox,
        closeLightbox,
        cartTotalCount,
        cartTotalPrice,
        cartTotalMrp,
        cartSavings,
        cartOnRequestCount,
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
