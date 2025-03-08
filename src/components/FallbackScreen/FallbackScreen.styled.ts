import { Link } from "react-router";
import styled from "styled-components";

export const FallbackScreenContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
  }
`;

export const StyledMessage = styled.div`
  font-size: 3.6rem;
  text-align: center;
  margin-bottom: 20px;

  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
    font-size: 5rem;
  }
`;

export const StyledHomeLink = styled(Link)`
  font-size: 1.4rem;
  padding: 10px 20px;
  border: ${({ theme: { colors } }) => `2px solid ${colors.accent}`};
  border-radius: 6px;
  transition: 0.3s linear;
  color: ${({ theme: { colors } }) => colors.accent};

  &:hover {
    opacity: 0.7;
  }
  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
    font-size: 2rem;
  }
`;
