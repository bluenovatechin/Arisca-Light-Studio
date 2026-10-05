import React, { useState } from 'react';
import { clientProjects } from '../data/ariscaData';
import { useCart } from '../context/CartContext';
import SeoHead from '../components/SeoHead';
import {
  Sparkles,
  Eye,
  Calendar,
  MessageCircle,
  MapPin,
  Camera,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  Zap,
  Sliders,
  X,
  Maximize2,
  Maximize
} from 'lucide-react';

export default function ClientDiariesPage({ onNavigate }) {
  const { openLightbox, openConsultModal } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [inspectingProject, setInspectingProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects', count: clientProjects.length },
    { id: 'living', label: 'Living & Foyers', count: clientProjects.filter(p => p.category === 'living').length },
    { id: 'dining', label: 'Dining & Kitchen', count: clientProjects.filter(p => p.category === 'dining').length },
    { id: 'bedroom', label: 'Master Suites', count: clientProjects.filter(p => p.category === 'bedroom').length },
    { id: 'staircase', label: 'Staircases & Voids', count: clientProjects.filter(p => p.category === 'staircase').length },
    { id: 'outdoor', label: 'Outdoor & Terraces', count: clientProjects.filter(p => p.category === 'outdoor').length }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? clientProjects
    : clientProjects.filter((p) => p.category === selectedCategory);

  return (
    <div className="client-diaries-page-wrapper">
      <SeoHead
        title="Client Project Diaries | Real Architectural Lighting Installations in Ahmedabad"
        description="Browse authentic architectural lighting installations across luxury villas and penthouses in Bodakdev, Ambli, Sindhu Bhavan, and Science City Ahmedabad."
        keywords="lighting projects ahmedabad, luxury villa lighting ahmedabad, living room lights client diary, cob downlight installations ahmedabad"
        canonicalUrl="https://www.ariscalightstudio.com/#/client-diaries"
      />

      {/* Page Hero Header */}
      <section className="diaries-hero-header">
        <div className="container">
          <div className="diaries-hero-badge-wrap">
            <span className="section-badge pulse-badge">
              <Camera size={14} /> Real Projects in Ahmedabad
            </span>
          </div>
          <h1 className="diaries-main-title">
            Client Project <span className="text-gold-gradient">Diaries</span>
          </h1>
          <p className="diaries-main-subtitle">
            Authentic architectural lighting installations commissioned by our studio. From private residences in Bodakdev and Ambli to high-ceiling villas across Ahmedabad.
          </p>

          {/* Quick Stats Bar */}
          <div className="diaries-stats-bar">
            <div className="diaries-stat-item">
              <div className="diaries-stat-number">500+</div>
              <div className="diaries-stat-label">Fixtures Installed</div>
            </div>
            <div className="diaries-stat-divider" />
            <div className="diaries-stat-item">
              <div className="diaries-stat-number">100%</div>
              <div className="diaries-stat-label">Ahmedabad Residences</div>
            </div>
            <div className="diaries-stat-divider" />
            <div className="diaries-stat-item">
              <div className="diaries-stat-number">Ra &gt; 90</div>
              <div className="diaries-stat-label">True Color Fidelity</div>
            </div>
            <div className="diaries-stat-divider" />
            <div className="diaries-stat-item">
              <div className="diaries-stat-number">0-Glare</div>
              <div className="diaries-stat-label">Deep COB Optical Focus</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="section diaries-gallery-section">
        <div className="container">
          {/* Category Filter Pills */}
          <div className="diaries-filter-wrap">
            <div className="diaries-filter-pills">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`diaries-pill-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <span>{cat.label}</span>
                  {cat.count > 0 && <span className="diaries-pill-count">{cat.count}</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="diaries-grid">
            {filteredProjects.map((proj) => (
              <article
                key={proj.id}
                className="diaries-card"
                onClick={() => setInspectingProject(proj)}
              >
                <div className="diaries-img-wrap">
                  <img
                    src={proj.url}
                    alt={proj.title}
                    loading="lazy"
                    className="diaries-img"
                  />
                  <div className="diaries-badge-top">
                    <span className="diaries-category-chip">{proj.categoryLabel}</span>
                  </div>

                  <div className="diaries-overlay">
                    <div className="diaries-overlay-content">
                      <div className="diaries-eye-btn">
                        <Eye size={22} />
                      </div>
                      <span className="diaries-view-text">Click to Inspect Lighting Specs</span>
                    </div>
                  </div>
                </div>

                <div className="diaries-info">
                  <div className="diaries-location-row">
                    <MapPin size={13} className="gold-text" />
                    <span>{proj.location}</span>
                  </div>
                  <h3 className="diaries-title">{proj.title}</h3>
                  <p className="diaries-desc">{proj.description}</p>

                  <div className="diaries-card-footer">
                    <span className="diaries-view-link">
                      Inspect Details <ArrowRight size={13} />
                    </span>
                    <button
                      type="button"
                      className="diaries-inquire-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(`https://wa.me/919898086656?text=${encodeURIComponent(`Hello Arisca, I saw the ${proj.title} in your Client Diaries (${proj.location}) and would like a similar lighting design for my home.`)}`, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      <MessageCircle size={13} /> Inquire This Look
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Submission / Feature Your Home Card */}
          <div className="diaries-cta-banner">
            <div className="diaries-cta-bg-glow" />
            <div className="diaries-cta-content">
              <span className="section-badge">
                <Sparkles size={14} /> Bespoke Lighting Engineering
              </span>
              <h2>Want Your Residence Featured in Our Client Diaries?</h2>
              <p>
                Our lighting engineers provide complimentary on-site laser surveys, LUX level mapping, and luminaire sampling across Ahmedabad.
              </p>

              <div className="diaries-cta-actions">
                <button className="btn btn-primary btn-lg" onClick={openConsultModal}>
                  <Calendar size={18} /> Book Free Site Visit
                </button>
                <a
                  href="https://wa.me/919898086656?text=Hello%20Arisca%20Light%20Studio,%20I%20love%20your%20Client%20Diaries%20projects%20and%20want%20to%20discuss%20my%20residence%20lighting."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  <MessageCircle size={18} /> WhatsApp Lighting Desk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Project Details Inspection Modal */}
      {inspectingProject && (
        <div className="modal-backdrop" onClick={() => setInspectingProject(null)}>
          <div
            className="modal-container project-inspect-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="inspect-project-title"
          >
            <button
              className="modal-close-btn"
              onClick={() => setInspectingProject(null)}
              aria-label="Close project specifications"
            >
              <X size={20} />
            </button>

            <div className="project-inspect-grid">
              <div className="project-inspect-media">
                <div className="inspect-img-box">
                  <img
                    src={inspectingProject.url}
                    alt={inspectingProject.title}
                    className="inspect-img"
                  />
                  <button
                    className="inspect-lightbox-btn"
                    onClick={() => {
                      const proj = inspectingProject;
                      setInspectingProject(null);
                      openLightbox(proj.url, `${proj.title} • ${proj.location}`);
                    }}
                    title="Expand Fullscreen Photo"
                  >
                    <Maximize2 size={16} /> Fullscreen
                  </button>
                </div>
                <div className="inspect-media-badges">
                  <span className="section-badge">
                    <MapPin size={13} /> {inspectingProject.location}
                  </span>
                  <span className="section-badge">
                    <Layers size={13} /> {inspectingProject.categoryLabel}
                  </span>
                  {inspectingProject.scope && (
                    <span className="section-badge">
                      <Sparkles size={13} /> {inspectingProject.scope}
                    </span>
                  )}
                </div>
              </div>

              <div className="project-inspect-body">
                <div className="project-inspect-header">
                  <span className="section-badge pulse-badge">
                    Architectural Lighting Case Study
                  </span>
                  <h2 id="inspect-project-title" className="inspect-title">
                    {inspectingProject.title}
                  </h2>
                  <p className="inspect-design-intent">
                    {inspectingProject.designIntent || inspectingProject.description}
                  </p>
                </div>

                {/* Technical Photometrics Grid */}
                <div className="inspect-specs-card">
                  <h4 className="inspect-specs-title">
                    <Sliders size={16} className="gold-text" /> Lighting Engineering Specifications
                  </h4>
                  <div className="inspect-specs-grid">
                    <div className="spec-item">
                      <span className="spec-label">Color Temp (CCT)</span>
                      <span className="spec-val">{inspectingProject.colorTemp || '3000K Warm White'}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Color Rendering</span>
                      <span className="spec-val">{inspectingProject.cri || 'Ra > 92'}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Target Illuminance</span>
                      <span className="spec-val">{inspectingProject.luxLevel || '200 - 350 Lux'}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Ceiling Height</span>
                      <span className="spec-val">{inspectingProject.ceilingHeight || '10.5 ft'}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Optical Beam Spread</span>
                      <span className="spec-val">{inspectingProject.beamAngle || '24° / 36°'}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Glare Shielding</span>
                      <span className="spec-val">UGR &lt; 19 Deep Conical Recess</span>
                    </div>
                  </div>
                </div>

                {/* Fixtures Installed */}
                {inspectingProject.fixtures && inspectingProject.fixtures.length > 0 && (
                  <div className="inspect-fixtures-card">
                    <h4 className="inspect-specs-title">
                      <CheckCircle2 size={16} className="gold-text" /> Luminaire Specification Schedule
                    </h4>
                    <ul className="inspect-fixtures-list">
                      {inspectingProject.fixtures.map((fix, fIdx) => (
                        <li key={fIdx} className="inspect-fixture-item">
                          <CheckCircle2 size={14} className="gold-text flex-shrink-0" />
                          <span>{fix}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Actions */}
                <div className="inspect-actions">
                  <button
                    className="btn btn-whatsapp btn-lg"
                    onClick={() => {
                      window.open(`https://wa.me/919898086656?text=${encodeURIComponent(`Hello Arisca, I am reviewing the architectural case study for "${inspectingProject.title}" in ${inspectingProject.location}. Can you provide quotation details and a photometric design for my space?`)}`, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    <MessageCircle size={18} /> Inquire This Scheme on WhatsApp
                  </button>
                  <button
                    className="btn btn-primary btn-lg"
                    onClick={() => {
                      setInspectingProject(null);
                      openConsultModal();
                    }}
                  >
                    <Calendar size={18} /> Book Free Laser Survey
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

