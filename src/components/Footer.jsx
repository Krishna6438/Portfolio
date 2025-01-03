import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-8 bg-black py-6 text-stone-300">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-4 px-8 lg:flex-row lg:space-y-0">
        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-400"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-400"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/krishna_r_sharma_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-pink-400"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/krishna-sharma123/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-600"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Krishna6438"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-500"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        {/* Signature */}
        <div className="text-sm text-stone-400 lg:text-right">
          By <span className="text-white">Krishna Sharma</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
