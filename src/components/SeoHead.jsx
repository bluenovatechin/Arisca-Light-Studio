import React, { useEffect } from 'react';
import { studioLocationInfo, seoFaqs } from '../data/ariscaData';

export default function SeoHead({
  title = 'Arisca Light Studio | Premium Architectural Lighting & Downlights in Ahmedabad',
  description = 'Shop luxury architectural lighting, anti-glare LOFY COB downlights, surface cylinders, and magnetic track lights in Ahmedabad. Free laser site measurement and lighting consultation at our Jagatpur Road studio.',
  keywords = 'architectural lighting ahmedabad, cob downlights, lofy lights, surface cylinder light, living room lighting, false ceiling light ahmedabad, arisca light studio, modern chandeliers ahmedabad, jagatpur road lighting store',
  canonicalUrl = 'https://www.ariscalightstudio.com/',
  ogImage = '/assets/branding/arisca-300-x-150-px-Awv8y3X42eTqlgJQ.png',
  schemaType = 'LightingStore',
  productData = null
}) {
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
    setMeta('og:url', canonicalUrl, true);
    setMeta('og:image', ogImage, true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // JSON-LD Structured Data
    const storeSchema = {
      '@context': 'https://schema.org',
      '@type': ['LightingStore', 'HomeGoodsStore'],
      '@id': 'https://www.ariscalightstudio.com/#store',
      name: 'Arisca Light Studio',
      alternateName: 'Arisca Architectural Lighting Ahmedabad',
      url: 'https://www.ariscalightstudio.com/',
      logo: 'https://www.ariscalightstudio.com/assets/branding/arisca-300-x-150-px-Awv8y3X42eTqlgJQ.png',
      image: 'https://www.ariscalightstudio.com/assets/branding/arisca-300-x-150-px-Awv8y3X42eTqlgJQ.png',
      telephone: studioLocationInfo.phone,
      email: studioLocationInfo.email,
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, Credit Card, UPI, Net Banking',
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
            name: 'Surface Cylinders',
            itemListElement: { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dual-Tone Surface Cylinders' } }
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
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: productData.title,
        image: productData.thumbnail,
        description: productData.descriptionText || productData.subtitle,
        sku: productData.id,
        brand: {
          '@type': 'Brand',
          name: productData.brand || 'LOFY'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: productData.rating || '4.8',
          reviewCount: productData.reviewCount || '28'
        }
      });
    }

    scriptTag.textContent = JSON.stringify(schemas);
  }, [title, description, keywords, canonicalUrl, ogImage, productData]);

  return null;
}
