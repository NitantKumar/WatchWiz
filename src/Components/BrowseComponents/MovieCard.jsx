import React from 'react'
import { IMG_CDN_URL } from '../../utils/constants.js'

const MovieCard = ({movie}) => {
  return (
    <div className='w-48 flex-shrink-0'>
      <img src={IMG_CDN_URL + movie.poster_path} alt="movie card"/>
    </div>
  )
}

export default MovieCard;