import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BASE_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = '0faef55576804b8824855a6bbe4c2da0';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/${movieId}/credits`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((response) => {
        setCast(response.data.cast);
      })
      .catch((error) => {
        console.error('Помилка отримання інформації про акторів:', error);
      });
  }, [movieId]);

  return (
    <div>
      <div className='container-center'></div>
      <h2 className='cast'>Cast</h2>
      <ul className='ul-actor'>
        {cast.map((actor) => (
          <li key={actor.id} className='li-actor'>
            <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt={actor.name} className="actor-photo" />
            <p className='p-actor'>{actor.name}</p>
            <p>{actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cast;
