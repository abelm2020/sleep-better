"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function WaitlistConfirmPage() {
  const [msg, setMsg] = useState("Verifying…");

  useEffect(() => {
    (async () => {
      // Supabase will read the magic link tokens from the URL automatically
      const { data: userData, error: userErr } = await supabase.auth.getUser();

      if (userErr || !userData.user?.email) {
        setMsg("Verification failed. Please try again from the waitlist form.");
        return;
      }

      const email = userData.user.email.toLowerCase();
      const userId = userData.user.id;

      const { error } = await supabase
        .from("waitlist")
        .insert([{ email, user_id: userId }]);

      if (!error) {
        setMsg("You’re confirmed and on the waitlist ✅");
        return;
      }

      // Duplicate email (unique index) usually returns 23505
      const anyErr = error as any;
      if (anyErr?.code === "23505") {
        setMsg("You were already on the waitlist ✅");
        return;
      }

      setMsg("Could not add you to the waitlist. Please try again.");
    })();
  }, []);

  return (
    <main style={{ maxWidth: 720, margin: "40px auto", padding: "0 16px", color: "#111827" }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>Waitlist Confirmation</h1>
      <p style={{ color: "#374151" }}>{msg}</p>
    </main>
  );
}