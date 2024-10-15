"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Intro: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState("");

  const [text] = useTypewriter({
    words: [
      "Seeking Software Engineer position",
      "Seeking Game Developer position",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  useEffect(() => {
    const images = [
      "/images/lighthouse.jpg",
      "/images/tree.jpg",
      "/images/tree2.jpg",
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setBackgroundImage(randomImage);
  }, []);

  // Function to scroll to the About section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <section
        id="intro"
        className="h-screen flex flex-col justify-center items-center text-white relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center">
          <h1
            style={{ fontSize: "clamp(2.5rem, 8vw, 5.9375rem)" }}
            className="font-normal"
          >
            Hey, I&#39;m Gean
          </h1>
          <h2
            style={{ fontSize: "clamp(1.5rem, 5vw, 3.125rem)" }}
            className="font-normal mb-4"
          >
            {text}
            <Cursor />
          </h2>
        </div>

        {/* Single arrow to scroll to About section */}
        <div className="absolute bottom-10 flex justify-center">
          <div
            className="h-14 w-14 rounded-full border-2 border-white flex items-center justify-center opacity-70 cursor-pointer hover:opacity-100 transition-opacity"
            onClick={scrollToAbout}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
