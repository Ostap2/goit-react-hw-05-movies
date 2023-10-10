import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MovieDetails({ match }) {
  const [movieDetails, setMovieDetails] = useState({});
  const movieId = match.params.movieId;

  useEffect(() => {
    axios
      .get(`/movies/get-movie-details/${movieId}`, {
        params: {
          api_key: 'YOUR_API_KEY_HERE',
        },
      })
      .then((response) => {
        setMovieDetails(response.data);
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
