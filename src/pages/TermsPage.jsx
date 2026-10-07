import React from 'react';
import SeoHead from '../components/SeoHead';
import { FileText, ShieldCheck, CheckCircle2, Clock, MapPin, Mail, Phone, ArrowLeft, AlertCircle } from 'lucide-react';

export default function TermsPage({ onNavigate }) {
  const lastUpdated = 'October 5, 2026';

  return (
    <div className="legal-page-wrapper">
      <SeoHead
        title="Terms & Conditions | Arisca Light Studio Ahmedabad"
        description="Review the terms and conditions for architectural lighting supply, custom chandelier fabrication, on-site laser surveys, and warranty policies by Arisca Light Studio."
        keywords="arisca terms and conditions, lighting warranty ahmedabad, trade discount terms, luminaire supply agreement"
        canonicalUrl="/terms-and-conditions"
      />

      <section className="legal-hero-header">
        <div className="container">
          <div className="legal-badge-wrap">
            <span className="section-badge">
              <FileText size={14} /> Studio Agreement
            </span>
          </div>
          <h1 className="legal-main-title">Terms & Conditions</h1>
          <p className="legal-main-subtitle">
            Guidelines and legal provisions governing fixture specifications, quotations, complimentary site surveys, and studio warranty at Arisca Light Studio.
          </p>
          <div className="legal-meta-row">
            <span className="legal-meta-item">
              <Clock size={14} /> Effective Date: {lastUpdated}
            </span>
            <span className="legal-meta-item">
              <MapPin size={14} /> Jurisdiction: Ahmedabad, Gujarat
            </span>
          </div>
        </div>
      </section>

      <section className="section legal-content-section">
        <div className="container">
          <div className="legal-article-card">
            <div className="legal-toc-bar">
              <span className="toc-title">Quick Navigation:</span>
              <a href="#scope-services" className="toc-link">1. Scope of Services</a>
              <a href="#estimates-pricing" className="toc-link">2. Quotations & Pricing</a>
              <a href="#site-measurements" className="toc-link">3. On-Site Laser Surveys</a>
              <a href="#warranty-policy" className="toc-link">4. 2-Year Studio Warranty</a>
              <a href="#trade-program" className="toc-link">5. Architect Trade Terms</a>
              <a href="#jurisdiction" className="toc-link">6. Governing Law</a>
            </div>

            <article className="legal-body-prose">
              <section id="scope-services" className="legal-section-block">
                <h2>1. Scope of Studio Services</h2>
                <p>
                  Arisca Light Studio provides luxury architectural and decorative lighting luminaires, photometric consultancy, false ceiling beam layouts, and white-glove commissioning across Ahmedabad and Gujarat. By using our website, submitting an inquiry basket, or requesting a site visit, you agree to these Terms.
                </p>
              </section>

              <section id="estimates-pricing" className="legal-section-block">
                <h2>2. Quotations, Pricing & Catalog Items</h2>
                <ul>
                  <li><strong>Pricing:</strong> Prices are not listed on this website. Every quotation is prepared by our lighting team after a consultation, based on the fixtures, finishes and quantities your project needs.</li>
                  <li><strong>Custom & Bespoke Pieces:</strong> High-end crystal chandeliers, custom brass suspensions, and bespoke track profiles are quoted individually based on customized dimensions and finish options.</li>
                  <li><strong>Quotation Validity:</strong> Formal proforma invoices and trade quotes issued by our studio remain valid for 30 calendar days from the date of issuance.</li>
                </ul>
              </section>

              <section id="site-measurements" className="legal-section-block">
                <h2>3. Complimentary On-Site Laser Surveys</h2>
                <p>
                  Our certified lighting engineers provide complimentary site visits across Ahmedabad (including Bodakdev, Ambli, Sindhu Bhavan Road, Bopal, Science City, and Satellite):
                </p>
                <ul>
                  <li><strong>Client Availability:</strong> The homeowner, authorized representative, or interior designer must be present during the scheduled laser measurement.</li>
                  <li><strong>Electrical Readiness:</strong> False ceiling framing or conduit pre-wiring should be accessible to enable precise beam angle calculations and driver placement mapping.</li>
                  <li><strong>No Purchase Obligation:</strong> The laser survey and preliminary LUX recommendation carry zero mandatory purchase commitment.</li>
                </ul>
              </section>

              <section id="warranty-policy" className="legal-section-block">
                <h2>4. 2-Year Comprehensive Studio Warranty</h2>
                <p>
                  All authentic LOFY architectural downlights, surface cylinders, and power supplies supplied by Arisca Light Studio carry a <strong>2-Year Comprehensive Warranty</strong>:
                </p>
                <ul>
                  <li><strong>Coverage:</strong> Covers LED chip failure, lumen degradation exceeding 10%, driver power failure, and structural housing defects under normal indoor operating conditions.</li>
                  <li><strong>Exclusions:</strong> Excludes damage resulting from external voltage surges beyond standard tolerances, water ingress on non-IP rated indoor fixtures, or unauthorized third-party modifications.</li>
                  <li><strong>Replacement:</strong> In the unlikely event of driver or component failure, our technical team provides rapid on-site replacement within 48 business hours across Ahmedabad.</li>
                </ul>
              </section>

              <section id="trade-program" className="legal-section-block">
                <h2>5. Architect & Interior Designer Trade Terms</h2>
                <p>
                  Members of the Arisca Trade Program receive exclusive tiered trade discounts, physical finish sample kits, and CAD/IES photometric files. Trade pricing is strictly confidential and reserved for qualified design professionals and their registered projects.
                </p>
              </section>

              <section id="jurisdiction" className="legal-section-block">
                <h2>6. Intellectual Property & Governing Law</h2>
                <p>
                  All photography, lookbooks, 3D renders, and technical descriptions featured on this website are the intellectual property of Arisca Light Studio. Any disputes arising in connection with our services shall be subject to the exclusive jurisdiction of the competent courts in <strong>Ahmedabad, Gujarat, India</strong>.
                </p>
                <div className="legal-contact-box">
                  <h4>Studio Legal Desk</h4>
                  <p><MapPin size={16} className="gold-text" /> B - 103, Money Plant High Street, Jagatpur Road, Ahmedabad, Gujarat 382470</p>
                  <p><Phone size={16} className="gold-text" /> Telephone: <a href="tel:+919898086656">+91 98980 86656</a></p>
                  <p><Mail size={16} className="gold-text" /> Legal Inquiries: <a href="mailto:contact@ariscalightstudio.com">contact@ariscalightstudio.com</a></p>
                </div>
              </section>
            </article>

            <div className="legal-card-foot">
              <button className="btn btn-secondary" onClick={() => onNavigate('/')}>
                <ArrowLeft size={16} /> Return to Home
              </button>
              <button className="btn btn-primary" onClick={() => onNavigate('/collection')}>
                Explore Lighting Collections
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
