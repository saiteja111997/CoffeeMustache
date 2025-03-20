import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#3C2A21] text-white py-16 relative overflow-hidden">
      {/* Updated Coffee SVG images */}
      <img
        src="/footer/coffee-1.svg"
        alt=""
        className="absolute left-0 top-0 w-64 opacity-90"
      />
      <img
        src="/footer/coffee-2.svg"
        alt=""
        className="absolute right-0 top-0 w-64 opacity-90"
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-6">About</h2>
            <p className="text-gray-300 mb-6">
              We empower cafes with AI-driven insights to boost sales, optimize
              customer experience, and streamline operations effortlessly.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4">
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

          {/* Company Section */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-6">Company</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/how-we-work" className="hover:text-gray-300">
                  How we work
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-gray-300">
                  Terms of service
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-gray-300">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-gray-300">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/menu" className="hover:text-gray-300">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-gray-300">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-gray-300">
                  News & Blogs
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-gray-300">
                  Help & Supports
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:coffeemustache369@gmail.com"
                  className="hover:text-gray-300"
                >
                  coffeemustache369@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.coffeemustache.com"
                  className="hover:text-gray-300"
                >
                  www.coffeemustache.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
