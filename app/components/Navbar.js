"use client";

export default function Navbar() {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-beige shadow text-brown">
      <div className="text-xl font-bold cursor-pointer" onClick={() => handleScroll("hero")}>
        Coffee Mustache
      </div>
      <ul className="flex space-x-6">
        <li className="cursor-pointer" onClick={() => handleScroll("section1")}>
          AI Powered Café Search
        </li>
        <li className="cursor-pointer" onClick={() => handleScroll("section2")}>
          Waitlist Transparency
        </li>
        <li className="cursor-pointer" onClick={() => handleScroll("section3")}>
          AI Powered Menus
        </li>
        <li className="cursor-pointer" onClick={() => handleScroll("section4")}>
          Collaborative Carts
        </li>
      </ul>
    </nav>
  );
}
