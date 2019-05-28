import React from 'react'
import movies from '../moviesData'
import List from './List'

function Movies(){
  const lists=[];
  movies.map(movie=>{
    lists.push({'tileId':movie.movieId,
                'tileName':movie.movieName,
                'tileUrl':movie.pic_url})
  })
  return (
    <div>
        <List lists={lists} count={5}/>
    </div>
  )
}

export default Movies