"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface WorkHeroProps {
  name: string,
  subtitle: string,
  coverImg: string,
}

export default function WorkHero({ name, subtitle, coverImg }: WorkHeroProps) {
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
  
    return (
      <>
        <section className="px-10 md:px-15 lg:px-20">
          <div
            style={{ minHeight: minH }}
            className="flex flex-col justify-center"
          >
            <h1 className="font-telugu text-8xl">{name}</h1>
            <p className="font-montserrat text-xl leading-[200%] mt-[20px]">
              {subtitle}
            </p>
          </div>
          <div className="relative w-auto h-[700px] mb-[80px]">
            <Image
              src={coverImg}
              alt={name}
              fill
              className="object-cover"
            ></Image>
          </div>
        </section>
      </>
    );
  }
  