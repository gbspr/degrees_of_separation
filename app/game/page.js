import { getAllMovieData, randomIndex, shuffleArray } from '../utils/games';
import Link from 'next/link'

const Game = async () => {
  const movies = await getAllMovieData();

  const movieData = Object.values(movies).map((movie) => ({
    ...movie,
    Actors: movie.Actors.split(', '),
  }));

  const chosenMovie = movieData[randomIndex];

  const chosenMovieActors = chosenMovie.Actors;

  const remainingMovies = shuffleArray([...movieData.slice(0, randomIndex), ...movieData.slice(randomIndex + 1)]);

  const remainingMoviesActors = remainingMovies.map((movie) => movie.Actors);

  const findMatchingArray = () => {
    return remainingMoviesActors.findIndex(movie =>
      movie.some(actor =>
        chosenMovieActors.includes(actor)
      )
    );
  }

  const answer = remainingMovies[findMatchingArray()].Title;

  const outcomeHref = (movieTitle) => movieTitle === answer ? { pathname: '/game/win' } : { pathname: '/game/lose' };

  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <h2 className='mb-2'> {chosenMovie.Title} </h2>
        <picture>
          <img src={chosenMovie.Poster} alt={`movie poster for ${chosenMovie.Title}`} />
        </picture>
      </div>
      <div className='flex flex-col'>
        {remainingMovies.map(movie => 
          <div key={movie.Title} className='my-2'>
            <Link href={outcomeHref(movie.Title)}>
              {movie.Title}
            </Link>
          </div>
        )}
      </div>
    </section>
  )
};

export default Game;