import React, { useState } from 'react';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="header">
      <div className="header__container">
        {/* Logo - clickable, redirects to home */}
        <a 
          href="#" 
          className="header__logo"
        >
          <i className="fa-regular fa-image"></i>
          <span className="header__logo-text">AltClick</span>
        </a>

        {/* Desktop Navigation */}
        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__menu">
            <li className="header__menu-item">
              <a 
                href="#about" 
                className="header__menu-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
              >
                About
              </a>
            </li>
            <li className="header__menu-item">
              <a 
                href="#courses" 
                className="header__menu-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('courses');
                }}
              >
                Courses
              </a>
            </li>
            <li className="header__menu-item">
              <a 
                href="#requirements" 
                className="header__menu-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('requirements');
                }}
              >
                Requirements
              </a>
            </li>
            <li className="header__menu-item">
              <a 
                href="#contact" 
                className="header__menu-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* CTA Button */}
          <button 
            className="header__cta"
            onClick={() => scrollToSection('apply')}
          >
            Apply Now
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="header__toggle" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
    </header>
  );
};

export default Header;