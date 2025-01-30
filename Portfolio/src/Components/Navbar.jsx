import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Toggle menu state

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-black text-white fixed w-full top-0 z-50 shadow-lg mb-2">
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Ujjwal Mishra</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-gray-400">
              {link.name}
            </a>
          ))}
        </div>

        {/* Connect Me Button (Desktop) */}
        <a
          href="https://www.linkedin.com/in/ujjwal-mishra-782634277/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-5 py-2 rounded-full hover:scale-105 transition-transform"
        >
          Connect Me
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-lg px-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu - Transparent & Blurred Background */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-transparent backdrop-blur-lg py-4 flex flex-col items-center space-y-4 mb-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-gray-300 text-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/ujjwal-mishra-782634277/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-5 py-2 rounded-full hover:scale-105 transition-transform"
          >
            Connect Me
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;