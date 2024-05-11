import { StarterKit } from "@/components/starter";
import next_starter from "@/data/next_starter.json";

const Boilerplates = () => {
  return (
    <StarterKit
      viewAll={false}
      type="nextjs"
      title="NextJS Boilerplates"
      isSpecial
      data={next_starter}
    />
  );
};

export default Boilerplates;
