import { useQuery } from "@tanstack/react-query";
export let dataName:any, pokeDatas:any

async function pokemonData() {
  const fet: any = await fetch(
    `https://pokeapi.co/api/v2/pokemon/wartortle`
  );

  const response = await fet.json();

  const pokeData = response;

  // console.log(pokeData);
  pokeDatas = pokeData.sprites.front_default
}

pokemonData();

//  dataName = useQuery({
//   queryKey: ["allPokemons"],
//   queryFn: () =>
//     fetch("https://pokeapi.co/api/v2/pokemon?limit=1279").then((res) =>
//       res.json()
//     ),
// });

// if (data) {
//   console.log(data.name);
// }
