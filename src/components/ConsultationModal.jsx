import React, { useEffect, useRef, useState } from 'react';
import { useCart } from '../context/CartContext';
import { validatePhone, validateRequired, validateEmail, isSpamSubmission } from '../utils/formValidation';
import { openWhatsApp, formMessage, whatsappUrl } from '../utils/whatsapp';
import WhatsAppIcon from './WhatsAppIcon';
import { X, Store, Home, Video, Phone, MapPin, Clock, AlertCircle, Check, ArrowRight } from 'lucide-react';

const SHOWROOM_IMG = '/assets/optimized/projects/dsc09758-a01hkH3Y9uhcKEc0.webp';

const VISIT_TYPES = [
  { id: 'studio', icon: Store, label: 'Studio visit', desc: 'See the lights switched on at Jagatpur Road' },
  { id: 'site', icon: Home, label: 'Site visit', desc: 'We measure and plan at your home or project' },
  { id: 'video', icon: Video, label: 'Video call', desc: 'A quick walkthrough from wherever you are' }
];
const PROJECT_TYPES = ['Apartment', 'Villa / Bungalow', 'Penthouse', 'Office / Retail', 'Architect / Designer'];
const TIME_SLOTS = ['Morning', 'Afternoon', 'Evening'];

const EMPTY = {
  visitType: 'studio',
  name: '',
  phone: '',
  email: '',
  projectType: 'Apartment',
  location: '',
  preferredDate: '',
  timeSlot: 'Afternoon',
  notes: '',
  includeList: true,
  company_hp: ''
};

export default function ConsultationModal() {
  const { isConsultModalOpen, closeConsultModal, cart } = useCart();
  const mountTime = useRef(Date.now());
  const firstField = useRef(null);
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sentUrl, setSentUrl] = useState(null);

  useEffect(() => {
    if (!isConsultModalOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && closeConsultModal();
    document.addEventListener('keydown', onKey);
    document.body.classList.add('no-scroll');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('no-scroll');
      setSentUrl(null);
    };
  }, [isConsultModalOpen, closeConsultModal]);

  if (!isConsultModalOpen) return null;

  const set = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };
  const onInput = (e) => set(e.target.name, e.target.type === 'checkbox' ? e.target.checked : e.target.value);

  const visit = VISIT_TYPES.find((v) => v.id === form.visitType);
  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSpamSubmission(form.company_hp, mountTime.current)) {
      setSentUrl(whatsappUrl());
      return;
    }

    const next = {};
    if (!validateRequired(form.name, 2)) next.name = 'Please tell us your name.';
    if (!validatePhone(form.phone)) next.phone = 'Enter a valid 10-digit mobile number.';
    if (form.email && !validateEmail(form.email)) next.email = 'That email doesn’t look right.';
    if (form.visitType === 'site' && !validateRequired(form.location, 3)) next.location = 'Where is the site?';
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }

    const pieces = form.includeList && cart.length
      ? cart.map(({ product: p }, i) => `${i + 1}. ${p.title}${p.itemNo ? ` (No. ${p.itemNo})` : ''}`).join('\n')
      : '';
    const text = formMessage(`Booking request: ${visit.label}`, [
      ['Name', form.name],
      ['Phone', form.phone],
      ['Email', form.email],
      ['Project', form.projectType],
      ['Location', form.location],
      ['Preferred date', form.preferredDate && new Date(form.preferredDate).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })],
      ['Preferred time', form.timeSlot],
      ['Notes', form.notes],
      ['Shortlisted pieces', pieces && `\n${pieces}`]
    ]);
    setErrors({});
    setSentUrl(whatsappUrl(text));
    openWhatsApp(text);
  };

  const close = () => {
    closeConsultModal();
    if (sentUrl) setForm(EMPTY);
  };

  return (
    <div className="bkg" role="dialog" aria-modal="true" aria-labelledby="bkg-title">
      <div className="bkg-backdrop" onClick={close} />
      <div className="bkg-sheet">
        <button type="button" className="bkg-close" onClick={close} aria-label="Close booking">
          <X size={20} />
        </button>

        <aside className="bkg-side">
          <img src={SHOWROOM_IMG} alt="Lights on display at the Arisca studio" />
          <div className="bkg-side-body">
            <p className="eyebrow"><span className="eyebrow-lines" aria-hidden="true" />Arisca Light Studio</p>
            <p className="bkg-side-title">Come and switch them on yourself.</p>
            <ul className="bkg-side-list">
              <li><MapPin size={15} aria-hidden="true" /> B-103, Money Plant High Street, Jagatpur Road, Ahmedabad</li>
              <li><Clock size={15} aria-hidden="true" /> Mon – Sat, 10:00 am – 8:30 pm</li>
            </ul>
            <div className="bkg-side-actions">
              <a href="tel:+919898086656" className="bkg-side-btn"><Phone size={15} /> Call</a>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="bkg-side-btn"><WhatsAppIcon size={15} /> WhatsApp</a>
            </div>
          </div>
        </aside>

        <div className="bkg-main">
          {sentUrl ? (
            <div className="bkg-done">
              <span className="bkg-done-icon" aria-hidden="true"><Check size={30} /></span>
              <h2 className="bkg-title">Almost done — just hit send.</h2>
              <p>We've opened WhatsApp with your booking filled in. Send the message and our team will confirm your {visit.label.toLowerCase()} shortly.</p>
              <a href={sentUrl} target="_blank" rel="noopener noreferrer" className="btn-pill bkg-wa">
                <WhatsAppIcon size={18} /> Open WhatsApp again
              </a>
              <button type="button" className="btn-pill" onClick={close}>Back to the site</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="bkg-form" toolname="book_visit" tooldescription="Book a free studio visit, site visit or video call with Arisca Light Studio. Opens WhatsApp with the booking details filled in.">
              <header className="bkg-head">
                <p className="eyebrow"><span className="eyebrow-lines" aria-hidden="true" />Book a visit</p>
                <h2 id="bkg-title" className="bkg-title">Let's light your space, <em>together.</em></h2>
                <p className="bkg-lede">Free consultation. Pick how you'd like to meet — we'll confirm on WhatsApp.</p>
              </header>

              <div aria-hidden="true" className="bkg-hp">
                <input type="text" name="company_hp" tabIndex={-1} autoComplete="off" value={form.company_hp} onChange={onInput} />
              </div>

              <fieldset className="bkg-field">
                <legend>How would you like to meet?</legend>
                <div className="bkg-visits">
                  {VISIT_TYPES.map(({ id, icon: Icon, label, desc }) => (
                    <label key={id} className={`bkg-visit ${form.visitType === id ? 'is-on' : ''}`}>
                      <input type="radio" name="visitType" value={id} checked={form.visitType === id} onChange={onInput} />
                      <span className="bkg-visit-icon"><Icon size={19} strokeWidth={1.6} /></span>
                      <span className="bkg-visit-text"><strong>{label}</strong><small>{desc}</small></span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="bkg-grid">
                <label className={`bkg-input ${errors.name ? 'has-error' : ''}`}>
                  <span>Your name *</span>
                  <input ref={firstField} name="name" value={form.name} onChange={onInput} placeholder="e.g. Riya Shah" autoComplete="name" />
                  {errors.name && <em><AlertCircle size={12} /> {errors.name}</em>}
                </label>
                <label className={`bkg-input ${errors.phone ? 'has-error' : ''}`}>
                  <span>Mobile / WhatsApp *</span>
                  <input name="phone" type="tel" inputMode="tel" value={form.phone} onChange={onInput} placeholder="98980 00000" autoComplete="tel" />
                  {errors.phone && <em><AlertCircle size={12} /> {errors.phone}</em>}
                </label>
                <label className={`bkg-input ${errors.location ? 'has-error' : ''}`}>
                  <span>Area in Ahmedabad{form.visitType === 'site' ? ' *' : ''}</span>
                  <input name="location" value={form.location} onChange={onInput} placeholder="e.g. Bodakdev, Shela, Gota" />
                  {errors.location && <em><AlertCircle size={12} /> {errors.location}</em>}
                </label>
                <label className={`bkg-input ${errors.email ? 'has-error' : ''}`}>
                  <span>Email <small>(optional)</small></span>
                  <input name="email" type="email" value={form.email} onChange={onInput} placeholder="you@example.com" autoComplete="email" />
                  {errors.email && <em><AlertCircle size={12} /> {errors.email}</em>}
                </label>
              </div>

              <fieldset className="bkg-field">
                <legend>Project</legend>
                <div className="bkg-chips">
                  {PROJECT_TYPES.map((t) => (
                    <button type="button" key={t} className={`bkg-chip ${form.projectType === t ? 'is-on' : ''}`} aria-pressed={form.projectType === t} onClick={() => set('projectType', t)}>
                      {t}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="bkg-grid bkg-when">
                <label className="bkg-input">
                  <span>Preferred date</span>
                  <input name="preferredDate" type="date" min={today} value={form.preferredDate} onChange={onInput} />
                </label>
                <fieldset className="bkg-field">
                  <legend>Time of day</legend>
                  <div className="bkg-chips">
                    {TIME_SLOTS.map((t) => (
                      <button type="button" key={t} className={`bkg-chip ${form.timeSlot === t ? 'is-on' : ''}`} aria-pressed={form.timeSlot === t} onClick={() => set('timeSlot', t)}>
                        {t}
                      </button>
                    ))}
                  </div>
                </fieldset>
              </div>

              <label className="bkg-input">
                <span>Anything we should know? <small>(optional)</small></span>
                <textarea name="notes" rows={2} value={form.notes} onChange={onInput} placeholder="Ceiling height, rooms, the look you're after…" />
              </label>

              {cart.length > 0 && (
                <label className="bkg-include">
                  <input type="checkbox" name="includeList" checked={form.includeList} onChange={onInput} />
                  <span>Include my {cart.length} shortlisted {cart.length === 1 ? 'piece' : 'pieces'}</span>
                </label>
              )}

              <button type="submit" className="btn-pill bkg-wa bkg-submit">
                <WhatsAppIcon size={18} /> Send booking on WhatsApp <ArrowRight size={16} />
              </button>
              <p className="bkg-fine">Opens WhatsApp with your details filled in, so nothing is sent until you press send.</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
