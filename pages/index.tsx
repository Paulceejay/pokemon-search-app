import Head from 'next/head'
import Image from 'next/image'
import Pokemons from '../components/pages/HomePage/Pokemons'
import SearchSection from '../components/pages/HomePage/SearchSection'


export default function Home() {
  return (
    <>
      <Head>
        <title>Pokemon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-100 h-screen">
      <SearchSection />
      <Pokemons />
      </main>
    </>
  )
}