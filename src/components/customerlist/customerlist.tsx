import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Button } from "../button";
import { GoPlus } from "react-icons/go";
import Table from "./components/table";

function CList() {
  const [openCustomerArea, setCustomerArea] = useState(false);
  return (
    <div className="flex flex-col w-fit mx-auto relative left-10 md:left-32">
      <Button></Button>
      <div className="lg:px-8 mt-2 md:px-6 relative left-2 md:left-0">
        <span className="font-semibold lg:text-5xl w-fit text-2xl text-heading">
          Customers' List
        </span>
        <div className="flex flex-row gap-3 lg:text-lg text-sm mt-5 w-fit">
          <span className="text-secondary">Dashboard</span>
          <span className="text-heading">/ Customers' List</span>
        </div>
        <div className="flex lg:flex-row lg:justify-between flex-col gap-8 lg:gap-0 w-full my-auto">
          <div className="flex flex-col">
            <button
              className="uppercase mt-10 z-50 border py-2 px-5 w-60 text-lg justify-center border-blue-normal text-blue-normal flex flex-row rounded-xl font-semibold"
              onClick={() => setCustomerArea((t) => !t)}
            >
              <GoPlus className="my-auto text-2xl" />
              <p className="mx-3">New Customer</p>
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
        <Table></Table>
      </div>
    </div>
  );
}

export default CList;
