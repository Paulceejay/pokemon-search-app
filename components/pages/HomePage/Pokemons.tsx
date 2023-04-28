import {
  useQuery,
} from "@tanstack/react-query"
import { pokeDatas, dataName } from "../../../funcs/lib";
import LoadingSpiner from "../../icons/LoadingSpiner";
import PokemonCard from "./PokemonCard";
import Paginate from "../../pagination/PokemonPagination";
import { useState } from "react";

let pokeContent:any, hidden:string

const Pokemons = ():any => {
     const [currentPage, setCurrentPage] = useState(1);
     const [postsPerPage] = useState(12);
     
     if(currentPage === 1){
        hidden = 'hidden';
     }else {
       hidden = 'block'
     }

     const decreasePageHandler = () => {
       setCurrentPage((page) => page - 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
       return currentPage
     };

     const increasePageHandler = () => {
       setCurrentPage((page) => page + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return currentPage
     };
     
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
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.results.slice(indexOfFirstPost, indexOfLastPost);

    pokeContent = (
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-7">
        {currentPosts.map((data: any) => {
          return (
            <PokemonCard key={data.name} dataName={data.name} src={pokeDatas} /> 
          );
        })}
      </div>
    );
  }

  return (
    <section className="lg:max-w-screen-xl w-11/12 mx-auto py-6">
      {pokeContent}
      {data && (
        <Paginate
          prevPage={decreasePageHandler}
          paginate={currentPage}
          nextPage={increasePageHandler}
          prevPageHidden={hidden}
        />
      )}
    </section>
  );
};

export default Pokemons;