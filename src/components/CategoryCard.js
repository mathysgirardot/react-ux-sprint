// src/components/CategoryCard.js
import React from 'react';
import './CategoryCard.css';
import { Link } from 'react-router-dom';

function CategoryCard({ title, count, link }) {
  return (
    <Link to={link || '#'} className="category-link">
      <div className="category-card">
        <h4>{title}</h4>
        <p>{count.toLocaleString()} professeurs</p>
      </div>
    </Link>
  );
}

export default CategoryCard;