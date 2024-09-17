import { PiEnvelopeSimple } from "react-icons/pi";
import { FaRegBell } from "react-icons/fa";
import { RxCaretDown } from "react-icons/rx";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Buttons() {
  return (
    <div className="flex-row md:justify-end justify-center pl-10 relative md:right-5 right-0 py-8 w-full md:flex hidden">
      <ToastContainer />
      <div className="flex flex-row gap-3">
        <div className="bg-neutral-white border text-button-inverted border-neutral-200 p-4 rounded-xl h-max">
          <FaRegBell />
        </div>
        <div
          className="bg-neutral-white p-4 border text-button-inverted border-neutral-200 rounded-xl h-max"
          onClick={() => toast.warn("Mesajınız yok.")}
        >
          <PiEnvelopeSimple />
        </div>
        <Menu as="div">
          <MenuButton>
            <div className="bg-neutral-white p-3 flex rounded-xl border border-neutral-200 h-max flex-row gap-2">
              <img
                src={"./public/user.png"}
                alt="User İmage"
                className="h-5 self-center rounded"
              />
              <span className="text-normal font-semibold text-base">
                Derek Alvarado
              </span>

              <button>
                <RxCaretDown className="text-disabled" />
              </button>
            </div>
          </MenuButton>
          <div className=" flex flex-col absolute w-full">
            <MenuItems>
              <button className="bg-neutral-white border-t w-48 border-l border-r p-2 rounded-t border-b border-b-neutral-black/20 text-sm">
                Sign Out
              </button>
            </MenuItems>
            <MenuItems>
              <button className="bg-neutral-white border-b w-48 border-l border-r p-2 rounded-b text-sm">
                Account Settings
              </button>
            </MenuItems>
          </div>
        </Menu>
      </div>
    </div>
  );
}

export default Buttons;
