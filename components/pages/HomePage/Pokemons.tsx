import Image from "next/image";
import Link from "next/link";
import ArrowRightIcon from "../../icons/ArrowRightIcon";

const Pokemons = ({ name, pokemon, src }: any) => {
  return (
    <section className="lg:max-w-screen-xl w-11/12 mx-auto py-6 grid lg:grid-cols-3 md:grid-cols-2 gap-7">
      <div className="rounded-xl bg-gray-50">
        <div className="bg-white rounded-t-xl">
          <Image
            src={src}
            alt=""
            width={200}
            height={100}
            className="w-1/2 mx-auto bg-white"
          />
        </div>
        <div className="w-10/12 mx-auto">
          <h1 className="pt-10 pb-14 md:text-3xl text-2xl font-bold font-DmSans text-slate-950">
            {name}
          </h1>
          <p className="pb-10 pt-14 text-base text-blue-500 font-DmSans font-normal">
            <Link href={`/pokemons/${pokemon}`}>
              <span className="flex gap-1">
                Details
                <ArrowRightIcon />
              </span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pokemons;
