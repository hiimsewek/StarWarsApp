import styled from "styled-components";

export const StyledSectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
    flex-direction: row;
  }
`;
