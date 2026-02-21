export default function Testimonials() {
  return (
    <section className="border-t bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          What parents are saying
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              quote:
                "This program finally gave us a bedtime routine that actually works.",
              name: "Sarah M.",
            },
            {
              quote:
                "The daily steps made it realistic. No overwhelm.",
              name: "David R.",
            },
            {
              quote:
                "Within two weeks, nights were calmer and more predictable.",
              name: "Jessica T.",
            },
          ].map((t, i) => (
            <div key={i} className="rounded-2xl border p-6">
              <p className="text-sm text-slate-700">“{t.quote}”</p>
              <p className="mt-4 text-xs font-medium text-slate-600">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
