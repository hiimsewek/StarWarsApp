import { motion } from "motion/react";
import styled from "styled-components";

export const StyledGroupContainer = styled(motion.div)<{ $reversed: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  @media (${({ theme: { breakpoints } }) => breakpoints.lg}) {
    flex-direction: ${({ $reversed }) => ($reversed ? "row-reverse" : "row")};
    align-items: center;
  }
`;

export const StyledIllustration = styled.img<{ $reversed: boolean }>`
  width: 250px;
  height: 250px;
`;

export const StyledTechListContainer = styled.div<{ $reversed: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  @media (${({ theme: { breakpoints } }) => breakpoints.lg}) {
    margin: ${({ $reversed }) => ($reversed ? "0 80px 0 0" : "0 0 0 80px")};
  }
`;

export const StyledTechItem = styled.span`
  font-size: 1.4rem;
  padding: 5px 0;

  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
    font-size: 1.6rem;
  }
`;
