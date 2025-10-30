"use client";

import { linksTC } from "@/data/elementsTestCases";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const LinksPage = () => {
  const youtubeLink = "";

  return (
    <div className="pt-2">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl pb-4 font-semibold text-gray-900 dark:text-white text-start transition-all duration-300 ease-in-out">
        Link
      </h2>
      {/* Main layout */}
      <div className="flex flex-col sm:flex-row w-full gap-8">
        {/* Main Card Section */}
        <div className="w-full sm:w-2/3 pb-5 md:pb-0">
          <QAPlayGround />
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
            <CardContent>
              <LearningInsight />
            </CardContent>
            <CardFooter>
              <Link href={youtubeLink}>Watch tutorial</Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LinksPage;

const QAPlayGround = () => {
  const [statusCode, setSatusCode] = useState();
  const [statusText, setSatusText] = useState();

  // Define the API call functions
  const allApiCalls = [
    { name: "createdUser", label: "Create User", func: createUser },
    { name: "noContent", label: "No Content", func: noContent },
    { name: "moved", label: "Moved", func: moved },
    { name: "badRequest", label: "Bad Request", func: badRequest },
    { name: "unAuthorized", label: "Unauthorized", func: unAuthorized },
    { name: "forbidden", label: "Forbidden", func: forbidden },
    { name: "notFound", label: "Not Found", func: notFound },
    { name: "deleteReq", label: "Delete Request", func: deleteReq },
  ];

  //   1. Create User API 201
  async function createUser(e) {
    e.preventDefault();
    const Create_Url = "https://reqres.in/api/users";
    const response = await fetch(Create_Url, {
      method: "POST",
      body: JSON.stringify({
        name: "Kundalik",
        job: "Team leader",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const statusCodes = response.status;
    // const statusTexts = response.statusText;
    setSatusCode(statusCodes);
    setSatusText("Created");
  }
  //2. No Content 204
  async function noContent(e) {
    e.preventDefault();
    const NotFound_Url = "https://reqres.in/api/unknown/23";
    const response = await fetch(NotFound_Url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const statusCodes = response.status;
    // const statusTexts = response.statusText;
    setSatusCode("204");
    setSatusText("No Content");
  }

  //3. Moved 301
  async function moved(e) {
    e.preventDefault();
    const NotFound_Url = "https://reqres.in/api/unknown/23";
    const response = await fetch(NotFound_Url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const statusCodes = response.status;
    // const statusTexts = response.statusText;
    setSatusCode("301");
    setSatusText("Moved");
  }

  //4. Bad Request 400
  async function badRequest(ev) {
    ev.preventDefault();
    const Post_Url = "https://reqres.in/api/register";
    const res = await fetch(Post_Url, {
      method: "POST",
      body: JSON.stringify({ email: "sydney@fife" }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const statusCodes = res.status;
    setSatusCode(statusCodes);
    setSatusText("Bad Request");
  }

  //5. UnAuthorized 401
  async function unAuthorized(e) {
    e.preventDefault();
    const NotFound_Url = "https://reqres.in/api/unknown/23";
    const response = await fetch(NotFound_Url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const statusCodes = response.status;
    // const statusTexts = response.statusText;
    setSatusCode("401");
    setSatusText("Un-Authorized");
  }
  //6. Forbidden 403
  async function forbidden(e) {
    e.preventDefault();
    const forbidden_Url = "https://reqres.in/api/register";
    const response = await fetch(forbidden_Url, {
      method: "POST",
      //   body: { email: "eve.holt@reqres.in", password: "pistol" },
      headers: {
        "Content-Type": "application/json",
      },
    });
    const statusCodes = response.status;
    // const statusTexts = response.statusText;
    setSatusCode("403");
    setSatusText("forbidden");
  }
  //7. Not Found 404
  async function notFound(e) {
    e.preventDefault();
    const NotFound_Url = "https://reqres.in/api/unknown/23";
    const response = await fetch(NotFound_Url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const statusCodes = response.status;
    // const statusTexts = response.statusText;
    setSatusCode(statusCodes);
    setSatusText("Not Found");
  }
  // 8. Deleted 204
  async function deleteReq(e) {
    e.preventDefault();
    const Delete_Url = "https://reqres.in/api/users/2";
    const response = await fetch(Delete_Url, {
      method: "Delete",
    });
    const statusCodes = response.status;
    // const statusTexts = response.statusText;
    setSatusCode(statusCodes);
    setSatusText("Deleted");
  }

  const buttonLinks = [
    {
      to: "",
      linkText: "Broken Button",
      target: "_blank",
      cssClass: "p-2",
      variant: "default",
    },
    {
      to: "",
      linkText: "Broken Link Button",
      target: "",
      cssClass: "p-2",
      variant: "destructive",
    },
    {
      to: "/",
      linkText: "Home Button",
      target: "",
      cssClass: "p-2",
      variant: "outline",
    },
  ];
  return (
    <>
      {/* Main Section */}
      <section className="max-w-3xl border p-4 shadow-md rounded-md flex flex-col my-3">
        <h3 className="text-xl py-3">01 Internal Following Links</h3>
        <Link href="/" className="text-blue-600 underline">
          Home
        </Link>
        <Link href="/about-us" className="text-blue-600 underline">
          About Us
        </Link>
      </section>

      <section className="max-w-3xl border p-4 shadow-md rounded-md flex flex-col my-3">
        <h3 className="text-xl py-3">02 External Following link</h3>
        <Link
          href="https://www.javatpoint.com/selenium-tutorial"
          target="_blank"
          className="text-blue-600 underline"
        >
          Selenium Automation Notes
        </Link>
        <Link
          href="https://www.udemy.com/course/selenium-real-time-examplesinterview-questions/?couponCode=LETSLEARNNOWPP"
          target="_blank"
          className="text-blue-600 underline"
        >
          Selenium Complete Course
        </Link>
      </section>

      <section className="max-w-3xl border p-4 shadow-md rounded-md flex flex-col my-3">
        <h3 className="text-xl py-3">03 Link are broken</h3>
        <Link
          href="https://the-internet.herokuapp.com/status_codes/500"
          target="_blank"
          className="text-red-600 underline"
        >
          Broken Link Open in New Tab
        </Link>
        <Link
          href="https://the-internet.herokuapp.com/status_codes/500"
          className="text-red-600 underline"
        >
          Broken Link Page
        </Link>
        <Link href="" className="text-red-600 underline">
          Broken Link
        </Link>
      </section>

      <section className="max-w-3xl border p-4 shadow-md rounded-md flex flex-col my-3">
        <h3 className="text-xl py-3">04 Image links</h3>
        <div className="Image-links flex">
          <Link href="">
            <img
              src=""
              className="rounded float-start"
              alt="Selenium Webdriver symboll"
            />
          </Link>
          <Link href="https://ashisheditz.com/?s=iron+man&rt_post_type=post%3Apage%3Aproduct%3Aweb-story">
            <img
              src="https://ashisheditz.com/wp-content/uploads/2023/10/4k-iron-man-wallpaper.jpg"
              className="rounded float-end mx-3"
              alt="Iron Man"
              width={150}
            />
          </Link>
        </div>
      </section>

      {/* 05 Button links */}
      <section className="max-w-3xl border p-4 shadow-md rounded-md flex flex-col my-3">
        <h3 className="text-xl py-3">05 Button links</h3>
        <div className="button-links">
          {buttonLinks.map((ele, i) => (
            <Link
              href={ele.to}
              target={ele.target}
              key={i}
              className="p-2 flex flex-row  flex-wrap md:flex-nowrap"
            >
              <Button variant={ele.variant}>{ele.linkText}</Button>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-3xl border p-4 shadow-md rounded-md flex flex-col my-3">
        <h3 className="text-xl py-3">06 Text links</h3>
        <div className="flex flex-col p-2 text-blue-700 underline">
          <Link href="/">Homdf56e</Link>
          <Link href="AboutPage">About 32 yhs</Link>
          <Link href="">
            Test Links Page using Selenium Webdriver with Java and C#
          </Link>
          <Link href="#anchorText">Links Anchor Text Test cases TC09</Link>
        </div>
      </section>

      <section className="max-w-3xl border p-4 shadow-md rounded-md flex flex-col my-3">
        <h3 className="text-xl py-3">07 Links with query parameters</h3>

        <section className="p-4">
          {allApiCalls.map((apiCall, i) => (
            <Button
              key={i}
              onClick={apiCall.func}
              type="button"
              asChild
              variant="outline"
              className="m-1 cursor-pointer"
            >
              <span>{apiCall.label}</span>
            </Button>
          ))}
        </section>

        <span>
          Link has responded with staus{" "}
          <span className=" text-red-500">{statusCode}</span> and status text is
          <span className="mx-2 text-red-500">{statusText}</span>
        </span>
      </section>

      <hr />

      {/* Test cases for Practice */}
      <section className="max-w-3xl border p-4 shadow-md rounded-md my-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Test case Id</TableHead>
              <TableHead>Test Case Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {linksTC.map((ele, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{ele.TestId}</TableCell>
                <TableCell>{ele.TestCaseName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </>
  );
};

const LearningInsight = () => {
  return (
    <>
      <ol className="font-light list-decimal pl-6 text-left space-y-1">
        <li>accept()</li>
        <li>dismiss()</li>
        <li>waits()</li>
        <li>sendKeys()</li>
        <li>switchTo()</li>
        <li>getText()</li>
      </ol>
    </>
  );
};
