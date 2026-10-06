import React, { useState, useEffect } from 'react';
import { Cookie, Check } from 'lucide-react';
import { initAnalytics } from '../utils/analytics';

export default function CookieConsentBanner({ onNavigate }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('arisca_cookie_consent');
      if (!consent) {
        // Small delay so it smoothly slides in after initial paint
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      } else if (consent === 'all') {
        initAnalytics();
      }
    } catch {
      // localStorage disabled or restricted
    }
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem('arisca_cookie_consent', 'all');
    } catch {}
    initAnalytics();
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    try {
      localStorage.setItem('arisca_cookie_consent', 'essential');
    } catch {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside className="ck" role="region" aria-label="Cookie consent">
      <div className="ck-body">
        <span className="ck-icon" aria-hidden="true"><Cookie size={20} /></span>
        <div>
          <p className="ck-title">A quick note on cookies</p>
          <p className="ck-desc">
            We remember your basket and saved lights, and count visits anonymously to keep the site fast. No third-party trackers.{' '}
            <a
              href="/privacy-policy"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/privacy-policy');
              }}
            >
              Privacy policy
            </a>
          </p>
        </div>
      </div>
      <div className="ck-actions">
        <button type="button" className="btn-pill" onClick={handleEssentialOnly}>
          Essential only
        </button>
        <button type="button" className="btn-pill btn-pill-solid" onClick={handleAcceptAll}>
          <Check size={16} /> Accept all
        </button>
      </div>
    </aside>
  );
}
