import styled from "styled-components";
import HeroImg from "assets/starwars-hero.jpg";
import { motion } from "motion/react";

export const StyledHeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: calc(var(--headerHeight) * -1);
`;

export const StyledHero = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${HeroImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &::after {
    display: block;
    content: "";
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const StyledHeroTitle = styled(motion.span)`
  position: absolute;
  left: 50%;
  top: 50%;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;

  @media (${({ theme: { breakpoints } }) => breakpoints.lg}) {
    font-size: 4rem;
  }

  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
    font-size: 5rem;
  }
`;
