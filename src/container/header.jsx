'use client'
import React from 'react';
import { FaRegUser } from "react-icons/fa6";
import Image from 'next/image';
import Logo from "../assets/images/logo.png";
import Link from 'next/link';
import Button from '@/components/button';

export default function Header() {
  return (
    <header className="bg-[#fff] backdrop-blur-sm shadow-md sticky top-0 z-50 ">
      <div className="w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-gray-800">
              <Link href="/">
                <Image src={Logo} alt="Logo" width={50} height={50} />
              </Link>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='mr-3'>
              <Link href="/my-events">
                <Button buttonText="My Events" />
              </Link>
            </div>
            <button className="text-gray-700 hover:text-[#0e91ab] p-2 rounded-full hover:bg-[#eefbeb] transition-colors duration-200">
              <FaRegUser className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 