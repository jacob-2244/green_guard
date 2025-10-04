"use client";
import React from "react";

type Props = {
  show: boolean;
};

const ScrollToTop = ({ show }: Props) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null; 
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 flex  h-12 w-12 items-center justify-center rounded-full bg-app_primary text-white shadow-lg transition-all hover:bg-white hover:text-app_primary animate-bounce duration-1000"
    >
      <svg
        className="h-6 w-6 rotate-90" 
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z"
        />
      </svg>
    </button>
  );
};

export default ScrollToTop;
