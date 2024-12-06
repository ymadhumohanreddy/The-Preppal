"use client";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Spline from "@splinetool/react-spline";

const AboutMe = () => {
  return (
    <>
      <div className="relative h-screen overflow-y-hidden">
        {/* Message and Name */}
        <div className="absolute top-4 right-4 z-10 text-xl font-serif text-right sm:text-xl md:text-center lg:text-left">
          <p className=" sm:text-base sm:mt-1 md:text-lg">
            "Good luck with Placements! All I can say is, <strong>Good luck</strong>, and have a great day! ;) "
          </p>
          <p
            href="mailto:yeddulamadhu6@gmail.com"
            aria-label="Send an email to Madhu"
            className="mt-1 ml-52 text-center sm:text-left   font-serif hover:cursor-pointer hover:text-blue-200"
          >
            ~Y.Madhu Mohan Reddy
          </p>

          {/* Icons just below the name */}
          <div className="mt-3 ml-3 flex justify-center  space-x-6">
            <a
              href="https://www.linkedin.com/in/madhu-yeddula/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Madhu's LinkedIn profile"
            >
              <FaLinkedin className="text-2xl sm:text-xl hover:text-blue-700 transition" />
            </a>
            <a
              href="https://github.com/ymadhumohanreddy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Madhu's GitHub profile"
            >
              <FaGithub className="text-2xl sm:text-xl hover:text-gray-600 transition" />
            </a>
            <a
              href="https://www.instagram.com/madhu_mohanreddy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Madhu's Instagram profile"
            >
              <FaInstagram className="text-2xl sm:text-xl hover:text-pink-500 transition" />
            </a>
          </div>
        </div>

        {/* Spline Component */}
        <Spline scene="https://prod.spline.design/sTUJrn9hWcezm1uG/scene.splinecode" />
      </div>
    </>
  );
};

export default AboutMe;
