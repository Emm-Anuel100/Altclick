import React from 'react';
import './Footer.scss';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About Us', id: 'about' },
    { name: 'Courses', id: 'courses' },
    { name: 'Admissions', id: 'requirements' },
    { name: 'Contact', id: 'contact' },
  ];

  const courses = [
    { name: 'Web Development', id: 'courses' },
    { name: 'Data Analysis', id: 'courses' },
    { name: 'UI/UX Design', id: 'courses' },
    { name: 'Graphic Design', id: 'courses' },
  ];

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__container">
          {/* Brand Section */}
          <div className="footer__brand">
            <div className="footer__logo">
              <i className="fa-regular fa-image"></i>
              <span className="footer__logo-text">AltClick</span>
            </div>
            <p className="footer__tagline">
              Empowering the next generation of tech leaders in Nigeria through practical education.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer__links-group">
            <h3 className="footer__links-title">Quick Links</h3>
            <ul className="footer__links">
              {quickLinks.map((link, index) => (
                <li key={index} className="footer__link-item">
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="footer__link"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="footer__links-group">
            <h3 className="footer__links-title">Courses</h3>
            <ul className="footer__links">
              {courses.map((course, index) => (
                <li key={index} className="footer__link-item">
                  <button
                    onClick={() => scrollToSection(course.id)}
                    className="footer__link"
                  >
                    {course.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
         <div className="footer__links-group">
         <h3 className="footer__links-title">Follow Us</h3>
        <div className="footer__social">
            {/* Facebook */}
            <a href="https://web.facebook.com/profile.php?id=61576178756024&_rdc=1&_rdr#" target='_blank' className="footer__social-link" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
            </a>
            
            {/* X (formerly Twitter) */}
            <a href="https://x.com/altclickictltd" target='_blank' className="footer__social-link" aria-label="X (formerly Twitter)">
            <i className="fab fa-x-twitter"></i>
            </a>
            
            {/* LinkedIn */}
            <a href="https://www.linkedin.com" target='_blank' className="footer__social-link" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
            </a>
        </div>
        </div>
        </div>
      </div>

      {/* Google Maps */}
      <div className="footer__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7998115205387!2d7.555688870625733!3d8.990560428322373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0f0017d57361%3A0x172ceda55db3e36f!2sBetter%20Gas%2C%20Amada%20plaza%2C%20Jikwoyi!5e0!3m2!1sen!2sng!4v1770910101984!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="AltClick Location Map"
        ></iframe>
      </div>

      {/* Copyright */}
      <div className="footer__bottom">
        <div className="footer__container footer">
          <p className="footer__copyright">
            © 2022 - {new Date().getFullYear()} AltClick Tech Academy. All rights reserved. Abuja, Nigeria.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;