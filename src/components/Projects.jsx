import React from 'react';

const projects = [
    { title: "Portfolio Website", description: "A personal website to showcase my skills and projects.", link: "https://github.com/Praweshkumar/TickTackToe" },
    { title: "E-commerce App", description: "A full-stack online store using React and Node.js.", link: "https://www.geeksforgeeks.org/" },
    { title: "Chat Application", description: "A real-time chat app built with WebSockets.", link: "#" }
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
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
