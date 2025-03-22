import React from "react";

const features = [
  {
    icon: "/features/cash.gif",

    title: "AI-Powered Cross-Selling",
    description:
      "Boost order value with instant smart recommendations tailored to customer behavior.",
  },
  {
    icon: "/features/menu.gif",
    title: "AI-Generated Menus",
    description:
      "Create optimized, engaging menus that maximize sales automatically.",
  },
  {
    icon: "/features/curated-carts.gif",
    title: "AI-Curated Carts",
    description:
      "Pre-built AI-optimized carts that boost average order value instantly.",
  },
  {
    icon: "/features/collaborative-cart.gif",
    title: "Collaborative Carts",
    description:
      "Let groups order together, split payments, and enjoy a seamless experience.",
  },
  {
    icon: "/features/insights.gif",
    title: "Smart Analytics & Insights",
    description:
      "Track trends, optimize sales and make data-driven decisions effortlessly.",
  },
  {
    icon: "/features/valet.gif",
    title: "Digital Valet & Seamless Ordering",
    description:
      "Go contactless and frictionless with AI-powered digital valet services.",
  },
];

export const Features = () => {
  return (
    <div className="text-white py-20 px-4 w-4/5 mx-auto" id="features">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#B87F45]">The Future of Cafés,</span>{" "}
            <span className="powered-by-gradient">Powered by AI</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            AI-driven solutions that maximise sales, optimize operations, and
            enhance customer experiences all in one platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg px-3 py-7 flex flex-col items-center"
              style={{
                background: "rgba(255, 238, 216, 0.50)",
                boxShadow: "0px 0px 3.624px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-28 h-28"
              />
              <h3 className="text-[#603809] mt-7  text-2xl font-semibold mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-[#707070] text-lg max-w-[80%] text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
