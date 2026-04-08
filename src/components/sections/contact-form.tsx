"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      setStatus("success");
      setForm({ from_name: "", from_email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-2 text-center px-8">
        <p className="text-lg font-medium">Message sent!</p>
        <p className="text-sm text-muted-foreground">
          Thanks for reaching out. I'll get back to you soon.
        </p>
        <Button variant="ghost" size="sm" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-full h-full flex flex-col items-start justify-start gap-4">
      <h1 className="text-2xl mb-4">Contact me!</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 h-full justify-center w-full"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="from_name">Name</Label>
            <Input
              id="from_name"
              name="from_name"
              value={form.from_name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="from_email">Email</Label>
            <Input
              id="from_email"
              name="from_email"
              type="email"
              value={form.from_email}
              onChange={handleChange}
              placeholder="you@email.com"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="e.g. Project proposal"
            required
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            required
            className="resize-none h-32"
          />
        </div>
        {status === "error" && (
          <p className="text-sm text-destructive">
            Something went wrong. Please try again.
          </p>
        )}
        <Button type="submit" disabled={status === "loading"} className="cursor-pointer hover:underline w-full">
          {status === "loading" ? "Sending..." : "Send message"}
        </Button>
      </form>
    </div>
  );
}