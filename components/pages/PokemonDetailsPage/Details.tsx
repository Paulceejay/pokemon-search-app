import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ArrowRightIcon from "../../icons/ArrowRightIcon";
import ChevronLeftIcon from "../../icons/ChevronLeftIcon";

let pokeMoves: any, pokeStats: any, pokeAbilities: any, pokeType: any;

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

  if (isLoading) return "Loading...";
 
  if (error) return "An error has occurred: " + error.message;

  if (data) {
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
  }
console.log(router) 
  return (
    <div className="lg:max-w-screen-xl w-11/12 mx-auto py-10">
      <p className="text-green-500 font-DmSans font-bold">
        <Link href="/" className="flex gap-2 ">
          <ChevronLeftIcon />
          <small className="text-xl">Back</small>
        </Link>
      </p>

      <div className="rounded-xl pt-10 md:pt-20 max-w-xl mx-auto">
        <div className="rounded-t-xl bg-green-500">
          <Image
            src={data.sprites.front_default}
            alt=""
            width={110}
            height={100}
            className="w-1/2 mx-auto bg-green-500"
          />
        </div>
        <div className="bg-yellow-600 rounded-b-xl pt-5 px-5">
          <div className=" text-lg">
            <p className="pb-2 font-DmSans font-normal text-gray-950">
              <span className="text-black font-extrabold capitalize">
                Name:
              </span>
              <span className="capitalize mx-1.5">{data.name}</span>
            </p>
            <p className="py-2 font-DmSans font-normal text-gray-950">
              <span className="text-black font-extrabold mr-2">Type:</span>
              {pokeType}
            </p>
            <p className="py-2 font-DmSans font-normal text-gray-950">
              <span className="text-black font-extrabold mr-2">Stats:</span>
              {pokeStats}
            </p>
            <p className="py-2 font-DmSans font-normal text-gray-950">
              <span className="text-black font-extrabold mr-2">Abilities:</span>
              {pokeAbilities}
            </p>
            <p className="py-2 font-DmSans font-normal text-gray-950">
              <span className="text-black font-extrabold mr-2">
                Some Moves:
              </span>
              {pokeMoves}
            </p>
          </div>
          <p className="text-base text-blue-900 font-DmSans font-normal py-5">
            <Link href={`https://bulbapedia.bulbagarden.net/wiki/${data.name}`}>
              <span className="flex gap-1 justify-center items-center">
                More details at bulbapedia
                <ArrowRightIcon />
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;