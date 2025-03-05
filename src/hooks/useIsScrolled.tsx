import { useEffect, useState } from "react";
import throttle from "lodash.throttle";

const useIsScrolled = (value: number) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const isScrolled = () => {
      const isScrolled = window.scrollY >= value;

      setIsScrolled(isScrolled);
    };

    window.addEventListener("scroll", throttle(isScrolled, 300));

    return () => {
      window.removeEventListener("scroll", isScrolled);
    };
  }, [value]);

  return isScrolled;
};

export default useIsScrolled;
