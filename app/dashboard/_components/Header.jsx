"use client";
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
  const path = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    console.log(path);
  }, [path]);

  // Function to close menu on link click
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <div className="flex items-center justify-between p-0 shadow-sm bg-blue-500">
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
        <ul className="hidden sm:flex gap-28 md:gap-8 lg:gap-40 xl:gap-44 items-center ">
          <Link href="/dashboard">
             <li className={`text-white text-2xl cursor-pointer hover:text-black hover:text-lg hover:font-serif transition-all font-serif ${path === '/dashboard' ? 'text-3xl font-bold' : ''}`}>
              Dashboard
            </li>

          </Link>
          <Link href="/dashboard/upgrade">
            <li className={`text-white text-2xl cursor-pointer hover:text-black 
              hover:text-lg hover:font-serif transition-all font-serif ${path === '/dashboard/upgrade' ? 'text-3xl font-bold': ''}`}>
              Cost?
            </li>
          </Link>
          <Link href="/aboutme">
            <li className={`text-white text-2xl cursor-pointer hover:text-black 
            hover:text-lg hover:font-serif 
              transition-all font-serif ${path === '/aboutme' ? 'text-3xl font-bold' : ''}`}>
              Author
            </li>
          </Link>
        </ul>
        <div className="mr-3">
          <UserButton />
        </div>
      </div>
      
      {/* Mobile Links Dropdown */}
      {isMobileMenuOpen && (
        <ul className="sm:hidden flex flex-col gap-4 p-4 bg-blue-800 shadow-lg">
          <Link href="/dashboard" onClick={closeMenu}>
            <li className={`text-white text-xl cursor-pointer hover:text-black transition-all font-serif ${path === '/dashboard' ? 'font-extrabold' : ''}`}>
              Dashboard
            </li>
          </Link>
          <Link href="/dashboard/upgrade" onClick={closeMenu}>
            <li className={`text-white text-xl cursor-pointer hover:text-black transition-all font-serif ${path === '/dashboard/upgrade' ? 'font-extrabold' : ''}`}>
              Cost?
            </li>
          </Link>
          <Link href="/aboutme" onClick={closeMenu}>
            <li className={`text-white text-xl cursor-pointer hover:text-black transition-all font-serif ${path === '/aboutme' ? ' font-extrabold ' : ''}`}>
              Author
            </li>
          </Link>
        </ul>
      )}
    </>
  );
}
