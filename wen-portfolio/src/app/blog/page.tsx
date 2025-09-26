"use client";

import { useEffect, useState } from "react";

export default function Blog() {
  const [minH, setMinH] = useState("100vh");

  // Get navbar height
  useEffect(() => {
    const updateMinHeight = () => {
      const nav = document.getElementById("navbar");
      const navH = nav?.offsetHeight ?? 0;
      setMinH(`calc(100vh - ${navH}px)`);
    };
    updateMinHeight();
    window.addEventListener("resize", updateMinHeight);
  }, []);

  // Hidden footer
  useEffect(() => {
    const footer = document.getElementById("footer");
    footer?.style.setProperty("display", "none");
  }, []);

  return (
    <section
      className="flex flex-col items-center justify-center px-4 md:px-2 md:px-30"
      style={{ minHeight: minH }}
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
