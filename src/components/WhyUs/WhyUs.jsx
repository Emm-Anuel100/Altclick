import React, { useEffect, useRef, useState } from 'react';
import './WhyUs.scss';

const WhyUs = () => {
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

  const features = [
    {
      id: 1,
      icon: 'fas fa-laptop-code',
      title: 'Practical Training',
      description: 'Curriculum designed around real-world projects, not just theory.',
    },
    {
      id: 2,
      icon: 'fas fa-user-tie',
      title: 'Expert Mentors',
      description: 'Learn directly from professionals currently working in the industry.',
    },
    {
      id: 3,
      icon: 'fas fa-briefcase',
      title: 'Career Focused',
      description: 'CV reviews, interview prep, and direct links to hiring partners.',
    },
    {
      id: 4,
      icon: 'fas fa-users',
      title: 'Supportive Community',
      description: 'Join a network of peers and alumni who help each other grow.',
    },
  ];

  return (
    <section className="why-us" id="why-us" ref={sectionRef}>
      <div className="why-us__container">
        {/* Header */}
        <div className={`why-us__header ${isVisible ? 'why-us__header--visible' : ''}`}>
          <h2 className="why-us__title">Why Choose AltClick?</h2>
          <p className="why-us__subtitle">
            We provide an ecosystem that nurtures growth and excellence.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="why-us__grid">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`why-us__card ${isVisible ? 'why-us__card--visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="why-us__card-icon">
                <i className={feature.icon}></i>
              </div>
              <h3 className="why-us__card-title">{feature.title}</h3>
              <p className="why-us__card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;