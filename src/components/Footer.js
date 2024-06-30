import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"; // Importing social media icons

const Footer = () => {
  return (
    <footer className="bg-black text-white px-40">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold mb-4">Besoin d'aide ?</h4>
          <ul className="space-y-2">
            <li>
              <a href="/faq" className="hover:text-gray-400">
                FAQ
              </a>
            </li>
            <li>
              <a href="/support" className="hover:text-gray-400">
                Support
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400">
                Contactez-nous
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="hover:text-gray-400"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:text-gray-400"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="hover:text-gray-400"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="hover:text-gray-400"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start">
          <p className="text-sm">
            Copyright © 2024 Nutrition Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
