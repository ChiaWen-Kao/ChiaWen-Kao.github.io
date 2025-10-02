/**
 * Utility: useViewpointMinHeight
 * Custom hook to calculate the minimum page height, excluding the navbar's height.
 *
 * @return {string}: A CSS value for 'min-height' (e.g., "calc(100vh - 80px)").
 *
 * Example:
 * ```
 * import useViewpointMinHeight from "../../utils/useViewpointMinHeight";  // Import utility
 * const minHeight = useViewpointMinHeight();  // Call function
 * ```
 */

import { useState, useEffect } from "react";

export default function useViewpointMinHeight(): string {
  const [minH, setMinH] = useState("100vh");

  useEffect(() => {
    const updateMinHeight = () => {
      const nav = document.getElementById("navbar");
      const navH = nav?.offsetHeight ?? 0;
      setMinH(`calc(100vh - ${navH}px)`);
    };
    updateMinHeight(); // Call the function immediately
    window.addEventListener("resize", updateMinHeight); // Rerun the function when the window is resize

    return () => {
      window.removeEventListener("resize", updateMinHeight); // Cleanup
    };
  }, []);

  return minH;
}