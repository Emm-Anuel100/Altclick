import React, { useEffect, useRef, useState } from 'react';
import './About.scss';
import Image_about from '../../../public/images/about_img.jpg'

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about__container">
        {/* Left Content */}
        <div className={`about__content ${isVisible ? 'about__content--visible' : ''}`}>
          {/* Section Label */}
          <span className="about__label">ABOUT ALTCLICK</span>

          {/* Main Heading */}
          <h2 className="about__title">
            We bridge the gap between talent and opportunity.
          </h2>

          {/* Description */}
          <p className="about__description">
            AltClick is Abuja's premier tech academy focusing on practical learning and industry-relevant skills. We don't just teach you how to code; we prepare you for the realities of the global tech market.
          </p>

          {/* Features List */}
          <ul className="about__features">
            <li className="about__feature">
              <i className="fas fa-check-circle"></i>
              <span>Hands-on, project-based curriculum</span>
            </li>
            <li className="about__feature">
              <i className="fas fa-check-circle"></i>
              <span>Mentorship from industry experts</span>
            </li>
            <li className="about__feature">
              <i className="fas fa-check-circle"></i>
              <span>Career support and job placement assistance</span>
            </li>
          </ul>

          {/* CTA Button */}
          <button className="about__cta">Learn More</button>
        </div>

        {/* Right Image */}
        <div className={`about__image-wrapper ${isVisible ? 'about__image-wrapper--visible' : ''}`}>
          <img 
            src={Image_about} 
            alt="Team collaborating at AltClick" 
            className="about__image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;