import React from 'react';
import './../styles/ProfPage.css';
import profileImg from '../assets/profils/profile.png';

function ProfPage() {
  return (
    <main className="prof-page">

      {/* Banniere/intro (on peut réutiliser le header mais ici juste contexte de page) */}
      <section className="prof-header">
        <h2>À propos d'Antony</h2>
        <span className="location">📍 Paris 19ème</span>
      </section>

      <div className="prof-content">
        {/* Colonne gauche : texte */}
        <div className="prof-text">
          <p>J'ai eu plusieurs groupes avec lesquels j'ai sillonné les bars et les scènes à Paris.</p>
          <p>En 2015 je fonde Adlane Code et commence à donner des cours.</p>
          <p>Juillet 2020 je crée ma chaîne YouTube (Adlane Code) suivie par plus de 170 000 abonnés.</p>
          <p>En 2021 je publie plusieurs formations de Front et de Back en ligne suivies par plus de 10 000 élèves à travers le monde.</p>
          <p>En 2022 je propose des tutoriels courts sur TikTok (+ de 200 000 abonnés)</p>
          <p>En 2024 je remporte le prix Foliweb de l'indépendant pour mes tutoriels de code sur internet et mes cours en ligne.</p>

          <div className="prof-tags">
            <span className="tag">Débutant</span>
            <span className="tag">Front</span>
            <span className="tag">Back</span>
          </div>
        </div>

        {/* Colonne droite : photo + infos */}
        <div className="prof-aside">
          <div className="photo-wrapper">
            <img src={profileImg} alt="Antony" />
            <button className="fav-btn">♡</button>
          </div>
          <h3>Antony</h3>
          <p className="subtitle">Paris 19e (face à face & webcam)</p>
          <div className="rating">
            ⭐ 5 (<span>135 avis</span>)
            <button className="badge">Ambassadeur</button>
          </div>
          <p className="expertise">Expert et passionné de développement</p>
          <div className="pricing">
            <span className="price">45€/h</span>
            <a href="/" className="first-offer">1er cours offert</a>
          </div>
        </div>
      </div>

    </main>
  );
}

export default ProfPage;
