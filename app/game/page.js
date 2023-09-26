import { getAllMovieData, randomIndex } from '../utils/games';
import Link from 'next/link'

const Game = async () => {
  const movies = await getAllMovieData();

  const movieData = Object.values(movies).map((movie) => ({
    ...movie,
    Actors: movie.Actors.split(', '),
  }));

  const chosenMovie = movieData[randomIndex];

  const chosenMovieActors = chosenMovie.Actors;

  const remainingArray = [...movieData.slice(0, randomIndex), ...movieData.slice(randomIndex + 1)];

  const remainingArrayActors = remainingArray.map((movie) => movie.Actors);

  const findMatchingArray = () => {
    return remainingArrayActors.findIndex(movie =>
      movie.some(item =>
        chosenMovieActors.includes(item)
      )
    );
  }

  const answer = remainingArray[findMatchingArray()].Title;

  return (
    <section className="flex flex-col mx-10">
      <div className="flex flex-col">
        <h2 className='mb-2'> {chosenMovie.Title} </h2>
        <picture>
          <img src={chosenMovie.Poster} alt={`movie poster for ${chosenMovie.Title}`} />
        </picture>
      </div>
      <div className='flex flex-col'>
        {remainingArray.map((movie) => (
          <div key={movie.Title} className='my-2'>
            <Link
              href={movie.Title === answer ? { pathname: '/game/win' } : { pathname: '/game/lose' }}
            >
              {movie.Title}
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
};

export default Game;