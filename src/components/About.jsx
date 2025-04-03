import React from "react";
import myProfile from "../assets/myProfile.png"

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-black text-center p-6">
      <div className="max-w-3xl">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <img 
          src={myProfile}
          className="w-60 h-60 rounded-2xl mx-auto mb-4 border-none bg-none" 
        />
        <p className="text-lg mb-4">
          I'm a passionate developer with a strong interest in building efficient and scalable web applications. I specialize in frontend and backend technologies, ensuring seamless user experiences.
        </p>
        <p className="text-lg">
          With a keen eye for design and performance optimization, I am always eager to learn and adapt to new technologies. Let's build something amazing together!
        </p>
      </div>
    </section>
  );
};

export default About;
