import { useEffect, useMemo, useState } from "react";

export function useMobile() {
  // Initialize state with undefined width/height so server and client renders match

  //desktop 1 , mobile 2 tab 3
  const [isMobile, setIsMobile] = useState(1);
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      if (window.innerWidth <= 480) {
        setIsMobile(2);
      } else if (window.innerWidth > 480 && window.innerWidth < 1024) {
        setIsMobile(3);
      } else {
        setIsMobile(1);
      }
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return useMemo(() => isMobile, [isMobile]);
}
