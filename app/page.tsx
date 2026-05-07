export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Dunning Optimizer
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Recover Failed Payments<br />
          <span className="text-[#58a6ff]">Automatically & Intelligently</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          A/B test retry timing, email sequences, and payment method prompts to maximize recovery of failed subscription payments — without lifting a finger.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Recovering Revenue →
        </a>
        <p className="text-[#8b949e] text-sm mt-3">$19/mo · Cancel anytime · Stripe-native</p>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 max-w-md mx-auto text-center">
          <h2 className="text-white text-xl font-bold mb-1">Growth Plan</h2>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stop losing revenue</p>
          <div className="text-5xl font-extrabold text-white mb-1">
            $19<span className="text-xl font-normal text-[#8b949e]">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-8">Billed monthly. No contracts.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Stripe webhook integration",
              "A/B tested retry sequences",
              "Customizable email templates",
              "Smart payment method prompts",
              "Recovery rate dashboard",
              "Auto-optimizing retry logic",
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto">
        <h2 className="text-white text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border-b border-[#30363d] pb-6">
            <h3 className="text-white font-semibold mb-2">How does it integrate with Stripe?</h3>
            <p className="text-[#8b949e] text-sm">You connect your Stripe account via webhook. We listen for failed payment events and automatically enroll them in your configured dunning sequences — no code changes needed.</p>
          </div>
          <div className="border-b border-[#30363d] pb-6">
            <h3 className="text-white font-semibold mb-2">What does A/B testing retry sequences mean?</h3>
            <p className="text-[#8b949e] text-sm">We split failed payments across different retry timing strategies and email copy variants, then automatically shift traffic to whichever sequence recovers the most revenue.</p>
          </div>
          <div className="pb-6">
            <h3 className="text-white font-semibold mb-2">Can I customize the email templates?</h3>
            <p className="text-[#8b949e] text-sm">Yes. The dashboard gives you full control over email copy, send timing, and payment method prompts. You can also let the optimizer handle it automatically based on performance data.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
