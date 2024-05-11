import ios from "@/data/ios_starter.json";
import Link from "next/link";

export async function generateStaticParams() {
  return ios.map((item) => ({
    product: item.page,
  }));
}

const NextBoilercode = ({ params: { product } }) => {
  const item = ios.find((item) => item.page === product);

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
