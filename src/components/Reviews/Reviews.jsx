import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Reviews({ match }) {
  const [reviews, setReviews] = useState([]);
  const movieId = match.params.movieId;

  useEffect(() => {
    axios
      .get(`/movies/get-movie-reviews/${movieId}`, {
        params: {
          api_key: '0faef55576804b8824855a6bbe4c2da0',
        },
      })
      .then((response) => {
        setReviews(response.data.results);
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
