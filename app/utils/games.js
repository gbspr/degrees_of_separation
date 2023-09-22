export const omdbIds = [
  'tt0162222', // Cast Away
  'tt0109830', // Forrest Gump 
  'tt0119654', // I Am Legend
  'tt0116629', // Independence Day
]

const randomIndex = Math.floor(Math.random() * omdbIds.length);
export const randomMovie = omdbIds[randomIndex];

export const getMovieData = async (omdbId) => {
  const response = await fetch(`https://www.omdbapi.com/?i=${omdbId}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`);
  const data = await response.json();
  return data;
}