import { useEffect, useState } from "react";
import { unpackBreakpoint } from "utils/themeHelpers";
import throttle from "lodash.throttle";

const desktopBreakpoint = unpackBreakpoint("xl");
const initialIsDesktop = window.innerWidth >= desktopBreakpoint;

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(initialIsDesktop);

  useEffect(() => {
    const checkIsDesktop = () => {
      const desktopBreakpoint = unpackBreakpoint("xl");

      if (window.innerWidth >= desktopBreakpoint) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };

    window.addEventListener("resize", throttle(checkIsDesktop, 300));

    return () => {
      window.removeEventListener("resize", checkIsDesktop);
    };
  }, []);

  return isDesktop;
};

export default useIsDesktop;
