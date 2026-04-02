// src/App.jsx
import React, { useState, useMemo } from 'react';
import './App.css';

import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import FavoritesSection from './components/FavouriteList';
import { moviesData } from './data/moviesData';

function App() {
  // B1: Search State
  const [query, setQuery] = useState('');
  
  // B4: Favorites State
  const [favorites, setFavorites] = useState([]);

  // B2: Movie Filtering Logic
  const filteredMovies = useMemo(() => {
    if (!query.trim()) return [];
    
    return moviesData.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase().trim())
    );
  }, [query]);

  // B5: Extract Favorite Movies
  const favoriteMovies = useMemo(() => {
    return moviesData.filter(movie => favorites.includes(movie.id));
  }, [favorites]);

  // B4: Toggle Favorite Handler
  const handleToggleFavorite = (movieId) => {
    setFavorites(prev => {
      if (prev.includes(movieId)) {
        return prev.filter(id => id !== movieId);
      }
      return [...prev, movieId];
    });
  };

  return (
    <div className="app">
      <div className="app-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>
      
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">
            <span className="title-accent">Cine</span>Search
          </h1>
          <p className="app-subtitle">Discover and curate your favorite films</p>
        </header>

        {/* B5: Display Favourites Section */}
        <FavoritesSection 
          favoriteMovies={favoriteMovies}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
        />

        {/* B1: Search Input */}
        <SearchBar 
          query={query}
          onQueryChange={setQuery}
        />

        {/* B2/B3: Movie List with Conditional Rendering */}
        <main className="main-content">
          <MovieList 
            movies={filteredMovies}
            query={query}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        </main>
      </div>
    </div>
  );
}

export default App;