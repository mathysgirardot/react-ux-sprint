import React from 'react';
import './../styles/ProfPage.css';
import profileImg from '../assets/profils/profile.png';

function ProfPage() {
  const handleBookingClick = () => {
    // Informations d'Antony
    const nomProf = 'Antony';
    const emailProf = 'antony@example.com';
    const description = 'Cours de développement avec Antony';
    const lieu = 'Paris 19e (face à face & webcam)';
    const titre = `Prendre rendez-vous avec ${nomProf}`;

    // Format de date pour Google Calendar (exemple : 12 mai 2025, 14h00 - 15h00)
    const startDate = '20230512T140000Z'; // Début de l'événement
    const endDate = '20230512T150000Z'; // Fin de l'événement

    // URL pour rediriger vers Google Calendar avec les informations pré-remplies
    const googleCalendarUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?text=${encodeURIComponent(titre)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(lieu)}&sf=true`;

    // Redirection vers Google Calendar
    window.location.href = googleCalendarUrl;
  };

  return (
    <main className="prof-page">

      {/* Banniere/intro */}
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

      {/* Section de prise de rendez-vous */}
      <div className="prof-booking">
        <h3>Prendre rendez-vous avec Antony</h3>
        <button className="booking-btn" onClick={handleBookingClick}>
          Réservez votre créneau sur Google Calendar
        </button>
      </div>

    </main>
  );
}

export default ProfPage;
