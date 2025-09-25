// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function ImageHero() {
//   // Get navbar height
//   const [navHeight, setNavHeight] = useState(0);
//   useEffect(() => {
//     const nav = document.getElementById("navbar");
//     const h = nav?.offsetHeight ?? 0;
//     setNavHeight(h);
//   }, []);

//   // GSAP animation
//   const imageHeroRef = useRef<HTMLDivElement>(null);
//   const imageRef = useRef<HTMLImageElement>(null);

//   useEffect(() => {
//     if (!imageHeroRef.current || !imageRef.current) return;
//     const prefersReduced = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     ).matches;
//     if (prefersReduced) return;

//     const ctx = gsap.context(() => {
//       gsap.to(imageRef.current, {
//         scale: 1.8,
//         ease: "none",
//         scrollTrigger: {
//           trigger: imageHeroRef.current,
//           start: "top top",
//           end: "bottom top",
//           scrub: true,
//         },
//       });
//     });
//     return () => ctx.revert();
//   }, []);

//   return (
//     <section style={{ marginTop: `-${navHeight}px` }}>
//       <div
//         className="z-[-10] h-[100vh] w-full overflow-hidden relative"
//         ref={imageHeroRef}
//       >
//         <Image
//           src="/imgs/portrait.jpg"
//           alt="portrait"
//           fill
//           ref={imageRef}
//           loading="eager"
//           className="object-cover object-[33%_0%]"
//         />
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ImageHero() {
  const [navHeight, setNavHeight] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const imageHeroRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Get navbar height
  useEffect(() => {
    const nav = document.getElementById("navbar");
    setNavHeight(nav?.offsetHeight ?? 0);
  }, []);

  // Animate entrance once image is loaded
  useEffect(() => {
    if (!loaded || !imageContainerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageContainerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.2, ease: "power3.out" }
      );
    });

    return () => ctx.revert();
  }, [loaded]);

  // Scroll scale effect
  useEffect(() => {
    if (!imageHeroRef.current || !imageContainerRef.current) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.to(imageContainerRef.current, {
        scale: 1.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageHeroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [loaded]);

  return (
    <section style={{ marginTop: `-${navHeight}px` }}>
      <div
        ref={imageHeroRef}
        className="relative z-[-10] h-[100vh] w-full overflow-hidden"
      >
        <div ref={imageContainerRef} className="w-full h-full relative opacity-0">
          <Image
            src="/imgs/portrait.jpg"
            alt="portrait"
            fill
            className="object-cover object-[33%_0%]"
            loading="eager"
            onLoadingComplete={() => setLoaded(true)}
          />
        </div>
      </div>
    </section>
  );
}