import styled from "styled-components";

export const StyledWrapper = styled.div`
  flex-grow: 1;
  padding: 0 20px 100px;

  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
    padding: 0 80px 100px;
  }
`;
