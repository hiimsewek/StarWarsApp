import { motion } from "motion/react";
import styled from "styled-components";

export const StyledSectionItem = styled(motion.div)`
  font-size: 1.4rem;
  padding: 20px 0;

  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
    width: 30%;
    font-size: 1.6rem;
    padding: 0 20px;
  }
`;

export const StyledSectionLabel = styled.div`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 10px;

  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
    font-size: 2.4rem;
    margin-bottom: 20px;
  }
`;
