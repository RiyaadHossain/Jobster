import { useEffect } from "react";

export const useScrollDown = (ref, scrollY) => {
  useEffect(() => {
    // Show Navbar background when scroll down
    const handleScroll = () => {
      if (window.scrollY >= scrollY) {
        ref.current.classList.add("nav_white");
      } else {
        ref.current.classList.remove("nav_white");
      }
    };

    // Listen for scroll down
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove the event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref, scrollY]);
};
