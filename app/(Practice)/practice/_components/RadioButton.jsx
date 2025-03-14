"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

const RadioButtonPage = () => {
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

export default RadioButtonPage;

const QAPlayGround = () => {
  const [selectedRadio, setSelectedRadio] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [acceptTerms, setAcceptTerms] = useState(false);
  return (
    <>
      <div className="space-y-4">
        {/* Select any one */}
        <div>
          <p className="font-semibold">Select any one</p>
          <label className="flex items-center space-x-2">
            <input type="radio" name="selectOne" value="yes" />
            <span>Yes</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="selectOne" value="no" />
            <span>No</span>
          </label>
        </div>

        {/* Confirm selection */}
        <div>
          <p className="font-semibold">
            Confirm you can select only one radio button
          </p>
          <label className="flex items-center space-x-2">
            <input type="radio" name="confirm" value="yes" />
            <span>Yes</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="confirm" value="no" />
            <span>No</span>
          </label>
        </div>

        {/* Find the bug */}
        <div>
          <p className="font-semibold">Find the bug</p>
          <label className="flex items-center space-x-2 radio">
            <input type="radio" name="nobug" value="yes" />
            <span>Yes</span>
          </label>
          <label className="flex items-center space-x-2 radio">
            <input type="radio" name="bug" value="no" />
            <span>No</span>
          </label>
        </div>

        {/* Find which one is selected */}
        <div>
          <p className="font-semibold">Find which one is selected</p>
          <label className="flex items-center space-x-2">
            <input type="radio" name="find" value="foo" />
            <span>Foo</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="find" value="bar" />
            <span>Bar</span>
          </label>
        </div>

        {/* Confirm last field is disabled */}
        <div>
          <p className="font-semibold">Confirm last field is disabled</p>
          <label className="flex items-center space-x-2">
            <input type="radio" name="disabled" value="going" />
            <span>Going</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="disabled" value="not-going" />
            <span>Not going</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="disabled" value="maybe" disabled />
            <span>Maybe</span>
          </label>
        </div>

        {/* Checkbox selection */}
        <div>
          <p className="font-semibold">Find if the checkbox is selected?</p>
          <label className="flex items-center space-x-2">
            <Checkbox checked={rememberMe} onCheckedChange={setRememberMe} />
            <span>Remember me</span>
          </label>
        </div>

        {/* Accept T&C */}
        <div>
          <p className="font-semibold">Accept the T&C</p>
          <label className="flex items-center space-x-2">
            <Checkbox checked={acceptTerms} onCheckedChange={setAcceptTerms} />
            <span>I agree to the FAKE terms and conditions</span>
          </label>
        </div>
      </div>
    </>
  );
};

const LearningInsight = () => {
  return (
    <>
      <ol className="font-light list-decimal pl-6 text-left space-y-1">
        <li>click()</li>
        <li>isSelected()</li>
        <li>isEnabled()</li>
      </ol>
    </>
  );
};
