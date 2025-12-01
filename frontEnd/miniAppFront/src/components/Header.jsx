import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // ✅ REQUIRED
import '../styles/Header.css';

const Header = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Home', 'Order', 'Our Customers', 'About us', 'Contact Us'];
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: "SE", label: "Svenska", flag: "/images/SE.png" },
    { code: "EN", label: "English", flag: "/images/GB.png" }
  ]

  const [selectedLang, setSelectedLang] = useState(languages[0])

  const handleLinkClick = (item) => {
    setActiveLink(item);
    setIsMenuOpen(false);
  };

  const handleSelect = (lang) => {
    setSelectedLang(lang)
    setIsOpen(false)
  }

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
        {/* <div className="language-selector">
          <span className="language-text">English</span>
          <img 
            src="/images/GB.png"
            alt="English"
            className="flag-icon"
          />
        </div> */}

        <div className="language-selector">

          <button
            className="language-trigger"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="language-text">{selectedLang.label}</span>
            <img src={selectedLang.flag} alt={selectedLang.label} className="flag-icon" />
          </button>

          {isOpen && (
            <div className="language-dropdown">
              {languages.map(lang => (
                <div
                  key={lang.code}
                  className="language-option"
                  onClick={() => handleSelect(lang)}
                >
                  <span>{lang.label}</span>
                  <img src={lang.flag} className="flag-icon" alt={lang.label} />
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </header>
  );
};

export default Header;
