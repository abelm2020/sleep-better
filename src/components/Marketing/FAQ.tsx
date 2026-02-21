export default function FAQ() {
  return (
    <section className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-6">
          <div>
            <h3 className="font-medium">
              Is this medical advice?
            </h3>
            <p className="mt-2 text-sm text-slate-700">
              No. This program is educational only and does not replace medical guidance.
            </p>
          </div>

          <div>
            <h3 className="font-medium">
              How long does the program take?
            </h3>
            <p className="mt-2 text-sm text-slate-700">
              Daily lessons are short (5–10 minutes) with one practical action step.
            </p>
          </div>

          <div>
            <h3 className="font-medium">
              Can I cancel anytime?
            </h3>
            <p className="mt-2 text-sm text-slate-700">
              Yes. Monthly plans can be canceled anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
