import React from "react";
import Photo from "../assets/ujjwal.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-[calc(100vh-100px)]
        overflow-hidden
        bg-black
        text-white
        flex
        items-center
        justify-center
        px-5
        sm:px-8
        lg:px-12
        pt-16
        sm:pt-20
        lg:pt-24
        pb-8
        sm:pb-10
        lg:pb-12
      "
    >
      {/* ================= Background Glow ================= */}

      <div
        className="
          absolute
          top-20
          left-[-120px]
          sm:left-[-80px]
          w-64
          h-64
          sm:w-80
          sm:h-80
          bg-purple-600/20
          rounded-full
          blur-3xl
          pointer-events-none
        "
      ></div>

      <div
        className="
          absolute
          bottom-0
          right-[-120px]
          sm:right-[-80px]
          w-72
          h-72
          sm:w-96
          sm:h-96
          bg-blue-600/20
          rounded-full
          blur-3xl
          pointer-events-none
        "
      ></div>

      <div
        className="
          absolute
          top-1/3
          left-1/2
          -translate-x-1/2
          w-72
          h-72
          bg-cyan-500/10
          rounded-full
          blur-3xl
          pointer-events-none
        "
      ></div>

      {/* ================= Main Content ================= */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-6xl
          mx-auto
          text-center
        "
      >

        {/* ================= Profile Image ================= */}

        <div className="relative inline-block mb-6 sm:mb-7">

          {/* Gradient Glow */}
          <div
            className="
              absolute
              -inset-1
              rounded-full
              bg-gradient-to-r
              from-green-400
              via-cyan-400
              to-blue-500
              blur-md
              opacity-80
            "
          ></div>

          {/* Image */}
          <img
            src={Photo}
            alt="Ujjwal Mishra"
            className="
              relative
              w-36
              h-36
              sm:w-44
              sm:h-44
              md:w-48
              md:h-48
              lg:w-52
              lg:h-52
              rounded-full
              object-cover
              border-4
              border-black
              shadow-2xl
              transition-all
              duration-500
              hover:scale-105
            "
          />

          {/* Available Badge */}
          <div
            className="
              absolute
              bottom-1
              right-1
              sm:bottom-2
              sm:right-2
              flex
              items-center
              gap-1.5
              bg-gray-900
              border
              border-gray-700
              px-2.5
              py-1
              rounded-full
              text-[10px]
              sm:text-xs
              text-gray-200
              shadow-lg
            "
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>

            Available
          </div>
        </div>

        {/* ================= Small Introduction ================= */}

        <p
          className="
            text-green-400
            uppercase
            tracking-[3px]
            sm:tracking-[4px]
            text-xs
            sm:text-sm
            font-medium
            mb-3
          "
        >
          Hello, I'm
        </p>

        <h1
          className="
            font-bold
            leading-tight
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            xl:text-7xl
            px-2
          "
        >
          I'm{" "}
          <span
            className="
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-green-400
              via-cyan-400
              to-blue-500
            "
          >
            Ujjwal Mishra
          </span>
        </h1>

        <h2
          className="
            mt-3
            sm:mt-4
            text-xl
            sm:text-2xl
            md:text-3xl
            lg:text-4xl
            font-semibold
            text-gray-200
          "
        >
          Full Stack Developer
        </h2>

        <p
          className="
            mt-4
            sm:mt-5
            max-w-2xl
            mx-auto
            text-sm
            sm:text-base
            md:text-lg
            leading-7
            sm:leading-8
            text-gray-400
            px-2
            sm:px-4
          "
        >
          I specialize in building modern, responsive, and user-friendly
          web applications using modern frontend and backend technologies.
        </p>

        <div
          className="
            mt-7
            sm:mt-8
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-4
            sm:gap-5
            px-4
          "
        >

          <a
            href="#contact"
            className="
              w-full
              sm:w-auto
              min-w-[180px]
              px-6
              py-3
              rounded-full
              bg-gradient-to-r
              from-green-400
              to-blue-500
              text-white
              font-medium
              text-sm
              sm:text-base
              shadow-lg
              shadow-blue-500/20
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-blue-500/40
            "
          >
            Contact Me
          </a>

          <a
            href="https://drive.google.com/file/d/1BERLlJkXeexDDv5cxb0-FvLK4P-g_QMm/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full
              sm:w-auto
              min-w-[150px]
              px-6
              py-3
              rounded-full
              bg-gradient-to-r
              from-pink-400
              to-yellow-500
              text-white
              font-medium
              text-sm
              sm:text-base
              shadow-lg
              shadow-pink-500/20
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-pink-500/40
            "
          >
            View Resume
          </a>
        </div>

        <div className="mt-8 sm:mt-10 flex flex-col items-center">

          <span className="text-gray-500 text-xs mb-2">
            Scroll to explore
          </span>

          <div
            className="
              w-5
              h-8
              border
              border-gray-600
              rounded-full
              flex
              justify-center
              pt-1.5
            "
          >
            <div
              className="
                w-1
                h-2
                bg-gray-400
                rounded-full
                animate-bounce
              "
            ></div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;