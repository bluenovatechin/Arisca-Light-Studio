import React, { useState, useEffect, useCallback } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ConsultationModal from './components/ConsultationModal';
import LightboxModal from './components/LightboxModal';
import GlobalSearchModal from './components/GlobalSearchModal';
import Toast from './components/Toast';

// Pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ClientDiariesPage from './pages/ClientDiariesPage';
import HomeConsultancyPage from './pages/HomeConsultancyPage';
import InteriorDesignersPage from './pages/InteriorDesignersPage';
import CatalogsPage from './pages/CatalogsPage';
import ContactPage from './pages/ContactPage';
import WishlistPage from './pages/WishlistPage';
import CollectionPage from './pages/CollectionPage';
import CollectionItemPage from './pages/CollectionItemPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';
import CookieConsentBanner from './components/CookieConsentBanner';
import { trackPageView } from './utils/analytics';

const isExternal = (href) => /^(https?:|tel:|mailto:)/.test(href);

// The site may be served from a sub-folder (e.g. /Arisca-Light-Studio/ on GitHub
// Pages). Routes inside the app are always written without it.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
const withBase = (path) => (BASE && !path.startsWith(BASE + '/') && path !== BASE ? BASE + path : path);
const stripBase = (path) => (BASE && (path === BASE || path.startsWith(BASE + '/')) ? path.slice(BASE.length) || '/' : path);

function readLocation() {
  // Legacy hash URLs (/#/shop?x=1) become clean paths
  if (window.location.hash.startsWith('#/')) {
    const clean = window.location.hash.slice(1);
    window.history.replaceState({}, '', withBase(clean));
  }
  const path = stripBase(window.location.pathname).replace(/\/+$/, '') || '/';
  return { path, query: window.location.search.replace(/^\?/, '') };
}

function scrollToAnchor(anchor) {
  setTimeout(() => {
    const el = document.getElementById(anchor) || document.querySelector(`[data-section="${anchor}"]`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 80);
}

function AppContent() {
  const [location, setLocation] = useState(readLocation);
  const { path: currentRoute, query: routeQuery } = location;

  useEffect(() => {
    const onPop = () => {
      setLocation(readLocation());
      if (window.location.hash && !window.location.hash.startsWith('#/')) {
        scrollToAnchor(window.location.hash.slice(1));
      }
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  /**
   * navigate('/collection?cat=wall')               push + scroll to top
   * navigate('/#lux-calculator')                   push + scroll to anchor
   * navigate('/collection?cat=wall', { replace: true, scroll: false })   filter updates
   */
  const navigate = useCallback((target, opts = {}) => {
    if (!target) return;
    if (typeof opts === 'string') opts = { anchor: opts };

    if (isExternal(target)) {
      window.open(target, '_blank', 'noopener,noreferrer');
      return;
    }

    let [pathAndQuery, anchor = opts.anchor] = target.split('#');
    let [path, query = ''] = pathAndQuery.split('?');
    path = path || (anchor ? stripBase(window.location.pathname) : '/');
    if (!path.startsWith('/')) path = '/' + path;
    path = stripBase(path).replace(/\/+$/, '') || '/';

    const url = withBase(path) + (query ? `?${query}` : '') + (anchor ? `#${anchor}` : '');
    if (opts.replace) window.history.replaceState({}, '', url);
    else window.history.pushState({}, '', url);
    setLocation({ path, query });

    if (anchor) scrollToAnchor(anchor);
    else if (opts.scroll !== false) window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Let plain <a href="/..."> links inside the app route client-side (keeps
  // middle-click / ctrl-click / "open in new tab" working).
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest('a[href]');
      if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
      const href = a.getAttribute('href');
      if (!href.startsWith('/') || href.startsWith('//') || /\.(pdf|jpe?g|png|webp|mp4)$/i.test(href.split('?')[0])) return;
      e.preventDefault();
      navigate(href);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [navigate]);

  useEffect(() => {
    trackPageView(currentRoute);
  }, [currentRoute]);

  const params = new URLSearchParams(routeQuery);
  const initialCategory = params.get('category') || params.get('cat') || 'all';

  const renderPage = () => {
    const r = currentRoute;
    if (r === '/' || r === '/home') return <HomePage onNavigate={navigate} />;
    if (r === '/collection' || r === '/collections') {
      return <CollectionPage query={routeQuery} onNavigate={navigate} />;
    }
    if (r.startsWith('/collection/')) {
      return <CollectionItemPage id={decodeURIComponent(r.slice('/collection/'.length))} onNavigate={navigate} />;
    }
    if (r === '/shop' || r === '/downlights') {
      return <ShopPage key={routeQuery} initialCategory={initialCategory} query={routeQuery} onNavigate={navigate} />;
    }
    if (r.startsWith('/product/')) return <ProductDetailPage slug={r.replace('/product/', '')} onNavigate={navigate} />;
    if (r === '/about' || r === '/about-2') return <AboutPage onNavigate={navigate} />;
    if (r === '/client-diaries' || r === '/projects') return <ClientDiariesPage onNavigate={navigate} />;
    if (r === '/home-consultancy') return <HomeConsultancyPage onNavigate={navigate} />;
    if (r === '/interior-designers') return <InteriorDesignersPage onNavigate={navigate} />;
    if (r === '/catalogs' || r === '/catalog') return <CatalogsPage onNavigate={navigate} />;
    if (r === '/contact') return <ContactPage onNavigate={navigate} />;
    if (r === '/wishlist') return <WishlistPage onNavigate={navigate} />;
    if (r === '/privacy-policy' || r === '/privacy') return <PrivacyPolicyPage onNavigate={navigate} />;
    if (r === '/terms-and-conditions' || r === '/terms') return <TermsPage onNavigate={navigate} />;
    if (r === '/404') return <NotFoundPage onNavigate={navigate} />;

    // Direct slug fallback (e.g. /lofy-18w-grace-cob-bkrg)
    const cleanSlug = r.replace(/^\//, '');
    if (cleanSlug.startsWith('lofy-')) return <ProductDetailPage slug={cleanSlug} onNavigate={navigate} />;

    return <NotFoundPage onNavigate={navigate} />;
  };

  const { isSearchOpen, closeSearch } = useCart();

  return (
    <div className="arisca-app-root">
      <a href="#main-content" className="skip-link" onClick={(e) => { e.preventDefault(); document.getElementById('main-content')?.focus(); }}>
        Skip to content
      </a>
      <Toast onNavigate={navigate} />
      <Header currentRoute={currentRoute} routeQuery={routeQuery} onNavigate={navigate} />

      <main id="main-content" className="main-viewport" tabIndex={-1}>
        {renderPage()}
      </main>

      <Footer onNavigate={navigate} />
      <CartDrawer onNavigate={navigate} />
      <ConsultationModal />
      <LightboxModal />
      <CookieConsentBanner onNavigate={navigate} />
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={closeSearch}
        onNavigate={navigate}
      />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
