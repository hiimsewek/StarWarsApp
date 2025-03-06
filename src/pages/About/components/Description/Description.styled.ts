import { motion } from "motion/react";
import styled from "styled-components";

export const StyledDescription = styled(motion.p)`
  margin: 40px 0;
  font-size: 1.4rem;

  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
    font-size: 1.6rem;
  }
`;
