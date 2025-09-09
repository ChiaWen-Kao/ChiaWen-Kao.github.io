"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
// Import components
import Form from "../../components/form";

export default function ContactPage() {
  const headingRef = useRef<HTMLDivElement>(null);
  const [minH, setMinH] = useState("100vh");

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

  // GSAP animation
  useEffect(() => {
    if (!headingRef.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        ease: "power2.inOut",
      });
    }, headingRef);
    return () => ctx.revert();
  });

  return (
    <div
      style={{ minHeight: minH }}
      className="flex flex-col w-screen justify-center py-10 px-10 md:px-30"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={headingRef}>
        <div className="flex flex-col justify-center font-montserrat text-foreground text-md">
          <h2 className="font-telugu text-5xl md:text-8xl uppercase">Hello.</h2>
          <p className="mt-10">
            Are you looking for a designer and web developer who combines
            creativity and code to turn your ideas into reality? Get in touch.
          </p>
          <p className="mt-10">
            Email:{" "}
            <a
              href="mailto:chiawenkao23@gmail.com"
              target="_blank"
              className="underline"
            >
              chiawenkao23@gmail.com
            </a>
          </p>
          <p className="mt-2">
            On the internet:{" "}
            <a
              href="https://linkedin.com/in/chiawen-kao"
              target="_blank"
              className="underline"
            >
              Linkedin
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/ChiaWen-Kao"
              target="_blank"
              className="underline"
            >
              GitHub
            </a>
          </p>
        </div>
        <div className="">
          <Form />
        </div>
      </div>
    </div>
  );
}
