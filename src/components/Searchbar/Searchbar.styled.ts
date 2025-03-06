import { FaMagnifyingGlass } from "react-icons/fa6";
import styled from "styled-components";

export const StyledSearchbarContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
`;

export const StyledIcon = styled(FaMagnifyingGlass)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 1.6rem;
  color: ${({ theme: { colors } }) => colors.black};
`;

export const StyledSearchbar = styled.input`
  width: 100%;
  padding: 10px 40px;
  border-radius: 20px;
  outline: none;
  border: none;
  font-family: ${({ theme: { font } }) => font};
  font-size: 1.4rem;
`;
