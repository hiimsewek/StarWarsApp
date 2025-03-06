import { CenterContainer, MainContentWrapper, Searchbar } from "components";
import { useDebounce } from "hooks";
import { useState } from "react";
import { useGetMoviesQuery } from "services/starWars";

const Movies = () => {
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const debouncedValue = useDebounce(searchValue);

  const { data, isLoading, isError } = useGetMoviesQuery(debouncedValue);

  const results = data?.results;

  return (
    <MainContentWrapper>
      <CenterContainer>
        <Searchbar value={searchValue} onChange={searchHandler} />
      </CenterContainer>
    </MainContentWrapper>
  );
};

export default Movies;
