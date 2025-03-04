import React from "react";
import SocialSharePage from "./SocialShare";
import Link from "next/link";
import { allUrls, basicDetails } from "@/data/BasicSetting";

const Footer = () => {
  return (
    <footer
      className="w-full bg-blue-500 text-white dark:bg-gray-900 dark:text-gray-300 py-6"
      aria-label="footer section"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
        {/* Column 1: Branding */}
        <div aria-label="Website Name and Description">
          <h2 className="text-xl font-bold">{basicDetails.websiteName}</h2>
          <p className="mt-2 text-base md:text-base">{basicDetails.tagLine}</p>
        </div>

        {/* Column 2: Quick Links */}
        <nav aria-label="Footer Navigation" className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <Link href={allUrls.blogLink} className="hover:text-gray-200">
            Blog
          </Link>
          <Link href="/contact-us" className="hover:text-gray-200">
            Contact Us
          </Link>
          <Link href="/about-us" className="hover:text-gray-200">
            About Us
          </Link>
          <Link href="/privacy-policy" className="hover:text-gray-200">
            Privacy Policy
          </Link>
        </nav>

        {/* Column 3: Social Media & Copyright */}
        <div
          className="flex flex-col items-center sm:items-start"
          aria-label="Social Media Handles"
        >
          <h3 className="text-lg font-semibold">Connect With Us</h3>
          <SocialSharePage />
        </div>
      </div>

      {/* Copyright Section */}
      <div
        className="mt-6 border-t border-gray-300 pt-4 text-center text-sm"
        aria-label="Copy Rights Warning"
      >
        {` © 2025 ${basicDetails.websiteName}. All Rights Reserved.`}
      </div>
    </footer>
  );
};

export default Footer;
