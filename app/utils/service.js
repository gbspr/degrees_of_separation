const movier = require('movier');

export const getActorsFilmTitlesAndFilmIds = async (actor) => await movier.getPersonDetailsByName(actor).then((res) => {
  const totalMovies = [];
  res.filmography.map((film) => {
    if (film.category === 'actor' && film.type === 'movie') {
      totalMovies.push({
        name: film.name,
        id: film.source.sourceId,
      })
    }
  })
  return totalMovies;
});