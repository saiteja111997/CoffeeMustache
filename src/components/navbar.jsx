export const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src="/logo.svg" alt="Coffee Mustache" className="h-10" />
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
            to="/demo"
            className="bg-[#C17D5B] text-white px-6 py-2 rounded-full hover:bg-[#A66B4A] transition duration-300"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </nav>
  );
};
