import { Button } from "@/components/ui/button";
import Link from "next/link";
import fs from "fs";
import path from "path";
import React from "react";
import LogicalPrograms from "../_components/LogicalPrograms";
import AutomationTestCasesPage from "../_components/AutomationTestCases";
import CoursesPage from "../_components/CoursesPage";
import { notFound } from "next/navigation";
import { basicDetails } from "@/data/BasicSetting";
import { title } from "process";

export async function generateMetadata({ params }) {
  const { slug } = params;
  if (!slug) return notFound();

  const learnPagesMetadata = {
    "logical-programs-list": {
      title: "Practice logical proggram that asked in interview/",
      description:
        "Practice logical prggrams that are asked in top MNC company during automation testing interview. We provoided solution for each logical proggram.",
    },
    "automation-test-cases": {
      title: "Practice DemoAutomation Test Cases",
      description:
        "Detailed automation test cases for various scenarios inclueds registration, login, calendar, button, links, select class and many features.",
    },
    courses: {
      title: "Free Courses on Automation testing with selenium",
      description: "Explore our wide range of courses.",
    },
  };
  const pageMetadata = learnPagesMetadata[slug] || null;

  if (!pageMetadata) return notFound();

  return {
    title: `${pageMetadata.title?.slice(0, 60) || "New Blog Post"}`,
    description:
      pageMetadata.description?.slice(0, 160) || "Alternate description",
    other: {
      author: pageMetadata.author || "Random Coders",
    },
    alternates: {
      canonical: `${basicDetails.websiteURL}/practice/${slug}`,
    },
  };
}

const LearnPage = async ({ params }) => {
  const { slug } = params;

  const allComponents = {
    "logical-programs-list": LogicalPrograms,
    "automation-test-cases": AutomationTestCasesPage,
    courses: CoursesPage,
  };

  const DynamicComponent = allComponents[slug] || null;

  return (
    <div>
      {DynamicComponent ? (
        <DynamicComponent />
      ) : (
        <>
          <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center">
            <h1 className="text-6xl font-bold gradient-title mb-4">204</h1>
            <h2 className="text-2xl font-semibold mb-4">
              Page Under Construction
            </h2>
            <p className="text-gray-600 mb-8">
              Oops! The page you&apos;re looking for is under construction.
              Please try again later.
            </p>
            <Link href="/" passHref>
              <Button>Return Home</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default LearnPage;
