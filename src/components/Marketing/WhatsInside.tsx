export default function WhatsInside() {
  const items = [
    {
      title: "Short video lessons",
      body: "Clear, practical guidance you can watch in under 10 minutes.",
    },
    {
      title: "Downloadable PDFs",
      body: "Printable bedtime routines and daily action sheets.",
    },
    {
      title: "Daily action steps",
      body: "One small, realistic step per day.",
    },
    {
      title: "Member dashboard",
      body: "Track progress and revisit lessons anytime.",
    },
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            What’s inside.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">
            Everything you need, presented simply.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}