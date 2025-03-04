import RadioButtonPage from "../_components/RadioButton";
import {
  basicDetails,
  pageKeywords,
  pagesDescription,
  pagesTitle,
} from "@/data/BasicSetting";

export const metadata = {
  title: `${pagesTitle.radioButtonPage}`,
  description: `${pagesDescription.radioButtonPage}`,
  keywords: `${pageKeywords.radioButtonPage}`,
  robots: "index, follow",
  alternates: {
    canonical: `${basicDetails.websiteURL}/elements/text-box`,
  },
};

export default function RadioButtonWrapper() {
  return <RadioButtonPage />;
}
