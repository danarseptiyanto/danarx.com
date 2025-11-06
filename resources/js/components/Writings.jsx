import React from "react";
import WritingCard from "./WritingCard";

export default function Writings() {
  return (
    <>
      <div className="border-b-line mx-auto border-b">
        <div className="border-x-0-line border-x-0 md:mx-10 md:border-x">
          <div className="px-5 py-6 md:px-9 md:py-9">
            <p className="text-text-primary mb-2.5 text-xl font-semibold md:text-[32px]">
              Writings
            </p>
            <p className="text-text-secondary max-w-[821px] text-base md:text-xl">
              We are the creators, maintainers, and contributors of some of the
              most critical infrastructure projects in the JavaScript ecosystem.
            </p>
          </div>
          <WritingCard
            title="Tailwind CSS is so intuitive that if you know CSS, you know Tailwind"
            url="#"
          />
          <WritingCard
            title="Tailwind CSS is so intuitive that if you know CSS, you know Tailwind"
            url="#"
          />
          <WritingCard
            title="Tailwind CSS is so intuitive that if you know CSS, you know Tailwind"
            url="#"
          />
        </div>
      </div>
      <div className="border-b-line mx-auto border-b">
        <div className="border-x-0-line border-x-0 py-5 md:mx-10 md:border-x md:py-7"></div>
      </div>
    </>
  );
}
