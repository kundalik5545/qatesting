"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Elementslayout = ({ children }) => {
  const pathname = usePathname();

  const navLinks = [
    {
      href: "/alert-window/browser-window",
      label: "Browser Windows",
      altText: "Browser Windows",
    },
    { href: "/alert-window/alerts", label: "Alerts", altText: "Alerts" },
    { href: "/alert-window/frames", label: "Frames", altText: "Frames" },
    {
      href: "/alert-window/nested-frames",
      label: "Nested Frames",
      altText: "Nested Frames",
    },
    {
      href: "/alert-window/modal-dialogs",
      label: "Modal Dialogs",
      altText: "Modal Dialogs",
    },
  ];

  // const commanNavLinks = [
  //   { href: "/", label: "Home", altText: "Home page" },
  //   { href: "/elements", label: "Elements", altText: "Elements" },
  //   { href: "/alert-window", label: "Alerts Window", altText: "Alerts Window" },
  //   { href: "/forms", label: "Forms", altText: "Form Elements" },
  //   { href: "/widgets", label: "Widgets", altText: "Widget Components" },
  // ];

  return (
    <div>
      {/* <div className="common-nav-bar bg-slate-800 text-white py-3 px-6 sticky top-0 z-10 shadow-md">
        <ul className="flex flex-wrap gap-4 justify-center md:justify-start">
          {commanNavLinks.map(({ href, label, altText }) => (
            <li key={href} className="transition-transform hover:scale-105">
              <Link
                href={href}
                className={
                  pathname.startsWith(href) && href !== "/"
                    ? "font-bold border-b-2 border-white pb-1"
                    : "hover:text-gray-300"
                }
                aria-label={altText}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div> */}

      <div className="container flex flex-col md:flex-row p-4 gap-3 md:gap-5">
        <div className="flex flex-col">
          <h1 className="text-6xl font-bold gradient-title mb-5">
            <Link
              href={"/alert-window/browser-window"}
              aria-label="Navigate to Browser Windows section"
            >
              Alert
            </Link>
          </h1>

          <div className="flex md:flex-col items-start gap-3 flex-wrap justify-start">
            {navLinks.map(({ href, label, altText }) => (
              <Link
                key={href}
                href={href}
                aria-label={`Navigate to ${altText || label} section`}
              >
                <Button
                  className={
                    pathname === href
                      ? "text-white hover:shadow-md"
                      : " text-black-400 bg-white hover:bg-white hover:shadow-md"
                  }
                  variant="default"
                >
                  {label}
                </Button>
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-5">{children}</div>
      </div>
    </div>
  );
};

export default Elementslayout;
