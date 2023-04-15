import Image from "next/image";
import Link from "next/link";
import ArrowRightIcon from "../../icons/ArrowRightIcon";
import {
  useQuery,
} from "@tanstack/react-query"

const Pokemons = ():any => {

   const { isLoading, error, data }: any = useQuery({
     queryKey: ["pokemonData"],
     queryFn: () =>
       fetch("https://pokeapi.co/api/v2/pokemon?limit=1279").then(
         (res) => res.json()
       ),
   });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <section className="lg:max-w-screen-xl w-11/12 mx-auto py-6">
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-7">
        {data.results.map((data: any) => {
          return (
            <div key={data.name} className="rounded-xl bg-gray-50 md:w-full sm:w-1/2 mx-auto w-11/12">
              <div className="bg-white rounded-t-xl">
                <Image
                  src={"/download.png"}
                  alt=""
                  width={200}
                  height={100}
                  className="w-1/2 mx-auto bg-white"
                />
              </div>
              <div className="w-10/12 mx-auto">
                <h1 className="pt-10 pb-14 md:text-3xl text-2xl font-bold font-DmSans text-slate-950 capitalize">
                  {data.name}
                </h1>
                <p className="pb-10 pt-14 text-base text-blue-500 font-DmSans font-normal">
                  <Link href={`/pokemon/${data.name}`}>
                    <span className="flex gap-1">
                      Details
                      <ArrowRightIcon />
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pokemons;

// `https://pokeapi.co/api/v2/pokemon${key.name}`