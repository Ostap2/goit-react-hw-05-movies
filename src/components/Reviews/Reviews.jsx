import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/review/review_id';
const API_KEY = '0faef55576804b8824855a6bbe4c2da0';

function Reviews({ match }) {
  const [reviews, setReviews] = useState([]);
  const movieId = match.params.movieId;

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movie/${movieId}/reviews`, {
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
  }, [movieId]);

  return (
    <div>
      <h2>Огляди</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
