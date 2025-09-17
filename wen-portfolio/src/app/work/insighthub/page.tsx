"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import gsap from "gsap";
import Carousel from "../../../components/carousel";

export default function ZenZzz() {
  const coverImg = "/imgs/p2/insighthub-mockup.png";
  const slides = [
    {
      image: "/imgs/p2/insighthub-mockup.png",
      title: "Onboard",
      description:
        "Users can securely sign up and log in using Django’s built-in authentication and security features, ensuring safe access and data protection.",
    },
    {
      image: "/imgs/tnvr.jpg",
      title: "Data Upload",
      description:
        "Users can upload CSV files, which are then converted into interactive graphs and visualisations.",
    },
    {
      image: "/imgs/p2/insighthub-mockup.png",
      title: "Data Visualisation Dashboard",
      description:
        "Transforms raw data into compelling visual stories, including multiple chart types and customisable X- and Y-axis selections.",
    },
    {
      image: "/imgs/p2/insighthub-mockup.png",
      title: "QR Code Generation",
      description:
        "Dashboards can be shared as public or private via QR codes.",
    },
    {
      image: "/imgs/p2/insighthub-mockup.png",
      title: "Social Features",
      description:
        "Public dashboards can be viewed by other users, who can leave likes and comments to enhance interaction.",
    },
    {
      image: "/imgs/p2/insighthub-mockup.png",
      title: "Admin Panel",
      description: "Administrators can manage user subscriptions.",
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
          <h1 className="font-telugu text-8xl">InsightHub</h1>
          <p className="font-montserrat text-xl leading-[200%] mt-[20px]">
            SaaS Data Visualisation Website • 2025
          </p>
        </div>
        <div className="relative w-auto h-[500px] mb-[80px]">
          <Image
            src={coverImg}
            alt="InsightHub"
            fill
            className="object-cover"
          ></Image>
        </div>
      </section>
      <section className="px-10 md:px-30">
        <p className="font-montserrat text-md leading-[200%] mb-[160px]">
          This platform streamlines the analysis process by generating charts
          through a straightforward user interface. Users simply upload a CSV
          file, select the relevant data columns, and the system automatically
          creates visualisations. Dashboards can also be easily shared with
          others, supporting collaborative insights and data-driven
          decision-making
        </p>
        <h2 className="font-telugu text-2xl uppercase">Key Features</h2>
        <div>
          <Carousel slides={slides} />
        </div>
        <div className="mt-20">
          <p className="font-montserrat leading-[200%]">
            The platform is being developed as a web-based application using
            Django, an MVC backend framework that ensures scalability and
            maintainability. MySQL is implemented as the relational database
            system to provide efficient and secure data management. The project
            also incorporates CRUD functionality to manage user and data
            operations effectively. A key focus of the design is accessibility.
            The platform features a responsive interface that adapts across
            devices, ensuring a seamless user experience and intuitive
            navigation for a diverse range of users.
          </p>
          <h2 className="text-2xl font-bold mb-8 font-telugu mt-50">
            Design & Development Flow
          </h2>
          <ol className="font-montserrat leading-[200%] list-decimal list-outside ml-6">
            <li>
              <b>Defined project scope and key features.</b>
            </li>
            <li>
              <b>Conducted technology research and framework evaluation:</b>{" "}
              Based on the defined features, I conducted a series of technology
              research to check if the library that exist on the market can be
              integrated into the website to shorten the development period.
            </li>
            <li>
              <b>Designed wireframes and interactive flows:</b> This website is
              built with Built frontend UI with HTML, CSS (Bootstrap), and
              JavaScript
            </li>
            <li>
              <b>Designed wireframes and interactive flows:</b> This website is
              built with Built frontend UI with HTML, CSS (Bootstrap), and
              JavaScript
            </li>
            <li>
              <b>
                Established PostgreSQL database Developed backend
                functionalities using Django
              </b>
            </li>
          </ol>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-40 mt-50 mb-50">
          <div>
            <h2 className="text-2xl font-bold mb-8 font-telugu">
              My Role
            </h2>
            <p className="font-montserrat leading-[200%]">
              This was an individual project where I acted as a full-stack
              developer. My responsibilities includes database design with
              MySQL, UI/UX design and both frontend and backend development
              using Django.
            </p>
          </div>
          <div className="">
            <h2 className="text-2xl font-bold mb-8 font-telugu">Skills</h2>
            <ul className="font-montserrat leading-[200%] list-disc list-inside">
              <li>
                Hosting: UQ Cloud Frontend: HTML, CSS (Bootstrap), JavaScript
              </li>
              <li>Backend: Python (Django)</li>
              <li>Database: PostgreSQL</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
