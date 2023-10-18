import { Link, useLocation } from "react-router-dom";

export const MoviesList = ({ products }) => {
  const location = useLocation();

  return (
    <div>
      {products.map((movie) => (
        <Link to={`/movies/${movie.id}`} state={{ from: location }} key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={movie.title}
            className="img-films"
          />
          {movie.title}
        </Link>
      ))}
    </div>
  );
};
