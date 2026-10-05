import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cookie, X, Check } from 'lucide-react';
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
    <aside className="cookie-banner-wrap" role="region" aria-label="Cookie consent">
      <div className="cookie-banner-card">
        <div className="cookie-banner-body">
          <div className="cookie-icon-circle">
            <Cookie size={22} className="gold-text" />
          </div>
          <div className="cookie-text-col">
            <h4 className="cookie-title">Your Privacy & Lighting Experience</h4>
            <p className="cookie-desc">
              We use essential browser cookies to remember your inquiry cart and anonymous performance telemetry to keep our catalog fast. No invasive third-party trackers are used.{' '}
              <a
                href="/privacy-policy"
                className="cookie-policy-link"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/privacy-policy');
                }}
              >
                Read our Privacy Policy.
              </a>
            </p>
          </div>
        </div>

        <div className="cookie-actions-row">
          <button
            type="button"
            className="btn-cookie-essential"
            onClick={handleEssentialOnly}
          >
            Essential Only
          </button>
          <button
            type="button"
            className="btn-cookie-accept"
            onClick={handleAcceptAll}
          >
            <Check size={16} /> Accept All
          </button>
        </div>
      </div>
    </aside>
  );
}
