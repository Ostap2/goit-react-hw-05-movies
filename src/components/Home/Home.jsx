import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


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
      <ul className='list-films'>
  {popularMovies.map((movie) => (
    <li key={movie.id} className='item-films'>
      <Link to={`/movies/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} className='img-films' />
        {movie.title}
      </Link>
    </li>
  ))}
</ul>

    </div>
  );
}

export default Home;
