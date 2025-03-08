import HeroSection from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landingPage";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero section  */}

      <HeroSection />

      {/* Features Section */}
      <section id="features">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold sm:font-bold text-center mb-8 sm:mb-12">
            Everything you need to practice is at one place.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card className="p-6" key={index}>
                <Link href={feature.to}>
                  <CardContent className="space-y-4 pt-4">
                    <h3 className="text-xl font-semibold flex items-center gap-3">
                      {feature.icon}
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
