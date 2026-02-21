export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Simple, transparent pricing.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">
            Choose monthly or annual. Cancel anytime.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2">
          {/* Monthly */}
          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
            <div className="text-sm font-semibold text-slate-600">Monthly</div>
            <div className="mt-3 flex items-end gap-2">
              <div className="text-5xl font-semibold tracking-tight">$29</div>
              <div className="pb-1 text-sm text-slate-600">/ month</div>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li>• Full program access</li>
              <li>• Video lessons</li>
              <li>• Printable PDFs</li>
              <li>• Cancel anytime</li>
            </ul>

            <button className="mt-8 w-full rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500">
              Start Monthly Plan
            </button>
          </div>

          {/* Annual */}
          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
            <div className="text-sm font-semibold text-slate-600">Annual</div>
            <div className="mt-3 flex items-end gap-2">
              <div className="text-5xl font-semibold tracking-tight">$199</div>
              <div className="pb-1 text-sm text-slate-600">/ year</div>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li>• Everything in Monthly</li>
              <li>• 2 months free</li>
              <li>• Priority updates</li>
            </ul>

            <button className="mt-8 w-full rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500">
              Start Annual Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}