import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '0faef55576804b8824855a6bbe4c2da0';

function Movies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    axios
      .get(BASE_URL, {
        params: {
          api_key: API_KEY,
          query: searchTerm,
        },
      })
      .then((response) => {
        setSearchResults(response.data.results);
      })
      .catch((error) => {
        console.error('Помилка під час пошуку фільмів:', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    handleSearch(); 
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
      <MoviesList movies={popularMovies} />
    </div>
  );
}

export default Movies;
