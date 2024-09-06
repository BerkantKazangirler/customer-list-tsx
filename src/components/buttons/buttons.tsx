import React, { useEffect, useState } from "react";
function Buttons() {
  return (
    <div className="flex flex-row md:justify-end justify-center relative md:right-5 right-0 py-8 w-full">
      <div className="flex flex-row gap-5">
        <div className="bg-neutral-200 p-4 rounded-xl h-max md:flex hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 16.75C9 16.75 9 19.25 12 19.25C15 19.25 15 16.75 15 16.75M17.25 12V10C17.25 7.1005 14.8995 4.75 12 4.75C9.10051 4.75 6.75 7.10051 6.75 10V12L4.75 16.25H19.25L17.25 12Z"
              stroke="#212529"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="bg-neutral-200 p-4 rounded-xl h-max md:flex hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 6.5L12 12.25L18.5 6.5M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z"
              stroke="#212529"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="bg-neutral-200 p-4 rounded-xl h-max flex-row gap-2 md:flex hidden">
          <img
            src={"./public/user.png"}
            alt="User İmage"
            className="h-6 rounded"
          />
          <span className="text-black font-semibold md:text-lg text-sm">
            Derek Alvarado
          </span>
          <button className="ml-3">
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.25 0.75L4 4.25L0.75 0.75"
                stroke="#ADB5BD"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
