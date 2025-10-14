/**
 * Page: Landing Page
 *
 * The Landing Page provides users with a quick introduction to who I am,
 * including links to the "About" and "Works" pages. It serves as an entry
 * point for exploring my portfolio and key projects.
 *
 * Features:
 * - Displays a set of highlighted project preview cards, each linking to a detailed project page.
 * - Integrates GSAP animations:
 *   - Headline animation when the page loads.
 *   - Project cards slide in from alternating sides as the user scrolls.
 *
 * @returns {JSX.Element} The complete landing page layout.
 */
"use client";

import { useEffect, useRef } from "react";
import { CenterTextHero } from "components/hero";
import { Button } from "components/button";
import { snapScroll } from "utils/gsapAnimation";
import ImageContentCard from "components/imageContentCard";

import projectData from "../data/projectsOverview";

export default function LandingPage() {
  const images = [
    "/imgs/zenzzz.png",
    "/imgs/chilling-coffee.jpg",
    "/imgs/tnvr.jpg",
    "/imgs/sereno.png",
  ];

  const snapScrollRef = useRef<HTMLDivElement>(null);
  const projectCardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    snapScroll(snapScrollRef);
  }, []);

  return (
    <div>
      <CenterTextHero />
      <section className="my-20 md:my-[250px] md:pl-30">
        <div
          className="grid grid-cols-1 md:grid-cols-5 overflow-x-hidden"
          ref={snapScrollRef}
        >
          <div className="flex flex-col col-span-2 px-6 py-10 md:px-0 md:pr-20 md:py-0 align-center justify-center">
            <h2 className="text-foreground font-bold text-3xl font-telugu mb-10">
              Passionate designer with expertise in user-centred design
            </h2>
            <p className="text-foreground text-md font-montserrat leading-[200%] mb-10">
              I’m a problem solver who loves addressing users’ pain points and
              turning them into meaningful solutions. During the design process,
              I continuously ask “why” and validate decisions through user
              testing to ensure the best possible experience.
            </p>
            <a href="/about">
              <Button variant="borderedIcon" colour="cta" icon="link">
                read more about me
              </Button>
            </a>
          </div>
          <div className="col-span-3 relative h-screen overflow-hidden hidden md:block">
            <div className="flex h-full">
              {images.map((src, index) => (
                <img
                  key={`desktop-${index}`}
                  src={src}
                  alt={`Project image ${index + 1}`}
                  loading="eager"
                  className="panel w-screen h-full w-full object-cover object-center flex-shrink-0"
                />
              ))}
            </div>
          </div>
          <div className="flex overflow-x-auto gap-2 md:hidden">
            {images.map((src, index) => (
              <div
                key={`mobile-${index}`}
                className="relative aspect-square overflow-hidden flex-shrink-0 w-80"
              >
                <img
                  src={src}
                  alt={`Project image ${index + 1}`}
                  loading="eager"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="my-20 md:my-[150px] px-6 md:px-60">
        <h2 className=" text-foreground font-bold text-3xl font-telugu mb-10">
          Showcasing Design & Development in Action
          <br />
          “Exploring design through real-world applications.”
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:items-end mb-10">
          <div className="col-span-2">
            <p className="text-foreground text-md font-montserrat leading-[200%]">
              In today’s fast-paced digital world, I continuously learn, adapt,
              and apply new skills across a variety of projects. From UI/UX
              design and full-stack web development to WordPress, graphic
              design, and marketing materials, these featured works highlight my
              versatility. Each project reflects not only my technical expertise
              but also my passion for solving problems through thoughtful
              design.
            </p>
          </div>
          <div className="flex justify-start md:justify-end">
            <a href="/works">
              <Button variant="borderedIcon" colour="cta" icon="link">
                see more projects
              </Button>
            </a>
          </div>
        </div>
        <div ref={projectCardRef}>
          {projectData.map((item, index) => (
            <ImageContentCard key={index} data={item} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
