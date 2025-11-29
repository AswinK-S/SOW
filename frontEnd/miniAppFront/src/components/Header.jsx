import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // ✅ REQUIRED
import '../styles/Header.css';

const Header = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Home', 'Order', 'Our Customers', 'About us', 'Contact Us'];

  const handleLinkClick = (item) => {
    setActiveLink(item);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">

        {/* Hamburger Button */}
        <button 
          className="hamburger-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <div className="logo">
          <img 
            src="/images/diamond.png"
            alt="Logo"
            className="logo-image"
          />
        </div>

        {/* Navigation */}
        <nav className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className={`nav-link ${activeLink === item ? 'active' : ''}`}
              onClick={() => handleLinkClick(item)}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Language Selector */}
        <div className="language-selector">
          <span className="language-text">English</span>
          <img 
            src="/images/GB.png"
            alt="English"
            className="flag-icon"
          />
        </div>

      </div>
    </header>
  );
};

export default Header;
