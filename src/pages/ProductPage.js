import React from 'react';
import ProfCard from '../components/ProfCard';

// Import des images PNG
import antony from '../assets/profils/antony.png';
import julien from '../assets/profils/julien.png';
import orson from '../assets/profils/orson.png';
import joel from '../assets/profils/joel.png';
import antoine from '../assets/profils/antoine.png';
import jn from '../assets/profils/jean-nicolas.png';

import '../styles/ProductPage.css';

function ProductPage() {
  return (
    <main className="product-page">

      {/* Intro */}
      <section className="intro-section">
        <h2>
          La communauté X regroupe 34 personnes<br />
          qui partagent ensemble leur savoir !
        </h2>
        <div className="search-bar">
          <input type="text" placeholder="Rechercher" />
          <button>🔍</button>
        </div>
      </section>

      {/* Grille des profs */}
      <section className="prof-grid">
        <ProfCard
          name="Antony"
          city="Paris"
          format="visio & face à face"
          price={45}
          rating={5}
          reviews={176}
          badge="Ambassadeur"
          image={antony}
        />
        <ProfCard
          name="Julien"
          city="Lille"
          format="visio"
          price={40}
          rating={5}
          reviews={91}
          badge="Ambassadeur"
          image={julien}
        />
        <ProfCard
          name="Orson"
          city="Marseille"
          format="face à face"
          price={50}
          rating={5}
          reviews={62}
          badge="Ambassadeur"
          image={orson}
        />
        <ProfCard
          name="Joël Bourienne"
          city="Paris"
          format="visio"
          price={120}
          rating={4.9}
          reviews={36}
          badge="Ambassadeur"
          image={joel}
        />
        <ProfCard
          name="Antoine"
          city="Toulouse"
          format="visio & face à face"
          price={42}
          rating={5}
          reviews={109}
          badge="Ambassadeur"
          image={antoine}
        />
        <ProfCard
          name="Jean-nicolas"
          city="Lyon"
          format="visio"
          price={25}
          rating={5}
          reviews={17}
          badge="Ambassadeur"
          image={jn}
        />
      </section>

      {/* Map */}
      <section className="map-section">
        <div className="fake-map">
          [ Ici viendra la carte Google Maps ]
        </div>
      </section>

      {/* Call to action Web Marketing */}
      <section className="webmarketing-section">
        <h3>Envie d’apprendre le Web Marketing ?</h3>
        <p>
          Laissez-vous séduire par un immense choix de profs adaptés à tous les niveaux.
        </p>
        <button>Voir plus de solutions !</button>
      </section>

      {/* Infos essentielles */}
      <section className="course-info">
        <h4>Les infos essentielles pour votre cours d’anglais</h4>
        <ul>
          <li>✅ <strong>Tarif moyen :</strong> 20€/h</li>
          <li>✅ <strong>Temps de réponse :</strong> 5h</li>
          <li>✅ <strong>Profs disponibles :</strong> 116 513</li>
          <li>✅ <strong>Format du cours :</strong> En face à face ou en visio</li>
        </ul>
      </section>

      {/* Suggestions */}
      <section className="suggestions">
        <div className="suggestion-card">
          Trouver votre prof d’anglais en quelques clics !
        </div>
        <div className="suggestion-card">
          Organisez facilement vos cours d’anglais
        </div>
        <div className="suggestion-card">
          Vivez de nouvelles expériences en anglais !
        </div>
      </section>

    </main>
  );
}

export default ProductPage;