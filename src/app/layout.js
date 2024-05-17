import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export const metadata = {
  title: "Boilercode Directory - Build Your Next Project Faster",
  description:
    "A curated collection of boilerplates for popular frameworks like NextJS, Android, Apple Swift, React, and more. Start your next project quickly and easily.",
  keywords: [
    "boilerplate",
    "boilercode",
    "web development",
    "front-end",
    "back-end",
    "frameworks",
    "nextjs",
    "android",
    "apple swift",
    "react",
  ],
  author: "Boilercode app",
  robots: "index, follow",
  og: {
    title: "BoilerCode - Your Source for Boilerplate Codes",
    type: "website",
    url: "https://www.boilercode.app",
    description:
      "Discover a collection of boilerplate codes for various technologies such as Next.js, Android, Apple Swift, React, and more on BoilerCode.",
    site_name: "BoilerCode",
    image: "/logo.png",
    image_width: 1200,
    image_height: 630,
  },
  twitter: {
    card: "summary_large_image",
    site: "@boilercode",
    creator: "@kwiktwik_co",
    title: "BoilerCode - Your Source for Boilerplate Codes",
    description:
      "Discover a collection of boilerplate codes for various technologies such as Next.js, Android, Apple Swift, React, and more on BoilerCode.",
    image: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-GVF886TXYL" />
    </html>
  );
}
