import { basicDetails, pageKeywords, pagesTitle } from "@/data/BasicSetting";

import TextBoxPage from "../_components/TextBoxPage";

export const metadata = {
  title: `${pagesTitle.textBox}`,
  description:
    "Test button interactions for automation testing. Simulate clicks, right-clicks, and double-clicks in real-time.",
  keywords: `${pageKeywords.textBox}`,
  robots: "index, follow",
  alternates: {
    canonical: `${basicDetails.websiteURL}/elements/text-box`,
  },
};

export default function TextBoxPageWrapper() {
  return <TextBoxPage />;
}
