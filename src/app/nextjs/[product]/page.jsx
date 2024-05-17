import next_starter from "@/data/next_starter.json";
import Link from "next/link";

export async function generateStaticParams() {
  return next_starter.map((item) => ({
    product: item.page,
  }));
}

export const generateMetadata = ({ params: { product } }) => {
  const item = next_starter.find((item) => item.page === product);

  return {
    title: `${item.title} - ${item.text}`,
    description: item.fullDescription,
    keywords: [
      item.title,
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
    alternates: {
      canonical: `https://www.boilercode.app/${product}`,
    },
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
};

const NextBoilercode = ({ params: { product } }) => {
  const item = next_starter.find((item) => item.page === product);

  return (
    <div className="container flex justify-center mx-auto items-center min-h-screen">
      <div className="bg-[#FFF9F3] shadow-[5px_5px_0px_0px_#080a47] border-2 border-[#080a47] container rounded-md md:w-[560px] space-y-6 p-5">
        <div className="text-2xl font-semibold text-center flex justify-between">
          <h1>{item.title}</h1>
          <img
            src={`https://www.google.com/s2/favicons?domain=${
              item.url
            }&sz=${256}`}
            className="h-8 w-8 object-contain rounded-md "
          />
        </div>
        <p>{item.fullDescription}</p>
        <Link
          className="bg-[#3A30BA] hover:outline-2 hover:outline-blue-300 text-white rounded-xl px-5 py-1 text-sm inline-block w-full text-center"
          href={item.url}
        >
          Visit
        </Link>
      </div>
    </div>
  );
};

export default NextBoilercode;
