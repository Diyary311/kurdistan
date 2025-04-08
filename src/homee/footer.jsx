import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa';

function Footer() {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-16">
      <footer className="container mx-auto grid grid-cols-1 gap-8 text-white md:grid-cols-3">
        {/* About Section */}
        <div className="px-4 text-center md:text-left">
          <h1 className="text-3xl font-extrabold text-white">
            About InKurdistan
          </h1>
          <p className="mt-2 text-lg text-gray-400">
            Discover the beauty and rich culture of Kurdistan, from its ancient
            history to its vibrant traditions.
          </p>
        </div>

        {/* Social Media Section */}
        <div className="text-center">
          <h1 className="text-xl font-semibold">Follow us on social media</h1>
          <div className="mt-4 flex justify-center space-x-6">
            <a
              href="#Facebook"
              className="transform text-white transition-transform hover:scale-125 hover:text-blue-600"
            >
              <FaFacebook size={32} />
            </a>
            <a
              href="#Instagram"
              className="transform text-white transition-transform hover:scale-125 hover:text-pink-500"
            >
              <FaInstagram size={32} />
            </a>
            <a
              href="#Twitter"
              className="transform text-white transition-transform hover:scale-125 hover:text-blue-400"
            >
              <FaTwitter size={32} />
            </a>
            <a
              href="#Youtube"
              className="transform text-white transition-transform hover:scale-125 hover:text-red-600"
            >
              <FaYoutube size={32} />
            </a>
            <a
              href="#TikTok"
              className="transform text-white transition-transform hover:scale-125 hover:text-black"
            >
              <FaTiktok size={32} />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="px-4 text-center md:text-left">
          <h1 className="text-xl font-semibold">Contact Us</h1>
          <p className="mt-2 text-lg">
            Email:{' '}
            <span className="text-gray-400">contact@inkurdistan.com</span>
          </p>
          <p className="mt-1 text-lg">
            Phone: <span className="text-gray-400">+964 750 108 68 54</span>
          </p>
          <p className="mt-1 text-lg">
            Address:{' '}
            <span className="text-gray-400">Sulaimani, Kurdistan, Iraq</span>
          </p>
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>© 2025 InKurdistan. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
