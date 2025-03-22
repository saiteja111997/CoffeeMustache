import { useState } from "react";
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="relative">
      <nav className="navbar-container mx-6 md:mx-0">
        <div className="container md:mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src="/logo.svg"
                alt="Coffee Mustache"
                className="h-8 md:h-10"
              />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#future" className="text-black hover:text-gray-600">
              Future is here
            </a>
            <a href="#features" className="text-black hover:text-gray-600">
              Our Features
            </a>
            <a href="#contact" className="text-black hover:text-gray-600">
              Contact Us
            </a>
            <a
              to="#demo"
              className="bg-[#C17D5B] text-white px-6 py-2 rounded-full hover:bg-[#A66B4A] transition duration-300"
            >
              Book a Demo
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white z-50 shadow-lg mx-6 rounded-xl">
          <div className="container px-4 py-3 space-y-2">
            <a
              href="#future"
              className="block text-black hover:text-gray-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Future is here
            </a>
            <a
              href="#features"
              className="block text-black hover:text-gray-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Features
            </a>
            <a
              href="#contact"
              className="block text-black hover:text-gray-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
            <a
              to="/demo"
              className="block bg-[#C17D5B] text-white px-4 py-2 rounded-full hover:bg-[#A66B4A] transition duration-300 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
