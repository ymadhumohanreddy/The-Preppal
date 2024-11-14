"use client";
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";
import { AtomIcon, Edit, Share2 } from "lucide-react";
import Spline from '@splinetool/react-spline';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const titles = [
    "Your Personal AI Interview Coach",
    "Master Your Interview with AI",
    "Elevate Your Interview Game with AI",
    "Ace Your Next Interview with PrepPal",
    "Unlock Your Interview Potential with AI",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 70; // Adjust typing speed here
  const pauseDuration = 500; // Pause between full title and start of delete

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    
    if (!isDeleting && displayedText === currentTitle) {
      // Pause before starting to delete
      setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayedText === "") {
      // Move to the next title after delete
      setIsDeleting(false);
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    } else {
      // Typing or deleting characters
      const timeout = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? prev.slice(0, prev.length - 1)
            : currentTitle.slice(0, prev.length + 1)
        );
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [displayedText, isDeleting, currentTitleIndex]);

  return (
    <div>
     
      <section className="z-50">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <a
            href="#bottom"
            className="font-serif inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-white bg-blue-400 rounded-full dark:bg-blue-600 dark:text-white hover:bg-blue-600 dark:hover:bg-blue-700"
            role="alert"
          >
            <span className="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3 dark:text-black ">
              Tip
            </span>
            <span className="font-serif text-sm font-medium">Scroll Down</span>
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white font-serif">
            {displayedText}
          </h1>
          <p className="font-serif mb-8 text-lg text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Prep with PrepPal to enhance your skills and ace that next interview
            with ease!
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="/dashboard"
              className="font-serif inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-blue-400 to-blue-700 bg-[length:200%_100%] animate-shine hover:animate-blink focus:ring-4 focus:ring-primary-300 dark:focus:ring-blue-900"
            >
              Eager to Explore? Enter
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>

            <a
              href="https://www.youtube.com/watch?v=2vU5MoO1ZSM"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <svg
                className="mr-2 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              Need Motivation?
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 dark:bg-[rgb(11,10,10)] dark:text-white">
        <h2 className="font-serif text-3xl">How it Works?</h2>
        <h2 className="font-serif text-md text-gray-500 dark:text-gray-400">
          Give mock interview in just 3 simple easy steps
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10 dark:bg-gray-900 dark:border-gray-700 dark:hover:border-blue-500/10" href="/dashboard">
            <AtomIcon className="h-8 w-8" />
            <h2 className="mt-4 text-xl font-serif text-black font-bold dark:text-white">Enter the Details</h2>
            <p className="font-serif mt-1 text-sm text-gray-600 dark:text-gray-400">
              PrepPal tailors your interview prep experience to your specific
              needs. Simply input your job role, years of experience, and tech
              stack, and PrepPal’s AI will generate customized practice
              questions, ensuring you’re fully prepared for your job position.
            </p>
          </a>
          <a className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10 dark:bg-gray-900 dark:border-gray-700 dark:hover:border-blue-500/10" href="/dashboard">
            <Edit className="h-8 w-8" />
            <h2 className="mt-4 text-xl font-serif text-black font-bold dark:text-white">Take Interview</h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 font-serif">
              Enable your camera and microphone to simulate a real interview
              environment and gain the confidence you need to excel.
            </p>
          </a>
          <a className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10 dark:bg-gray-900 dark:border-gray-700 dark:hover:border-blue-500/10" href="/dashboard">
            <Share2 className="h-8 w-8" />
            <h2 className="mt-4 text-xl font-serif text-black font-bold dark:text-white">Learn from the Feedback</h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 font-serif">
             After each practice interview, review the feedback provided by our
              AI system. This invaluable insight highlights your strengths and
              areas for improvement, allowing you to refine your responses.
            </p>
          </a>
        </div>
      </section>
      <section className="bg-white dark:bg-[rgb(11,10,10)] z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
    <h2 className="font-serif text-3xl mt-10 text-black dark:text-white">Most Frequently Asked HR Questions</h2>
    <div className="mt-4" id="bottom">
        <button
            className="font-serif inline-flex justify-center items-center py-2 px-5 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-blue-400 to-blue-700 bg-[length:200%_100%] animate-shine hover:animate-blink focus:ring-4 focus:ring-primary-300 dark:focus:ring-blue-900"
            onClick={() => setIsOpen(!isOpen)} // Toggle the dropdown
        >
            <div className="flex justify-center">
                <span className="font-serif text-lg text-white dark:text-white">Typical Questions</span>
            </div>

            <svg
                className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
        </button>
        {isOpen && (
            <div className="mt-6 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-900 p-6 rounded-lg shadow-lg">
  <div className="mb-6">
    <h3 className="font-serif font-bold text-xl text-gray-800 dark:text-white">1. Tell me about yourself.</h3>
    <p className="font-serif text-sm text-gray-600 dark:text-gray-400 mt-2">
      Focus on your education, experience, and skills that relate to the position.
    </p>
  </div>
  
  <div className="mb-6">
    <h3 className="font-serif font-bold text-xl text-gray-800 dark:text-white">2. What are your strengths?</h3>
    <p className="font-serif text-sm text-gray-600 dark:text-gray-400 mt-2">
      Highlight a few key strengths that are relevant to the job.
    </p>
  </div>

  <div className="mb-6">
    <h3 className="font-serif font-bold text-xl text-gray-800 dark:text-white">3. What are your weaknesses?</h3>
    <p className="font-serif text-sm text-gray-600 dark:text-gray-400 mt-2">
      Choose a real weakness and explain how you are working to improve it.
    </p>
  </div>

  <div className="mb-6">
    <h3 className="font-serif font-bold text-xl text-gray-800 dark:text-white">4. Why do you want to work here?</h3>
    <p className="font-serif text-sm text-gray-600 dark:text-gray-400 mt-2">
      Research the company and mention specific reasons that appeal to you.
    </p>
  </div>

  <div className="mb-6">
    <h3 className="font-serif font-bold text-xl text-gray-800 dark:text-white">5. Where do you see yourself in 5 years?</h3>
    <p className="font-serif text-sm text-gray-600 dark:text-gray-400 mt-2">
      Share your career goals and how they align with the company’s direction.
    </p>
  </div>
</div>

        )}
    </div>
</section>

    </div>
  );
}