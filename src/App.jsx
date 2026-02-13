import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Admission from './components/Admission/Admission';
import WhyUs from './components/WhyUs/WhyUs';
import Application from './components/Application/Application';
import Contact from './components/Contact/Contact';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import CookieConsent from './components/CookieConsent/CookieConsent';
import Footer from './components/Footer/Footer';

import './styles/main.scss';

function App() {
  return (
    <div className="app">
      {/* Components */}
      <Header />
      <Hero />
      <About />
      <Courses />
      <Admission />
      <WhyUs />
      <Application />
      <Contact />
      <ScrollToTop />
      <ScrollProgress/>
      <CookieConsent />
      <Footer />
    </div>
  );
}

export default App;