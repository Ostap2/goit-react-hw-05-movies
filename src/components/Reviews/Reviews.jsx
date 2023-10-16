import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const BASE_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = '0faef55576804b8824855a6bbe4c2da0';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const [movieImage, setMovieImage] = useState('');

  useEffect(() => {

    axios
      .get(`${BASE_URL}/${movieId}/reviews`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((response) => {
        setReviews(response.data.results);
      })
      .catch((error) => {
        console.error('Помилка отримання оглядів фільму:', error);
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
     <div className='container-center'>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
  <ul className='ul-reviews'>
    {reviews.map((review) => (
      <li key={review.id} className='li-reviews'>
        <p>{review.author}</p>
        <p>{review.content}</p>
      </li>
    ))}
  </ul>
) : (
  <p>There are no reviews</p>
)}
</div>
    </div>
  );
}

export default Reviews;
