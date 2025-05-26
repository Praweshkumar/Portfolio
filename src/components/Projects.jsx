
import React from "react";

const projects = [
  {
    title: "PassManagerApp",
    description:
      "Secure Password manager with encryption auth generator using react Nodejs MongoDb",
     link: "https://majestic-tapioca-5dbbb5.netlify.app/",
  },
  {
    title: "TicTacToe",
    description: "Tic-Tac-Toe game with turn based-play win detection and reset using Javascript Html Css.",
    link: "https://jocular-pixie-e172b8.netlify.app/",
  },

  {
    title: "Portfolio",
    description: "Personal portfolio website built with React and TailwindCSS featuring responsive design and smooth UX.",
    link: "https://github.com/Praweshkumar/Portfolio",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
