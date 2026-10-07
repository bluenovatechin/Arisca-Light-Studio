import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 1. Determine site URL from .env or default to GitHub Pages URL
let siteUrl = 'https://bluenovatechin.github.io/Arisca-Light-Studio';
const envPath = path.join(rootDir, '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  const match = envContent.match(/^VITE_SITE_URL\s*=\s*(.+)$/m);
  if (match && match[1]) {
    siteUrl = match[1].trim().replace(/['"]/g, '').replace(/\/$/, '');
  }
}
if (process.env.VITE_SITE_URL) {
  siteUrl = process.env.VITE_SITE_URL.replace(/\/$/, '');
}

console.log(`Generating sitemap.xml for site URL: ${siteUrl}`);

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return String(unsafe).replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

const today = new Date().toISOString().split('T')[0];

const corePages = [
  { loc: `${siteUrl}/`, priority: '1.0', changefreq: 'daily' },
  { loc: `${siteUrl}/shop`, priority: '0.9', changefreq: 'daily' },
  { loc: `${siteUrl}/collection`, priority: '0.9', changefreq: 'daily' },
  { loc: `${siteUrl}/collection?cat=chandeliers`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${siteUrl}/collection?cat=pendants`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${siteUrl}/collection?cat=wall`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${siteUrl}/collection?cat=wall-mirror`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${siteUrl}/collection?cat=floor-table`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${siteUrl}/home-consultancy`, priority: '0.8', changefreq: 'monthly' },
  { loc: `${siteUrl}/interior-designers`, priority: '0.8', changefreq: 'monthly' },
  { loc: `${siteUrl}/client-diaries`, priority: '0.8', changefreq: 'weekly' },
  { loc: `${siteUrl}/catalogs`, priority: '0.8', changefreq: 'monthly' },
  { loc: `${siteUrl}/search`, priority: '0.7', changefreq: 'weekly' },
  { loc: `${siteUrl}/about`, priority: '0.7', changefreq: 'monthly' },
  { loc: `${siteUrl}/contact`, priority: '0.8', changefreq: 'monthly' },
  { loc: `${siteUrl}/privacy-policy`, priority: '0.3', changefreq: 'yearly' },
  { loc: `${siteUrl}/terms-and-conditions`, priority: '0.3', changefreq: 'yearly' }
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
xml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

// Core pages
for (const p of corePages) {
  xml += `  <url>\n`;
  xml += `    <loc>${escapeXml(p.loc)}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>${p.changefreq}</changefreq>\n`;
  xml += `    <priority>${p.priority}</priority>\n`;
  xml += `  </url>\n`;
}

// 2. Add Architectural Downlights from siteData.js
const siteDataPath = path.join(rootDir, 'src/data/siteData.js');
let downlights = [];
if (fs.existsSync(siteDataPath)) {
  const content = fs.readFileSync(siteDataPath, 'utf8');
  const match = content.match(/export const ariscaData\s*=\s*(\{[\s\S]*\});/);
  if (match) {
    try {
      const data = eval('(' + match[1] + ')');
      downlights = data.products || [];
    } catch (e) {
      console.warn('Failed to parse downlights:', e.message);
    }
  }
}

for (const p of downlights) {
  const slug = p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  xml += `  <url>\n`;
  xml += `    <loc>${siteUrl}/product/${slug}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.8</priority>\n`;
  if (p.images && p.images.length > 0) {
    for (const img of p.images) {
      const imgPath = img.url?.startsWith('/') ? img.url : `/${img.url}`;
      xml += `    <image:image>\n`;
      xml += `      <image:loc>${siteUrl}${escapeXml(imgPath)}</image:loc>\n`;
      xml += `      <image:title>${escapeXml(p.title)} - ${escapeXml(p.finish || '')} ${escapeXml(p.wattage ? p.wattage + 'W' : '')} Downlight Arisca</image:title>\n`;
      xml += `      <image:caption>Architectural downlight available at Arisca Light Studio Ahmedabad.</image:caption>\n`;
      xml += `    </image:image>\n`;
    }
  }
  xml += `  </url>\n`;
}

// 3. Add Collection items from collection.json
const collPath = path.join(rootDir, 'src/data/collection.json');
if (fs.existsSync(collPath)) {
  const collection = JSON.parse(fs.readFileSync(collPath, 'utf8'));
  for (const item of collection) {
    xml += `  <url>\n`;
    xml += `    <loc>${siteUrl}/collection/${item.id}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    
    // Studio Photo
    xml += `    <image:image>\n`;
    xml += `      <image:loc>${siteUrl}/assets/collection/${item.cat}/${item.id}-studio.webp</image:loc>\n`;
    xml += `      <image:title>${escapeXml(item.title || item.type)} Item ${escapeXml(item.no)} - Arisca Light Studio Ahmedabad</image:title>\n`;
    xml += `      <image:caption>${escapeXml(item.type)} in ${escapeXml(item.finish || '')} ${escapeXml(item.material || '')}. See it lit in Ahmedabad.</image:caption>\n`;
    xml += `    </image:image>\n`;

    // Room Scene Photo
    xml += `    <image:image>\n`;
    xml += `      <image:loc>${siteUrl}/assets/collection/${item.cat}/${item.id}-scene.webp</image:loc>\n`;
    xml += `      <image:title>${escapeXml(item.title || item.type)} Item ${escapeXml(item.no)} in Interior Room</image:title>\n`;
    xml += `      <image:caption>${escapeXml(item.title)} styled in room interior setting - Arisca Light Studio.</image:caption>\n`;
    xml += `    </image:image>\n`;

    xml += `  </url>\n`;
  }
}

xml += `</urlset>\n`;

const sitemapOut = path.join(rootDir, 'public/sitemap.xml');
fs.writeFileSync(sitemapOut, xml, 'utf8');
console.log(`sitemap.xml successfully written to ${sitemapOut}`);
