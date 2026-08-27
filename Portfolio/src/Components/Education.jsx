import React from "react";
import {
  FaGraduationCap,
  FaUniversity,
  FaSchool,
  FaBookOpen,
  FaCalendarAlt,
} from "react-icons/fa";

function Education() {
  const education = [
    {
      icon: <FaUniversity />,
      degree: "Master of Computer Applications",
      institution: "KIET Group of Institutions, Ghaziabad",
      description:
        "Currently pursuing my Master of Computer Applications with a focus on software development, modern technologies, problem-solving, and building real-world applications.",
      batch: "2025 – 2027",
      status: "Currently Pursuing",
      current: true,
    },
    {
      icon: <FaGraduationCap />,
      degree: "Bachelor of Computer Applications",
      institution:
        "Maharana Pratap College of Professional Studies, Kanpur",
      description:
        "Completed my Bachelor of Computer Applications with a strong foundation in programming, web development, databases, and computer science fundamentals.",
      batch: "2022 – 2025",
      status: "Completed",
      current: false,
    },
    {
      icon: <FaBookOpen />,
      degree: "Intermediate",
      institution:
        "Vijay Shankar Inter College, Harpalpur, Hardoi — UP Board",
      description:
        "Completed my Intermediate education under the Uttar Pradesh Board, strengthening my academic foundation and preparing for higher studies in computer applications.",
      batch: "2021 – 2022",
      status: "Completed",
      current: false,
    },
    {
      icon: <FaSchool />,
      degree: "High School",
      institution:
        "Vijay Shankar Inter College, Harpalpur, Hardoi — UP Board",
      description:
        "Completed my High School education under the Uttar Pradesh Board, establishing the foundation for my academic and professional journey.",
      batch: "2019 – 2020",
      status: "Completed",
      current: false,
    },
  ];

  return (
    <section
      id="education"
      className="relative overflow-hidden bg-black text-white pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-[-150px] w-[280px] h-[280px] bg-purple-600/20 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-10 right-[-150px] w-[280px] h-[280px] bg-pink-600/20 rounded-full blur-[120px]"></div>

      <div className="container relative z-10 mx-auto px-5 sm:px-8 md:px-12 lg:px-20">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">

          {/* Small Label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs sm:text-sm mb-4 backdrop-blur-md">
            <FaGraduationCap className="text-yellow-400" />
            My Academic Journey
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
              Education
            </span>
          </h2>

          {/* Gradient Line */}
          <div className="flex justify-center mt-4">
            <div className="h-1 w-16 sm:w-20 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500"></div>
          </div>

          {/* Description */}
          <p className="mt-4 text-gray-400 text-sm sm:text-base lg:text-lg leading-7">
            A journey of continuous learning, technical growth, and
            professional development that has shaped my passion for
            software development.
          </p>
        </div>

        {/* ================= TIMELINE ================= */}
        <div className="relative max-w-6xl mx-auto">

          {/* Center Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-yellow-400 via-pink-500 to-purple-600 opacity-50"></div>

          <div className="space-y-10 md:space-y-14">

            {education.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-center"
              >

                {/* ================= TIMELINE ICON ================= */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-xl border-2 bg-black shadow-xl ${
                      item.current
                        ? "border-yellow-400 text-yellow-400 shadow-yellow-400/20"
                        : "border-pink-500 text-pink-400 shadow-pink-500/20"
                    }`}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* ================= CARD ================= */}
                <div
                  className={`w-full md:w-[46%] ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-10"
                      : "md:ml-auto md:pl-10"
                  }`}
                >
                  <div className="group relative">

                    {/* Gradient Border */}
                    <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 blur-sm transition duration-500"></div>

                    {/* Card */}
                    <div className="relative rounded-3xl bg-gray-900/80 backdrop-blur-xl border border-white/10 p-6 sm:p-7 lg:p-8 transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-gray-900">

                      {/* ================= TOP ================= */}
                      <div className="flex items-start justify-between gap-4">

                        {/* Mobile Icon */}
                        <div
                          className={`md:hidden shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-xl ${
                            item.current
                              ? "bg-yellow-400/10 text-yellow-400 border border-yellow-400/20"
                              : "bg-pink-500/10 text-pink-400 border border-pink-500/20"
                          }`}
                        >
                          {item.icon}
                        </div>

                        {/* Status */}
                        <span
                          className={`ml-auto text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-full border whitespace-nowrap ${
                            item.current
                              ? "text-yellow-400 bg-yellow-400/10 border-yellow-400/20"
                              : "text-green-400 bg-green-400/10 border-green-400/20"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>

                      {/* ================= DEGREE ================= */}
                      <h3 className="mt-6 text-xl sm:text-2xl lg:text-[26px] font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400">
                        {item.degree}
                      </h3>

                      {/* ================= INSTITUTION ================= */}
                      <p className="mt-3 text-gray-200 font-medium text-sm sm:text-base leading-6">
                        {item.institution}
                      </p>

                      {/* ================= DESCRIPTION ================= */}
                      <p className="mt-5 text-gray-400 text-sm sm:text-[15px] leading-7">
                        {item.description}
                      </p>

                      {/* ================= BOTTOM ================= */}
                      <div className="mt-7 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">

                        <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
                          <FaCalendarAlt className="text-pink-400" />
                          <span>Academic Period</span>
                        </div>

                        <span className="font-semibold text-gray-200 text-sm sm:text-base">
                          {item.batch}
                        </span>
                      </div>

                      {/* Hover Bottom Line */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 group-hover:w-3/4 transition-all duration-500"></div>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
            <span className="w-8 h-px bg-gray-700"></span>
            Always Learning & Growing
            <span className="w-8 h-px bg-gray-700"></span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;