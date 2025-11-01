import { Link } from "@inertiajs/react";
import React from "react";

export default function Projects() {
  return (
    <div className="border-b-line mx-auto border-b">
      <div className="border-x-line mx-10 border-x px-9 py-9">
        <p className="text-text-primary text-[32px] font-semibold">Projects</p>
        <div className="mt-5 grid grid-cols-2 gap-6 pb-3">
          <Link href="#">
            <img
              src="/img/ui/project1.png"
              className="bg-line aspect-video"
              alt="Project1"
            />
          </Link>
          <Link href="#">
            <img
              src="/img/ui/project2.png"
              className="bg-line aspect-video"
              alt="Project1"
            />
          </Link>
          <Link href="#">
            <img
              src="/img/ui/project3.png"
              className="bg-line aspect-video"
              alt="Project1"
            />
          </Link>
          <Link href="#">
            <img
              src="/img/ui/project3.png"
              className="bg-line aspect-video"
              alt="Project1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
