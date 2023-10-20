import React, { useState, useEffect } from 'react';
import { MoviesList } from '../MoviesList';
import { useSearchParams } from 'react-router-dom';
import { searchMoviesApi } from './MoviesApi';

function Movies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');

    if (!query) return;

    searchMoviesApi(query)
      .then((response) => {
        const results = response.data.results;
        setSearchResults(results);
      })
      .catch((error) => {
        console.error('Помилка під час пошуку фільмів:', error);
      });
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm) {
      alert('Введіть текст');
      return;
    }
    setSearchParams({ query: searchTerm });
  };

  return (
    <div>
      <h1>Пошук фільмів</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="searchInput"
          name="searchInput"
          placeholder="Введіть ключове слово"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button type="submit" className="button-search">
          Пошук
        </button>
      </form>
      <MoviesList movies={searchResults} />
    </div>
  );
}

export default Movies;
