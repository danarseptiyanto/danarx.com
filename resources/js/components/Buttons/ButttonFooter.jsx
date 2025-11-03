import React from "react";

export default function ButttonFooter({ label, type }) {
  return (
    <button
      type={type}
      className="text-text-primary hover:text-accent-primary flex cursor-pointer items-center gap-2 text-lg font-bold duration-200"
    >
      {label}
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.03027 0.75H12.5303M12.5303 0.75V12.25M12.5303 0.75L0.530273 12.75"
          stroke="#F97316"
          stroke-width="1.5"
        />
      </svg>
    </button>
  );
}
