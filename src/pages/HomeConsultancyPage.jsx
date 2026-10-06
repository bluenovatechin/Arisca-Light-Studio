import React, { useState, useRef } from 'react';
import { useCart } from '../context/CartContext';
import SeoHead from '../components/SeoHead';
import { validateEmail, validatePhone, validateRequired, isSpamSubmission } from '../utils/formValidation';
import {
  Sparkles,
  Calendar,
  CheckCircle2,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  Sliders,
  Compass,
  ArrowRight,
  Zap,
  Check,
  Eye,
  FileText,
  AlertCircle
} from 'lucide-react';
import { openWhatsApp, formMessage } from '../utils/whatsapp';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function HomeConsultancyPage({ onNavigate }) {
  const { showToast } = useCart();
  const mountTime = useRef(Date.now());

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Luxury Apartment (3BHK / 4BHK)',
    locality: 'Bodakdev, Ahmedabad',
    ceilingHeight: '10 ft',
    preferredDate: '',
    message: '',
    company_hp: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Bot check
    if (isSpamSubmission(formData.company_hp, mountTime.current)) {
      setIsSubmitted(true);
      return;
    }

    const newErrors = {};
    if (!validateRequired(formData.name, 2)) {
      newErrors.name = 'Please provide your full name (at least 2 characters).';
    }
    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please provide a valid 10-digit mobile number.';
    }
    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!validateRequired(formData.locality, 3)) {
      newErrors.locality = 'Please specify your site locality in Ahmedabad.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
    openWhatsApp(formMessage('Home lighting consultation request', [
      ['Name', formData.name],
      ['Phone', formData.phone],
      ['Email', formData.email],
      ['Project', formData.projectType],
      ['Locality', formData.locality],
      ['Ceiling height', formData.ceilingHeight],
      ['Preferred date', formData.preferredDate],
      ['Message', formData.message]
    ]));
  };

  const projectTypes = [
    'Residential Villa / Bungalow',
    'Luxury Apartment (3BHK / 4BHK)',
    'Penthouse / Duplex',
    'Commercial Office / Showroom',
    'Renovation & Upgrades'
  ];

  return (
    <div className="consultancy-page-wrapper">
      <SeoHead
        title="Home Lighting Consultancy in Ahmedabad | Free On-Site Lux & Beam Planning"
        description="Book a free on-site architectural lighting consultation in Ahmedabad. Our engineers bring laser meters and photometrics to design anti-glare layouts for luxury villas and penthouses."
        keywords="home lighting consultancy ahmedabad, architectural lighting engineer ahmedabad, lux calculator ahmedabad, false ceiling lighting plan"
        canonicalUrl="https://www.ariscalightstudio.com/#/home-consultancy"
      />

      {/* Hero Header */}
      <section className="consultancy-hero-header">
        <div className="container">
          <div className="consultancy-badge-wrap">
            <span className="section-badge pulse-badge">
              <Sparkles size={14} /> Complimentary Studio Service
            </span>
          </div>
          <h1 className="consultancy-main-title">
            Bring Perfect Lighting Into Your Home – <span className="text-gold-gradient">Free Consultation</span>
          </h1>
          <p className="consultancy-main-subtitle">
            Say goodbye to harsh glare and uneven shadows. Our lighting engineers visit your site in Ahmedabad with laser meters and photometric samples to design your bespoke lighting layout.
          </p>

          {/* Trust Counter Chips */}
          <div className="consultancy-trust-row">
            <div className="consultancy-trust-chip">
              <CheckCircle2 size={16} className="gold-text" />
              <span>Free On-Site Laser Survey</span>
            </div>
            <div className="consultancy-trust-chip">
              <ShieldCheck size={16} className="gold-text" />
              <span>Anti-Glare UGR &lt; 19 Certified</span>
            </div>
            <div className="consultancy-trust-chip">
              <Award size={16} className="gold-text" />
              <span>Zero Purchase Obligation</span>
            </div>
          </div>

          <div className="consultancy-hero-ctas">
            <a href="#booking-form-section" className="btn btn-primary btn-lg">
              <Calendar size={18} /> Book Free Site Visit Below
            </a>
            <a
              href="https://wa.me/919898086656?text=Hello%20Arisca%20Light%20Studio,%20I%20would%20like%20to%20schedule%20an%20in-home%20lighting%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <WhatsAppIcon size={18} /> WhatsApp Quick Book
            </a>
          </div>
        </div>
      </section>

      {/* 3-Phase Process Showcase */}
      <section className="section process-detail-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-badge">
              <Compass size={14} /> How It Works
            </span>
            <h2 className="section-title">The Three-Phase Illumination Journey</h2>
            <p className="section-subtitle max-w-600">
              From the initial blueprint sketch to the final dimming calibration, here is how we bring architectural lighting into your residence.
            </p>
          </div>

          <div className="detailed-phases-list">
            {/* Phase 1 */}
            <div className="phase-card">
              <div className="phase-content">
                <span className="phase-badge">Phase 01</span>
                <h3>Initial Design & Lifestyle Brief</h3>
                <p>
                  We sit down with you and your family or interior designer to understand daily habits, ceiling elevations, furniture placement, and natural sunlight orientation.
                </p>
                <p>
                  We map out primary lighting moods: cozy warm tones (2700K–3000K) for lounges and bedrooms, versus crisp neutral illumination (4000K) for culinary and work zones.
                </p>
                <div className="phase-checklist">
                  <div className="phase-check-item">
                    <CheckCircle2 size={18} className="gold-text flex-shrink-0" />
                    <span>Blueprint & false ceiling elevation analysis</span>
                  </div>
                  <div className="phase-check-item">
                    <CheckCircle2 size={18} className="gold-text flex-shrink-0" />
                    <span>Atmospheric color temperature zoning (CCT)</span>
                  </div>
                </div>
              </div>
              <div className="phase-image-wrap">
                <img
                  src="/assets/optimized/projects/dsc09758-a01hkH3Y9uhcKEc0.webp"
                  alt="Lighting Consultation Step 1"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Phase 2 */}
            <div className="phase-card reverse">
              <div className="phase-content">
                <span className="phase-badge">Phase 02</span>
                <h3>Laser Site Measurement & Beam Mapping</h3>
                <p>
                  No guesswork. Our engineers bring precision laser measurement tools to calculate exact false ceiling cutout spacing, beam dispersion angles, and transformer driver locations.
                </p>
                <p>
                  We deliver a comprehensive wiring scheme directly to your electrical contractor, preventing costly on-site ceiling rework.
                </p>
                <div className="phase-checklist">
                  <div className="phase-check-item">
                    <CheckCircle2 size={18} className="gold-text flex-shrink-0" />
                    <span>Laser-accurate ceiling cutout markings</span>
                  </div>
                  <div className="phase-check-item">
                    <CheckCircle2 size={18} className="gold-text flex-shrink-0" />
                    <span>Hotspot prevention & beam overlap testing</span>
                  </div>
                </div>
              </div>
              <div className="phase-image-wrap">
                <img
                  src="/assets/optimized/projects/dsc09738-Zu3m7g53jinktiDJ.webp"
                  alt="Laser Site Measurement Step 2"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Phase 3 */}
            <div className="phase-card">
              <div className="phase-content">
                <span className="phase-badge">Phase 03</span>
                <h3>White-Glove Installation & Commissioning</h3>
                <p>
                  Our certified installation technicians handle the complete mounting, wiring, and driver ballast connections with surgical care.
                </p>
                <p>
                  Every switch leg, smart dimming module, and accent beam is tested and focused under night-time conditions to guarantee flawless ambiance.
                </p>
                <div className="phase-checklist">
                  <div className="phase-check-item">
                    <CheckCircle2 size={18} className="gold-text flex-shrink-0" />
                    <span>Dust-free certified electrical mounting</span>
                  </div>
                  <div className="phase-check-item">
                    <CheckCircle2 size={18} className="gold-text flex-shrink-0" />
                    <span>Night-time optical focusing & angle adjustment</span>
                  </div>
                </div>
              </div>
              <div className="phase-image-wrap">
                <img
                  src="/assets/optimized/projects/dsc09743-qZwb0UB5B2OImJ70.webp"
                  alt="White Glove Installation Step 3"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Booking Form Section */}
      <section id="booking-form-section" className="section booking-form-section">
        <div className="container">
          <div className="booking-form-grid">
            {/* Form */}
            <div className="booking-form-card">
              <div className="form-card-header">
                <span className="section-badge">
                  <Calendar size={14} /> Schedule Now
                </span>
                <h2>Book Your In-Home Consultation</h2>
                <p>
                  Fill out the form below. An Arisca lighting consultant will connect with you to confirm your visit date.
                </p>
              </div>

              {isSubmitted ? (
                <div className="form-success-box">
                  <CheckCircle2 size={48} className="gold-text" />
                  <h3>Almost there, {formData.name}!</h3>
                  <p>We've opened WhatsApp with your details filled in. Press send there and our team will reply shortly.</p>
                  <button
                    className="btn btn-secondary mt-3"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="site-consult-form" noValidate toolname="request_home_consultation" tooldescription="Request an in-home lighting consultation in Ahmedabad (site visit, laser measurement, lighting layout). Opens WhatsApp with the details filled in.">
                  {/* Spam Bot Honeypot */}
                  <div style={{ display: 'none', position: 'absolute', left: '-9999px' }} aria-hidden="true">
                    <label htmlFor="f-hp">Leave empty</label>
                    <input
                      type="text"
                      id="f-hp"
                      name="company_hp"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.company_hp}
                      onChange={(e) => setFormData({ ...formData, company_hp: e.target.value })}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="f-name">Your Full Name *</label>
                      <input
                        type="text"
                        id="f-name"
                        required
                        placeholder="e.g. Adarsh Patel"
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
                      <label htmlFor="f-phone">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        id="f-phone"
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

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="f-email">Email Address</label>
                      <input
                        type="email"
                        id="f-email"
                        placeholder="yourname@gmail.com"
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
                      <label htmlFor="f-locality">Site Locality in Ahmedabad *</label>
                      <input
                        type="text"
                        id="f-locality"
                        required
                        placeholder="e.g. Bodakdev, Bopal, Sindhu Bhavan"
                        className={errors.locality ? 'input-invalid' : ''}
                        value={formData.locality}
                        onChange={(e) => {
                          setFormData({ ...formData, locality: e.target.value });
                          if (errors.locality) setErrors({ ...errors, locality: null });
                        }}
                      />
                      {errors.locality && <span className="form-error-msg"><AlertCircle size={12} /> {errors.locality}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="f-ptype">Project Scope</label>
                      <select
                        id="f-ptype"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      >
                        <option value="Residential Villa / Bungalow">Residential Villa / Bungalow</option>
                        <option value="Luxury Apartment (3BHK / 4BHK)">Luxury Apartment (3BHK / 4BHK)</option>
                        <option value="Penthouse / Duplex">Penthouse / Duplex</option>
                        <option value="Commercial Office / Showroom">Commercial Office / Showroom</option>
                        <option value="Renovation & Upgrades">Renovation & Upgrades</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="f-date">Preferred Date</label>
                      <input
                        type="date"
                        id="f-date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="f-msg">Special Notes or Questions</label>
                    <textarea
                      id="f-msg"
                      rows={3}
                      placeholder="e.g. Ceiling heights, false ceiling drawing ready, electrical pre-wiring timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg btn-block">
                    <WhatsAppIcon size={18} /> Request consultation on WhatsApp
                  </button>
                </form>
              )}
            </div>

            {/* Quick Contact & Studio Card */}
            <div className="consult-perks-sidebar">
              <div className="perks-card">
                <h3>Why Homeowners Choose Arisca</h3>
                <ul className="perks-list">
                  <li>
                    <Award size={18} className="gold-text flex-shrink-0" />
                    <div>
                      <strong>Ahmedabad Local Team</strong>
                      <p>Fast turnaround on site visits across SG Highway, Bopal, Bodakdev, and Satellite.</p>
                    </div>
                  </li>
                  <li>
                    <ShieldCheck size={18} className="gold-text flex-shrink-0" />
                    <div>
                      <strong>UGR &lt; 19 Anti-Glare Standards</strong>
                      <p>Deep-set cones ensure you admire the illumination, not the blinding bulb.</p>
                    </div>
                  </li>
                  <li>
                    <Sliders size={18} className="gold-text flex-shrink-0" />
                    <div>
                      <strong>Exact LUX Level Calculations</strong>
                      <p>No dark corners or over-lit harshness. Perfectly balanced illumination.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="studio-address-box">
                <h4>Prefer to Visit the Showroom?</h4>
                <p>Explore fixtures live in our Jagatpur studio:</p>
                <div className="studio-info-row">
                  <MapPin size={16} className="gold-text" />
                  <span>B - 103, Money Plant High Street, Jagatpur Rd, Ahmedabad</span>
                </div>
                <div className="studio-info-row">
                  <Clock size={16} className="gold-text" />
                  <span>Mon – Sat: 10:00 am – 8:30 pm</span>
                </div>
                <div className="studio-info-row">
                  <Phone size={16} className="gold-text" />
                  <span>+91 98980 86656</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
