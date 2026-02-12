import React, { useState } from 'react';
import Hero_img from '../../../public/images/hero_image.jpg'
import './Hero.scss';

const Hero = () => {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openMapModal = () => {
    setIsMapModalOpen(true);
  };

  const closeMapModal = () => {
    setIsMapModalOpen(false);
  };

  return (
    <section className="hero" id="home">
      <div className="hero__container">
        {/* Left Content */}
        <div className="hero__content">
          {/* Location Badge */}
          <div className="hero__badge" onClick={openMapModal}>
            <i className="fas fa-map-marker-alt"></i>
            <span>ABUJA, NIGERIA</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero__title">
            Launch Your Tech Career in Abuja
          </h1>

          {/* Description */}
          <p className="hero__description">
            Practical coding skills for the modern world. Join a supportive environment designed
            to get you hired in the global tech market.
          </p>

          {/* CTA Buttons */}
          <div className="hero__cta-group">
            <button 
              className="hero__cta hero__cta--primary"
              onClick={() => scrollToSection('apply')}
            >
              Apply Now
            </button>
            <button 
              className="hero__cta hero__cta--secondary"
              onClick={() => scrollToSection('courses')}
            >
              View Courses
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero__image-wrapper">
          <img 
            src={Hero_img} 
            alt="Team collaborating on tech project" 
            className="hero__image"
          />
        </div>
      </div>

      {/* Map Modal */}
      {isMapModalOpen && (
        <div className="map-modal" onClick={closeMapModal}>
          <div className="map-modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="map-modal__close" onClick={closeMapModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="map-modal__iframe-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7998115205387!2d7.555688870625733!3d8.990560428322373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0f0017d57361%3A0x172ceda55db3e36f!2sBetter%20Gas%2C%20Amada%20plaza%2C%20Jikwoyi!5e0!3m2!1sen!2sng!4v1770910101984!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jikwoyi Abuja, Nigeria"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;