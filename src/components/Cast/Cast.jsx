import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BASE_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = '0faef55576804b8824855a6bbe4c2da0';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const [movieImage, setMovieImage] = useState('');

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

    axios
      .get(`${BASE_URL}/${movieId}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((response) => {
        setMovieDetails(response.data);
        setMovieImage(`https://image.tmdb.org/t/p/w200/${response.data.poster_path}`);
      })
      .catch((error) => {
        console.error('Помилка отримання інформації про фільм:', error);
      });
  }, [movieId]);

  return (
    <div>
      <div>
      <button className='go-back'><Link to="/">go back</Link></button>
        <h1>{movieDetails.title}</h1>
        <img src={movieImage} alt={movieDetails.title} className="img-det" />
        <p className='p-rating'>Рейтинг: {movieDetails.vote_average}</p>
        <p className="descri">Опис: {movieDetails.overview}</p>
        <ul className='ul-button'>
          <li className='li-button'>
            <Link to={`/movies/${movieId}/cast`} className='button-load-cast'>Cast</Link>
          </li>
          <li className='li-button'>
            <Link to={`/movies/${movieId}/reviews`} className='button-load-Reviews'>Reaviews</Link>
          </li>
        </ul>
      </div>
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
