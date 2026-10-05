import { useEffect, useState } from 'react';

// Every product extracted from the Lofy PDF catalogs in /public/assets/catalogs.
// Images live in /public/assets/collection/<catalog>/<id>-studio.webp (product shot)
// and <id>-scene.webp (the same fixture styled in a room).

export const collectionCategories = [
  {
    key: 'chandeliers',
    label: 'Chandeliers & Ceiling',
    short: 'Chandeliers',
    tagline: 'Statement pieces that bring brilliance from above.',
    pdf: '/assets/catalogs/Arisca_Hanging_Ceiling_Lights_Part1_Catalog.pdf',
    pdfSize: '436 MB',
    pages: 326
  },
  {
    key: 'pendants',
    label: 'Pendants & Hanging',
    short: 'Pendants',
    tagline: 'Sculpted suspensions for islands, stairwells and dining.',
    pdf: '/assets/catalogs/Arisca_Hanging_Lights_Part2_Catalog.pdf',
    pdfSize: '538 MB',
    pages: 370
  },
  {
    key: 'wall',
    label: 'Wall Lights',
    short: 'Wall',
    tagline: 'Marble, onyx and brass sconces that warm every wall.',
    pdf: '/assets/catalogs/Arisca_Wall_Lights_Part1_Catalog.pdf',
    pdfSize: '291 MB',
    pages: 204
  },
  {
    key: 'wall-mirror',
    label: 'Wall & Mirror Lights',
    short: 'Wall & Mirror',
    tagline: 'Vanity bars and contemporary wall pieces for mirrors.',
    pdf: '/assets/catalogs/Arisca_Wall_Mirror_Lamps_Part2_Catalog.pdf',
    pdfSize: '290 MB',
    pages: 227
  },
  {
    key: 'floor-table',
    label: 'Floor & Table Lamps',
    short: 'Floor & Table',
    tagline: 'Sculptural lamps that light up your corners.',
    pdf: '/assets/catalogs/Arisca_Floor_Table_Lamps_Catalog.pdf',
    pdfSize: '164 MB',
    pages: 75
  }
];

// Representative page from each catalog, used for menu and category imagery
export const categoryCover = {
  chandeliers: 'chandeliers-011',
  pendants: 'pendants-020',
  wall: 'wall-002',
  'wall-mirror': 'wall-mirror-002',
  'floor-table': 'floor-table-045'
};
export const coverImage = (key, kind = 'studio') => {
  const id = categoryCover[key];
  return `/assets/collection/${key}/${id}-${kind}.webp`;
};

export const categoryByKey =Object.fromEntries(collectionCategories.map((c) => [c.key, c]));

let cache = null;
let pending = null;

export function loadCollection() {
  if (cache) return Promise.resolve(cache);
  if (!pending) {
    pending = import('./collection.json').then((m) => {
      cache = m.default.map(enrich);
      return cache;
    });
  }
  return pending;
}

export function useCollection() {
  const [items, setItems] = useState(cache);
  useEffect(() => {
    if (!cache) loadCollection().then(setItems);
  }, []);
  return items;
}

export const studioImage = (item) => `/assets/collection/${item.cat}/${item.id}-studio.webp`;
export const sceneImage = (item) => `/assets/collection/${item.cat}/${item.id}-scene.webp`;

// "D350 × H1220 mm" style strings → { D: 350, H: 1220 }
export function parseDimensions(size = '') {
  const dims = {};
  const re = /\b(FH|D|W|L|H)\s*(\d+(?:\.\d+)?)/gi;
  let m;
  while ((m = re.exec(size))) {
    const k = m[1].toUpperCase();
    if (!(k in dims)) dims[k] = Number(m[2]);
  }
  return dims;
}

const FINISH_FAMILIES = [
  ['Brass & Gold', /brass|gold|champagne|copper gold/i],
  ['Black', /black|graphite|gun/i],
  ['White', /white|ivory|cream/i],
  ['Chrome & Silver', /chrome|silver|nickel|steel/i],
  ['Bronze & Copper', /bronze|copper|rose/i],
  ['Wood & Natural', /wood|walnut|brown|natural|rattan|bamboo|beige/i],
  ['Grey', /grey|gray/i]
];

const MATERIAL_FAMILIES = [
  ['Glass', /glass/i],
  ['Crystal', /crystal|k9/i],
  ['Marble & Stone', /marble|onyx|stone|travert/i],
  ['Acrylic', /acrylic|pmma/i],
  ['Fabric', /fabric|linen|silk|cloth/i],
  ['Wood & Rattan', /wood|rattan|bamboo/i],
  ['Resin & Ceramic', /resin|ceramic|cement|plaster/i],
  ['Leather', /leather/i]
];

export const finishFamilies = FINISH_FAMILIES.map(([name]) => name);
export const materialFamilies = MATERIAL_FAMILIES.map(([name]) => name);

function enrich(item) {
  const finishFamily = (FINISH_FAMILIES.find(([, re]) => re.test(item.finish)) || ['Other'])[0];
  const materialTags = MATERIAL_FAMILIES.filter(([, re]) => re.test(item.material)).map(([name]) => name);
  const title = `${item.finish} ${item.type}`.replace(/\s+/g, ' ').trim();
  return {
    ...item,
    title,
    finishFamily,
    materialTags,
    isLed: item.lamp.startsWith('Integrated LED'),
    dims: parseDimensions(item.size),
    search: [item.no, item.sku, item.type, item.finish, item.material, item.lamp, categoryByKey[item.cat]?.label]
      .join(' ')
      .toLowerCase()
  };
}

// Inquiry-basket shape shared with the architectural downlight products
export function toInquiryProduct(item) {
  return {
    id: item.id,
    slug: item.id,
    href: `/collection/${item.id}`,
    title: `${item.title} · ${item.no}`,
    thumbnail: studioImage(item),
    finish: item.finish,
    itemNo: item.no,
    price: null
  };
}

export function whatsappLinkFor(item) {
  const msg = `Hello Arisca Light Studio, I'm interested in the ${item.title} (Item No. ${item.no}, ${item.size}). Could you share price and availability?`;
  return `https://wa.me/919898086656?text=${encodeURIComponent(msg)}`;
}
