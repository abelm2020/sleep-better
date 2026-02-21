"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const supabase = createClient();
  const router = useRouter();

  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (mode === "signup") {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;

  // If email confirmation is enabled, there won't be a session yet.
  if (!data.session) {
    setError("Check your email to confirm your account, then sign in.");
    return;
  }
} else {
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
}

router.push("/dashboard");
router.refresh();
    } catch (err: any) {
      setError(err?.message ?? "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-md px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">
        {mode === "login" ? "Sign in" : "Create account"}
      </h1>
      <p className="mt-2 text-slate-600">
        {mode === "login"
          ? "Welcome back. Let’s get you into your dashboard."
          : "Start the program and track your progress."}
      </p>

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            className="mt-1 w-full rounded-xl border px-3 py-2"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Password</label>
          <input
            className="mt-1 w-full rounded-xl border px-3 py-2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete={mode === "login" ? "current-password" : "new-password"}
          />
        </div>

        {error && (
          <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </p>
        )}

        <button
          className="w-full rounded-xl bg-black px-4 py-2 text-white disabled:opacity-60"
          disabled={loading}
          type="submit"
        >
          {loading ? "Please wait..." : mode === "login" ? "Sign in" : "Sign up"}
        </button>

        <button
          type="button"
          className="w-full rounded-xl border px-4 py-2"
          onClick={() => setMode(mode === "login" ? "signup" : "login")}
        >
            
          {mode === "login" ? "Need an account? Sign up" : "Have an account? Sign in"}
          
        </button>
      </form>
    </main>
  );
}