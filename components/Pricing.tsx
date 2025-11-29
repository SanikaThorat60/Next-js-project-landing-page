export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 bg-gray-100">
      <h2 className="text-center text-4xl font-bold mb-12">Simple Pricing for Everyone</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Free Plan */}
        <div className="p-10 bg-white rounded-2xl shadow hover:shadow-xl transition">
          <h3 className="text-3xl font-bold text-indigo-700">Free</h3>
          <p className="text-gray-600 mt-2 mb-6">Perfect for basic inbox cleaning</p>
          <ul className="text-gray-700 space-y-2">
            <li>✔ Basic Spam Filtering</li>
            <li>✔ Email Categorization</li>
            <li>✖ Auto-Unsubscribe</li>
            <li>✖ AI Smart Actions</li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="p-10 bg-indigo-600 text-white rounded-2xl shadow-xl hover:scale-105 transition">
          <h3 className="text-3xl font-bold">Pro</h3>
          <p className="opacity-80 mt-2 mb-6">Best for busy professionals</p>
          <ul className="space-y-2">
            <li>✔ Advanced Spam Detection</li>
            <li>✔ Auto-Unsubscribe</li>
            <li>✔ Smart AI Suggestions</li>
            <li>✔ Priority Support</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
