import { MovieWithPoster } from "types";
import {
  StyledDescription,
  StyledItemContainer,
  StyledPoster,
  StyledTextContentContainer,
  StyledTitle,
} from "./MovieOverview.styled";
import { MovieDetails } from "../MovieDetails";

type MovieOverviewProps = {
  data: MovieWithPoster;
};

const MovieOverview = ({ data }: MovieOverviewProps) => {
  const { title, director, producer, opening_crawl, release_date, poster } = data;

  return (
    <StyledItemContainer>
      <StyledPoster src={poster} alt={`${title}'s poster`} />
      <StyledTextContentContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{opening_crawl}</StyledDescription>
        <MovieDetails director={director} producer={producer} release_date={release_date} />
      </StyledTextContentContainer>
    </StyledItemContainer>
  );
};

export default MovieOverview;
