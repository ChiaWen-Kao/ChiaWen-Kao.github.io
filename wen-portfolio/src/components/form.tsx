"use client";

import { useState } from "react";

// Import Components
import { Button } from "../components/button";

interface ContactFormProps {
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = { name, email, message };

    if (onSubmit) {
      await onSubmit(formData);
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full p-14 bg-foreground/20 rounded-lg flex flex-col gap-6 font-montserrat text-foreground "
    >
      <h2 className="font-telugu text-3xl font-bold mb-4 capitalize">
        Let&apos;s work together !
      </h2>

      <label className="flex flex-col ">
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
          className="mt-1 p-2 border border-foreground rounded focus:outline-none focus:ring-1 focus:ring-foreground"
        />
      </label>

      <label className="flex flex-col ">
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
          className="mt-1 p-2 border border-foreground rounded focus:outline-none focus:ring-1 focus:ring-foreground"
        />
      </label>

      <label className="flex flex-col">
        Message
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          required
          rows={5}
          className="mt-1 p-2 border border-foreground rounded focus:outline-none focus:ring-1 focus:ring-foreground resize-none"
        />
      </label>
      <div className="flex justify-center mt-1">
        <Button variant="filled" colour="cta" disabled={loading} type="submit">
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </div>
      {success && (
        <p className="text-green-600 text-center mt-2">
          Message sent successfully!
        </p>
      )}
    </form>
  );
}
