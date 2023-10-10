import React, { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '0faef55576804b8824855a6bbe4c2da0';

function Movies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    axios
      .get(`${BASE_URL}/search/movie`, {
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
      <h1>Пошук фільмів</h1>
      <input
        type="text"
        placeholder="Введіть ключове слово"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Пошук</button>
      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
