// src/components/MovieCard.jsx
import React from 'react';

function MovieCard({ movie, isFavorite, onToggleFavorite }) {
  return (
    <article className="movie-card">
      <div className="poster-container">
        <img 
          src={movie.poster} 
          alt={`${movie.title} poster`}
          className="movie-poster"
          loading="lazy"
        />
        
        <button
          onClick={() => onToggleFavorite(movie.id)}
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill={isFavorite ? "currentColor" : "none"} 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
        
        <div className="rating-badge">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          {movie.rating}
        </div>
      </div>
      
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-meta">
          <span className="movie-year">{movie.year}</span>
          <span className="genre-tag">{movie.genre}</span>
        </div>
      </div>
    </article>
  );
}

export default MovieCard;