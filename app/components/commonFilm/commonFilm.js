import { findCommonalities } from '@/app/utils/games';
import { getActorsFilmTitlesAndFilmIds, getFilmDataAndActors } from '@/app/utils/service';
import { lowerCase } from 'lodash';

const CommonFilm = async ({ primary, secondary }) => {
  const primaryFilmography = await getActorsFilmTitlesAndFilmIds(primary);
  const secondaryFilmography = await getActorsFilmTitlesAndFilmIds(secondary);
  const commonFilm = findCommonalities(primaryFilmography, secondaryFilmography);
  const connectedActorOfTheCommonFilmExcludingAlreadyIncludedActors = await getFilmDataAndActors(commonFilm.id).then(res => (res.filter((actor) => (lowerCase(actor.name) !== lowerCase(primary) && lowerCase(actor.name) !== lowerCase(secondary)))[0].name));
  const findConnection = await getActorsFilmTitlesAndFilmIds(connectedActorOfTheCommonFilmExcludingAlreadyIncludedActors);

  return (
    <div>
      <p>
        {`${primary} and ${secondary} share the film: `}
        <u>
          {commonFilm.name}
        </u>
      </p>
      <div>
        <p className='mb-2'>
          {`${connectedActorOfTheCommonFilmExcludingAlreadyIncludedActors} was also in `}
          <u>
            {commonFilm.name}
          </u>
          . Here are their other films:
        </p>
        {findConnection.map((film) => (
          <div key={film.id}>
            {film.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommonFilm;