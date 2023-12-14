import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Summary = () => {
  return (
    <div className="px-5 py-10 md:px-20 md:py-10 space-y-5">
      <div>
        <h2 className="text-[1.7rem] md:text-6xl font-SecondaryFont">
          Vintage Watch is home to an exceptional collection of certified
          pre-owned luxury watches and accessories.
        </h2>
      </div>
      <div>
        <Link
          href={"/about-us"}
          className="flex items-center gap-2 justify-end group"
        >
          <h2 className="text-lg">Know more</h2>
          <MoveRight
            strokeWidth={1}
            className="mt-1 transition-all ease-in-out group-hover:-rotate-90"
          />
        </Link>
      </div>
    </div>
  );
};

export default Summary;
