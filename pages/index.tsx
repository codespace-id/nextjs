import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NextJS Boilerplate</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="bg-slate-800 min-h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1
            data-testid="title"
            className="text-white text-6xl font-bold tracking-widest"
          >
            Hello World!
          </h1>
          <h2
            data-testid="subtitle"
            className="text-xl font-light text-white text-opacity-70"
          >
            NextJS + Tailwind = 🔥
          </h2>
        </div>
      </main>
    </div>
  )
}

export default Home
