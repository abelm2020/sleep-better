import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "@/components/Marketing/LogoutButton";

export default async function AuthNav() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  const user = data.user;

  if (!user) {
    return (
      <Link
        href="/login"
        className="rounded-full bg-white px-4 py-2 text-slate-900 font-medium hover:bg-white/90"
      >
        Sign in
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Link href="/dashboard" className="hover:text-white/70">
        Dashboard
      </Link>
      <LogoutButton />
    </div>
  );
}