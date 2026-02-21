import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import AuthNav from "@/components/Marketing/AuthNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sleep Better",
  description: "A structured, practical program built for real parent life.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased bg-slate-950 text-white">
        {/* NAVBAR */}
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-lg font-semibold">
            Sleep Better
          </Link>

          <div className="flex items-center gap-6 text-sm">
            <Link href="#pricing" className="hover:text-white/70">
              Pricing
            </Link>

            <AuthNav />
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}