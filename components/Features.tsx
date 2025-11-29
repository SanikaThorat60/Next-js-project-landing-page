export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-gray-50">
      <h2 className="text-center text-4xl font-bold mb-12">How ClearMail Helps You</h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          {
            title: "AI Spam Detection",
            desc: "Automatically deletes unwanted promotional emails."
          },
          {
            title: "Smart Categorization",
            desc: "Organizes your inbox into Work, Personal, Offers, and More."
          },
          {
            title: "1-Click Unsubscribe",
            desc: "Removes junk newsletters instantly."
          }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
