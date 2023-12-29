/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export const useTooltip = (tooltipRef) => {
  const [openTooltip, setOpenTooltip] = useState(false);

  const toggleTooltip = () => setOpenTooltip(!openTooltip);

  useEffect(() => {
    // Close the profile menu - on outside click
    const handleClickOutside = (event) => {
      if (!tooltipRef.current.contains(event.target)) {
        setOpenTooltip(false);
      }
    };

    // Listen for clicks outside the profile menu
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Remove the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return { toggleTooltip, openTooltip };
};
