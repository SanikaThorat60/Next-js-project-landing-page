export default function Hero() {
  return (
    <section className="pt-32 pb-20 min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
      <h1 className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg">
        Clean Your Inbox <br /> The Smarter Way
      </h1>

      <p className="mt-6 text-lg md:text-2xl opacity-90 max-w-2xl">
        ClearMail uses powerful AI to filter spam, organize emails, and remove junk with one click.
      </p>

      <button className="mt-8 px-8 py-4 bg-white text-indigo-700 font-bold rounded-full shadow-lg 
hover:scale-105 hover:bg-gray-200 transition-transform transition-colors duration-300 ease-in-out">
  Try ClearMail for Free
</button>


    </section>
  );
}
