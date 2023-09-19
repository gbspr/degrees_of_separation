import Start from './start/page'

async function getData() {
  const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.OMDB_API_KEY}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Home() {
  const data = await getData();
  return (
    <main className='bg-zinc-400 min-h-screen'>
      <h1 className='h1'>
        degrees of separation
      </h1>
      <Start movie={data} />
    </main>
  )
}
