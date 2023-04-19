import { create } from "zustand";

interface pokemonState {
  pokemons: any[];
  searchPokemon: (searchItem: string) => void;
  fetch: (poke: string) => void;
  // toggleCompletedState: (id: string) => void;
}

const pokemonStore = (
  set: (state: string | any) => void,
  get: (state: any) => void
) => ({
  pokemons: [],
  fetch: (poke: string) =>
    set((state: any) => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=19").then((res: any) =>
        res.json()
      ).then((data: any) => console.log(data))
    }),
  searchPokemon: (searchItem: any) =>
    set((state: any) => {
      return state.pokemons.filter((data: string) =>
        data.toLowerCase().includes(searchItem.toLowerCase())
      );
    }),

  // fetch: async (poke:string) => {
  //   const response = await fetch(poke);
  //   set({ fishies: await response.json() });
  // },
});

// useQuery(key, queryFn, { onSuccess: data => setToZustand(data) })

export const usePokemonStore = create<pokemonState>(pokemonStore);
