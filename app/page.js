"use client";
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";
import { AtomIcon, Edit, Share2 } from "lucide-react";

export default function Home() {
  
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
      <Header />
      <section className="z-50">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <a
            href="#"
            className="font-serif inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            role="alert"
          >
            <span className="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">
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
            Brave Enough? Enter
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
      <section className="bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h2 className="font-serif text-3xl">How it Works?</h2>
        <h2 className="font-serif text-md text-gray-500">
          Give mock interview in just 3 simple easy steps
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10" href="#">
            <AtomIcon className="h-8 w-8" />
            <h2 className="mt-4 text-xl font-serif text-black font-bold">Enter the Details</h2>
            <p className="font-serif mt-1 text-sm text-gray-600">
              PrepPal tailors your interview prep experience to your specific
              needs. Simply input your job role, years of experience, and tech
              stack, and PrepPal’s AI will generate customized practice
              questions, ensuring you’re fully prepared for your job position.
            </p>
          </a>
          <a className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10" href="#">
            <Edit className="h-8 w-8" />
            <h2 className="mt-4 text-xl font-serif text-black font-bold">Take Interview</h2>
            <p className="mt-1 text-sm text-gray-600 font-serif">
              Enable your camera and microphone to simulate a real interview
              environment and gain the confidence you need to excel.
            </p>
          </a>
          <a className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10" href="#">
            <Share2 className="h-8 w-8" />
            <h2 className="mt-4 text-xl font-serif text-black font-bold">Learn from the Feedback</h2>
            <p className="mt-1 text-sm text-gray-600 font-serif">
              After each practice interview, review the feedback provided by our
              AI system. This invaluable insight highlights your strengths and
              areas for improvement, allowing you to refine your responses.
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}
