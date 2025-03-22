import React, { useEffect, useState } from "react";

const phones = [0.6, 0.8, 1, 0.8, 0.6];

const TITLES = [
  {
    label: "AI-Powered Cross-Selling ",
    icon: "🚀",
    className: "hero-title-gradient",
  },
  {
    label: "AI Menus ",
    icon: "🤖",
    className: "text-[#34C759]",
  },
  {
    label: "AI-Driven Profits ",
    icon: "🤑",
    className: "text-[#007AFF]",
  },
];

const HeroSection = () => {
  const [images, setImages] = useState([0, 1, 2, 3, 4]);
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImages((prev) => prev.map((i) => (i + 1) % 5));
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-64">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brown leading-15 mb-2">
            Supercharge Your Café with
          </h1>
          <p
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-15`}
          >
            <span className={TITLES[titleIndex].className}>
              {TITLES[titleIndex].label}
            </span>
            <span>{TITLES[titleIndex].icon}</span>
          </p>
          <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto text-center mb-10 font-normal">
            For the first time ever, cafés run smarter, sell more, and create
            unforgettable experiences—like never before. We are revolutionizing
            the café industry with{" "}
            <span className="hero-title-gradient font-semibold">
              AI-powered
            </span>{" "}
            innovation, setting a new standard for growth and efficiency.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/"
              className="rounded-4xl py-4 px-8 bg-black text-white text-base font-semibold"
            >
              Join the Café Revolution
            </a>
            <a
              href="/"
              className="rounded-4xl py-4 px-8  border border-black text-base font-semibold"
            >
              See It in Action
            </a>
          </div>
        </div>
      </div>

      {/* Phone showcase section */}
      <div className="relative flex items-center justify-center px-4 -mt-20">
        <div className="relative w-full max-w-[1400px] justify-between items-center mx-auto flex">
          {phones.map((phone, index) => (
            <div
              className="relative flex"
              style={{
                width: `calc(${280 * phone}px)`,
                height: `calc(${580 * phone}px)`,
              }}
            >
              <img
                src="phone-pro.png"
                style={{
                  borderRadius: "42px",
                }}
                className="w-full h-full object-cover "
              />
              <div className="absolute inset-[8px]">
                <img
                  src={`/hero/phone-${images[index] + 1}.png`}
                  alt={`App screen ${index + 1}`}
                  className="w-full h-full object-cover"
                  style={{
                    borderRadius: "36px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
