import { StyledIcon, StyledSearchbar, StyledSearchbarContainer } from "./Searchbar.styled";

const Searchbar = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <StyledSearchbarContainer>
      <StyledIcon />
      <StyledSearchbar placeholder="Search..." {...props} />
    </StyledSearchbarContainer>
  );
};

export default Searchbar;
