import Image from "next/image";
import Link from "next/link";
import ArrowRightIcon from "../../icons/ArrowRightIcon";
import {
  useQuery,
} from "@tanstack/react-query"
import { pokeDatas, dataName } from "../../../funcs/lib";
import LoadingSpiner from "../../icons/LoadingSpiner";
export let pokeName:any

let pokeContent:any

const Pokemons = ():any => {
   const { isLoading, error, data }: any = useQuery({
     queryKey: ["allPokemons"],
     queryFn: () =>
       fetch("https://pokeapi.co/api/v2/pokemon?limit=1279").then(
         (res) => res.json()
       ),
   });

  if (isLoading){
    pokeContent = <LoadingSpiner />;
  }else if(error){
    pokeContent = <p className="flex justify-center items-center md:h-[60vh] h-24 font-DmSans lg:text-2xl md:text-xl text-base text-slate-800">Could not fetch pokemons reload page</p>;
  }else{
  pokeContent = <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-7">
     {data.results.map((data: any) => {
       return (
         <div
           key={data.name}
           className="rounded-xl bg-gray-200 md:w-full sm:w-1/2 mx-auto w-11/12"
         >
           <div className="bg-white rounded-t-xl">
             <Image
               src={pokeDatas}
               alt={`image for ${data.name}`}
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
   </div>;}

  return (
    <section className="lg:max-w-screen-xl w-11/12 mx-auto py-6">
     {pokeContent}
    </section>
  );
};

export default Pokemons;

// `https://pokeapi.co/api/v2/pokemon${key.name}`
// GetAllPokemon
// GetPokemon
// searchPokemon