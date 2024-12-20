import { Button } from "@/components/ui/button";
import React from "react";

const ElementsPage = () => {
  const olList = [
    "Text Box",
    "Check Box",
    "Radio Button",
    "Button",
    "Links",
    "Dynamic Properties",
    "Upload & Download",
  ];
  return (
    <div className="">
      <h3 className="text-xl">Welcome to Alert & Window</h3>
      <p>Here you will learn to automate:</p>
      {olList.map((el, index) => (
        <Button key={index} variant="ghost" className=" my-4 space-x-3">
          {el}
        </Button>
      ))}

      <p>👈 Start automating</p>
    </div>
  );
};

export default ElementsPage;
