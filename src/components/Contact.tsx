import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa"; // LinkedIn and Email icons

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-24 text-gray-100 flex justify-center items-center"
      style={{
        backgroundColor: "#000000",
        minHeight: "100vh",
      }}
    >
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md text-center">
        {/* Bold heading */}
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
          Get in Touch
        </h2>

        {/* Brief message */}
        <p className="text-lg text-gray-700 mb-6">
          Feel free to reach out about job opportunities, collaborations, or ask
          any questions!
        </p>

        {/* Email Button */}
        <div className="mb-4">
          <a
            href="mailto:geanmaidana@outlook.com"
            className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300"
          >
            <span className="mr-2 text-xl">
              <FaEnvelope />
            </span>
            E-mail Me
          </a>
        </div>

        {/* LinkedIn Button */}
        <div>
          <a
            href="https://linkedin.com/in/gean-maidana"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            <span className="mr-2 text-xl">
              <FaLinkedin />
            </span>
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
