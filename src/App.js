import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import PricingPage from './pages/Pricing.js';
import AboutPage from './pages/About.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/pricing" element={<PricingPage />} />
         
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
