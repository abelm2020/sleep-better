"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMsg("");

    const { error } = await supabase.from("contact_messages").insert([
      { name: name.trim() || null, email: email.trim().toLowerCase(), message: message.trim() },
    ]);

    if (error) {
      setStatus("error");
      setMsg(error.message);
      return;
    }

    setStatus("success");
    setMsg("Message sent. We’ll get back to you soon.");
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section id="contact" className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-2 text-slate-700">Questions? Send a message.</p>

        <form onSubmit={submit} className="mt-6 grid gap-3 max-w-xl">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name (optional)"
            className="rounded-xl border px-4 py-3 outline-none"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="rounded-xl border px-4 py-3 outline-none"
          />
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            rows={5}
            className="rounded-xl border px-4 py-3 outline-none"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-xl border px-5 py-3 font-medium justify-self-start"
          >
            {status === "loading" ? "Sending..." : "Send message"}
          </button>

          {msg && (
            <p className="text-sm">
              {status === "success" ? (
                <span className="text-green-700">{msg}</span>
              ) : (
                <span className="text-red-700">{msg}</span>
              )}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
