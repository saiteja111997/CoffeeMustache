"use client";

export default function CallToAction() {
  return (
    <div id="callToAction"
      className="h-screen bg-cover bg-center text-offwhite"
      style={{
        backgroundImage: "url('/callToAction.jpg')", // Background image from the public folder
      }}
    >
      <div className="flex items-center justify-end h-full pr-16">
        <div className="text-right">
          <h2 className="text-5xl font-bold mb-6">Sign up today.</h2>
          <p className="text-lg mb-8">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="flex space-x-4 justify-end">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-64 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brown focus:border-brown"
            />
            <button className="px-6 py-2 bg-brown text-offwhite rounded shadow hover:bg-opacity-90">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
