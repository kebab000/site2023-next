import React from 'react'
import MovieItem from './MovieItem'
import style from './page.module.scss'
const MovieCont = ({movies}) => {
  return (
<div className={style.movie__cont + " container SCoreDream"}>
    <ul>
        {movies.map(movie => (
            <MovieItem key={movie.id} movie={movie} />
        ))}
    </ul>
</div>
  )
}

export default MovieCont