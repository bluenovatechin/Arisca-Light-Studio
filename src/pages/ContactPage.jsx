import React, { useState, useRef } from 'react';
import { siteInfo } from '../data/ariscaData';
import { useCart } from '../context/CartContext';
import SeoHead from '../components/SeoHead';
import { validateEmail, validatePhone, validateRequired, isSpamSubmission } from '../utils/formValidation';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check,
  AlertCircle
} from 'lucide-react';
import { openWhatsApp, formMessage } from '../utils/whatsapp';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function ContactPage() {
  const { showToast } = useCart();
  const mountTime = useRef(Date.now());

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
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
    if (!validateRequired(formData.firstName, 2)) {
      newErrors.firstName = 'Please provide your first name (at least 2 letters).';
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please provide a valid 10-digit mobile number.';
    }
    if (!validateRequired(formData.message, 5)) {
      newErrors.message = 'Please enter a brief message (at least 5 characters).';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
    openWhatsApp(formMessage(`Contact form: ${formData.subject}`, [
      ['Name', `${formData.firstName} ${formData.lastName}`],
      ['Phone', formData.phone],
      ['Email', formData.email],
      ['Message', formData.message]
    ]));
  };

  return (
    <div className="contact-page-wrapper">
      <SeoHead
        title="Contact Arisca Light Studio | Visit Our Ahmedabad Showroom"
        description="Connect with Arisca Light Studio at Money Plant High Street, Jagatpur Road, Ahmedabad. Call +91 98980 86656 or WhatsApp for quotations and consultations."
        keywords="arisca light studio contact, jagatpur road lighting store, ahmedabad lighting showroom phone number, book lighting visit"
        canonicalUrl="https://www.ariscalightstudio.com/#/contact"
      />

      {/* Hero Header */}
      <section className="contact-hero-header">
        <div className="container">
          <div className="contact-hero-badge-wrap">
            <span className="section-badge pulse-badge">
              <Sparkles size={14} /> Ahmedabad Lighting Studio
            </span>
          </div>
          <h1 className="contact-main-title">
            Let’s <span className="text-gold-gradient">Connect</span>
          </h1>
          <p className="contact-main-subtitle">
            Visit our experience showroom at Money Plant High Street or connect with our lighting engineers for on-site consultations, quotes, and project support.
          </p>

          {/* Quick Info Chips */}
          <div className="contact-hero-chips">
            <div className="contact-hero-chip">
              <MapPin size={15} className="gold-text" />
              <span>Jagatpur Road, Ahmedabad</span>
            </div>
            <div className="contact-hero-chip">
              <Clock size={15} className="gold-text" />
              <span>Mon – Sat: 10:00 am – 8:30 pm</span>
            </div>
            <div className="contact-hero-chip">
              <Phone size={15} className="gold-text" />
              <span>+91 98980 86656</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="section contact-main-section">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Info & Map Column */}
            <div className="contact-info-col">
              <div className="studio-card">
                <h2 className="studio-card-title">Studio Headquarters</h2>
                <p className="studio-lead">
                  Experience our collection of downlights, chandeliers, and outdoor luminaires in person.
                </p>

                <div className="contact-details-list">
                  <div className="contact-detail-row">
                    <div className="contact-icon-wrap">
                      <MapPin size={20} className="gold-text" />
                    </div>
                    <div>
                      <strong>Address:</strong>
                      <p>
                        B - 103, Money Plant High Street,<br />
                        Jagatpur Road, Ahmedabad, Gujarat, India 382470
                      </p>
                    </div>
                  </div>

                  <div className="contact-detail-row">
                    <div className="contact-icon-wrap">
                      <Phone size={20} className="gold-text" />
                    </div>
                    <div>
                      <strong>Phone:</strong>
                      <p>
                        <a href="tel:+919898086656">+91 98980 86656</a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-detail-row">
                    <div className="contact-icon-wrap">
                      <WhatsAppIcon size={20} className="teal-text" />
                    </div>
                    <div>
                      <strong>WhatsApp Support:</strong>
                      <p>
                        <a
                          href="https://wa.me/919898086656"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="teal-link"
                        >
                          +91 98980 86656 (Chat Now &rarr;)
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-detail-row">
                    <div className="contact-icon-wrap">
                      <Mail size={20} className="gold-text" />
                    </div>
                    <div>
                      <strong>Email:</strong>
                      <p>
                        <a href="mailto:info@ariscalightstudio.com">info@ariscalightstudio.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-detail-row">
                    <div className="contact-icon-wrap">
                      <Clock size={20} className="gold-text" />
                    </div>
                    <div>
                      <strong>Opening Hours:</strong>
                      <p>Monday – Saturday: 10:00 am – 8:30 pm</p>
                      <p className="sunday-closed">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="studio-social-row">
                  <span>Follow Us:</span>
                  <a
                    href="https://www.instagram.com/arisca_light_studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill"
                  >
                    <Instagram size={16} /> Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/share/1MSMcUSAbj/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill"
                  >
                    <Facebook size={16} /> Facebook
                  </a>
                </div>
              </div>

              {/* Map Embed Frame */}
              <div className="map-frame-box">
                <iframe
                  src={siteInfo.contact.map.embedSrc}
                  title="Arisca Light Studio Google Map Location"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form Column */}
            <div className="contact-form-col">
              <div className="contact-form-card">
                <h3>Send Us a Message</h3>
                <p className="form-subtitle">
                  Have a question about our downlights, custom chandelier sizing, or need a project estimate? Fill out the details below.
                </p>

                {isSubmitted ? (
                  <div className="form-success-box">
                    <CheckCircle2 size={48} className="gold-text" />
                    <h4>Almost there, {formData.firstName}!</h4>
                    <p>We've opened WhatsApp with your details filled in. Press send there and our team will reply shortly.</p>
                    <button
                      className="btn btn-secondary mt-3"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form" noValidate toolname="send_contact_message" tooldescription="Send a message to Arisca Light Studio. Opens WhatsApp with the name, phone, email, subject and message filled in.">
                    {/* Spam Bot Honeypot */}
                    <div style={{ display: 'none', position: 'absolute', left: '-9999px' }} aria-hidden="true">
                      <label htmlFor="ct-hp">Leave this empty</label>
                      <input
                        type="text"
                        id="ct-hp"
                        name="company_hp"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.company_hp}
                        onChange={(e) => setFormData({ ...formData, company_hp: e.target.value })}
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="ct-fname">First Name *</label>
                        <input
                          type="text"
                          id="ct-fname"
                          required
                          placeholder="Your first name"
                          className={errors.firstName ? 'input-invalid' : ''}
                          value={formData.firstName}
                          onChange={(e) => {
                            setFormData({ ...formData, firstName: e.target.value });
                            if (errors.firstName) setErrors({ ...errors, firstName: null });
                          }}
                        />
                        {errors.firstName && <span className="form-error-msg"><AlertCircle size={12} /> {errors.firstName}</span>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="ct-lname">Last Name</label>
                        <input
                          type="text"
                          id="ct-lname"
                          placeholder="Your last name"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="ct-email">Email Address *</label>
                        <input
                          type="email"
                          id="ct-email"
                          required
                          placeholder="name@example.com"
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
                        <label htmlFor="ct-phone">Phone Number *</label>
                        <input
                          type="tel"
                          id="ct-phone"
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
                      <label htmlFor="ct-subject">Inquiry Subject</label>
                      <select
                        id="ct-subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      >
                        <option value="General Inquiry">General Product Inquiry</option>
                        <option value="Quotation Request">Quotation Request for LOFY Downlights</option>
                        <option value="Site Measurement Booking">Site Measurement Booking</option>
                        <option value="Chandelier Customization">Chandelier Customization</option>
                        <option value="Architectural Trade Inquiry">Architectural Trade Inquiry</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="ct-msg">Your Message *</label>
                      <textarea
                        id="ct-msg"
                        required
                        rows={4}
                        placeholder="Tell us about your home, number of rooms, or lighting questions..."
                        className={errors.message ? 'input-invalid' : ''}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: null });
                        }}
                      />
                      {errors.message && <span className="form-error-msg"><AlertCircle size={12} /> {errors.message}</span>}
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg btn-block">
                      <WhatsAppIcon size={18} /> Send message on WhatsApp
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
