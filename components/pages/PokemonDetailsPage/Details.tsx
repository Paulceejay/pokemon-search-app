import Image from "next/image";
import Link from "next/link";
import ArrowRightIcon from "../../icons/ArrowRightIcon";
import ChevronLeftIcon from "../../icons/ChevronLeftIcon";

const Details = ({src}:any) => {
    return (
      <div className="lg:max-w-screen-xl w-11/12 mx-auto py-10">
        <p className="text-green-500 font-DmSans font-bold">
          <Link href="/" className="flex gap-2 ">
            <ChevronLeftIcon />
            <small className="text-xl">Back</small>
          </Link>
        </p>

        <div className="rounded-xl pt-10 md:pt-20 max-w-xl mx-auto">
          <div className="rounded-t-xl bg-green-500">
            <Image
              src={src}
              alt=""
              width={200}
              height={100}
              className="w-1/2 mx-auto bg-green-500"
            />
          </div>
          <div className="bg-yellow-600 rounded-b-xl pt-5 px-5">
            <div className=" text-lg">
              <p className="pb-2 font-DmSans font-normal text-gray-950">
                <span className="text-black font-extrabold">Name:</span> Lorem
              </p>
              <p className="py-2 font-DmSans font-normal text-gray-950">
                <span className="text-black font-extrabold">Type:</span> Lorem
                ipsum
              </p>
              <p className="py-2 font-DmSans font-normal text-gray-950">
                <span className="text-black font-extrabold">Stats:</span> Lorem
                ipsum dolor sit amet.
              </p>
              <p className="py-2 font-DmSans font-normal text-gray-950">
                <span className="text-black font-extrabold">Abilities:</span>
                Lorem ipsum dolor sit amet.
              </p>
              <p className="py-2 font-DmSans font-normal text-gray-950">
                <span className="text-black font-extrabold">Some Moves:</span>
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <p className="text-base text-blue-900 font-DmSans font-normal py-5">
              <Link href={``}>
                <span className="flex gap-1 justify-center items-center">
                  More details at bulbapedia
                  <ArrowRightIcon />
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
}

export default Details