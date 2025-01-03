"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Elementslayout = ({ children }) => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/alert-window/browser-window", label: "Browser Windows" },
    { href: "/alert-window/alerts", label: "Alerts" },
    { href: "/alert-window/frames", label: "Frames" },
    { href: "/alert-window/nested-frames", label: "Nested Frames" },
    { href: "/alert-window/modal-dialogs", label: "Modal Dialogs" },
  ];

  return (
    <div className="container flex flex-col md:flex-row p-4 gap-3 md:gap-5">
      <div className="flex flex-col">
        <h1 className="text-6xl font-bold gradient-title mb-5">
          <Link href={"/alert-window/browser-window"}>Alert</Link>
        </h1>

        <div className="flex md:flex-col items-start gap-3 flex-wrap justify-start">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href}>
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
  );
};

export default Elementslayout;
