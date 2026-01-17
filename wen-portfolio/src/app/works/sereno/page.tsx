"use client";

import Image from "next/image";
import { Button } from "@components/button";
import { usePathname, useRouter } from "next/navigation";

export default function Sereno() {
  const coverImg = "/imgs/sereno.png";
  const router = useRouter();

  return (
    <>
      <section className="md:mx-60 mdmy-20">
        <div className="my-30">
          <h1 className="font-telugu text-5xl md:text-8xl my-8">Sereno</h1>
          <h3 className="font-montserrat text-xl md:text-2xl">
            Design for community wellbeing connection
          </h3>
        </div>
        <div className="grid grid-cols-3 gap-6 my-20">
          <div className="border rounded-lg border-caption p-8">
            <h3 className="font-montserrat text-l font-semibold mb-4">Role</h3>
            <p className="font-montserrat">UX/UI Designer</p>
            <p className="font-montserrat">Web Developer</p>
          </div>
          <div className="border rounded-lg border-caption p-8">
            <h3 className="font-montserrat text-l font-semibold mb-4">
              Toolkit
            </h3>
            <p className="font-montserrat">
              <b>Design:</b> Figma (Wireframe/Prototype)
            </p>
            <p className="font-montserrat">
              <b>Development:</b> HTML / CSS / JavaScript / Bootstrap
            </p>
          </div>
          <div className="border rounded-lg border-caption p-8">
            <h3 className="font-montserrat text-l font-semibold mb-4">
              Duration
            </h3>
            <p className="font-montserrat">2 months</p>
          </div>
        </div>
        <div className="relative w-auto h-[600px] mb-[40px] md:mb-[80px]">
          <Image
            src={coverImg}
            alt="Sereno Cover Image"
            fill
            className="object-cover"
          ></Image>
        </div>
      </section>
      <section className="mx-60 my-20">
        <h2 className="font-telugu text-3xl font-bold uppercase mb-10">
          Project Overview
        </h2>
        <p className="font-montserrat leading-relaxed mb-10">
          The fictional client is an in-person wellbeing platform designed to
          foster community connections by helping people discover local events
          and activities. The platform recommends activities based on users’
          location and personal preferences, making it easier to find
          experiences they’ll enjoy and community groups where they can connect
          with like-minded individuals. In addition, this website offers a
          curated selections of wellness-related articles.
        </p>
        <div className="flex justify-center">
          <Button variant="filled" colour="cta" onClick={() => router.push("https://chiawen-kao.github.io/serena-booking-website/")} >
            Sereno Website Demo
          </Button>
        </div>
      </section>
      <section className="mx-60 my-20">
        <h2 className="font-telugu text-3xl font-bold uppercase mb-10">
          User Needs
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="border rounded-lg border-caption p-8">
            <h3 className="font-montserrat text-l font-semibold mb-4">
              Information Accessibility
            </h3>
            <p className="font-montserrat leading-relaxed">
              Bridging the gap in the current market by making affordable and
              free local activities easily discoverable through a centralised
              platform.
            </p>
          </div>
          <div className="border rounded-lg border-caption p-8">
            <h3 className="font-montserrat text-l font-semibold mb-4">
              Community Engagement
            </h3>
            <p className="font-montserrat leading-relaxed">
              Creating a space for meaningful interaction to combat social
              isolation, encouraging users to actively participate and connect
              with their local community.
            </p>
          </div>
          <div className="border rounded-lg border-caption p-8">
            <h3 className="font-montserrat text-l font-semibold mb-4">
              Holistic Wellness
            </h3>
            <p className="font-montserrat leading-relaxed">
              Empowering users to prioritise mental health and work-life balance
              in a fast-paced world by providing access to diverse wellness
              activities.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-60 my-20">
        <h2 className="font-telugu text-3xl font-bold uppercase mb-10">
          User Story
        </h2>
        <div className="flex gap-16 items-center mb-12">
          <div className="relative w-[150px] aspect-square rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/imgs/p3/alice.png"
              alt="Sereno Cover Image"
              fill
              className="object-cover object-top"
            />
          </div>
          <div>
            <p className="font-montserrat text-lg font-bold mb-4">Alice</p>
            <p className="font-montserrat leading-relaxed">
              As an educator who is paying attention to holistic growth, I want
              to engage in different kinds of affordable social activities so
              that I can not only keep my lifestyle better but also be involved
              in communities.
            </p>
          </div>
        </div>
        <div className="flex gap-16 items-center mb-8">
          <div className="relative w-[150px] aspect-square rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/imgs/p3/jackson.png"
              alt="Sereno Cover Image"
              fill
              className="object-cover object-top"
            />
          </div>
          <div>
            <p className="font-montserrat text-lg font-bold mb-4">Jackson</p>
            <p className="font-montserrat leading-relaxed">
              As a graphic designer cares about social issues and advocate
              around theme of sustainability, mental health, and community
              engagement, I want to easily access wellness activities that is
              align with my budget and values and connect with more mind-likely
              individuals.
            </p>
          </div>
        </div>
        <div className="flex gap-16 items-center mb-8">
          <div className="relative w-[150px] aspect-square rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/imgs/p3/maya.png"
              alt="Sereno Cover Image"
              fill
              className="object-cover object-top"
            />
          </div>
          <div>
            <p className="font-montserrat text-lg font-bold mb-4">Maya</p>
            <p className="font-montserrat leading-relaxed">
              As an empathetic social worker dedicates to helping others in need
              and fostering interaction with individuals, I want to connect with
              like-minded individuals who share the same values of wellness and
              are committed to make a positive impact on society.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-60 my-20">
        <h2 className="font-telugu text-3xl font-bold uppercase mb-10">
          Key Feature
        </h2>
        <div className="relative overflow-x-auto rounded-md border-caption border-[0.5px]">
          <table className="w-full font-montserrat text-left text-body">
            <thead className="text-center bg-caption border-b rounded-lg border-caption">
              <tr className="text-primary">
                <th className="px-6 py-6">Feature</th>
                <th className="px-6 py-6">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-caption border-b-[0.25px]">
                <td className="px-6 py-6 border-caption border-r-[0.25px]">
                  Advanced Search Bar & Filters
                </td>
                <td className="px-6 py-6">
                  Features an intuitive search bar with filters for date,
                  location, and price to help users quickly discover activities
                  that fit their preference.
                </td>
              </tr>
              <tr className="border-caption border-b-[0.25px]">
                <td className="px-6 py-6 border-caption border-r-[0.25px]">
                  Theme Categories
                </td>
                <td className="px-6 py-6">
                  Organises workshops and events into themes like “Mindfulness”
                  or “Handcraft,” allowing for effortless exploration based on
                  user passions.
                </td>
              </tr>
              <tr className="border-caption border-b-[0.25px]">
                <td className="px-6 py-6 border-caption border-r-[0.25px]">
                  Today’s Nearby Activities Map
                </td>
                <td className="px-6 py-6">
                  Integrate a real-time map interface to visualise local events,
                  fostering a stronger sense of community and immediate.
                </td>
              </tr>
              <tr className="border-caption border-b-[0.25px]">
                <td className="px-6 py-6 border-caption border-r-[0.25px]">
                  Connect with Others / Group Chat
                </td>
                <td className="px-6 py-6">
                  Includes community chat groups for each activity, enabling
                  users to build social connections and reduce social anxiety
                  before attending.
                </td>
              </tr>
              <tr className="border-caption border-b-[0.25px]">
                <td className="px-6 py-6 border-caption border-r-[0.25px]">
                  Wellness Blog & News Letter
                </td>
                <td className="px-6 py-6">
                  A dedicate space for wellbeing articles and professional tips,
                  providing value beyond event booking and building brand
                  authority.
                </td>
              </tr>
              <tr className="border-caption border-b-[0.25px]">
                <td className="px-6 py-6 border-caption border-r-[0.25px]">
                  Event Calendar Selector
                </td>
                <td className="px-6 py-6">
                  Integrate a calendar feature into the activity details page,
                  allowing users to intuitively view available dates and
                  complete bookings directly, thereby simplifying the overall
                  user flow.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="mx-60 my-20">
        <h2 className="font-telugu text-3xl font-bold uppercase mb-10">
          Frontend Development
        </h2>
        <h3 className="font-montserrat text-lg font-bold mb-4">
          Responsive Design
        </h3>
        <p className="font-montserrat mb-12">
          Built with a mobile-first approach, the website utilises a responsive
          grid system to ensure full compatibility across mobile, tablet, and
          desktop versions. Every component is optimised to align with user
          behaviour and interaction patterns on different devices.
        </p>
        <h3 className="font-montserrat text-lg font-bold mb-4">
          Accessibility
        </h3>
        <p className="font-montserrat mb-12">
          This project follows <b>WCAG 2.1 guidelines</b> to create an inclusive
          experience for all users. We implemented{" "}
          <b>AAA-level colour contrast</b> for optimal clarity, conducted{" "}
          <b>colour-blindness safety checks</b> to ensure information remains
          accessible, and integrated <b>descriptive alt-text</b> to support
          screen reader tools.
        </p>
        <h3 className="font-montserrat text-lg font-bold mb-4">
          API Integration
        </h3>
        <p className="font-montserrat mb-12">
          Event data, including images, schedules, and categories, is managed
          through a centralised database, with a API enabling seamless
          <b>retrieval, creation, and modification (CRUD operations)</b>. This
          architecture ensures dynamic content delivery and keeps the website
          up-to-date in real-time.
        </p>
      </section>
      <section className="mx-60 my-20">
        <div className="relative w-[80%] h-200 mb-[40px] md:mb-[80px] justify-center mx-auto">
          <Image
            src="/imgs/p3/p3-lowfi-home.png"
            alt="Sereno Cover Image"
            fill
          ></Image>
        </div>
      </section>
      <section className="mx-60 my-20">
        <h2 className="font-telugu text-3xl font-bold uppercase mb-10">
          Outcomes
        </h2>
        <p className="font-montserrat leading-relaxed mb-10">
          This project encompasses the full design lifecycle, from <b>user testing
          and UX/UI design to frontend development and API integration</b>. The
          result is a comprehensive wellness platform that prioritises
          inclusivity by strictly adhering to <b>WCAG 2.1 guidelines</b> and
          implementing a <b>responsive layout</b>. These combined approaches have
          successfully created a user-friendly, intuitive interface that
          significantly <b>simplifies the event discovery and booking process</b>.
        </p>
      </section>
    </>
  );
}
