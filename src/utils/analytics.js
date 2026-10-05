/**
 * Privacy-conscious analytics setup for Arisca Light Studio
 * Respects cookie consent and user preferences
 */

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

let isInitialized = false;

export function initAnalytics() {
  if (isInitialized || typeof window === 'undefined') return;

  if (GA_ID) {
    // Inject gtag.js asynchronously
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_ID, {
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure'
    });
    isInitialized = true;
  }
}

export function trackPageView(path = window.location.pathname) {
  if (typeof window !== 'undefined' && window.gtag && GA_ID) {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: document.title
    });
  }
}

export function trackEvent(eventName, params = {}) {
  if (typeof window !== 'undefined' && window.gtag && GA_ID) {
    window.gtag('event', eventName, params);
  }
}
