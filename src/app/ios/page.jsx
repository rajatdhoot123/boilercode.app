"use client";
import { StarterKit } from "@/components/starter";
import next_starter from "@/data/next_starter.json";
import ios_starter from "@/data/ios_starter.json";
import { usePathname } from "next/navigation";

const TITLE = {
  "/ios": "Ios Boilerplates",
  "/nextjs": "NextJS Boilerplates",
};

const Boilerplates = () => {
  const pathname = usePathname();

  return (
    <StarterKit
      viewAll={false}
      type="nextjs"
      title={TITLE[pathname]}
      data={pathname === "/ios" ? ios_starter : next_starter}
    />
  );
};

export default Boilerplates;
