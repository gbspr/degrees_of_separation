import { findCommonalities } from '@/app/utils/games';
import { getActorsFilmTitlesAndFilmIds, getFilmDataAndActors } from '@/app/utils/service';

const CommonFilm = async ({ primary, secondary }) => {
  const primaryFilmography = await getActorsFilmTitlesAndFilmIds(primary);
  const secondaryFilmography = await getActorsFilmTitlesAndFilmIds(secondary);
  const commonFilm = findCommonalities(primaryFilmography, secondaryFilmography);
  const actorsOfTheCommonFilm = await getFilmDataAndActors(commonFilm.id);

  return (
    <div>
      <div key={commonFilm.id}>
        {commonFilm.name}
      </div>
      {actorsOfTheCommonFilm.map((actor) => (
        <div key={actor.name}>
          {actor.name}
        </div>
      ))}
    </div>
  )
}

export default CommonFilm;