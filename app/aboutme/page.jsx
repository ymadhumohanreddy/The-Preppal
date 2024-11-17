"use client"
import React, { useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Spline from '@splinetool/react-spline';

function AboutMe() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => setIsLoading(false);

  return (
    <>
      <section className="flex flex-col items-center justify-center h-[calc(90vh)] overflow-hidden">
        
        {/* 3D Spline Scene */}
        {isLoading && (
          <div className="absolute z-10 flex items-center justify-center w-full h-full bg-white">
            <div className="loader border-4 border-blue-400 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
          </div>
        )}
        <Spline
          scene="https://prod.spline.design/UlThdMSAAnJw9kvW/scene.splinecode"
          onLoad={handleLoad}
          aria-label="3D interactive scene showing personal work"
        />

        {/* Message Section */}
        <br />
        <h2 className="text-xl font-serif mb-4 text-center">
          "Hope we all get placed! All I can say is, <strong>Good luck</strong>, and <strong>Have a Great Day!</strong> ;)"
          <br />
          <a 
            href="mailto:yeddulamadhu6@gmail.com" 
            className='hover:cursor-pointer hover:text-blue-400'
            aria-label="Send an email to Madhu"
          >
            ~Y.Madhu~
          </a>
        </h2>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a 
            href="https://www.linkedin.com/in/madhu-yeddula/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit Madhu's LinkedIn profile"
          >
            <FaLinkedin className="text-blue-400 text-3xl hover:text-blue-700 transition" />
          </a>
          <a 
            href="https://github.com/ymadhumohanreddy" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit Madhu's GitHub profile"
          >
            <FaGithub className="text-blue-400 text-3xl hover:text-gray-600 transition" />
          </a>
          <a 
            href="https://www.instagram.com/madhu_mohanreddy/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit Madhu's Instagram profile"
          >
            <FaInstagram className="text-blue-400 text-3xl transition hover:text-pink-500" />
          </a>
        </div>
        
      </section>
    </>
  );
}

export default AboutMe;
