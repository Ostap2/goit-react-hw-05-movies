import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MoviesList } from '../MoviesList';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '0faef55576804b8824855a6bbe4c2da0';

function Movies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {

    const lastQuery = localStorage.getItem('lastQuery');
    if (lastQuery) {
      setSearchTerm(lastQuery);
      handleSearch(lastQuery);
    }
  }, []);

  const handleSearch = (query) => {
    axios
      .get(BASE_URL, {
        params: {
          api_key: API_KEY,
          query: query,
        },
      })
      .then((response) => {
        const results = response.data.results;
        setSearchResults(results);


        localStorage.setItem('lastQuery', query);
      })
      .catch((error) => {
        console.error('Помилка під час пошуку фільмів:', error);
      });


    window.history.pushState(null, '', `/movies?query=${encodeURIComponent(query)}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <div>
      <h1>Search movies</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="searchInput"
          name="searchInput"
          placeholder="Enter a keyword"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button type="submit" className="button-search">
          Search
        </button>
      </form>
      <MoviesList movies={searchResults} />
    </div>
  );
}

export default Movies;
