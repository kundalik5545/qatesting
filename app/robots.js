export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `https://${process.env.NEXT_PUBLIC_WEBSITE_URL}/sitemap.xml`,
  };
}
