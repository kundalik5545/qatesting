import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const allElements = [
  {
    title: "Elements",
    logo: "/mainicons/edit.svg",
    Description: "Practice Page Object Model with fakestore",
    footerTitle: "Page Object Model",
    link: "/elements/text-box",
  },
  {
    title: "Input",
    logo: "/mainicons/edit.svg",
    Description: "Interact with different types of input fields",
    footerTitle: "Edit",
    link: "/elements/text-box",
  },
  {
    title: "Button",
    logo: "/mainicons/buttons.svg",
    Description: "Interact with different types of buttons",
    footerTitle: "Click",
    link: "/elements/button",
  },
  {
    title: "Select",
    logo: "/mainicons/select.svg",
    Description: "Interact with different types of drop-down",
    footerTitle: "Select By",
    link: "/elements/text-box",
  },
  {
    title: "Links",
    logo: "/mainicons/edit.svg",
    Description: "Interact with different types of links",
    footerTitle: "On Click",
    link: "/elements/links",
  },
  {
    title: "Alert",
    logo: "/mainicons/alert.svg",
    Description: "Interact with different types of dialog boxes",
    footerTitle: "Dialog",
    link: "/alert-window/alerts",
  },
  {
    title: "Frame",
    logo: "/mainicons/frame.svg",
    Description: "Interact with different types of frames/iframes",
    footerTitle: "Inner HTML",
    link: "/elements/text-box",
  },
  {
    title: "Radio",
    logo: "/mainicons/radio.svg",
    Description: "Interact with different types of radio & check boxes",
    footerTitle: "Toggle",
    link: "/elements/radio-button",
  },
  {
    title: "Window",
    logo: "/mainicons/window.svg",
    Description: "Switch different types of tabs or windows",
    footerTitle: "Tabs",
    link: "/elements/text-box",
  },
  {
    title: "Elements",
    logo: "/mainicons/elements.svg",
    Description: "Play with element and smash them",
    footerTitle: "Find Elements",
    link: "/elements/text-box",
  },
  {
    title: "Drag",
    logo: "/mainicons/drag.svg",
    Description: "Can you Drag me here and there",
    footerTitle: "Just Drag",
    link: "/elements/text-box",
  },
  {
    title: "Drop",
    logo: "/mainicons/falling.svg",
    Description: "Feel free to bounce me",
    footerTitle: "Drop Me",
    link: "/elements/text-box",
  },
  {
    title: "Sort",
    logo: "/mainicons/filter.svg",
    Description: "Sort out the problem quickly",
    footerTitle: "Sort out",
    link: "/elements/text-box",
  },
  {
    title: "Multi-Select",
    logo: "/mainicons/alert.svg",
    Description: "Be a multi-tasker",
    footerTitle: "Page",
    link: "/elements/text-box",
  },
  {
    title: "Slider",
    logo: "/mainicons/slider.svg",
    Description: "Hmm.. Can you slide me?",
    footerTitle: "Page",
    link: "/elements/text-box",
  },
  {
    title: "Waits",
    logo: "/mainicons/waits.svg",
    Description: "It's ok to wait but you know..",
    footerTitle: "Timeout",
    link: "/elements/text-box",
  },
  {
    title: "Table",
    logo: "/mainicons/simtable.svg",
    Description: "It's all about rows & columns",
    footerTitle: "Simple Table",
    link: "/elements/text-box",
  },
  {
    title: "Table",
    logo: "/mainicons/simtable.svg",
    Description: "It's little complicated but give a try",
    footerTitle: "Advance Table",
    link: "/elements/text-box",
  },
  {
    title: "Calendar",
    logo: "/mainicons/calendar.svg",
    Description: "My time is precious & your?",
    footerTitle: "Date & Time",
    link: "/elements/text-box",
  },
  {
    title: "Forms",
    logo: "/mainicons/sign-form.svg",
    Description: "Interact with everything",
    footerTitle: "Submit Me",
    link: "/elements/text-box",
  },
  {
    title: "File",
    logo: "/mainicons/download.svg",
    Description: "All your data is secured!",
    footerTitle: "Upload & Download",
    link: "/elements/upload-download",
  },
  {
    title: "Shadow",
    logo: "/mainicons/mario.svg",
    Description: "Shadow never leaves us alone",
    footerTitle: "DOM",
    link: "/elements/text-box",
  },
];

const PracticePage = () => {
  return (
    <div>
      <div className="practice-section">
        <section className="page-title py-4">
          <h2 className="text-center text-3xl font-semibold">
            Ready to be a Pro Enginner?
          </h2>
          <h3 className="text-center text-xl text-gray-500 ">
            Practice Daily Automation!
          </h3>
        </section>
        <section className="elements grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 pb-0 gap-8 pt-8">
          {allElements?.map((el, i) => {
            return (
              <Card key={i}>
                <CardHeader className="flex flex-row items-center justify-between p-4 shadow-lg dark:shadow-md dark:shadow-gray-800 ">
                  <p className="text-xl font-semibold">{el.title}</p>
                  <Image src={el.logo} width={50} height={50} />
                </CardHeader>
                <CardContent className="pb-3">
                  <p className="py-7 text-base dark:text-gray-200 text-center border-b">
                    {el.Description}
                  </p>
                  <p className="flex items-center justify-center text-center py-2 ">
                    <Link href={el.link}>
                      <span className="underline text-blue-600 dark:text-teal-200 font-light">
                        {el.footerTitle}
                      </span>
                    </Link>
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default PracticePage;
