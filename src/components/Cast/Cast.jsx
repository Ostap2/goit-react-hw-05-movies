import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '0faef55576804b8824855a6bbe4c2da0';

axios.defaults.params = {
  api_key: API_KEY,
};

function Cast({ match }) {
  const [cast, setCast] = useState([]);
  const movieId = match.params.movieId;

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movies/get-movie-credits/${movieId}`)
      .then((response) => {
        setCast(response.data.cast);
      })
      .catch((error) => {
        console.error('Помилка отримання акторського складу фільму:', error);
      });
  }, [movieId]);

  return (
    <div>
      <h2>Акторський склад</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cast;
