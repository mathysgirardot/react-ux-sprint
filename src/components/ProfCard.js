import React from 'react';
import './ProfCard.css';

function ProfCard({
  name,
  city,
  format,
  price,
  rating,
  reviews,
  badge,
  image,
}) {
  return (
    <div className="prof-card">
      <div
        className="card-img"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="card-info">
        <h3>{name}</h3>
        <p className="city-format">{city} · {format}</p>
        <p className="price">{price}€/h</p>
        <p className="badge">{badge}</p>
        <p className="rating">⭐ {rating} ({reviews} avis)</p>
        <a href="/" className="first-offer">1er cours offert</a>
      </div>
      <span className="heart">♡</span>
    </div>
  );
}

export default ProfCard;