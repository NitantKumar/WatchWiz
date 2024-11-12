import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
  
  return (
    <div>
      <div className='px-6'>
        <h1 className='text-3xl py-4'>{title}</h1>
        {/* <div><MovieCard movie={movies[0]}/></div> */}
        <div className='flex overflow-x-scroll space-x-4 whitespace-nowrap scrollbar-hide'>
          {
            movies?.map((movie) => (<MovieCard key={movie.id} movie={movie}/>))
          }
        </div>
      </div>
    </div>
  )
}

export default MovieList;