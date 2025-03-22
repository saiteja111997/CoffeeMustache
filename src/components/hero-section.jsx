import React, { useEffect, useState } from "react";
import "./hero-section.css";

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
  const [titleIndex, setTitleIndex] = useState(0);
  const [images, setImages] = useState([0, 1, 2, 3, 4]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImages((prev) => prev.map((i) => (i + 1) % 5));
    }, 2000);

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });

    const intervalId2 = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }, 1000);
    return () => {
      clearInterval(intervalId);
      clearInterval(intervalId2);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pb-24">
        <div className="text-center">
          <h1 className="text-2xl md:text-5xl font-bold text-brown leading-10 md:leading-15 md:mb-2">
            Supercharge Your Café with
          </h1>
          <p className="text-2xl md:text-5xl font-bold mb-4 md:mb-8 leading-10 md:leading-15">
            <span className={TITLES[titleIndex].className}>
              {TITLES[titleIndex].label}
            </span>
            <span>{TITLES[titleIndex].icon}</span>
          </p>
          <p className="text-base sm:text-xl text-black max-w-3xl mx-auto text-center mb-10 font-normal">
            For the first time ever, cafés run smarter, sell more, and create
            unforgettable experiences—like never before. We are revolutionizing
            the café industry with{" "}
            <span className="hero-title-gradient font-semibold">
              AI-powered
            </span>{" "}
            innovation, setting a new standard for growth and efficiency.
          </p>
          <div className="flex justify-center gap-2 md:gap-4">
            <a
              href="#contact"
              className="rounded-4xl py-2 md:py-4 px-4 md:px-8 bg-black text-white text-sm md:text-base font-semibold"
            >
              Join the Café Revolution
            </a>
            <a
              href="#features"
              className="rounded-4xl py-2 md:py-4 px-4 md:px-8 border border-black text-sm md:text-base font-semibold"
            >
              See It in Action
            </a>
          </div>
        </div>
      </div>

      {/* Phone showcase section */}
      <div className="relative flex items-center justify-center px-4">
        <div className="relative w-full max-w-[1400px] justify-between items-center mx-auto flex gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div className={`relative flex phone-${index + 1}`}>
              <img
                src="phone-pro.png"
                className="w-full h-full object-cover md:rounded-[42px] rounded-[18px]"
              />
              <div className="absolute inset-[4px] md:inset-[8px]">
                <img
                  src={`/hero/phone-${images[index] + 1}.png`}
                  alt={`App screen ${index + 1}`}
                  className="w-full h-full object-fill md:object-cover md:rounded-[36px] rounded-[14px]"
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
