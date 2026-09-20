import React from 'react';

export default function SectionDivider() {
  return (
    <div className="flow-divider" aria-hidden="true">
      <span className="flow-line" />
      <div className="floral-divider-motif">
        <svg className="floral-flourish-divider-svg" viewBox="0 0 100 28" fill="none">
          <path
            d="M5,14 C25,6 38,22 50,14 C62,22 75,6 95,14"
            stroke="#c9a85c"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <path
            d="M22,10 C25,5 33,7 31,12 C28,15 23,13 22,10 Z"
            fill="#c9a85c"
            opacity="0.85"
          />
          <path
            d="M78,10 C75,5 67,7 69,12 C72,15 77,13 78,10 Z"
            fill="#c9a85c"
            opacity="0.85"
          />
          <path
            d="M35,17 C34,22 41,23 42,18 C41,15 36,15 35,17 Z"
            fill="#ffd700"
            opacity="0.9"
          />
          <path
            d="M65,17 C66,22 59,23 58,18 C59,15 64,15 65,17 Z"
            fill="#ffd700"
            opacity="0.9"
          />
          <circle cx="50" cy="14" r="4.5" fill="#8b182b" stroke="#d4af37" strokeWidth="1" />
          <circle cx="44" cy="14" r="1.8" fill="#ffd700" />
          <circle cx="56" cy="14" r="1.8" fill="#ffd700" />
          <circle cx="50" cy="8" r="1.8" fill="#ffd700" />
          <circle cx="50" cy="20" r="1.8" fill="#ffd700" />
          <circle cx="50" cy="14" r="1.5" fill="#ffffff" />
        </svg>
      </div>
      <span className="flow-line" />
    </div>
  );
}
