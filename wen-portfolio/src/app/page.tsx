"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Import components
import Image from "next/image";
import Hero from "../components/textHero";
import { Button } from "../components/button";
import ProjectPreviewCard from "../components/projectPreview";
import projectData from "../data/projectsOverview";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");
    if (!cards.length) return;

    const timelines = Array.from(cards).map((card, i) => {
      const image = card.querySelector(".card-image");
      const content = card.querySelector(".card-content");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "start 80%",
          end: "bottom 50%",
          toggleActions: "play none play reverse",
        },
      });

      const imageFromX = i % 2 === 0 ? -120 : 120;
      const contentFromX = i % 2 === 0 ? 120 : -120;

      tl.from(
        image,
        {
          x: imageFromX,
          opacity: 0,
          duration: 0.9,
          ease: "power2.out",
        },
        0
      )
        .from(
          content,
          {
            x: contentFromX,
            opacity: 0,
            duration: 0.9,
            ease: "power2.out",
          },
          0.12
        );

      return tl;
    });

    ScrollTrigger.refresh();

    return () => {
      timelines.forEach((t) => t.kill());
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="px-2 md:px-30">
      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <section id="about-me" className="px-8 my-20 md:my-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-telugu text-foreground text-3xl font-bold mb-10">
              Passionate designer with expertise in user-centred design
            </h2>
            <p className="font-montserrat text-foreground text-md leading-[200%] mb-10">
              I’m a problem solver who loves addressing users’ pain points and
              turning them into meaningful solutions. During the design process,
              I continuously ask “why” and validate decisions through user
              testing to ensure the best possible experience.
            </p>
            <Button variant="borderedIcon" colour="cta" icon="link">
              read more about me
            </Button>
          </div>
          <div className="hidden md:columns-3xs md:block">
            <div className="aspect-3/2 relative overflow-hidden mb-4">
              <Image
                src="/imgs/zenzzz.png"
                alt="ZenZzz UIUX Project"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-square relative overflow-hidden mb-4">
              <Image
                src="/imgs/chilling-coffee.jpg"
                alt="Chilling Coffee Logo Design Project"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-square relative overflow-hidden mb-4">
              <Image
                src="/imgs/tnvr.jpg"
                alt="TNVR Logo Design Project"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-3/2 relative overflow-hidden mb-4">
              <Image
                src="/imgs/sereno.png"
                alt="Sereno Web Design Project"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto md:hidden">
            <div className="aspect-3/2 relative overflow-hidden flex-shrink-0 w-64">
              <Image
                src="/imgs/zenzzz.png"
                alt="ZenZzz UIUX Project"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-square relative overflow-hidden flex-shrink-0 w-64">
              <Image
                src="/imgs/chilling-coffee.jpg"
                alt="Chilling Coffee Logo Design Project"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-square relative overflow-hidden flex-shrink-0 w-64">
              <Image
                src="/imgs/tnvr.jpg"
                alt="TNVR Logo Design Project"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-3/2 relative overflow-hidden flex-shrink-0 w-64">
              <Image
                src="/imgs/sereno.png"
                alt="Sereno Web Design Project"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Overview Section */}
      <section id="projects-overview" className="px-8 my-20 lg:px-30 md:my-40">
        <h2 className="font-telugu text-foreground text-3xl font-bold mb-10">
          Showcasing Design & Development in Action
          <br />
          “Exploring design through real-world applications.”
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:items-end">
          <div className="col-span-2">
            <p className="font-montserrat text-foreground text-md leading-[200%]">
              In today’s fast-paced digital world, I continuously learn, adapt,
              and apply new skills across a variety of projects. From UI/UX
              design and full-stack web development to WordPress, graphic
              design, and marketing materials, these featured works highlight my
              versatility. Each project reflects not only my technical expertise
              but also my passion for solving problems through thoughtful
              design.
            </p>
          </div>
          <div className="flex justify-start smd:justify-end">
            <Button variant="borderedIcon" colour="cta" icon="link">
              see more projects
            </Button>
          </div>
        </div>
        {projectData.map((item, index) => (
          <ProjectPreviewCard key={index} data={item} index={index} />
        ))}
      </section>
    </div>
  );
}
