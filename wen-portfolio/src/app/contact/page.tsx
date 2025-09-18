"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
// Import components
import Form from "../../components/form";

export default function ContactPage() {
  const headingRef = useRef<HTMLDivElement>(null);
  const [minH, setMinH] = useState("100vh");
  const [alertVisible, setAlertVisible] = useState(false);
  const alertRef = useRef<HTMLDivElement>(null);

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
        y: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        ease: "power2.inOut",
      });
    }, headingRef);
    return () => ctx.revert();
  }, []); // Run this effect only once after the first render, and never again

  // Alert GSAP animation (show)
  useEffect(() => {
    if (!alertVisible || !alertRef.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    gsap.fromTo(
      alertRef.current,
      { y: -50, opacity: 0 }, // start from top
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" } // animate down
    );
  }, [alertVisible]);

  // Close animation handler
  const handleClose = () => {
    if (!alertRef.current) return;

    gsap.to(alertRef.current, {
      y: -30, // move back up
      opacity: 0, // fade out
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => setAlertVisible(false), // remove from DOM after animation
    });
  };

  return (
    <div
      style={{ minHeight: minH }}
      className="flex flex-col w-screen justify-center py-10 px-10 md:px-30"
    >
      {alertVisible && (
        <div
          className="fixed top-30 right-0 left-0 flex justify-center z-50"
          ref={alertRef}
        >
          <div className="relative bg-foreground text-center py-4 px-6 rounded flex items-top">
            <span className="flex rounded-full bg-success text-foreground uppercase px-2 py-1 text-xs font-bold mr-3">
              Success
            </span>
            <span className="font-semibold text-background">
              Your message has been sent. I will reply to you as soon as
              possible.
            </span>
            <span className="ml-10 cursor-pointer" onClick={handleClose}>
              <svg
                className="fill-current h-6 w-6 text-caption"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        </div>
      )}
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
          <Form
            onSuccess={() => {
              setAlertVisible(true);
              setTimeout(() => setAlertVisible(false), 10000);
            }}
          />
        </div>
      </div>
    </div>
  );
}
