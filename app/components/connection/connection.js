import {
  getFirstActorInCastByFilmId,
  getActorsFilmTitlesAndFilmIds
} from '@/app/utils/service';

const Connection = async ({ imdbId }) => {
  const actor = await getFirstActorInCastByFilmId(imdbId);
  const films = await getActorsFilmTitlesAndFilmIds(actor);

  return (
    <div>
      <p className='mb-2'>
        <u>
          {actor}
        </u>
      </p>
      {films.map((film) => (
        <div key={film.id}>
          {film.name}
        </div>
      ))}
    </div>
  )
}

export default Connection;