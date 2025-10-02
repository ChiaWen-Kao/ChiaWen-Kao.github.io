/**
 * Utility: useHideFooter
 *
 * Hides the footer element in some particular page when the component is mounted.
 * Automatically cleans up if the component unmounts.
 * 
 * Example:
 * ```
 * import useHideFooter from "../../utils/useHideFooter";  // Import utility
 * useHideFooter();
 * ```
 */

import { useEffect } from "react";

export default function useHideFooter(): void {
  useEffect(() => {
    const footer = document.getElementById("footer");
    footer?.style.setProperty("display", "none");
  }, []);
}