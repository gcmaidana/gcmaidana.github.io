import React from "react";
import { FaCode, FaGamepad } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="h-screen flex flex-col justify-center items-center text-gray-100"
      style={{
        backgroundColor: "#000000", // Solid black background color
      }}
    >
      {/* About Me Title */}
      <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>

      {/* About Me Description */}
      <p className="text-lg text-center max-w-3xl leading-relaxed mb-8 px-4 md:px-0">
        Hi, I&#39;m Gean! I hold a Computer Science degree and as an aspiring
        Software Engineer and Game Developer, I love tackling creative
        challenges and finding innovative solutions. While I often work with
        Python and C++, I&#39;m always excited to explore new technologies as
        you can tell from my projects! My projects tend to come from the gaming
        world as I find it easier to come up with fun and creative ideas in the
        gaming space, but I&#39;m open to applying my skills in any industry
        where creativity and problem-solving are key.
      </p>

      {/* Skills Icons */}
      <div className="flex items-center justify-center mb-8 space-x-8">
        <div className="flex flex-col items-center text-center">
          <span className="text-4xl text-purple-400 mb-2">
            <FaCode />
          </span>
          <p>Software Development</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="text-4xl text-green-400 mb-2">
            <FaGamepad />
          </span>
          <p>Game Development</p>
        </div>
      </div>

      {/* Get in Touch Button */}
      <div className="text-center mt-4">
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default About;
