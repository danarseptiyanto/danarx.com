import React from "react";
import { Link } from "@inertiajs/react";

export default function WritingCard({ title, url }) {
  return (
    <div className="border-t-line flex items-center gap-4 border-t md:gap-6">
      <div className="border-r-line flex aspect-square w-[147px] items-center justify-center border-r">
        <svg
          viewBox="0 0 96 96"
          className="fill-text-primary aspect-square h-20 md:h-24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M64.0148 37.6568L29.5885 72.0832L23.9316 66.4264L58.358 32H28.0149V24H72.0148V68H64.0148V37.6568Z" />
        </svg>
      </div>
      <Link
        className="text-text-primary py-1 pr-5 text-base font-semibold md:text-xl"
        href={url}
      >
        {title}
      </Link>
    </div>
  );
}
