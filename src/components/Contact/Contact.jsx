import React, { useEffect, useRef, useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Add Errors State
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Updated HandleSubmit with validation
  const handleSubmit = (e) => {
    e.preventDefault();
    
    let newErrors = {};

    // Manual validation checks
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Stop here if there are errors
    }

    // log data
    console.log('Contact form submitted:', formData);
    alert('Message sent successfully!');

    // Clear everything
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  const contactInfo = [
    {
      id: 1,
      icon: 'fas fa-map-marker-alt',
      title: 'Visit Us',
      details: ['No. 14, Almadu Bello Way', 'Garki 2, Abuja', 'Nigeria'],
    },
    {
      id: 2,
      icon: 'fas fa-phone',
      title: 'Call Us',
      details: ['+234 800 123 4567', '+234 900 987 6543'],
    },
    {
      id: 3,
      icon: 'fas fa-envelope',
      title: 'Email Us',
      details: ['admissions@altclick.ng', 'info@altclick.ng'],
    },
  ];

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact__container">
        {/* Left Content */}
        <div className={`contact__info ${isVisible ? 'contact__info--visible' : ''}`}>
          <h2 className="contact__title">Get in Touch</h2>
          <p className="contact__subtitle">Have questions? Visit us or drop a message.</p>

          <div className="contact__details">
            {contactInfo.map((info, index) => (
              <div
                key={info.id}
                className={`contact__detail ${isVisible ? 'contact__detail--visible' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="contact__detail-icon">
                  <i className={info.icon}></i>
                </div>
                <div className="contact__detail-text">
                  <h3 className="contact__detail-title">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="contact__detail-line">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Updated Form with dynamic error classes */}
        <div className={`contact__form-wrapper ${isVisible ? 'contact__form-wrapper--visible' : ''}`}>
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <h3 className="contact__form-title">Send a Message</h3>

            <div className="contact__form-row">
              <div className="contact__form-group">
                <label htmlFor="name" className="contact__form-label">NAME</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`contact__form-input ${errors.name ? 'input-error' : ''}`}
                  placeholder="Your Name"
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="contact__form-group">
                <label htmlFor="email" className="contact__form-label">EMAIL</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`contact__form-input ${errors.email ? 'input-error' : ''}`}
                  placeholder="email@example.com"
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>
            </div>

            <div className="contact__form-group">
              <label htmlFor="message" className="contact__form-label">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                className={`contact__form-textarea ${errors.message ? 'input-error' : ''}`}
                placeholder="How can we help you?"
              ></textarea>
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>

            <button type="submit" className="contact__form-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;