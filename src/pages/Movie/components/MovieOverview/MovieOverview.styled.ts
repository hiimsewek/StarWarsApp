import styled from "styled-components";

export const StyledItemContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (${({ theme: { breakpoints } }) => breakpoints.lg}) {
    flex-direction: row;
  }
`;

export const StyledPoster = styled.img`
  display: block;
  width: 200px;
  min-width: 200px;
  height: 300px;
  border-radius: 6px;

  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
    width: 300px;
    min-width: 300px;
    height: 450px;
  }
`;

export const StyledTextContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 20px 0 0 0;

  @media (${({ theme: { breakpoints } }) => breakpoints.lg}) {
    margin: 0 0 0 40px;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;

  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
    font-size: 3.6rem;
  }
`;

export const StyledDescription = styled.p`
  font-size: 1.4rem;
  margin: 20px 0;

  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
    font-size: 1.6rem;
    margin: 40px 0;
  }
`;
