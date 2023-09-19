const Start = ({ movie }) => {
  return (
    <>
      <h2 className='h2'>
        {movie.Title}
      </h2>
      <h2 className='h2'>
        {movie.imdbID}
      </h2>
    </>
  )
};

export default Start;