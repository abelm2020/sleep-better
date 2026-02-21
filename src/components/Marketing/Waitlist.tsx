"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const cleaned = email.trim().toLowerCase();
    if (!cleaned) {
      setStatus("error");
      setMessage("Enter your email.");
      return;
    }

    setStatus("loading");
    setMessage("");

    const { error } = await supabase.auth.signInWithOtp({
      email: cleaned,
      options: {
        emailRedirectTo: "http://localhost:3000/waitlist/confirm",
      },
    });

    if (error) {
      setStatus("error");
      setMessage("Could not send the email. Try again.");
      return;
    }

    setStatus("sent");
    setMessage("Check your email and click the link to confirm.");
  }

  return (
    <section style={{ padding: "48px 0", borderTop: "1px solid #e5e7eb" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 16px" }}>
        <h2 style={{ fontSize: 28, marginBottom: 8, color: "#111827" }}>Join the Waitlist</h2>
        <p style={{ marginBottom: 16, color: "#374151" }}>
          Enter your email. We’ll send you a confirmation link.
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            type="email"
            autoComplete="email"
            style={{
              flex: "1 1 280px",
              padding: "12px 14px",
              border: "1px solid #d1d5db",
              borderRadius: 10,
              color: "#111827",
              background: "white",
            }}
          />

          <button
            type="submit"
            disabled={status === "loading"}
            style={{
              padding: "12px 16px",
              borderRadius: 10,
              border: "1px solid #111827",
              background: "#111827",
              color: "white",
              cursor: status === "loading" ? "not-allowed" : "pointer",
            }}
          >
            {status === "loading" ? "Sending..." : "Send link"}
          </button>
        </form>

        {message ? (
          <p style={{ marginTop: 10, color: status === "sent" ? "#065f46" : "#991b1b" }}>
            {message}
          </p>
        ) : null}
      </div>
    </section>
  );
}