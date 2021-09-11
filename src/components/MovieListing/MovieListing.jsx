import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard';
import "./MovieListing.scss"
function MovieListing() {
    const movies = useSelector(getAllMovies);
    console.log(movies);
    let renderMovies = 'fdjkdfg';
    renderMovies = movies.Response === "True" ? (
        movies.Search.map((item,index)=>{
            return (
                <><MovieCard key={index} data={item} /></>

            )
        })
    ) :
     
   ( <div className="movies-error">
   <h3>{movies.Error}</h3>
    </div>
   )
    
    return (
      
      <div className="movie-wrapper">
          <div className="movie-list">
              <h2>Movie</h2>
              <div className="movie-container">
                  {renderMovies}
              </div>
          </div>
      </div>
    )
}

export default MovieListing
