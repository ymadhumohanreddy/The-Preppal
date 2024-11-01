"use client";
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Header() {
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]); 

  return (
    <div className='flex p-0.8 items-center justify-between shadow-sm' style={{ backgroundColor: '#4DA1E7' }}>
     <Image src="/fulllogo-.png" width={160} height={100} alt="logo" />
      <ul className='flex gap-14' >
        <Link href="/dashboard">
          <li className={`text-white cursor-pointer hover:text-black hover:text-lg hover:font-serif transition-all font-serif${path === '/dashboard' ? ' text-xl text-blue-900 font-serif' : ''}`}>
            Dashboard
          </li>
        </Link>
              <Link href="/dashboard/upgrade">
        <li className={`text-white cursor-pointer hover:text-black hover:text-lg hover:font-serif transition-all ${path === '/dashboard/upgrade' ? ' text-xl text-blue-900 font-serif' : ''}`}>
          Cost?
        </li>
      </Link>

        <Link href="/dashboard/aboutme">
          <li className={`text-white cursor-pointer hover:text-black hover:text-lg hover:font-serif transition-all ${path === '/dashboard/aboutme' ? ' text-xl text-blue-900 font-serif' : ''}`}>
            About Me
          </li>
        </Link>
      </ul>
      <UserButton />
    </div>
  );
}
