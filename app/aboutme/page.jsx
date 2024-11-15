import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Header from '../dashboard/_components/Header'; // Make sure to import your Header component
import Spline from '@splinetool/react-spline';

function AboutMe() {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-[calc(90vh)] overflow-hidden">
        
        <Spline 
          scene="https://prod.spline.design/UlThdMSAAnJw9kvW/scene.splinecode" 
          aria-label="3D interactive scene showing personal work" 
        />
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
