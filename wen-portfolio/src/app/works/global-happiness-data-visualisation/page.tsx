"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Carousel from "../../../components/carousel";
import { Button } from "@components/button";

export default function GlobalHappinessReportDataVisualisation() {
  const coverImg = "/imgs/p7/Poster_3.png";
  const slides = [
    {
      image: "/imgs/p7/part1.png",
      title: "Top 30 happiest countries map in 2023",
      description:
        "It was found that the audience could not clearly identify each country on the map. Therefore, a map was selected to visualise the top 30 happiest countries. Colour coding was used to distinguish different regions, while emojis and their sizes were used to represent the scale of the happiness score.",
    },
    {
      image: "/imgs/p7/part2.png",
      title:
        "Comparison of happiness factors between two continents - Europe and Africa",
      description:
        "Since the previous infographic used a map format, the data was primarily categorised by continent. To further explore the differences between the highest and lowest happiness regions, Europe and Africa were selected for detailed analysis across seven factors. A box plot was used to show the mean scores and the distribution of the data, providing deeper insights into why each continent has a higher or lower happiness score.",
    },
    {
      image: "/imgs/p7/part3.png",
      title:
        "Dive close into the happiest country - Finland, where it stays top 1 for 7 years",
      description:
        "To further explore whether the pandemic has affected the happiness score, happiness score and its 7 factors are compared from 2018 to 2024 because the pandemic is considered to have relationship bwtween factors. Therefore, I chose line stack chart to observe its line trend.",
    },
    {
      image: "/imgs/p7/part4.png",
      title: "The relationship between unemployment rate and happiness score",
      description:
        "To validate the relationship between unemployment rate and happiness score, a scatter plot was used to show the correlation between these two variables. Also, the trend line was also an indicator to show the negative correlation between them.",
    },
  ];
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
      <section className="px-10 md:px-30">
        <div
          style={{ minHeight: minH }}
          className="flex flex-col justify-center"
        >
          <h1 className="font-telugu text-6xl md:text-8xl">
            Global Happiness Report
          </h1>
          <p className="font-montserrat text-md md:text-xl leading-[200%] mt-[20px]">
            Data Analysis and Data Visualisation • 2024
          </p>
        </div>
        <div className="relative w-auto h-[700px] mb-[40px] md:mb-[80px]">
          <Image
            src={coverImg}
            alt="Global Happiness Report"
            fill
            className="object-cover"
          ></Image>
        </div>
      </section>
      <section className="px-10 md:px-30">
        <h2 className="text-2xl font-bold mb-8 font-telugu">
          Project Overview
        </h2>
        <p className="font-montserrat text-md leading-[200%] mb-[80px] md:mb-[160px]">
          This project is a data visualisation piece that analyses the 2023
          Global Happiness Report dataset using Flourish and Adobe Illustrator
          for layout design. The dataset covers data from 2020 to 2023, a period
          that overlaps with the COVID-19 pandemic. This significant global
          event has been taken into account in the report. Therefore, the
          infographic highlights how the pandemic impacted happiness scores from
          various perspectives.
        </p>
        <h2 className="text-2xl font-bold mb-8 font-telugu">Key Features</h2>
        <div className="mb-[80px]">
          <Carousel slides={slides} />
        </div>
        <div className="mb-[80px]">
          <p className="font-montserrat leading-[200%]"></p>
        </div>
        <div className="mb-[80px]">
          <h2 className="text-2xl font-bold mb-8 font-telugu">
            Design & Development Flow
          </h2>
          <ol className="font-montserrat leading-[200%] list-decimal list-outside ml-6">
            <li>
              Defined interested topic and research on the thesis and datasets.
            </li>
            <li>
              Conduct data understanding on attributes and data preparation to
              unify the data format and remove null and invalidate data.
            </li>
            <li>
              Design the narrative structure and choose suitable visualisation
              types to present the data insights.
            </li>
            <li>
              Created visualisation using Flourish and export the graphics for
              layout design on Adobe Illustrator.
            </li>
          </ol>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] md:gap-40 mb-[80px]">
          <div>
            <h2 className="text-2xl font-bold mb-8 font-telugu">My Role</h2>
            <p className="font-montserrat leading-[200%]">
              This was an individual project where I acted as a data analyst and graphic designer.
            </p>
          </div>
          <div className="">
            <h2 className="text-2xl font-bold mb-8 font-telugu">Skills</h2>
            <ul className="font-montserrat leading-[200%] list-disc list-inside">
              <li>
                Data Analysis: Microsoft Excel, Flourish
              </li>
              <li>Graphic Design: Adobe Illustrator</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex justify-center mb-20">
          <a href="/files/global-happiness-report-poster.pdf" target="_blank">
              <Button variant="filled" colour="cta">
                See Poster
              </Button>
            </a>
        </div>
      </section>
    </>
  );
}
