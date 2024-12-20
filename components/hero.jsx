import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="mt-40 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
          Master Automation Testing
          <br /> with Practice
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
          Learn and practice Selenium, API testing, and other essential
          automation tools. Get hands-on experience with real-world challenges
          and boost your testing skills to the next level!
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="https://www.youtube.com/@qatesting-app">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
