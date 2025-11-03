import React from "react";

export default function ButttonSecondary({ label, type }) {
  return (
    <button
      type={type}
      className="text-text-primary border-line hover:bg-accent-secondary/30 flex h-[61px] cursor-pointer items-center justify-center rounded-full border px-7 pb-0.5 text-xl font-bold transition-colors duration-200"
    >
      {label}
    </button>
  );
}
