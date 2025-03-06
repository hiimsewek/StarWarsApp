import { useEffect, useState } from "react";
import debounce from "lodash.debounce";

const useDebounce = <T,>(value: T, delay: number = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const debounceHandler = debounce(() => {
      setDebouncedValue(value);
    }, delay);

    debounceHandler();

    return () => {
      debounceHandler.cancel();
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
