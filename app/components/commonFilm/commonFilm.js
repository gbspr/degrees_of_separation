import { findCommonalities } from '@/app/utils/games';
import {
  getActorsFilmTitlesAndFilmIds,
} from '@/app/utils/service';
import { isUndefined } from 'lodash';
import Poster from '../poster/poster';
import Connection from '../connection/connection';

const CommonFilm = async ({ primary, secondary, usedActors }) => {
  const primaryFilmography = await getActorsFilmTitlesAndFilmIds(primary);
  const secondaryFilmography = await getActorsFilmTitlesAndFilmIds(secondary);
  const commonFilm = findCommonalities(primaryFilmography, secondaryFilmography);

  return (
    <div>
      <p>
        {`${primary} and ${secondary} share the film: `}
        <u>
          {commonFilm.name}
        </u>
      </p>
      <Poster imdbId={commonFilm.id} alt="common poster" />
      <Connection imdbId={commonFilm.id} includedActors={[primary, secondary]} />
    </div>
  )
}

export default CommonFilm;