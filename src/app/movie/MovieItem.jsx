import React from 'react'
import Image from 'next/image'
import style from './page.module.scss'

const MovieItem = ({movie}) => {
  return (
    <li>
        <a href={`https://www.themoviedb.org/movie/${movie.id}`} target='_blank' rel=''>
          <Image width={400} height={218} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <em>
            <span className= {style.title} >{movie.title}</span>
            <span className={style.star}>{movie.vote_average}</span>
          </em>       
        </a>
      </li>
  )
}

export default MovieItem