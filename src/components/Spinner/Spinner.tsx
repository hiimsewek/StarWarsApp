import { StyledSpinner, StyledSpinnerContainer } from "./Spinner.styled";

const Spinner = () => {
  return (
    <StyledSpinnerContainer>
      <StyledSpinner
        initial={{ transform: "rotate(0)" }}
        animate={{ transform: "rotate(360deg)" }}
        transition={{ ease: "linear", duration: 1, repeat: Infinity }}
      ></StyledSpinner>
    </StyledSpinnerContainer>
  );
};

export default Spinner;
