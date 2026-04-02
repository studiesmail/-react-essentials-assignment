// src/components/MovieList.jsx
import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies, query, favorites, onToggleFavorite }) {
  
  // B3: Conditional Rendering - No Input
  if (!query) {
    return (
      <div className="empty-state">
        <div className="empty-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
            <line x1="7" y1="2" x2="7" y2="22"/>
            <line x1="17" y1="2" x2="17" y2="22"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <line x1="2" y1="7" x2="7" y2="7"/>
            <line x1="2" y1="17" x2="7" y2="17"/>
            <line x1="17" y1="17" x2="22" y2="17"/>
            <line x1="17" y1="7" x2="22" y2="7"/>
          </svg>
        </div>
        <h3>Start Your Search</h3>
        <p>Type in the search box above to find movies from our database.</p>
      </div>
    );
  }

  // B3: Conditional Rendering - No Results
  if (movies.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
            <path d="M8 8l6 6"/>
            <path d="M14 8l-6 6"/>
          </svg>
        </div>
        <h3>No Movies Found</h3>
        <p>We couldn't find any movies matching "<strong>{query}</strong>". Try a different search term.</p>
      </div>
    );
  }

  // B3: Conditional Rendering - Successful Results
  return (
    <div className="movie-results">
      <div className="results-header">
        <h2>Search Results</h2>
        <span className="results-count">{movies.length} movie{movies.length !== 1 ? 's' : ''} found</span>
      </div>
      
      <div className="movie-grid">
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isFavorite={favorites.includes(movie.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;