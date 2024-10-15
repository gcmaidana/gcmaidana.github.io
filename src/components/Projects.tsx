import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  imageUrl,
  technologies,
  githubUrl,
}) => {
  return (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-white shadow-lg rounded-lg overflow-hidden p-6 w-full transform transition-transform duration-300 hover:scale-105 flex flex-col h-full"
    >
      {/* Project Image */}
      {/* Project Image */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-contain transition-filter duration-300 group-hover:blur-md"
        />
      </div>

      {/* Project Title */}
      <h3 className="text-2xl font-bold text-black mt-4 transition-filter duration-300 group-hover:blur-md">
        {title}
      </h3>

      {/* Project Description */}
      <p className="text-gray-700 mt-2 flex-grow mb-6 transition-filter duration-300 group-hover:blur-md">
        {description}
      </p>

      {/* Technology Tags - aligned to the bottom */}
      <div className="flex flex-wrap gap-2 mt-auto transition-filter duration-300 group-hover:blur-md">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-black text-white border border-neon-purple rounded-full shadow-sm"
            style={{
              borderColor: "#9b00ff", // Neon purple outline
              color: "#fff", // White text
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* GitHub Icon (on hover) - No blur */}
      <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <FaGithub className="text-4xl text-black" />
      </div>
    </a>
  );
};

const Projects: React.FC = () => {
  const projectList = [
    {
      title: "VisionWatch",
      description:
        "VisionWatch is an application that automatically detects wins and losses in a game of Overwatch using OpenCV for image pre-processing and Tesseract for Optical Character Recognition (OCR).",
      imageUrl:
        "https://raw.githubusercontent.com/gcmaidana/Visionwatch/refs/heads/master/images/ocr_defeat.gif", // Replace with your actual image URLs
      technologies: ["Python", "OpenCV", "Tesseract"],
      githubUrl: "https://github.com/gcmaidana/Visionwatch",
    },
    {
      title: "image2PDF",
      description:
        "image2PDF is an Android app that converts up to 10 images that a user takes or uploads into a single PDF file.",
      imageUrl:
        "https://raw.githubusercontent.com/gcmaidana/image2PDF/refs/heads/master/screenshots/uploadedimages1.jpg", // Replace with your actual image URLs
      technologies: ["Java", "XML"],
      githubUrl: "https://github.com/gcmaidana/image2PDF",
    },
    {
      title: "TikTok Auto Scroller",
      description:
        "This project is a Chrome extension for TikTok that auto-scrolls to the next video after the current video ends.",
      imageUrl:
        "https://raw.githubusercontent.com/gcmaidana/TikTok-Auto-Scroller/refs/heads/main/tiktokSS.jpg", // Replace with your actual image URLs
      technologies: ["JavaScript"],
      githubUrl: "https://github.com/gcmaidana/TikTok-Auto-Scroller",
    },
    {
      title: "Escape The Arena",
      description:
        "Escape The Arena is a simple horror game I created in Unreal Engine 5 to better understand the engine.",
      imageUrl:
        "https://raw.githubusercontent.com/gcmaidana/EscapeTheArena/refs/heads/main/img/enemy.png", // Replace with your actual image URLs
      technologies: ["Unreal Engine 5"],
      githubUrl: "https://github.com/gcmaidana/EscapeTheArena",
    },
    {
      title: "Seminar Paper",
      description:
        "This is a paper from a seminar course during my undergrad. The course has students take a deep dive on a particular topic. My chosen topic was " +
        "Natural Language Understanding/Translation. With how important AI has become since I finished my undergrad, I believe this paper aged well and " +
        "it's insightful on how things like Apple's Siri and Google's Google Translate work on a deep level.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/db/Google_Translate_Icon.png", // Replace with your actual image URLs
      technologies: ["Microsoft Word"],
      githubUrl:
        "https://github.com/gcmaidana/Seminar-Paper/blob/main/maidanadollanartegean_seminarpaper_finalversion.pdf",
    },
    {
      title: "BAMSS",
      description:
        "Basketball Assistant with Metric Statistics and Scoreboard (BAMSS) is a program built during my Intermediate Software Engineering course.",
      imageUrl:
        "https://raw.githubusercontent.com/gcmaidana/BAMSS/refs/heads/main/premium.png", // Replace with your actual image URLs
      technologies: ["C++", "MySQL", ".NET Framework"],
      githubUrl: "https://github.com/your-repo-5",
    },
    {
      title: "Tetris",
      description:
        "Re-creation of the popular game Tetris, built in my Software Reengineering and Maintenance course.",
      imageUrl:
        "https://raw.githubusercontent.com/gcmaidana/Tetris/refs/heads/main/d480be9617a7c815e2cf51df0c04ee21.png", // Replace with your actual image URLs
      technologies: ["Java", "JavaFX"],
      githubUrl: "https://github.com/gcmaidana/BAMSS",
    },
    {
      title: "Twilight",
      description:
        "Twilight is a game created as a group project for my Intro to Software Engineering class.",
      imageUrl:
        "https://raw.githubusercontent.com/gcmaidana/twilight-game/refs/heads/master/2b1b185858d7cd6a89a3cb0b5c1cbcbd.png", // Replace with your actual image URLs
      technologies: ["Java", "LibGDX"],
      githubUrl: "https://github.com/gcmaidana/twilight-game",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 text-gray-100"
      style={{
        backgroundColor: "#000000",
        minHeight: "100vh", // Full viewport height
        paddingBottom: "2rem", // Add padding to ensure the section is large enough
      }}
    >
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

      {/* Grid layout with reduced gaps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 container mx-auto px-4">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
