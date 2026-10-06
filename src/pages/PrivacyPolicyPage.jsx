import React from 'react';
import SeoHead from '../components/SeoHead';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2, Clock, MapPin, Mail, Phone, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage({ onNavigate }) {
  const lastUpdated = 'October 5, 2026';

  return (
    <div className="legal-page-wrapper">
      <SeoHead
        title="Privacy Policy | Arisca Light Studio Ahmedabad"
        description="Read Arisca Light Studio's privacy policy. Learn how we collect, protect, and handle your data for lighting inquiries, site consultations, and studio services in Ahmedabad."
        keywords="arisca light studio privacy policy, customer data protection ahmedabad, lighting consultation terms"
        canonicalUrl="https://www.ariscalightstudio.com/#/privacy-policy"
      />

      <section className="legal-hero-header">
        <div className="container">
          <div className="legal-badge-wrap">
            <span className="section-badge">
              <ShieldCheck size={14} /> Transparency & Trust
            </span>
          </div>
          <h1 className="legal-main-title">Privacy Policy</h1>
          <p className="legal-main-subtitle">
            How Arisca Light Studio collects, protects, and respects your personal information when browsing our collections or booking on-site consultations.
          </p>
          <div className="legal-meta-row">
            <span className="legal-meta-item">
              <Clock size={14} /> Last Updated: {lastUpdated}
            </span>
            <span className="legal-meta-item">
              <MapPin size={14} /> Jagatpur Road, Ahmedabad, Gujarat
            </span>
          </div>
        </div>
      </section>

      <section className="section legal-content-section">
        <div className="container">
          <div className="legal-article-card">
            <div className="legal-toc-bar">
              <span className="toc-title">Quick Navigation:</span>
              <a href="#info-collect" className="toc-link">1. Information We Collect</a>
              <a href="#info-use" className="toc-link">2. How We Use Data</a>
              <a href="#whatsapp-consult" className="toc-link">3. WhatsApp & Site Consultations</a>
              <a href="#cookies" className="toc-link">4. Cookies & Analytics</a>
              <a href="#data-security" className="toc-link">5. Data Protection</a>
              <a href="#contact-dpo" className="toc-link">6. Contact Our Studio</a>
            </div>

            <article className="legal-body-prose">
              <section id="info-collect" className="legal-section-block">
                <h2>1. Information We Collect</h2>
                <p>
                  At <strong>Arisca Light Studio</strong>, we collect only the necessary details required to provide architectural lighting advice, prepare customized quotations, and fulfill on-site laser surveys. We do not sell, rent, or trade your personal data to third parties.
                </p>
                <ul>
                  <li><strong>Contact Details:</strong> Your full name, phone number (WhatsApp enabled), email address, and site locality in Ahmedabad (e.g., Bodakdev, Bopal, Sindhu Bhavan Road).</li>
                  <li><strong>Project & Architectural Data:</strong> False ceiling height, room dimensions, blueprint files, or room photos shared voluntarily during lighting consultancy requests.</li>
                  <li><strong>Inquiry Cart Selections:</strong> Luminaire models, finishes (e.g., Black + Rose Gold), and quantities saved in your inquiry basket.</li>
                  <li><strong>Technical Browsing Data:</strong> Anonymized browser type, device category, and pages viewed, used solely to ensure fast page load performance.</li>
                </ul>
              </section>

              <section id="info-use" className="legal-section-block">
                <h2>2. How We Use Your Information</h2>
                <p>We process your information for the following specific purposes:</p>
                <ul>
                  <li>To schedule complimentary on-site laser measurements and photometric planning at your residence or commercial premises.</li>
                  <li>To generate itemized lighting estimates, architect trade quotations, and product specification sheets.</li>
                  <li>To coordinate white-glove electrical installation and driver ballast integration with your electrical contractors.</li>
                  <li>To provide after-sales support under our <strong>2-Year Comprehensive Studio Warranty</strong>.</li>
                </ul>
              </section>

              <section id="whatsapp-consult" className="legal-section-block">
                <h2>3. WhatsApp & Direct Communication</h2>
                <p>
                  Our website features direct WhatsApp integration to facilitate real-time lighting consultations with our lighting engineers. When you initiate a chat:
                </p>
                <ul>
                  <li>You voluntarily connect with our official studio number (<strong>+91 98980 86656</strong>).</li>
                  <li>Messages, blueprints, and quotations exchanged via WhatsApp are subject to WhatsApp’s end-to-end encryption and standard privacy policy.</li>
                  <li>We never send unsolicited promotional spam. You may request to cease communication at any time by simply informing our team.</li>
                </ul>
              </section>

              <section id="cookies" className="legal-section-block">
                <h2>4. Cookies & Local Storage</h2>
                <p>
                  We use lightweight cookies and browser <code>localStorage</code> strictly to enhance your browsing experience:
                </p>
                <ul>
                  <li><strong>Essential Storage:</strong> Preserving your active inquiry cart items and saved favorites across browser sessions.</li>
                  <li><strong>Performance Analytics:</strong> Aggregated, privacy-conscious metrics to identify slow pages and ensure 60fps mobile responsiveness.</li>
                  <li>You can manage or decline non-essential cookies via our on-screen Cookie Consent Banner at any time.</li>
                </ul>
              </section>

              <section id="data-security" className="legal-section-block">
                <h2>5. Data Protection & Retention</h2>
                <p>
                  We implement industry-standard encryption, strict access controls, and secure socket layer (HTTPS) protocols. Your project consultation notes and architectural blueprints are retained only for the duration of your project and the subsequent 2-year warranty period.
                </p>
              </section>

              <section id="contact-dpo" className="legal-section-block">
                <h2>6. Contacting Our Studio</h2>
                <p>
                  If you have any questions regarding your data or wish to update or delete your contact records, please contact:
                </p>
                <div className="legal-contact-box">
                  <h3>Arisca Light Studio</h3>
                  <p><MapPin size={16} className="gold-text" /> B - 103, Money Plant High Street, Jagatpur Road, Ahmedabad, Gujarat 382470</p>
                  <p><Phone size={16} className="gold-text" /> Phone: <a href="tel:+919898086656">+91 98980 86656</a></p>
                  <p><Mail size={16} className="gold-text" /> Email: <a href="mailto:contact@ariscalightstudio.com">contact@ariscalightstudio.com</a></p>
                </div>
              </section>
            </article>

            <div className="legal-card-foot">
              <button className="btn btn-secondary" onClick={() => onNavigate('/')}>
                <ArrowLeft size={16} /> Return to Home
              </button>
              <button className="btn btn-primary" onClick={() => onNavigate('/contact')}>
                Visit Experience Studio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
