import { getAllMovieData, randomIndex } from '../utils/games';

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

  console.log(remainingArrayActors)

  return (
    <section className="flex mx-10">
      <div className="flex-row mx-4">
        <div className="flex-col">
          <h2> {chosenMovie.Title} </h2>
          <picture>
            <img src={chosenMovie.Poster} alt={`movie poster for ${chosenMovie.Title}`} />
          </picture>
          <div className="flex flex-row">
            {chosenMovie.Actors.map((actor) => (
              <div key={actor}>
                {`${actor}, `}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        {remainingArray.map((movie) => (
          <div key={movie.Title} className={movie.Title === answer ? 'bg-green-500' : 'bg-red-500' }>
            {movie.Title}
          </div>
        ))}
      </div>
    </section>
  )
};

export default Game;