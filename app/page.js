import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h2>
        degrees of separation
      </h2>
      <Link href="/game">
        Start game!
      </Link>
    </main>
  )
}
