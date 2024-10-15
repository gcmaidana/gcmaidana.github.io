"use client";

import React from "react";
import Intro from "../components/Intro";
import About from "../components/About"; // Import About section
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home: React.FC = () => {
  return (
    <div className="font-quicksand">
      <Intro /> {/* Intro section */}
      <About /> {/* New About section */}
      <Projects /> {/* Projects section */}
      <Contact /> {/* Contact section */}
    </div>
  );
};

export default Home;
