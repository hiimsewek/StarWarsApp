import { StyledDescription } from "./Description.styled";

const Description = () => {
  return (
    <StyledDescription
      initial={{ opacity: 0, transform: "translateY(10px)" }}
      animate={{ opacity: 1, transform: "translateY(0)" }}
      transition={{ duration: 1 }}
    >
      I am a Computer Science master's student at the University of Zielona Góra and a hobbyist
      frontend developer. I am a big fan of cinema and football. I love both playing and watching
      football. In my free time, I also like to go swimming or play computer games with my friends.
    </StyledDescription>
  );
};

export default Description;
