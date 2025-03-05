import Logo from "assets/logo.png";
import { StyledHeaderContainer, StyledLink, StyledLogo } from "./Header.styled";
import { Navbar } from "components";
import { useIsScrolled } from "hooks";

const Header = () => {
  const isScrolled = useIsScrolled(10);

  return (
    <StyledHeaderContainer $isScrolled={isScrolled}>
      <StyledLink to="/">
        <StyledLogo src={Logo} alt="Star Wars Logo" />
      </StyledLink>

      <Navbar />
    </StyledHeaderContainer>
  );
};

export default Header;
