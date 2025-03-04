import { basicDetails } from "@/data/BasicSetting";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${basicDetails.websiteURL}/sitemap.xml`,
  };
}
