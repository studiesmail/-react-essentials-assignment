// src/components/FavoritesSection.jsx
import React from 'react';

function FavoritesSection({ favoriteMovies, favorites, onToggleFavorite }) {
  if (favoriteMovies.length === 0) {
    return null;
  }

  return (
    <section className="favorites-section">
      <div className="favorites-header">
        <h2>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          Your Favorites
        </h2>
        <span className="favorites-count">{favoriteMovies.length} selected</span>
      </div>
      
      <div className="favorites-scroll">
        {favoriteMovies.map(movie => (
          <div key={movie.id} className="favorite-item">
            <img src={movie.poster} alt={movie.title} className="favorite-thumb" />
            <div className="favorite-info">
              <span className="favorite-title">{movie.title}</span>
              <span className="favorite-year">{movie.year}</span>
            </div>
            <button 
              onClick={() => onToggleFavorite(movie.id)}
              className="remove-btn"
              aria-label="Remove from favorites"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FavoritesSection;
