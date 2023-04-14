import SearchIcon from "../../icons/SearchIcon"

const SearchSection = () => {
    return (
      <section className="lg:max-w-screen-xl w-11/12 mx-auto lg:pt-36 pt-20 pb-10">
        <div className="lg:w-9/12 md:w-10/12 flex bg-white rounded-lg">
          <div className="w-[5%] px-4 xl:py-6 py-4">
            <SearchIcon />
          </div>
          <div className="w-[85%]">
            <input
              type="text"
              placeholder="Search"
              className="outline-none pr-3 md:text-xl text-lg font-bold font-DmSans text-gray-500 w-full  px-4 xl:py-6 py-4"
            />
          </div>
          <div className=" bg-blue-950 lg:w-[15%] md:w-[20%] w-[35%] rounded-r-lg">
            <button className="text-white md:text-2xl text-lg w-full mx-auto px-1 font-DmSans xl:py-6 py-4 ">
              Search
            </button>
          </div>
        </div>
      </section>
    );
}

export default SearchSection