import {
  getAllMovieData,
  randomIndex,
  shuffleArray,
  getActorFilmTitles,
} from '../utils/games';
import MovieList from '../components/MovieList/movieList';
import Link from 'next/link'
import { Suspense } from 'react';
import Loading from './loading';
// import movier from 'movier';

const movier = require('movier');

const Game = () => {
  // const movies = await getAllMovieData();

  // const movieData = Object.values(movies).map(movie => ({
  //   ...movie,
  //   Actors: movie.Actors.split(', '),
  // }));

  // const chosenMovie = movieData[randomIndex];

  // const chosenMovieActors = chosenMovie.Actors;

  // const remainingMovies = shuffleArray([...movieData.slice(0, randomIndex), ...movieData.slice(randomIndex + 1)]);

  // const remainingMoviesActors = remainingMovies.map((movie) => movie.Actors);

  // const findMatchingArray = () => {
  //   return remainingMoviesActors.findIndex(movie =>
  //     movie.some(actor =>
  //       chosenMovieActors.includes(actor)
  //     )
  //   );
  // }

  // const answer = remainingMovies[findMatchingArray()].Title;

  // const outcomeHref = (movieTitle) => movieTitle === answer ? { pathname: '/game/win' } : { pathname: '/game/lose' };


  // const personDetails = async (actor) => await movier.getPersonDetailsByName(actor).then((res) => {
  //   const totalMovies = [];
  //   res.filmography.map((film) => {
  //     if (film.category === 'actor' && film.type === 'movie') {
  //       totalMovies.push({
  //         name: film.name,
  //         id: film.source.sourceId,
  //       })
  //     }
  //   })
  //   return totalMovies;
  // });

  // const filmTitles = async (actor) =>  getActorFilmTitles(actor);

  return (
    <Suspense fallback={<Loading />}>
      <MovieList movieActor="will smith" />
    </Suspense>
  )
};

export default Game;