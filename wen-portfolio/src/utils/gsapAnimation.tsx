"use client";

import gsap from "gsap";

/**
 * Utility: fadeInUp
 *
 * Animate a DOM element or a React ref with a "fade in and slide up" effect.
 * Uses GSAP and supports reduced motion accessibility settings.
 *
 * @param {HTMLElement | React.RefObject<HTMLElement>} targetRef: The target element or a React ref pointing to it.
 *   - If a single DOM element is passed, it will be animated directly.
 *   - If a React ref is passed, 'ref.current' will be used.
 *
 * @example
 * // Using a React ref in a component
 * const sectionRef = useRef<HTMLDivElement>(null);
 * useEffect(() => {
 *   const cleanup = fadeInUp(sectionRef);
 *   return cleanup; // Revert animation on unmount
 * }, []);
 *
 * // Using a DOM element directly
 * const element = document.getElementById("hero");
 * fadeInUp(element);
 */

export const fadeInUp = (
  targetRef: HTMLElement | React.RefObject<HTMLElement | null>
) => {
  const element =
    targetRef instanceof HTMLElement // Check the type of the element
      ? targetRef // If targetRef is a DOM element, use it directly
      : targetRef.current; // If it's a ref, use .current
  if (!element) return;

  // Check for accessibility setting for reduced motion
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReduced) return;

  // Animtaion settings
  // Group animations together and attach them to a specific element
  const ctx = gsap.context(() => {
    gsap.set(element, {
      y: 50,
      opacity: 0,
    })
    gsap.to(element, {
      y: 0, // Slide up
      opacity: 1, // Fade in 0 > 1
      duration: 2,
      ease: "power3.out",
    });
  }, element);

  return () => ctx.revert(); // Cleanup animation if component unmounts
};
