'use client'
import React, { useState } from 'react';
import Girl from "../../assets/images/girl.webp"
import Image from 'next/image';
// import { Menu, X } from 'lucide-react';

const ChurchEvents = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLearnMore = () => {
    alert('Learn more about our church events!');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="py-10  bg-gradient-to-br bg-[#c3e2e8]">

      {/* Main Content */}
      <main className="w-[80%] m-auto md:flex block justify-evenly items-center">
        {/* Image Section */}
        <div className="flex justify-center items-center ">
          <div className="w-80 h-96 md:w-96 md:h-[300px] rounded-3xl overflow-hidden shadow-2xl ">
            <Image
              src={Girl}
              alt="Church Interior"
              className="w-full h-full object-cover mask-radial-from-rose-50"
              width={300}
              height={300}
            />
          </div>
        </div>

        {/* Content Section */}
        <div className='md:w-[50%] w-[90%] m-auto'>
          <div className="text-center lg:text-left  ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0e91ab] leading-tight tracking-tight mb-6">
              EVENTS
            </h1>
            <p className='text-gray-600 font-medium text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate reprehenderit consequuntur eaque atque sapiente harum pariatur ad quos? Nulla quibusdam soluta ad sint deleniti quo accusantium, facilis sunt voluptatem tempora?</p>
          
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChurchEvents;