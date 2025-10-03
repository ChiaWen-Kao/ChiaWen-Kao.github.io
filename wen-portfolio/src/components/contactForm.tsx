/**
 * Component: Contact Form
 *
 * A contact form component that allows users to send message via EmailJS.
 * It supports success and failure callbacks to notify the parent component.
 *
 * Features:
 * - Name, Email, and message input field, and uses EmailJS to send data.
 * - Submission state hadling (disables the button and shows "Submitting..." text).
 *
 * @param {function} onSuccess: Optional callback invoked when the email is sent successfully. 
 * @param {onFail} onFail: Optional callback invoked if the email sending fails. 

 * @example
 * ```
 * <ContactForm
 *   onSuccess={() => console.log("success")}
 *   onFail={() => console.log("fail")}
 * />
 * ```
 */

"use client";

import React, { useState, useRef } from "react";
import { Button } from "../components/button";
import emailjs from "@emailjs/browser";

interface ContactFormProps {
  onSuccess?: () => void;
  onFail?: () => void;
}

export default function ContactForm({ onSuccess, onFail }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);

    emailjs
      .sendForm("service_58jw4eg", "template_bnrw55e", formRef.current, {
        publicKey: "Rz_94QeD5NhAOHWmC",
      })
      .then(
        () => {
          onSuccess?.();
          formRef.current?.reset();
        },
        () => {
          onFail?.();
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <form
      onSubmit={sendEmail}
      className="flex flex-col p-8 md:p-14 rounded-lg bg-foreground/20 gap-8 font-montserrat text-foreground"
      ref={formRef}
    >
      <h2 className="font-telugu text-lg md:text-3xl font-bold capitalize">
        Let&apos;s work together !
      </h2>
      <label className="flex flex-col">
        Name
        <input
          type="text"
          name="user_name"
          placeholder="Your name"
          required
          className="mt-1 p-2 rounded border border-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
        />
      </label>
      <label className="flex flex-col">
        Email
        <input
          type="email"
          name="user_email"
          placeholder="Your email"
          required
          className="mt-1 p-2 rounded border border-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
        />
      </label>
      <label className="flex flex-col">
        Message
        <textarea
          name="message"
          placeholder="Your message"
          required
          rows={5}
          className="mt-1 p-2 rounded border border-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
        />
      </label>
      <div className="flex justify-center">
        <Button
          variant="filled"
          colour={isSubmitting ? "disable" : "cta"}
          type="submit"
          className={isSubmitting ? "cursor-progress" : "cursor-pointer"}
        >
          {isSubmitting ? "Submitting..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
