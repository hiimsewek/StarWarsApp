import { Link } from "react-router";
import { IoMenu, IoClose } from "react-icons/io5";
import {
  StyledIconContainer,
  StyledListItem,
  StyledNavContainer,
  StyledNavList,
} from "./Navbar.styled";
import { Overlay } from "components";
import useNavbar from "./useNavbar";

const navlinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Movies", href: "/movies" },
];

const Navbar = () => {
  const {
    isDesktop,
    isOpened,
    location,
    navOpened,
    showOverlay,
    toggleNav,
    listItemAnimationState,
    listItemInitialState,
  } = useNavbar();

  return (
    <>
      {!isDesktop && (
        <StyledIconContainer>
          {navOpened ? <IoClose onClick={toggleNav} /> : <IoMenu onClick={toggleNav} />}
        </StyledIconContainer>
      )}

      <StyledNavContainer $isOpened={isOpened}>
        <StyledNavList>
          {navlinks.map((link, i) => {
            const isActive = location.pathname === link.href;

            return (
              <StyledListItem
                key={link.href}
                $linkActive={isActive}
                initial={listItemInitialState}
                whileInView={listItemAnimationState}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <Link to={link.href} onClick={toggleNav}>
                  {link.name}
                </Link>
              </StyledListItem>
            );
          })}
        </StyledNavList>
      </StyledNavContainer>
      {showOverlay && <Overlay onClick={toggleNav} />}
    </>
  );
};

export default Navbar;
