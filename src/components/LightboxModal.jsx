import React, { useEffect } from 'react';

export default function LightboxModal({ item, onClose }) {
  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      id="gallery-lightbox"
      className="lightbox-modal active"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="lightbox-close"
          className="lightbox-close-btn"
          onClick={onClose}
          title="Close"
          aria-label="Close image"
        >
          <svg className="close-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <img
          id="lightbox-img"
          src={item.src}
          alt={item.title || 'Zoomed moment'}
          className="lightbox-img"
        />
        <div id="lightbox-caption" className="lightbox-caption">
          {item.title}
        </div>
      </div>
    </div>
  );
}
