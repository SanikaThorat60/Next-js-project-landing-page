export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 bg-white">
      <h2 className="text-center text-4xl font-bold mb-12">
        Loved by Users Worldwide ⭐
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="p-8 bg-gray-50 rounded-xl shadow">
          <p className="text-gray-700 italic">
            "ClearMail cleaned 12,000+ junk emails from my inbox in minutes!"
          </p>
          <h4 className="mt-4 font-semibold text-indigo-600">— Meera S.</h4>
        </div>

        <div className="p-8 bg-gray-50 rounded-xl shadow">
          <p className="text-gray-700 italic">
            "The smart categorization is perfect. My inbox finally feels organized."
          </p>
          <h4 className="mt-4 font-semibold text-indigo-600">— Raghav P.</h4>
        </div>
      </div>
    </section>
  );
}
