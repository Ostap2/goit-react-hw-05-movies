import { Link, useLocation } from "react-router-dom";

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      <ul className='list-films'>
        {movies.map((movie) => (
          <li key={movie.id} className='item-films'>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <img
                src={
                  movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : defaultImg
                }
                width={250}
                alt="poster"
              />  
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
