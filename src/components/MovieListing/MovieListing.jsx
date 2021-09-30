import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies,getAllShows } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard';
import "./MovieListing.scss";
import Slider from "react-slick";
import { settings } from '../../common/settings';

function MovieListing() {
    
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    console.log(movies);
    console.log(shows);
    let renderMovies ,renderShows = '';
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
   renderShows = shows.Response === "True" ? (
    shows.Search.map((el,index)=>{
        return (
            <><MovieCard key={index} data={el} /></>

        )
    })
) :
 
( <div className="movies-error">
<h3>{shows.Error}</h3>
</div>
)
    
    return (
      
      <div className="movie-wrapper">
          <div className="movie-list">
              <h2>Movie</h2>
              <div >
              <Slider {...settings}>{renderMovies}</Slider>
               
              </div>
          </div>
          <div className="movie-list">
              <h2>shows</h2>
              <div className="movie-container">
              <Slider {...settings}> {renderShows}</Slider>
                 
              </div>
          </div>
      </div>
    )
}

export default MovieListing
