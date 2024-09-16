import { CiFilter } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";
import { GoArrowUpRight, GoChevronLeft, GoChevronRight } from "react-icons/go";
import series100 from "../../../../public/top-100-series.json";
import { PiPencilSimpleLineLight } from "react-icons/pi";
import { FiTrash } from "react-icons/fi";
import { useEffect, useState } from "react";

interface MovieTypes extends React.HTMLAttributes<HTMLTableElement> {
  big_image: string;
  description: string;
  genre: string[];
  id: string;
  image: string;
  imbd_link: string;
  imbid: string;
  rank: number;
  rating: string;
  thumbnail: string;
  title: string;
  year: number;
}
function SidebarElements() {
  const [apiseries, setApiSeries] = useState<MovieTypes[] | undefined>();
  const [showed, setShowed] = useState(5);
  const limitedMovieData = series100.slice(0, showed);

  useEffect(() => {
    async function getJson() {
      const responseseries: MovieTypes[] = await fetch(
        "../../../../public/top-100-series.json"
      ).then((res) => res.json());
      setApiSeries(responseseries);
    }
    getJson();
    
    
  }, []);
  

  const table = document.getElementById("tabId") as HTMLTableElement;

  function deleterew() {
    for (let i = 1; i < table.rows.length; i++) {
      const row = table.rows[i];
      row.addEventListener("click", () => {
        console.log("Row index is: " + row.rowIndex);
        table.deleteRow(row.rowIndex);
      });
    }
  }

  return (
    <>
      <table
        id="tabId"
        className="flex-col bg-neutral-white p-8 mt-10 flex rounded w-fit 2xl:mx-auto"
      >
        <tr className="flex flex-row text-secondary">
          <td className="border-r w-16 border-b pb-2 hidden sm:flex">
            <span className="lg:pr-10 md:pr-5 lg:pl-5 md:pl-2">#</span>
          </td>
          <td className="border-r flex flex-row justify-between lg:w-80 w-72 border-b pb-2">
            <span className="flex pr-10 pl-7">
              Full Name
            </span>
            <div className="flex flex-row gap-3 my-auto">
              <button>
                <IoFilterOutline />
              </button>
              <button>
                <CiFilter className="mr-5" />
              </button>
            </div>
          </td>
          <td className="border-r flex-row justify-between border-b pb-2 w-60 hidden md:flex">
            <span className="lg:pr-20 md:pr-10 pl-7">Status</span>
            <button>
              <CiFilter className="my-auto mr-5" />
            </button>
          </td>
          <td className="border-r flex-row justify-between border-b pb-2 lg:w-72 w-52 hidden xl:flex">
            <span className="px-10 flex">E-Mail</span>
            <button>
              <IoFilterOutline className="my-auto mr-5" />
            </button>
          </td>
          <td className="border-r flex-row justify-between border-b pb-2 w-80 hidden 2xl:flex">
            <span className="px-10 flex">Date of Birth</span>
            <div className="flex flex-row gap-3 my-auto">
              <button>
                <IoFilterOutline />
              </button>
              <button>
                <CiFilter className="mr-5" />
              </button>
            </div>
          </td>
        </tr>
        {limitedMovieData.map((apiseries) => (
          <tr className="flex flex-row">
            <td className="border-r w-16 h-16 border-b hidden sm:flex">
              <span className="my-auto mx-auto">{apiseries.id}</span>
            </td>
            <td className="border-r lg:w-80 w-72 flex h-16 border-b">
              <span className="my-auto indent-7">{apiseries.title}</span>
            </td>
            <td className="border-r w-60 h-16 border-b hidden md:flex">
              <span className="my-auto indent-7">{apiseries.genre}</span>
            </td>
            <td className="border-r lg:w-72 w-52 h-16 border-b hidden xl:flex">
              <span className="my-auto indent-7">{apiseries.rating}</span>
            </td>
            <td className="border-r w-80 h-16 border-b hidden 2xl:flex">
              <span className="my-auto indent-7">{apiseries.title}</span>
            </td>
            <td className="flex-row w-fit gap-2 border-t pl-2 py-2 hidden 2xl:flex">
              <button className="border border-neutral-400 text-button-inverted p-3 rounded-xl text-xl">
                <GoArrowUpRight />
              </button>
              <button className="border border-neutral-400 text-button-inverted p-3 rounded-xl text-xl">
                <PiPencilSimpleLineLight />
              </button>
              <button
                className="border border-neutral-400 text-button-inverted p-3 rounded-xl text-xl"
                onClick={() => deleterew()}
              >
                <FiTrash />
              </button>
            </td>
          </tr>
        ))}
        <div className="flex flex-row mt-5 font-semibold gap-5 md:gap-10">
          <div className="flex gap-4 h-fit">
            <button className="px-3 py-2 bg-disabled text-neutral-200 rounded-xl">
              <GoChevronLeft />
            </button>
            <button className="px-4 py-2 border border-blue-normal text-blue-normal rounded-xl">
              1
            </button>
            <button className="px-4 py-2 border border-neutral-400 text-black rounded-xl">
              2
            </button>
            <button className="px-4 py-2 border border-neutral-400 text-black rounded-xl">
              3
            </button>
            <button className="px-4 py-2 border border-neutral-400 text-black rounded-xl md:flex hidden">
              4
            </button>
            <button className="px-3 py-2 border border-neutral-400 text-black rounded-xl">
              <GoChevronRight />
            </button>
          </div>
          <div className="gap-2 hidden sm:flex">
            <select className="border border-neutral-400 text-sm px-10 md:px-14 rounded-xl" onChange={(e) => (setShowed(Number(e.currentTarget.value))
            )}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
              <option value="60">60</option>
              <option value="70">70</option>
              <option value="80">80</option>
              <option value="90">90</option>
              <option value="100">100</option>
            </select>
            <span className="mx-auto my-auto text-sm md:text-xl font-normal">
              /Page
            </span>
          </div>
        </div>
      </table>
    </>
  );
}

export default SidebarElements;
