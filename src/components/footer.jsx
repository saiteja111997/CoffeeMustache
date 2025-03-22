import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer-container bg-[#3C2A21] text-white py-16 relative">
      {/* Updated Coffee SVG images */}
      <img
        src="/footer/coffee-1.svg"
        alt=""
        className="absolute left-0 -top-14 md:-top-44 z-10 w-36 md:w-64"
      />
      <img
        src="/footer/coffee-2.svg"
        alt=""
        className="absolute right-0 -top-14 md:-top-44 z-10 w-36 md:w-64"
      />

      <div className="container mx-auto px-4 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <img src="/white-logo.svg" alt="" className="w-48" />
            <p className="text-white mb-6 mt-12">
              We empower cafes with AI-driven insights to boost sales, optimize
              customer experience, and streamline operations effortlessly.
            </p>
            <div className="flex space-x-4 mt-20">
              <a href="#" className="text-white hover:text-gray-300 text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-white hover:text-gray-300 text-2xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-white hover:text-gray-300 text-2xl">
                <FaYoutube />
              </a>
              <a href="#" className="text-white hover:text-gray-300 text-2xl">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="md:col-span-1">
            <h2 className="text-3xl font-semibold mt-3 mb-14">About</h2>
            <ul className="space-y-3">
              <li>
                <p className="text-xl text-white">Menu</p>
              </li>
              <li>
                <p className="text-xl text-white">Features</p>
              </li>
              <li>
                <p className="text-xl text-white">News & Blogs</p>
              </li>
              <li>
                <p className="text-xl text-white">Help & Supports</p>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="md:col-span-1">
            <h2 className="text-3xl font-semibold mt-3 mb-14">Company</h2>
            <ul className="space-y-3">
              <li>
                <p className="text-xl text-white">How we work</p>
              </li>
              <li>
                <p className="text-xl text-white">Terms of service</p>
              </li>
              <li>
                <p className="text-xl text-white">Pricing</p>
              </li>
              <li>
                <p className="text-xl text-white">FAQ</p>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-semibold mt-3 mb-14">Contact Us</h2>
            <ul className="space-y-8">
              <li>
                <a
                  href="mailto:coffeemustache369@gmail.com"
                  className="text-xl text-white"
                >
                  coffeemustache369@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.coffeemustache.in"
                  className="text-xl text-white"
                >
                  www.coffeemustache.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
