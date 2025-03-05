import { useIsDesktop } from "hooks";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const useNavbar = () => {
  const isDesktop = useIsDesktop();

  const [navOpened, setNavOpened] = useState(isDesktop);

  const toggleNav = () => {
    setNavOpened(!navOpened);
  };

  const location = useLocation();

  const showOverlay = !isDesktop && navOpened;

  const isOpened = isDesktop === true ? isDesktop : navOpened;

  useEffect(() => {
    if (!isDesktop && navOpened) {
      window.document.body.classList.add("scrollBlock");
    } else {
      window.document.body.classList.remove("scrollBlock");
    }
  }, [isDesktop, navOpened]);

  return { isDesktop, navOpened, toggleNav, location, showOverlay, isOpened };
};

export default useNavbar;
