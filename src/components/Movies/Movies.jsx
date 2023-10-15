import React, { useState } from 'react';
import axios from 'axios';

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

  return (
    <div>
      <h1>Search movies</h1>
      <input
  type="text"
  id="searchInput" 
  name="searchInput" 
  placeholder="Enter a keyword"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>

      <button onClick={handleSearch} className="button-search">
      Search
      </button>
      <ul className="list-films">
        {searchResults.map((movie) => (
          <li key={movie.id} className="item-films">
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.title}
                className="img-films"
              />
            )}
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
