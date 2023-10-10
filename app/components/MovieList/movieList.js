import { findCommonalities } from '@/app/utils/games';
import { getActorsFilmTitlesAndFilmIds } from '@/app/utils/service';

const MovieList = async () => {
  const willSmith = await getActorsFilmTitlesAndFilmIds('leonardo dicaprio');
  const tommyLeeJones = await getActorsFilmTitlesAndFilmIds('mark ruffalo');
  const commonMovies = findCommonalities(willSmith, tommyLeeJones);

  return (
    <div>
      {commonMovies.map((film) => (
        <div key={film.id}>
          {film.name}
        </div>
      ))}
    </div>
  )
}

export default MovieList;