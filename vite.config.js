import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Where the production site lives.
//   GitHub Pages live link:  '/Arisca-Light-Studio/' (default)
//   Custom domain:            '/'
// Override: BASE_PATH=/ npm run build (or put BASE_PATH=/ in .env)
const DEFAULT_SITE_URL = 'https://bluenovatechin.github.io/Arisca-Light-Studio';

/**
 * The code and data refer to public files as "/assets/…" and "/fonts/…".
 * When the site is served from a sub-folder, prefix those string literals with
 * the base so every image, video and PDF still resolves.
 */
function prefixPublicPaths(base) {
  const prefix = base.replace(/\/$/, '');
  return {
    name: 'prefix-public-paths',
    enforce: 'post',
    transform(code, id) {
      if (!prefix || id.includes('node_modules') || !/\.(jsx?|json)(\?|$)/.test(id)) return null;
      const next = code.replace(/(["'`])\/(assets|fonts)\//g, `$1${prefix}/$2/`);
      return next === code ? null : { code: next, map: null };
    }
  };
}

// https://vite.dev/config/
export default defineConfig(({ command, mode, isPreview }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const siteUrl = process.env.VITE_SITE_URL || env.VITE_SITE_URL || DEFAULT_SITE_URL;
  process.env.VITE_SITE_URL = siteUrl;

  const base = command === 'build' || isPreview 
    ? (process.env.BASE_PATH || env.BASE_PATH || '/Arisca-Light-Studio/') 
    : '/';
  return {
    plugins: [react(), prefixPublicPaths(base)],
    base,
    build: {
      // lets browser dev tools (and Lighthouse) map the minified bundle back to the source
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'lucide-icons': ['lucide-react']
          }
        }
      }
    },
    server: {
      port: 3000,
      open: false
    },
    preview: {
      port: 3000,
      open: false
    }
  };
});
