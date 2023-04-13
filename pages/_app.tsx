import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div className="bg-white shadow-next-shadow drop-shadow-lg">
        <p className="text-slate-800 text-center lg:text-3xl md:text-2xl text-xl font-DmSans font-bold xl:py-12 md:py-9 py-7">
          NextJS Pokemon Search App
        </p>
      </div>
      <Component {...pageProps} />
    </div>
  );
}
