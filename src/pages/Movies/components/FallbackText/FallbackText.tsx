import { StyledMessage } from "./FallbackText.styled";

type FallbackTextProps = {
  children: React.ReactNode;
};

const FallbackText = ({ children }: FallbackTextProps) => {
  return <StyledMessage>{children}</StyledMessage>;
};

export default FallbackText;
