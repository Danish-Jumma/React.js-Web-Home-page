import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // install lucide-react for icons
import logo from '../assets/images/logo.png';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Service", href: "#" },
    { name: "Feature", href: "#" },
    { name: "Product", href: "#" },
    { name: "Testimonial", href: "#" },
    { name: "FAQ", href: "#" },
  ];

  return (
    <nav className="bg-[#f5f7fa]" aria-label="Main Navigation">
      <div className="max-w-[1155px] mx-auto h-[80px] flex items-center justify-between px-6">
        
        {/* Logo */}
        <a href="#">
          <img src={logo} alt="Company Logo" className="h-5 md:h-6" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-[15px]">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a 
                href={link.href} 
                className="hover:text-[#53af4f] transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="#" 
            className="text-[#53af4f] text-[15px] hover:underline"
          >
            Login
          </a>
          <a 
            href="#" 
            className="px-4 py-2 bg-[#53af4f] text-white rounded-[4px] text-[14px] hover:bg-[#469a42] transition-colors duration-200"
          >
            Sign up
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#f5f7fa] border-t border-gray-200">
          <ul className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="block text-gray-700 hover:text-[#53af4f] transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <a 
                href="#" 
                className="text-[#53af4f] text-[15px] hover:underline"
              >
                Login
              </a>
              <a 
                href="#" 
                className="px-4 py-2 bg-[#53af4f] text-white rounded-[4px] text-[14px] hover:bg-[#469a42] transition-colors duration-200 text-center"
              >
                Sign up
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
