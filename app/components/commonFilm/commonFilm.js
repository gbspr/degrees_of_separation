import { findCommonalities } from '@/app/utils/games';
import {
  getActorsFilmTitlesAndFilmIds,
  getFirstActorInCastByFilmId,
  firstActorInCastExcludingUsedActors,
} from '@/app/utils/service';
import Poster from '../poster/poster';
const movier = require('movier');

const CommonFilm = async ({ primary, secondary }) => {
  const commonFilm = findCommonalities(await getActorsFilmTitlesAndFilmIds(primary), await getActorsFilmTitlesAndFilmIds(secondary));
  const connectedActorOfTheCommonFilmExcludingAlreadyIncludedActors = firstActorInCastExcludingUsedActors(await getFirstActorInCastByFilmId(commonFilm.id), primary, secondary);
  const findConnection = await getActorsFilmTitlesAndFilmIds(connectedActorOfTheCommonFilmExcludingAlreadyIncludedActors);
  const commonFilmPoster = await movier.getTitleDetailsByIMDBId(commonFilm.id).then(res => res.allImages[0].url);

  return (
    <div>
      <p>
        {`${primary} and ${secondary} share the film: `}
        <u>
          {commonFilm.name}
        </u>
      </p>
      <Poster src={commonFilmPoster} alt="common poster" />
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