"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function TextHero() {
  const textHeroRef = useRef<HTMLDivElement>(null);
  const [minH, setMinH] = useState("100vh");

  // Get navbar height
  useEffect(() => {
    const updateMinHeight = () => {
      const nav = document.getElementById("navbar");
      const h = nav?.offsetHeight ?? 0; // Get navbar height, if not found, default to 0
      setMinH(`calc(100vh - ${h}px)`);
    };
    updateMinHeight();
    window.addEventListener("resize", updateMinHeight); // Update on window resize
  }, []);

  // GSAP animation
  useEffect(() => {
    if (!textHeroRef.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches; // Check for accessiblity setting for reduced motion
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-animate", {
        y: 50, // slide up
        opacity: 0, // fade in
        duration: 3, // animation duration
        stagger: 0.5, // delay between each element
        ease: "power3.out",
      });
    }, textHeroRef);
    return () => ctx.revert(); // Cleanup animation if component unmounts
  }, []);

  return (
    <section
      id="text-hero"
      ref={textHeroRef}
      style={{ minHeight: minH }}
      className="flex flex-col items-center justify-center text-center px-6"
    >
      <h1 className="hero-animate font-telugu font-bold text-foreground uppercase text-5xl md:text-7xl leading-[140%] mb-4">
        Hi, I&apos;m Wen.
      </h1>
      <h1 className="hero-animate font-telugu font-bold text-cta uppercase text-5xl md:text-7xl leading-[140%]">
        <span className="block">A UI/UX designer</span>
        <span className="block">&amp; Full-stack developer</span>
      </h1>
    </section>
  );
}
