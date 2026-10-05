/**
 * Arisca Light Studio - Interactive Application Engine
 * Powered directly by data.js
 */

import { ariscaData } from './data.js';

class AriscaApp {
  constructor(data) {
    this.data = data;
    this.currentRoute = '/';
    this.slideshowIndex = 0;
    this.slideshowTimer = null;
    this.shopFilter = 'all';
    this.shopSearch = '';
    this.shopSort = 'default';

    this.init();
  }

  init() {
    this.bindGlobalEvents();
    this.handleRoute();
    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('scroll', () => this.handleScroll());
  }

  handleScroll() {
    const header = document.getElementById('site-header');
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  bindGlobalEvents() {
    // Expose router to global scope for HTML event handlers
    window.appRouter = {
      navigate: (path) => {
        window.location.hash = '#' + path;
      },
      toggleMobileMenu: (open) => this.toggleMobileMenu(open),
      openProductModal: (prodId) => this.openProductModal(prodId),
      closeProductModal: () => this.closeProductModal(),
      openLightboxModal: (src, caption) => this.openLightboxModal(src, caption),
      closeLightboxModal: () => this.closeLightboxModal(),
      openConsultModal: () => this.openConsultModal(),
      closeConsultModal: () => this.closeConsultModal(),
      handleConsultSubmit: (e) => this.handleConsultSubmit(e),
      handleContactSubmit: (e) => this.handleContactSubmit(e),
      setShopFilter: (cat) => this.setShopFilter(cat),
      handleShopSearch: (val) => this.handleShopSearch(val),
      handleShopSort: (val) => this.handleShopSort(val),
      selectModalThumb: (url, el) => this.selectModalThumb(url, el)
    };
  }

  toggleMobileMenu(open) {
    const drawer = document.getElementById('mobile-nav-drawer');
    const backdrop = document.getElementById('mobile-nav-backdrop');
    if (open) {
      drawer.classList.add('open');
      backdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    } else {
      drawer.classList.remove('open');
      backdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  handleRoute() {
    const rawHash = window.location.hash.slice(1) || '/';
    const [pathPart, queryPart] = rawHash.split('?');
    this.currentRoute = pathPart;

    // Update active nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      const route = link.getAttribute('data-route');
      if (route === this.currentRoute || (route === '/' && this.currentRoute === '')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    const appContainer = document.getElementById('app');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Clear any running slideshow timer
    if (this.slideshowTimer) {
      clearInterval(this.slideshowTimer);
      this.slideshowTimer = null;
    }

    // Match route
    if (this.currentRoute === '/' || this.currentRoute === '/home' || this.currentRoute === '') {
      this.renderHome(appContainer);
    } else if (this.currentRoute === '/about') {
      this.renderAbout(appContainer);
    } else if (this.currentRoute === '/about-2') {
      this.renderAbout2(appContainer);
    } else if (this.currentRoute === '/shop') {
      this.renderShop(appContainer);
    } else if (this.currentRoute === '/client-diaries') {
      this.renderClientDiaries(appContainer);
    } else if (this.currentRoute === '/home-consultancy') {
      this.renderHomeConsultancy(appContainer);
    } else if (this.currentRoute === '/interior-designers') {
      this.renderInteriorDesigners(appContainer);
    } else if (this.currentRoute === '/catalogs') {
      this.renderCatalogs(appContainer);
    } else if (this.currentRoute === '/contact') {
      this.renderContact(appContainer);
    } else if (this.currentRoute.startsWith('/product/')) {
      const slug = this.currentRoute.replace('/product/', '');
      this.renderProductPage(appContainer, slug);
    } else {
      // Check if slug matches a product directly (e.g. /lofy-7w-futron-flava-cob-white)
      const cleanSlug = this.currentRoute.replace(/^\//, '');
      const prod = this.data.products.find(p => p.slug === cleanSlug);
      if (prod) {
        this.renderProductPage(appContainer, prod.slug);
      } else {
        this.renderHome(appContainer);
      }
    }
  }

  // ==================== PAGE RENDERERS ====================

  renderHome(container) {
    document.title = 'Discover Arisca Light Studio - Premium Lighting';

    const homeData = this.data.pages.home;
    const heroSection = homeData.sections.find(s => s.id === 'ai-NCYeTr');
    const categoriesSection = homeData.sections.find(s => s.id === 'zPWt-n');
    const slideshowSection = homeData.sections.find(s => s.id === 'z4c64D');
    const servicesSection = homeData.sections.find(s => s.id === 'ai-Ahl8LM');

    container.innerHTML = `
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-glow"></div>
        <div class="container hero-content">
          <span class="hero-tag">✨ Premium Architectural Lighting</span>
          <h1 class="hero-title text-gradient">Arisca Light Studio</h1>
          <p class="hero-subtitle">
            Light up your home with our premium lighting solutions. Experience bespoke chandeliers, architectural downlights, and custom residential illumination in Ahmedabad.
          </p>
          <div class="hero-ctas">
            <a href="#/shop" class="btn btn-primary btn-lg">Explore Collection</a>
            <button class="btn btn-secondary btn-lg" onclick="window.appRouter.openConsultModal()">Book Consultation</button>
            <a href="tel:+919898086656" class="btn btn-teal btn-lg">Call Studio</a>
          </div>
        </div>
      </section>

      <!-- Categories Visual Showcase -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">Curated Collections</span>
            <h2>Explore by Category</h2>
            <p>Explore our stunning selection of premium lighting, meticulously crafted to elevate every corner of your interior and exterior spaces.</p>
          </div>

          <div class="categories-grid">
            <div class="category-card" onclick="window.location.hash='#/shop?cat=chandeliers'">
              <img src="/assets/projects/dsc09758-a01hkH3Y9uhcKEc0.JPG" alt="Chandeliers" class="category-bg" loading="lazy">
              <div class="category-overlay"></div>
              <div class="category-content">
                <h3>Chandeliers</h3>
                <p>Statement centerpieces for grand living & dining</p>
                <span class="category-explore">Explore Category &rarr;</span>
              </div>
            </div>

            <div class="category-card" onclick="window.location.hash='#/shop?cat=pendant'">
              <img src="/assets/projects/dsc09738-Zu3m7g53jinktiDJ.JPG" alt="Pendant Lights" class="category-bg" loading="lazy">
              <div class="category-overlay"></div>
              <div class="category-content">
                <h3>Pendant Lights</h3>
                <p>Sculptural suspension lights for islands & foyers</p>
                <span class="category-explore">Explore Category &rarr;</span>
              </div>
            </div>

            <div class="category-card" onclick="window.location.hash='#/shop?cat=cob'">
              <img src="/assets/products/31b92c6c-63fa-4e1e-a22f-d8aad2e48e80.jpg" alt="COB Downlights" class="category-bg" loading="lazy">
              <div class="category-overlay"></div>
              <div class="category-content">
                <h3>COB Downlights</h3>
                <p>Deep anti-glare architectural focus illumination</p>
                <span class="category-explore">Explore Category &rarr;</span>
              </div>
            </div>

            <div class="category-card" onclick="window.location.hash='#/shop?cat=cylinder'">
              <img src="/assets/products/f6b8b1ab-acfb-4d5b-9968-dafb9d120435.jpg" alt="Cylinder Lights" class="category-bg" loading="lazy">
              <div class="category-overlay"></div>
              <div class="category-content">
                <h3>Cylinder Surface Lights</h3>
                <p>Minimalist surface-mounted architectural spotlights</p>
                <span class="category-explore">Explore Category &rarr;</span>
              </div>
            </div>

            <div class="category-card" onclick="window.location.hash='#/shop?cat=panel'">
              <img src="/assets/products/871f7455-12a9-4a39-b9f8-6a5f140977ff.jpg" alt="Panel Lights" class="category-bg" loading="lazy">
              <div class="category-overlay"></div>
              <div class="category-content">
                <h3>LED Panel Lights</h3>
                <p>Ultra-slim uniform ambient illumination</p>
                <span class="category-explore">Explore Category &rarr;</span>
              </div>
            </div>

            <div class="category-card" onclick="window.location.hash='#/shop?cat=outdoor'">
              <img src="/assets/projects/dsc09743-qZwb0UB5B2OImJ70.JPG" alt="Outdoor & Wall Lights" class="category-bg" loading="lazy">
              <div class="category-overlay"></div>
              <div class="category-content">
                <h3>Outdoor & Sconces</h3>
                <p>Weatherproof exterior lighting and luxury wall sconces</p>
                <span class="category-explore">Explore Category &rarr;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Architectural Slideshow -->
      <section class="section section-dark">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">Studio Portfolio</span>
            <h2>Architectural Excellence</h2>
            <p>A glimpse into our bespoke installations, showroom displays, and residential project executions.</p>
          </div>

          <div class="slideshow-wrapper" id="home-slideshow">
            <div class="slides-track" id="slides-track">
              ${(slideshowSection && slideshowSection.slides ? slideshowSection.slides : []).map((slide, idx) => `
                <div class="slide-item ${idx === 0 ? 'active' : ''}" data-index="${idx}">
                  <img src="${slide.url}" alt="Arisca Studio Portfolio Slide ${idx + 1}" loading="lazy">
                  <div class="slide-overlay">
                    <div class="slide-caption">
                      <h3>Bespoke Luxury Illumination</h3>
                      <p style="color: var(--accent-gold-light);">Precision lighting engineered for modern architectural elegance.</p>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>

            <div class="slideshow-controls">
              ${(slideshowSection && slideshowSection.slides ? slideshowSection.slides : []).map((_, idx) => `
                <div class="slide-dot ${idx === 0 ? 'active' : ''}" onclick="window.appRouter.setSlide(${idx})" data-dot="${idx}"></div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Products Showcase -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">Featured Range</span>
            <h2>LOFY Downlights Series</h2>
            <p>Engineered for high luminous efficacy, anti-glare visual comfort, and sophisticated dual-tone finishes.</p>
          </div>

          <div class="products-grid">
            ${this.data.products.slice(0, 8).map(prod => this.renderProductCardHtml(prod)).join('')}
          </div>

          <div style="text-align: center; margin-top: 3.5rem;">
            <a href="#/shop" class="btn btn-primary btn-lg">View All 14 Products</a>
          </div>
        </div>
      </section>

      <!-- 3-Pillar Value Proposition -->
      <section class="section section-dark">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">Our Complete Process</span>
            <h2>From Blueprint to Illumination</h2>
            <p>We deliver an end-to-end lighting journey designed to transform spaces with technical precision.</p>
          </div>

          <div class="features-grid">
            <div class="feature-box">
              <div class="feature-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3>1. Expert Design Consultation</h3>
              <p>Our experienced lighting consultants collaborate with you and your architects to define the perfect lumen balance, color temperatures (2700K–4000K), and mood zones.</p>
            </div>

            <div class="feature-box">
              <div class="feature-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <h3>2. Precise Site Measurement</h3>
              <p>We perform meticulous laser measurements on site to verify ceiling cutouts, driver recesses, beam angles, and structural anchor points before ordering.</p>
            </div>

            <div class="feature-box">
              <div class="feature-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <h3>3. Professional Installation</h3>
              <p>Our certified installation technicians handle every fixture with surgical care—ensuring safe wiring, flawless leveling, and post-installation light level testing.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Consultation CTA Banner -->
      <section class="section">
        <div class="container">
          <div class="consultation-cta-card">
            <h2>Get in touch for a consultation</h2>
            <p>Ready to bring exquisite lighting into your home or commercial project? Talk directly with our senior lighting specialists today.</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
              <a href="tel:+919898086656" class="btn btn-primary btn-lg">Call Now: +91 98980 86656</a>
              <button class="btn btn-secondary btn-lg" onclick="window.appRouter.openConsultModal()">Book Online Appointment</button>
            </div>
          </div>
        </div>
      </section>
    `;

    // Initialize slideshow autoplay
    this.startSlideshow();
  }

  startSlideshow() {
    const slides = document.querySelectorAll('.slide-item');
    const dots = document.querySelectorAll('.slide-dot');
    if (!slides.length) return;

    window.appRouter.setSlide = (idx) => {
      this.slideshowIndex = idx;
      slides.forEach((s, i) => s.classList.toggle('active', i === idx));
      dots.forEach((d, i) => d.classList.toggle('active', i === idx));
    };

    this.slideshowTimer = setInterval(() => {
      this.slideshowIndex = (this.slideshowIndex + 1) % slides.length;
      window.appRouter.setSlide(this.slideshowIndex);
    }, 4500);
  }

  renderAbout(container) {
    document.title = 'About Us | Arisca Light Studio';

    container.innerHTML = `
      <section class="section" style="padding-top: 4rem;">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">Our Heritage & Passion</span>
            <h1>Illuminating Spaces, Inspiring Lives</h1>
            <p>At Arisca Light Studio, lighting is more than functionality—it is the soul of architecture and atmospheric living.</p>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3.5rem; align-items: center; margin-bottom: 5rem;">
            <div>
              <h2 style="font-size: 2.2rem; margin-bottom: 1.5rem; line-height: 1.3;">Crafting Atmospheric Elegance in Ahmedabad</h2>
              <p style="font-size: 1.05rem; line-height: 1.8; margin-bottom: 1.25rem;">
                Arisca Light Studio was founded with a singular conviction: that extraordinary lighting fundamentally shapes how people feel, interact, and thrive within their spaces.
              </p>
              <p style="font-size: 1.05rem; line-height: 1.8; margin-bottom: 1.25rem;">
                Located at Money Plant High Street on Jagatpur Road, our studio serves as an inspirational playground for homeowners, architects, and luxury interior designers. We specialize in curating world-class chandeliers, architectural recessed COB spotlights, weatherproof garden illumination, and bespoke decorative fixtures.
              </p>
              <div style="margin-top: 2rem; display: flex; gap: 1rem;">
                <a href="#/shop" class="btn btn-primary">Browse Collection</a>
                <a href="#/about-2" class="btn btn-secondary">Read Design Philosophy</a>
              </div>
            </div>

            <div style="border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-lg); border: 1px solid var(--border-subtle);">
              <img src="/assets/projects/dsc09758-a01hkH3Y9uhcKEc0.JPG" alt="Arisca Studio Interior" style="width: 100%; height: auto;">
            </div>
          </div>

          <!-- Studio Core Pillars -->
          <div class="features-grid" style="margin-bottom: 5rem;">
            <div class="feature-box">
              <h3 class="text-gold">Precision Engineering</h3>
              <p>Every fixture in our collection—such as the LOFY COB series—features aerospace-grade die-cast aluminum heat sinks, premium COB LED chips, and high CRI (>90) for authentic color rendering.</p>
            </div>
            <div class="feature-box">
              <h3 class="text-gold">Curatorial Excellence</h3>
              <p>We work directly with visionary lighting manufacturers to bring unique finishes—copper, rose gold, brushed bronze, and matte obsidian—that harmonize with modern interior palettes.</p>
            </div>
            <div class="feature-box">
              <h3 class="text-gold">Comprehensive Service</h3>
              <p>From the initial design consultation to precise laser site measurement and turnkey on-site installation, our dedicated team guarantees complete peace of mind.</p>
            </div>
          </div>

          <!-- Studio Visit Card -->
          <div class="consultation-cta-card">
            <h2>Experience Our Studio in Ahmedabad</h2>
            <p>Visit our showroom at B - 103, Money Plant High Street, Jagatpur Road, to explore live luminaire displays and test lighting beam angles in person.</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
              <a href="#/contact" class="btn btn-primary btn-lg">Get Studio Directions</a>
              <a href="tel:+919898086656" class="btn btn-secondary btn-lg">Call Ahead: +91 98980 86656</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderAbout2(container) {
    document.title = 'Design Philosophy | Arisca Light Studio';

    container.innerHTML = `
      <section class="section" style="padding-top: 4rem;">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">Extended Curatorial Notes</span>
            <h1>Lighting as an Art Form</h1>
            <p>Discover our philosophy on balanced illumination, optical comfort, and architectural harmony.</p>
          </div>

          <div style="max-width: 800px; margin: 0 auto; background: var(--bg-card); padding: 3rem; border-radius: var(--radius-lg); border: 1px solid var(--border-subtle); line-height: 1.9; font-size: 1.05rem;">
            <h3 style="margin-bottom: 1rem; color: var(--accent-gold);">The Geometry of Illumination</h3>
            <p>
              At Arisca Light Studio, we believe that proper lighting design balances three distinct layers: <strong>ambient illumination</strong> for gentle general warmth, <strong>task lighting</strong> for focused productivity, and <strong>accent lighting</strong> to sculpt art and architectural textures.
            </p>
            <p>
              When these layers are tuned in harmony, a room ceases to be a static space and becomes a dynamic living canvas that adapts gracefully from bright daylight productivity to intimate evening relaxation.
            </p>

            <h3 style="margin-top: 2rem; margin-bottom: 1rem; color: var(--accent-gold);">Why Architectural Downlights Matter</h3>
            <p>
              Traditional surface lights scatter glare directly into the eyes. Our deep-set recessed LOFY downlights utilize deep reflector cones and optical honeycomb louvers that conceal the light source while casting an immaculate pool of warm, glare-free light below.
            </p>

            <div style="margin-top: 3rem; text-align: center;">
              <a href="#/shop" class="btn btn-primary">Browse LOFY Downlights</a>
              <a href="#/home-consultancy" class="btn btn-secondary" style="margin-left: 1rem;">Book Design Session</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderShop(container) {
    document.title = 'Shop Lighting Collection | Arisca Light Studio';

    container.innerHTML = `
      <section class="section" style="padding-top: 4rem;">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">Architectural Luminaire Catalog</span>
            <h1>The Lighting Collection</h1>
            <p>Explore our complete catalog of high-performance architectural recessed COB spotlights, surface cylinders, and slim panel fixtures.</p>
          </div>

          <!-- Shop Filters and Search Bar -->
          <div style="background: var(--bg-card); padding: 1.5rem 2rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); margin-bottom: 2.5rem; display: flex; flex-wrap: wrap; gap: 1.25rem; align-items: center; justify-content: space-between;">
            <!-- Category Tabs -->
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;" id="shop-category-tabs">
              <button class="btn btn-sm ${this.shopFilter === 'all' ? 'btn-primary' : 'btn-secondary'}" onclick="window.appRouter.setShopFilter('all')">All Products (14)</button>
              <button class="btn btn-sm ${this.shopFilter === 'cob' ? 'btn-primary' : 'btn-secondary'}" onclick="window.appRouter.setShopFilter('cob')">COB Spotlights (8)</button>
              <button class="btn btn-sm ${this.shopFilter === 'panel' ? 'btn-primary' : 'btn-secondary'}" onclick="window.appRouter.setShopFilter('panel')">Panel Lights (4)</button>
              <button class="btn btn-sm ${this.shopFilter === 'cylinder' ? 'btn-primary' : 'btn-secondary'}" onclick="window.appRouter.setShopFilter('cylinder')">Cylinders & Surface (2)</button>
            </div>

            <!-- Search & Sort -->
            <div style="display: flex; gap: 1rem; align-items: center; flex-grow: 1; max-width: 450px;">
              <div style="position: relative; width: 100%;">
                <input type="text" id="shop-search-input" class="form-input" placeholder="Search by name, wattage (e.g. 7W, 18W)..." value="${this.shopSearch}" oninput="window.appRouter.handleShopSearch(this.value)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2" style="position: absolute; right: 12px; top: 50%; transform: translateY(-50%); pointer-events: none;">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>

              <select class="form-input" style="width: 170px; background: #1e2638;" onchange="window.appRouter.handleShopSort(this.value)">
                <option value="default">Sort: Default</option>
                <option value="name_asc">Name: A to Z</option>
                <option value="wattage_asc">Wattage: Low to High</option>
                <option value="wattage_desc">Wattage: High to Low</option>
              </select>
            </div>
          </div>

          <!-- Product Grid Container -->
          <div id="shop-products-container" class="products-grid">
            <!-- Dynamically populated -->
          </div>
        </div>
      </section>
    `;

    this.renderShopProducts();
  }

  setShopFilter(cat) {
    this.shopFilter = cat;
    // Update active tab buttons
    document.querySelectorAll('#shop-category-tabs button').forEach(btn => {
      btn.className = 'btn btn-sm btn-secondary';
    });
    event.target.className = 'btn btn-sm btn-primary';
    this.renderShopProducts();
  }

  handleShopSearch(val) {
    this.shopSearch = val.toLowerCase().trim();
    this.renderShopProducts();
  }

  handleShopSort(val) {
    this.shopSort = val;
    this.renderShopProducts();
  }

  getFilteredProducts() {
    let prods = [...this.data.products];

    // Filter by Category
    if (this.shopFilter === 'cob') {
      prods = prods.filter(p => p.title.toLowerCase().includes('cob'));
    } else if (this.shopFilter === 'panel') {
      prods = prods.filter(p => p.title.toLowerCase().includes('panel') || p.title.toLowerCase().includes('ssk') || p.title.toLowerCase().includes('round p') || p.title.toLowerCase().includes('square p'));
    } else if (this.shopFilter === 'cylinder') {
      prods = prods.filter(p => p.title.toLowerCase().includes('cylinder') || p.title.toLowerCase().includes('deep p'));
    }

    // Filter by Search Query
    if (this.shopSearch) {
      prods = prods.filter(p => 
        p.title.toLowerCase().includes(this.shopSearch) ||
        p.subtitle.toLowerCase().includes(this.shopSearch) ||
        p.descriptionText.toLowerCase().includes(this.shopSearch) ||
        p.slug.toLowerCase().includes(this.shopSearch)
      );
    }

    // Sort
    if (this.shopSort === 'name_asc') {
      prods.sort((a, b) => a.title.localeCompare(b.title));
    } else if (this.shopSort === 'wattage_asc') {
      const getW = (t) => { const m = t.match(/(\d+)W/i); return m ? parseInt(m[1]) : 0; };
      prods.sort((a, b) => getW(a.title) - getW(b.title));
    } else if (this.shopSort === 'wattage_desc') {
      const getW = (t) => { const m = t.match(/(\d+)W/i); return m ? parseInt(m[1]) : 0; };
      prods.sort((a, b) => getW(b.title) - getW(a.title));
    }

    return prods;
  }

  renderShopProducts() {
    const container = document.getElementById('shop-products-container');
    if (!container) return;

    const prods = this.getFilteredProducts();

    if (prods.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; background: var(--bg-card); border-radius: var(--radius-md);">
          <h3>No matching luminaires found</h3>
          <p style="margin-top: 0.5rem;">Try modifying your keyword search or category filter.</p>
          <button class="btn btn-primary" onclick="window.appRouter.setShopFilter('all')" style="margin-top: 1rem;">Reset Filters</button>
        </div>
      `;
      return;
    }

    container.innerHTML = prods.map(prod => this.renderProductCardHtml(prod)).join('');
  }

  renderProductCardHtml(prod) {
    const isNew = prod.ribbon && prod.ribbon.toLowerCase().includes('new');
    const isBestseller = prod.ribbon && prod.ribbon.toLowerCase().includes('seller');

    return `
      <article class="product-card" id="card-${prod.id}">
        ${prod.ribbon ? `<span class="product-ribbon ${isNew ? 'new' : ''}">${prod.ribbon}</span>` : ''}
        <div class="product-thumb-wrapper" onclick="window.appRouter.openProductModal('${prod.id}')" style="cursor: pointer;">
          <img src="${prod.thumbnail}" alt="${prod.title}" class="product-thumb" loading="lazy">
        </div>
        <div class="product-details">
          <h3 class="product-title" onclick="window.appRouter.openProductModal('${prod.id}')" style="cursor: pointer;">${prod.title}</h3>
          ${prod.subtitle ? `<div class="product-subtitle">${prod.subtitle}</div>` : ''}
          <p class="product-desc">${prod.descriptionText}</p>
          
          <div style="margin-bottom: 1.25rem; display: flex; align-items: center; justify-content: space-between;">
            <span style="font-weight: 700; color: var(--accent-gold); font-size: 0.95rem;">Price on Request</span>
            <span style="font-size: 0.8rem; color: var(--accent-teal);">● In Stock</span>
          </div>

          <div class="product-actions">
            <button class="btn btn-secondary btn-sm" onclick="window.appRouter.openProductModal('${prod.id}')">Quick View</button>
            <a href="https://wa.me/9898086656?text=${encodeURIComponent('Hello Arisca Light Studio, I am interested in inquiring about: ' + prod.title)}" 
               target="_blank" 
               rel="noopener" 
               class="btn btn-teal btn-sm"
               title="Inquire via WhatsApp">
              Inquire
            </a>
          </div>
        </div>
      </article>
    `;
  }

  renderProductPage(container, slug) {
    const prod = this.data.products.find(p => p.slug === slug);
    if (!prod) {
      this.renderShop(container);
      return;
    }

    document.title = `${prod.title} | Arisca Light Studio`;

    container.innerHTML = `
      <section class="section" style="padding-top: 4rem;">
        <div class="container">
          <nav aria-label="Breadcrumbs" style="margin-bottom: 2rem; font-size: 0.9rem; color: var(--text-muted);">
            <a href="#/" style="color: var(--accent-gold);">Home</a> &gt; 
            <a href="#/shop" style="color: var(--accent-gold);">Shop</a> &gt; 
            <span>${prod.title}</span>
          </nav>

          <div class="product-modal-grid" style="background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-subtle); padding: 3rem;">
            <!-- Gallery Section -->
            <div class="product-gallery-view">
              <div class="modal-main-img-wrap" style="aspect-ratio: 1; max-height: 480px;">
                <img id="detail-main-img" src="${prod.images[0].url}" alt="${prod.title}" class="modal-main-img">
              </div>
              <div class="modal-thumbs-row">
                ${prod.images.map((img, idx) => `
                  <img src="${img.url}" 
                       alt="Thumbnail ${idx + 1}" 
                       class="modal-thumb ${idx === 0 ? 'active' : ''}" 
                       onclick="document.getElementById('detail-main-img').src='${img.url}'; document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active')); this.classList.add('active');">
                `).join('')}
              </div>
            </div>

            <!-- Specs & Inquiry -->
            <div>
              ${prod.ribbon ? `<span class="section-badge" style="margin-bottom: 0.5rem;">${prod.ribbon}</span>` : ''}
              <h1 style="font-size: 2.2rem; margin-bottom: 0.5rem;">${prod.title}</h1>
              ${prod.subtitle ? `<h3 style="color: var(--accent-gold); font-size: 1.1rem; font-weight: 500; margin-bottom: 1.5rem;">${prod.subtitle}</h3>` : ''}
              
              <div style="background: rgba(255, 255, 255, 0.04); border-left: 3px solid var(--accent-gold); padding: 1rem 1.5rem; margin-bottom: 2rem;">
                <span style="font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em;">Pricing Policy</span>
                <p style="font-size: 1.1rem; font-weight: 700; color: #ffffff; margin-bottom: 0;">Price Available on Request / Consultation</p>
                <small style="color: var(--text-secondary);">Includes expert site measurement, layout consultation, and professional installation options.</small>
              </div>

              <div style="margin-bottom: 2rem; line-height: 1.8; color: var(--text-secondary);">
                ${prod.descriptionHtml}
              </div>

              <!-- Technical Highlights -->
              <div style="background: var(--bg-secondary); border-radius: var(--radius-md); padding: 1.5rem; margin-bottom: 2.5rem; border: 1px solid var(--border-subtle);">
                <h4 style="margin-bottom: 1rem; color: #ffffff;">Luminaire Specifications</h4>
                <ul style="list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; font-size: 0.9rem;">
                  <li><strong>Brand:</strong> LOFY Architectural</li>
                  <li><strong>LED Chip:</strong> High-Efficacy COB</li>
                  <li><strong>Finish:</strong> Dual-Tone / Anodized</li>
                  <li><strong>CRI Rating:</strong> >90 Ra</li>
                  <li><strong>Application:</strong> Residential / Office / Retail</li>
                  <li><strong>Warranty:</strong> Studio Manufacturer Warranty</li>
                </ul>
              </div>

              <!-- Action CTAs -->
              <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <a href="https://wa.me/9898086656?text=${encodeURIComponent('Hello Arisca Light Studio, I am requesting quotation and design consultation for: ' + prod.title)}" 
                   target="_blank" 
                   rel="noopener" 
                   class="btn btn-teal btn-lg" 
                   style="flex: 1;">
                  WhatsApp Inquiry
                </a>
                <button class="btn btn-primary btn-lg" onclick="window.appRouter.openConsultModal()" style="flex: 1;">
                  Book Site Measurement
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderClientDiaries(container) {
    document.title = 'Client Diaries | Arisca Light Studio';

    const clientPage = this.data.pages['client-diaries'];
    const gallerySection = clientPage.sections.find(s => s.gallery && s.gallery.length > 0);
    const photos = gallerySection ? gallerySection.gallery : [];

    container.innerHTML = `
      <section class="section" style="padding-top: 4rem;">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">Real Project Showcase</span>
            <h1>Client Diaries</h1>
            <p>Take a look at our completed client lighting projects. From luxury residential living rooms and high-ceiling foyers to commercial architectural spotlights.</p>
          </div>

          <div class="client-gallery-grid">
            ${photos.map((item, idx) => `
              <div class="gallery-card" onclick="window.appRouter.openLightboxModal('${item.url}', 'Client Installation ${idx + 1}')">
                <img src="${item.url}" alt="Client Installation Project ${idx + 1}" loading="lazy">
                <div class="gallery-overlay">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="consultation-cta-card" style="margin-top: 5rem;">
            <h2>Want Your Home Featured in Our Diaries?</h2>
            <p>Let our lighting designers craft an atmospheric sanctuary for your villa, apartment, or commercial space.</p>
            <button class="btn btn-primary btn-lg" onclick="window.appRouter.openConsultModal()">Book Lighting Consultation</button>
          </div>
        </div>
      </section>
    `;
  }

  renderHomeConsultancy(container) {
    document.title = 'Home Consultancy Services | Arisca Light Studio';

    container.innerHTML = `
      <section class="section" style="padding-top: 4rem;">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">Bespoke Architectural Services</span>
            <h1>Home Consultancy</h1>
            <p>Step-by-step personalized lighting design to transform the ambiance, energy efficiency, and luxury feel of your home.</p>
          </div>

          <!-- Process Timeline -->
          <div style="display: flex; flex-direction: column; gap: 3.5rem; margin-bottom: 5rem;">
            <!-- Step 1 -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; background: var(--bg-card); padding: 3rem; border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
              <div>
                <span class="section-badge">Phase 01</span>
                <h3 style="font-size: 1.8rem; margin: 0.5rem 0 1rem 0;">Initial Design & Lifestyle Consultation</h3>
                <p>We review your architectural blueprints or visit your property to understand ceiling elevations, furniture placement, natural sunlight exposure, and your family's lifestyle habits.</p>
                <p>We define primary lighting moods—warm relaxing tones (2700K–3000K) for lounges and bedrooms, versus crisp neutral illumination (4000K) for culinary and work zones.</p>
              </div>
              <div style="border-radius: var(--radius-md); overflow: hidden;">
                <img src="/assets/projects/dsc09758-a01hkH3Y9uhcKEc0.JPG" alt="Consultation Step 1" style="width: 100%;">
              </div>
            </div>

            <!-- Step 2 -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; background: var(--bg-card); padding: 3rem; border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
              <div style="border-radius: var(--radius-md); overflow: hidden; order: 2;">
                <img src="/assets/projects/dsc09738-Zu3m7g53jinktiDJ.JPG" alt="Site Measurement Step 2" style="width: 100%;">
              </div>
              <div style="order: 1;">
                <span class="section-badge">Phase 02</span>
                <h3 style="font-size: 1.8rem; margin: 0.5rem 0 1rem 0;">Laser Site Measurement & Layout Mapping</h3>
                <p>No guesswork. Our engineers take millimeter-accurate laser measurements to determine ceiling cutout positions, beam dispersion angles, and transformer driver placement to prevent hotspots or shadows.</p>
                <p>We supply your electrical contractors with detailed lighting wiring schemes for seamless pre-wiring.</p>
              </div>
            </div>

            <!-- Step 3 -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; background: var(--bg-card); padding: 3rem; border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
              <div>
                <span class="section-badge">Phase 03</span>
                <h3 style="font-size: 1.8rem; margin: 0.5rem 0 1rem 0;">White-Glove Professional Installation</h3>
                <p>Our dedicated certified installation team arrives with specialized tools to mount, calibrate, and wire your chandeliers, wall sconces, and recessed downlights with surgical care.</p>
                <p>We test every switch leg, dimming module, and beam angle, leaving your home spotless and illuminated to perfection.</p>
              </div>
              <div style="border-radius: var(--radius-md); overflow: hidden;">
                <img src="/assets/projects/dsc09743-qZwb0UB5B2OImJ70.JPG" alt="Installation Step 3" style="width: 100%;">
              </div>
            </div>
          </div>

          <!-- Booking Call to action -->
          <div class="consultation-cta-card">
            <h2>Book Your Free Home Consultation</h2>
            <p>Our specialists are available for on-site visits across Ahmedabad and virtual blueprint reviews across Gujarat.</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
              <button class="btn btn-primary btn-lg" onclick="window.appRouter.openConsultModal()">Book Consultation</button>
              <a href="https://wa.me/9898086656" class="btn btn-teal btn-lg" target="_blank" rel="noopener">WhatsApp Direct</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderInteriorDesigners(container) {
    document.title = 'Interior Designers Collaboration | Arisca Light Studio';

    container.innerHTML = `
      <section class="section" style="padding-top: 4rem;">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">Trade & Designer Portal</span>
            <h1>Empowering Interior Architects & Designers</h1>
            <p>Partner with Arisca Light Studio to unlock trade benefits, bespoke fixture manufacturing, photometric data, and turnkey installation support for your projects.</p>
          </div>

          <!-- Trade Perks Grid -->
          <div class="features-grid" style="margin-bottom: 5rem;">
            <div class="feature-box">
              <div class="feature-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3>Exclusive Trade Pricing</h3>
              <p>Generous trade margins, tiered volume incentives, and transparent cost estimates for your residential and commercial clients.</p>
            </div>

            <div class="feature-box">
              <div class="feature-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                </svg>
              </div>
              <h3>Physical Sample Box</h3>
              <p>Borrow fixture samples, color rings (Black, Rose Gold, Brass, Copper), and optical louver swatches for your client moodboards.</p>
            </div>

            <div class="feature-box">
              <div class="feature-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7.5" r="4"></circle>
                  <polyline points="17 11 19 13 23 9"></polyline>
                </svg>
              </div>
              <h3>Dedicated Project Manager</h3>
              <p>A single point of technical contact to handle scheduling, laser site visits, delivery synchronization, and post-sales support.</p>
            </div>
          </div>

          <!-- Trade Registration Form -->
          <div class="contact-form-card" style="max-width: 720px; margin: 0 auto;">
            <div style="text-align: center; margin-bottom: 2rem;">
              <h2>Register as a Trade Partner</h2>
              <p>Fill out the form below to receive our digital Trade Catalog & schedule a showroom orientation.</p>
            </div>

            <form id="trade-form" onsubmit="window.appRouter.handleTradeSubmit(event)">
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label" for="t-name">Designer / Architect Name *</label>
                  <input type="text" id="t-name" class="form-input" placeholder="Your name" required>
                </div>
                <div class="form-group">
                  <label class="form-label" for="t-studio">Design Studio / Firm Name *</label>
                  <input type="text" id="t-studio" class="form-input" placeholder="Studio name" required>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label" for="t-email">Work Email *</label>
                  <input type="email" id="t-email" class="form-input" placeholder="designer@studio.com" required>
                </div>
                <div class="form-group">
                  <label class="form-label" for="t-phone">Phone / WhatsApp *</label>
                  <input type="tel" id="t-phone" class="form-input" placeholder="+91 XXXXX XXXXX" required>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="t-portfolio">Portfolio / Instagram Link</label>
                <input type="url" id="t-portfolio" class="form-input" placeholder="https://instagram.com/yourstudio">
              </div>

              <div class="form-group">
                <label class="form-label" for="t-message">Current Project Needs</label>
                <textarea id="t-message" class="form-textarea" placeholder="Tell us about your upcoming residential villas or commercial projects..."></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
                Submit Partnership Application
              </button>
            </form>
          </div>
        </div>
      </section>
    `;
  }

  renderCatalogs(container) {
    document.title = 'Digital Lighting Catalogs | Arisca Light Studio';

    const catalogs = this.data.siteInfo.catalogDownloads;

    container.innerHTML = `
      <section class="section" style="padding-top: 4rem;">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">Downloads & Lookbooks</span>
            <h1>Digital Lighting Catalogs</h1>
            <p>Download our verified Google Drive high-resolution PDF catalogs to browse our complete collection of architectural luminaires, chandeliers, and decorative lighting.</p>
          </div>

          <div class="catalogs-grid">
            ${catalogs.map((cat, idx) => `
              <div class="catalog-card">
                <div class="catalog-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <h3>${cat.title}</h3>
                <p>Complete product dimensions, wattage options, and photometric diagrams.</p>
                <a href="${cat.url}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm" style="width: 100%;">
                  Open PDF Catalog &rarr;
                </a>
              </div>
            `).join('')}
          </div>

          <div class="consultation-cta-card" style="margin-top: 5rem;">
            <h2>Need a Custom Physical Lookbook?</h2>
            <p>Visit our showroom in Ahmedabad or reach out to have our product specification binder delivered directly to your architectural office.</p>
            <a href="tel:+919898086656" class="btn btn-primary btn-lg">Call Studio: +91 98980 86656</a>
          </div>
        </div>
      </section>
    `;
  }

  renderContact(container) {
    document.title = 'Contact Us | Arisca Light Studio';

    const info = this.data.siteInfo;

    container.innerHTML = `
      <section class="section" style="padding-top: 4rem;">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">Get in Touch</span>
            <h1>Let’s Connect — Your Lighting Journey Starts Here</h1>
            <p>Our team is ready to guide you in finding the perfect luminaires for your home or project.</p>
          </div>

          <div class="contact-grid">
            <!-- Studio Info Panel -->
            <div class="contact-info-panel">
              <div class="contact-card">
                <h3 style="font-size: 1.3rem; margin-bottom: 1.5rem; color: #ffffff;">Studio Information</h3>

                <div class="info-item">
                  <div class="info-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div class="info-content">
                    <h4>Telephone & WhatsApp</h4>
                    <p><a href="tel:+919898086656">+91 98980 86656</a></p>
                    <p><a href="https://wa.me/9898086656" target="_blank" rel="noopener" style="color: var(--accent-teal);">Chat with us on WhatsApp &rarr;</a></p>
                  </div>
                </div>

                <div class="info-item">
                  <div class="info-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div class="info-content">
                    <h4>Email Address</h4>
                    <p><a href="mailto:info@ariscalightstudio.com">info@ariscalightstudio.com</a></p>
                  </div>
                </div>

                <div class="info-item">
                  <div class="info-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div class="info-content">
                    <h4>Studio Address</h4>
                    <p>B - 103, Money Plant High Street,<br>Jagatpur Road, Ahmedabad, Gujarat, India</p>
                  </div>
                </div>

                <div class="info-item">
                  <div class="info-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div class="info-content">
                    <h4>Opening Hours</h4>
                    <p>Monday – Saturday: 10:00 am – 8:30 pm</p>
                    <p style="color: var(--text-muted);">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <!-- Map Embed -->
              <div class="map-frame-wrapper">
                <iframe src="${info.contact.map.embedSrc}" title="Arisca Light Studio Google Map" allowfullscreen="" loading="lazy"></iframe>
              </div>
            </div>

            <!-- Contact Form -->
            <div class="contact-form-card">
              <h3 style="font-size: 1.6rem; margin-bottom: 0.5rem; color: #ffffff;">Send Us a Message</h3>
              <p style="margin-bottom: 2rem;">Have a question about our downlights, chandeliers, or need a quote? Leave your message below.</p>

              <form id="main-contact-form" onsubmit="window.appRouter.handleContactSubmit(event)">
                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label" for="cf-first-name">First Name *</label>
                    <input type="text" id="cf-first-name" class="form-input" placeholder="Your name" required>
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="cf-last-name">Last Name</label>
                    <input type="text" id="cf-last-name" class="form-input" placeholder="Your last name">
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label" for="cf-email">Email Address *</label>
                  <input type="email" id="cf-email" class="form-input" placeholder="Your email address" required>
                </div>

                <div class="form-group">
                  <label class="form-label" for="cf-phone">Phone Number</label>
                  <input type="tel" id="cf-phone" class="form-input" placeholder="+91 XXXXX XXXXX">
                </div>

                <div class="form-group">
                  <label class="form-label" for="cf-message">Message *</label>
                  <textarea id="cf-message" class="form-textarea" placeholder="Enter your message..." required></textarea>
                </div>

                <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  // ==================== MODALS & INTERACTIONS ====================

  openProductModal(prodId) {
    const prod = this.data.products.find(p => p.id === prodId);
    if (!prod) return;

    const modal = document.getElementById('product-modal');
    const body = document.getElementById('modal-product-body');

    body.innerHTML = `
      <div class="product-gallery-view">
        <div class="modal-main-img-wrap">
          <img id="modal-main-img" src="${prod.images[0].url}" alt="${prod.title}" class="modal-main-img">
        </div>
        <div class="modal-thumbs-row">
          ${prod.images.map((img, idx) => `
            <img src="${img.url}" 
                 alt="Thumb ${idx + 1}" 
                 class="modal-thumb ${idx === 0 ? 'active' : ''}" 
                 onclick="window.appRouter.selectModalThumb('${img.url}', this)">
          `).join('')}
        </div>
      </div>

      <div>
        ${prod.ribbon ? `<span class="section-badge" style="margin-bottom: 0.5rem;">${prod.ribbon}</span>` : ''}
        <h2 id="modal-product-title" style="font-size: 1.8rem; margin-bottom: 0.5rem;">${prod.title}</h2>
        ${prod.subtitle ? `<p style="color: var(--accent-gold); font-size: 1rem; font-weight: 500; margin-bottom: 1.25rem;">${prod.subtitle}</p>` : ''}
        
        <div style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem;">
          ${prod.descriptionHtml}
        </div>

        <div style="background: rgba(255, 255, 255, 0.05); border-radius: var(--radius-sm); padding: 1rem 1.25rem; margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">PRICE</div>
            <div style="font-weight: 700; color: #ffffff; font-size: 1.1rem;">Price on Request</div>
          </div>
          <span style="font-size: 0.85rem; color: var(--accent-teal); font-weight: 600;">● Available in Stock</span>
        </div>

        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <a href="https://wa.me/9898086656?text=${encodeURIComponent('Hello Arisca Light Studio, I am requesting quotation for: ' + prod.title)}" 
             target="_blank" 
             rel="noopener" 
             class="btn btn-teal" 
             style="flex: 1;">
            Inquire on WhatsApp
          </a>
          <a href="#/product/${prod.slug}" class="btn btn-secondary" onclick="window.appRouter.closeProductModal()">
            Full Page View &rarr;
          </a>
        </div>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  selectModalThumb(url, el) {
    document.getElementById('modal-main-img').src = url;
    document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
  }

  closeProductModal() {
    const modal = document.getElementById('product-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  openLightboxModal(src, caption) {
    const modal = document.getElementById('lightbox-modal');
    document.getElementById('lightbox-image').src = src;
    document.getElementById('lightbox-caption').innerText = caption;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeLightboxModal() {
    const modal = document.getElementById('lightbox-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  openConsultModal() {
    const modal = document.getElementById('consultation-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeConsultModal() {
    const modal = document.getElementById('consultation-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  handleConsultSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('c-first-name').value;
    const phone = document.getElementById('c-phone').value;
    const service = document.getElementById('c-service').value;

    this.closeConsultModal();
    this.showToast(`Thank you, ${name}! Your consultation request for "${service}" has been received. Our team will call you at ${phone}.`);
    e.target.reset();
  }

  handleContactSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('cf-first-name').value;
    this.showToast(`Thank You, ${name}! Your message has been sent to info@ariscalightstudio.com.`);
    e.target.reset();
  }

  handleTradeSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('t-name').value;
    const studio = document.getElementById('t-studio').value;
    this.showToast(`Thank You, ${name}! ${studio} has been registered for trade privileges.`);
    e.target.reset();
  }
}

// Instantiate on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  new AriscaApp(ariscaData);
});
