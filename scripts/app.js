function createMain(profile) {
    document.getElementById("main").innerHTML = `
      <main class="profile-page">
        <section class="profile-card">
          <div class="profile-header">
            <img class="profile-picture" src="img/antony.png" alt="Photo de ${profile.name}" />
            <div class="profile-info">
              <h2>À propos de ${profile.name}</h2>
              <p class="location">${profile.location}</p>
              <div class="bio">
                ${profile.bio.split('\n\n').map(p => `<p>${p}</p>`).join("")}
              </div>
              <div class="tags">
                ${profile.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
              </div>
              <div class="pricing-rating">
                <span class="price">${profile.price}</span>
                <span class="first-course">1er cours offert</span>
              </div>
              <div class="rating">
                <span class="stars">★★★★★</span>
                <span>(${profile.reviewCount} avis)</span>
                ${profile.isAmbassador ? `<span class="badge">Ambassadeur</span>` : ""}
              </div>
            </div>
          </div>
        </section>
  
        <section class="reviews">
          <h3>Avis des élèves</h3>
          <ul>
            ${profile.reviews.map(r => `<li>⭐ ${r}</li>`).join("")}
          </ul>
        </section>
      </main>
    `;
  }
  
  createMain(profileData);
  