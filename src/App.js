import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <p>Voici le contenu principal du site.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
