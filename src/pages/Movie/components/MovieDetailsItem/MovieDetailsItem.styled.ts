import styled from "styled-components";

export const StyledDetailsItemContainer = styled.div`
  display: flex;
  font-size: 1.4rem;
  padding: 5px 0;

  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
    font-size: 1.6rem;
  }
`;

export const StyledLabel = styled.span`
  min-width: 120px;
  width: 120px;
`;
