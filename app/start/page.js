'use client'

import { useEffect, useState, useMemo } from 'react';
import { getMovieData, omdbIds } from '../utils/games';

const Choose = () => {
  const [movies, setMovies] = useState([]);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const promises = omdbIds.map(async (omdbId) => {
        return getMovieData(omdbId);
      });

      const movies = await Promise.all(promises);

      setMovies(movies);
    };

    fetchData();
  }, []);

  useMemo(() => movies.map((movie) => {
    setActors((actors) => [...actors, movie.Actors].flatMap((actor) => actor.split(', ')));
  }), [movies])

  console.log(actors)

  return (
    <section class="flex mx-10">
      {movies.map((movie, index) => (
        <div key={index} class="flex-row mx-4">
          <div class="flex-col">
            <p>
              {movie.Title}
            </p>
            <picture>
              <img src={movie.Poster} alt={`movie poster for ${movie.Title}`} />
            </picture>
            <p>
              {movie.Actors}
            </p>
          </div>
        </div>
      ))}
      <div>
        {actors.map((actor) => (
          <>
            {actor},&nbsp;
          </>
        ))}
      </div>
    </section>
  )
};

export default Choose;