import Image from "next/image";
import profilePic from "./inam-2.jpg";

export default function HomePage() {
  return (
    <div
      id="/about"
      className="min-h-screen bg-blue-400 from-blue-500 to-purple-600 flex flex-col md:flex-row items-center justify-center px-6 gap-12"
    >
      <div className="w-60 h-60 flex">
        <Image
          src={profilePic}
          alt="Profile Image"
          className="rounded-full object-center"
        />
      </div>

      <div className="text-center md:text-left text-white max-w-2xl">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to My Website
        </h1>

        <p className="text-lg mb-8">
          We build modern, fast and beautiful websites using Next.js and React.
        </p>

        <div className="flex justify-center md:justify-start gap-6">
          <a
            href="/about"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition"
          >
            About Us
          </a>

          <a
            href="/service"
            className="bg-black text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
          >
            Our Services
          </a>
        </div>
      </div>
    </div>
  );
}
