import React from "react";
import WritingCard from "./WritingCard";

export default function Writings() {
  return (
    <>
      <div className="border-b-line mx-auto border-b">
        <div className="border-x-line mx-10 border-x">
          <div className="px-9 py-9">
            <p className="text-text-primary text-[32px] font-semibold">
              Writings
            </p>
            <p className="text-text-secondary max-w-[821px] text-xl">
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
        <div className="border-x-line mx-10 border-x py-7"></div>
      </div>
    </>
  );
}
