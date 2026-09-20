import React from 'react';
import floralFrame from '../assets/royal_full_floral_frame.png';

export default function RoyalBorders() {
  return (
    <>
      {/* Full Webpage Royal Border Frame with Double Gold Lines */}
      <div className="royal-fullpage-border-outer" aria-hidden="true" />
      <div className="royal-fullpage-border-inner" aria-hidden="true" />

      {/* Animated Unified Royal Floral Frame (Single Master Image) */}
      <div className="royal-unified-frame-overlay" aria-hidden="true">
        <img
          src={floralFrame}
          className="royal-unified-frame-img"
          alt="Royal Wedding Floral Border Frame"
        />
      </div>
    </>
  );
}
