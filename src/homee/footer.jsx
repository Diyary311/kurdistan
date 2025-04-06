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
    <div className="bg-red-950 py-10">
      <footer className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* about section */}
        <div className="ml-4 text-white">
          <h1 className="text-lg font-bold font-semibold">About InKurdistan</h1>
          <p className="mb-2 text-sm">
            You can discover Beauty in every corner of the .
          </p>
        </div>
        {/* link section */}
        <div className="text-lg font-bold">
          <h1 className="font-serif text-lg text-white">
            Follow us on social media
          </h1>
          <div className="mt-2 flex space-x-3">
            <a
              href="#Facebook"
              className="font-bold text-white duration-500 hover:-translate-y-4 hover:bg-transparent hover:transition-all"
            >
              <FaFacebook size={24} />
            </a>

            <a
              href="#Instagram"
              className="font-bold text-white duration-500 hover:-translate-y-4 hover:bg-transparent hover:transition-all"
            >
              <FaInstagram size={24} />
            </a>

            <a
              href="#Twitter"
              className="font-bold text-white duration-500 hover:-translate-y-4 hover:bg-transparent hover:transition-all"
            >
              <FaTwitter size={24} />
            </a>

            <a
              href="#Youtube"
              className="font-bold text-white duration-500 hover:-translate-y-4 hover:bg-transparent hover:transition-all"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="#TikTok"
              className="font-bold text-white duration-500 hover:-translate-y-4 hover:bg-transparent hover:transition-all"
            >
              <FaTiktok size={24} />
            </a>
          </div>
        </div>
        {/* contact section */}

        <div className="font-bold text-white">
          <h1 className="text-lg font-bold">Contact Us</h1>
          <h2 className="mt-2 text-sm">Email: contact@inkurdistan.com</h2>
          <h2>Phone: +964 750 108 68 54</h2>
          <p>Adress: Sulaimani,Kurdistan,iraq</p>
        </div>

        {/* copyright  section */}
        <div className="border-wid border-width-700 ml-56 mt-6 border-t border-gray-700 pt-4 text-center text-sm">
          © 2025 InKurdistan. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
