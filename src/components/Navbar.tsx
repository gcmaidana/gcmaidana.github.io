import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Currently visible section:", entry.target.id); // Debugging log to confirm visibility
            setActiveSection(entry.target.id); // Ensure correct section is detected
          }
        });
      },
      {
        threshold: 0.1, // Lower to 0.1 to make it more sensitive
        rootMargin: "0px 0px -25% 0px", // Ensure more visibility for 'projects'
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 backdrop-blur-lg">
      <ul className="flex justify-center space-x-6">
        <li>
          <a
            href="#intro"
            className={`${
              activeSection === "intro" ? "text-white" : "text-gray-400"
            } relative px-3 py-1 transition-colors duration-300 hover:text-orange-500`}
          >
            Intro
            <span
              className={`absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-purple-500 transition-transform duration-300 ${
                activeSection === "intro" ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={`${
              activeSection === "about" ? "text-white" : "text-gray-400"
            } relative px-3 py-1 transition-colors duration-300 hover:text-orange-500`}
          >
            About
            <span
              className={`absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-purple-500 transition-transform duration-300 ${
                activeSection === "about" ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={`${
              activeSection === "projects" ? "text-white" : "text-gray-400"
            } relative px-3 py-1 transition-colors duration-300 hover:text-orange-500`}
          >
            Projects
            <span
              className={`absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-purple-500 transition-transform duration-300 ${
                activeSection === "projects" ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`${
              activeSection === "contact" ? "text-white" : "text-gray-400"
            } relative px-3 py-1 transition-colors duration-300 hover:text-orange-500`}
          >
            Contact
            <span
              className={`absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-purple-500 transition-transform duration-300 ${
                activeSection === "contact" ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
