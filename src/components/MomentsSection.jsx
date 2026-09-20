import React from 'react';
import ringImg from '../assets/ring_ceremony.jpg';
import palaceImg from '../assets/palace_celebration.jpg';
import portraitImg from '../assets/couple_portrait.jpg';

export default function MomentsSection({ onOpenLightbox }) {
  const moments = [
    {
      src: ringImg,
      title: 'The Sacred Ring Exchange',
      caption: 'The Sacred Ring Exchange',
    },
    {
      src: palaceImg,
      title: 'Palace Courtyard Celebrations',
      caption: 'Palace Courtyard Celebrations',
    },
    {
      src: portraitImg,
      title: 'Soulmates in Grace',
      caption: 'Soulmates in Grace',
    },
  ];

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5.5;
    const rotateY = ((x - centerX) / centerX) * 5.5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px) scale3d(1.015, 1.015, 1.015)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale3d(1, 1, 1)';
  };

  return (
    <div className="moments-seamless-flow">
      <div className="section-title-block">
        <div className="title-floral-sprig">
          <svg viewBox="0 0 54 18" fill="none" className="title-floral-sprig-svg">
            <path
              d="M3,9 C15,4 22,14 27,9 C32,14 39,4 51,9"
              stroke="#c9a85c"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <circle cx="27" cy="9" r="2.8" fill="#8b182b" stroke="#d4af37" strokeWidth="0.8" />
            <circle cx="22" cy="8" r="1.3" fill="#ffd700" />
            <circle cx="32" cy="8" r="1.3" fill="#ffd700" />
            <path d="M16,5 C18,3 21,6 19,9 C17,9 15,7 16,5 Z" fill="#c9a85c" />
            <path d="M38,5 C36,3 33,6 35,9 C37,9 39,7 38,5 Z" fill="#c9a85c" />
          </svg>
        </div>
        <span className="subtitle-swash">Captured in Love</span>
        <h2 className="main-flow-title">Cherished Moments</h2>
      </div>

      <div className="moments-trio-row">
        {moments.map((item, idx) => (
          <div
            key={idx}
            className="moment-item"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => onOpenLightbox(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onOpenLightbox(item)}
            aria-label={`View photo: ${item.title}`}
          >
            <img src={item.src} alt={item.title} />
            <span className="moment-caption">{item.caption}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
