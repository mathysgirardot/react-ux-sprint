// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProfPage from './pages/ProfPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produits" element={<ProductPage />} />
        <Route path="/prof" element={<ProfPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;