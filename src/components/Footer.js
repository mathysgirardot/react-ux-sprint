import React from 'react';
import './Footer.css';
import teamImage from '../assets/team.png'; // À placer dans /src/assets/

function Footer() {
  return (
    <footer className="footer">
      <div className="cta-section">
        <img src={teamImage} alt="Équipe en réunion" className="cta-image" />
        <div className="cta-content">
          <p>Vous aussi, rejoignez la communauté.</p>
          <button>Rejoindre maintenant !</button>
        </div>
      </div>

      <div className="footer-columns">
        <div className="column">
          <h4>À propos</h4>
          <ul>
            <li>Qui sommes-nous</li>
            <li>Mentions légales</li>
            <li>Confidentialité</li>
          </ul>
        </div>
        <div className="column">
          <h4>Matières</h4>
          <ul>
            <li>Web-Marketing</li>
            <li>Développement</li>
            <li>Design</li>
            <li>IA</li>
            <li>Data</li>
            <li>Cybersécurité</li>
            <li>Formation Vidéo</li>
            <li>Communication</li>
          </ul>
        </div>
        <div className="column">
          <h4>Assistance</h4>
          <ul>
            <li>Centre d’aide</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="column">
          <h4>Suivez-nous</h4>
          <div className="social-icons">
            <span>🔵</span>
            <span>🐦</span>
            <span>📸</span>
            <span>💼</span>
          </div>
        </div>
      </div>

      <div className="copyright">
        © 2025 Tomates cerises. La meilleure façon d’apprendre.
      </div>
    </footer>
  );
}

export default Footer;
