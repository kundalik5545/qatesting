import React from "react";
import Link from "next/link";
import { basicDetails } from "@/data/BasicSetting";

const Footer = () => {
  return (
    <div className="flex flex-col items-center container mx-auto">
      {/* Info sect */}
      <div className="flex flex-col items-center">
        <p className="text-xl font-semibold">QA PlayGround by Random Coders</p>
        <p className="text-sm p-1 text-center dark:text-gray-300 text-gray-600">
          💡 Helping Test Automation Engineers Excel Through Learning.
        </p>
      </div>
      <div className="contact-us flex gap-3 underline ">
        <a href="/about-me" className="hover:text-blue-600">
          About Me
        </a>
        <a href="/about-us" className="hover:text-blue-600">
          About Us
        </a>
        <a href="/contact-us" className="hover:text-blue-600">
          Contact Us
        </a>
        <a href="/privacy-policy" className="hover:text-blue-600">
          Privacy Policy
        </a>
      </div>
      <div
        className="p-5 text-base text-gray-500 dark:text-gray-400 text-center"
        aria-label="Copy Rights Warning"
      >
        <span>© 2025 {basicDetails.websiteName}. </span>
        <span>Created by </span>
        <Link
          href="https://github.com/kundalik5545"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#f18b42] hover:text-[#e07b35] transition-colors"
        >
          Random Coders
        </Link>
      </div>
    </div>
  );
};

export default Footer;
