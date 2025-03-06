import styled from "styled-components";
import { Link } from "react-router";

export const StyledMovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 120px);
  gap: 40px;
  justify-content: center;
  margin: 40px 0;

  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
    grid-template-columns: repeat(auto-fill, 150px);
  }
`;

export const StyledMovieThumbContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 120px;
  cursor: pointer;
  opacity: 1;
  transition: 0.3s linear;

  &:hover {
    opacity: 0.7;
  }

  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
    width: 150px;
  }
`;

export const StyledPoster = styled.img`
  width: 100%;
  height: 180px;
  margin-bottom: 10px;
  border-radius: 6px;

  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
    height: 220px;
  }
`;

export const StyledMovieTitle = styled.span`
  font-size: 1.4rem;
  text-align: center;

  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
    font-size: 1.6rem;
  }
`;
