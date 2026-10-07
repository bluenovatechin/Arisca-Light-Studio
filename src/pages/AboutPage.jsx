import React from 'react';
import { leadershipTeam, siteInfo } from '../data/ariscaData';
import { useCart } from '../context/CartContext';
import SeoHead from '../components/SeoHead';
import {
  Sparkles,
  Award,
  Users,
  Eye,
  CheckCircle2,
  Calendar,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Compass,
  ArrowRight,
  ShieldCheck,
  Zap,
  Lightbulb
} from 'lucide-react';

export default function AboutPage({ onNavigate }) {
  const { openConsultModal } = useCart();

  return (
    <div className="about-page-wrapper">
      <SeoHead
        title="About Arisca Light Studio | Architectural Lighting Destination Ahmedabad"
        description="Learn the story of Arisca Light Studio on Jagatpur Road, Ahmedabad. Founded to bring glare-free optical precision and bespoke lighting artistry to Gujarat's finest homes."
        keywords="about arisca light studio, lighting showroom jagatpur road, ahmedabad lighting founders, architectural downlight studio"
        canonicalUrl="/about"
      />

      {/* Hero Header */}
      <section className="about-hero-header">
        <div className="container">
          <div className="about-hero-badge-wrap">
            <span className="section-badge pulse-badge">
              <Sparkles size={14} /> Our Heritage & Vision
            </span>
          </div>
          <h1 className="about-main-title">
            Illuminating Spaces, <span className="text-gold-gradient">Inspiring Lives</span>
          </h1>
          <p className="about-main-subtitle">
            At Arisca Light Studio, lighting is more than functional illumination—it is the soul of architecture and the heartbeat of emotional comfort.
          </p>

          {/* Quick Heritage Stats */}
          <div className="about-stats-bar">
            <div className="about-stat-item">
              <span className="about-stat-val">500+</span>
              <span className="about-stat-lbl">Residences Commissioned</span>
            </div>
            <div className="about-stat-divider" />
            <div className="about-stat-item">
              <span className="about-stat-val">Jagatpur</span>
              <span className="about-stat-lbl">Live Experience Studio</span>
            </div>
            <div className="about-stat-divider" />
            <div className="about-stat-item">
              <span className="about-stat-val">UGR &lt; 19</span>
              <span className="about-stat-lbl">Certified Anti-Glare Optics</span>
            </div>
            <div className="about-stat-divider" />
            <div className="about-stat-item">
              <span className="about-stat-val">2 Years</span>
              <span className="about-stat-lbl">Comprehensive Studio Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story Grid */}
      <section className="section about-story-section">
        <div className="container">
          <div className="about-story-grid">
            <div className="story-content">
              <span className="section-badge">The Studio Journey</span>
              <h2>Crafting Atmospheric Elegance in Ahmedabad</h2>
              <p className="lead-paragraph">
                Arisca Light Studio was founded with a singular conviction: that extraordinary lighting fundamentally shapes how people live, entertain, and feel within their personal sanctuaries.
              </p>
              <p>
                Situated at <strong>B - 103, Money Plant High Street on Jagatpur Road</strong>, our studio serves as an experiential playground for discerning homeowners, premier architects, and luxury interior designers. We specialize in curating world-class chandeliers, architectural recessed COB spotlights, surface cylinders, and bespoke decorative fixtures.
              </p>
              <p>
                Unlike generic lighting retailers, we take complete technical ownership of your space—from laser measuring false ceiling cutouts and calculating LUX levels to white-glove electrical installation and precision beam focusing.
              </p>

              <div className="story-highlights-list">
                <div className="highlight-item">
                  <CheckCircle2 size={20} className="gold-text flex-shrink-0" />
                  <span>500+ Luxury Homes and Commercial Spaces Commissioned</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle2 size={20} className="gold-text flex-shrink-0" />
                  <span>Exclusive LOFY Deep-Set Architectural Downlights</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle2 size={20} className="gold-text flex-shrink-0" />
                  <span>Full In-Home Design Consultation & Photometric Planning</span>
                </div>
              </div>

              <div className="story-cta-row">
                <button className="btn btn-primary" onClick={openConsultModal}>
                  <Calendar size={16} /> Book Design Session
                </button>
                <button className="btn btn-secondary" onClick={() => onNavigate('/shop')}>
                  Browse Collection <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="story-images-layout">
              <div className="story-img-main">
                <img
                  src="/assets/optimized/projects/dsc09758-a01hkH3Y9uhcKEc0.webp"
                  alt="Arisca Light Studio Interior"
                  loading="lazy"
                />
              </div>
              <div className="story-img-sub">
                <img
                  src="/assets/optimized/projects/dsc09738-Zu3m7g53jinktiDJ.webp"
                  alt="Lighting Consultation Ahmedabad"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optical Philosophy Section */}
      <section className="section philosophy-section">
        <div className="container">
          <div className="philosophy-card">
            <div className="philosophy-header text-center">
              <span className="section-badge">Optical Principles</span>
              <h2>The Three Layers of Illumination</h2>
              <p>
                A well-lit room is never brightly lit from a single central glare source. True luxury is achieved through harmonious layering.
              </p>
            </div>

            <div className="layers-grid">
              <div className="layer-item">
                <div className="layer-icon-circle">01</div>
                <h3>Ambient Glow</h3>
                <p>
                  Gentle, indirect illumination through concealed ceiling coves and wall washers that establishes overall baseline comfort without visible harshness.
                </p>
              </div>

              <div className="layer-item">
                <div className="layer-icon-circle">02</div>
                <h3>Task Illumination</h3>
                <p>
                  Focused, high-CRI (90+ Ra) beams delivered to culinary prep islands, study desks, and vanity mirrors where optical clarity is paramount.
                </p>
              </div>

              <div className="layer-item">
                <div className="layer-icon-circle">03</div>
                <h3>Accent Sculpting</h3>
                <p>
                  Deep anti-glare COB spotlights calibrated at 36° beam angles to sculpt art canvases, textured Italian plaster, and curated book shelving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="section team-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-badge">
              <Users size={14} /> Driven by Passion
            </span>
            <h2 className="section-title">Meet Our Leadership Team</h2>
            <p className="section-subtitle max-w-600">
              Guided by engineering excellence and aesthetic mastery, our founders are committed to establishing Arisca Light Studio as Gujarat's premier architectural lighting studio.
            </p>
          </div>

          <div className="team-grid">
            {leadershipTeam.map((member) => (
              <div key={member.name} className="team-card">
                <div className="team-photo-wrap">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                  />
                  <div className="team-photo-overlay" />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <span className="team-role">{member.role}</span>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom Visit Callout */}
      <section className="section showroom-invite-section">
        <div className="container">
          <div className="showroom-card">
            <div className="showroom-content">
              <span className="section-badge">
                <MapPin size={14} /> Visit The Ahmedabad Showroom
              </span>
              <h2>Experience Our Studio in Jagatpur</h2>
              <p>
                We invite you to touch our dual-tone brushed finishes, observe honeycomb anti-glare louvers in action, and explore our full fixture library in a relaxed, curated atmosphere.
              </p>

              <div className="showroom-details">
                <div className="showroom-detail-item">
                  <MapPin size={18} className="gold-text" />
                  <span>B - 103, Money Plant High Street, Jagatpur Road, Ahmedabad</span>
                </div>
                <div className="showroom-detail-item">
                  <Clock size={18} className="gold-text" />
                  <span>Monday – Saturday: 10:00 am – 8:30 pm (Sunday Closed)</span>
                </div>
                <div className="showroom-detail-item">
                  <Phone size={18} className="gold-text" />
                  <span>Direct Showroom Line: +91 98980 86656</span>
                </div>
              </div>

              <div className="showroom-ctas">
                <button className="btn btn-primary" onClick={openConsultModal}>
                  <Calendar size={16} /> Schedule Showroom Tour
                </button>
                <a
                  href="https://maps.google.com/maps?q=Arisca%20light%20studio,%20B%20-%20103,%20Money%20Plant%20High%20Street,%20Ahmedabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Open in Google Maps &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
