import { CiFilter } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";
import { GoArrowUpRight, GoChevronLeft, GoChevronRight } from "react-icons/go";
import { MdExitToApp } from "react-icons/md";
import series100 from "../../../../public/top-100-series.json";
import { PiPencilSimpleLineLight } from "react-icons/pi";
import { FiTrash } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { toast } from "react-toastify";

interface MovieTypes {
  big_image: string;
  description: string;
  genre: string[];
  id: string;
  image: string;
  imdb_link: string;
  imbid: string;
  rank: number;
  rating: string;
  thumbnail: string;
  title: string;
  year: number;
}

interface TableProps {
  searchValue: string; // Prop olarak arama değeri
}

function SidebarElements({ searchValue }: TableProps) {
  const [apiseries, setApiSeries] = useState<MovieTypes[]>([]);
  const [filteredApi, setFilteredApi] = useState<MovieTypes[]>([]);
  const [showed, setShowed] = useState(5);
  let [seriemodal, setSeriModal] = useState<MovieTypes>();

  const limitedMovieData = filteredApi.slice(0, showed);

  useEffect(() => {
    async function getJson() {
      const responseseries: MovieTypes[] = await fetch(
        "../../../../public/top-100-series.json"
      ).then((res) => res.json());
      setApiSeries(responseseries);
      setFilteredApi(responseseries);
    }
    getJson();
  }, []);

  // searchValue her değiştiğinde filtreleme işlemi yapılacak
  useEffect(() => {
    const filtered = apiseries.filter((apiseries) =>
      apiseries.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredApi(filtered);
  }, [searchValue, apiseries]);

  function deleterew(i: Number) {
    const table = document.getElementById("tabId") as HTMLTableElement;
    for (let i = 1; i < table.rows.length; i++) {
      const row = table.rows[i];
      row.addEventListener("click", () => {
        console.log("Row index is: " + row.rowIndex);
        table.deleteRow(row.rowIndex);
      });
    }
  }

  function openSeriInfo(i: number) {
    if (apiseries !== undefined) {
      console.log(apiseries[i]);
      setSeriModal(apiseries[i]);
    } else {
      toast.error("Hata Mevcut Daha Sonra Tekrar Deneyin");
    }
  }

  return (
    <Menu>
      <table
        id="tabId"
        className="flex-col bg-neutral-white p-8 mt-10 flex rounded w-fit"
      >
        <thead>
          <tr className="flex flex-row text-secondary">
            <th className="border-r w-16 border-b pb-2 hidden sm:flex">
              <span className="lg:pr-10 md:pr-5 lg:pl-5 md:pl-2">#</span>
            </th>
            <th className="border-r flex flex-row justify-between lg:w-80 w-72 border-b pb-2">
              <span className="flex pr-10 pl-7">Series Name</span>
              <div className="flex flex-row gap-3 my-auto">
                <button>
                  <IoFilterOutline className="my-auto mr-5" />
                </button>
                <button>
                  <CiFilter className="my-auto mr-5" />
                </button>
              </div>
            </th>
            <th className="border-r flex-row justify-between border-b pb-2 w-96 hidden md:flex">
              <span className="lg:pr-20 md:pr-10 pl-7">Category</span>

              <button>
                <CiFilter className="my-auto mr-5" />
              </button>
            </th>
            <th className="border-r flex-row justify-between border-b pb-2 lg:w-48 w-24 hidden xl:flex">
              <span className="px-6 flex">Rating</span>

              <button>
                <IoFilterOutline className="my-auto mr-5" />
              </button>
            </th>
            <th className="border-r flex-row justify-between border-b pb-2 w-80 hidden 2xl:flex">
              <span className="px-7 flex">Year</span>
              <div className="flex flex-row gap-3 my-auto">
                <button>
                  <IoFilterOutline className="my-auto mr-5" />
                </button>

                <button>
                  <CiFilter className="my-auto mr-5" />
                </button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {limitedMovieData.map((apiseries, i) => (
            <tr className="flex flex-row" id={i.toString()} key={i}>
                         <td className="border-r w-16 h-16 border-b hidden sm:flex">
              <span className="my-auto mx-auto">{apiseries.id}</span>
            </td>
            <td className="border-r lg:w-80 w-72 flex h-16 border-b">
              <span className="my-auto indent-7">{apiseries.title}</span>
            </td>
            <td className="border-r w-96 h-16 border-b hidden md:flex">
              <span className="my-auto indent-7">
                {(apiseries.genre[1] &&
                  " " + apiseries.genre[0] + " • " + apiseries.genre[1]) ||
                  apiseries.genre}
              </span>
            </td>
            <td className="border-r lg:w-48 w-24 h-16 border-b hidden xl:flex">
              <span className="my-auto indent-7">{apiseries.rating}</span>
            </td>
            <td className="border-r w-80 h-16 border-b hidden 2xl:flex">
              <span className="my-auto indent-7">{apiseries.year}</span>
            </td>
              <td className="flex-row w-fit gap-2 border-t pl-2 py-2 hidden 2xl:flex">
              <MenuButton>
                <button className="border border-neutral-400 text-button-inverted p-3 rounded-xl text-xl">
                  <GoArrowUpRight onClick={() => openSeriInfo(i)} />
                </button>
              </MenuButton>
              <button className="border border-neutral-400 text-button-inverted p-3 rounded-xl text-xl">
                <PiPencilSimpleLineLight />
              </button>
              <button
                className="border border-neutral-400 text-button-inverted p-3 rounded-xl text-xl"
                onClick={() => deleterew(i)}
              >
                <FiTrash />
              </button>
            </td>
            </tr>
          ))}
          
        {seriemodal !== undefined && (
          <MenuItems>
            <div className="absolute flex flex-col rounded-xl top-[40%] w-96 h-96 left-1/4 bg-zinc-900 backdrop-brightness-95 p-2">
              <div className="flex justify-end">
                <div
                  className="bg-red-700 p-1 rounded"
                  onClick={() => setSeriModal(undefined)}
                >
                  <MdExitToApp className="text-xl mx-auto text-white" />
                </div>
              </div>
              <img
                src={seriemodal.image}
                className="h-44 w-32 mx-auto border border-gray-400 rounded"
              />
              <span className="text-white mx-auto">{seriemodal.title}</span>
              <span className="text-white mx-auto text-sm">
                {"Dünya Sıralaması : " + seriemodal.rank}
              </span>
              <span className="text-white mx-auto text-sm">
                {"IMDB Puanı : " + seriemodal.rating}
              </span>
              <span className="text-white mx-auto text-sm">
                {"Çekim Yılı : " + seriemodal.year}
              </span>
              <span className="text-white mx-auto text-sm">
                {" "}
                {(seriemodal.genre[1] &&
                  " " + seriemodal.genre[0] + " • " + seriemodal.genre[1]) ||
                  seriemodal.genre}
              </span>
              <a
                href={seriemodal.imdb_link}
                target="_blank"
                className="text-sm text-neutral-400 mx-auto"
              >
                İMDB Link
              </a>
            </div>
          </MenuItems>
        )}
        </tbody>
        <tfoot>
        <div className="flex flex-row mt-5 font-semibold gap-5 md:gap-10">
          <div className="flex gap-2 h-fit">
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
            <select
              className="border border-neutral-400 text-sm px-8 md:px-10 rounded-xl"
              onChange={(e) => setShowed(Number(e.currentTarget.value))}
            >
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
            <span className="mx-auto my-auto text-sm font-normal">/Page</span>
          </div>
        </div>
        </tfoot>
      </table>
    </Menu>
  );
}

export default SidebarElements;
