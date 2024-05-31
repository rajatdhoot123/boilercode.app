/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/blog/sitemap.xml",
        destination:
          "https://blogs-theta-six.vercel.app/blog/blog.boilercode.app/sitemap.xml",
      },
      {
        source: "/blog",
        destination:
          "https://blogs-theta-six.vercel.app/blog/blog.boilercode.app",
      },
      {
        source: "/blog/:path*",
        destination: "https://blogs-theta-six.vercel.app/blog/:path*",
      },
      {
        source: "/blog/blog-sitemap.xml",
        destination:
          "https://blogs-theta-six.vercel.app/blog/blog.boilercode.app/sitemap.xml",
      },
    ];
  },
};

export default nextConfig;
