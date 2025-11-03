import React from "react";

export default function ButtonPrimary({ label, type }) {
  return (
    <button
      type={type}
      className="bg-accent-secondary text-text-primary hover:bg-accent-primary flex h-[61px] cursor-pointer items-center justify-center rounded-full px-7 pb-0.5 text-xl font-bold transition-colors duration-200"
    >
      {label}
    </button>
  );
}
