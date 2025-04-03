import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase } from "react-icons/fa";


const Skills = () => {

  const skill = [
  { name: "React", icon: <FaReact className="text-blue-500 text-4xl" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-green-700 text-4xl" /> },
];
  return (
    <>
      <section id="skills" className="py-16 bg-white-900 text-black text-center">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
        {skill.map((skill, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center gap-2 p-4 rounded-lg transition-transform duration-300 hover:scale-110 hover:bg-gray-400"
          >
            {skill.icon}
            <span className="text-lg font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default Skills


