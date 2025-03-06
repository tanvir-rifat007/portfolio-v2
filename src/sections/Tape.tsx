import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

// dark:from-[#0f2027] dark:to-[#203a43] dark:text-white
const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div
        className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1
        dark:from-[#d3e2a2] dark:to-[#4a5568] dark:text-white
      "
      >
        <div className="flex  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3 animate-move-left [animation-duration:30s]">
            {new Array(2).fill(0).map((_, i) => (
              <Fragment key={i}>
                {words.map((word) => {
                  return (
                    <div key={word} className="inline-flex gap-4 items-center">
                      <span
                        className="text-gray-900 
                  dark:text-[#112A46]
                  uppercase font-extrabold text-sm"
                      >
                        {word}
                      </span>
                      <StarIcon className="size-6 text-gray-900 -rotate-12 dark:text-[#112A46]" />
                    </div>
                  );
                })}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
