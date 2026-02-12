import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';

import './styles/main.scss';

function App() {
  return (
    <div className="app">
      {/* Sections */}
      <Header />
      <Hero />
      <About />
    </div>
  );
}

export default App;