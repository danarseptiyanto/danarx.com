import React from "react";
import PlusIconHero from "./PlusIconHero";
import { Link } from "@inertiajs/react";
import LinksHero from "./LinksHero";

export default function Hero() {
  return (
    <>
      <div className="border-b-line mx-auto border-b">
        <div className="border-x-0-line mx-0 flex grid-cols-2 flex-col-reverse border-x-0 md:mx-10 md:grid md:border-x">
          <div className="border-r-line border-r">
            <div className="border-b-line border-b px-5 py-6 md:px-9">
              <PlusIconHero />
              <h1 className="text-text-primary max-w-[600px] py-7 text-[36px] leading-tight font-semibold md:py-9 md:text-[60px] md:leading-16">
                Freelance Fullstack Web Dev Available For Hire
              </h1>
              <PlusIconHero />
            </div>
            <div className="text-text-primary p-5 py-7 text-lg leading-relaxed md:p-9 md:py-9 md:text-xl">
              Hi, I'm Danar Septiyanto, a freelance fullstack web developer
              based in Indonesia. I'm currently working as a freelance web
              developer. I love to build web applications that solve real
              problems.
            </div>
            <div className="flex justify-between">
              <div className="bg-accent-primary border-t-line hidden aspect-square w-[180px] items-center justify-center border-t md:flex">
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
        <div className="border-x-0-line mx-0 border-x-0 py-4 md:mx-10 md:border-x md:py-7"></div>
      </div>
    </>
  );
}
