import { Link } from "react-router";
import styled from "styled-components";

export const StyledHeaderContainer = styled.header<{ $isScrolled: boolean }>`
  position: sticky;
  top: 0;
  left: 0;
  height: var(--headerHeight);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: ${(props) => (props.$isScrolled ? props.theme.colors.black : "transparent")};
  transition: background-color 0.3s ease-in-out;
  z-index: 10;

  @media (${({ theme: { breakpoints } }) => breakpoints.xl}) {
    padding: 0 80px;
  }
`;

export const StyledLink = styled(Link)`
  &:hover {
    opacity: 1;
  }
`;

export const StyledLogo = styled.img`
  height: 40px;
`;
