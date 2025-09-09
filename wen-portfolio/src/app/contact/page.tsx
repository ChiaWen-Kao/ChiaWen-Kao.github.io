"use client";

import { useEffect, useState } from "react";
// Import components
import Form from "../../components/form";

export default function ContactPage() {
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
    <div
      style={{ minHeight: minH }}
      className="flex flex-col w-screen justify-center px-10 md:px-30"
    >
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col justify-center font-montserrat text-foreground text-md">
          <h2 className="font-telugu text-8xl uppercase">Hello.</h2>
          <p className="mt-10">
            Are you looking for a designer and web developer who combines
            creativity and code to turn your ideas into reality? Get in touch.
          </p>
          <p className="mt-10">
            Email:{" "}
            <a href="mailto:chiawenkao23@gmail.com" target="_blank" className="underline">
              chiawenkao23@gmail.com
            </a>
          </p>
          <p className="mt-2">
            On the internet:{" "}
            <a href="https://linkedin.com/in/chiawen-kao" target="_blank" className="underline">
              Linkedin
            </a>{" "}
            |{" "}
            <a href="https://github.com/ChiaWen-Kao" target="_blank" className="underline">
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
