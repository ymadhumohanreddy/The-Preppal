import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Header from '../dashboard/_components/Header'; // Make sure to import your Header component

function AboutMe() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-[calc(90vh)] overflow-hidden"> {/* Prevents vertical overflow */}
        <h2 className="text-xl font-serif mb-4 text-center"> 
          "Hope we all get placed! All I can say is, <strong>Good luck</strong>, and <strong>Have a great day!</strong> ;)"
        </h2>
        <div className="flex space-x-4">
          <a 
            href="https://www.linkedin.com/in/madhu-yeddula/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-blue-400 text-3xl hover:text-blue-700 transition" />
          </a>
          <a 
            href="https://github.com/ymadhumohanreddy" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub className="text-blue-400 text-3xl hover:text-gray-600 transition" />
          </a>
          <a 
            href="https://www.instagram.com/madhu_mohanreddy/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-blue-400 text-3xl transition hover:text-pink-500" />
          </a>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
