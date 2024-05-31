import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: ["https://www.boilercode.app/sitemap.xml","https://www.boilercode.app/blog/blog-sitemap.xml"],
  };
}
