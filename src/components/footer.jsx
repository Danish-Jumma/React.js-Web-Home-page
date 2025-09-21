import React from "react";
import logo from "../assets/images/logo.png"; // your logo

function Footer() {
  return (
    <footer className="bg-[#f5f7fa] text-[#4d4d4d] py-10 mt-12">
      <div className="max-w-[1155px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Logo + About */}
        <div>
          <img src={logo} alt="Logo" className="w-[150px] mb-4" />
          <p className="text-sm leading-relaxed">
            We help you grow your business with modern solutions 
            and strategies tailored to your needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#53af4f]">Home</a></li>
            <li><a href="#" className="hover:text-[#53af4f]">Services</a></li>
            <li><a href="#" className="hover:text-[#53af4f]">Features</a></li>
            <li><a href="#" className="hover:text-[#53af4f]">Products</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#53af4f]">Blog</a></li>
            <li><a href="#" className="hover:text-[#53af4f]">FAQs</a></li>
            <li><a href="#" className="hover:text-[#53af4f]">Support</a></li>
            <li><a href="#" className="hover:text-[#53af4f]">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#53af4f]">🌐</a>
            <a href="#" className="hover:text-[#53af4f]">🐦</a>
            <a href="#" className="hover:text-[#53af4f]">📸</a>
            <a href="#" className="hover:text-[#53af4f]">💼</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-300 pt-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
