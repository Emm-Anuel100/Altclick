import React, { useEffect, useRef, useState } from 'react';
import './Application.scss';

const Application = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [graduatesCount, setGraduatesCount] = useState(0);
  const [hiringRateCount, setHiringRateCount] = useState(0);
  const sectionRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
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

  // Counter animation effect
  useEffect(() => {
    if (isVisible) {
      // Animate graduates counter to 500+
      let graduatesStart = 0;
      const graduatesEnd = 500;
      const graduatesDuration = 2000; // 2 seconds
      const graduatesIncrement = graduatesEnd / (graduatesDuration / 16);

      const graduatesTimer = setInterval(() => {
        graduatesStart += graduatesIncrement;
        if (graduatesStart >= graduatesEnd) {
          setGraduatesCount(graduatesEnd);
          clearInterval(graduatesTimer);
        } else {
          setGraduatesCount(Math.floor(graduatesStart));
        }
      }, 16);

      // Animate hiring rate to 90%
      let hiringStart = 0;
      const hiringEnd = 90;
      const hiringDuration = 2000;
      const hiringIncrement = hiringEnd / (hiringDuration / 16);

      const hiringTimer = setInterval(() => {
        hiringStart += hiringIncrement;
        if (hiringStart >= hiringEnd) {
          setHiringRateCount(hiringEnd);
          clearInterval(hiringTimer);
        } else {
          setHiringRateCount(Math.floor(hiringStart));
        }
      }, 16);

      return () => {
        clearInterval(graduatesTimer);
        clearInterval(hiringTimer);
      };
    }
  }, [isVisible]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Alert message 
    alert('Application submitted! We will contact you soon.');
    setFormData({ fullName: '', email: '', phone: '', course: '' });
  };

  return (
    <section className="application" id="apply" ref={sectionRef}>
      <div className="application__container">
        {/* Left Content */}
        <div className={`application__content ${isVisible ? 'application__content--visible' : ''}`}>
          <h2 className="application__title">Ready to Start Your Journey?</h2>
          <p className="application__description">
            Apply now to secure your spot in our next cohort. Spaces are limited for our personalized training programs.
          </p>

          {/* Stats */}
          <div className="application__stats">
            <div className="application__stat">
              <div className="application__stat-number">{graduatesCount}+</div>
              <div className="application__stat-label">Graduates</div>
            </div>
            <div className="application__stat">
              <div className="application__stat-number">{hiringRateCount}%</div>
              <div className="application__stat-label">Hiring Rate</div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className={`application__form-wrapper ${isVisible ? 'application__form-wrapper--visible' : ''}`}>
          <form className="application__form" onSubmit={handleSubmit}>
            <h3 className="application__form-title">Application Form</h3>

            {/* Full Name */}
            <div className="application__form-group">
              <label htmlFor="fullName" className="application__form-label">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="John Kevin"
                className="application__form-input"
                required
              />
            </div>

            {/* Email */}
            <div className="application__form-group">
              <label htmlFor="email" className="application__form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                className="application__form-input"
                required
              />
            </div>

            {/* Phone */}
            <div className="application__form-group">
              <label htmlFor="phone" className="application__form-label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+234..."
                className="application__form-input"
                required
              />
            </div>

            {/* Course */}
            <div className="application__form-group">
              <label htmlFor="course" className="application__form-label">
                Course of Interest
              </label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleInputChange}
                className="application__form-select"
                required
              >
                <option value="">Select a course</option>
                <option value="web-development">Web Development</option>
                <option value="data-analysis">Data Analysis</option>
                <option value="ui-ux-design">UI/UX Design</option>
              </select>
            </div>

            {/* Submit Button */}
            <button type="submit" className="application__form-submit">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Application;