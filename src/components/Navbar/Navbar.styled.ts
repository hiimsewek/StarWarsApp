import { motion } from "motion/react";
import styled from "styled-components";

export const StyledIconContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  font-size: var(--iconSize);
  z-index: 999;

  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
    display: none;
  }
`;

export const StyledNavContainer = styled.nav<{ $isOpened: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 500px;
  height: 100vh;
  transform: ${(props) => (props.$isOpened ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  background-color: ${({ theme: { colors } }) => colors.black};
  z-index: 998;

  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
    position: static;
    max-width: none;
    height: auto;
    background-color: transparent;
    transform: translateX(0);
    transition: initial;
  }
`;

export const StyledNavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;

  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
    flex-direction: row;
    justify-content: flex-end;
    height: auto;
  }
`;

export const StyledListItem = styled(motion.li)<{ $linkActive: boolean }>`
  font-size: 1.4rem;
  font-weight: ${(props) => (props.$linkActive ? "bold" : "normal")};
  margin: 0 0 20px 0;

  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
    margin: 0 0 0 40px;
    font-size: 1.6rem;
  }
`;
