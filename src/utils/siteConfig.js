/**
 * Centralized Site Configuration & URL Resolver
 * 
 * CURRENT: Uses GitHub Pages live link (https://bluenovatechin.github.io/Arisca-Light-Studio)
 * FUTURE: When you connect a custom domain, simply change VITE_SITE_URL in .env
 */

export const DEFAULT_SITE_URL = 'https://bluenovatechin.github.io/Arisca-Light-Studio';

export function getSiteUrl() {
  if (import.meta.env?.VITE_SITE_URL) {
    return import.meta.env.VITE_SITE_URL.replace(/\/$/, '');
  }
  if (typeof window !== 'undefined' && window.location && window.location.origin) {
    const base = (import.meta.env?.BASE_URL || '/').replace(/\/$/, '');
    return `${window.location.origin}${base}`;
  }
  return DEFAULT_SITE_URL;
}

export const SITE_URL = getSiteUrl();

export function getAbsoluteUrl(path = '') {
  if (!path) return SITE_URL;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}

export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/branding/og-banner.jpg`;
export const GOOGLE_LOGO_IMAGE = `${SITE_URL}/assets/branding/google-logo-512.png`;
