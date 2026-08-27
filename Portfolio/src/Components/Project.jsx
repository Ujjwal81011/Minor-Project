import React from "react";

import calculator from "../assets/calculator.jpeg";
import password from "../assets/Password.jpeg";
import batball from "../assets/batball.jpeg";
import flight from "../assets/flight.jpeg";
import IOT from "../assets/IOT.jpeg";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaMicrochip,
  FaWifi,
  FaBolt,
  FaCloud,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

function Project() {
  const projects = [
    {
      img: calculator,
      title: "Simple Calculator",
      description:
        "A clean and responsive calculator built using HTML, CSS and JavaScript.",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
      ],
      link:
        "https://github.com/Ujjwal81011/Minor-Project/blob/main/calculator.html",
    },

    {
      img: password,
      title: "Password Generator",
      description:
        "A secure password generator built with React.js and Tailwind CSS.",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
      ],
      link:
        "https://github.com/Ujjwal81011/React.js/tree/main/05Password",
    },

    {
      img: batball,
      title: "Batball Game",
      description:
        "A fun browser-based batball game created using HTML, CSS and JavaScript.",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
      ],
      link:
        "https://github.com/Ujjwal81011/Minor-Project/blob/main/Batball.html",
    },

    {
      img: flight,
      title: "Flight Booking Website",
      description:
        "A full-stack flight booking website with a responsive frontend, backend APIs and MongoDB database integration.",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Node.js", icon: <FaNodeJs /> },
      ],
      link: "#",
    },

    {
      img: IOT,
      title: "IoT Based Anti-Theft System",
      description:
        "An IoT-based security system using ESP8266, breadboard, ultrasonic sensor and buzzer with real-time monitoring through the Blynk IoT dashboard.",
      skills: [
        { name: "ESP8266", icon: <FaMicrochip /> },
        { name: "Breadboard", icon: <FaMicrochip /> },
        { name: "Buzzer", icon: <FaBolt /> },
        { name: "Ultrasonic Sensor", icon: <FaWifi /> },
        { name: "Blynk IoT", icon: <FaCloud /> },
      ],
      link: "#",
    },
  ];

  return (
    <section
      className="bg-black text-white py-10 sm:py-12 lg:py-14"
      id="projects"
    >
      <div className="container mx-auto px-5 sm:px-8 md:px-12 lg:px-20">

        {/* =========================
            SECTION HEADING
        ========================== */}
        <div className="text-center mb-8 sm:mb-10">

          {/* Small Heading */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <FaCode className="text-pink-400 text-lg sm:text-xl" />

            <span className="text-xs sm:text-sm text-gray-400 tracking-widest uppercase">
              My Work
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 text-transparent bg-clip-text">
              My Projects
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base leading-6">
            Here are some of the projects I've built while learning and
            improving my web development and IoT skills.
          </p>
        </div>

        {/* =========================
            PROJECT GRID
        ========================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group
                relative
                rounded-2xl
                p-[1px]
                bg-gradient-to-r
                from-pink-500/40
                via-purple-500/30
                to-yellow-500/40
                hover:from-pink-500
                hover:via-purple-500
                hover:to-yellow-500
                transition-all
                duration-500
              "
            >

              {/* =========================
                  CARD
              ========================== */}
              <div
                className="
                  h-full
                  bg-gray-950
                  rounded-2xl
                  overflow-hidden
                  flex
                  flex-col
                "
              >

                {/* =========================
                    IMAGE
                ========================== */}
                <div className="relative overflow-hidden">

                  <img
                    src={project.img}
                    alt={project.title}
                    className="
                      w-full
                      h-48
                      sm:h-52
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* Image Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/80
                      via-black/20
                      to-transparent
                      opacity-70
                    "
                  />

                  {/* Project Number */}
                  <div className="absolute top-3 left-3">
                    <span
                      className="
                        bg-black/70
                        backdrop-blur-md
                        border
                        border-white/10
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        text-gray-300
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* GitHub Icon */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      absolute
                      top-3
                      right-3
                      w-9
                      h-9
                      rounded-full
                      bg-black/70
                      backdrop-blur-md
                      border
                      border-white/10
                      flex
                      items-center
                      justify-center
                      text-white
                      opacity-0
                      translate-y-2
                      group-hover:opacity-100
                      group-hover:translate-y-0
                      transition-all
                      duration-300
                      hover:bg-white
                      hover:text-black
                    "
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <FaGithub size={18} />
                  </a>
                </div>

                {/* =========================
                    CONTENT
                ========================== */}
                <div className="p-5 flex flex-col flex-grow">

                  {/* Title */}
                  <h3
                    className="
                      text-xl
                      sm:text-2xl
                      font-bold
                      mb-2
                      bg-gradient-to-r
                      from-green-400
                      to-blue-500
                      text-transparent
                      bg-clip-text
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-6 mb-4">
                    {project.description}
                  </p>

                  {/* =========================
                      SKILLS
                  ========================== */}
                  <div className="flex flex-wrap gap-2 mb-5">

                    {project.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="
                          flex
                          items-center
                          gap-1.5
                          bg-gray-900
                          border
                          border-gray-800
                          hover:border-gray-600
                          px-2.5
                          py-1.5
                          rounded-full
                          text-xs
                          text-gray-300
                          transition-all
                          duration-300
                          hover:-translate-y-1
                        "
                      >
                        <span className="text-sm">
                          {skill.icon}
                        </span>

                        {skill.name}
                      </span>
                    ))}

                  </div>

                  {/* =========================
                      GITHUB BUTTON
                  ========================== */}
                  <div className="mt-auto">

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        w-full
                        flex
                        items-center
                        justify-center
                        gap-2
                        bg-gradient-to-r
                        from-green-400
                        to-blue-500
                        text-black
                        font-semibold
                        px-5
                        py-2.5
                        rounded-xl
                        transition-all
                        duration-300
                        hover:scale-[1.02]
                        hover:shadow-lg
                        hover:shadow-blue-500/20
                      "
                    >
                      <FaGithub size={17} />

                      View on GitHub

                      <FaExternalLinkAlt size={11} />
                    </a>

                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* =========================
            BOTTOM TEXT
        ========================== */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            More projects coming soon...
          </p>
        </div>

      </div>
    </section>
  );
}

export default Project;