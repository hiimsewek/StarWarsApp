import { motion } from "motion/react";
import styled from "styled-components";

export const StyledHeadingContainer = styled(motion.div)`
  display: flex;
  align-items: center;
`;

export const StyledCvPic = styled.img`
  width: 100px;
  height: 100px;
`;

export const StyledHeadingLabel = styled.h1`
  font-size: 2.2rem;
  font-weight: bold;
  margin-left: 20px;

  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
    font-size: 3rem;
    margin-left: 20px;
  }
`;
