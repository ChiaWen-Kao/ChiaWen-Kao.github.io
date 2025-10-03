/**
 * Page: Blog
 *
 * This page serves as a blog list page and the entry point for individual blog posts.
 *
 * Features:
 * - Displays a placeholder image and text for blog pages.
 * - Shows a "still constructing" illustration and text when no blog content is available.
 *
 * @returns {JSX.Element}: The Blog page layout.
 */

"use client";

import { useEffect, useRef } from "react";
import useViewpointMinHeight from "utils/useViewpointMinHeight";
import useHideFooter from "utils/hideFooter";
import { fadeInUp } from "utils/gsapAnimation";

export default function Blog() {
  const minHeight = useViewpointMinHeight();
  useHideFooter();

  // GSAP enter animation
  const contentSectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // fadeInUp(contentSectionRef);
    return fadeInUp(contentSectionRef)
  }, []); // Runs once only, after the compoenent mounts

  return (
    <section
      className="flex flex-col items-center justify-center px-4 md:px-30 opacity-0"
      style={{ minHeight: minHeight }}
      ref={contentSectionRef}
    >
      <div className="mb-8 md:mb-10">
        <img src="/imgs/constructing.svg" className="w-70 md:w-130" />
      </div>
      <p className="text-center text-foreground font-bold text-md md:text-2xl font-montserrat">
        This space will be filled with insights, stories, and projects soon.
        <br />
        Stay tuned!
      </p>
    </section>
  );
}
