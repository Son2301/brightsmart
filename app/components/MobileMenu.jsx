"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({
    services: false,
    portfolio: false
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (menu) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
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

          <nav className="mb-8 w-full max-w-xs">
            <ul className="flex flex-col items-center space-y-6 text-white text-xl">
              <li className="w-full text-center"><Link href="/about" onClick={toggleMenu} className="hover:opacity-80">About</Link></li>

              <li className="w-full">
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => toggleSubmenu('services')}
                    className="flex items-center justify-center hover:opacity-80 mb-2"
                  >
                    Services
                    {expandedMenus.services ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                  </button>

                  {expandedMenus.services && (
                    <div className="flex flex-col items-center space-y-4 py-2 w-full">
                      <Link
                        href="/services/mc-services"
                        onClick={toggleMenu}
                        className="text-white text-base hover:opacity-80"
                      >
                        MC Services
                      </Link>
                      <Link
                        href="/services/speaking-topics"
                        onClick={toggleMenu}
                        className="text-white text-base hover:opacity-80"
                      >
                        Speaking Topics
                      </Link>
                      <Link
                        href="/services/workshops"
                        onClick={toggleMenu}
                        className="text-white text-base hover:opacity-80"
                      >
                        Workshops
                      </Link>
                    </div>
                  )}
                </div>
              </li>

              <li className="w-full">
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => toggleSubmenu('portfolio')}
                    className="flex items-center justify-center hover:opacity-80 mb-2"
                  >
                    Portfolio
                    {expandedMenus.portfolio ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                  </button>

                  {expandedMenus.portfolio && (
                    <div className="flex flex-col items-center space-y-4 py-2 w-full">
                      <Link
                        href="/portfolio/past-events"
                        onClick={toggleMenu}
                        className="text-white text-base hover:opacity-80"
                      >
                        Past Events
                      </Link>
                      <Link
                        href="/portfolio/testimonials"
                        onClick={toggleMenu}
                        className="text-white text-base hover:opacity-80"
                      >
                        Testimonials
                      </Link>
                      <Link
                        href="/portfolio/media-kit"
                        onClick={toggleMenu}
                        className="text-white text-base hover:opacity-80"
                      >
                        Media Kit
                      </Link>
                    </div>
                  )}
                </div>
              </li>

              <li className="w-full text-center"><Link href="/resources" onClick={toggleMenu} className="hover:opacity-80">Resources</Link></li>

              <li className="w-full text-center"><Link href="/contact" onClick={toggleMenu} className="hover:opacity-80">Contact</Link></li>
            </ul>
          </nav>

          <Link
            href="/contact"
            className="bg-yellow-400 text-black px-6 py-3 font-semibold hover:bg-yellow-300 transition-colors mb-8"
            onClick={toggleMenu}
          >
            Let's Talk About Your Event
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