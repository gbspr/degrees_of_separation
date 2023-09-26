import { getAllMovieData, randomIndex } from '../utils/games';

const Choose = async () => {
  const movies = await getAllMovieData();

  const movieData = Object.values(movies).map((movie) => ({
    ...movie,
    Actors: movie.Actors.split(', '),
  }));

  const chosenMovie = movieData[randomIndex];

  const remainingArray = [...movieData.slice(0, randomIndex), ...movieData.slice(randomIndex + 1)];

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
      {remainingArray.map((movie) => (
        <p key={movie.Title}>
          {`${movie.Title}, `}
        </p>
      ))}
    </section>
  )
};

export default Choose;