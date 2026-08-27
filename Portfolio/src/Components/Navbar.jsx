import React, { useEffect, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // ================= THEME =================
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;

    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // ================= CLOSE MENU =================
  const closeMenu = () => {
    setIsOpen(false);
  };

  // ================= SMOOTH SCROLL =================
  const handleScroll = (e, href) => {
    e.preventDefault();

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    closeMenu();
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <nav
        className="
          fixed
          top-0
          left-0
          w-full
          z-50
          bg-black
          text-white
          shadow-lg
          transition-all
          duration-300
        "
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* ================= NAVBAR MAIN ================= */}

          <div className="flex items-center justify-between py-2.5">

            {/* ================= LOGO + NAME ================= */}

            <a
              href="#home"
              onClick={(e) => handleScroll(e, "#home")}
              className="flex items-center gap-2 sm:gap-3 group"
            >
              {/* UM LOGO */}

              <div
                className="
                  relative
                  w-9
                  h-9
                  sm:w-10
                  sm:h-10
                  md:w-11
                  md:h-11
                  flex
                  items-center
                  justify-center
                  rounded-lg
                  sm:rounded-xl
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
                    rounded-[7px]
                    sm:rounded-[9px]
                    bg-black
                    flex
                    items-center
                    justify-center
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

              {/* NAME */}

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

            {/* ================= DESKTOP NAVIGATION ================= */}

            <div className="hidden lg:flex items-center space-x-7 xl:space-x-8">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
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
                  />
                </a>
              ))}

            </div>

            {/* ================= DESKTOP RIGHT SIDE ================= */}

            <div className="hidden lg:flex items-center gap-3">

              {/* THEME BUTTON */}

              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle dark and light mode"
                className="
                  w-10
                  h-10
                  rounded-full
                  border
                  border-gray-700
                  bg-gray-900
                  flex
                  items-center
                  justify-center
                  text-lg
                  hover:border-blue-500
                  hover:bg-gray-800
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                {darkMode ? "☀️" : "🌙"}
              </button>

              {/* CONNECT BUTTON */}

              <a
                href="https://www.linkedin.com/in/ujjwal-mishra-782634277/"
                target="_blank"
                rel="noopener noreferrer"
                className="
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

            </div>

            {/* ================= MOBILE / TABLET BUTTONS ================= */}

            <div className="lg:hidden flex items-center gap-2">

              {/* THEME BUTTON */}

              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle dark and light mode"
                className="
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
                {darkMode ? "☀️" : "🌙"}
              </button>

              {/* MENU BUTTON */}

              <button
                type="button"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                className="
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

          </div>
        </div>
      </nav>

      {/* =====================================================
          MOBILE / TABLET BACKDROP
      ====================================================== */}

      <div
        onClick={closeMenu}
        className={`
          fixed
          inset-0
          z-[55]
          lg:hidden

          bg-white/5
          backdrop-blur-sm

          transition-all
          duration-300

          ${
            isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
      />

      {/* =====================================================
          SMALL WHITE TRANSPARENT SIDE POPUP
      ====================================================== */}

      <div
        className={`
          fixed
          top-3
          right-3
          z-[60]

          lg:hidden

          w-[250px]
          sm:w-[280px]
          md:w-[300px]

          rounded-2xl

          bg-white/10
          backdrop-blur-2xl

          border
          border-white/20

          shadow-2xl

          overflow-hidden

          transition-all
          duration-400
          ease-out

          ${
            isOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-[120%] opacity-0"
          }
        `}
      >

        {/* ================= POPUP HEADER ================= */}

        <div
          className="
            flex
            items-center
            justify-between

            px-4
            py-3

            border-b
            border-white/10
          "
        >

          {/* NAME */}

          <div className="flex items-center gap-2.5">

            {/* SMALL LOGO */}

            <div
              className="
                relative
                w-8
                h-8
                flex
                items-center
                justify-center
                rounded-lg
                bg-gradient-to-br
                from-green-400
                via-cyan-400
                to-blue-500
                shadow-md
              "
            >
              <div
                className="
                  absolute
                  inset-[2px]
                  rounded-[6px]
                  bg-black
                  flex
                  items-center
                  justify-center
                "
              >
                <span
                  className="
                    text-xs
                    font-extrabold
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

            <div>
              <p className="text-sm font-semibold text-white">
                Ujjwal Mishra
              </p>

              <p className="text-[8px] tracking-[1.5px] uppercase text-gray-300">
                Full Stack Developer
              </p>
            </div>

          </div>

          {/* CLOSE BUTTON */}

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="
              w-8
              h-8
              rounded-full

              bg-white/10
              border
              border-white/20

              text-white

              flex
              items-center
              justify-center

              text-sm

              hover:bg-white/20
              transition
              duration-300
            "
          >
            ✕
          </button>

        </div>

        {/* ================= MENU ================= */}

        <div className="px-3 py-3">

          <div className="flex flex-col gap-1">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="
                  flex
                  items-center
                  justify-between

                  px-3
                  py-2.5

                  rounded-lg

                  text-sm
                  font-medium
                  text-white

                  bg-white/5

                  hover:bg-white/15

                  border
                  border-transparent
                  hover:border-white/10

                  transition-all
                  duration-200
                "
              >
                <span>{link.name}</span>

                <span
                  className="
                    text-gray-300
                    text-sm
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </a>
            ))}

          </div>

          {/* ================= CONNECT BUTTON ================= */}

          <a
            href="https://www.linkedin.com/in/ujjwal-mishra-782634277/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="
              mt-3

              flex
              items-center
              justify-center
              gap-2

              w-full

              py-2.5

              rounded-lg

              bg-white/15
              backdrop-blur-md

              border
              border-white/20

              text-white
              text-sm
              font-medium

              hover:bg-white/25

              transition-all
              duration-300
            "
          >
            Connect Me
            <span>→</span>
          </a>

        </div>

      </div>
    </>
  );
}

export default Navbar;