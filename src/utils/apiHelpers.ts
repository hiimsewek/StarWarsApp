import { Movie, MovieWithPoster } from "types";
import ANHPoster from "assets/posters/A New Hope.jpg";
import AOFCPoster from "assets/posters/Attack of the Clones.jpg";
import ROFJPoster from "assets/posters/Return of the Jedi.jpg";
import ROFSPoster from "assets/posters/Revenge of the Sith.jpg";
import TESBPoster from "assets/posters/The Empire Strikes Back.jpg";
import TPMPoster from "assets/posters/The Phantom Menace.jpg";
import PlaceholderPoster from "assets/posters/placeholder-poster.jpg";

export const getPoster = (title: string) => {
  switch (title) {
    case "A New Hope":
      return ANHPoster;
    case "Attack of the Clones":
      return AOFCPoster;
    case "Return of the Jedi":
      return ROFJPoster;
    case "Revenge of the Sith":
      return ROFSPoster;
    case "The Empire Strikes Back":
      return TESBPoster;
    case "The Phantom Menace":
      return TPMPoster;
    default:
      return PlaceholderPoster;
  }
};

export const getMoviesDataWithPoster = (movies: Movie[]): MovieWithPoster[] => {
  return movies.map((movie) => {
    const poster = getPoster(movie.title);

    return { ...movie, poster };
  });
};
