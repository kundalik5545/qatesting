import React from "react";
import SocialSharePage from "./SocialShare";
import Link from "next/link";
import { basicDetails } from "@/data/BasicSetting";

const FooterLinks = () => {
  return (
    <div className="w-full px-6 flex ditems-center text-center sm:text-left">
      {/* Grid Layout */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Column 1: Branding */}
        <div
          className="flex flex-col items-center sm:items-start"
          aria-label="Website Name and Description"
        >
          <h2 className="text-xl font-bold dark:text-gray-100">
            {basicDetails.websiteName}
          </h2>
          <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
            {basicDetails.tagLine}
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <nav
          aria-label="Footer Navigation"
          className="flex flex-col items-center sm:items-start space-y-2 text-gray-700 dark:text-gray-300"
        >
          <h3 className="text-lg font-semibold dark:text-gray-200">
            Quick Links
          </h3>
          <Link
            href="/blog"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact-us"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Contact Us
          </Link>
          <Link
            href="/about-us"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/privacy-policy"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Privacy Policy
          </Link>
        </nav>

        {/* Column 3: Social Media & Copyright */}
        <div
          className="flex flex-col items-center sm:items-start"
          aria-label="Social Media Handles"
        >
          <h3 className="text-lg font-semibold dark:text-gray-200">
            Connect With Us
          </h3>
          <SocialSharePage />
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
