export const omdbIds = [
  'tt0162222', // Cast Away
  'tt0109830', // Forrest Gump 
  'tt0119654', // I Am Legend
  'tt0116629', // Independence Day
]

export const randomIndex = Math.floor(Math.random() * omdbIds.length);

export async function getAllMovieData() {
  const movieData = await Promise.all([
    omdbId.map(omdbId => (
      fetch(`https://www.omdbapi.com/?i=${omdbId}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`)
      .then(res => res.json)
      .catch(error => console.error(error.message))
    ))
  ])
  return movieData;
}

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}