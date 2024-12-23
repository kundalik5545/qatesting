"use client";

import { Button } from "@/components/ui/button";
import React from "react";

const ButtonPage = () => {
  const handleSimpleAlert = () => {
    alert("handleSimpleAlert");
  };
  const handleAlertWithCheckBox = () => {
    alert("handleAlertWithCheckBox");
  };
  const handleAfterClick = () => {
    alert("handleAfterClick");
  };
  const handleAfterSomeTime = () => {
    alert("handleAfterSomeTime");
  };

  const allAlertsBtn = [
    { btnText: "Simple Alert", handleOnClick: handleSimpleAlert },
    { btnText: "Alert with checkbox", handleOnClick: handleAlertWithCheckBox },
    { btnText: "Simple Alert", handleOnClick: handleAfterClick },
    { btnText: "Simple Alert", handleOnClick: handleAfterSomeTime },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="gradient-subTitle text-3xl">Alerts</h2>
      <section className="my-3">
        {allAlertsBtn.map((al, i) => (
          <Button
            key={i}
            id={al.btnText}
            onClick={al.handleOnClick}
            type="button"
            variant="outline"
            className="flex flex-row items-center justify-center text-center p-4"
          >
            {al.btnText}
          </Button>
        ))}
      </section>
    </div>
  );
};

export default ButtonPage;
