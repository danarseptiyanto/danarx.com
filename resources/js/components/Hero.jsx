import React from "react";
import PlusIconHero from "./PlusIconHero";
import { Link } from "@inertiajs/react";
import LinksHero from "./LinksHero";

export default function Hero() {
  return (
    <>
      <div className="border-b-line mx-auto border-b">
        <div className="border-x-line mx-10 grid grid-cols-2 border-x">
          <div className="border-r-line border-r">
            <div className="border-b-line border-b px-9 py-6">
              <PlusIconHero />
              <h1 className="text-text-primary max-w-[600px] py-9 text-[60px] leading-16 font-semibold">
                Freelance Fullstack Web Dev Available For Hire
              </h1>
              <PlusIconHero />
            </div>
            <div className="text-text-primary p-9 text-xl leading-relaxed">
              Hi, I'm Danar Septiyanto, a freelance fullstack web developer
              based in Indonesia. I'm currently working as a freelance web
              developer. I love to build web applications that solve real
              problems.
            </div>
            <div className="flex justify-between">
              <div className="bg-accent-primary flex aspect-square w-[180px] items-center justify-center">
                <svg
                  width="96"
                  height="96"
                  viewBox="0 0 96 96"
                  className="fill-text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M64.0148 37.6568L29.5885 72.0832L23.9316 66.4264L58.358 32H28.0149V24H72.0148V68H64.0148V37.6568Z" />
                </svg>
              </div>
              <div className="grid w-full grid-cols-2">
                <LinksHero url="#" name="Github" />
                <LinksHero url="#" name="Project" />
                <LinksHero url="#" name="Instagram" />
                <LinksHero url="#" name="Writing" />
                <LinksHero url="#" name="Dribbble" />
                <LinksHero url="#" name="Contact" />
              </div>
            </div>
          </div>
          <div className="bg-line">
            <img className="h-full object-cover" src="/img/ui/hero.png" />
          </div>
        </div>
      </div>
      <div className="border-b-line mx-auto border-b">
        <div className="border-x-line mx-10 border-x py-7"></div>
      </div>
    </>
  );
}
