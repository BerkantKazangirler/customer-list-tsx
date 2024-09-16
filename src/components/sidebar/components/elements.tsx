import { FiHome } from "react-icons/fi";
import { GoPeople } from "react-icons/go";
import { IoTimeOutline } from "react-icons/io5";
import { PiEnvelopeSimple } from "react-icons/pi";
import { VscSettings } from "react-icons/vsc";
import { IoIosHelpCircleOutline } from "react-icons/io";
import cn from "classnames";

interface Props {
  collapse: boolean;
}
function SidebarElements({ collapse }: Props) {
  return (
    <>
      <div className="pe-4 ps-4 md:ps-0 md:pe-0">
        <div className="flex flex-row h-14 w-full mt-8 p-4 pl-4 items-center">
          <FiHome className="self-center" />

          <button
            className={cn("ml-3 hidden uppercase lg:text-base md:text-sm md:flex ", {
              "hidden md:hidden": !collapse,
            })}
          >
            Dashboard
          </button>
        </div>

        <div className="flex flex-row uppercase w-full h-14 p-4 rounded-xl bg-neutral-800">
          <GoPeople className="self-center" />
          <button
            className={cn("ml-3 hidden uppercase lg:text-base md:text-sm md:flex", {
              "hidden md:hidden": !collapse,
            })}
          >
            Custommers
          </button>
        </div>

        <div className="flex flex-row w-full h-14 p-4">
          <IoTimeOutline className="self-center" />
          <button
            className={cn("ml-3 hidden uppercase lg:text-base md:text-sm md:flex", {
              "hidden md:hidden": !collapse,
            })}
          >
            Analytics
          </button>
        </div>

        <span
          className={cn("mt-7 hidden text-sm uppercase text-neutral-700 font-mono md:flex", {
            "hidden md:hidden": !collapse,
          })}
        >
          Settings
        </span>

        <div
          className={cn("flex flex-row w-full h-14 p-4", {
            "mt-12": !collapse,
          })}
        >
          <PiEnvelopeSimple className="self-center" />

          <button
            className={cn("ml-3 hidden uppercase lg:text-base md:text-sm md:flex", {
              "hidden md:hidden": !collapse,
            })}
          >
            Messages
          </button>
        </div>

        <div className="flex flex-row w-full h-14 p-4">
          <VscSettings className="self-center" />

          <button
            className={cn("ml-3 hidden uppercase lg:text-base md:text-sm md:flex", {
              "hidden md:hidden": !collapse,
            })}
          >
            Setting
          </button>
        </div>

        <div className="flex flex-row w-full h-14 p-4">
          <IoIosHelpCircleOutline className="self-center" />

          <button
            className={cn("ml-3 hidden uppercase lg:text-base md:text-sm md:flex", {
              "hidden md:hidden": !collapse,
            })}
          >
            Help Centre
          </button>
        </div>
      </div>
    </>
  );
}

export default SidebarElements;
