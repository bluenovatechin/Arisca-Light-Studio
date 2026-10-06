import React, { useEffect, useState } from 'react';
import { clientProjects } from '../data/ariscaData';
import { useCart } from '../context/CartContext';
import SeoHead from '../components/SeoHead';
import {
  Sparkles,
  Eye,
  Calendar,
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
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { openWhatsApp } from '../utils/whatsapp';

/**
 * Project viewer: the photo stays pinned (top on phones, left on desktop)
 * while only the details scroll. Arrow keys / buttons step through projects.
 */
function ProjectSheet({ projects, index, onIndex, onClose, onBook, onFullscreen }) {
  const proj = projects[index];
  const count = projects.length;
  const step = (d) => onIndex((index + d + count) % count);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.classList.add('no-scroll');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('no-scroll');
    };
  });

  const specs = [
    ['Colour temperature', proj.colorTemp || '3000K warm white'],
    ['Colour rendering', proj.cri || 'Ra > 92'],
    ['Light level', proj.luxLevel || '200 – 350 lux'],
    ['Ceiling height', proj.ceilingHeight || '10.5 ft'],
    ['Beam spread', proj.beamAngle || '24° / 36°'],
    ['Glare control', 'UGR < 19, deep recessed']
  ];

  return (
    <div className="pj" role="dialog" aria-modal="true" aria-labelledby="pj-title">
      <div className="pj-backdrop" onClick={onClose} />
      <div className="pj-sheet">
        <figure className="pj-media" key={proj.id}>
          <img src={proj.url} alt={proj.title} />
          <figcaption className="pj-media-bar">
            <span className="pj-count">{index + 1} / {count}</span>
            <span className="pj-media-actions">
              <button type="button" onClick={() => step(-1)} aria-label="Previous project"><ChevronLeft size={18} /></button>
              <button type="button" onClick={() => step(1)} aria-label="Next project"><ChevronRight size={18} /></button>
              <button type="button" onClick={() => onFullscreen(proj)} aria-label="View photo fullscreen"><Maximize2 size={16} /></button>
            </span>
          </figcaption>
        </figure>

        <div className="pj-body" key={`b-${proj.id}`}>
          <button type="button" className="pj-close" onClick={onClose} aria-label="Close project">
            <X size={20} />
          </button>
          <p className="eyebrow"><span className="eyebrow-lines" aria-hidden="true" />{proj.categoryLabel}</p>
          <h2 id="pj-title" className="pj-title">{proj.title}</h2>
          <p className="pj-loc"><MapPin size={14} aria-hidden="true" /> {proj.location}{proj.scope ? ` · ${proj.scope}` : ''}</p>
          <p className="pj-intent">{proj.designIntent || proj.description}</p>

          <h3 className="pj-subhead">The lighting</h3>
          <dl className="pj-specs">
            {specs.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>

          {proj.fixtures?.length > 0 && (
            <>
              <h3 className="pj-subhead">What we installed</h3>
              <ul className="pj-fixtures">
                {proj.fixtures.map((f) => <li key={f}><CheckCircle2 size={15} aria-hidden="true" /> {f}</li>)}
              </ul>
            </>
          )}

          <div className="pj-actions">
            <button
              type="button"
              className="btn-pill pj-wa"
              onClick={() => openWhatsApp(`Hello Arisca, I saw "${proj.title}" (${proj.location}) on your website and would like a similar lighting design for my space.`)}
            >
              <WhatsAppIcon size={18} /> I'd like something similar
            </button>
            <button type="button" className="btn-pill btn-pill-solid" onClick={onBook}>
              <Calendar size={17} /> Book a visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ClientDiariesPage({ onNavigate }) {
  const { openLightbox, openConsultModal } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState(null);

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
          <h2 className="sr-only">Projects</h2>
          <div className="diaries-grid">
            {filteredProjects.map((proj, idx) => (
              <article
                key={proj.id}
                className="diaries-card"
                onClick={() => setOpenIndex(idx)}
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
                      <span className="diaries-view-text">View project</span>
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
                      View project <ArrowRight size={13} />
                    </span>
                    <button
                      type="button"
                      className="diaries-inquire-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        openWhatsApp(`Hello Arisca, I saw the ${proj.title} in your Client Diaries (${proj.location}) and would like a similar lighting design for my home.`);
                      }}
                    >
                      <WhatsAppIcon size={13} /> Inquire This Look
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
                  <WhatsAppIcon size={18} /> WhatsApp Lighting Desk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {openIndex !== null && filteredProjects[openIndex] && (
        <ProjectSheet
          projects={filteredProjects}
          index={openIndex}
          onIndex={setOpenIndex}
          onClose={() => setOpenIndex(null)}
          onBook={() => { setOpenIndex(null); openConsultModal(); }}
          onFullscreen={(proj) => { setOpenIndex(null); openLightbox(proj.url, `${proj.title} • ${proj.location}`); }}
        />
      )}
    </div>
  );
}

