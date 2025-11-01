import React from "react";
import { Link } from "@inertiajs/react";

export default function LinksHero({ url, name }) {
  return (
    <Link
      href={url}
      className="border-t-line hover:bg-accent-primary/90 flex items-center justify-between border-t pl-6 transition-colors duration-300"
    >
      <p className="text-text-primary">{name}</p>
      <div className="bg-line flex aspect-square h-full items-center justify-center">
        <svg
          width="33"
          height="33"
          viewBox="0 0 33 33"
          className="fill-text-primary"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22.0051 12.9445L10.1711 24.7786L8.22656 22.8341L20.0606 11H9.63019V8.25H24.7551V23.375H22.0051V12.9445Z" />
        </svg>
      </div>
    </Link>
  );
}
