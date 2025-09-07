"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function ImageHero() {
  const imageHeroRef = useRef<HTMLDivElement>(null);
  const [minH, setMinH] = useState("100vh");

  // Get navbar height
  useEffect(() => {
    const updateMinHeight = () => {
      const nav = document.getElementById("navbar");
      const h = nav?.offsetHeight ?? 0;
      setMinH(`calc(100vh - ${h}px`);
    };

    updateMinHeight();
    window.addEventListener("resize", updateMinHeight);
  }, []);

  return (
    <section
      id="imageHero"
      ref={imageHeroRef}
      style={{ minHeight: minH }}
      className="flex flex-col items-center justify-center text-center"
    >
      <div className="z-0">
        <Image
          src="/imgs/portrait.jpg"
          alt="portrait"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
