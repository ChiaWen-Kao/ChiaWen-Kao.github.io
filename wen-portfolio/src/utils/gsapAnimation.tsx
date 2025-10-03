"use client";

import gsap from "gsap";

/**
 * Utility: resolveElement
 *
 * Safely resolve a target from either HTMLElement or React.RefObject.
 * Returns `null` if not available.
 */
function resolveElement(
  targetRef: HTMLElement | React.RefObject<HTMLElement | null>
): HTMLElement | null {
  // Check the type of the element
  // If targetRef is a DOM element, use it directly
  // If it's a ref, use .current
  return targetRef instanceof HTMLElement ? targetRef : targetRef.current;
}


/**
 * Utility: shouldReduceMotion
 *
 * Check for accessibility setting for reduced motion
 */
function checkReduceMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}


/**
 * Utility: fadeInUp
 *
 * Animate a DOM element or a React ref with a "fade in and slide up" effect.
 * Uses GSAP and supports reduced motion accessibility settings.
 * This is mainly used on hero/title
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
  const element = resolveElement(targetRef);
  if (!element || checkReduceMotion()) return;

  // Animtaion settings
  // Group animations together and attach them to a specific element
  const ctx = gsap.context(() => {
    gsap.set(element, {
      y: 50,
      opacity: 0,
    });
    gsap.to(element, {
      y: 0, // Slide up
      opacity: 1, // Fade in 0 > 1
      duration: 2,
      ease: "power3.out",
    });
  }, element);

  return () => ctx.revert(); // Cleanup animation if component unmounts
};


/**
 * Utility: fadeInDown
 *
 * Animate a DOM element or a React ref with a "fade in and slide down" effect.
 * Uses GSAP and supports reduced motion accessibility settings.
 * This is mainly used on alert display.
 *
 * @param {HTMLElement | React.RefObject<HTMLElement>} targetRef: The target element or a React ref pointing to it.
 *   - If a single DOM element is passed, it will be animated directly.
 *   - If a React ref is passed, 'ref.current' will be used.
 *
 * @example
 * // Using a React ref in a component
 * const sectionRef = useRef<HTMLDivElement>(null);
 * useEffect(() => {
 *   const cleanup = fadeInDown(sectionRef);
 *   return cleanup; // Revert animation on unmount
 * }, []);
 *
 * // Using a DOM element directly
 * const element = document.getElementById("hero");
 * fadeInDown(element);
 */
export const fadeInDown = (
  targetRef: HTMLElement | React.RefObject<HTMLElement | null>
) => {
  const element = resolveElement(targetRef);
  if (!element || checkReduceMotion()) return;

  const ctx = gsap.context(() => {
    gsap.fromTo(
      element,
      {
        y: -30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      }
    );
  }, element);

  return () => ctx.revert();
};


/**
 * Utility: fadeOutUp
 *
 * Animate a DOM element or a React ref with a "fade out and slide up" effect.
 * Uses GSAP and supports reduced motion accessibility settings.
 * This is mainly used on closing alert
 *
 * @param {HTMLElement | React.RefObject<HTMLElement>} targetRef: The target element or a React ref pointing to it.
 *   - If a single DOM element is passed, it will be animated directly.
 *   - If a React ref is passed, 'ref.current' will be used.
 *
 * @example
 * // Using a React ref in a component
 * const sectionRef = useRef<HTMLDivElement>(null);
 * useEffect(() => {
 *   const cleanup = fadeOutUp(sectionRef);
 *   return cleanup; // Revert animation on unmount
 * }, []);
 *
 * // Using a DOM element directly
 * const element = document.getElementById("hero");
 * fadeOutUp(element);
 */
export const fadeOutUp = (
  targetRef: HTMLElement | React.RefObject<HTMLElement | null>,
  onComplete?: () => void
) => {
  const element = resolveElement(targetRef);
  if (!element || checkReduceMotion()) return;

  const ctx = gsap.context(() => {
    gsap.to(element, {
      y: -30, // Move back up
      opacity: 0, // Fade out
      duration: 0.6,
      ease: "power2.in",
      onComplete,
    });
  }, element);

  return () => ctx.revert();
};