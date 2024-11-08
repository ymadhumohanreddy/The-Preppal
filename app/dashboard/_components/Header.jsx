"use client";
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
  const path = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize dark mode state with the value from localStorage or system preference
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Access localStorage only on the client side
    const darkModePreference = localStorage.getItem("darkMode");
    if (darkModePreference === "true") {
      setIsDarkMode(true);
    } else if (darkModePreference === "false") {
      setIsDarkMode(false);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode on body class when the state changes
    if (isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem("darkMode", "false");
    }
  }, [isDarkMode]);

  // Function to toggle dark mode
  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  // Function to close menu on link click
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <div className="flex items-center justify-between p-0 shadow-sm bg-blue-500 dark:bg-blue-900">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src="/fulllogo-.png"
            width={150}
            height={150}
            alt="logo"
          />
        </Link>

        {/* Mobile Menu Toggle Button with Hamburger Icon */}
        <button
          className="sm:hidden text-white text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span>{isMobileMenuOpen ? '✖' : '☰'}</span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden sm:flex gap-28 md:gap-8 lg:gap-40 xl:gap-44 items-center">
          <Link href="/dashboard">
            <li
              className={`text-white text-2xl cursor-pointer hover:text-black hover:text-lg hover:font-serif transition-all font-serif ${path === '/dashboard' ? 'text-3xl font-bold' : ''}`}
            >
              Dashboard
            </li>
          </Link>
          <Link href="/dashboard/upgrade">
            <li
              className={`text-white text-2xl cursor-pointer hover:text-black hover:text-lg hover:font-serif transition-all font-serif ${path === '/dashboard/upgrade' ? 'text-3xl font-bold' : ''}`}
            >
              Cost?
            </li>
          </Link>
          <Link href="/aboutme">
            <li
              className={`text-white text-2xl cursor-pointer hover:text-black hover:text-lg hover:font-serif transition-all font-serif ${path === '/aboutme' ? 'text-3xl font-bold' : ''}`}
            >
              Author
            </li>
          </Link>
        </ul>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="text-white dark:text-gray-300 p-2 text-xl rounded-md"
        >
          {isDarkMode ? "☀️" : "🌙"}
        </button>

        <div className="mr-3">
          <UserButton />
        </div>
      </div>

      {/* Mobile Links Dropdown */}
      {isMobileMenuOpen && (
        <ul className="sm:hidden flex flex-col gap-4 p-4 bg-blue-800 dark:bg-blue-900 shadow-lg">
          <Link href="/dashboard" onClick={closeMenu}>
            <li
              className={`text-white cursor-pointer transition-all font-serif  ${path === '/dashboard' ? 'text-2xl font-extrabold' : 'text-xl hover:text-black'}`}
            >
              Dashboard
            </li>
          </Link>
          <Link href="/dashboard/upgrade" onClick={closeMenu}>
            <li
              className={`text-white cursor-pointer transition-all font-serif  ${path === '/dashboard/upgrade' ? 'text-2xl font-extrabold' : 'text-xl hover:text-black'}`}
            >
              Cost?
            </li>
          </Link>
          <Link href="/aboutme" onClick={closeMenu}>
            <li
              className={`text-white cursor-pointer transition-all font-serif ${path === '/aboutme' ? 'text-2xl font-extrabold' : 'text-xl hover:text-black'}`}
            >
              Author
            </li>
          </Link>
        </ul>
      )}
    </>
  );
}
