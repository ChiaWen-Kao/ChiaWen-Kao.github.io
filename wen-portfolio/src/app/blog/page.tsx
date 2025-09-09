"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import ImageHero from "../../components/imageHero";
import { Button } from "../../components/button";
import { Tag } from "../../components/tag";
import aboutData from "../../data/about";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const headingRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const titleRefs = useRef<HTMLDivElement[]>([]);
  const quotationImgRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  // Heading & paragraph scroll animation
  useEffect(() => {
    if (!headingRef.current || !paragraphRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.to(headingRef.current, {
        filter: "blur(20px)",
        x: () => -window.innerWidth * 0.4,
        opacity: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 50%",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(paragraphRef.current, {
        filter: "blur(20px)",
        x: () => window.innerWidth * 0.4,
        opacity: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 50%",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  // Pin section titles
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      titleRefs.current.forEach((title, i) => {
        if (!title || !sectionRefs.current[i]) return;
        ScrollTrigger.create({
          trigger: sectionRefs.current[i],
          start: "top top",
          end: "bottom top",
          pin: title,
          pinSpacing: false,
          scrub: true,
        });
        gsap.set(sectionRefs.current[i], { marginBottom: 100 });
      });
    });

    return () => ctx.revert();
  }, []);

  // Image swing animation
  useEffect(() => {
    if (!quotationImgRef.current || !quoteRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: quotationImgRef.current,
            start: "top top",
            end: "bottom+=200 top",
            scrub: true,
            pin: true,
          },
        })
        .fromTo(
          quotationImgRef.current,
          { scale: 1 },
          { scale: 0.5, transformOrigin: "center top", ease: "power2.out" }
        )
        .fromTo(
          quoteRef.current,
          { scale: 1 },
          { scale: 0.5, transformOrigin: "center top", ease: "power2.out" }
        );
      gsap.to(quotationImgRef.current, {
        rotation: 5,
        duration: 1.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        transformOrigin: "50% 100%",
      });
    });

    return () => ctx.revert();
  });

  // Sections data
  const sections = [
    {
      title: "Something about me",
      content: (
        <>
          <p className="font-montserrat text-md leading-[200%]">
            UI/UX Designer and Full-Stack Web Developer with a strong foundation
            in user-centred design and frontend/backend development. Experienced
            in delivering responsive web applications using React, Django,
            Figma, and SQL-based database. Passionate about creating intuitive,
            accessible digital product that improve people’s lives. Known for
            being a fast learner with the ability to quickly adapt to new tools
            and technologies as project needs evolve.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-20 gap-10 md:gap-0 text-center">
            {aboutData.overview.map((item, index) => (
              <div
                key={index}
                className="md:border-r-1 md:border-caption/50 last:border-0"
              >
                <p className="font-telugu text-8xl text-cta font-bold">
                  {item.value}+
                </p>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 flex justify-center">
            <Button variant="filled" colour="cta">
              Download CV
            </Button>
          </div>
        </>
      ),
    },
    {
      title: "Work Experience",
      content: (
        <>
          {aboutData.workExperience.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5 font-montserrat text-md text-foreground mb-20"
            >
              <div className="col-span-2">
                <h4 className="text-lg font-bold mb-4">
                  {item.roles}
                  {item.company && ` @ ${item.company}`}
                </h4>
                <div className="flex gap-2 my-2">
                  <Tag variant="bordered" colour="foreground" icon="">
                    {item.type}
                  </Tag>
                  <Tag variant="bordered" colour="foreground" icon="location">
                    {item.location}
                  </Tag>
                </div>
              </div>
              <div className="text-caption text-right">{item.date}</div>
            </div>
          ))}
        </>
      ),
    },
    {
      title: "Education",
      content: (
        <>
          {aboutData.education.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5 font-montserrat text-md text-foreground mb-20"
            >
              <div className="col-span-2">
                <h4 className="text-lg font-bold mb-4">
                  {item.degree}
                  {item.institution && ` @ ${item.institution}`}
                </h4>
                <div className="flex gap-2 my-2">
                  <Tag variant="bordered" colour="foreground" icon="location">
                    {item.location}
                  </Tag>
                </div>
              </div>
              <div className="text-caption text-right">{item.date}</div>
            </div>
          ))}
        </>
      ),
    },
    {
      title: "Skills",
      content: (
        <>
          {aboutData.skills.map((group, i) => (
            <div key={i} className="mb-10">
              <h2 className="text-2xl font-bold mb-6">{group.category}</h2>
              {group.subcategories.map((sub, j) => (
                <div key={j} className="mb-4">
                  <p className="text-md">
                    {sub.label}:{" "}
                    {sub.items.map((item, k) => (
                      <span key={k}>
                        {item}
                        {k < sub.items.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </>
      ),
    },
  ];

  return (
    <div>
      <ImageHero />

      {/* Page heading */}
      <div className="mt-[-30vh] md:mt-[-250px] z-10 relative px-10 md:px-30">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div
            className="font-telugu font-bold text-5xl md:text-8xl uppercase animate-heading"
            ref={headingRef}
          >
            <h2>
              About
              <br />
              Me.
            </h2>
          </div>
          <div
            className="leading-[200%] md:text-right flex justify-end items-start"
            ref={paragraphRef}
          >
            <h3 className="font-telugu text-foreground font-bold text-xl md:text-3xl capitalize">
              I design experiences <br />
              that delight users
            </h3>
          </div>
        </div>
      </div>

      {/* Full-page pinned sections */}
      <div className="mt-[15vh] px-2 md:px-30">
        {sections.map((section, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-3 relative py-30"
            ref={(el) => {
              sectionRefs.current[i] = el!;
            }}
          >
            <div
              className="flex items-start relative z-20"
              ref={(el) => {
                titleRefs.current[i] = el!;
              }}
            >
              <h3 className="font-telugu font-bold text-2xl leading-[200%]">
                {section.title}
              </h3>
            </div>
            <div className="relative col-span-2">{section.content}</div>
          </div>
        ))}

        {/* Quotation section */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 px-2 md:px-60 relative"> */}
          <div className="relative w-full h-[500px] z-10" ref={quotationImgRef}>
            <Image
              src={aboutData.quotation.image}
              className="object-cover"
              fill
              alt="Quotation Image"
            />
            <div
              className="relative z-20 md:-mr-30 flex items-center"
              ref={quoteRef}
            >
              <h3 className="font-telugu text-2xl leading-[200%]">
                &quot; {aboutData.quotation.text} &quot;
              </h3>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
}
