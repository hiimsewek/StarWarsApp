import { MovieWithPoster } from "types";
import {
  StyledMovieList,
  StyledMovieThumbContainer,
  StyledMovieTitle,
  StyledPoster,
} from "./MovieList.styled";
import { useLocation } from "react-router";

type MovieListProps = {
  data: MovieWithPoster[];
};

const MovieList = ({ data }: MovieListProps) => {
  const location = useLocation();

  const getMovieId = (url: string) => {
    const pathChunks = url.split("/").filter((chunk) => !!chunk);
    const id = pathChunks[pathChunks.length - 1];

    return +id;
  };

  return (
    <StyledMovieList>
      {data.map((movie) => {
        const id = getMovieId(movie.url);

        return (
          <StyledMovieThumbContainer key={movie.episode_id} to={`${location.pathname}/${id}`}>
            <StyledPoster src={movie.poster} alt={`${movie.title} poster`} />
            <StyledMovieTitle>{movie.title}</StyledMovieTitle>
          </StyledMovieThumbContainer>
        );
      })}
    </StyledMovieList>
  );
};

export default MovieList;
