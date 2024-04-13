import React from 'react';
import { FaInstagram, FaYoutube } from 'react-icons/fa'; // Importing icons from Font Awesome

const Footer = () => {
  return (
    <div className="mt-2 bg-info text-white py-4">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="display-5 font-custom">𝓠𝓾𝓲𝓬𝓴 𝓒𝓪𝓻𝓽</h1>
        <div className="d-flex gap-3">
          <a href="https://www.instagram.com/accounts/login/?next=%2Fyour_instagram_page%2F&source=desktop_nav" target="_blank" className="text-white mr-3">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.youtube.com" target="_blank" className="text-white">
            <FaYoutube size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
