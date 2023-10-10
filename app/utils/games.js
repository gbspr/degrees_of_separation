// returns the first common movie between two actors filmographies that was returned by the API

import { lowerCase } from "lodash";

// TODO: exclude all sequels
export const findCommonalities = (firstFilmography, secondFilmography) => {
  const commonFilms = [];
  firstFilmography.map((film) => {
    secondFilmography.map((anotherFilm) => {
      const matchingId = film.id === anotherFilm.id;
      if (matchingId) {
        commonFilms.push(film);
      }
    })
  })
  return commonFilms[0];
}

export const standardizeInput = (input) => (
  lowerCase(input).replace(/(?<=\w)-(?=\w)/g, '')
)

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}