import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1 className='mb-4'>
        degrees of separation
      </h1>
      <h2>
        <Link href="/start"> Start game! </Link>
      </h2>
    </main>
  )
}
