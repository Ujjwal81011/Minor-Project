import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-black text-white fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navbar Main */}
        <div className="flex items-center justify-between py-2.5">

          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center gap-2 sm:gap-3 group"
          >
            {/* UM Logo */}
            <div
              className="
                relative
                w-9 h-9
                sm:w-10 sm:h-10
                md:w-11 md:h-11
                flex items-center justify-center
                rounded-lg sm:rounded-xl
                bg-gradient-to-br
                from-green-400
                via-cyan-400
                to-blue-500
                shadow-lg
                shadow-blue-500/20
                group-hover:scale-105
                transition-all
                duration-300
                flex-shrink-0
              "
            >
              <div
                className="
                  absolute
                  inset-[2px]
                  rounded-[7px] sm:rounded-[9px]
                  bg-black
                  flex items-center justify-center
                "
              >
                <span
                  className="
                    text-sm
                    sm:text-base
                    md:text-lg
                    font-extrabold
                    tracking-tight
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-r
                    from-green-400
                    to-blue-500
                  "
                >
                  UM
                </span>
              </div>
            </div>

            {/* Name */}
            <div className="flex flex-col">
              <span
                className="
                  text-lg
                  sm:text-xl
                  md:text-2xl
                  font-bold
                  leading-none
                  whitespace-nowrap
                "
              >
                Ujjwal Mishra
              </span>

              <span
                className="
                  hidden
                  sm:block
                  text-[8px]
                  md:text-[10px]
                  text-gray-400
                  tracking-[2px]
                  md:tracking-[3px]
                  uppercase
                  mt-1
                "
              >
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-7 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  relative
                  text-gray-200
                  text-base
                  hover:text-white
                  transition
                  duration-300
                  group
                  whitespace-nowrap
                "
              >
                {link.name}

                {/* Hover Underline */}
                <span
                  className="
                    absolute
                    left-0
                    -bottom-1
                    w-0
                    h-[2px]
                    rounded-full
                    bg-gradient-to-r
                    from-green-400
                    to-blue-500
                    group-hover:w-full
                    transition-all
                    duration-300
                  "
                ></span>
              </a>
            ))}
          </div>

          {/* Desktop Connect Button */}
          <a
            href="https://www.linkedin.com/in/ujjwal-mishra-782634277/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden
              lg:inline-block
              bg-gradient-to-r
              from-green-400
              to-blue-500
              text-white
              px-4
              xl:px-5
              py-2
              rounded-full
              text-sm
              xl:text-base
              font-medium
              hover:scale-105
              hover:shadow-lg
              hover:shadow-blue-500/30
              transition-all
              duration-300
              whitespace-nowrap
            "
          >
            Connect Me
          </a>

          {/* Mobile / Tablet Menu Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="
              lg:hidden
              flex
              items-center
              justify-center
              w-10
              h-10
              rounded-lg
              border
              border-gray-700
              bg-gray-900
              text-white
              hover:border-blue-500
              hover:bg-gray-800
              transition
              duration-300
            "
          >
            {isOpen ? (
              <span className="text-xl">✕</span>
            ) : (
              <span className="text-xl">☰</span>
            )}
          </button>
        </div>

        {/* Mobile / Tablet Menu */}
        <div
          className={`
            lg:hidden
            overflow-hidden
            transition-all
            duration-300
            ${
              isOpen
                ? "max-h-[500px] opacity-100 pb-5"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="border-t border-gray-800 pt-4">

            {/* Navigation Links */}
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="
                    px-4
                    py-3
                    rounded-lg
                    text-gray-300
                    hover:text-white
                    hover:bg-gray-900
                    transition
                    duration-300
                  "
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Connect Button */}
            <a
              href="https://www.linkedin.com/in/ujjwal-mishra-782634277/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="
                mt-4
                block
                w-full
                text-center
                bg-gradient-to-r
                from-green-400
                to-blue-500
                text-white
                px-5
                py-2.5
                rounded-full
                font-medium
                hover:scale-[1.02]
                hover:shadow-lg
                hover:shadow-blue-500/30
                transition-all
                duration-300
              "
            >
              Connect Me
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;