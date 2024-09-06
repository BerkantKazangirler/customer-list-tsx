import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Buttons } from "../buttons";
import { CiFilter } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";

function CList() {
  const [openCustomerArea, setCustomerArea] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <Buttons></Buttons>
      <div className="px-8 mt-2">
        <span className="font-semibold lg:text-5xl text-2xl">
          Customers' List
        </span>
        <div className="flex flex-row gap-3 lg:text-lg text-sm">
          <span className="opacity-70">Dashboard</span>
          <span>/ Customers' List</span>
        </div>
        <div className="flex lg:flex-row lg:justify-between flex-col gap-8 lg:gap-0 w-full my-auto">
          <div className="flex flex-col">
            <button
              className="uppercase mt-10 border py-2 px-5 lg:w-96 w-60 text-lg border-[#0057FC] text-[#0057FC] rounded-xl font-semibold"
              onClick={() => setCustomerArea((t) => !t)}
            >
              + New Customer
            </button>
            {openCustomerArea && (
              <div className="flex flex-col lg:ml-4 relative">
                <button className="py-5 px-5 border-b bg-neutral-50 rounded-t-xl absolute z-10 lg:w-96 w-60">
                  Importing by a file
                </button>
                <button className="py-5 px-5 bg-neutral-50 rounded-b-xl absolute lg:mt-16 mt-20 lg:w-96 w-60">
                  Entering manually
                </button>
              </div>
            )}
          </div>
          <div>
            <IoIosSearch className="absolute mt-5 ml-5" />
            <input
              type="text"
              className="bg-neutral-100 text-black h-14 rounded-xl border lg:w-96 w-60 indent-14"
              placeholder="Search.."
            />
          </div>
        </div>
        <table className="flex-col bg-neutral-50/90 p-8 mt-10 flex">
          <tr className="flex flex-row text-[#6C757D]">
            <td className="border-r">
              <span className="pr-10 pl-5">#</span>
            </td>
            <td className="border-r flex flex-row justify-between">
              <span className="xl:w-64 lg:w-52 flex pr-10 pl-7">Full Name</span>
              <div className="flex flex-row gap-3 my-auto">
                <IoFilterOutline />
                <CiFilter />
              </div>
            </td>
            <td className="border-r hidden flex-row justify-between md:flex">
              <span className="pr-20 pl-7">Status</span>
              <CiFilter className="my-auto" />
            </td>
            <td className="border-r hidden flex-row justify-between md:hidden lg:flex">
              <span className="px-10 xl:w-96 lg:w-60 flex">E-Mail</span>
              <IoFilterOutline className="my-auto" />
            </td>
            <td className="border-r hidden flex-row justify-between md:hidden lg:hidden xl:flex">
              <span className="px-10 2xl:w-96 xl:w-80 flex">Date of Birth</span>
              <div className="flex flex-row gap-3 my-auto">
                <IoFilterOutline />
                <CiFilter />
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default CList;
