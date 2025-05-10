// src/pages/HomePage.js
import React from 'react';
import CategoryCard from '../components/CategoryCard';
import testimonial from '../assets/homepage/testimonial.png';
import '../styles/HomePage.css';

const categories = [
  { title: 'Web-Marketing', count: 24919 },
  { title: 'Design', count: 9834 },
  { title: 'Développement', count: 3898 },
  { title: 'SEO SEA', count: 1218 },
  { title: 'Data', count: 2441 },
  { title: 'Communication stratégique', count: 5149 },
  { title: 'IA', count: 3370 },
  { title: 'Cybersécurité', count: 2803 },
  { title: 'Production Vidéo', count: 1623 },
];

function HomePage() {
  return (
    <>
      <main className="homepage">

        {/* Catégories */}
        <section className="categories-section">
          {categories.map(cat => (
            <CategoryCard
              key={cat.title}
              title={cat.title}
              count={cat.count}
            />
          ))}
        </section>


        {/* Section citation */}
        <section className="feature-section">
          <img
            src={testimonial}
            alt="Groupe apprenant la tech"
            className="feature-img"
          />
          <div className="feature-quote">
            <p>
              “Une communauté qui promeut un apprentissage de la tech avec un réel
              accompagnement, pour développer leur savoir au mieux”
            </p>
          </div>
        </section>

      </main>
    </>
  );
}

export default HomePage;
