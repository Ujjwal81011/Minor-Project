import React from "react";
import Photo from "../assets/ujjwal.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-[#050505]
        text-white
        px-5
        sm:px-8
        md:px-10
        lg:px-12
        xl:px-20
        pt-24
        sm:pt-28
        md:pt-24
        lg:pt-24
        pb-10
        sm:pb-12
        md:pb-14
        lg:pb-16
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Green Glow */}

        <div
          className="
            absolute
            -top-32
            -left-32
            w-72
            h-72
            sm:w-96
            sm:h-96
            bg-green-500/10
            rounded-full
            blur-[100px]
          "
        />

        {/* Blue Glow */}

        <div
          className="
            absolute
            top-[35%]
            -right-40
            w-80
            h-80
            sm:w-[500px]
            sm:h-[500px]
            bg-blue-600/10
            rounded-full
            blur-[120px]
          "
        />

        {/* Cyan Glow */}

        <div
          className="
            absolute
            bottom-0
            left-1/3
            w-64
            h-64
            sm:w-96
            sm:h-96
            bg-cyan-500/5
            rounded-full
            blur-[100px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
            bg-[size:50px_50px]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-2
          items-center
          gap-12
          sm:gap-14
          md:gap-16
          lg:gap-12
          xl:gap-20
        "
      >
        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}

        <div
          className="
            order-2
            lg:order-1
            text-center
            lg:text-left
          "
        >
          {/* Available Badge */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-3
              py-1.5
              mb-5
              sm:mb-6
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-md
              text-xs
              sm:text-sm
              text-gray-300
            "
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  rounded-full
                  bg-green-400
                  opacity-75
                  animate-ping
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-green-400
                "
              />
            </span>

            Available for opportunities
          </div>

          {/* Greeting */}

          <p
            className="
              text-green-400
              text-xs
              sm:text-sm
              font-medium
              uppercase
              tracking-[3px]
              mb-3
            "
          >
            Hello, I'm
          </p>

          {/* Name */}

          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-6xl
              xl:text-7xl
              font-extrabold
              tracking-tight
              leading-[1.05]
            "
          >
            Ujjwal
            <br />

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
              Mishra.
            </span>
          </h1>

          {/* Job Title */}

          <div
            className="
              mt-5
              flex
              items-center
              justify-center
              lg:justify-start
              gap-2
              text-lg
              sm:text-xl
              md:text-2xl
              font-semibold
              text-gray-200
            "
          >
            <span className="text-green-400">&lt;</span>

            Full Stack Developer

            <span className="text-blue-400">/&gt;</span>
          </div>

          {/* Description */}

          <p
            className="
              mt-5
              max-w-xl
              mx-auto
              lg:mx-0
              text-sm
              sm:text-base
              md:text-lg
              leading-7
              text-gray-400
            "
          >
            I build modern, responsive and scalable web applications
            that combine clean design with powerful technology.
          </p>

          {/* =====================================================
              BUTTONS
          ====================================================== */}

          <div
            className="
              mt-7
              sm:mt-8
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              lg:justify-start
              gap-3
              sm:gap-4
            "
          >
            {/* Contact Button */}

            <a
              href="#contact"
              className="
                group
                w-full
                sm:w-auto
                min-w-[150px]
                px-7
                py-3
                rounded-xl
                bg-gradient-to-r
                from-green-400
                to-blue-500
                font-semibold
                text-sm
                sm:text-base
                shadow-lg
                shadow-green-500/10
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                hover:shadow-blue-500/20
                active:scale-95
                text-center
              "
            >
              Contact Me

              <span
                className="
                  inline-block
                  ml-2
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </a>

            {/* Resume Button */}

            <a
              href="https://drive.google.com/file/d/12GOWWmZte7LF2u6ih0lMrEPehiHdQlZ9/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full
                sm:w-auto
                min-w-[150px]
                px-7
                py-3
                rounded-xl
                border
                border-white/15
                bg-white/[0.04]
                backdrop-blur-md
                text-gray-200
                font-semibold
                text-sm
                sm:text-base
                transition-all
                duration-300
                hover:bg-white/[0.08]
                hover:border-white/30
                hover:-translate-y-1
                active:scale-95
                text-center
              "
            >
              View Resume
            </a>
          </div>

          {/* =====================================================
              FEATURES
          ====================================================== */}

          <div
            className="
              mt-8
              sm:mt-10
              flex
              flex-wrap
              items-center
              justify-center
              lg:justify-start
              gap-x-5
              sm:gap-x-6
              gap-y-3
              text-[10px]
              sm:text-xs
              md:text-sm
              text-gray-500
            "
          >
            <span className="flex items-center gap-2">
              <span className="text-green-400">✦</span>
              Clean Code
            </span>

            <span className="hidden sm:block text-gray-700">
              |
            </span>

            <span className="flex items-center gap-2">
              <span className="text-cyan-400">✦</span>
              Responsive Design
            </span>

            <span className="hidden sm:block text-gray-700">
              |
            </span>

            <span className="flex items-center gap-2">
              <span className="text-blue-400">✦</span>
              Modern Tech
            </span>
          </div>
        </div>

        {/* =====================================================
            RIGHT PROFILE CARD
        ====================================================== */}

        <div
          className="
            order-1
            lg:order-2
            flex
            justify-center
            lg:justify-end
          "
        >
          <div
            className="
              relative
              w-[280px]
              h-[360px]
              sm:w-[340px]
              sm:h-[420px]
              md:w-[390px]
              md:h-[450px]
              lg:w-[400px]
              lg:h-[460px]
              xl:w-[430px]
              xl:h-[490px]
            "
          >
            {/* =================================================
                OUTER GLOW
            ================================================== */}

            <div
              className="
                absolute
                inset-4
                rounded-[40px]
                bg-gradient-to-br
                from-green-400/20
                via-cyan-400/10
                to-blue-500/20
                blur-3xl
              "
            />

            {/* =================================================
                DECORATIVE CIRCLE
            ================================================== */}

            <div
              className="
                absolute
                -top-5
                -right-3
                sm:-right-5
                w-20
                h-20
                sm:w-28
                sm:h-28
                rounded-full
                border
                border-green-400/20
              "
            />

            {/* =================================================
                PROFILE CARD
            ================================================== */}

            <div
              className="
                absolute
                inset-5
                sm:inset-6
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.035]
                backdrop-blur-xl
                shadow-2xl
                overflow-hidden
              "
            >
              {/* Top Gradient */}

              <div
                className="
                  absolute
                  top-0
                  left-0
                  right-0
                  h-36
                  bg-gradient-to-b
                  from-green-400/10
                  to-transparent
                "
              />

              {/* =================================================
                  PROFILE IMAGE
              ================================================== */}

              <div
                className="
                  absolute
                  top-6
                  sm:top-7
                  md:top-8
                  left-1/2
                  -translate-x-1/2
                  w-40
                  h-40
                  sm:w-48
                  sm:h-48
                  md:w-56
                  md:h-56
                  lg:w-60
                  lg:h-60
                  rounded-full
                  p-[3px]
                  bg-gradient-to-br
                  from-green-400
                  via-cyan-400
                  to-blue-500
                  shadow-2xl
                  shadow-cyan-500/20
                "
              >
                <img
                  src={Photo}
                  alt="Ujjwal Mishra"
                  className="
                    w-full
                    h-full
                    rounded-full
                    object-cover
                    border-4
                    border-[#080808]
                  "
                />
              </div>

              {/* =================================================
                  CARD INFORMATION
              ================================================== */}

              <div
                className="
                  absolute
                  left-4
                  right-4
                  bottom-5
                  sm:left-6
                  sm:right-6
                  sm:bottom-6
                  text-center
                  pt-4
                  sm:pt-5
                  md:pt-6
                "
              >
                {/* Name */}

                <p
                  className="
                    text-lg
                    sm:text-xl
                    font-bold
                    leading-tight
                  "
                >
                  Ujjwal Mishra
                </p>

                {/* Role */}

                <p
                  className="
                    mt-2
                    text-xs
                    sm:text-sm
                    text-gray-400
                  "
                >
                  Full Stack Developer
                </p>

                {/* Tech Tags */}

                <div
                  className="
                    mt-3
                    flex
                    flex-wrap
                    justify-center
                    gap-1.5
                    sm:gap-2
                  "
                >
                  <span
                    className="
                      px-2
                      sm:px-2.5
                      py-1
                      rounded-full
                      bg-green-400/10
                      border
                      border-green-400/20
                      text-[9px]
                      sm:text-xs
                      text-green-400
                    "
                  >
                    React
                  </span>

                  <span
                    className="
                      px-2
                      sm:px-2.5
                      py-1
                      rounded-full
                      bg-blue-400/10
                      border
                      border-blue-400/20
                      text-[9px]
                      sm:text-xs
                      text-blue-400
                    "
                  >
                    Node.js
                  </span>

                  <span
                    className="
                      px-2
                      sm:px-2.5
                      py-1
                      rounded-full
                      bg-cyan-400/10
                      border
                      border-cyan-400/20
                      text-[9px]
                      sm:text-xs
                      text-cyan-400
                    "
                  >
                    JavaScript
                  </span>
                </div>
              </div>
            </div>

            {/* =================================================
                FLOATING EXPERIENCE CARD
            ================================================== */}

            <div
              className="
                absolute
                top-5
                -left-1
                sm:top-10
                sm:-left-6
                px-3
                sm:px-4
                py-2
                rounded-xl
                border
                border-white/10
                bg-[#101010]/95
                backdrop-blur-xl
                shadow-xl
                animate-[float_4s_ease-in-out_infinite]
              "
            >
              <p
                className="
                  text-[8px]
                  sm:text-[10px]
                  text-gray-500
                "
              >
                EXPERIENCE
              </p>

              <p
                className="
                  text-xs
                  sm:text-sm
                  font-bold
                  text-white
                "
              >
                Web Development
              </p>
            </div>

            {/* =================================================
                FLOATING MODERN UI CARD
            ================================================== */}

            <div
              className="
                absolute
                bottom-10
                -right-1
                sm:bottom-16
                sm:-right-5
                px-3
                sm:px-4
                py-2
                rounded-xl
                border
                border-white/10
                bg-[#101010]/95
                backdrop-blur-xl
                shadow-xl
              "
            >
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg">
                  ⚡
                </span>

                <div>
                  <p
                    className="
                      text-[8px]
                      sm:text-[10px]
                      text-gray-500
                    "
                  >
                    FOCUS
                  </p>

                  <p
                    className="
                      text-[10px]
                      sm:text-sm
                      font-semibold
                    "
                  >
                    Modern UI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR

          This is NOT absolute positioned, so it won't create
          the huge desktop gap from the previous version.
      ====================================================== */}

      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          justify-center
          mt-8
          sm:mt-10
          md:mt-12
          lg:mt-8
        "
      >
        <span
          className="
            text-[9px]
            sm:text-[10px]
            uppercase
            tracking-[3px]
            text-gray-600
            mb-2
          "
        >
          Scroll
        </span>

        <div
          className="
            w-5
            h-8
            sm:w-6
            sm:h-9
            rounded-full
            border
            border-gray-700
            bg-white/[0.02]
            flex
            justify-center
            pt-1.5
            shadow-[0_0_15px_rgba(34,211,238,0.05)]
          "
        >
          <div
            className="
              w-1
              h-2
              sm:h-2.5
              rounded-full
              bg-gradient-to-b
              from-green-400
              to-cyan-400
              animate-bounce
            "
          />
        </div>
      </div>

      {/* =====================================================
          FLOAT ANIMATION
      ====================================================== */}

      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;