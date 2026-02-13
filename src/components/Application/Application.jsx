import React, { useEffect, useRef, useState } from 'react';
import Select from 'react-select'; // Import  React select library
import './Application.scss';

const Application = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [graduatesCount, setGraduatesCount] = useState(0);
  const [hiringRateCount, setHiringRateCount] = useState(0);
  const sectionRef = useRef(null);

  // Define custom styles
  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'white',
      borderColor: '#e1e1e1',
      color: '#333', // Text color for the box
    }),
    option: (provided, state) => ({
      ...provided,
      // Background is white, text is dark
      backgroundColor: state.isSelected ? '#007bff' : state.isFocused ? '#f0f0f0' : 'white',
      color: state.isSelected ? 'white' : '#333', // Dark text on white background
      cursor: 'pointer', // Set cursor to pointer
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#333', // Text color of the selected item
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'white', // Ensure the dropdown menu background is white
      zIndex: 20
    })
  };

  //  Dropdown options
  const courseOptions = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'data-analysis', label: 'Data Analysis' },
    { value: 'ui-ux-design', label: 'UI/UX Design' },
    { value: 'graphic-design', label: 'Graphic Design' }
  ];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
  });

  // --- Scroll & Animation Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  useEffect(() => {
    if (isVisible) {
      let graduatesStart = 0;
      const graduatesEnd = 500;
      const graduatesTimer = setInterval(() => {
        graduatesStart += (graduatesEnd / 100);
        if (graduatesStart >= graduatesEnd) {
          setGraduatesCount(graduatesEnd);
          clearInterval(graduatesTimer);
        } else {
          setGraduatesCount(Math.floor(graduatesStart));
        }
      }, 20);

      let hiringStart = 0;
      const hiringEnd = 90;
      const hiringTimer = setInterval(() => {
        hiringStart += (hiringEnd / 100);
        if (hiringStart >= hiringEnd) {
          setHiringRateCount(hiringEnd);
          clearInterval(hiringTimer);
        } else {
          setHiringRateCount(Math.floor(hiringStart));
        }
      }, 30);

      return () => {
        clearInterval(graduatesTimer);
        clearInterval(hiringTimer);
      };
    }
  }, [isVisible]);

  // --- Form Handlers

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Select handler
  const handleSelectChange = (selectedOption) => {
    setFormData((prev) => ({
      ...prev,
      course: selectedOption ? selectedOption.value : '',
    }));
  };

  const [errors, setErrors] = useState({}); // Set error

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    // Check if fields are empty
    if (!formData.fullName.trim()) newErrors.fullName = "Please enter your full name";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";

    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return; // Stop the form from submitting
    }
    
    // Custom validation check 
    if (!formData.course) {
      alert('Please select a course to proceed.');
      return;
    }

    // log application info
    console.log('Form submitted:', formData);
    alert('Application submitted! We will contact you soon.');

    // Clear everything
    setFormData({ fullName: '', email: '', phone: '', course: '' });
    setErrors({});
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
          <form className="application__form" onSubmit={handleSubmit} noValidate>
            <h3 className="application__form-title">Application Form</h3>

            {/* Full Name */}
            <div className="application__form-group">
                <label htmlFor="fullName" className="application__form-label">Full Name</label>
                <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="John Kevin"
                // Dynamically add an error class if validation fails
                className={`application__form-input ${errors.fullName ? 'input-error' : ''}`}
                />
                {errors.fullName && <span className="error-text">{errors.fullName}</span>}
            </div>

            {/* Email */}
            <div className="application__form-group">
                <label htmlFor="email" className="application__form-label">Email Address</label>
                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                // Dynamically add an error class if validation fails
                className={`application__form-input ${errors.email ? 'input-error' : ''}`}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            {/* Phone */}
            <div className="application__form-group">
                <label htmlFor="phone" className="application__form-label">Phone Number</label>
                <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+234..."
                // Dynamically add an error class if validation fails
                className={`application__form-input ${errors.phone ? 'input-error' : ''}`}
                />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>

            {/* Course Select */}
            <div className="application__form-group">
              <label htmlFor="course" className="application__form-label">
                Course of Interest
              </label>
              <Select
                id="course"
                options={courseOptions}
                onChange={handleSelectChange}
                // Find correct object based on the string in state
                value={courseOptions.find(option => option.value === formData.course) || null}
                placeholder="Select a course..."
                className="application__form-select-container"
                classNamePrefix="react-select"
                styles={customSelectStyles}
                isSearchable={true}
              />
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