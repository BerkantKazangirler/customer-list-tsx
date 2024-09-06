import React, { useEffect, useState } from "react";

function SideBar() {
  const [sideBarStyle, setSideBarStyle] = useState(true);

  return (
    <>
      {sideBarStyle && (
        <div>
          <div className="bg-neutral-900 h-screen text-white px-12 py-8 hidden md:flex flex-col gap-5">
            <div className="flex flex-row justify-between w-full">
              <span className="font-bold text-4xl font-mono">Brand.</span>
              <button
                className="bg-neutral-200 p-4 rounded-xl h-max left-16 relative z-20"
                onClick={() => setSideBarStyle((t) => !t)}
              >
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.54165 0.625L0.958313 5L5.54165 9.375M13.0416 5H1.16665"
                    stroke="#212529"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-row w-full mt-8 p-4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="self-center"
              >
                <path
                  d="M2.75024 15.2502H13.2502C14.3548 15.2502 15.2502 14.3548 15.2502 13.2502V5.75025L8.0002 0.750244L0.750244 5.75025V13.2502C0.750244 14.3548 1.64568 15.2502 2.75024 15.2502Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.74963 11.7493C5.74963 10.6447 6.6451 9.7493 7.7496 9.7493H8.2496C9.3542 9.7493 10.2496 10.6447 10.2496 11.7493V15.2493H5.74963V11.7493Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span className="uppercase ml-3">Dashboard</span>
            </div>
            <div className="flex flex-row w-full p-4 rounded-xl bg-neutral-800">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="self-center"
              >
                <path
                  d="M11.75 10C13.8288 10 14.6802 12.1479 15.0239 13.696C15.2095 14.532 14.5333 15.25 13.6769 15.25H12.75M10.75 6.25C12.2688 6.25 13.25 5.01878 13.25 3.5C13.25 1.98122 12.2688 0.75 10.75 0.75M1.78167 15.25H9.21829C9.78279 15.25 10.227 14.7817 10.1145 14.2285C9.80399 12.7012 8.78969 10 5.49999 10C2.2103 10 1.19604 12.7012 0.885478 14.2285C0.772988 14.7817 1.21717 15.25 1.78167 15.25ZM8.24999 3.5C8.24999 5.01878 7.01877 6.25 5.49999 6.25C3.98121 6.25 2.74999 5.01878 2.74999 3.5C2.74999 1.98122 3.98121 0.75 5.49999 0.75C7.01877 0.75 8.24999 1.98122 8.24999 3.5Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span className="uppercase ml-3">Custommers</span>
            </div>
            <div className="flex flex-row w-full p-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="self-center"
              >
                <path
                  d="M11.75 5V10.25C11.75 11.3546 12.6454 12.25 13.75 12.25H19M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span className="uppercase ml-3">Analytics</span>
            </div>
            <span className="uppercase text-sm text-neutral-700 opacity-70 font-mono">
              Settings
            </span>
            <div className="flex flex-row w-full p-4">
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="self-center"
              >
                <path
                  d="M1.5 1.5L8 7.25L14.5 1.5M0.75 2.75C0.75 1.64543 1.64543 0.75 2.75 0.75H13.25C14.3546 0.75 15.25 1.64543 15.25 2.75V11.25C15.25 12.3546 14.3546 13.25 13.25 13.25H2.75C1.64543 13.25 0.75 12.3546 0.75 11.25V2.75Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span className="uppercase ml-3">Messages</span>
            </div>
            <div className="flex flex-row w-full p-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="self-center"
              >
                <path
                  d="M4.75 8H7.25M12.75 8H19.25M4.75 16H12.25M17.75 16H19.25M12.25 8C12.25 9.24264 11.2426 10.25 10 10.25C8.75736 10.25 7.75 9.24264 7.75 8C7.75 6.75736 8.75736 5.75 10 5.75C11.2426 5.75 12.25 6.75736 12.25 8ZM17.25 16C17.25 17.2426 16.2426 18.25 15 18.25C13.7574 18.25 12.75 17.2426 12.75 16C12.75 14.7574 13.7574 13.75 15 13.75C16.2426 13.75 17.25 14.7574 17.25 16Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span className="uppercase ml-3">Setting</span>
            </div>
            <div className="flex flex-row w-full p-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="self-center"
              >
                <path
                  d="M9.75 10C9.75 10 10 7.75 12 7.75C14 7.75 14.25 9 14.25 10C14.25 10.7513 13.8266 11.5027 12.9798 11.8299C12.4647 12.0289 12 12.4477 12 13V13.25M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12ZM12.5 16C12.5 16.2761 12.2761 16.5 12 16.5C11.7239 16.5 11.5 16.2761 11.5 16C11.5 15.7239 11.7239 15.5 12 15.5C12.2761 15.5 12.5 15.7239 12.5 16Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span className="uppercase ml-3">Help Centre</span>
            </div>
          </div>

          <div className="bg-neutral-900 h-screen w-40 text-white px-12 py-8 flex md:hidden flex-col justify-between gap-5">
            <div>
              <div className="flex flex-row justify-between w-full">
                <span className="font-bold text-4xl font-mono">B.</span>
              </div>

              <div className="flex flex-row w-full justify-center mt-8 p-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="self-center"
                >
                  <path
                    d="M2.75024 15.2502H13.2502C14.3548 15.2502 15.2502 14.3548 15.2502 13.2502V5.75025L8.0002 0.750244L0.750244 5.75025V13.2502C0.750244 14.3548 1.64568 15.2502 2.75024 15.2502Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.74963 11.7493C5.74963 10.6447 6.6451 9.7493 7.7496 9.7493H8.2496C9.3542 9.7493 10.2496 10.6447 10.2496 11.7493V15.2493H5.74963V11.7493Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-row w-full p-4 justify-center rounded-xl bg-neutral-800">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="self-center"
                >
                  <path
                    d="M11.75 10C13.8288 10 14.6802 12.1479 15.0239 13.696C15.2095 14.532 14.5333 15.25 13.6769 15.25H12.75M10.75 6.25C12.2688 6.25 13.25 5.01878 13.25 3.5C13.25 1.98122 12.2688 0.75 10.75 0.75M1.78167 15.25H9.21829C9.78279 15.25 10.227 14.7817 10.1145 14.2285C9.80399 12.7012 8.78969 10 5.49999 10C2.2103 10 1.19604 12.7012 0.885478 14.2285C0.772988 14.7817 1.21717 15.25 1.78167 15.25ZM8.24999 3.5C8.24999 5.01878 7.01877 6.25 5.49999 6.25C3.98121 6.25 2.74999 5.01878 2.74999 3.5C2.74999 1.98122 3.98121 0.75 5.49999 0.75C7.01877 0.75 8.24999 1.98122 8.24999 3.5Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-row mx-auto justify-center p-4">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="self-center"
                >
                  <path
                    d="M11.75 5V10.25C11.75 11.3546 12.6454 12.25 13.75 12.25H19M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-row w-full justify-center p-4">
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="self-center"
                >
                  <path
                    d="M1.5 1.5L8 7.25L14.5 1.5M0.75 2.75C0.75 1.64543 1.64543 0.75 2.75 0.75H13.25C14.3546 0.75 15.25 1.64543 15.25 2.75V11.25C15.25 12.3546 14.3546 13.25 13.25 13.25H2.75C1.64543 13.25 0.75 12.3546 0.75 11.25V2.75Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex justify-center w-full p-4 flex-row">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="self-center"
                >
                  <path
                    d="M4.75 8H7.25M12.75 8H19.25M4.75 16H12.25M17.75 16H19.25M12.25 8C12.25 9.24264 11.2426 10.25 10 10.25C8.75736 10.25 7.75 9.24264 7.75 8C7.75 6.75736 8.75736 5.75 10 5.75C11.2426 5.75 12.25 6.75736 12.25 8ZM17.25 16C17.25 17.2426 16.2426 18.25 15 18.25C13.7574 18.25 12.75 17.2426 12.75 16C12.75 14.7574 13.7574 13.75 15 13.75C16.2426 13.75 17.25 14.7574 17.25 16Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-row w-full justify-center p-4">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="self-center"
                >
                  <path
                    d="M9.75 10C9.75 10 10 7.75 12 7.75C14 7.75 14.25 9 14.25 10C14.25 10.7513 13.8266 11.5027 12.9798 11.8299C12.4647 12.0289 12 12.4477 12 13V13.25M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12ZM12.5 16C12.5 16.2761 12.2761 16.5 12 16.5C11.7239 16.5 11.5 16.2761 11.5 16C11.5 15.7239 11.7239 15.5 12 15.5C12.2761 15.5 12.5 15.7239 12.5 16Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="bg-neutral-200 p-4 rounded-xl w-fit mx-auto">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 18 18"
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
              <div className="bg-neutral-200 p-4 rounded-xl w-fit mx-auto">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 20 20"
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
              <div className="bg-neutral-200 p-2 rounded-xl h-max flex-row gap-2">
                <img
                  src={"./public/user.png"}
                  alt="User İmage"
                  className="h-5 rounded mx-auto"
                />
                <span className="text-black font-semibold text-xs">
                  Derek Alvarado
                </span>
                <button>
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
        </div>
      )}
      {sideBarStyle == false && (
        <div className="bg-neutral-900 h-screen w-40 text-white px-12 py-8 flex flex-col gap-5">
          <div className="flex flex-row justify-between w-full">
            <span className="font-bold text-4xl font-mono">B.</span>
            <button
              className="bg-neutral-200 p-4 rounded-xl h-max left-12 relative z-20"
              onClick={() => setSideBarStyle((t) => !t)}
            >
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.45825 0.625L13.0416 5L8.45825 9.375M12.8333 5H0.958252"
                  stroke="#212529"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-row w-full justify-center mt-8 p-4">
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-center"
            >
              <path
                d="M2.75024 15.2502H13.2502C14.3548 15.2502 15.2502 14.3548 15.2502 13.2502V5.75025L8.0002 0.750244L0.750244 5.75025V13.2502C0.750244 14.3548 1.64568 15.2502 2.75024 15.2502Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.74963 11.7493C5.74963 10.6447 6.6451 9.7493 7.7496 9.7493H8.2496C9.3542 9.7493 10.2496 10.6447 10.2496 11.7493V15.2493H5.74963V11.7493Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-row w-full p-4 justify-center rounded-xl bg-neutral-800">
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-center"
            >
              <path
                d="M11.75 10C13.8288 10 14.6802 12.1479 15.0239 13.696C15.2095 14.532 14.5333 15.25 13.6769 15.25H12.75M10.75 6.25C12.2688 6.25 13.25 5.01878 13.25 3.5C13.25 1.98122 12.2688 0.75 10.75 0.75M1.78167 15.25H9.21829C9.78279 15.25 10.227 14.7817 10.1145 14.2285C9.80399 12.7012 8.78969 10 5.49999 10C2.2103 10 1.19604 12.7012 0.885478 14.2285C0.772988 14.7817 1.21717 15.25 1.78167 15.25ZM8.24999 3.5C8.24999 5.01878 7.01877 6.25 5.49999 6.25C3.98121 6.25 2.74999 5.01878 2.74999 3.5C2.74999 1.98122 3.98121 0.75 5.49999 0.75C7.01877 0.75 8.24999 1.98122 8.24999 3.5Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-row mx-auto justify-center p-4">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-center"
            >
              <path
                d="M11.75 5V10.25C11.75 11.3546 12.6454 12.25 13.75 12.25H19M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-row w-full justify-center p-4">
            <svg
              width="20"
              height="18"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-center"
            >
              <path
                d="M1.5 1.5L8 7.25L14.5 1.5M0.75 2.75C0.75 1.64543 1.64543 0.75 2.75 0.75H13.25C14.3546 0.75 15.25 1.64543 15.25 2.75V11.25C15.25 12.3546 14.3546 13.25 13.25 13.25H2.75C1.64543 13.25 0.75 12.3546 0.75 11.25V2.75Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="flex justify-center w-full p-4 flex-row">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-center"
            >
              <path
                d="M4.75 8H7.25M12.75 8H19.25M4.75 16H12.25M17.75 16H19.25M12.25 8C12.25 9.24264 11.2426 10.25 10 10.25C8.75736 10.25 7.75 9.24264 7.75 8C7.75 6.75736 8.75736 5.75 10 5.75C11.2426 5.75 12.25 6.75736 12.25 8ZM17.25 16C17.25 17.2426 16.2426 18.25 15 18.25C13.7574 18.25 12.75 17.2426 12.75 16C12.75 14.7574 13.7574 13.75 15 13.75C16.2426 13.75 17.25 14.7574 17.25 16Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-row w-full justify-center p-4">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-center"
            >
              <path
                d="M9.75 10C9.75 10 10 7.75 12 7.75C14 7.75 14.25 9 14.25 10C14.25 10.7513 13.8266 11.5027 12.9798 11.8299C12.4647 12.0289 12 12.4477 12 13V13.25M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12ZM12.5 16C12.5 16.2761 12.2761 16.5 12 16.5C11.7239 16.5 11.5 16.2761 11.5 16C11.5 15.7239 11.7239 15.5 12 15.5C12.2761 15.5 12.5 15.7239 12.5 16Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      )}
    </>
  );
}

export default SideBar;
