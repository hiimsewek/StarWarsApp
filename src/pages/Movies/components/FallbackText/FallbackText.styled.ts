import styled from "styled-components";

export const StyledMessage = styled.div`
  font-size: 1.4rem;
  text-align: center;
  margin: 40px 0;

  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
    font-size: 1.6rem;
  }
`;
