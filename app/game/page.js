import Link from 'next/link';

const Game = () => {
  return (
    <div className="flex flex-col">
      <h2> Pick a game: </h2>
      <Link href="/game/001">
        Game 001
      </Link>
      <Link href="/game/002">
        Game 002
      </Link>
    </div>
  )
};

export default Game;