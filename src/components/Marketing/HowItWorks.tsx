export default function HowItWorks() {
  const steps = [
    { title: "1) Join", body: "Choose monthly or annual and get instant access." },
    { title: "2) Follow daily steps", body: "Short lessons + 1 action step per day." },
    { title: "3) Improve consistently", body: "Built for busy families." },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            How it works.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">
            Simple, repeatable steps designed for real family life.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <div className="text-sm font-semibold text-slate-900">
                {item.title}
              </div>
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