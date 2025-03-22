import React from "react";

const features = [
  {
    title: "AI-Powered Cross-Selling",
    description:
      "Our AI analyzes customer preferences, order patterns, and real-time factors like time of day to suggest relevant add-ons. These seamless recommendations at checkout drive higher spending, enhance the ordering experience, and increase revenue—effortlessly.",
    imageUrl: "/features/phone-1.png",
    videoUrl: "/features/phone-1.mp4",
    imagePosition: "right",
    style: {
      top: "18.5%",
      left: "33%",
      height: "73%",
    },
  },
  {
    title: "AI-Generated Menus",
    description:
      "Create optimized, engaging menus that maximize sales—automatically.AI studies bestsellers, seasonal trends, and competitor insights to highlight high-margin items and trending combos. Menus auto-update, ensuring cafés always showcase the most profitable and appealing options with zero manual effort.",
    imageUrl: "/features/phone-2.png",
    videoUrl: "/features/phone-2.mp4",
    imagePosition: "left",
    style: {
      height: "66%",
      left: "40.6%",
      top: "16.5%",
    },
  },
  {
    title: "AI-Curated Carts",
    description:
      "Pre-built, AI-optimized carts that boost average order value instantly. Instead of manual selection, AI pre-fills carts with top picks based on preferences, past orders, and trends. This speeds up checkout, reduces decision fatigue, and increases average order value effortlessly.",
    imageUrl: "/features/phone-3.png",
    videoUrl: "/features/phone-3.mp4",
    imagePosition: "right",
    style: {
      height: "86%",
      left: "37.5%",
      top: "7%",
    },
  },
  {
    title: "Collaborative Carts",
    description:
      "Let groups order together, split payments, and enjoy a seamless experience. Groups can add items to a shared cart from different devices, making ordering seamless. Built-in bill splitting simplifies payments, boosting group orders and café revenue while enhancing convenience.",
    imageUrl: "/features/phone-4.png",
    videoUrl: "/features/phone-4.mp4",
    imagePosition: "left",
    style: {
      height: "87%",
      right: "17.2%",
      top: "6.5%",
    },
  },
];

export const FutureCafes = () => {
  return (
    <div
      className="bg-[#FFF5E4] py-16 px-6 md:px-0 ml-0 md:-ml-24 w-screen"
      id="future"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="powered-by-gradient">The Future of Cafés,</span>
            <br className="md:hidden" />
            <span className="text-brown-800">Built for You</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Smarter cafés, higher profits, and seamless experiences—
            <br />
            powered by AI.
          </p>
        </div>

        {/* Features Section */}
        <div className="space-y-24">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`flex items-center gap-12 ${
                feature.imagePosition === "right"
                  ? "md:flex-row flex-col-reverse"
                  : "md:flex-row-reverse flex-col-reverse"
              }`}
            >
              <div className="width-100% md:width-[45%] space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  {feature.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <button className="flex items-center text-gray-900 bg-white rounded-full px-4 py-2 font-semibold hover:text-gray-700 gap-1">
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M14.2793 19.5L19.7793 14L14.2793 8.5"
                      stroke="#030712"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.7793 14H5.7793V5"
                      stroke="#030712"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Image placeholder - replace src with actual images */}
              <div className="width-100% md:width-[45%] relative rounded-lg overflow-hidden">
                <video
                  autoPlay
                  muted
                  playsInline
                  loop
                  webkit-playsinline
                  style={feature.style}
                  className="absolute rounded-lg md:rounded-2xl"
                >
                  <source src={feature.videoUrl} type="video/mp4" />
                </video>

                <img
                  src={feature.imageUrl}
                  alt={feature.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
