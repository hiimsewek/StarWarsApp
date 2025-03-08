import { StyledDetailsItemContainer, StyledLabel } from "./MovieDetailsItem.styled";

type MovieDetailsItemProps = {
  label: string;
  children: React.ReactNode;
};

const MovieDetailsItem = ({ label, children }: MovieDetailsItemProps) => {
  return (
    <StyledDetailsItemContainer>
      <StyledLabel>{label}: </StyledLabel>
      <span>{children}</span>
    </StyledDetailsItemContainer>
  );
};

export default MovieDetailsItem;
