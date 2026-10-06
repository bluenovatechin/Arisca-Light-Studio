import React, { useState, useRef } from 'react';
import { useCart } from '../context/CartContext';
import SeoHead from '../components/SeoHead';
import { validateEmail, validatePhone, validateRequired, isSpamSubmission } from '../utils/formValidation';
import {
  Sparkles,
  Layers,
  Box,
  Users,
  CheckCircle2,
  FileText,
  Phone,
  ShieldCheck,
  Award,
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import { openWhatsApp, formMessage } from '../utils/whatsapp';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function InteriorDesignersPage() {
  const { showToast } = useCart();
  const mountTime = useRef(Date.now());

  const [formData, setFormData] = useState({
    name: '',
    studio: '',
    email: '',
    phone: '',
    portfolio: '',
    projectNeeds: '',
    company_hp: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Spam bot check
    if (isSpamSubmission(formData.company_hp, mountTime.current)) {
      setIsSubmitted(true);
      return;
    }

    const newErrors = {};
    if (!validateRequired(formData.name, 2)) {
      newErrors.name = 'Please provide your full name.';
    }
    if (!validateRequired(formData.studio, 2)) {
      newErrors.studio = 'Please enter your studio or firm name.';
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please provide a valid professional email.';
    }
    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please provide a valid 10-digit mobile number.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
    openWhatsApp(formMessage('Trade partner application', [
      ['Name', formData.name],
      ['Studio / firm', formData.studio],
      ['Phone', formData.phone],
      ['Email', formData.email],
      ['Portfolio', formData.portfolio],
      ['Project needs', formData.projectNeeds]
    ]));
  };

  return (
    <div className="trade-page-wrapper">
      <SeoHead
        title="For Architects & Interior Designers | Arisca Trade Program Ahmedabad"
        description="Partner with Arisca Light Studio. Unlock trade discounts, physical sample boxes, 3D/IES photometric files, and dedicated on-site project coordination for design firms."
        keywords="architect trade discount lighting ahmedabad, interior designer lighting program, photometric files ahmedabad, custom chandelier fabrication"
        canonicalUrl="https://www.ariscalightstudio.com/#/interior-designers"
      />

      {/* Hero Header */}
      <section className="trade-hero-header">
        <div className="container">
          <div className="trade-hero-badge-wrap">
            <span className="section-badge pulse-badge">
              <Sparkles size={14} /> Trade & Architecture Portal
            </span>
          </div>
          <h1 className="trade-main-title">
            Empowering Interior Architects & <span className="text-gold-gradient">Designers</span>
          </h1>
          <p className="trade-main-subtitle">
            Partner with Arisca Light Studio to unlock trade pricing, bespoke luminaire customisation, physical sample kits, and turnkey installation support for your residential and commercial projects.
          </p>

          {/* Quick Trade Perks Bar */}
          <div className="trade-stats-bar">
            <div className="trade-stat-item">
              <span className="trade-stat-val">Up to 35%</span>
              <span className="trade-stat-lbl">Trade Tier Discounts</span>
            </div>
            <div className="trade-stat-divider" />
            <div className="trade-stat-item">
              <span className="trade-stat-val">Free</span>
              <span className="trade-stat-lbl">Physical Finish Swatches</span>
            </div>
            <div className="trade-stat-divider" />
            <div className="trade-stat-item">
              <span className="trade-stat-val">IES & CAD</span>
              <span className="trade-stat-lbl">3D Photometric Models</span>
            </div>
            <div className="trade-stat-divider" />
            <div className="trade-stat-item">
              <span className="trade-stat-val">Turnkey</span>
              <span className="trade-stat-lbl">On-Site Commissioning</span>
            </div>
          </div>
        </div>
      </section>

      {/* Perks Grid */}
      <section className="section trade-perks-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-badge">Partner Advantages</span>
            <h2 className="section-title">Why Leading Design Studios Partner with Arisca</h2>
          </div>

          <div className="trade-features-grid">
            <div className="trade-feature-card">
              <div className="trade-icon-circle">
                <Award size={28} className="gold-text" />
              </div>
              <h3>Exclusive Trade Margins</h3>
              <p>
                Generous trade pricing, volume milestone incentives, and transparent itemized estimates that keep your client budgets on track.
              </p>
            </div>

            <div className="trade-feature-card">
              <div className="trade-icon-circle">
                <Box size={28} className="gold-text" />
              </div>
              <h3>Physical Sample Box</h3>
              <p>
                Borrow physical luminaire samples, dual-tone finish rings (Black, Rose Gold, Brass, Chrome), and optical louver swatches for your client moodboards.
              </p>
            </div>

            <div className="trade-feature-card">
              <div className="trade-icon-circle">
                <FileText size={28} className="gold-text" />
              </div>
              <h3>3D & Photometric Files</h3>
              <p>
                Full access to IES photometric data, beam distribution curves, and CAD false ceiling cutout files to integrate directly into your 3D renders.
              </p>
            </div>

            <div className="trade-feature-card">
              <div className="trade-icon-circle">
                <Users size={28} className="gold-text" />
              </div>
              <h3>Dedicated Project Manager</h3>
              <p>
                A single point of technical contact who coordinates laser site measurements, deliveries, and white-glove installation with your general contractors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Registration Form */}
      <section className="section trade-form-section">
        <div className="container">
          <div className="trade-form-card">
            <div className="form-card-header text-center">
              <span className="section-badge">
                <CheckCircle2 size={14} /> Join The Program
              </span>
              <h2>Register as an Arisca Trade Partner</h2>
              <p>
                Fill out the application below to receive our digital Trade Catalog and schedule a private showroom walkthrough with our team.
              </p>
            </div>

            {isSubmitted ? (
              <div className="form-success-box text-center">
                <CheckCircle2 size={54} className="gold-text mx-auto" />
                <h3>Almost there, {formData.name}!</h3>
                <p className="success-subtext">We've opened WhatsApp with your details filled in. Press send there and our team will reply shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="trade-form" noValidate toolname="apply_trade_partner" tooldescription="Apply to the Arisca trade program for architects and interior designers. Opens WhatsApp with the studio details filled in.">
                {/* Spam Bot Honeypot */}
                <div style={{ display: 'none', position: 'absolute', left: '-9999px' }} aria-hidden="true">
                  <label htmlFor="tp-hp">Leave empty</label>
                  <input
                    type="text"
                    id="tp-hp"
                    name="company_hp"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.company_hp}
                    onChange={(e) => setFormData({ ...formData, company_hp: e.target.value })}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="tp-name">Designer / Architect Name *</label>
                    <input
                      type="text"
                      id="tp-name"
                      required
                      placeholder="e.g. Ar. Bhavin Parikh"
                      className={errors.name ? 'input-invalid' : ''}
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: null });
                      }}
                    />
                    {errors.name && <span className="form-error-msg"><AlertCircle size={12} /> {errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="tp-studio">Design Studio / Firm Name *</label>
                    <input
                      type="text"
                      id="tp-studio"
                      required
                      placeholder="e.g. Studio Parikh Architects"
                      className={errors.studio ? 'input-invalid' : ''}
                      value={formData.studio}
                      onChange={(e) => {
                        setFormData({ ...formData, studio: e.target.value });
                        if (errors.studio) setErrors({ ...errors, studio: null });
                      }}
                    />
                    {errors.studio && <span className="form-error-msg"><AlertCircle size={12} /> {errors.studio}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="tp-email">Professional Email *</label>
                    <input
                      type="email"
                      id="tp-email"
                      required
                      placeholder="architect@studioparikh.com"
                      className={errors.email ? 'input-invalid' : ''}
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                    />
                    {errors.email && <span className="form-error-msg"><AlertCircle size={12} /> {errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="tp-phone">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      id="tp-phone"
                      required
                      placeholder="+91 98980 XXXXX"
                      className={errors.phone ? 'input-invalid' : ''}
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: null });
                      }}
                    />
                    {errors.phone && <span className="form-error-msg"><AlertCircle size={12} /> {errors.phone}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="tp-portfolio">Studio Website / Instagram Portfolio Link</label>
                  <input
                    type="url"
                    id="tp-portfolio"
                    placeholder="https://instagram.com/yourstudiowork"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="tp-needs">Current Project Requirements</label>
                  <textarea
                    id="tp-needs"
                    rows={3}
                    placeholder="Tell us about upcoming residential villas, boutique penthouses, or commercial spaces you are designing..."
                    value={formData.projectNeeds}
                    onChange={(e) => setFormData({ ...formData, projectNeeds: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg btn-block">
                  <WhatsAppIcon size={18} /> Send application on WhatsApp
                </button>
              </form>
            )}

            <div className="trade-form-footer">
              <span>Prefer immediate trade discussion?</span>
              <a
                href="https://wa.me/919898086656?text=Hello%20Dev%20Patel,%20I%20am%20an%20architect%20interested%20in%20the%20Arisca%20Trade%20Program."
                target="_blank"
                rel="noopener noreferrer"
                className="trade-direct-link"
              >
                <WhatsAppIcon size={16} /> WhatsApp Trade Desk Direct
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
