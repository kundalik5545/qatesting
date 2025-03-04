import React from "react";
import ButtonPage from "./_components/ButtonCom";
import { basicDetails, pagesTitle } from "@/data/BasicSetting";

export const metadata = {
  title: `${pagesTitle.buttonPage}`,
  description:
    "Test button interactions for automation testing. Simulate clicks, right-clicks, and double-clicks in real-time.",
  keywords: [
    "automation testing",
    "button testing",
    "UI testing",
    "React testing",
    "interactive buttons",
  ],
  robots: "index, follow",
  alternates: {
    canonical: `${basicDetails.websiteURL}/elements/button`,
  },
  // openGraph: {
  //   title: "Button Interaction Testing - Automation Practice",
  //   description: "Test button interactions for automation testing.",
  //   url: "https://example.com/button-testing",
  //   images: [
  //     {
  //       url: "https://example.com/button-testing-thumbnail.jpg",
  //       width: 800,
  //       height: 600,
  //       alt: "Button Testing Playground",
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Button Interaction Testing - Automation Practice",
  //   description: "Test button interactions for automation testing.",
  //   images: ["https://example.com/button-testing-thumbnail.jpg"],
  // },
};

const ButtonMainPage = () => {
  return (
    <div>
      <ButtonPage />
    </div>
  );
};

export default ButtonMainPage;
