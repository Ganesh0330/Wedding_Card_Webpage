import React, { useState, useEffect } from 'react';
import ganeshaEmblem from '../assets/ganesha_emblem.jpg';
import couplePortrait from '../assets/couple_portrait.jpg';

export default function HeroInvitation() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    mins: '00',
    secs: '00',
  });

  useEffect(() => {
    const targetDate = new Date('October 31, 2026 11:00:00 GMT+0530').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft({ days: '00', hours: '00', mins: '00', secs: '00' });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        mins: String(minutes).padStart(2, '0'),
        secs: String(seconds).padStart(2, '0'),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-seamless-announcement" id="invitation">
      {/* Sacred Divine Invocation Header */}
      <div className="divine-invocation">
        <div className="ganesha-frame">
          <img src={ganeshaEmblem} alt="Lord Ganesha Emblem" />
        </div>
        <h2 className="divine-shloka">॥ ॐ श्री गणेशाय नमः ॥</h2>
        <p className="divine-subtext">
          “Vakratunda Mahakaya Suryakoti Samaprabha, Nirvighnam Kuru Me Deva Sarva-Karyeshu Sarvada”
        </p>

        {/* Golden Floral Crest Flourish */}
        <div className="royal-flourish-heart">
          <span className="flourish-line" />
          <svg className="floral-crest-svg" viewBox="0 0 80 24" fill="none" style={{ width: 80, height: 24 }}>
            <path
              d="M5,12 C20,3 30,21 40,12 C50,21 60,3 75,12"
              stroke="#d4af37"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <circle cx="40" cy="12" r="4.2" fill="#8b182b" stroke="#d4af37" strokeWidth="1" />
            <circle cx="34" cy="12" r="2" fill="#ffd700" />
            <circle cx="46" cy="12" r="2" fill="#ffd700" />
            <circle cx="40" cy="6.2" r="2" fill="#ffd700" />
            <circle cx="40" cy="17.8" r="2" fill="#ffd700" />
            <path d="M22,7 C26,4 30,8 28,12 C24,13 21,10 22,7 Z" fill="#c9a85c" />
            <path d="M58,7 C54,4 50,8 52,12 C56,13 59,10 58,7 Z" fill="#c9a85c" />
          </svg>
          <span className="flourish-line" />
        </div>

        <p className="invite-eyebrow">
          TOGETHER WITH THEIR FAMILIES • YOU ARE CORDIALLY INVITED TO CELEBRATE THE
        </p>
      </div>

      {/* Calligraphy Titles */}
      <div className="engagement-title-wrapper">
        <span className="save-the-date-swash">Save the Date</span>
        <h1 className="engagement-calligraphy">Engagement</h1>
      </div>

      {/* Couple Names with Interlocked Rings Emblem */}
      <div className="couple-names-block">
        <div className="couple-person">
          <div className="couple-person-name">Ananya</div>
          <div className="couple-person-role">(BRIDE)</div>
        </div>

        <div className="couple-ring-emblem">
          <svg className="ring-icon-svg" viewBox="0 0 100 100">
            <circle cx="42" cy="50" r="22" fill="none" stroke="#d4af37" strokeWidth="4.5" />
            <circle cx="58" cy="50" r="22" fill="none" stroke="#c9a85c" strokeWidth="4.5" />
            <polygon points="50,22 54,30 46,30" fill="#ffd700" />
            <circle cx="50" cy="20" r="3.5" fill="#ffffff" stroke="#d4af37" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="couple-person">
          <div className="couple-person-name">Aarav</div>
          <div className="couple-person-role">(GROOM)</div>
        </div>
      </div>

      {/* Delicate Golden Botanical Swag under Names */}
      <div className="names-botanical-swag">
        <svg viewBox="0 0 100 20" fill="none" className="botanical-swag-svg">
          <path
            d="M10,10 C30,3 45,17 50,10 C55,17 70,3 90,10"
            stroke="#c9a85c"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <circle cx="50" cy="10" r="2.8" fill="#8b182b" />
          <path d="M28,6 C31,4 34,7 32,10 C29,11 27,9 28,6 Z" fill="#ffd700" />
          <path d="M72,6 C69,4 66,7 68,10 C71,11 73,9 72,6 Z" fill="#ffd700" />
        </svg>
      </div>

      {/* Royal Couple Watercolor Illustration Frame */}
      <div className="hero-portrait-wrap">
        <div className="portrait-arch-frame">
          <div className="portrait-inner-frame">
            <img src={couplePortrait} alt="Ananya & Aarav Engagement" className="portrait-img" />
          </div>
          <div className="portrait-arch-accent-gold" />
        </div>
      </div>

      {/* Quick Event Metadata Row with Laurel Branches */}
      <div className="quick-meta-container">
        <div className="quick-meta-flow">
          <svg className="laurel-wing-svg laurel-left" viewBox="0 0 50 30" fill="none">
            <path d="M48,24 C32,20 16,16 4,8" stroke="#c9a85c" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M36,18 C36,11 31,9 29,13 C27,17 32,20 36,18 Z" fill="#ffd700" stroke="#c9a85c" strokeWidth="0.8" />
            <path d="M24,14 C23,7 18,7 17,10 C16,14 21,16 24,14 Z" fill="#ffd700" stroke="#c9a85c" strokeWidth="0.8" />
            <path d="M12,10 C9,4 5,6 5,9 C6,12 10,13 12,10 Z" fill="#ffd700" stroke="#c9a85c" strokeWidth="0.8" />
          </svg>
          <div className="meta-item">
            <svg className="meta-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span className="meta-label">DATE</span>
            <span className="meta-val">31 OCT 2026</span>
          </div>
          <div className="meta-divider-dot">•</div>
          <div className="meta-item">
            <svg className="meta-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span className="meta-label">TIME</span>
            <span className="meta-val">11:00 AM</span>
          </div>
          <div className="meta-divider-dot">•</div>
          <div className="meta-item">
            <svg className="meta-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="meta-label">VENUE</span>
            <span className="meta-val">Bengaluru</span>
          </div>
          <svg className="laurel-wing-svg laurel-right" viewBox="0 0 50 30" fill="none">
            <path d="M2,24 C18,20 34,16 46,8" stroke="#c9a85c" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M14,18 C14,11 19,9 21,13 C23,17 18,20 14,18 Z" fill="#ffd700" stroke="#c9a85c" strokeWidth="0.8" />
            <path d="M26,14 C27,7 32,7 33,10 C34,14 29,16 26,14 Z" fill="#ffd700" stroke="#c9a85c" strokeWidth="0.8" />
            <path d="M38,10 C41,4 45,6 45,9 C44,12 40,13 38,10 Z" fill="#ffd700" stroke="#c9a85c" strokeWidth="0.8" />
          </svg>
        </div>
      </div>

      {/* Real-time Countdown Timer */}
      <div className="countdown-flow">
        <h3 className="countdown-title">Let the countdown begin</h3>
        <div className="countdown-digits-row">
          <div className="timer-digit-box">
            <span id="timer-days" className="digit-val">{timeLeft.days}</span>
            <span className="digit-label">DAYS</span>
          </div>
          <div className="timer-digit-box">
            <span id="timer-hours" className="digit-val">{timeLeft.hours}</span>
            <span className="digit-label">HOURS</span>
          </div>
          <div className="timer-digit-box">
            <span id="timer-mins" className="digit-val">{timeLeft.mins}</span>
            <span className="digit-label">MINS</span>
          </div>
          <div className="timer-digit-box">
            <span id="timer-secs" className="digit-val">{timeLeft.secs}</span>
            <span className="digit-label">SECS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
