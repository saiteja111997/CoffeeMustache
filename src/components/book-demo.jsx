import React, { useState } from "react";

export const BookDemo = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email submitted:", email);
  };

  return (
    <div
      className="w-screen bg-gray-900 py-20 px-6 md:px-0 md:-ml-24"
      style={{
        backgroundImage: "url('/book-demo-bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      id="contact"
    >
      <div className="max-w-2xl flex flex-col items-center mx-auto">
        <h1 className="text-3xl md:text-5xl font-semibold text-white mb-7 w-full">
          Book Your Demo
        </h1>

        <p className="text-base md:text-xl text-gray-200 mb-15">
          Boost your cafe's sales and customer experience with{" "}
          <span className="text-primary">AI-powered</span> insights! Our smart
          cafe management app helps you understand customer preferences,
          optimize <span className="text-primary">cross-selling</span>, and
          improve service with <span className="text-primary">real-time</span>{" "}
          feedback and ratings. Book a free demo today and see how AI can
          transform your business!
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4 w-full"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your mail"
            className="px-5 flex-1 py-4 rounded-3xl border border-[#F9C06A6B] bg-[#FFF9F1] text-gray-900 placeholder-[#00000057] focus:outline-none focus:ring-1 focus:ring-primary"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-[#F9C06A] text-[#1E1E1E] font-semibold rounded-3xl hover:bg-[#F9C06A]/80 transition-colors duration-200 cursor-pointer"
          >
            Book Demo
          </button>
        </form>
      </div>
    </div>
  );
};
