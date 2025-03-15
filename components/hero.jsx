import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { allUrls } from "@/data/BasicSetting";

const HeroSection = () => {
  return (
    <section className="mt-24 mb-8 md:mb-16  px-4 bg-background text-foreground">
      <div className="container mx-auto text-center flex flex-col items-center">
        <h1 className=" text-4xl md:text-6xl font-bold leading-tight mb-6">
          Master Automation Testing With
        </h1>
        <span className="gradient-subTitle text-4xl md:text-7xl font-bold leading-tight mb-6">
          QA PlayGround
        </span>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
          Learn and practice automation testing using Selenium. Get hands-on
          experience with real-world challenges and boost your testing skills to
          the next level!
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/practice" passHref>
            <Button
              size="lg"
              className="px-8 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get Started
            </Button>
          </Link>
          <Link
            href={allUrls.youtubeURL}
            target="_blank"
            rel="noopener noreferrer"
            passHref
          >
            <Button
              size="lg"
              variant="outline"
              className="px-8 border border-border text-foreground hover:bg-accent hover:text-accent-foreground"
            >
              Watch Demo
            </Button>
          </Link>
        </div>

        {/* Buy Me A Coffee Button */}
        <div className="mt-8">
          <a
            href="https://www.buymeacoffee.com/randomcoders"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
              style={{ height: "55px", width: "217px" }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
