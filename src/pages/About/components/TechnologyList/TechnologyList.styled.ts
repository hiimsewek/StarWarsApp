import { motion } from "motion/react";
import styled from "styled-components";

export const StyledTechLabel = styled(motion.div)`
  font-size: 1.6rem;
  font-weight: bold;

  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
    font-size: 1.8rem;
  }
`;
