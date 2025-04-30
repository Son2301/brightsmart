import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import MobileMenu from './MobileMenu';

export default function Navbar() {
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
              <li><Link href="/services" className="hover:opacity-80">Services</Link></li>
              <li><Link href="/portfolio" className="hover:opacity-80">Portfolio</Link></li>
              <li><Link href="/resources" className="hover:opacity-80">Resources</Link></li>
              <li><Link href="/contact" className="hover:opacity-80">Contact</Link></li>
            </ul>
          </nav>
          
          <Link 
            href="/contact" 
            className="hidden md:inline-block ml-8 bg-yellow-400 text-black px-5 py-2 font-semibold hover:bg-yellow-300 transition-colors"
          >
            BOOK YOUR FREE CALL
          </Link>
          
          <MobileMenu />
        </div>
      </div>
    </header>
  );
} 