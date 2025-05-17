"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaChevronDown } from 'react-icons/fa';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menuName) => {
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="bg-primary py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-white font-bold">
          <div className="text-center">
            <span className="text-3xl font-light block">bright</span>
            <span className="text-3xl font-semibold tracking-wider block mt-[-10px]">SMART</span>
          </div>
        </Link>

        <div className="flex items-center">
          <div className="hidden md:flex space-x-4 text-white mr-6">
            <a href="#" aria-label="Twitter" className="text-white"><FaTwitter /></a>
            <a href="#" aria-label="Facebook" className="text-white"><FaFacebook /></a>
            <a href="#" aria-label="Instagram" className="text-white"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="text-white"><FaLinkedin /></a>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-8 text-white">
              <li><Link href="/about" className="hover:opacity-80">About</Link></li>

              <li
                className="relative group"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center cursor-pointer hover:opacity-80">
                  <Link href="/services" className="inline-flex items-center">
                    Services <FaChevronDown className="ml-1 text-xs" />
                  </Link>
                </div>

                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-0 pt-2 w-48 z-10">
                    <div className="bg-white rounded shadow-md py-2 w-full">
                      <Link
                        href="/services/mc-services"
                        className="block px-4 py-2 text-primary hover:bg-gray-100"
                      >
                        MC Services
                      </Link>
                      <Link
                        href="/services/speaking-topics"
                        className="block px-4 py-2 text-primary hover:bg-gray-100"
                      >
                        Speaking Topics
                      </Link>
                      <Link
                        href="/services/workshops"
                        className="block px-4 py-2 text-primary hover:bg-gray-100"
                      >
                        Workshops
                      </Link>
                    </div>
                  </div>
                )}
              </li>

              <li
                className="relative group"
                onMouseEnter={() => handleMouseEnter('portfolio')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center cursor-pointer hover:opacity-80">
                  <Link href="/portfolio" className="inline-flex items-center">
                    Portfolio <FaChevronDown className="ml-1 text-xs" />
                  </Link>
                </div>

                {activeDropdown === 'portfolio' && (
                  <div className="absolute top-full left-0 mt-0 pt-2 w-48 z-10">
                    <div className="bg-white rounded shadow-md py-2 w-full">
                      <Link
                        href="/portfolio/past-events"
                        className="block px-4 py-2 text-primary hover:bg-gray-100"
                      >
                        Past Events
                      </Link>
                      <Link
                        href="/portfolio/testimonials"
                        className="block px-4 py-2 text-primary hover:bg-gray-100"
                      >
                        Testimonials
                      </Link>
                      <Link
                        href="/portfolio/media-kit"
                        className="block px-4 py-2 text-primary hover:bg-gray-100"
                      >
                        Media Kit
                      </Link>
                    </div>
                  </div>
                )}
              </li>

              <li><Link href="/resources" className="hover:opacity-80">Resources</Link></li>

              <li><Link href="/contact" className="hover:opacity-80">Contact</Link></li>
            </ul>
          </nav>

          <Link
            href="/contact"
            className="hidden md:inline-block ml-8 bg-yellow-400 text-black px-5 py-2 font-semibold hover:bg-yellow-300 transition-colors"
          >
            Let's Talk About Your Event
          </Link>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
} 