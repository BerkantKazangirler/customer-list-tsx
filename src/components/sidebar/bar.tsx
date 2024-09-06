import React, { useEffect, useState } from "react";
import { FiHome } from "react-icons/fi";
import { GoPeople } from "react-icons/go";
import { IoTimeOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { PiEnvelopeSimple } from "react-icons/pi";
import { VscSettings } from "react-icons/vsc";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { RxArrowLeft, RxArrowRight, RxCaretDown } from "react-icons/rx";

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
                <RxArrowLeft className="text-black" />
              </button>
            </div>

            <div className="flex flex-row w-full mt-8 p-4">
              <FiHome className="self-center" />

              <span className="uppercase ml-3">Dashboard</span>
            </div>
            <div className="flex flex-row w-full p-4 rounded-xl bg-neutral-800">
              <GoPeople className="self-center" />

              <span className="uppercase ml-3">Custommers</span>
            </div>
            <div className="flex flex-row w-full p-4">
              <IoTimeOutline className="self-center" />

              <span className="uppercase ml-3">Analytics</span>
            </div>
            <span className="uppercase text-sm text-neutral-700 opacity-70 font-mono">
              Settings
            </span>
            <div className="flex flex-row w-full p-4">
              <PiEnvelopeSimple className="self-center" />

              <span className="uppercase ml-3">Messages</span>
            </div>
            <div className="flex flex-row w-full p-4">
              <VscSettings className="self-center" />

              <span className="uppercase ml-3">Setting</span>
            </div>
            <div className="flex flex-row w-full p-4">
              <IoIosHelpCircleOutline className="self-center" />

              <span className="uppercase ml-3">Help Centre</span>
            </div>
          </div>

          <div className="bg-neutral-900 h-screen w-40 text-white px-12 py-8 flex md:hidden flex-col justify-between gap-5">
            <div>
              <div className="flex flex-row justify-between w-full">
                <span className="font-bold text-4xl font-mono">B.</span>
              </div>

              <div className="flex flex-row w-full justify-center mt-8 p-4">
                <FiHome className="self-center" />
              </div>
              <div className="flex flex-row w-full p-4 justify-center rounded-xl bg-neutral-800">
                <GoPeople className="self-center" />
              </div>
              <div className="flex flex-row mx-auto justify-center p-4">
                <IoTimeOutline className="self-center" />
              </div>
              <div className="flex flex-row w-full justify-center p-4">
                <PiEnvelopeSimple className="self-center" />
              </div>
              <div className="flex justify-center w-full p-4 flex-row">
                <VscSettings className="self-center" />
              </div>
              <div className="flex flex-row w-full justify-center p-4">
                <IoIosHelpCircleOutline className="self-center" />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="bg-neutral-200 p-4 rounded-xl w-fit mx-auto">
                <FaRegBell className="text-black" />
              </div>
              <div className="bg-neutral-200 p-4 rounded-xl w-fit mx-auto">
                <PiEnvelopeSimple className="text-black" />
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
                  <RxCaretDown />
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
              <RxArrowRight className="text-black" />
            </button>
          </div>

          <div className="flex flex-row w-full justify-center mt-8 p-4">
            <FiHome className="self-center" />
          </div>
          <div className="flex flex-row w-full p-4 justify-center rounded-xl bg-neutral-800">
            <GoPeople className="self-center" />
          </div>
          <div className="flex flex-row mx-auto justify-center p-4">
            <IoTimeOutline className="self-center" />
          </div>
          <div className="flex flex-row w-full justify-center p-4">
            <PiEnvelopeSimple className="self-center" />
          </div>
          <div className="flex justify-center w-full p-4 flex-row">
            <VscSettings className="self-center" />
          </div>
          <div className="flex flex-row w-full justify-center p-4">
            <IoIosHelpCircleOutline className="self-center" />
          </div>
        </div>
      )}
    </>
  );
}

export default SideBar;
