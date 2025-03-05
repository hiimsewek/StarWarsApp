import { StyledHero, StyledHeroContainer, StyledHeroTitle } from "./Hero.styled";

const Hero = () => {
  return (
    <StyledHeroContainer>
      <StyledHero>
        <StyledHeroTitle
          initial={{ opacity: 0, transform: "translate(-50%, -25%)" }}
          animate={{ opacity: 1, transform: "translate(-50%, -50%)" }}
          transition={{ duration: 1.5 }}
        >
          Seweryn Woźniak
        </StyledHeroTitle>
      </StyledHero>
    </StyledHeroContainer>
  );
};

export default Hero;
