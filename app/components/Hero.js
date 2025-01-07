"use client";

export default function Hero() {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative h-screen bg-cover bg-center bg-[url('/HeroImage.jpg')]">
      {/* Text Container in the Bottom Half */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-center">
        <h1 className="text-5xl font-bold text-brown drop-shadow-lg">Coffee Mustache</h1>
        <p className="text-2xl mt-4 text-brown drop-shadow-md">
          Where Café Culture Meets Cutting-Edge Technology
        </p>
        <div className="mt-6 space-x-4">
          <button
            className="px-6 py-2 bg-brown text-offwhite rounded shadow"
            onClick={() => handleScroll("callToAction")}
          >
            Sign up to newsletter
          </button>
          <button
            className="px-6 py-2 bg-beige text-brown rounded shadow"
            onClick={() => handleScroll("section1")}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
