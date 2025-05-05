import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">BrightSmart Media</h3>
            <p className="mb-2">Helping create exceptional event experiences that engage audiences and drive meaningful outcomes.</p>
            <div className="flex items-start mb-2">
              <FaMapMarkerAlt className="mt-1 mr-2 text-primary" />
              <p>Based in Melbourne. Available for bookings Australia-wide and virtually.</p>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-primary">About</Link></li>
              <li><Link href="/services" className="hover:text-primary">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary">Portfolio</Link></li>
              <li><Link href="/resources" className="hover:text-primary">Resources</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <FaPhone className="mr-3 text-primary" />
                <a href="tel:+61400000000" className="hover:text-primary">0400 000 000</a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-primary" />
                <a href="mailto:joyce@brightsmart.com.au" className="hover:text-primary">joyce@brightsmart.com.au</a>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-primary"><FaTwitter size={20} /></a>
                <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-primary"><FaFacebook size={20} /></a>
                <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-primary"><FaInstagram size={20} /></a>
                <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-primary"><FaLinkedin size={20} /></a>
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Get My Monthly Mic Check — Tips, Tools + Stories from the Stage</p>

            {/* Using our custom NewsletterForm component */}
            <NewsletterForm />

            <Link
              href="/contact"
              className="bg-yellow-400 text-black font-semibold px-5 py-2 inline-block mt-6 hover:bg-yellow-300 transition-colors"
            >
              Book a Call with Joyce
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} BrightSmart Media. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <Link href="/privacy-policy" className="text-sm hover:text-primary">Privacy Policy</Link>
            <Link href="/terms-conditions" className="text-sm hover:text-primary">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 