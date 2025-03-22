import React from "react";

const features = [
  {
    title: "AI-Powered Cross-Selling",
    description:
      "Our AI analyzes customer preferences, order patterns, and real-time factors like time of day to suggest relevant add-ons. These seamless recommendations at checkout drive higher",
    imageUrl: "/features/phone-1.svg",
    imagePosition: "right",
  },
  {
    title: "AI-Generated Menus",
    description:
      "Create optimized, engaging menus that maximize sales—automatically. AI studies bestsellers, seasonal trends, and competitor insights to highlight high-margin items and trending combos. Menus auto-update, ensuring cafés always showcase the most profitable and appealing options with zero manual effort.",
    imageUrl: "/features/phone-2.svg",
    imagePosition: "left",
  },
  {
    title: "AI-Curated Carts",
    description:
      "Pre-built, AI-optimized carts that boost average order value instantly. Instead of manual selection AI pre-fills carts with top picks based on preferences, past orders, and trends. This speeds up checkout, reduces decision fatigue, and increases average order value effortlessly.",
    imageUrl: "/features/phone-3.svg",
    imagePosition: "right",
  },
  {
    title: "Collaborative Carts",
    description:
      "Let groups order together, split payments, and enjoy a seamless experience. Groups can add items to a shared cart from different devices, making ordering seamless. Built-in bill splitting simplifies payments, boosting group orders and café revenue while enhancing convenience.",
    imageUrl: "/features/phone-4.svg",
    imagePosition: "left",
  },
];

export const FutureCafes = () => {
  return (
    <div className="bg-[#FFF5E4] py-16 -ml-24 w-screen" id="future">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">
            <span className="powered-by-gradient">The Future of Cafés,</span>
            <span className="text-brown-800"> Built for You</span>
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
                  ? "flex-row"
                  : "flex-row-reverse"
              }`}
            >
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">
                  {feature.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <button className="flex items-center text-gray-900 bg-white rounded-full px-4 py-2 font-semibold hover:text-gray-700">
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Image placeholder - replace src with actual images */}
              <div className="flex-1">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src={feature.imageUrl}
                    alt={feature.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
