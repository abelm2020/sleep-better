import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 opacity-60 [background:radial-gradient(80%_60%_at_50%_20%,rgba(255,255,255,0.20),transparent_60%)]" />
      <div className="absolute inset-0 opacity-60 [background:radial-gradient(60%_50%_at_50%_55%,rgba(59,130,246,0.22),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 text-center">
        {/* Small pill */}
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Built for tired parents
        </div>

        {/* Headline */}
        <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">
          Sleep better.
          <span className="block text-white/45">Without perfect routines.</span>
        </h1>

        {/* Subhead */}
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/70">
          A calm, structured program with short lessons and one daily action step—designed for real family life.
        </p>

        {/* Buttons (Apple-like) */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#pricing"
            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm shadow-blue-600/20 hover:bg-blue-500"
          >
            Get started
          </Link>

          <Link
            href="#how-it-works"
            className="rounded-full bg-white/85 px-6 py-3 text-sm font-medium text-slate-900 hover:bg-white"
          >
            Learn how it works
          </Link>
        </div>

        <p className="mt-5 text-xs text-white/45">
          Educational only. Not medical advice.
        </p>

        {/* Three feature cards */}
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur sm:grid-cols-3">
          <div className="rounded-2xl bg-white/85 p-5 text-left text-slate-900">
            <div className="text-sm font-semibold">5–10 min/day</div>
            <div className="mt-1 text-sm text-slate-600">Small steps, consistently.</div>
          </div>
          <div className="rounded-2xl bg-white/85 p-5 text-left text-slate-900">
            <div className="text-sm font-semibold">Video + PDFs</div>
            <div className="mt-1 text-sm text-slate-600">Clear lessons + printables.</div>
          </div>
          <div className="rounded-2xl bg-white/85 p-5 text-left text-slate-900">
            <div className="text-sm font-semibold">Member dashboard</div>
            <div className="mt-1 text-sm text-slate-600">All content in one place.</div>
          </div>
        </div>
      </div>
    </section>
  );
}