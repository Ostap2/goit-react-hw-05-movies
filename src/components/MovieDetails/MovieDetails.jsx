
import React, { useEffect, useState, Suspense, useRef } from 'react';
import axios from 'axios';
import { Outlet, useParams, Link, useLocation } from 'react-router-dom';

const BASE_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = '0faef55576804b8824855a6bbe4c2da0';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [movieImage, setMovieImage] = useState('');
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/");


  useEffect(() => {
    axios
      .get(`${BASE_URL}/${movieId}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((response) => {
        setMovieDetails(response.data);
      })
      .catch((error) => {
        console.error('Помилка отримання деталей фільму:', error);
      });

    axios
      .get(`${BASE_URL}/${movieId}/images`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((response) => {
        if (response.data.posters && response.data.posters.length > 0) {
          setMovieImage(`https://image.tmdb.org/t/p/w500${response.data.posters[0].file_path}`);
        }
      })
      .catch((error) => {
        console.error('Помилка отримання зображення фільму:', error);
      });

  }, [movieId]);

  return (
    <>
      <div>
      <Link to={backLinkHref.current} >
          <button  className="go-back">Go Back</button>
        </Link>
        <h1>{movieDetails.title}</h1>
        <img src={movieImage} alt={movieDetails.title} className="img-det" />
        <p className='p-rating'>Рейтинг: {movieDetails.vote_average}</p>
        <p className="descri">Опис: {movieDetails.overview}</p>
        <ul className='ul-button'>
          <li className='li-button'>
            <Link to={`/movies/${movieId}/cast`} className='button-load-cast'>Cast</Link>
          </li>
          <li className='li-button'>
            <Link to={`/movies/${movieId}/reviews`} className='button-load-Reviews'>Reviews</Link>
          </li>
        </ul>
      </div>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default MovieDetails;