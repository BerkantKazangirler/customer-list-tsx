import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Buttons } from "../buttons";
import { CiFilter } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";

function CList() {
  const [openCustomerArea, setCustomerArea] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <Buttons></Buttons>
      <div className="lg:px-8 mt-2 md:px-6 relative left-2 md:left-0">
        <span className="font-semibold lg:text-5xl text-2xl text-heading">
          Customers' List
        </span>
        <div className="flex flex-row gap-3 lg:text-lg text-sm mt-5">
          <span className="text-secondary">Dashboard</span>
          <span className="text-heading">/ Customers' List</span>
        </div>
        <div className="flex lg:flex-row lg:justify-between flex-col gap-8 lg:gap-0 w-full my-auto">
          <div className="flex flex-col">
            <button
              className="uppercase mt-10 border py-2 px-5 w-60 text-lg border-blue-normal text-blue-normal rounded-xl font-semibold"
              onClick={() => setCustomerArea((t) => !t)}
            >
              + New Customer
            </button>
            {openCustomerArea && (
              <div className="flex flex-col">
                <button className="py-5 px-5 border-b bg-neutral-white border-neutral-200 rounded-t-xl absolute z-10 w-60">
                  Importing by a file
                </button>
                <button className="py-5 px-5 bg-neutral-white rounded-b-xl absolute lg:mt-16 mt-20 w-60">
                  Entering manually
                </button>
              </div>
            )}
          </div>
          <div>
            <IoIosSearch className="absolute mt-5 ml-5 text-disabled" />
            <input
              type="text"
              className="border-neutral-400 bg-neutral-white text-disabled  h-14 rounded-xl border lg:w-96 w-60 indent-14"
              placeholder="Search.."
            />
          </div>
        </div>
        <table className="flex-col bg-neutral-white p-8 mt-10 flex rounded">
          <tr className="flex flex-row text-secondary">
            <td className="border-r">
              <span className="lg:pr-10 md:pr-5 lg:pl-5 md:pl-2">#</span>
            </td>
            <td className="border-r flex flex-row justify-between">
              <span className="xl:w-64 md:w-40 lg:w-52 flex pr-10 pl-7">
                Full Name
              </span>
              <div className="flex flex-row gap-3 my-auto">
                <IoFilterOutline />
                <CiFilter className="mr-5" />
              </div>
            </td>
            <td className="border-r hidden flex-row justify-between md:flex">
              <span className="lg:pr-20 md:pr-10 pl-7">Status</span>
              <CiFilter className="my-auto mr-5" />
            </td>
            <td className="border-r hidden flex-row justify-between md:hidden lg:flex">
              <span className="px-10 xl:w-80 lg:w-60 flex">E-Mail</span>
              <IoFilterOutline className="my-auto mr-5" />
            </td>
            <td className="border-r hidden flex-row justify-between md:hidden lg:hidden xl:flex">
              <span className="px-10 2xl:w-80 xl:w-72 flex">Date of Birth</span>
              <div className="flex flex-row gap-3 my-auto">
                <IoFilterOutline />
                <CiFilter className="mr-5" />
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default CList;
