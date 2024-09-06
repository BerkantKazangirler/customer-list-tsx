import { PiEnvelopeSimple } from "react-icons/pi";
import { FaRegBell } from "react-icons/fa";
import { RxCaretDown } from "react-icons/rx";
function Buttons() {
  return (
    <div className="flex flex-row md:justify-end justify-center pr-10 relative md:right-5 right-0 py-8 w-full">
      <div className="flex flex-row gap-5">
        <div className="bg-neutral-white border text-button-inverted border-neutral-200 p-4 rounded-xl h-max md:flex hidden">
          <FaRegBell />
        </div>
        <div className="bg-neutral-white p-4 border text-button-inverted border-neutral-200 rounded-xl h-max md:flex hidden">
          <PiEnvelopeSimple />
        </div>
        <div className="bg-neutral-white p-3 rounded-xl border border-neutral-200 h-max flex-row gap-2 md:flex hidden">
          <img
            src={"./public/user.png"}
            alt="User İmage"
            className="h-5 self-center rounded"
          />
          <span className="text-normal font-semibold text-base">
            Derek Alvarado
          </span>
          <button className="ml-3">
            <RxCaretDown className="text-disabled" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
