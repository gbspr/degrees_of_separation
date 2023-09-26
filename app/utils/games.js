export const omdbIds = [
  'tt0162222', // Cast Away
  'tt0109830', // Forrest Gump 
  'tt0119654', // I Am Legend
  'tt0116629', // Independence Day
]

export const randomIndex = Math.floor(Math.random() * omdbIds.length);

export async function getAllMovieData() {
  const [gameOne, gameTwo, gameThree, gameFour] = await Promise.all([
    fetch(`https://www.omdbapi.com/?i=${omdbIds[0]}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`),
    fetch(`https://www.omdbapi.com/?i=${omdbIds[1]}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`),
    fetch(`https://www.omdbapi.com/?i=${omdbIds[2]}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`),
    fetch(`https://www.omdbapi.com/?i=${omdbIds[3]}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`)
  ])

  const [castAway, forrestGump, iAmLegend, independenceDay] = await Promise.all([
    gameOne.json(),
    gameTwo.json(),
    gameThree.json(),
    gameFour.json(),
  ])

  return { castAway, forrestGump, iAmLegend, independenceDay }
}