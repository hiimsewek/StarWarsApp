import { CenterContainer, MainContentWrapper, Searchbar } from "components";
import { useState } from "react";

const Movies = () => {
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <MainContentWrapper>
      <CenterContainer>
        <Searchbar value={searchValue} onChange={searchHandler} />
      </CenterContainer>
    </MainContentWrapper>
  );
};

export default Movies;
