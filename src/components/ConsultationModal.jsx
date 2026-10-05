import React, { useState, useRef } from 'react';
import { useCart } from '../context/CartContext';
import { validateEmail, validatePhone, validateRequired, isSpamSubmission } from '../utils/formValidation';
import {
  X,
  Calendar,
  CheckCircle2,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Sparkles,
  AlertCircle
} from 'lucide-react';

export default function ConsultationModal() {
  const { isConsultModalOpen, closeConsultModal, showToast } = useCart();
  const mountTime = useRef(Date.now());

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    projectType: 'Residential Villa',
    serviceNeeded: 'Whole-Home Lighting Layout & Measurement',
    areaSqFt: '2500',
    location: 'Ahmedabad',
    preferredDate: '',
    notes: '',
    company_hp: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isConsultModalOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Bot check
    if (isSpamSubmission(formData.company_hp, mountTime.current)) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        closeConsultModal();
      }, 1500);
      return;
    }

    const newErrors = {};
    if (!validateRequired(formData.firstName, 2)) {
      newErrors.firstName = 'First name required.';
    }
    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Valid 10-digit mobile required.';
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Valid email required.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
    showToast(
      `Thank you, ${formData.firstName}! Your consultation request for ${formData.projectType} has been scheduled. Our design engineer will call you at ${formData.phone}.`
    );
    setTimeout(() => {
      setIsSubmitted(false);
      closeConsultModal();
    }, 2500);
  };

  return (
    <div className="modal-backdrop" onClick={closeConsultModal}>
      <div
        className="modal-container consult-modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="consult-modal-title"
      >
        <button
          className="modal-close-btn"
          onClick={closeConsultModal}
          aria-label="Close consultation modal"
        >
          <X size={20} />
        </button>

        {isSubmitted ? (
          <div className="consult-success-view">
            <div className="success-icon-wrap">
              <CheckCircle2 size={54} className="gold-text" />
            </div>
            <h3>Consultation Request Received!</h3>
            <p>
              Thank you, <strong>{formData.firstName}</strong>. Our senior lighting consultant has received your brief for <strong>{formData.projectType}</strong>.
            </p>
            <p className="success-subtext">
              We will contact you within 2 business hours at <strong>{formData.phone}</strong> to confirm your site visit.
            </p>
          </div>
        ) : (
          <div className="consult-modal-grid">
            {/* Form Side */}
            <div className="consult-form-side">
              <div className="modal-header-section">
                <span className="section-badge">
                  <Sparkles size={12} /> Complimentary In-Home Service
                </span>
                <h2 id="consult-modal-title" className="modal-title">
                  Book Lighting Consultation & Site Measurement
                </h2>
                <p className="modal-subtitle">
                  Our lighting engineers assess ceiling depths, beam distribution, and ambiance requirements directly at your site in Ahmedabad.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="consult-form" noValidate>
                {/* Spam Bot Honeypot */}
                <div style={{ display: 'none', position: 'absolute', left: '-9999px' }} aria-hidden="true">
                  <label htmlFor="c-hp">Leave empty</label>
                  <input
                    type="text"
                    id="c-hp"
                    name="company_hp"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.company_hp}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="c-fname">First Name *</label>
                    <input
                      type="text"
                      id="c-fname"
                      name="firstName"
                      required
                      placeholder="e.g. Rajesh"
                      className={errors.firstName ? 'input-invalid' : ''}
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    {errors.firstName && <span className="form-error-msg"><AlertCircle size={12} /> {errors.firstName}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="c-lname">Last Name</label>
                    <input
                      type="text"
                      id="c-lname"
                      name="lastName"
                      placeholder="e.g. Shah"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="c-phone">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      id="c-phone"
                      name="phone"
                      required
                      placeholder="+91 98980 XXXXX"
                      className={errors.phone ? 'input-invalid' : ''}
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <span className="form-error-msg"><AlertCircle size={12} /> {errors.phone}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="c-email">Email Address *</label>
                    <input
                      type="email"
                      id="c-email"
                      name="email"
                      required
                      placeholder="rajesh@example.com"
                      className={errors.email ? 'input-invalid' : ''}
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className="form-error-msg"><AlertCircle size={12} /> {errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="c-ptype">Project Type</label>
                    <select
                      id="c-ptype"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                    >
                      <option value="Residential Villa / Bungalow">Residential Villa / Bungalow</option>
                      <option value="Luxury Apartment (3BHK / 4BHK / 5BHK)">Luxury Apartment (3BHK / 4BHK / 5BHK)</option>
                      <option value="Penthouse / Duplex">Penthouse / Duplex</option>
                      <option value="Commercial Office / Corporate Studio">Commercial Office / Corporate Studio</option>
                      <option value="Retail Boutique / Restaurant / Cafe">Retail Boutique / Restaurant / Cafe</option>
                      <option value="Architect / Interior Collaboration">Architect / Interior Collaboration</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="c-service">Service Scope</label>
                    <select
                      id="c-service"
                      name="serviceNeeded"
                      value={formData.serviceNeeded}
                      onChange={handleChange}
                    >
                      <option value="Laser Site Measurement & Layout">Laser Site Measurement & Layout</option>
                      <option value="Chandelier & Centerpiece Selection">Chandelier & Centerpiece Selection</option>
                      <option value="Architectural COB Downlight Package">Architectural COB Downlight Package</option>
                      <option value="Complete Turnkey Lighting Package">Complete Turnkey Lighting Package</option>
                      <option value="Showroom Private Appointment">Showroom Private Appointment</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="c-location">Project Location in Ahmedabad</label>
                    <input
                      type="text"
                      id="c-location"
                      name="location"
                      placeholder="e.g. Bodakdev, Bopal, Sindhu Bhavan, Shela"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="c-date">Preferred Consultation Date</label>
                    <input
                      type="date"
                      id="c-date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="c-notes">Project Notes or Special Requirements</label>
                  <textarea
                    id="c-notes"
                    name="notes"
                    rows={2}
                    placeholder="Ceiling height, current electrical stage, favorite fixture styles..."
                    value={formData.notes}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg btn-block">
                  <Calendar size={18} /> Confirm Consultation Request
                </button>
              </form>
            </div>

            {/* Studio Info Sidebar */}
            <div className="consult-sidebar">
              <div className="consult-feature-card">
                <h4>What to Expect:</h4>
                <ul className="consult-steps-list">
                  <li>
                    <span className="step-num">1</span>
                    <div>
                      <strong>Free Site Visit</strong>
                      <p>Laser measurements of ceiling cutouts and LUX lux levels.</p>
                    </div>
                  </li>
                  <li>
                    <span className="step-num">2</span>
                    <div>
                      <strong>Lighting Blueprint</strong>
                      <p>Custom beam angle distribution and driver placement.</p>
                    </div>
                  </li>
                  <li>
                    <span className="step-num">3</span>
                    <div>
                      <strong>Flawless Installation</strong>
                      <p>White-glove certified mounting and switch testing.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="studio-contact-quick-card">
                <h5>Prefer Immediate Assistance?</h5>
                <a href="tel:+919898086656" className="quick-btn-item">
                  <Phone size={16} className="gold-text" /> +91 98980 86656
                </a>
                <a
                  href="https://wa.me/919898086656"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quick-btn-item"
                >
                  <MessageCircle size={16} className="teal-text" /> WhatsApp Studio
                </a>
                <div className="quick-address">
                  <MapPin size={14} className="gold-text" />
                  <span>B - 103, Money Plant High Street, Jagatpur Rd, Ahmedabad</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
