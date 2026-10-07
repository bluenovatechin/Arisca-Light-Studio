import React, { useEffect } from 'react';
import { studioLocationInfo, seoFaqs } from '../data/ariscaData';
import { SITE_URL, getAbsoluteUrl, DEFAULT_OG_IMAGE, GOOGLE_LOGO_IMAGE } from '../utils/siteConfig';

export default function SeoHead({
  title = 'Arisca Light Studio | Premium Architectural Lighting & Downlights in Ahmedabad',
  description = 'Shop luxury architectural lighting, anti-glare LOFY COB downlights, surface cylinders, and magnetic track lights in Ahmedabad. Free laser site measurement and lighting consultation at our Jagatpur Road studio.',
  keywords = 'architectural lighting ahmedabad, cob downlights, lofy lights, surface cylinder light, living room lighting, false ceiling light ahmedabad, arisca light studio, modern chandeliers ahmedabad, jagatpur road lighting store',
  canonicalUrl,
  ogImage,
  schemaType = 'LightingStore',
  productData = null
}) {
  const resolvedCanonical = getAbsoluteUrl(canonicalUrl || '/');
  const resolvedOgImage = getAbsoluteUrl(ogImage || DEFAULT_OG_IMAGE);

  useEffect(() => {
    // Dynamic document title
    document.title = title;

    // Helper to set or update meta tag
    const setMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('keywords', keywords);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:url', resolvedCanonical, true);
    setMeta('og:image', resolvedOgImage, true);
    setMeta('og:image:secure_url', resolvedOgImage, true);
    setMeta('og:image:type', resolvedOgImage.endsWith('.png') ? 'image/png' : 'image/jpeg', true);
    setMeta('og:image:width', '1200', true);
    setMeta('og:image:height', '630', true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', resolvedOgImage);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', resolvedCanonical);

    // JSON-LD Structured Data
    const storeSchema = {
      '@context': 'https://schema.org',
      '@type': ['LightingStore', 'HomeGoodsStore', 'Organization'],
      '@id': `${SITE_URL}/#store`,
      name: 'Arisca Light Studio',
      alternateName: 'Arisca Architectural Lighting Ahmedabad',
      url: `${SITE_URL}/`,
      logo: GOOGLE_LOGO_IMAGE,
      image: resolvedOgImage,
      telephone: studioLocationInfo.phone,
      email: studioLocationInfo.email,
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, Credit Card, UPI, Net Banking',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: studioLocationInfo.address,
        addressLocality: studioLocationInfo.city,
        addressRegion: studioLocationInfo.state,
        postalCode: studioLocationInfo.postalCode,
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '23.1098',
        longitude: '72.5385'
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '10:00',
          closes: '20:30'
        }
      ],
      areaServed: [
        'Ahmedabad',
        'Bodakdev',
        'Sindhu Bhavan Road',
        'Ambli',
        'Shela',
        'Bopal',
        'Science City',
        'Satellite',
        'Gota',
        'Gandhinagar',
        'Gujarat'
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Architectural Lighting Fixtures',
        itemListElement: [
          {
            '@type': 'OfferCatalog',
            name: 'COB Downlights',
            itemListElement: { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LOFY & Grace Anti-Glare COB Downlights' } }
          },
          {
            '@type': 'OfferCatalog',
            name: 'Luxury Chandeliers & Suspensions',
            itemListElement: { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sculpted Pendants & Crystal Chandeliers' } }
          }
        ]
      }
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: seoFaqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a
        }
      }))
    };

    let scriptTag = document.getElementById('arisca-seo-jsonld');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'arisca-seo-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemas = [storeSchema, faqSchema];
    if (productData) {
      const productImg = getAbsoluteUrl(
        productData.thumbnail ||
        productData.images?.[0]?.url ||
        productData.studioImage ||
        productData.sceneImage ||
        DEFAULT_OG_IMAGE
      );

      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: productData.title,
        image: [productImg],
        description: productData.descriptionText || productData.subtitle || `${productData.title} by Arisca Light Studio`,
        sku: String(productData.id || productData.no || productData.sku || ''),
        mpn: String(productData.sku || productData.no || productData.id || ''),
        brand: {
          '@type': 'Brand',
          name: productData.brand || 'Arisca Light Studio'
        },
        category: productData.category || productData.type || 'Architectural Lighting',
        offers: {
          '@type': 'Offer',
          url: resolvedCanonical,
          priceCurrency: 'INR',
          price: productData.price || '0',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: 'Arisca Light Studio'
          }
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: productData.rating || '4.9',
          reviewCount: productData.reviewCount || '32'
        }
      });
    }

    scriptTag.textContent = JSON.stringify(schemas);
  }, [title, description, keywords, resolvedCanonical, resolvedOgImage, productData]);

  return null;
}
