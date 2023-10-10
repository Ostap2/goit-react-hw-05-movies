import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/trending/all/day', {
        params: {
          api_key: '0faef55576804b8824855a6bbe4c2da0',
        },
      })
      .then((response) => {
        setPopularMovies(response.data.results);
      })
      .catch((error) => {
        console.error('Помилка отримання популярних фільмів:', error);
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
