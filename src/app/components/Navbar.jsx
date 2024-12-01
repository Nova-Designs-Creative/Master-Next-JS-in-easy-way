// components/Navbar.js
"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-md p-4 mb-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-bold text-xl">
          <Link href="/">Logo</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-blue-400">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-blue-400">
            About
          </Link>
          <Link href="/services" className="text-white hover:text-blue-400">
            Services
          </Link>
          <Link href="/contact" className="text-white hover:text-blue-400">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="space-y-4 py-4 px-6 bg-gray-800">
          <Link href="/" className="text-white hover:text-blue-400 block">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-blue-400 block">
            About
          </Link>
          <Link
            href="/services"
            className="text-white hover:text-blue-400 block"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-blue-400 block"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
