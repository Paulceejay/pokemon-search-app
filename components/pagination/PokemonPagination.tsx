import React from "react";

const Paginate = ({paginate, prevPage, nextPage }: any) => {
  return (
    <div className="flex justify-center items-center md:gap-10 gap-5 py-5">
      <button
        onClick={() => prevPage()}
        className="bg-slate-800 py-2 px-4 text-white font-DmSans text-base rounded-md hover:bg-slate-500"
      >
        Prev page
      </button>
      <p className="font-DmSans text-base">{`Page: ${paginate}`}</p>
      <button
        onClick={() => nextPage()}
        className="bg-slate-800 py-2 px-4 text-white font-DmSans text-base rounded-md hover:bg-slate-500"
      >
        Next page
      </button>
    </div>
  );
};

export default Paginate;