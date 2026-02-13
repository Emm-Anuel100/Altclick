import React, { useEffect, useRef, useState } from 'react';
import './Courses.scss';

const Courses = () => {
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

  const courses = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Master HTML, CSS, JavaScript, and React to build modern, responsive...',
      level: 'Beginner',
      duration: '12 Weeks',
      image: '/images/web_development.jpg',
    },
    {
      id: 2,
      title: 'Data Analysis',
      description: 'Learn to interpret data, create visualizations, and drive decision-...',
      level: 'Intermediate',
      duration: '10 Weeks',
      image: '/images/data_analysis.jpg',
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'Understand user needs and design intuitive, beautiful interfaces using...',
      level: 'Beginner',
      duration: '8 Weeks',
      image: '/images/uiux.jpg',
    },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="courses" id="courses" ref={sectionRef}>
      <div className="courses__container">
        {/* Header */}
        <div className={`courses__header ${isVisible ? 'courses__header--visible' : ''}`}>
          <div className="courses__header-content">
            <h2 className="courses__title">Courses Offered</h2>
            <p className="courses__subtitle">Master in-demand skills with our structured programs.</p>
          </div>
          <button 
            className="courses__view-all"
            onClick={() => scrollToSection('contact')}
          >
            View all courses <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        {/* Course Cards */}
        <div className="courses__grid">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`courses__card ${isVisible ? 'courses__card--visible' : ''}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="courses__card-image">
                <img src={course.image} alt={course.title} />
              </div>
              <div className="courses__card-content">
                <h3 className="courses__card-title">{course.title}</h3>
                <p className="courses__card-description">{course.description}</p>
                
                <div className="courses__card-meta">
                  <span className="courses__card-badge courses__card-badge--level">
                    {course.level}
                  </span>
                  <span className="courses__card-badge courses__card-badge--duration">
                    <i className="far fa-clock"></i> {course.duration}
                  </span>
                </div>

                <button className="courses__card-cta">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;