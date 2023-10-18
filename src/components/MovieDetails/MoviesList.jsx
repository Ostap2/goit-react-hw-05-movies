import { Link, useLocation } from "react-router-dom";

export const ProductList = ({ products }) => {
  const location = useLocation();

  return (
<Link to={`/movies/${movie.id}`} state={{ from: location }}>
               (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt={movie.title}
                  className="img-films"
                />
              )
              {movie.title}
            </Link>
  );
};
