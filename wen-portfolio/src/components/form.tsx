"use client";

import React, { useState, useRef } from "react";
import { Button } from "../components/button";
import emailjs from "@emailjs/browser";

interface ContactFormProps {
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
  onSuccess?: () => void;
}

export default function ContactForm({ onSubmit, onSuccess }: ContactFormProps) {
  const form = useRef<HTMLFormElement | null>(null);
  const [alertVisible, setAlertVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setIsSubmitting(true);

    emailjs
      .sendForm("service_58jw4eg", "template_bnrw55e", form.current, {
        publicKey: "Rz_94QeD5NhAOHWmC",
      })
      .then(
        () => {
          console.log("success");
          onSuccess?.();
          setAlertVisible(true);
          form.current?.reset();
          setIsSubmitting(false);
        },
        (error) => {
          alert("Failed to send message!");
          console.log("Failed...", error.text);
        }
      );
  };

  return (
    <div className="relative">
      {/* Form */}
      <form
        onSubmit={sendEmail}
        className="w-full p-8 md:p-14 bg-foreground/20 rounded-lg flex flex-col gap-6 font-montserrat text-foreground"
        ref={form}
      >
        <h2 className="font-telugu text-3xl font-bold mb-4 capitalize">
          Let&apos;s work together !
        </h2>

        <label className="flex flex-col ">
          Name
          <input
            type="text"
            name="user_name"
            placeholder="Your name"
            required
            className="mt-1 p-2 border border-foreground rounded focus:outline-none focus:ring-1 focus:ring-foreground"
          />
        </label>

        <label className="flex flex-col ">
          Email
          <input
            type="email"
            name="user_email"
            placeholder="Your email"
            required
            className="mt-1 p-2 border border-foreground rounded focus:outline-none focus:ring-1 focus:ring-foreground"
          />
        </label>

        <label className="flex flex-col">
          Message
          <textarea
            name="message"
            placeholder="Your message"
            required
            rows={5}
            className="mt-1 p-2 border border-foreground rounded focus:outline-none focus:ring-1 focus:ring-foreground resize-none"
          />
        </label>
        <div className="flex justify-center mt-1">
          <Button variant="filled" colour={isSubmitting ? "disable" : "cta"} type="submit" className={isSubmitting ? "cursor-progress" : "cursor-pointer"}>
            {isSubmitting ? "Submitting..." : "Send Message"}
          </Button>
        </div>
      </form>
    </div>
  );
}
