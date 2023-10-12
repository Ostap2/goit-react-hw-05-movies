import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MovieDetails({ match }) {
  const [movieDetails, setMovieDetails] = useState({});
  const movieId = match.params.movieId;

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/{movie_id}`, {
        params: {
          api_key: '0faef55576804b8824855a6bbe4c2da0',
        },
      })
      .then((response) => {
        setMovieDetails(response.data);
      })
      .catch((error) => {
        console.error('Помилка отримання деталей фільму:', error);
      });
  }, [movieId]);

  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <p>Рейтинг: {movieDetails.vote_average}</p>
      <p>Опис: {movieDetails.overview}</p>
    </div>
  );
}

export default MovieDetails;
