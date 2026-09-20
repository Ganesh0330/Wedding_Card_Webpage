import React, { useState, useEffect } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('invitation');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['invitation', 'couple', 'ceremonies', 'video-wishes', 'venue'];
      const scrollY = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Invitation', href: '#invitation', id: 'invitation' },
    { label: 'The Couple', href: '#couple', id: 'couple' },
    { label: 'Ceremonies', href: '#ceremonies', id: 'ceremonies' },
    { label: 'Video Wishes', href: '#video-wishes', id: 'video-wishes' },
    { label: 'Venue', href: '#venue', id: 'venue' },
  ];

  return (
    <header className={`royal-minimal-nav ${isScrolled ? 'scrolled' : ''}`}>
      <nav>
        <ul className="nav-links-minimal">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={activeSection === item.id ? 'active' : ''}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
