/**
 * Component: Image Content Card
 *
 * Renders a responsive project preview card with an image and descriptive text,
 * design for use in project overview sections.
 *
 * Features:
 * - Smooth GSAP entrance animation (`slideInAlternative`) triggered on mount.
 * - Alternating layout for even and odd indexed cards.
 * - Each text element can animate sequentially.
 * - Respects user accessibility settings for reduced motion.
 *
 * @param {Object} ProjectPreviewProps: The props for the component.
 * @param {Object} ProjectPreviewProps.data: The project data to display.
 * @param {string} ProjectPreviewProps.data.title: The title of the project.
 * @param {string} ProjectPreviewProps.data.duration: The duration of the project.
 * @param {string} ProjectPreviewProps.data.projectType: The type/category of the project.
 * @param {string} ProjectPreviewProps.data.description: A brief description of the project.
 * @param {string[]} ProjectPreviewProps.data.tag: An array of tags/technologies used in the project.
 * @param {string} ProjectPreviewProps.data.image: The URL of the project's preview image.
 * @param {number} ProjectPreviewProps.index: The index of the project card (used for layout alternation).
 *
 * @returns {JSX.Element} A project preview card with animated content.
 *
 * @example
 * import ImageContentCard from "@/components/ImageContentCard";
 *
 * export default function HomePage() {
 *   const project = {
 *     title: "InsightHub",
 *     duration: "2024",
 *     projectType: "Web App",
 *     description: "A dashboard for visualizing user behavior analytics.",
 *     tag: ["Next.js", "Tailwind", "Django"],
 *     image: "/images/insighthub-cover.jpg",
 *   };
 *
 *   return <ImageContentCard data={project} index={0} />;
 * }
 */
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Tag } from "../components/tag";
import { slideInAlternative } from "utils/gsapAnimation";

interface ImageContentCardProps {
  data: {
    title: string;
    duration: string;
    projectType: string;
    description: string;
    tag: string[];
    image: string;
  };
  index: number;
}

export default function ImageContentCard({ data, index }: ImageContentCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    slideInAlternative(cardRef, index);
  }, []);

  return (
    <div
      className="card grid grid-cols-1 md:grid-cols-3 gap-4 items-center my-20 md:my-24"
      ref={cardRef}
      aria-label={data.title}
    >
      <div
        className={`card-image relative md:col-span-2 overflow-hidden aspect-[3/2] ${
          index % 2 === 1 ? "md:order-2" : ""
        }`}
      >
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover w-full h-full"
        />
      </div>
      <div
        className={`card-content relative rounded-md bg-[rgba(18, 38, 46, 0.5)] backdrop-blur-3xl p-6 md:p-9 md:ml-[-100px] z-10 ${
          index % 2 === 1 ? "md:order-1 md:ml-[0px] md:mr-[-100px]" : ""
        }`}
      >
        <div className="absolute inset-0 rounded-md bg-foreground/8 pointer-events-none"></div>
        <div className="relative">
          <h3 className="text-foreground text-xl font-telugu leading-[200%]">
            {data.title}
          </h3>
          <p className="text-caption text-md font-montserrat">
            {data.duration} | {data.projectType}
          </p>
          <p className="text-foreground text-md font-montserrat leading-[200%] mt-5">
            {data.description}
          </p>
          <div className="flex flex-wrap gap-3 mt-5">
            {data.tag.map((item) => (
              <Tag key={item} variant="bordered" colour="foreground" icon="">
                {item}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
