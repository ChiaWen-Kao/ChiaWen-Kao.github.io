"use client";

import { useState } from "react";

interface Slide {
  image: string;
  title: string;
  description: string;
}

interface CarouselProps {
  slides: Slide[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [index, setIndex] = useState(0);

  const slideTo = (direction: "next" | "prev") => {
    const total = slides.length;
    if (direction === "next") {
      setIndex((prev) => (prev + 1) % total);
    } else {
      setIndex((prev) => (prev - 1 + total) % total);
    }
  };

  return (
    <div className="relative w-full overflow-hidden text-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div key={i} className="flex-shrink-0 w-full">
                <img
                  src={slide.image}
                  alt={`slide-${i}`}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-start px-6 ">
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((slide, i) => (
                <div key={i} className="flex-shrink-0 w-full">
                  <h2 className="text-2xl font-bold mb-8 font-telugu">
                    {slide.title}
                  </h2>
                  <p className="text-foreground font-montserrat leading-[200%]">
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 flex gap-10 self-end align-end">
            <button
              onClick={() => slideTo("prev")}
              className="relative cursor-pointer z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#f8f7f3"
                  d="m16 8l1.43 1.393L11.85 15H24v2H11.85l5.58 5.573L16 24l-8-8l8-8z"
                />
                <path
                  fill="#f8f7f3"
                  d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4Z"
                />
              </svg>
            </button>
            <button
              onClick={() => slideTo("next")}
              className="relative cursor-pointer z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#f8f7f3"
                  d="m16 8l-1.43 1.393L20.15 15H8v2h12.15l-5.58 5.573L16 24l8-8l-8-8z"
                />
                <path
                  fill="#f8f7f3"
                  d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
