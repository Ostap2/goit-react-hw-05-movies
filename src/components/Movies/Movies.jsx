import React, { useState } from 'react';
import axios from 'axios';

function Movies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    axios
      .get('/search/search-movies', {
        params: {
          api_key: 'YOUR_API_KEY_HERE',
          query: searchTerm,
        },
      })
      .then((response) => {
        setSearchResults(response.data.results);
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
