import { MovieDetailsItem } from "../MovieDetailsItem";

type MovieDetailsProps = {
  director: string;
  producer: string;
  release_date: string;
};

const MovieDetails = ({ director, producer, release_date }: MovieDetailsProps) => {
  return (
    <>
      <MovieDetailsItem label="Director">{director}</MovieDetailsItem>
      <MovieDetailsItem label="Producer">{producer}</MovieDetailsItem>
      <MovieDetailsItem label="Release Date">{release_date}</MovieDetailsItem>
    </>
  );
};

export default MovieDetails;
