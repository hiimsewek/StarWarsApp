import { motion } from "motion/react";
import { TfiAngleLeft } from "react-icons/tfi";
import styled from "styled-components";

export const StyledSliderContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-height: 200px;
  overflow-x: hidden;
  margin: 10px 0;
  border-radius: 6px;
  overflow: hidden;

  @media (${({ theme: { breakpoints } }) => breakpoints.md}) {
    max-height: 300px;
  }

  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
    max-height: 600px;
    margin: 80px 0 0 0;
  }
`;

export const StyledImg = styled(motion.img)`
  display: block;
  min-width: 100%;
`;

export const StyledNav = styled(TfiAngleLeft)<{ $type: "prev" | "next"; $clickable: boolean }>`
  font-size: 3rem;
  color: ${({ theme: { colors } }) => colors.white};
  position: absolute;
  right: ${({ $type }) => ($type === "prev" ? "auto" : 0)};
  top: 50%;
  transform: translateY(-50%) rotateY(${({ $type }) => ($type === "prev" ? 0 : "180deg")});
  opacity: ${({ $clickable }) => ($clickable ? 1 : 0.3)};
  transition: all 0.3s linear;
  cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};
  z-index: 1;

  &:hover {
    opacity: ${({ $clickable }) => ($clickable ? 0.7 : 0.3)};
  }

  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
    font-size: 5rem;
  }
`;

export const StyledThumbContainer = styled.div<{ $numOfElements: number }>`
  position: relative;
  display: flex;
  justify-content: ${({ $numOfElements }) => ($numOfElements <= 4 ? "center" : "flex-start")};
  width: 100%;
  overflow-x: auto;
  margin: 20px 0;

  &::-webkit-scrollbar {
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: white;
    outline: 1px solid white;
    border-radius: 10px;
  }

  @media (${({ theme: { breakpoints } }) => breakpoints.sm}) {
    justify-content: ${({ $numOfElements }) => ($numOfElements <= 10 ? "center" : "flex-start")};
  }

  @media (${({ theme: { breakpoints } }) => breakpoints.md}) {
    justify-content: ${({ $numOfElements }) => ($numOfElements <= 14 ? "center" : "flex-start")};
  }

  @media (${({ theme: { breakpoints } }) => breakpoints.lg}) {
    justify-content: ${({ $numOfElements }) => ($numOfElements <= 9 ? "center" : "flex-start")};
  }
`;

export const StyledThumbImg = styled(motion.img)<{ $active: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 6px;
  margin: 0 10px 10px 0;
  cursor: pointer;
  border: ${({ $active, theme: { colors } }) =>
    $active ? `2px solid ${colors.accent}` : "2px solid transparent"};
  transition: border 0.3s linear;

  &:last-of-type {
    margin: 0 0 10px 0;
  }

  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
    width: 100px;
    height: 100px;
  }
`;
