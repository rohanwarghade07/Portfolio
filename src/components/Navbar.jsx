import React from "react";
import logo from "../assets/rohan logo.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 text-white">
      <div className="flex items-center sm:mb-20">
        <img src={logo} alt="logo" className="w-24 sm:w-32" />
      </div>

      <div className="flex gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/rohan-warghade-66ba3a289/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/rohanwarghade07"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/_rohan_warghade_07/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
