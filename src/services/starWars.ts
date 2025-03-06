import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Movie } from "types";

type MoviesResponse = {
  count: number;
  next: boolean | null;
  previous: boolean | null;
  results: Movie[];
};

type MovieResponse = {
  count: number;
  next: boolean | null;
  previous: boolean | null;
  results: Movie;
};

export const starWarsApi = createApi({
  reducerPath: "starWarsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }),
  endpoints: (build) => ({
    getMovies: build.query<MoviesResponse, string>({
      query: (searchFilter: string = "") => {
        if (!searchFilter) return "films";
        else return `films/?search=${searchFilter}`;
      },
    }),
    getMovie: build.query<MovieResponse, number>({
      query: (id: number) => `films/${id}`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieQuery } = starWarsApi;
