import next_starter from "@/data/next_starter.json";
import ios_starter from "@/data/ios_starter.json";
import { StarterKit } from "@/components/starter";

const BoilerCode = () => {
  return (
    <div className="space-y-6 py-12 px-5">
      <div className="flex justify-center">
        <h1 className="md:text-4xl text-lg text-center border-2 inline-block rounded-3xl p-3 px-5 text-[#3A38B7] font-semibold">
          Collection of boilerplate codes for NextJS, iOS, and other platforms
        </h1>
      </div>
      <StarterKit
        type="nextjs"
        title="NextJS Boilerplates"
        isSpecial
        data={next_starter.slice(0, 8)}
      />
      <StarterKit type="ios" title="Ios Boilerplates" data={ios_starter} />
    </div>
  );
};

export default BoilerCode;
