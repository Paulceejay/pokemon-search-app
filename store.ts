import { create } from "zustand";
import { useQuery } from "@tanstack/react-query";

// let pokemonUrl:string;

// const { isLoading, error, data }: any = useQuery({
//   queryKey: ["pokemonData"],
//   queryFn: () =>
//     fetch("https://pokeapi.co/api/v2/pokemon?limit=1279").then((res) =>
//       res.json()
//     ),
// });

// // if (isLoading) return "Loading...";

// // if (error) return "An error has occurred: " + error.message;

// if (data) {
//   for (const key of data.results) {
//     pokemonUrl = key.url;
//     console.log(pokemonUrl);
//   }
// }
 
const pokemonStore = (set: (state: string | any) => void) => ({
  pokemons: [],
//   searchPokemon: () => set((state) => ({ counter: state.counter + 1 })),
});



export const useStore = create(pokemonStore);