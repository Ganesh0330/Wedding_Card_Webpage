import React, { useRef } from 'react';
import brideImg from '../assets/bride_ananya.jpg';
import groomImg from '../assets/groom_aarav.jpg';

export default function CoupleSection() {
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
    <div className="couple-seamless-flow" id="couple">
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
        <span className="subtitle-swash">Two Souls, One Heart</span>
        <h2 className="main-flow-title">The Royal Couple</h2>
      </div>

      <div className="couple-profiles-duo">
        {/* Bride Profile */}
        <div
          className="profile-duo-item"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="avatar-circular-frame">
            <img src={brideImg} alt="Ananya Sharma" className="avatar-img" />
          </div>
          <span className="role-tag">The Beautiful Bride</span>
          <h3 className="profile-title-name">Ananya Sharma</h3>
          <p className="profile-parent-line">D/o Mr. Rajesh & Mrs. Sunita Sharma</p>
          <p className="profile-story">
            “A free spirit wrapped in grace, Ananya moves through life with quiet confidence, an infectious laugh, and a kindness that makes everyone around her feel at home.”
          </p>
        </div>

        {/* Groom Profile */}
        <div
          className="profile-duo-item"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="avatar-circular-frame">
            <img src={groomImg} alt="Aarav Verma" className="avatar-img" />
          </div>
          <span className="role-tag">The Handsome Groom</span>
          <h3 className="profile-title-name">Aarav Verma</h3>
          <p className="profile-parent-line">S/o Mr. Anand & Mrs. Kavitha Verma</p>
          <p className="profile-story">
            “A gentle soul with a poet's heart and an architect's mind, Aarav finds beauty in the details, whether in the curve of a building or the warmth of a quiet afternoon.”
          </p>
        </div>
      </div>
    </div>
  );
}
