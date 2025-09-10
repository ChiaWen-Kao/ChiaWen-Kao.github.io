"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import projects from "../../data/projects";
gsap.registerPlugin(ScrollTrigger);
const allTags = Array.from(new Set(projects.flatMap((project) => project.tag))); // Collect all tags from data and remove the duplicated one

export default function Work() {
  const headingRef = useRef<HTMLDivElement>(null);
  const [minH, setMinH] = useState("100vh");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Toggle tag selection
  const handleTagClick = (tag: string) => {
    setSelectedTags(
      (prev) =>
        prev.includes(tag) // Check if the tag is selected
          ? prev.filter((t) => t !== tag) // Remove if already selected
          : [...prev, tag] // Add if not selected
    );
  };

  const filteredProjects = projects.filter((project) =>
    selectedTags.length === 0
      ? true
      : selectedTags.some((tag) => project.tag.includes(tag))
  );

  // Get navbar height
  useEffect(() => {
    const updateMinHeight = () => {
      const nav = document.getElementById("navbar");
      const h = nav?.offsetHeight ?? 0;
      setMinH(`calc(100vh - ${h}px)`);
    };
    updateMinHeight();
    window.addEventListener("resize", updateMinHeight);
  }, []);

  // Heading animations
  useEffect(() => {
    if (!headingRef.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches; // Check for accessiblity setting for reduced motion
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 50, // slide up
        opacity: 0, // fade in
        duration: 1, // animation duration
        stagger: 0.5, // delay between each element
        ease: "power3.out",
      });
    }, headingRef);
    return () => ctx.revert(); // Cleanup animation if component unmounts
  }, []);

  // Project list animation
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = document.querySelectorAll<HTMLDivElement>(".project-card");
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 }, // initial state
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%", // start animation when card top reaches 80% of viewport
            end: "bottom 80%",
            scrub: true,
            toggleActions: "play none play reverse", // play only
          },
        }
      );
    });
    ScrollTrigger.refresh();

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  // Project card animation

  return (
    <div className="px-10 md:px-30">
      {/* Heading */}
      <section
        style={{ minHeight: minH }}
        ref={headingRef}
        className="flex flex-cols items-center justify-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="font-telugu font-bold text-8xl">
            <h2>Works.</h2>
          </div>
          <div className="font-montserrat leading-[200%] flex justify-end items-start">
            <p>
              A showcase of my work across diverse fields, including UI/UX
              design, web development, no-code solutions, and graphic design. I
              continuously learn new skills and tools, staying adaptable and
              open to new possibilities.
            </p>
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="md:mt-10 md:mb-[300px] md:px-[100px]">
        <div className="inline-flex gap-4 flex-wrap">
          {allTags.map((item, index) => (
            <button
              key={index}
              onClick={() => handleTagClick(item)}
              className={`px-4 py-2 rounded border ${
                selectedTags.includes(item)
                  ? "bg-cta text-background"
                  : "border-foreground text-foreground hover:bg-foreground/20"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mt-10">
        <div className="grid grid-colrs-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`relative h-115 flex flex-col justify-end items-start p-10 project-card overflow-hidden group cursor-pointer ${
                index % 2 === 0 ? "md:-mt-[200px]" : ""
              }`}
              onClick={() => window.location.href = `${project.url}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-b from-foreground/0 to-background/70"></div>
              <h3 className="relative font-bold text-2xl font-montserrat text-foreground z-10">
                {project.title}
              </h3>
              <div className="h-px w-full bg-white my-2 relative z-10"></div>
              <p className="font-montserrat text-foreground z-10">
                {project.duration?.includes("-")
                  ? project.duration.split("-")[1].trim()
                  : project.duration || ""}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
