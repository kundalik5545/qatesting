"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Elementslayout = ({ children }) => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/forms/basic-details", label: "Basic Details Form" },
    { href: "/forms/job-application", label: "Job Application Form" },
    { href: "/forms/to-do", label: "TO DO List form" },
  ];

  return (
    <div className="container flex space-x-8">
      <div className="flex flex-col">
        <h1 className="text-6xl font-bold gradient-title mb-5">Forms</h1>

        <div className="flex flex-col items-start gap-3 flex-wrap justify-start">
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
