import { basicDetails } from "@/data/BasicSetting";
import React from "react";

export const metadata = {
  title: "About QA Testing ",
  description:
    "QA Testing Playground is a hub for automation testers to practice and enhance their skills. Join our community to explore, contribute, and collaborate.",
  keywords:
    "qa testing, automation testing, automation testing practice websites, automation testing practice websites free,dummy sites for testing,best automation testing practice websites, selenium automation practice websites, dummy sites for manual testing, manual testing practice websites free, test automation practice blogspot, automation demo site for selenium",
};

const AboutPage = () => {
  return (
    <>
      <div className="min-h-screen container mx-auto max-w-5xl text-foreground bg-background pt-5">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <blockquote className="italic">
          <p className="text-lg mb-4">
            <strong>{basicDetails.websiteName}</strong> - 🛠️ Practice, learn,
            and excel in automation testing!
          </p>
          <p className="mb-4">
            A hub for automation testers seeking hands-on practice, project
            ideas, and collaboration opportunities. Our platform categorizes
            projects across various domains, making it easy to find the right
            challenge for your skill level.
          </p>
          <p className="mb-4">
            Join our <strong>community guide</strong>, where contributors can
            discover projects, connect with like-minded testers, and enhance
            their automation skills. Stay updated with best practices,
            tutorials, and hands-on projects to sharpen your expertise.
          </p>
          <p>By -</p>
          <p>{basicDetails.websiteName}</p>
        </blockquote>
      </div>
    </>
  );
};

export default AboutPage;
