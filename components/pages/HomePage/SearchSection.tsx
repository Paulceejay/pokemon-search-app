import SearchIcon from "../../icons/SearchIcon";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Link from "next/link";

let searchItems: any;
const SearchSection = () => {
  const [searchData, setSearchData] = useState();

  const { isLoading, error, data }: any = useQuery({
    queryKey: ["searchPokemons"],
    queryFn: () =>
      fetch("https://pokeapi.co/api/v2/pokemon?limit=1279").then((res) =>
        res.json()
      ),
  });

  const onChangeHandler = (e: any) => {
    setSearchData(e.target.value);
  };
  if (data) {
    for (const key of data.results) {
      searchItems = data.results
        .filter((val: any) => {
          if (searchData === "") {
            return val;
          } else if (val.name.toLowerCase().includes(searchData)) {
            return val;
          }
        })
        .map((val: any) => (
          <li
            key={val.name}
            className="text-base font-bold font-DmSans text-gray-500 w-full bg-transparent py-1 rounded-sm hover:bg-green-300 active:bg-green-300"
          >
            <Link className="p-2" href={`/pokemon/${val.name}`}>
              {val.name}
            </Link>
          </li>
        ));
    }
  }

  return (
    <section className="lg:max-w-screen-xl w-11/12 mx-auto lg:pt-36 pt-20 pb-10">
      <div className="lg:w-9/12 md:w-10/12 flex bg-white rounded-lg mb-2">
        <div className="w-[5%] px-4 xl:py-6 py-4">
          <SearchIcon />
        </div>
        <div className="w-[85%]">
          <input
            type="text"
            placeholder="Search"
            className="outline-none pr-3 md:text-xl text-lg font-bold font-DmSans text-gray-500 w-full  px-4 xl:py-6 py-4"
            onChange={onChangeHandler}
          />
        </div>
        <div className=" bg-blue-950 lg:w-[15%] md:w-[20%] w-[35%] rounded-r-lg">
          <button className="text-white md:text-2xl text-lg w-full mx-auto px-1 font-DmSans xl:py-6 py-4 ">
            Search
          </button>
        </div>
      </div>
      <ul className="bg-white lg:w-9/12 md:w-10/12">{searchData ? searchItems : ""}</ul>
    </section>
  );
};

export default SearchSection;