/**
 * Component: CenterTextHero
 *
 * A centered hero section that introduces the portfolio with bold, animated text.
 * This component is typically used as the main hero section.
 *
 * Features:
 * - Smooth GSAP entrance animation (`fadeInUp`) triggered on mount.
 * - Each text element can animate sequentially with staggered delay.
 * - Respects user accessibility settings for reduced motion.
 *
 * @returns {JSX.Element} A full-height hero section with animated introduction text.
 *
 * @example
 * import { CenterTextHero } from "@/components/CenterTextHero";
 *
 * export default function HomePage() {
 *   return (
 *     <CenterTextHero />
 *   );
 * }
 */

"use client";

import { useEffect, useRef } from "react";
import useViewpointMinHeight from "utils/useViewpointMinHeight";
import { fadeInUp } from "utils/gsapAnimation";

export const CenterTextHero = () => {
  const minHeight = useViewpointMinHeight();

  // GSAP enter animation
  const contentSectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    return fadeInUp(contentSectionRef);
  }, [contentSectionRef]); // Runs once only, after the compoenent mounts

  return (
    <section
      style={{ minHeight }}
      ref={contentSectionRef}
      className="flex flex-col px-6 md:px-30 items-center justify-center text-center font-bold uppercase text-5xl md:text-7xl leading-[140%] font-telugu"
    >
      <h1 className="text-foreground content-item opacity-0">
        Hi, I&apos;m Wen.
      </h1>
      <h1 className="text-cta content-item opacity-0">
        <span className="block">A UI/UX designer</span>
        <span className="block">&amp; Full-stack developer</span>
      </h1>
    </section>
  );
};
