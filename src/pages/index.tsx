import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import { useGetTodosQuery } from '@/store/apiSlice'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetTodosQuery()

  let content;
  if(isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    content = JSON.stringify(todos)
  } else if (isError) {
    content = <p>{error}</p>
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-slate-800 h-screen">
        <h1 className="w-full mb-5 text-center text-white text-2xl">Todos</h1>
        <section className="grid place-items-center">{content}</section>
      </main>
    </>
  )
}
