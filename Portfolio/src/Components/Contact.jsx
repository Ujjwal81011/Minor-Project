import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <>
      {/* ================= CONTACT SECTION ================= */}
      <section
        id="contact"
        className="relative bg-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto max-w-6xl">

          {/* ================= HEADING ================= */}
          <div className="text-center mb-14">

            <p className="text-green-400 uppercase tracking-[0.3em] text-sm font-semibold mb-3">
              Get In Touch
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold">
              Contact{" "}
              <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text">
                Me
              </span>
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mt-5 rounded-full"></div>

            <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-sm sm:text-base">
              Have a project in mind or want to discuss development,
              Full-Stack technologies, or IoT? Feel free to reach out.
            </p>

          </div>

          {/* ================= MAIN CONTENT ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

            {/* ================= LEFT SIDE ================= */}
            <div className="flex flex-col justify-center">

              <div className="mb-8">

                <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                  Let's{" "}
                  <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
                    talk.
                  </span>
                </h3>

                <p className="text-gray-400 leading-relaxed max-w-lg">
                  I'm always open to discussing new projects, creative ideas,
                  or opportunities to be part of your vision. Let's build
                  something amazing together.
                </p>

              </div>

              {/* ================= CONTACT CARDS ================= */}
              <div className="space-y-4">

                {/* EMAIL */}
                <a
                  href="mailto:ujjwalmishra3860@gmail.com"
                  className="group flex items-center gap-5 p-5 rounded-2xl
                  bg-gray-900/60 backdrop-blur-md
                  border border-gray-800
                  hover:border-green-400/50
                  hover:bg-gray-900
                  transition-all duration-300"
                >

                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-xl
                    bg-green-400/10 text-green-400
                    group-hover:bg-green-400 group-hover:text-black
                    transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      Email
                    </p>

                    <p className="text-sm sm:text-base font-medium break-all">
                      ujjwalmishra3860@gmail.com
                    </p>
                  </div>

                </a>

                {/* PHONE */}
                <a
                  href="tel:+919936960393"
                  className="group flex items-center gap-5 p-5 rounded-2xl
                  bg-gray-900/60 backdrop-blur-md
                  border border-gray-800
                  hover:border-blue-400/50
                  hover:bg-gray-900
                  transition-all duration-300"
                >

                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-xl
                    bg-blue-400/10 text-blue-400
                    group-hover:bg-blue-400 group-hover:text-black
                    transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faPhone} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      Phone
                    </p>

                    <p className="text-sm sm:text-base font-medium">
                      +91 9936960393
                    </p>
                  </div>

                </a>

                {/* LOCATION */}
                <a
                  href="https://maps.app.goo.gl/k9fLzQvBunXCCgqH7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 p-5 rounded-2xl
                  bg-gray-900/60 backdrop-blur-md
                  border border-gray-800
                  hover:border-pink-400/50
                  hover:bg-gray-900
                  transition-all duration-300"
                >

                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-xl
                    bg-pink-400/10 text-pink-400
                    group-hover:bg-pink-400 group-hover:text-black
                    transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      Location
                    </p>

                    <p className="text-sm sm:text-base font-medium">
                      Muradnagar, Ghaziabad, India
                    </p>
                  </div>

                </a>

              </div>

              {/* ================= SOCIAL ICONS ================= */}
              <div className="flex gap-4 mt-8">

                {/* GitHub */}
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-11 h-11 flex items-center justify-center
                  rounded-full bg-gray-900 border border-gray-700
                  text-gray-400
                  hover:border-green-400
                  hover:text-green-400
                  hover:-translate-y-1
                  transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 flex items-center justify-center
                  rounded-full bg-gray-900 border border-gray-700
                  text-gray-400
                  hover:border-blue-400
                  hover:text-blue-400
                  hover:-translate-y-1
                  transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>

              </div>

            </div>

            {/* ================= RIGHT SIDE FORM ================= */}
            <div className="relative">

              {/* Glow */}
              <div
                className="absolute -inset-1
                bg-gradient-to-r from-green-400/30
                via-cyan-400/20
                to-blue-500/30
                rounded-3xl blur-xl"
              ></div>

              {/* Form Card */}
              <div
                className="relative
                bg-gray-900/80
                backdrop-blur-xl
                border border-gray-800
                rounded-3xl
                p-6 sm:p-8 lg:p-10"
              >

                <h3 className="text-2xl font-bold mb-2">
                  Send me a message
                </h3>

                <p className="text-gray-500 text-sm mb-8">
                  I'll get back to you as soon as possible.
                </p>

                <form className="space-y-6">

                  {/* NAME */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                      className="w-full px-4 py-3 rounded-xl
                      bg-black/50
                      border border-gray-700
                      text-white
                      placeholder-gray-600
                      focus:outline-none
                      focus:border-green-400
                      focus:ring-1
                      focus:ring-green-400
                      transition-all duration-300"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3 rounded-xl
                      bg-black/50
                      border border-gray-700
                      text-white
                      placeholder-gray-600
                      focus:outline-none
                      focus:border-green-400
                      focus:ring-1
                      focus:ring-green-400
                      transition-all duration-300"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Write your message..."
                      required
                      className="w-full px-4 py-3 rounded-xl
                      bg-black/50
                      border border-gray-700
                      text-white
                      placeholder-gray-600
                      resize-none
                      focus:outline-none
                      focus:border-green-400
                      focus:ring-1
                      focus:ring-green-400
                      transition-all duration-300"
                    ></textarea>
                  </div>

                  {/* SEND BUTTON */}
                  <button
                    type="submit"
                    className="group w-full flex items-center
                    justify-center gap-3
                    bg-gradient-to-r
                    from-green-400
                    via-cyan-400
                    to-blue-500
                    text-black
                    font-bold
                    py-3.5 px-6
                    rounded-xl
                    hover:scale-[1.02]
                    hover:shadow-lg
                    hover:shadow-green-400/20
                    active:scale-[0.98]
                    transition-all duration-300"
                  >
                    Send Message

                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      className="group-hover:translate-x-1
                      group-hover:-translate-y-1
                      transition-transform duration-300"
                    />
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= COMPACT FOOTER ================= */}
      <footer className="bg-black border-t border-gray-800 text-gray-400">

        <div className="container mx-auto max-w-6xl px-4 py-3">

          {/* TOP FOOTER */}
          <div
            className="flex flex-col md:flex-row
            items-center justify-between
            gap-4"
          >

            {/* Logo / Name */}
            <div className="text-center md:text-left">

              <h2 className="text-lg font-bold text-white">
                Ujjwal{" "}
                <span
                  className="bg-gradient-to-r
                  from-green-400
                  to-blue-500
                  text-transparent
                  bg-clip-text"
                >
                  Mishra
                </span>
              </h2>

              <p className="text-xs text-gray-500 mt-0.5">
                Full Stack Developer • IoT Enthusiast
              </p>

            </div>

            {/* Navigation */}
            <div className="flex flex-wrap justify-center gap-4 text-xs">

              <a
                href="#home"
                className="hover:text-green-400
                transition-colors duration-300"
              >
                Home
              </a>

              <a
                href="#about"
                className="hover:text-green-400
                transition-colors duration-300"
              >
                About
              </a>

              <a
                href="#projects"
                className="hover:text-green-400
                transition-colors duration-300"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="hover:text-green-400
                transition-colors duration-300"
              >
                Contact
              </a>

            </div>

            {/* Social Icons */}
            <div className="flex gap-2">

              {/* GitHub */}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8
                flex items-center justify-center
                rounded-full
                bg-gray-900
                border border-gray-700
                hover:border-green-400
                hover:text-green-400
                hover:-translate-y-1
                transition-all duration-300"
              >
                <FontAwesomeIcon icon={faGithub} size="sm" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8
                flex items-center justify-center
                rounded-full
                bg-gray-900
                border border-gray-700
                hover:border-blue-400
                hover:text-blue-400
                hover:-translate-y-1
                transition-all duration-300"
              >
                <FontAwesomeIcon icon={faLinkedin} size="sm" />
              </a>

            </div>

          </div>

          {/* DIVIDER */}
          <div className="border-t border-gray-800 my-3"></div>

          {/* BOTTOM FOOTER */}
          <div
            className="flex flex-col sm:flex-row
            items-center justify-between
            gap-2 text-xs"
          >

            <p className="text-gray-500 text-center sm:text-left">
              © {new Date().getFullYear()} Ujjwal Mishra. All rights reserved.
            </p>

            <p className="text-gray-600 text-center">
              Built with{" "}
              <span className="text-green-400">
                React
              </span>{" "}
              &{" "}
              <span className="text-blue-400">
                Tailwind CSS
              </span>
            </p>

          </div>

        </div>

      </footer>
    </>
  );
}

export default Contact;