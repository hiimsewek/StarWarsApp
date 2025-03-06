import styled from "styled-components";
import { motion } from "motion/react";

export const StyledSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const StyledSpinner = styled(motion.div)`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: ${({ theme: { colors } }) => `3px solid ${colors.white}`};
  border-right: ${({ theme: { colors } }) => `3px solid ${colors.accent}`};
`;
