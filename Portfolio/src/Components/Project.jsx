import React from 'react';
import calculator from "../assets/calculator.jpeg";
import password from "../assets/Password.jpeg"; 
import batball from "../assets/batball.jpeg";

function Project() {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-yellow-500 text-transparent bg-clip-text">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Project Card */}
          {[{
            img: calculator,
            title: "Simple Calculator",
            skills: "HTML, CSS, JavaScript",
            link: "https://github.com/Ujjwal81011/Minor-Project/blob/main/calculator.html"
          }, {
            img: password,
            title: "Pass. Generator",
            skills: "HTML, Tailwind CSS, JavaScript, React.js",
            link: "https://github.com/Ujjwal81011/React.js/tree/main/05Password"
          }, {
            img: batball,
            title: "Batball Game",
            skills: "HTML, CSS, JavaScript",
            link: "https://github.com/Ujjwal81011/Minor-Project/blob/main/Batball.html"
          }].map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img src={project.img} alt={project.title} className="w-full h-52 object-cover" />
              <div className="p-6">
                <h2 className="text-center font-bold text-2xl mb-4 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
                  {project.title}
                </h2>
                <p className="text-gray-300 text-sm mb-4"><strong>Using Skills:</strong> {project.skills}</p>
                <div className="text-center">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-5 py-2 rounded-full inline-block transform transition-transform duration-300 hover:scale-110"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        
        </div>
      </div>
    </div>
  );
}

export default Project;
