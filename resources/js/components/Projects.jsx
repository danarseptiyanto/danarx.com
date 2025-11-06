import { Link } from "@inertiajs/react";
import React from "react";

export default function Projects() {
  return (
    <div className="border-b-line mx-auto border-b">
      <div className="border-x-0-line mx-0 border-x-0 px-5 py-7 md:mx-10 md:border-x md:px-9 md:py-9">
        <p className="text-text-primary text-xl font-semibold md:text-[32px]">
          Projects
        </p>
        <div className="mt-5 grid grid-cols-1 gap-5 pb-3 md:grid-cols-2 md:gap-6">
          <Link href="#">
            <img
              src="/img/ui/project1.png"
              className="bg-line hover:bg-accent-primary aspect-video w-full transition-colors duration-200"
              alt="Project1"
            />
          </Link>
          <Link href="#">
            <img
              src="/img/ui/project2.png"
              className="bg-line hover:bg-accent-primary aspect-video w-full transition-colors duration-200"
              alt="Project1"
            />
          </Link>
          <Link href="#">
            <img
              src="/img/ui/project3.png"
              className="bg-line hover:bg-accent-primary aspect-video w-full transition-colors duration-200"
              alt="Project1"
            />
          </Link>
          <Link href="#">
            <img
              src="/img/ui/project3.png"
              className="bg-line hover:bg-accent-primary aspect-video w-full transition-colors duration-200"
              alt="Project1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
