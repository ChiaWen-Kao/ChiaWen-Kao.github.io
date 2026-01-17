"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

/**
 * Utility: Resolve Element
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
 * Utility: Check Reduce Motion (Accessibility Setting)
 *
 * Check for accessibility setting for reduced motion
 */
function checkReduceMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Utility: Fade In Up
 *
 * Animate a DOM element or a React ref with a "fade in and slide up" effect.
 * This is mainly used on hero/title.
 *
 * @param {HTMLElement | React.RefObject<HTMLElement>} targetRef: The target element or a React ref pointing to it.
 *   - If a single DOM element is passed, it will be animated directly.
 *   - If a React ref is passed, 'ref.current' will be used.
 *
 * @example
 * // Note: 'content-item' class is used to identify child elements to animate within the target element.
 * // Using a React ref in a component
 * const sectionRef = useRef<HTMLDivElement>(null);
 * useEffect(() => {
 *   fadeInUp(sectionRef);
 * }, []);
 */
export const fadeInUp = (
  targetRef: HTMLElement | React.RefObject<HTMLElement | null>
) => {
  const element = resolveElement(targetRef);
  if (!element || checkReduceMotion()) return;

  // Animtaion settings
  // Group animations together and attach them to a specific element
  const ctx = gsap.context(() => {
    const elements = element.getElementsByClassName("content-item");
    const items = elements.length > 0 ? elements : [element]; // Check if there are child elements to animate
    gsap.set(items, {
      y: 50,
      opacity: 0,
    });
    gsap.to(items, {
      y: 0, // Slide up
      opacity: 1, // Fade in 0 > 1
      duration: 2,
      stagger: 0.5, // Delay between each element
      ease: "power3.out",
    });
  }, element);

  return () => ctx.revert(); // Cleanup animation if component unmounts
};

/**
 * Utility: Fade In Down
 *
 * Animate a DOM element or a React ref with a "fade in and slide down" effect.
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
 *   fadeInDown(sectionRef);
 * }, []);
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
 * Utility: Fade Out Up
 *
 * Animate a DOM element or a React ref with a "fade out and slide up" effect.
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
 *   fadeOutUp(sectionRef);
 * }, []);
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

/**
 * Utility: Snapping Vertical Scroll
 *
 * Animate a DOM element or a React ref with a "snap and pin" effect when scrolling.
 *
 * @param {HTMLElement | React.RefObject<HTMLElement>} targetRef: The target element or a React ref pointing to it.
 *   - If a single DOM element is passed, it will be animated directly.
 *   - If a React ref is passed, 'ref.current' will be used.
 *
 * @example
 * // Using a React ref in a component
 * const snapScrollRef = useRef<HTMLDivElement>(null);
 * useEffect(() => {
 *   snapScroll(snapScrollRef);
 * }, []);
 * // Hidden overflow-x on the container
 * // Add a flex container of panel elements inside
 * // Add "panel" class to each child element to be snapped
 */
export const snapScroll = (
  targetRef: HTMLElement | React.RefObject<HTMLElement | null>
) => {
  const element = resolveElement(targetRef);
  if (!element || checkReduceMotion()) return;

  const sections = gsap.utils.toArray<HTMLElement>(".panel");
  if (sections.length <= 0) return;

  const ctx = gsap.context(() => {
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1), // Move left by 100% of its own width
      ease: "none",
      scrollTrigger: {
        trigger: element,
        pin: true,
        scrub: 1, // Syncs the scroll position smoothly with animation
        snap: 1 / (sections.length - 1), // Snap the scroll percentage
        end: () => "+=" + element.offsetWidth * 0.8, // Speed of scroll
      },
    });
  });

  return () => ctx.revert();
};

/**
 * Utility: Slide In Alternatively
 *
 * Animates a DOM element or React ref with an alternating slide-in effect from left or right.
 * This is mainly used on two-part cards display.
 *
 * @param {HTMLElement | React.RefObject<HTMLElement>} targetRef: The target element or a React ref pointing to it.
 *   - If a single DOM element is passed, it will be animated directly.
 *   - If a React ref is passed, 'ref.current' will be used.
 * @param {number} index: The index of the element (used to alternate slide direction).
 *   - Even indexes slide from left.
 *   - Odd indexes slide from right.
 *
 * @example
 * // Using a React ref in a component
 * const sectionRef = useRef<HTMLDivElement>(null);
 * useEffect(() => {
 *   slideInAlternative(sectionRef);
 * }, []);
 * // Add "card" class to each element for the scroll trigger
 * // Add "card-image" class to the image part (or left part)
 * // Add "card-content" class to the text part (or right part)
 */
export const slideInAlternative = (
  targetRef: HTMLElement | React.RefObject<HTMLElement | null>,
  index: number
) => {
  const element = resolveElement(targetRef);
  if (!element || checkReduceMotion()) return;

  const image = element.querySelector<HTMLElement>(".card-image");
  const content = element.querySelector<HTMLElement>(".card-content");
  if (!image || !content) return;

  const imageFromX = index % 2 === 0 ? -120 : 120;
  const contentFromX = index % 2 === 0 ? 120 : -120;

  const ctx = gsap.context(() => {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: element,
          start: "top -40%", // Start when the top of the element hits -40% of the view height
          end: "bottom -70%", // End when the bottom of the element hits -70% of the view height
          toggleActions: "play none play reverse",
        },
      })
      .from(image, { x: imageFromX, opacity: 0, ease: "power2.out" })
      .from(content, { x: contentFromX, opacity: 0, ease: "power2.out" }, 0);
    return tl;
  });

  return () => {
    ctx.revert();
  };
};