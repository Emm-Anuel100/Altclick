import React, { useState, useEffect } from 'react';
import './CookieConsent.scss';

// ======
// CONFIGURATION - Google Analytics ID 
// ======
const GOOGLE_ANALYTICS_ID = 'G-XXXXXXXXXX'; 
// =======

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a small delay
      setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    } else if (cookieConsent === 'accepted') {
      // If previously accepted, initialize analytics
      initializeAnalytics();
    }
  }, []);

  const initializeAnalytics = () => {
    // Initialize Google Analytics ID
    if (GOOGLE_ANALYTICS_ID && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
      
      window.gtag('config', GOOGLE_ANALYTICS_ID);
      console.log(`Google Analytics initialized with ID: ${GOOGLE_ANALYTICS_ID}`);
    } else if (!GOOGLE_ANALYTICS_ID) {
      console.warn('Google Analytics ID not configured. Please add your GA ID in the code');
    }

    // Set analytics cookie for 1 month
    document.cookie = "analytics_enabled=true; path=/; max-age=2592000"; // 30 days
    
    console.log('Analytics initialized');
  };

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    initializeAnalytics();
    console.log('Cookies accepted');
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
    
    // Revoke consent for analytics
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
    
    console.log('Cookies declined');
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent">
      <div className="cookie-consent__container">
        <div className="cookie-consent__content">
          <div className="cookie-consent__icon">
            <i className="fas fa-cookie-bite"></i>
          </div>
          <div className="cookie-consent__text">
            <h3 className="cookie-consent__title">We use cookies</h3>
            <p className="cookie-consent__description">
              We use cookies to enhance your browsing experience and analyze our traffic. 
              By clicking "Accept", you consent to our use of cookies.
            </p>
          </div>
        </div>
        <div className="cookie-consent__actions">
          <button 
            onClick={handleDecline} 
            className="cookie-consent__button cookie-consent__button--decline"
          >
            Decline
          </button>
          <button 
            onClick={handleAccept} 
            className="cookie-consent__button cookie-consent__button--accept"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;