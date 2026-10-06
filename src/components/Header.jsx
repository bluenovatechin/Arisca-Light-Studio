import React, { useEffect, useRef, useState } from 'react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { collectionCategories, coverImage } from '../data/collection';
import {
  Menu,
  X,
  ShoppingBag,
  Heart,
  Phone,
  Search,
  ChevronDown,
  ArrowRight,
  MapPin,
  Home,
  LayoutGrid,
  Lightbulb,
  Images,
  BookOpen,
  ChevronRight,
  Sun,
  Moon
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const LOGO = '/assets/branding/logo-300.webp';

const NAV = [
  { id: 'collection', label: 'Collection', href: '/collection', mega: true },
  { id: 'downlights', label: 'Downlights', href: '/shop' },
  { id: 'catalogs', label: 'Catalogs', href: '/catalogs' },
  { id: 'projects', label: 'Projects', href: '/client-diaries' },
  {
    id: 'services',
    label: 'Services',
    children: [
      { label: 'Home lighting consultancy', desc: 'On-site visit, layout & lux plan', href: '/home-consultancy' },
      { label: 'For architects & designers', desc: 'Trade pricing and samples', href: '/interior-designers' },
      { label: 'Lux calculator', desc: 'How many lights does a room need?', href: '/#lux-calculator' }
    ]
  },
  {
    id: 'studio',
    label: 'Studio',
    children: [
      { label: 'About Arisca', desc: 'The people behind the studio', href: '/about' },
      { label: 'Visit & contact', desc: 'Jagatpur Road, Ahmedabad', href: '/contact' }
    ]
  }
];

function sectionFor(route) {
  if (route.startsWith('/collection')) return 'collection';
  if (route === '/shop' || route.startsWith('/product') || route.startsWith('/lofy-')) return 'downlights';
  if (route.startsWith('/catalog')) return 'catalogs';
  if (route === '/client-diaries') return 'projects';
  if (['/home-consultancy', '/interior-designers'].includes(route)) return 'services';
  if (['/about', '/contact'].includes(route)) return 'studio';
  return '';
}

export default function Header({ currentRoute, routeQuery, onNavigate }) {
  const {
    openCart,
    openSearch,
    cartTotalCount,
    wishlistCount,
    openConsultModal,
    isMobileMenuOpen,
    openMobileMenu,
    closeMobileMenu,
    cartPulse
  } = useCart();
  const { theme, toggleTheme } = useTheme();
  const [openMenu, setOpenMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [pulsing, setPulsing] = useState(false);
  const navRef = useRef(null);
  const hoverTimer = useRef(null);
  const active = sectionFor(currentRoute);

  // Basket icon "catches" each added item
  useEffect(() => {
    if (!cartPulse) return undefined;
    setPulsing(false);
    const raf = requestAnimationFrame(() => setPulsing(true));
    const t = setTimeout(() => setPulsing(false), 700);
    return () => { cancelAnimationFrame(raf); clearTimeout(t); };
  }, [cartPulse]);

  // Phone menu: the main pages, then grouped secondary links
  const MAIN_LINKS = [
    { label: 'Home', icon: Home, href: '/', on: currentRoute === '/' || currentRoute === '/home' },
    { label: 'Collection', icon: LayoutGrid, href: '/collection', on: active === 'collection' },
    { label: 'Downlights', icon: Lightbulb, href: '/shop', on: active === 'downlights' },
    { label: 'Projects', icon: Images, href: '/client-diaries', on: active === 'projects' },
    { label: 'Catalogs', icon: BookOpen, href: '/catalogs', on: active === 'catalogs' }
  ];
  const GROUPS = [
    {
      title: 'Services',
      links: [
        ['Home lighting consultancy', '/home-consultancy'],
        ['For architects & designers', '/interior-designers'],
        ['Lux calculator', '/#lux-calculator']
      ]
    },
    {
      title: 'Studio',
      links: [
        ['About Arisca', '/about'],
        ['Visit & contact', '/contact']
      ]
    }
  ];
  const link = (href) => ({ href, onClick: (e) => { e.preventDefault(); go(href); } });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close everything whenever the route changes
  useEffect(() => {
    setOpenMenu(null);
    closeMobileMenu();
  }, [currentRoute, routeQuery]);

  // Escape + outside click close menus
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpenMenu(null);
        closeMobileMenu();
      }
    };
    const onDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDown);
    };
  }, [closeMobileMenu]);

  // Lock page scroll behind the mobile sheet
  useEffect(() => {
    document.body.classList.toggle('no-scroll', isMobileMenuOpen);
    return () => document.body.classList.remove('no-scroll');
  }, [isMobileMenuOpen]);

  const hoverOpen = (id) => {
    if (!window.matchMedia('(hover: hover)').matches) return;
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setOpenMenu(id), 60);
  };
  const hoverClose = () => {
    if (!window.matchMedia('(hover: hover)').matches) return;
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setOpenMenu(null), 160);
  };

  const go = (href) => {
    setOpenMenu(null);
    closeMobileMenu();
    onNavigate(href);
  };

  return (
    <>
      <div className="topline">
        <div className="container topline-inner">
          <span className="topline-msg">
            <MapPin size={13} aria-hidden="true" /> Experience studio · Jagatpur Road, Ahmedabad · Mon–Sat 10 am – 8:30 pm
          </span>
          <span className="topline-links">
            <a href="tel:+919898086656"><Phone size={13} aria-hidden="true" /> +91 98980 86656</a>
            <a href="https://wa.me/919898086656" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={13} aria-hidden="true" /> WhatsApp
            </a>
          </span>
        </div>
      </div>

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container site-header-inner" ref={navRef}>
          <a href="/" className="brand" aria-label="Arisca Light Studio — home">
            <img src={LOGO} alt="Arisca Light Studio" width={150} height={75} />
          </a>

          <nav className="primary-nav" aria-label="Main">
            <ul>
              {NAV.map((item) => {
                const hasMenu = item.mega || item.children;
                const isOpen = openMenu === item.id;
                return (
                  <li
                    key={item.id}
                    className={`pn-item ${active === item.id ? 'is-active' : ''} ${isOpen ? 'is-open' : ''}`}
                    onMouseEnter={() => hasMenu && hoverOpen(item.id)}
                    onMouseLeave={() => hasMenu && hoverClose()}
                  >
                    {item.href && !item.children ? (
                      <span className="pn-split">
                        <a href={item.href} className="pn-link" aria-current={active === item.id ? 'page' : undefined}>
                          {item.label}
                        </a>
                        {item.mega && (
                          <button
                            type="button"
                            className="pn-caret"
                            aria-expanded={isOpen}
                            aria-label={`${item.label} menu`}
                            onClick={() => setOpenMenu(isOpen ? null : item.id)}
                          >
                            <ChevronDown size={14} />
                          </button>
                        )}
                      </span>
                    ) : (
                      <button
                        type="button"
                        className="pn-link"
                        aria-expanded={isOpen}
                        onClick={() => setOpenMenu(isOpen ? null : item.id)}
                      >
                        {item.label} <ChevronDown size={14} className="pn-chev" />
                      </button>
                    )}

                    {item.mega && isOpen && (
                      <div className="mega" role="region" aria-label="Collection categories">
                        <div className="mega-intro">
                          <p className="eyebrow"><span className="eyebrow-lines" aria-hidden="true" />The Collection</p>
                          <p className="mega-title">Over a thousand designer lights, photographed in the studio and in real rooms.</p>
                          <a href="/collection" className="link-arrow">Browse everything <ArrowRight size={15} /></a>
                        </div>
                        <ul className="mega-grid">
                          {collectionCategories.map((c) => (
                            <li key={c.key}>
                              <a href={`/collection?cat=${c.key}`} className="mega-card">
                                <span className="mega-img">
                                  <img src={coverImage(c.key)} alt="" loading="lazy" width={600} height={800} />
                                  <img src={coverImage(c.key, 'scene')} alt="" loading="lazy" className="mega-img-scene" width={600} height={800} />
                                </span>
                                <span className="mega-label">{c.label}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.children && isOpen && (
                      <div className="dropdown">
                        {item.children.map((c) => (
                          <a key={c.href} href={c.href} className="dropdown-link" onClick={(e) => { e.preventDefault(); go(c.href); }}>
                            <strong>{c.label}</strong>
                            <span>{c.desc}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="header-tools">
            <button
              type="button"
              className="tool-btn theme-toggle-btn desktop-only"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? <Sun size={19} className="theme-toggle-icon sun" /> : <Moon size={19} className="theme-toggle-icon moon" />}
            </button>
            <button type="button" className="tool-search" onClick={openSearch} title="Search (Ctrl + K)">
              <Search size={17} />
              <span>Search</span>
              <kbd>Ctrl K</kbd>
            </button>
            <a href="/wishlist" className="tool-btn desktop-only" aria-label={`Saved lights (${wishlistCount})`}>
              <Heart size={19} />
              {wishlistCount > 0 && <span className="tool-badge">{wishlistCount}</span>}
            </a>
            <button type="button" className={`tool-btn ${pulsing ? 'is-pulsing' : ''}`} onClick={openCart} aria-label={`Your inquiry (${cartTotalCount})`}>
              <ShoppingBag size={19} />
              {cartTotalCount > 0 && <span className="tool-badge" key={cartTotalCount}>{cartTotalCount}</span>}
            </button>
            <button type="button" className="btn-pill btn-pill-solid header-cta" onClick={openConsultModal}>
              Book a visit
            </button>
            <button
              type="button"
              className="tool-btn menu-btn"
              onClick={openMobileMenu}
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <div className={`sheet ${isMobileMenuOpen ? 'is-open' : ''}`} aria-hidden={!isMobileMenuOpen}>
        <div className="sheet-backdrop" onClick={closeMobileMenu} />
        <aside className="sheet-panel" role="dialog" aria-modal="true" aria-label="Menu" inert={!isMobileMenuOpen ? '' : undefined}>
          <div className="sheet-head">
            <img src={LOGO} alt="Arisca Light Studio" width={120} height={60} />
            <button type="button" className="sm-close" onClick={closeMobileMenu} aria-label="Close menu">
              <X size={20} />
            </button>
          </div>

          <div className="sheet-body">
            <button type="button" className="sheet-search" onClick={() => { closeMobileMenu(); openSearch(); }}>
              <Search size={17} /> Search lights, finishes, item no.
            </button>

            <nav aria-label="Main">
              <ul className="sm-main">
                {MAIN_LINKS.map(({ label, icon: Icon, href, on }) => (
                  <li key={label}>
                    <a {...link(href)} className={`sm-main-link ${on ? 'is-active' : ''}`} aria-current={on ? 'page' : undefined}>
                      <span className="sm-main-icon"><Icon size={19} strokeWidth={1.7} /></span>
                      <span className="sm-main-label">{label}</span>
                      <ChevronRight size={17} className="sm-chev" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <p className="sm-label">Shop by category</p>
            <div className="sm-cats">
              {collectionCategories.map((c) => (
                <a key={c.key} {...link(`/collection?cat=${c.key}`)} className="sm-cat">
                  <img src={coverImage(c.key)} alt="" loading="lazy" width={600} height={800} />
                  <span>{c.short}</span>
                </a>
              ))}
            </div>

            <div className="sm-groups">
              {GROUPS.map((g) => (
                <div key={g.title}>
                  <p className="sm-label">{g.title}</p>
                  <ul className="sm-sub">
                    {g.links.map(([label, href]) => (
                      <li key={href}><a {...link(href)}>{label}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="sm-utils">
              <a {...link('/wishlist')} className={`sm-util ${currentRoute === '/wishlist' ? 'is-active' : ''}`}>
                <span className="sm-util-icon"><Heart size={18} />{wishlistCount > 0 && <span className="sm-badge">{wishlistCount}</span>}</span>
                Saved
              </a>
              <button type="button" className="sm-util" onClick={() => { closeMobileMenu(); openCart(); }}>
                <span className="sm-util-icon"><ShoppingBag size={18} />{cartTotalCount > 0 && <span className="sm-badge">{cartTotalCount}</span>}</span>
                Inquiry
              </button>
              <button type="button" className="sm-util" onClick={toggleTheme} aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}>
                <span className="sm-util-icon">{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</span>
                {theme === 'dark' ? 'Light' : 'Dark'}
              </button>
            </div>

            <p className="sm-legal">
              <a {...link('/privacy-policy')}>Privacy</a>
              <span aria-hidden="true">·</span>
              <a {...link('/terms-and-conditions')}>Terms</a>
            </p>
          </div>

          <div className="sheet-foot sm-foot">
            <button type="button" className="btn-pill btn-pill-solid" onClick={() => { closeMobileMenu(); openConsultModal(); }}>
              Book a visit
            </button>
            <a className="sm-wa" href="https://wa.me/919898086656" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
              <WhatsAppIcon size={22} />
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
