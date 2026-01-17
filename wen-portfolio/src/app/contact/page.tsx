/**
 * Page: Contact
 *
 * This page provides users with contact information and a form to send enquiry emails.
 * It also includes animations (via GSAP) for the heading and success alert.
 *
 * Features:
 * - Contact form powered by EmailJS for sending enquiries.
 * - Display of contact details (email, Linkedin, GitHub).
 * - Success/Error alert confirmning the result of email sending.
 *
 * @returns {JSX.Element}: The Contact page layout.
 */

"use client";

import { useState, useRef, useEffect } from "react";
import useViewpointMinHeight from "utils/useViewpointMinHeight";
import ContactForm from "components/contactForm";
import Alert from "components/alert";
import { fadeInUp } from "utils/gsapAnimation";

export default function Contact() {
  const minHeight = useViewpointMinHeight();
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertStatus, setAlertStatus] = useState<"Success" | "Fail">("Success");

  const showAlert = (status: "Success" | "Fail") => {
    setAlertStatus(status);
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 10000);
  };

  const contentSectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    fadeInUp(contentSectionRef);
  }, [contentSectionRef]);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-20 px-6 md:px-30 opacity-0"
      ref={contentSectionRef}
    >
      <section
        className="flex flex-col justify-center `md:${min-h-[minHeight]}`"
        // style={{ minHeight: window.innerWidth >= 768 ? minHeight : "500px" }}
      >
        <h2 className="font-title">Hello.</h2>
        <p className="font-body mt-10">
          Are you looking for a designer and web developer who combines
          creativity and code to turn your ideas into reality? Get in touch.
        </p>
        <p className="font-body mt-10">
          Email:{" "}
          <a
            href="mailto:chiawenkao23@gmail.com"
            target="_blank"
            className="underline"
          >
            chiawenkao23@gmail.com
          </a>
        </p>
        <p className="font-body mt-2">
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
      </section>
      <section className="flex flex-col justify-center">
        <ContactForm
          onSuccess={() => showAlert("Success")}
          onFail={() => showAlert("Fail")}
        />
      </section>
      {alertVisible && (
        <Alert
          status={alertStatus}
          message={
            alertStatus === "Success"
              ? "Your message has been sent. I will reply to you as soon as possible."
              : "Failed to send your message. Please try again later or send me an email."
          }
          visible={alertVisible}
          onClose={() => setAlertVisible(false)}
        />
      )}
    </div>
  );
}