import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MoviesList } from "../MoviesList";

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/trending/movie/day?language=en-US', {
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
    <div className='container-center'>
      <h1>Популярні фільми</h1>
      <MoviesList movies={popularMovies} />

    </div>
  );
}

export default Home;