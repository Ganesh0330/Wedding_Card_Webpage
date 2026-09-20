import React from 'react';

export default function VenueSection() {
  return (
    <div className="venue-seamless-flow" id="venue">
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
        <span className="subtitle-swash">The Destination</span>
        <h2 className="main-flow-title">Celebration Venue</h2>
      </div>

      <div className="venue-info-wrap">
        <span className="venue-date-badge">SATURDAY, 31ST OCTOBER 2026 • 11:00 AM ONWARDS</span>
        <h3 className="venue-palace-heading">Hall Complex</h3>
        <p className="venue-detailed-address">
          1st B Cross Road, 7th Block, Koramangala,<br />
          Bengaluru, Karnataka, India - 560095
        </p>

        <p className="rsvp-contacts-line">
          RSVP Contacts: +91 8556856701, +91 6239153156, +91 8264522870
        </p>

        <div className="venue-action-buttons">
          <a
            href="https://maps.google.com/?q=Hall+Complex+Koramangala+Bengaluru"
            target="_blank"
            rel="noopener noreferrer"
            className="royal-btn-gold"
          >
            <svg className="btn-inline-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Open in Google Maps</span>
          </a>
          <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Ananya+%26+Aarav+Engagement+Celebration&dates=20261031T053000Z/20261031T103000Z&details=Engagement+celebration+of+Ananya+Sharma+and+Aarav+Verma&location=Hall+Complex,+Koramangala,+Bengaluru"
            target="_blank"
            rel="noopener noreferrer"
            className="royal-btn-outline"
          >
            <svg className="btn-inline-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>Add to Google Calendar</span>
          </a>
          <a
            href="https://api.whatsapp.com/send?text=Hi+Ananya+%26+Aarav%21+I+am+delighted+to+confirm+my+presence+at+your+Engagement+Celebration+on+31st+October+2026."
            target="_blank"
            rel="noopener noreferrer"
            className="royal-btn-outline"
          >
            <svg className="btn-inline-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <span>RSVP via WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
