import { FallbackScreenContainer, StyledMessage, StyledHomeLink } from "./FallbackScreen.styled";

type FallbackScreenProps = {
  type: "error" | "notFound";
};

const FallbackScreen = ({ type }: FallbackScreenProps) => {
  const message = type === "error" ? "Something Went Wrong" : "Page Not Found";

  return (
    <FallbackScreenContainer>
      <StyledMessage>{message}</StyledMessage>
      <StyledHomeLink to="/">Go Home</StyledHomeLink>
    </FallbackScreenContainer>
  );
};

export default FallbackScreen;
