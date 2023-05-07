import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import ChevronLeftIcon from "../../icons/ChevronLeftIcon";
import LoadingSpiner from "../../icons/LoadingSpiner";
import DetailCard from "./DetailCard";

let pokeMoves: any, pokeStats: any, pokeAbilities: any, pokeType: any, pokeContent:any;

const Details = ():any => {
  const router = useRouter()
  const pokeId = router.query.pokeId;
  const { isLoading, error, data }: any = useQuery({
    queryKey: ["pokemonData"],
    queryFn: () =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`).then((res) =>
        res.json()
      ),
  });

  if (isLoading){
   pokeContent = <LoadingSpiner />;
  }else if (error){
   pokeContent = (
     <p className="flex justify-center items-center md:h-[60vh] h-24 font-DmSans lg:text-2xl md:text-xl text-base text-slate-800">
       We couldn&#39;t find your pokemon
     </p>
   );
    } else {
    pokeType = data.types
      .map((type: any) => {
        return type.type.name;
      })
      .join(", ");

    pokeStats = data.stats
      .map((stat: any) => {
        return stat.stat.name;
      })
      .join(", ");

    pokeAbilities = data.abilities
      .map((ability: any) => {
        return ability.ability.name;
      })
      .join(", ");

    pokeMoves = data.moves
      .slice(0, 10)
      .map((move: any) => {
        return move.move.name;
      })
      .join(", ");

      pokeContent = <DetailCard src={data.sprites.front_default} name={data.name} type={pokeType} stat={pokeStats} abilities={pokeAbilities} moves={pokeMoves} />;
  }
  return (
    <div className="lg:max-w-screen-xl w-11/12 mx-auto py-10">
      <p className="text-green-500 font-DmSans font-bold">
        <Link href="/" className="flex gap-2 ">
          <ChevronLeftIcon />
          <small className="text-xl">Back</small>
        </Link>
      </p>
    {pokeContent}
    </div>
  );
};

export default Details;