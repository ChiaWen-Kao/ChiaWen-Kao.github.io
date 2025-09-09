"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ImageHero() {
  // Get navbar height
  const [navHeight, setNavHeight] = useState(0);
  useEffect(() => {
    const nav = document.getElementById("navbar");
    const h = nav?.offsetHeight ?? 0;
    setNavHeight(h);
  }, []);

  // GSAP animation
  const imageHeroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imageHeroRef.current || !imageRef.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        scale: 1.8,
        ease: "none",
        scrollTrigger: {
          trigger: imageHeroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section style={{ marginTop: `-${navHeight}px` }}>
      <div
        className="z-[-10] h-[100vh] w-full overflow-hidden relative"
        ref={imageHeroRef}
      >
        <Image
          src="/imgs/portrait.jpg"
          alt="portrait"
          fill
          ref={imageRef}
          className="object-cover object-[33%_0%]"
        />
      </div>
    </section>
  );
}
