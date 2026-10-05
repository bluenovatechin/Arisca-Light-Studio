import React from 'react';
import { coverageAreas } from '../data/ariscaData';
import { collectionCategories } from '../data/collection';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer-v2">
      <div className="container">
        <div className="footer-hero">
          <p className="footer-tagline">
            A light <em>forever.</em>
          </p>
          <div className="footer-hero-cta">
            <p>Come and switch them on yourself — our studio on Jagatpur Road has hundreds of pieces lit and on display.</p>
            <a className="btn-pill btn-pill-solid" href="https://maps.google.com/?q=Arisca+Light+Studio+Ahmedabad" target="_blank" rel="noopener noreferrer">
              Get directions <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="footer-cols">
          <div className="footer-col-v2 footer-brand">
            <a href="/" aria-label="Arisca Light Studio — home">
              <img src="/assets/branding/arisca-300-x-150-px-Awv8y3X42eTqlgJQ.png" alt="Arisca Light Studio" width={150} height={75} />
            </a>
            <p>Decorative and architectural lighting for homes, studios and hospitality projects across Ahmedabad and Gujarat.</p>
            <div className="footer-social">
              <a href="https://www.instagram.com/arisca_light_studio" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={17} /></a>
              <a href="https://www.facebook.com/share/1MSMcUSAbj/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={17} /></a>
              <a href="https://wa.me/919898086656" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={17} /></a>
            </div>
          </div>

          <div className="footer-col-v2">
            <h2>Collection</h2>
            <ul>
              {collectionCategories.map((c) => (
                <li key={c.key}><a href={`/collection?cat=${c.key}`}>{c.label}</a></li>
              ))}
              <li><a href="/shop">Architectural downlights</a></li>
              <li><a href="/catalogs">PDF catalogs</a></li>
            </ul>
          </div>

          <div className="footer-col-v2">
            <h2>Studio</h2>
            <ul>
              <li><a href="/home-consultancy">Home lighting consultancy</a></li>
              <li><a href="/interior-designers">For architects & designers</a></li>
              <li><a href="/client-diaries">Client projects</a></li>
              <li><a href="/#lux-calculator">Lux calculator</a></li>
              <li><a href="/about">About Arisca</a></li>
              <li><a href="/wishlist">Saved lights</a></li>
            </ul>
          </div>

          <div className="footer-col-v2 footer-contact">
            <h2>Visit</h2>
            <p><MapPin size={16} aria-hidden="true" /> B-103, Money Plant High Street, Jagatpur Road, Ahmedabad, Gujarat 382470</p>
            <p><Clock size={16} aria-hidden="true" /> Mon – Sat, 10:00 am – 8:30 pm<br />Sunday by appointment</p>
            <p><Phone size={16} aria-hidden="true" /> <span><a href="tel:+919898086656">+91 98980 86656</a><br /><a href="tel:+919313802123">+91 93138 02123</a></span></p>
            <p><Mail size={16} aria-hidden="true" /> <a href="mailto:contact@ariscalightstudio.com">contact@ariscalightstudio.com</a></p>
          </div>
        </div>

        <div className="footer-areas">
          <span>Site visits across</span>
          {coverageAreas.map((a) => <span key={a.name} className="footer-area">{a.name}</span>)}
        </div>

        <div className="footer-base">
          <p>© {year} Arisca Light Studio, Ahmedabad.</p>
          <div className="footer-legal-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <span className="footer-dot">•</span>
            <a href="/terms-and-conditions">Terms & Conditions</a>
            <span className="footer-dot">•</span>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
