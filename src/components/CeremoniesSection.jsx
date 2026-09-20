import React from 'react';

export default function CeremoniesSection() {
  const events = [
    {
      time: '11:00 AM',
      name: 'Ring Ceremony',
      text: 'The sacred exchange of engagement rings amidst Vedic chanting, blessings of elders, and celebratory applause.',
      icon: (
        <svg className="ceremony-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="14" r="7" />
          <polygon points="12,3 15,8 9,8" fill="currentColor" />
        </svg>
      ),
    },
    {
      time: '11:30 AM',
      name: 'Cake Cutting & Toast',
      text: 'Sweetening the commencement of a lifetime together with joyful toasts, candid photography, and music.',
      icon: (
        <svg className="ceremony-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 11h16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1z" />
          <path d="M7 11V7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4" />
          <line x1="12" y1="2" x2="12" y2="6" />
          <line x1="3" y1="16" x2="21" y2="16" />
        </svg>
      ),
    },
    {
      time: '01:00 PM',
      name: 'Royal Lunch Feast',
      text: 'A sumptuous banquet celebrating traditional delicacies, artisanal Indian sweets, and festive refreshments.',
      icon: (
        <svg className="ceremony-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M18 2v20" />
          <path d="M21 2c0 2.5-1.5 4.5-3 5" />
          <path d="M3 2v6c0 1.7 1.3 3 3 3h1a3 3 0 0 0 3-3V2" />
          <path d="M7 11v11" />
        </svg>
      ),
    },
  ];

  return (
    <div className="itinerary-seamless-flow" id="ceremonies">
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
        <span className="subtitle-swash">Auspicious Celebrations</span>
        <h2 className="main-flow-title">Ceremony Itinerary</h2>
      </div>

      <div className="itinerary-events-row">
        {events.map((event, idx) => (
          <div key={idx} className="itinerary-flow-item">
            <div className="event-glyph">{event.icon}</div>
            <span className="event-time-tag">{event.time}</span>
            <h3 className="event-name">{event.name}</h3>
            <p className="event-text">{event.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
