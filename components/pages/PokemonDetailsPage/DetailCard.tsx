import Image from "next/image"
import Link from "next/link"
import ArrowRightIcon from "../../icons/ArrowRightIcon"

const DetailCard = ({src, name, type, stats, abilities, moves}:any) => {
return  <div className="rounded-xl pt-10 md:pt-20 max-w-xl mx-auto">
          <div className="rounded-t-xl bg-green-500">
            <Image
              src={src}
              alt=""
              width={310}
              height={100}
              className="w-1/2 mx-auto bg-green-500"
            />
          </div>
          <div className="bg-yellow-600 rounded-b-xl pt-3 px-5">
            <div className=" text-lg">
              <p className="pb-2 font-DmSans font-normal text-gray-950">
                <span className="text-black font-extrabold capitalize">
                  Name:
                </span>
                <span className="capitalize mx-1.5">{name}</span>
              </p>
              <p className="py-1 font-DmSans font-normal text-gray-950">
                <span className="text-black font-extrabold mr-2">Type:</span>
                {type}
              </p>
              <p className="py-1 font-DmSans font-normal text-gray-950">
                <span className="text-black font-extrabold mr-2">Stats:</span>
                {stats}
              </p>
              <p className="py-1 font-DmSans font-normal text-gray-950">
                <span className="text-black font-extrabold mr-2">
                  Abilities:
                </span>
                {abilities}
              </p>
              <p className="py-1 font-DmSans font-normal text-gray-950">
                <span className="text-black font-extrabold mr-2">
                  Some Moves:
                </span>
                {moves}
              </p>
            </div>
            <p className="text-base text-blue-900 font-DmSans font-normal pb-2 pt-3">
              <Link
                href={`https://bulbapedia.bulbagarden.net/wiki/${name}`}
                target="_blank"
              >
                <span className="flex gap-1 justify-center items-center">
                  More details at bulbapedia
                  <ArrowRightIcon />
                </span>
              </Link>
            </p>
          </div>
        </div>
      
}

export default DetailCard