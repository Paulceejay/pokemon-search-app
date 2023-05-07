import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import ArrowRightIcon from "../../icons/ArrowRightIcon";

const PokemonCard = ({dataName, src}:any) => {  
    return (
      <li
      key={dataName}
        className="rounded-xl bg-gray-200 md:w-full sm:w-1/2 mx-auto w-11/12 list-none"
      >
        <div className="bg-white rounded-t-xl">
          <Image
            src={src}
            alt={`image for ${dataName}`}
            width={200}
            height={100}
            className="w-1/2 mx-auto bg-white"
          />
        </div>
        <div className="w-10/12 mx-auto">
          <h1 className="pt-10 pb-14 md:text-3xl text-2xl font-bold font-DmSans text-slate-950 capitalize">
            {dataName}
          </h1>
          <p className="pb-10 pt-14 text-base text-blue-500 font-DmSans font-normal">
            <Link href={`/pokemon/${dataName}`}>
              <span className="flex gap-1">
                Details
                <ArrowRightIcon />
              </span>
            </Link>
          </p>
        </div>
      </li>
    );
}

export default PokemonCard