import { siteMapUrls } from "@/data/sitemap-links";

export default async function sitemap() {
  const posts = siteMapUrls.map((link) => ({
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${link.url}`,
    // lastModified: new Date(),
    changeFrequency: "weekly",
    // priority: 0.5,
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/about-us`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/contact-us`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/privacy-policy`,
    },
    ...posts,
  ];
}
