import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import leftImage from '../assets/vr-person.png'; // tu dois ajouter cette image dans /src/assets
import rightImage from '../assets/laptop-guy.png'; // pareil ici
import searchIcon from '../assets/search-icon.png'; // pour la loupe

function Header() {
  return (
    <header className="header">
      <img src={leftImage} alt="Personne en VR" className="left-img" />

      <div className="header-content">
        <h1>
          <strong>
  <Link to="/" className="hello-link">Hello World</Link>
          </strong>, le site où la tech est à ta portée
        </h1>
        <div className="search-bar">
          <input type="text" placeholder="Rechercher" />
          <button>
            <img src={searchIcon} alt="Rechercher" />
          </button>
        </div>
      </div>

      <img src={rightImage} alt="Homme avec un ordi" className="right-img" />
    </header>
  );
}

export default Header;
