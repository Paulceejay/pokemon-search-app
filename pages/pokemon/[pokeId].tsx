import Head from "next/head";
import { useRouter } from "next/router";
import Details from "../../components/pages/PokemonDetailsPage/Details";

const pokemon = ( ) => {
  const router = useRouter()
    return (
      <>
        <Head>
          <title>Pokemon Data</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-gray-100 h-full">
          <Details />
        </main>
      </>
    );
}


export default pokemon