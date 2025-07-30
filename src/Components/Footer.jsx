
import React from 'react'
const Footer = () => {
  return (
    <footer className="  bg-blue-600 text-white  shadow">
      <div className="max-w-full  px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <h2 className="font-bold text-xl mb-2">YumGo</h2>
          <p>Your go-to app for deliciousFood Items delivered fast!</p>
        </div>

        <div>
          <h2 className="font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/menu" className="hover:underline">Menu</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold mb-2">Contact Us</h2>
          <p>Email: support@YumGo.com</p>
          <p>Phone: +91 9876543210</p>
        </div>
      </div>
      <div className="text-center py-4 border-t border-gray-700 text-sm">
        &copy; 2025 YumGo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
