import styled from "styled-components";

export const StyledContentWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;

  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
    margin: 40px auto;
  }
`;
