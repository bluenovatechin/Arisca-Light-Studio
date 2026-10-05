import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Calendar, MessageCircle } from 'lucide-react';

export default function LightboxModal() {
  const { activeLightbox, closeLightbox, openConsultModal } = useCart();

  if (!activeLightbox) return null;

  const handleConsult = () => {
    closeLightbox();
    openConsultModal();
  };

  const handleWhatsApp = () => {
    const text = `Hello Arisca Light Studio, I saw this client installation: "${activeLightbox.caption}" and would love to achieve a similar lighting look in my home.`;
    window.open(`https://wa.me/919898086656?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="lightbox-backdrop" onClick={closeLightbox}>
      <div className="lightbox-wrapper" onClick={(e) => e.stopPropagation()}>
        <button
          className="lightbox-close-btn"
          onClick={closeLightbox}
          aria-label="Close lightbox"
        >
          <X size={24} />
        </button>

        <div className="lightbox-image-container">
          <img
            src={activeLightbox.url}
            alt={activeLightbox.caption || 'Client Installation'}
            className="lightbox-img"
          />
        </div>

        <div className="lightbox-caption-bar">
          <div className="lightbox-caption-text">
            <h3>{activeLightbox.caption || 'Client Architectural Project'}</h3>
            <p>Bespoke LOFY architectural downlights & custom lighting layout by Arisca Light Studio.</p>
          </div>

          <div className="lightbox-actions">
            <button className="btn btn-primary btn-sm" onClick={handleConsult}>
              <Calendar size={14} /> Book Similar Design
            </button>
            <button className="btn btn-whatsapp btn-sm" onClick={handleWhatsApp}>
              <MessageCircle size={14} /> WhatsApp Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
