import Link from "next/link";

export function StarterKit({
  data,
  isSpecial = false,
  title,
  type,
  viewAll = true,
}) {
  return (
    <div className="container mx-auto space-y-6 p-5">
      <h2 className="md:text-3xl text-lg font-semibold block">{title}</h2>
      {isSpecial && (
        <div>
          <Link
            href={`/nextjs/${data[0].page}`}
            className="bg-[#FFF9F3] shadow-[5px_5px_0px_0px_#080a47] border-2 border-[#080a47] rounded-md p-5 space-y-4 block"
          >
            <div>
              <h2 className="text-lg font-semibold flex items-center justify-between">
                <span>Launchify</span>
                <div className="flex space-x-2">
                  <img
                    src="https://www.launchify.club/logo.png"
                    className="h-8 w-8 object-contain rounded-md "
                  />
                </div>
              </h2>
              <span className="capitalize text-white bg-[#C08261] text-sm px-2 py-0.5 rounded-md font-semibold">
                Freemium
              </span>
            </div>
            {/* <span className="capitalize text-white bg-[#9A3B3B] text-sm px-2 py-0.5 rounded-md font-semibold">
              {item.category}
            </span> */}

            <p className="leading-6 line-clamp-3">
              Ship 🚀 your Startup in Days, not Weeks Prebuilt UI components,
              <br />
              ready-to-use NextJS boilerplate codes & AI integration to make
              your app Production ready
            </p>

            <div className="text-center text-sm font-semibold bg-[#B784B7] rounded-md px-2 py-1 text-white hover:bg-opacity-80 transition duration-300 ease-in-out">
              Details
            </div>
          </Link>
        </div>
      )}
      <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {data.slice(1).map((item) => (
          <Link
            href={`/${type}/${item.page}`}
            key={item.url}
            className="bg-[#FFF9F3] shadow-[5px_5px_0px_0px_#080a47] border-2 border-[#080a47] container rounded-md p-5 space-y-4"
          >
            <div>
              <h2 className="text-lg font-semibold flex items-center justify-between">
                <span>{item.title}</span>
                <div className="flex space-x-2">
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${
                      item.url
                    }&sz=${256}`}
                    className="h-8 w-8 object-contain rounded-md "
                  />
                </div>
              </h2>
              <span className="capitalize text-white bg-[#C08261] text-sm px-2 py-0.5 rounded-md font-semibold">
                {item.category}
              </span>
            </div>
            {/* <span className="capitalize text-white bg-[#9A3B3B] text-sm px-2 py-0.5 rounded-md font-semibold">{item.category}</span> */}

            <p className="leading-6 line-clamp-3">{item.fullDescription}</p>

            <div className="text-center text-sm font-semibold bg-[#B784B7] rounded-md px-2 py-1 text-white hover:bg-opacity-80 transition duration-300 ease-in-out">
              Details
            </div>
          </Link>
        ))}
      </div>
      {viewAll && (
        <Link
          className="bg-[#3A30BA] text-white rounded-3xl px-12 py-3 inline-block"
          href={`/${type}`}
        >
          View All
        </Link>
      )}
    </div>
  );
}
