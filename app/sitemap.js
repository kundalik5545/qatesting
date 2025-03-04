import { basicDetails } from "@/data/BasicSetting";
import { siteMapUrls } from "@/data/sitemap-links";

export default async function sitemap() {
  const posts = siteMapUrls.map((link) => ({
    url: `${basicDetails.websiteURL}/${link.url}`,
    // lastModified: new Date(),
    changeFrequency: "weekly",
    // priority: 0.5,
  }));

  return [
    {
      url: `${basicDetails.websiteURL}/about-us`,
    },
    {
      url: `${basicDetails.websiteURL}/contact-us`,
    },
    {
      url: `${basicDetails.websiteURL}/privacy-policy`,
    },
    ...posts,
  ];
}
