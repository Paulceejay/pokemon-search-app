import { useQuery } from "@tanstack/react-query";
export let dataName:any, pokeDatas:any

async function pokemonData() {
  const fet: any = await fetch(
    `https://pokeapi.co/api/v2/pokemon/wartortle`
  );

  const response = await fet.json();

  const pokeData = response;

  console.log(pokeData);
  pokeDatas = pokeData.sprites.front_default
}

pokemonData();
