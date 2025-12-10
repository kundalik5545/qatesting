"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const WaitPage = () => {
  const youtubeLink = "";

  return (
    <div className="pt-2">
      {/* Main layout */}
      <div className="flex flex-col sm:flex-row w-full gap-4">
        {/* Main Card Section */}
        <div className="w-full sm:w-2/3 pb-5 md:pb-0">
          <Card className="w-full shadow-lg rounded-xl dark:bg-gray-800">
            <CardContent className="space-y-4 pt-4 sm:pt-3 text-sm sm:text-base text-gray-900 dark:text-gray-200">
              <QAPlayGround />
            </CardContent>
          </Card>
        </div>

        {/* Insight Card */}
        <div className="w-full sm:w-1/3">
          <Card className="w-full shadow-lg rounded-xl dark:bg-gray-800">
            <CardHeader className="flex flex-row items-center justify-between p-4 shadow-md dark:shadow-gray-800">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                Insight
              </p>
              <GraduationCap className="text-gray-700 dark:text-teal-300" />
            </CardHeader>
            <CardContent className="p-4 text-center text-gray-800 dark:text-gray-300">
              <p className="font-light py-3 text-base">
                On completion of this exercise, you can learn the following
                concepts:
              </p>
              <LearningInsight />
            </CardContent>
            <CardFooter className="flex justify-center border-t border-gray-200 dark:border-gray-700 p-4">
              <Link
                href={youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="underline text-blue-600 dark:text-teal-200 font-light hover:text-blue-800 dark:hover:text-teal-300">
                  Watch tutorial
                </span>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WaitPage;

const QAPlayGround = () => {
  return (
    <>
      <SimpleAlert />
      <p className="mt-2">
        Handle element is visible with explicit and implicit waits
        <ol>
          <li>1. Waiting for Page to Load</li>
          <li>2. Waiting for an Element to be Clickable</li>
          <li>3. Waiting for an Element to be Visible</li>
        </ol>
      </p>
    </>
  );
};

const LearningInsight = () => {
  return (
    <>
      <ol className="font-light list-decimal pl-6 text-left space-y-1">
        <li>Explicit Wait</li>
        <li>Implicit Wait</li>
        <li>Normal Wait</li>
        <li>Selenium Wait helpers class</li>
      </ol>
    </>
  );
};

const SimpleAlert = () => {
  return (
    <>
      <p className="waitTillAlert">Wait for 2 Sec until alert is visible.</p>
      <Button
        onClick={() => {
          setTimeout(() => {
            alert(
              "✅ Appreciate you waiting! I had to negotiate a peace treaty with my 🕓 alarm clock."
            );
          }, 2000);
        }}
      >
        Simple Alert
      </Button>
    </>
  );
};

// Alert
