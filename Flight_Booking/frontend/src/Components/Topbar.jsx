import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import image from "../assets/Aero.jpg";
import { Link } from "react-router-dom";

function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuItems = [
    { name: "Home", to: "/" },
    { name: "Book Ticket", to: "/Book" },
    { name: "Hotel", to: "/Hotel" },
    { name: "Support", to: "/Support" },
  ];

  return (
    <nav className="sm:px-4 md:px-8 lg:px-10 xl:px-12 relative flex flex-col md:flex-row justify-between items-center bg-white z-50">
      <div className="py-1 flex justify-between items-center w-full md:w-auto">
        <Link to="/">
          <img src={image} alt="Aero" className="h-14 w-24" />
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            role="button"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <div className={`hidden md:flex md:flex-row md:space-x-6`}>
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.to}
            className="hover:text-red-500 py-2"
            onClick={handleLinkClick}
          >
            {item.name}
          </a>
        ))}
      </div>

      {menuOpen && (
        <div className="flex flex-col items-center bg-gradient-to-br from-white to-transparent z-50 absolute left-85 right-0 top-10 pr-10 w-[50%] justify-end rounded-lg py-4 border animate-bubble">
          {menuItems.map((item, index) => (
            <a
              key={item.name}
              href={item.to}
              className={`hover:text-red-500 transition-all transform duration-300 ease-out delay-${
                index * 100
              } w-full text-center py-2 rounded-lg`}
              onClick={handleLinkClick}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}

      <button className="bg-zinc-800 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full mt-2 md:mt-0">
        <Link to="/contact">Contact</Link>
      </button>
    </nav>
  );
}

export default Topbar;