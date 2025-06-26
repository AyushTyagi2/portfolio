
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-900 py-4 fixed w-full z-50 shadow-2xl">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-[#ACC8E5] font-bold text-xl flex items-center">
          <Image src="/robot.png" alt="Logo" width={25} height={25} className="mr-2" />
          <h2 className="text-center text-3xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-montserrat "> {/* Gradient heading */}
          MyPortfolio
        </h2>
        </Link>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-[#ACC8E5] focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link href="#projects" className="text-[#6694c5] text-lg hover:text-white transition duration-300 font-lato relative"> {/* Added href with ID */}
            <span className="relative z-10">Projects</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#contributions" className="text-[#6694c5] text-lg hover:text-white transition duration-300 font-lato relative"> {/* Added href with ID */}
            <span className="relative z-10">Contributions</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#about" className="text-[#6694c5] text-lg hover:text-white transition duration-300 font-lato relative"> {/* Added href with ID */}
            <span className="relative z-10">About</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#contact" className="text-green-500 hover:bg-[#6694c5] hover:text-white font-bold rounded-3xl transition duration-300 relative"> {/* Added href with ID */}
            <span className="relative z-10">Contact</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 py-4">
            <Link href="#projects" className="block px-6 py-2 text-[#ACC8E5] hover:text-white relative"> {/* Added href with ID */}
              <span className="relative z-10">Projects</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#contributions" className="block px-6 py-2 text-[#ACC8E5] hover:text-white relative"> {/* Added href with ID */}
              <span className="relative z-10">Contributions</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#about" className="block px-6 py-2 text-[#ACC8E5] hover:text-white relative"> {/* Added href with ID */}
              <span className="relative z-10">About</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#contact" className="block px-6 py-2 text-green-500 hover:bg-[#ACC8E5] hover:text-white font-bold relative"> {/* Added href with ID */}
              <span className="relative z-10">Contact me</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;