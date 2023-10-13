import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [movieImage, setMovieImage] = useState('');
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        params: {
          api_key: '0faef55576804b8824855a6bbe4c2da0',
        },
      })
      .then((response) => {
        setMovieDetails(response.data);
      })
      .catch((error) => {
        console.error('Error getting movie details:', error);
      });

    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/images`, {
        params: {
          api_key: '0faef55576804b8824855a6bbe4c2da0',
        },
      })
      .then((response) => {
        if (response.data.posters && response.data.posters.length > 0) {
          setMovieImage(`https://image.tmdb.org/t/p/w500${response.data.posters[0].file_path}`);
        }
      })
      .catch((error) => {
        console.error('Error getting movie photo:', error);
      });
  }, [movieId]);

  const loadCast = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
        params: {
          api_key: '0faef55576804b8824855a6bbe4c2da0',
        },
      })
      .then((response) => {
        setCast(response.data.cast);
      })
      .catch((error) => {
        console.error('Error getting cast information:', error);
      });
  };

  const loadReviews = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, {
        params: {
          api_key: '0faef55576804b8824855a6bbe4c2da0',
        },
      })
      .then((response) => {
        setReviews(response.data.results);
      })
      .catch((error) => {
        console.error('Error getting movie reviews:', error);
      });
  };

  const clearCast = () => {
    setCast([]);
  };

  const clearReviews = () => {
    setReviews([]);
  };

  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <img src={movieImage} alt={movieDetails.title} className="img-det" />
      <p className='p-rating'>Rating: {movieDetails.vote_average}</p>
      <p className="descri">Description: {movieDetails.overview}</p>
      <ul className='ul-button'>
        <li className='li-button'>
          <button onClick={loadCast} className='button-load-cast'>Load Cast</button>
          {cast.length > 0 && (
            <button onClick={clearCast} className='button-clear-cast'>Clear Cast</button>
          )}
        </li>
        <li className='li-button'>
          <button onClick={loadReviews} className='button-load-Reviews'>Load Reviews</button>
          {reviews.length > 0 && (
            <button onClick={clearReviews} className='button-clear-Reviews'>Clear Reviews</button>
          )}
        </li>
      </ul>
      <div className=' container-center'>
  <h2>Cast</h2>
  <ul className='ul-actor'>
    {cast.map((actor) => (
      <li key={actor.id} className='li-actor'>
         <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt={actor.name} className="actor-photo" />
        <p className='p-actor'>
          {actor.name}
        </p>
        <p>{actor.character}</p>
      </li>
    ))}
  </ul>
</div>


      <div className=' container-center'>
        <h2>Reviews</h2>
        <ul className='ul-reviews'>
          {reviews.map((review) => (
            <li key={review.id} className='li-reviews'>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MovieDetails;
