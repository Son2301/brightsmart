"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button 
        onClick={toggleMenu} 
        className="text-white p-2"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-primary z-50 flex flex-col items-center justify-center">
          <button 
            onClick={toggleMenu} 
            className="absolute top-4 right-4 text-white"
            aria-label="Close menu"
          >
            <FaTimes size={24} />
          </button>

          <nav className="mb-8">
            <ul className="flex flex-col items-center space-y-6 text-white text-xl">
              <li><Link href="/about" onClick={toggleMenu} className="hover:opacity-80">About</Link></li>
              <li><Link href="/services" onClick={toggleMenu} className="hover:opacity-80">Services</Link></li>
              <li><Link href="/portfolio" onClick={toggleMenu} className="hover:opacity-80">Portfolio</Link></li>
              <li><Link href="/resources" onClick={toggleMenu} className="hover:opacity-80">Resources</Link></li>
              <li><Link href="/contact" onClick={toggleMenu} className="hover:opacity-80">Contact</Link></li>
            </ul>
          </nav>

          <Link 
            href="/contact" 
            className="bg-yellow-400 text-black px-6 py-3 font-semibold hover:bg-yellow-300 transition-colors mb-8"
            onClick={toggleMenu}
          >
            BOOK YOUR FREE CALL
          </Link>

          <div className="flex space-x-6 text-white mt-4">
            <a href="#" aria-label="Twitter" className="text-white"><FaTwitter size={20} /></a>
            <a href="#" aria-label="Facebook" className="text-white"><FaFacebook size={20} /></a>
            <a href="#" aria-label="Instagram" className="text-white"><FaInstagram size={20} /></a>
            <a href="#" aria-label="LinkedIn" className="text-white"><FaLinkedin size={20} /></a>
          </div>
        </div>
      )}
    </div>
  );
} 