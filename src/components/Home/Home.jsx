import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    axios
      .get('/trending/get-trending', {
        params: {
          api_key: 'YOUR_API_KEY_HERE',
        },
      })
      .then((response) => {
        setPopularMovies(response.data.results);
      });
  }, []);

  return (
    <div>
      <h1>Популярні фільми</h1>
      <ul>
        {popularMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
