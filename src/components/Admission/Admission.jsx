import React, { useEffect, useRef, useState } from 'react';
import './Admission.scss';

const Admission = () => {
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
        threshold: 0.1,
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

  const requirements = [
    {
      id: 1,
      icon: 'fas fa-laptop',
      title: 'A Laptop',
      description: 'Windows or Mac with at least 8GB RAM.',
    },
    {
      id: 2,
      icon: 'fas fa-wifi',
      title: 'Internet Access',
      description: 'Reliable connection for research and assignments.',
    },
    {
      id: 3,
      icon: 'fas fa-lightbulb',
      title: 'Willingness to Learn',
      description: 'Curiosity and dedication are your best tools.',
    },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="admission" id="requirements" ref={sectionRef}>
      <div className="admission__container">
        {/* Left Content */}
        <div className={`admission__content ${isVisible ? 'admission__content--visible' : ''}`}>
          <h2 className="admission__title">Admission Requirements</h2>
          <p className="admission__subtitle">
            We keep it simple. You bring the passion, we provide the path.
          </p>

          {/* Requirements List */}
          <div className="admission__requirements">
            {requirements.map((req, index) => (
              <div
                key={req.id}
                className={`admission__requirement ${isVisible ? 'admission__requirement--visible' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="admission__requirement-icon">
                  <i className={req.icon}></i>
                </div>
                <div className="admission__requirement-text">
                  <h3 className="admission__requirement-title">{req.title}</h3>
                  <p className="admission__requirement-description">{req.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Link */}
          <button 
            className="admission__cta"
            onClick={() => scrollToSection('contact')}
          >
            See Full Requirements <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        {/* Right Illustration */}
        <div className={`admission__illustration ${isVisible ? 'admission__illustration--visible' : ''}`}>
          <img 
            src="/images/application.jpg" 
            alt="Requirements checklist illustration" 
            className="admission__image"
          />
        </div>
      </div>
    </section>
  );
};

export default Admission;