import React, { useState } from "react";
import { Buttons } from "../buttons";

function CList() {
  const [openCustomerArea, setCustomerArea] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <Buttons></Buttons>
      <div className="p-8 mt-5">
        <span className="font-semibold text-5xl">Customers' List</span>
        <div className="flex flex-row mt-5 gap-3">
          <span className="opacity-70">Dashboard</span>
          <span>/ Customers' List</span>
        </div>
        <div className="flex flex-row justify-between w-full my-auto">
          <div className="flex flex-col">
            <button
              className="uppercase mt-10 border py-2 px-5 text-lg border-[#0057FC] text-[#0057FC] rounded-xl font-semibold"
              onClick={() => setCustomerArea((t) => !t)}
            >
              + New Customer
            </button>
            {openCustomerArea && (
              <div className="flex flex-col ml-4">
                <button className="py-5 px-5 border-b bg-neutral-50 rounded-t-xl absolute z-10">
                  Importing by a file
                </button>
                <button className="py-5 px-5 bg-neutral-50 rounded-b-xl absolute mt-16">
                  Entering manually
                </button>
              </div>
            )}
          </div>
          <div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute mt-5 ml-5"
            >
              <path
                d="M12.8333 12.8333L10.3333 10.3333M3.16663 7.33329C3.16663 5.03211 5.03211 3.16663 7.33329 3.16663C9.63449 3.16663 11.5 5.03211 11.5 7.33329C11.5 9.63449 9.63449 11.5 7.33329 11.5C5.03211 11.5 3.16663 9.63449 3.16663 7.33329Z"
                stroke="#ADB5BD"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input
              type="text"
              className="bg-neutral-100 text-black h-14 rounded-xl border w-96 indent-14"
              placeholder="Search.."
            />
          </div>
        </div>
        <table className="flex flex-col bg-neutral-50/90 p-8 mt-10">
          <tr className="flex flex-row text-[#6C757D]">
            <td className="border-r">
              <span className="pr-10 pl-5">#</span>
            </td>
            <td className="border-r flex flex-row justify-between">
              <span className="w-64 flex pr-10 pl-7">Full Name</span>
              <div className="flex flex-row gap-3 my-auto">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.66675 5.16666H13.3334M4.33341 7.83332H11.6667M5.66675 10.5H10.3334"
                    stroke="#6C757D"
                    stroke-linecap="round"
                  />
                </svg>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.8334 3.16666H3.16675L6.20791 6.96812C6.39704 7.20452 6.50008 7.49826 6.50008 7.80106V12.1667C6.50008 12.5349 6.79855 12.8333 7.16675 12.8333H8.83341C9.20161 12.8333 9.50008 12.5349 9.50008 12.1667V7.80106C9.50008 7.49826 9.60315 7.20452 9.79228 6.96812L12.8334 3.16666Z"
                    stroke="#6C757D"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </td>
            <td className="border-r flex flex-row justify-between">
              <span className="pr-20 pl-7">Status</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="my-auto"
              >
                <path
                  d="M12.8334 3.16666H3.16675L6.20791 6.96812C6.39704 7.20452 6.50008 7.49826 6.50008 7.80106V12.1667C6.50008 12.5349 6.79855 12.8333 7.16675 12.8333H8.83341C9.20161 12.8333 9.50008 12.5349 9.50008 12.1667V7.80106C9.50008 7.49826 9.60315 7.20452 9.79228 6.96812L12.8334 3.16666Z"
                  stroke="#6C757D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </td>
            <td className="border-r flex flex-row justify-between">
              <span className="px-10 w-96 flex">E-Mail</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="my-auto"
              >
                <path
                  d="M2.66675 5.16666H13.3334M4.33341 7.83332H11.6667M5.66675 10.5H10.3334"
                  stroke="#6C757D"
                  stroke-linecap="round"
                />
              </svg>
            </td>
            <td className="border-r flex flex-row justify-between">
              <span className="px-10 w-96 flex">Date of Birth</span>
              <div className="flex flex-row gap-3 my-auto">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.66675 5.16666H13.3334M4.33341 7.83332H11.6667M5.66675 10.5H10.3334"
                    stroke="#6C757D"
                    stroke-linecap="round"
                  />
                </svg>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.8334 3.16666H3.16675L6.20791 6.96812C6.39704 7.20452 6.50008 7.49826 6.50008 7.80106V12.1667C6.50008 12.5349 6.79855 12.8333 7.16675 12.8333H8.83341C9.20161 12.8333 9.50008 12.5349 9.50008 12.1667V7.80106C9.50008 7.49826 9.60315 7.20452 9.79228 6.96812L12.8334 3.16666Z"
                    stroke="#6C757D"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default CList;
