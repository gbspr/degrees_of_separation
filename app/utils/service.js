import { lowerCase } from 'lodash';
const movier = require('movier');

// get poster with imdbId
export const getPoster = async (imdbId) => await movier.getTitleDetailsByIMDBId(imdbId).then(res => res.allImages[1].url);

// returns the cast of a movie
export const getFirstActorInCastByFilmId = async (imdbId) => await movier.getTitleDetailsByIMDBId(imdbId).then(res => res.casts[0].name);

// finds the first actor in the cast of a movie, excluding already included actors
export const firstActorInCastExcludingUsedActors = (actorArray, primary, secondary) => actorArray.filter(actor => (lowerCase(actor.name) !== lowerCase(primary) && lowerCase(actor.name) !== lowerCase(secondary)))[0].name

// returns the complete filmography of a given actor
export const getActorsFilmTitlesAndFilmIds = async actorName => await movier.getPersonDetailsByName(actorName).then(actor => {
  const totalMovies = [];
  actor.filmography.map(film => {
    if (film.category === 'actor' && film.type === 'movie') {
      totalMovies.push({
        name: film.name,
        id: film.source.sourceId,
      })
    }
  })
  return totalMovies;
});