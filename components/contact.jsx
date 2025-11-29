export default function Contact() {
  return (
    <section className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600 mb-10">
          Have questions? We'd love to hear from you. Fill out the form and our team will get back to you soon.
        </p>

        <div className="bg-gray-50 shadow-lg rounded-2xl p-8 border border-gray-200">
          <form className="grid gap-6">
            <div className="text-left">
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div className="text-left">
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div className="text-left">
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none h-32"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold text-lg shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
