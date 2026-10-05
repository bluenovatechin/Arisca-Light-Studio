import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Where the production site lives.
//   GitHub test link (bluenovatechin.github.io/Arisca-Light-Studio/): '/Arisca-Light-Studio/'
//   Own domain (www.ariscalightstudio.com):                          '/'
// Override without editing this file: BASE_PATH=/ npm run build
// When switching to '/', also set pathSegmentsToKeep = 0 in public/404.html.
const PROD_BASE = process.env.BASE_PATH || '/Arisca-Light-Studio/';

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
export default defineConfig(({ command, isPreview }) => {
  // `npm run dev` serves from "/"; the build and `npm run preview` use the real base
  const base = command === 'build' || isPreview ? PROD_BASE : '/';
  return {
    plugins: [react(), prefixPublicPaths(base)],
    base,
    server: {
      port: 3000,
      open: false
    }
  };
});
