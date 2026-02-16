export default function AboutPage() {
  return (
    <div id="home" className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
          About Us
        </h1>

        <p className="text-gray-700 text-lg mb-4">
          Welcome to our website! We are passionate about building modern
          web applications using Next.js and React.
        </p>

        <p className="text-gray-700 text-lg mb-4">
          Our mission is to create fast, responsive, and user-friendly
          websites using the latest technologies.
        </p>

        <p className="text-gray-700 text-lg">
          Thank you for visiting our About page. We hope you enjoy exploring
          our website!
        </p>

        <div className="mt-8 text-center">
          <a
            href="/"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </div>
  );
}
