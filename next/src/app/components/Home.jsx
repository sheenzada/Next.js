
export default function HomePage() {
  return (
    <div id="about" className="min-h-screen bg-blue-400 from-blue-500 to-purple-600 flex items-center justify-center px-6">
      <div>
        <img src="src/app/components/inam-2.jpg" alt="Image" className="w-60 h-60 rounded-full bg-amber-500 mx-auto items-center"/>
      </div>
      <div className="text-center text-white max-w-2xl">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to My Website 
        </h1>

        <p className="text-white text-lg mb-8">
          We build modern, fast and beautiful websites using Next.js and React.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="/about"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-black transition"
          >
            About Us
          </a>

          <a
            href="/service"
            className="bg-black text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-white transition"
          >
            Our Services
          </a>
        </div>
      </div>
    </div>
  );
}
