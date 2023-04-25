import { useQuery } from "@tanstack/react-query";

export const { isLoading, error, data }: any = useQuery({
  queryKey: ["allPokemons"],
  queryFn: () =>
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1279").then((res) =>
      res.json()
    ),
});

if(data){
    console.log(data.name)
}
