/**
 * Page: Blog
 *
 * This page serves as a blog list page and the entry point for individual blog posts.
 *
 * Features:
 * - Displays a placeholder image and text for blog pages.
 * - Shows a "still constructing" illustration and text when no blog content is available.
 *
 * @returns {JSX.Element} The Blog page section.
 */

"use client";

import useViewpointMinHeight from "utils/useViewpointMinHeight";
import useHideFooter from "utils/hideFooter";

export default function Blog() {
  const minHeight = useViewpointMinHeight();
  useHideFooter();

  return (
    <section
      className="flex flex-col items-center justify-center px-4 md:px-2 md:px-30"
      style={{ minHeight: minHeight }}
    >
      <div className="mb-8 md:mb-10">
        <img src="/imgs/constructing.svg" className="w-70 md:w-130 h-auto" />
      </div>
      <p className="text-foreground font-montserrat text-center font-bold text-md md:text-2xl">
        This space will be filled with insights, stories, and projects soon.{" "}
        <br />
        Stay tuned!
      </p>
    </section>
  );
}
