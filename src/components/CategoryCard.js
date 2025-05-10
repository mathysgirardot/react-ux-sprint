// src/components/CategoryCard.js
import React from 'react';
import './CategoryCard.css';

function CategoryCard({ title, count }) {
  return (
    <div className="category-card">
      <h4>{title}</h4>
      <p>{count.toLocaleString()} professeurs</p>
    </div>
  );
}

export default CategoryCard;
