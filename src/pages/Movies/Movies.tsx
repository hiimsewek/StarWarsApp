import {
  CenterContainer,
  FallbackScreen,
  MainContentWrapper,
  Searchbar,
  Spinner,
} from "components";
import { useDebounce } from "hooks";
import { useLayoutEffect, useState } from "react";
import { useGetMoviesQuery } from "services/starWars";
import { MovieList } from "./components";
import { getMoviesDataWithPoster } from "utils/apiHelpers";
import { APP_TITLE } from "constants/appDetails";

const Movies = () => {
  useLayoutEffect(() => {
    document.title = `${APP_TITLE} | Movies`;
  }, []);

  const [searchValue, setSearchValue] = useState("");

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const debouncedValue = useDebounce(searchValue);

  const { data, isLoading, isError } = useGetMoviesQuery(debouncedValue);

  if (isError) {
    return <FallbackScreen type="error" />;
  }

  const results = data?.results || [];
  const moviesWithPosters = getMoviesDataWithPoster(results);

  return (
    <MainContentWrapper>
      <CenterContainer>
        <Searchbar value={searchValue} onChange={searchHandler} />
      </CenterContainer>
      {isLoading && <Spinner />}
      {results.length > 0 && <MovieList data={moviesWithPosters} />}
    </MainContentWrapper>
  );
};

export default Movies;
