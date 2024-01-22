import { useEffect, useState } from "react";

export const useDeboune = (searchTerm, delay) => {
  const [debounceTerm, setDebounceTerm] = useState(searchTerm);
  useEffect(() => {
    const timeOutHandler = setTimeout(() => {
      setDebounceTerm(searchTerm);
    }, delay);

    return () => {
      clearTimeout(timeOutHandler);
    };
  }, [searchTerm, delay]);

  return debounceTerm;
};
