import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AutomationTestCasesPage = () => {
  const accordionList = [
    {
      title: "Registration Page",
      steps: ["Go to home page", "Enter url on chrome"],
    },
    {
      title: "Login Page",
      steps: [
        "Verify login with correct credentials",
        "Verify login with in-valid credentials.",
      ],
    },
  ];
  return (
    <div className="max-w-5xl mx-auto p-3 md:p-6">
      <h2 className="text-3xl">Automation Test Cases For Practice!</h2>
      {accordionList.map((el, i) => {
        return (
          <Accordion type="single" collapsible key={i}>
            <AccordionItem value="item-1">
              <AccordionTrigger>{el.title}</AccordionTrigger>
              {el.steps.map((e, i) => {
                return (
                  <AccordionContent key={i}>{`Test Case ${
                    i + 1
                  }:- ${e}`}</AccordionContent>
                );
              })}
            </AccordionItem>
          </Accordion>
        );
      })}

      <div className="pt-5 ">
        <h3 className="text-xl">Registration Page Test Cases</h3>
        <div>
          <ul className="list-disc pl-8 pt-3">
            <li>Verify login page</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AutomationTestCasesPage;
