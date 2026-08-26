import React from "react";
import image from "../assets/ujjwal.jpg";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

function About() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-orange-500" />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-blue-500" />,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400" />,
    },
    {
      name: "React.js",
      icon: <FaReact className="text-cyan-400" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500" />,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-300" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-400" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400" />,
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black text-white py-16 sm:py-20 lg:py-24"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-[-100px] sm:left-0 w-64 h-64 sm:w-72 sm:h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="absolute bottom-0 right-[-100px] sm:right-0 w-64 h-64 sm:w-72 sm:h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Container */}
      <div className="container mx-auto px-5 sm:px-8 md:px-12 lg:px-20 xl:px-24 relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-blue-400 uppercase tracking-[3px] sm:tracking-[4px] text-xs sm:text-sm mb-3">
            Get To Know Me
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Me
            </span>
          </h2>

          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 sm:mt-5 rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 sm:gap-12 lg:gap-16">

          {/* Profile Image */}
          <div className="relative group flex-shrink-0 w-full flex justify-center lg:w-auto">

            {/* Gradient Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-60 group-hover:opacity-90 transition duration-500"></div>

            <div className="relative bg-black rounded-2xl p-2">
              <img
                src={image}
                alt="Ujjwal Mishra"
                className="
                  w-56 h-64
                  xs:w-64 xs:h-72
                  sm:w-72 sm:h-80
                  md:w-80 md:h-96
                  lg:w-72 lg:h-80
                  xl:w-80 xl:h-96
                  max-w-full
                  rounded-xl
                  object-cover
                "
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 w-full min-w-0">

            {/* Title */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-5 text-center lg:text-left">
              Full Stack Web Developer
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg leading-7 sm:leading-8 mb-8 sm:mb-10 text-center lg:text-left">
              I am a passionate Full Stack Web Developer focused on building
              modern, responsive, and user-friendly web applications. I work
              across both frontend and backend development using technologies
              like HTML, CSS, JavaScript, React.js, Node.js, Express.js, and
              MongoDB.
            </p>

            {/* Skills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-5">

              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="
                    min-h-[90px]
                    sm:h-24
                    w-full
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-2
                    px-2
                    bg-gray-900/70
                    border
                    border-gray-800
                    rounded-xl
                    hover:border-purple-500
                    hover:bg-gray-800/70
                    hover:-translate-y-1
                    hover:shadow-lg
                    hover:shadow-purple-500/10
                    transition-all
                    duration-300
                  "
                >
                  {/* Icon */}
                  <div className="text-2xl sm:text-3xl flex items-center justify-center">
                    {skill.icon}
                  </div>

                  {/* Skill Name */}
                  <span className="font-medium text-gray-200 text-xs sm:text-sm md:text-base text-center">
                    {skill.name}
                  </span>
                </div>
              ))}

            </div>

            {/* Stats */}
            <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

              {/* Experience */}
              <div
                className="
                  bg-gray-900/70
                  border
                  border-gray-800
                  rounded-xl
                  p-5 sm:p-6
                  text-center
                  hover:border-purple-500
                  hover:-translate-y-1
                  transition
                  duration-300
                "
              >
                <h3 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                  1+
                </h3>

                <p className="text-gray-400 mt-2 text-sm sm:text-base">
                  Years Experience
                </p>
              </div>

              {/* Projects */}
              <div
                className="
                  bg-gray-900/70
                  border
                  border-gray-800
                  rounded-xl
                  p-5 sm:p-6
                  text-center
                  hover:border-purple-500
                  hover:-translate-y-1
                  transition
                  duration-300
                "
              >
                <h3 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                  5+
                </h3>

                <p className="text-gray-400 mt-2 text-sm sm:text-base">
                  Projects Completed
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;