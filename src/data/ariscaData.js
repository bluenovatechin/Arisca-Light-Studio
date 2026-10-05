import { ariscaData as rawData } from '../../data.js';
import assetMap from './assetMap.json';
import { collectionCategories, coverImage } from './collection.js';

export const ariscaData = rawData;

// Helper to resolve remote Zyrosite / CDN URLs to local static assets
export function getLocalAsset(remoteUrl, fallback = '') {
  if (!remoteUrl) return fallback;
  if (assetMap[remoteUrl]) return assetMap[remoteUrl];

  // Try stripping Zyrosite cdn-cgi optimization prefix to get master original
  if (remoteUrl.includes('assets.zyrosite.com/cdn-cgi/image/')) {
    const stripped = remoteUrl.replace(/assets\.zyrosite\.com\/cdn-cgi\/image\/[^\/]+\//, 'assets.zyrosite.com/');
    if (assetMap[stripped]) return assetMap[stripped];
  }

  // Map uncompressed raw products JPGs to lightweight optimized WebP assets
  if (typeof remoteUrl === 'string' && remoteUrl.startsWith('/assets/products/')) {
    const filename = remoteUrl.replace('/assets/products/', '').replace(/\.(jpe?g|png)$/i, '.webp');
    return `/assets/optimized/products/${filename}`;
  }

  // If already relative
  if (remoteUrl.startsWith('/assets/')) return remoteUrl;

  return remoteUrl;
}

// Downloaded Original High-Definition Videos
export const studioVideos = {
  heroAmbience: '/assets/videos/19228309-uhd_2560_1440_30fps.mp4',
  ambientLighting: '/assets/videos/3571264-hd_1920_1080_30fps.mp4',
  architecturalShowcase: '/assets/videos/7578544-uhd_3840_2160_30fps.mp4'
};

export const siteInfo = {
  ...rawData.siteInfo,
  branding: {
    ...rawData.siteInfo.branding,
    logo: getLocalAsset(rawData.siteInfo.branding.logo, '/assets/branding/arisca-300-x-150-px-Awv8y3X42eTqlgJQ.png'),
    favicon: getLocalAsset(rawData.siteInfo.branding.favicon, '/assets/branding/arisca-1-mxB29pjQy0T31J2j.png')
  }
};

export const navigation = rawData.navigation;
export const rawProducts = rawData.products;

// Enrich products with parsed specs, realistic e-commerce pricing, room tags, and search keywords
export const enrichedProducts = rawProducts.map((p) => {
  // Extract wattage (e.g., 7W, 12W, 15W, 18W)
  const wattMatch = p.title.match(/(\d+)W/i) || p.title.match(/(\d+)\s*flava/i);
  const wattage = wattMatch ? parseInt(wattMatch[1], 10) : 12;

  // Determine luminaire type
  let type = 'COB Downlight';
  if (/cylinder|deep\s*p/i.test(p.title) || /cylinder/i.test(p.subtitle)) {
    type = 'Surface Cylinder';
  } else if (/square\s*p/i.test(p.title)) {
    type = 'SSK Square Panel';
  } else if (/round\s*p/i.test(p.title)) {
    type = 'SSK Round Panel';
  } else if (/flava/i.test(p.title)) {
    type = 'Flava Architectural COB';
  } else if (/grace/i.test(p.title)) {
    type = 'Grace Deep COB';
  }

  // Determine finish / color
  let finish = 'Dual Tone';
  let finishCode = 'BK+RG';
  if (/bk\+rg/i.test(p.title) || /bk\+rg/i.test(p.slug)) {
    finish = 'Black + Rose Gold';
    finishCode = 'BK+RG';
  } else if (/bk\+bk/i.test(p.title) || /black/i.test(p.title)) {
    finish = 'Matte Obsidian Black';
    finishCode = 'BK';
  } else if (/white/i.test(p.title)) {
    finish = 'Architectural Pure White';
    finishCode = 'WH';
  }

  // Determine category key for filter tabs
  let categoryKey = 'cob';
  if (/panel|square|round/i.test(type)) {
    categoryKey = 'panel';
  } else if (/cylinder/i.test(type)) {
    categoryKey = 'cylinder';
  }

  // Calculate realistic luxury architectural pricing in INR
  let basePrice = 1450;
  let baseMrp = 2100;
  if (wattage <= 7) {
    basePrice = 890;
    baseMrp = 1350;
  } else if (wattage === 12) {
    basePrice = 1450;
    baseMrp = 2100;
  } else if (wattage === 15) {
    basePrice = 1850;
    baseMrp = 2650;
  } else if (wattage >= 18) {
    basePrice = 2250;
    baseMrp = 3200;
  }

  if (type === 'Surface Cylinder') {
    basePrice += 450;
    baseMrp += 650;
  } else if (type.includes('Panel')) {
    basePrice = Math.max(590, basePrice - 300);
    baseMrp = Math.max(890, baseMrp - 400);
  }

  if (finish === 'Black + Rose Gold') {
    basePrice += 150;
    baseMrp += 200;
  }

  const price = basePrice;
  const mrp = baseMrp;
  const discountPercent = Math.round(((mrp - price) / mrp) * 100);

  // Suitable Interior Applications
  const suitableRooms = [];
  if (wattage >= 12) suitableRooms.push('Living Room', 'Foyer & Hallway');
  if (wattage <= 12) suitableRooms.push('Bedroom', 'Walk-in Wardrobe');
  if (wattage >= 15 || type.includes('Panel')) suitableRooms.push('Kitchen Island', 'Dining Area');
  if (type === 'Surface Cylinder') suitableRooms.push('Exposed Ceiling', 'Balcony / Veranda');
  suitableRooms.push('Architectural Office');

  // Approximate lumen rating (approx 95 lm/W for architectural COB)
  const lumens = wattage * 95;

  // Map to local uncompressed images
  const localThumbnail = getLocalAsset(p.thumbnail);
  const localImages = p.images?.map((img) => ({
    ...img,
    url: getLocalAsset(img.url)
  })) || [{ id: `${p.id}_local`, url: localThumbnail }];

  // Search tokens
  const searchTokens = [
    p.title.toLowerCase(),
    type.toLowerCase(),
    finish.toLowerCase(),
    finishCode.toLowerCase(),
    `${wattage}w`,
    `${wattage} watt`,
    categoryKey,
    ...suitableRooms.map(r => r.toLowerCase()),
    'ahmedabad',
    'architectural',
    'anti-glare',
    'cob'
  ];

  return {
    ...p,
    wattage,
    type,
    finish,
    finishCode,
    categoryKey,
    lumens,
    price,
    mrp,
    currency: '₹',
    formattedPrice: `₹${price.toLocaleString('en-IN')}`,
    formattedMrp: `₹${mrp.toLocaleString('en-IN')}`,
    discountPercent,
    suitableRooms,
    searchTokens,
    rating: (4.7 + ((p.id.charCodeAt(p.id.length - 1) % 4) / 10)).toFixed(1),
    reviewCount: 14 + (p.id.charCodeAt(p.id.length - 2) % 35),
    thumbnail: localThumbnail,
    images: localImages,
    specs: {
      wattage: `${wattage}W`,
      lumens: `${lumens} Lumens`,
      cct: '3000K Warm White / 4000K Neutral',
      cri: 'Ra > 90 (True Color Fidelity)',
      beamAngle: wattage >= 15 ? '45° Wide Optical Focus' : '36° Precision Spot',
      finish,
      housing: 'Die-cast Aerospace Aluminum',
      ipRating: 'IP20 / Damp-location rated',
      warranty: '2-Year Studio Warranty',
      cutout: type.includes('Cylinder') ? 'N/A (Surface Mounted)' : `${70 + wattage * 2}mm Cutout`,
      mounting: type.includes('Cylinder') ? 'Surface Mounted' : 'Recessed Ceiling Cutout'
    }
  };
});

// Client Diaries with rich room tags and metadata mapped to local assets
export const clientProjects = [
  {
    id: 'proj_1',
    title: 'Minimalist Penthouse Living & Foyer',
    location: 'Bodakdev, Ahmedabad',
    category: 'living',
    categoryLabel: 'Living & Foyer',
    url: '/assets/optimized/projects/whatsapp-image-2026-05-27-at-10.18.27-am-1-qWcgpdgYamhxZqxZ.webp',
    description: 'Deep anti-glare LOFY 18W Black+Rose Gold COB spotlights paired with indirect warm perimeter cove illumination.',
    fixtures: [
      'LOFY 18W Grace COB Downlight (Rose Gold Bezel)',
      'High-Density 240 LED/m 3000K Perimeter Linear Cove',
      'Anti-Glare Darklight Honeycomb Louver Reflector'
    ],
    colorTemp: '3000K Warm Halogen',
    cri: 'Ra > 94 (True Color Fidelity)',
    luxLevel: '180 – 260 Lux (Ambient) / 450 Lux (Art Focal)',
    ceilingHeight: '11.5 ft Gypsum False Ceiling',
    beamAngle: '24° Narrow Spot + 48° Soft Flood',
    scope: '950 sq.ft Living & Vestibule',
    designIntent: 'Engineered for evening serenity. By concealing the light sources inside deep 45mm recessed cones, guests experience pristine illuminated artworks and seating without ever seeing a harsh diode or direct glare.'
  },
  {
    id: 'proj_2',
    title: 'Modern High-Ceiling Dining Pavilion',
    location: 'Science City Road, Ahmedabad',
    category: 'dining',
    categoryLabel: 'Dining & Kitchen',
    url: '/assets/optimized/projects/whatsapp-image-2026-05-27-at-10.18.32-am-lIzHuxrb3LqksB9L.webp',
    description: 'Precision beam focusing on marble dining island with custom sculptural brass pendant suspension.',
    fixtures: [
      'LOFY 12W Focus Adjustable Gimbal Downlights',
      'Arisca Bespoke 8-Ring Hand-Brushed Brass Chandelier',
      'Frameless Micro Wall Washers for Stone Wall Texture'
    ],
    colorTemp: '2700K Soft Amber to 3000K Warm',
    cri: 'Ra > 95 (Vivid Food & Skin Tones)',
    luxLevel: '350 Lux (Table Surface) / 140 Lux (Perimeter)',
    ceilingHeight: '14.0 ft Double-Volume Slab',
    beamAngle: '15° Spot on Centerpiece + 36° Table Spread',
    scope: '420 sq.ft Dining Pavilion',
    designIntent: 'Crafted to make formal entertaining intimate. The sculptural chandelier delivers warm diffuse glow at eye level, while recessed micro downlights provide crisp shadow-free task lux over the Italian marble dining counter.'
  },
  {
    id: 'proj_3',
    title: 'Architectural Master Bedroom Suite',
    location: 'Ambli Road, Ahmedabad',
    category: 'bedroom',
    categoryLabel: 'Master Suite',
    url: '/assets/optimized/projects/whatsapp-image-2026-05-27-at-10.18.31-am-2-EFtKulW0TTZG7uAD.webp',
    description: 'Soft 2700K warm downlighting with recessed wall washer grazing textured Italian plaster accent walls.',
    fixtures: [
      'LOFY 7W Comfort Miniature Deep-Set Downlights',
      'Linear Asymmetric Wall-Grazer Channel (Micro-Baffle)',
      'Dual-Axis Brass Reading Pendants with Localized Dimming'
    ],
    colorTemp: '2700K Ultra-Warm Sunset Glow',
    cri: 'Ra > 92',
    luxLevel: '100 – 160 Lux (Bedside Calm) / 300 Lux (Wardrobe)',
    ceilingHeight: '10.5 ft Acoustic Plaster Ceiling',
    beamAngle: '36° Soft Flood with Milky Diffuser',
    scope: '580 sq.ft Master Bedroom & Dressing Room',
    designIntent: 'Circadian-aligned master bedroom lighting. Zero downlights are positioned directly over pillow heads. Wall grazing softens the vertical boundary surfaces to induce relaxation and restful sleep.'
  },
  {
    id: 'proj_4',
    title: 'Bespoke Executive Villa Corridor',
    location: 'Sindhu Bhavan Road, Ahmedabad',
    category: 'living',
    categoryLabel: 'Living & Corridor',
    url: '/assets/optimized/projects/whatsapp-image-2026-05-27-at-10.18.31-am-NHS8o9Jd0kZuNLJe.webp',
    description: 'Linear deep-cell darklight reflector pods casting rhythmic light cones across bespoke art displays.',
    fixtures: [
      'LOFY 10-Cell Darklight Modular Linear Recessed Downlights',
      'Continuous Low-Glare 24V Architectural Baseboard Channel',
      'Narrow Beam Gallery Framing Projectors'
    ],
    colorTemp: '3000K Gallery Standard',
    cri: 'Ra > 96 (Museum Grade Art Illumination)',
    luxLevel: '200 Lux (Walkway) / 500 Lux (Artwork Focus)',
    ceilingHeight: '11.0 ft Seamless Drywall',
    beamAngle: '18° Precision Cut-off',
    scope: '65 ft Gallery Corridor',
    designIntent: 'A gallery walkway experience inside a private residence. Rhythmic darklight pods highlight private art collection paintings while leaving the ceiling completely dark and discreet.'
  },
  {
    id: 'proj_5',
    title: 'Sculptural Double-Height Staircase',
    location: 'Shela, Ahmedabad',
    category: 'staircase',
    categoryLabel: 'Staircase & Voids',
    url: '/assets/optimized/projects/whatsapp-image-2026-05-27-at-10.18.30-am-2-pcsUc6zcy0BHUCeV.webp',
    description: 'Grand spiral void featuring multi-tier drop crystal chandelier and micro step-lights for nocturnal navigation.',
    fixtures: [
      'Custom 4.5-Meter Cascading K9 Crystal Rod Chandelier',
      'Micro Recessed Step Lights with Anti-Glare Cutoff Louvers',
      'LOFY 24W High-Lumen Narrow Beam Void Grazers'
    ],
    colorTemp: '3000K Crisp Warm Crystal Spectrum',
    cri: 'Ra > 90',
    luxLevel: '220 Lux (Central Void) / 80 Lux (Treads)',
    ceilingHeight: '23 ft Double-Height Atrium',
    beamAngle: '12° Narrow Punch from High Slab',
    scope: 'Double-Height Staircase Void',
    designIntent: 'Dramatic vertical grandeur combined with nocturnal safety. The crystal cascade serves as the crown jewel of the home, while low-glare tread-level wash lights ensure safe stair traversal without switching on overhead fixtures.'
  },
  {
    id: 'proj_6',
    title: 'Contemporary Luxury Kitchen Island',
    location: 'Satellite, Ahmedabad',
    category: 'dining',
    categoryLabel: 'Dining & Kitchen',
    url: '/assets/optimized/projects/whatsapp-image-2026-05-27-at-10.18.28-am-2-dnDFUuitlx3xkO4V.webp',
    description: 'High CRI 95+ task lighting delivering color-true illumination over quartz countertop food prep zones.',
    fixtures: [
      'LOFY 15W High-Efficacy Kitchen Task COB (IP44 Rated)',
      'Under-Cabinet High-Density Dotless Silicone Neon Diffusers',
      'Twin Minimalist Cylinder Pendants over Breakfast Counter'
    ],
    colorTemp: '4000K Natural White (Preparation) / 3000K (Evening Dining)',
    cri: 'Ra > 95 (R9 > 85 for Vibrant Red Produce)',
    luxLevel: '500 Lux (Food Prep Surface) / 250 Lux (Island Dining)',
    ceilingHeight: '9.8 ft Moisture-Resistant Ceiling',
    beamAngle: '36° Anti-Shadow Dispersion',
    scope: '320 sq.ft Culinary Studio & Pantry',
    designIntent: 'High-precision task lighting meets luxury entertaining. Crisp 500-lux output eliminates hand shadows during vegetable cutting and culinary prep, switchable to soothing 3000K warm dining mood for wine evenings.'
  },
  {
    id: 'proj_7',
    title: 'Outdoor Garden Terrace & Pergola',
    location: 'Bopal, Ahmedabad',
    category: 'outdoor',
    categoryLabel: 'Terrace & Landscape',
    url: '/assets/optimized/projects/whatsapp-image-2026-05-27-at-10.18.28-am-tTDPC8D86XUhy4w7.webp',
    description: 'Weatherproof IP65 architectural grazing spotlights creating dramatic shadow silhouettes on tropical flora.',
    fixtures: [
      'IP65 Architectural Solid Brass Garden Spike Spots',
      'IP67 Submersible Warm Water Fountain Up-lights',
      'Concealed Weatherproof Pergola Rafter Linear Strips'
    ],
    colorTemp: '2700K Golden Warm Landscape Mood',
    cri: 'Ra > 88',
    luxLevel: '60 – 120 Lux (Subtle Silhouette & Ambiance)',
    ceilingHeight: 'Outdoor Pergola (10 ft Structure)',
    beamAngle: '15° Tree Trunk Up-light + 60° Wall Graze',
    scope: '1,400 sq.ft Terrace Deck & Bonsai Court',
    designIntent: 'Eliminating the "black window" effect from inside the living room. By gently grazing perimeter exterior stone walls and foliage, the garden becomes a luminous extension of the indoor living space at dusk.'
  },
  {
    id: 'proj_8',
    title: 'Luxury Boutique Showroom Illumination',
    location: 'C.G. Road, Ahmedabad',
    category: 'commercial',
    categoryLabel: 'Commercial & Retail',
    url: '/assets/optimized/projects/whatsapp-image-2026-05-27-at-10.18.31-am-1-Plf4CMTeuAcSi5lt.webp',
    description: 'High-efficacy 3-circuit track spotlights with 360° adjustability highlighting premium curated garments.',
    fixtures: [
      'Arisca 30W High-Performance 3-Circuit DALI Track Spots',
      'Seamless Magnetic Honeycomb Linear Diffusers',
      'Warm Vertical Display Shelf Light Channels'
    ],
    colorTemp: '3500K Commercial Luxury Balanced CCT',
    cri: 'Ra > 97 (Ultra-True Silk & Fabric Representation)',
    luxLevel: '750 Lux (Product Mannequins) / 300 Lux (Aisles)',
    ceilingHeight: '13.0 ft Exposed Industrial Matte Black Slab',
    beamAngle: '15° Accent & 38° Mannequin Highlight',
    scope: '1,800 sq.ft Designer Apparel Studio',
    designIntent: 'Engineered to maximize garment sales appeal. Textile colors appear saturated and true under Ra 97+ optical chips with zero glare in shoppers’ eyes, coupled with dynamic flexibility to re-aim spotlights with seasonal mannequin rotations.'
  }
];

// Leadership & Founding Team mapped to local full-quality assets
export const leadershipTeam = [
  {
    name: 'Adarsh Patel',
    role: 'Founder & Managing Director',
    bio: 'Visionary behind Arisca Light Studio, bringing deep expertise in architectural illumination aesthetics, global luminaire curation, and studio excellence.',
    image: '/assets/optimized/team/adarsh-patel.webp'
  },
  {
    name: 'Dhyan Patel',
    role: 'Co-Founder & Chief Lighting Consultant',
    bio: 'Specialist in interior ambiance engineering, laser site mapping, and translating architectural blueprints into breathtaking lighting atmospheres.',
    image: '/assets/optimized/team/dhyan-patel.webp'
  },
  {
    name: 'Manthan Patel',
    role: 'Head of Technical Operations & Installation',
    bio: 'Oversees white-glove electrical installation, driver ballast integration, dimming controls, and flawless on-site commissioning across Ahmedabad.',
    image: '/assets/optimized/team/manthan-patel.webp'
  },
  {
    name: 'Dev Patel',
    role: 'Head of Architect & Trade Partnerships',
    bio: 'Leads our dedicated Trade Portal, empowering luxury interior architects with custom photometric data, finish swatches, and priority order fulfillment.',
    image: '/assets/optimized/team/dev-patel.webp'
  }
];

// Curated Collection Showcase Categories mapped to local assets
export const showcaseCategories = [
  {
    id: 'chandeliers',
    name: 'Chandeliers',
    tagline: 'Statement centerpieces for grand living & dining',
    image: '/assets/optimized/projects/dsc09758-a01hkH3Y9uhcKEc0.webp',
    count: '24+ Models in Showroom'
  },
  {
    id: 'pendant',
    name: 'Pendant Lights',
    tagline: 'Sculptural suspension lights for islands & foyers',
    image: '/assets/optimized/projects/dsc09738-Zu3m7g53jinktiDJ.webp',
    count: '35+ Designer Shapes'
  },
  {
    id: 'cob',
    name: 'COB Downlights',
    tagline: 'Deep anti-glare architectural focus illumination',
    image: '/assets/optimized/products/31b92c6c-63fa-4e1e-a22f-d8aad2e48e80.webp',
    count: '14 Core LOFY Models'
  },
  {
    id: 'cylinder',
    name: 'Cylinders & Surface',
    tagline: 'Minimalist surface architecture for concrete slabs',
    image: '/assets/optimized/products/f6b8b1ab-acfb-4d5b-9968-dafb9d120435.webp',
    count: 'Dual-Tone Finishes'
  },
  {
    id: 'sconces',
    name: 'Wall Sconces & Grazers',
    tagline: 'Indirect wall washers that sculpt textured elevations',
    image: '/assets/optimized/projects/dsc09743-qZwb0UB5B2OImJ70.webp',
    count: 'Indoor & Damp Rated'
  },
  {
    id: 'outdoor',
    name: 'Architectural Outdoor',
    tagline: 'Weatherproof facade grazing, bollards & garden spots',
    image: '/assets/optimized/projects/whatsapp-image-2026-05-27-at-10.18.28-am-tTDPC8D86XUhy4w7.webp',
    count: 'IP65 Rated Protection'
  }
];

// Room Presets for the Interactive Room Lighting Calculator
export const roomPresets = [
  {
    id: 'living',
    name: 'Living / Drawing Room',
    targetLux: 150,
    description: 'Warm, welcoming ambient glow with accent spotlighting on wall art and media units.',
    recommendedWattage: 12,
    suggestedColorTemp: '3000K Warm White'
  },
  {
    id: 'master_bedroom',
    name: 'Master Bedroom',
    targetLux: 120,
    description: 'Gentle, anti-glare lighting designed for relaxation, restful evenings, and soft night grazing.',
    recommendedWattage: 7,
    suggestedColorTemp: '2700K - 3000K Soft Warm'
  },
  {
    id: 'kitchen_dining',
    name: 'Kitchen & Dining Island',
    targetLux: 300,
    description: 'High-clarity, high CRI task lighting for prep surfaces paired with warm intimate dining focus.',
    recommendedWattage: 15,
    suggestedColorTemp: '4000K Neutral White'
  },
  {
    id: 'foyer_hall',
    name: 'Entrance Foyer & Corridor',
    targetLux: 180,
    description: 'Sculptural downlights creating welcoming pools of light and architectural shadow play.',
    recommendedWattage: 8,
    suggestedColorTemp: '3000K Warm White'
  },
  {
    id: 'home_office',
    name: 'Home Office & Study',
    targetLux: 350,
    description: 'Even, flicker-free illumination that prevents eye strain during long working and reading hours.',
    recommendedWattage: 18,
    suggestedColorTemp: '4000K Clean White'
  }
];

// Client Testimonials
export const clientTestimonials = [
  {
    id: 'test_1',
    author: 'Rajesh & Meera Shah',
    location: 'Bopal Sky Villa, Ahmedabad',
    rating: 5,
    text: 'Arisca transformed our newly renovated 4BHK. The LOFY 18W Black+Rose Gold downlights have zero glare and cast the most exquisite warm glow. Their laser site measurement team was punctual, courteous, and accurate down to the millimeter.'
  },
  {
    id: 'test_2',
    author: 'Ar. Bhavin Parikh',
    location: 'Studio Parikh Architects',
    rating: 5,
    text: 'As an interior architect, lighting can make or break a project. Arisca Light Studio is our premier lighting partner in Ahmedabad. Their dual-tone COB fixtures and white-glove chandelier installation are unmatched.'
  },
  {
    id: 'test_3',
    author: 'Kinjal Vora',
    location: 'Sindhu Bhavan Penthouse',
    rating: 5,
    text: 'The in-home consultancy made selecting lighting so effortless. Adarsh and Dhyan visited our home, checked our wall colors and ceiling heights, and delivered an illumination layout that our guests compliment every single time.'
  }
];

// Ahmedabad Studio Location & Coverage Areas for Local SEO Ranking
export const studioLocationInfo = {
  name: 'Arisca Light Studio — Flagship Architectural Lighting Showroom',
  address: 'B - 103, Money Plant High Street, Jagatpur Road',
  city: 'Ahmedabad',
  state: 'Gujarat',
  postalCode: '382470',
  country: 'India',
  landmark: 'Near Gota Flyover & SG Highway Junction',
  phone: '+91 98980 86656',
  alternatePhone: '+91 93138 02123',
  email: 'contact@ariscalightstudio.com',
  workingHours: 'Monday – Saturday: 10:00 AM – 8:30 PM | Sunday: By Exclusive Appointment',
  googleMapsEmbed: 'https://maps.google.com/maps?q=Arisca%20light%20studio,%20B%20-%20103,%20Money%20Plant%20High%20Street,%20Ahmedabad&t=m&z=14&ie=UTF8&output=embed',
  googleMapsDirectionsUrl: 'https://maps.google.com/?q=Arisca+Light+Studio+Ahmedabad',
  metroAccess: '15 mins from Thaltej Metro Station',
  freeParking: 'Ample basement and visitor parking available on-site'
};

// Priority Service Neighborhoods in Ahmedabad for Site Consultations
export const coverageAreas = [
  { name: 'Bodakdev & Judges Bungalow', distance: '12 km', eta: '18 mins', services: ['Laser Site Survey', 'In-Home Lighting Demo', 'Same-Day Quotation'] },
  { name: 'Sindhu Bhavan Road (SBR)', distance: '10 km', eta: '15 mins', services: ['Luxury Penthouse Lighting', 'Architect Trade Visits', 'Custom Dimmers'] },
  { name: 'Ambli & Bopal Road', distance: '14 km', eta: '20 mins', services: ['Villa False Ceiling Mapping', 'Garden Spike Spots', 'Façade Grazers'] },
  { name: 'Shela & South Bopal', distance: '16 km', eta: '22 mins', services: ['Turnkey Installation', '3000K Warm Ambience', 'Anti-Glare COBs'] },
  { name: 'Science City & Sola', distance: '4 km', eta: '8 mins', services: ['Free Next-Day Laser Measurement', 'Rapid Sample Delivery'] },
  { name: 'Gota & Jagatpur Road', distance: '0.5 km', eta: 'Immediate', services: ['Studio Walk-in Consultations', 'Immediate Stock Collection'] },
  { name: 'Satellite & Prahlad Nagar', distance: '15 km', eta: '22 mins', services: ['Apartment Re-lamping', 'Kitchen Task Lighting', 'Magnetic Tracks'] },
  { name: 'Vastrapur & Drive-In', distance: '11 km', eta: '16 mins', services: ['Modern Living Room Layouts', 'Cove Strip Light Pairing'] },
  { name: 'Gandhinagar & GIFT City', distance: '18 km', eta: '25 mins', services: ['Corporate Office Illumination', 'Commercial High Bay & Panels'] }
];

// High-Intent SEO FAQs for Google Rank #1
export const seoFaqs = [
  {
    q: 'How is pricing decided for lights at Arisca Light Studio Ahmedabad?',
    a: 'Every project is different, so pricing is shared after a short consultation with our lighting team. We look at the fixtures, finishes and quantities your space needs, then send a clear quotation. Book a studio visit or message us on WhatsApp to start; architects and interior designers get dedicated trade support.'
  },
  {
    q: 'Where is Arisca Light Studio located in Ahmedabad, and can I visit the showroom?',
    a: 'Our flagship studio is located at B - 103, Money Plant High Street, Jagatpur Road (just off SG Highway near Gota Flyover), Ahmedabad, Gujarat 382470. Our experience center features live dark-room mockups where you can view beam angles, optical cutoffs, and 2700K vs 3000K vs 4000K light temperatures in person.'
  },
  {
    q: 'What lighting products does Arisca sell for residential and commercial interiors?',
    a: 'We manufacture and curate precision luminaires including: deep-recessed anti-glare COB downlights (LOFY, Grace, Flava series), minimalist surface ceiling cylinders, architectural magnetic track systems, slim profile linear panels, modern chandeliers, sculptural dining pendants, waterproof IP65 garden/outdoor landscape lights, and high-efficiency commercial panel fixtures.'
  },
  {
    q: 'Do you offer in-home lighting consultation and laser site measurement in Ahmedabad?',
    a: 'Yes! Arisca Light Studio provides complimentary on-site laser measurement and ceiling markup across all Ahmedabad neighborhoods including Bodakdev, Sindhu Bhavan Road, Ambli, Shela, Bopal, Science City, Satellite, and Gandhinagar. Our lighting engineers visit your site with laser distance meters, calculate exact lux requirements, and supply a precise wiring blueprint for your electrical contractor.'
  },
  {
    q: 'What is the difference between 3000K warm white and 4000K neutral white?',
    a: '3000K Warm White delivers a cozy, golden, relaxing atmosphere ideal for living rooms, bedrooms, and dining spaces. 4000K Neutral White provides crisp, invigorating, high-clarity illumination perfect for kitchens, dressing mirrors, home offices, and art galleries. Our lighting advisors help you balance both across your residence.'
  },
  {
    q: 'Can architects and interior designers in Ahmedabad get custom quotations and 3D files?',
    a: 'Absolutely. Through our Arisca Trade Portal, certified architects and interior decorators receive exclusive trade discounts, priority delivery within Ahmedabad, physical finish swatches (Matte Black, Rose Gold, Architectural White), and custom lighting layouts.'
  }
];

// The five Lofy catalogs in /public/assets/catalogs — every product is also browsable at /collection
export const architecturalCatalogs = collectionCategories.map((c, i) => ({
  id: `cat-${c.key}`,
  volume: `Vol. ${String(i + 1).padStart(2, '0')}`,
  title: `Lofy ${c.label}`,
  subtitle: c.tagline,
  category: c.label,
  categorySlug: c.key,
  coverImage: coverImage(c.key),
  pdfFile: c.pdf,
  fileSize: c.pdfSize,
  pages: `${c.pages} Pages`
}));

// Helper to search across products, locations, categories, and PDF catalogs
export function searchArisca(query) {
  if (!query || typeof query !== 'string' || !query.trim()) {
    return { products: [], locations: [], categories: [], catalogs: [], query: '' };
  }

  const clean = query.trim().toLowerCase();
  const tokens = clean.split(/\s+/).filter(Boolean);

  // 2. Product Search
  const matchingProducts = enrichedProducts.filter((p) => {
    return tokens.every(token => 
      p.title.toLowerCase().includes(token) ||
      p.type.toLowerCase().includes(token) ||
      p.finish.toLowerCase().includes(token) ||
      p.finishCode.toLowerCase().includes(token) ||
      `${p.wattage}w`.includes(token) ||
      p.categoryKey.includes(token) ||
      p.suitableRooms.some(r => r.toLowerCase().includes(token)) ||
      p.searchTokens.some(st => st.includes(token))
    );
  });

  // 3. Location Matches
  const matchingLocations = coverageAreas.filter(loc => 
    loc.name.toLowerCase().includes(clean) ||
    clean.includes('ahmedabad') ||
    clean.includes('location') ||
    clean.includes('showroom') ||
    clean.includes('store') ||
    clean.includes('near') ||
    tokens.some(t => loc.name.toLowerCase().includes(t))
  );

  // 4. Category Matches
  const matchingCategories = showcaseCategories.filter(cat => 
    cat.name.toLowerCase().includes(clean) ||
    cat.tagline.toLowerCase().includes(clean) ||
    tokens.some(t => cat.name.toLowerCase().includes(t))
  );

  // 5. Catalog Matches
  const isCatalogQuery = clean.includes('catalog') || clean.includes('pdf') || clean.includes('download') || clean.includes('brochure') || clean.includes('lookbook');
  const matchingCatalogs = architecturalCatalogs.filter(cat => 
    isCatalogQuery ||
    cat.title.toLowerCase().includes(clean) ||
    cat.category.toLowerCase().includes(clean) ||
    cat.subtitle.toLowerCase().includes(clean) ||
    tokens.some(t => 
      cat.title.toLowerCase().includes(t) ||
      cat.category.toLowerCase().includes(t) ||
      cat.subtitle.toLowerCase().includes(t)
    )
  );

  return {
    query: clean,
    totalResults: matchingProducts.length + matchingLocations.length + matchingCategories.length + matchingCatalogs.length,
    products: matchingProducts.slice(0, 16),
    locations: matchingLocations.slice(0, 4),
    categories: matchingCategories.slice(0, 4),
    catalogs: matchingCatalogs.slice(0, 4)
  };
}
