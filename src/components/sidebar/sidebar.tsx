import { useState } from "react";
import { RxArrowLeft, RxArrowRight } from "react-icons/rx";
import Elements from "./components/elements";
import cn from "classnames";

function Sidebar() {
  const [collapse, setcollapseStyle] = useState(true);
  console.log(collapse);

  return (
    <>
      {
        /*sideBarStyle && (*/
        <div className="fixed h-full">
          <div
            className={cn(
              "bg-neutral-900 h-full text-button font-semibold flex flex-col gap-5",
              {
                "lg:w-72 md:w-52 py-8 lg:px-12 md:px-5 w-fit": collapse,
                "w-20 pt-5 py-2 lg:px-4 md:px-2": !collapse,
              }
            )}
          >
            <div className="flex flex-row w-fit z-50">
              <span
                className={cn("font-bold font-mono text-neutral-white", {
                  "text-4xl hidden md:flex justify-between": collapse,
                  "w-5 z-10 truncate text-3xl": !collapse,
                })}
              >
                Brand.
              </span>
              <button
                className={cn(
                  "p-4 rounded-xl h-max relative bg-neutral-white",
                  {
                    "hidden md:flex lg:left-24 md:left-28": collapse,
                    "lg:left-5 md:left-3": !collapse,
                  }
                )}
                onClick={() => setcollapseStyle((t) => !t)}
              >
                {collapse ? (
                  <RxArrowLeft className="text-black" />
                ) : (
                  <RxArrowRight className="text-black" />
                )}
              </button>
            </div>
            <Elements collapse={collapse} />
          </div>
        </div>
        /*)*/
      }
    </>
  );
}

export default Sidebar;
