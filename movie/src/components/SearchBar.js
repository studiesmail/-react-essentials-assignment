// src/components/SearchBar.jsx
import React from 'react';

function SearchBar({ query, onQueryChange }) {
  const handleReset = () => {
    onQueryChange('');
  };

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
        
        <input
          type="text"
          placeholder="Search movies by title..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className="search-input"
          aria-label="Search movies"
        />
        
        {query && (
          <button 
            onClick={handleReset}
            className="reset-btn"
            aria-label="Clear search"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        )}
      </div>
      
      {query && (
        <div className="search-hint">
          Showing results for "<span>{query}</span>"
        </div>
      )}
    </div>
  );
}

export default SearchBar;