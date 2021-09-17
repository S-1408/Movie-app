import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { fetchAsyncShowDetails, getSelectedMovieForShow,removeSelectedMovieOrShow } from './../../features/movies/movieSlice';
import './MovieDetails.scss'
const MovieDetails=() =>{
    const {imdbID} = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSelectedMovieForShow)
    console.log(data)
    useEffect(()=>{
dispatch(fetchAsyncShowDetails(imdbID))
return()=>{
    dispatch(removeSelectedMovieOrShow())
}
    },[dispatch,imdbID])
    return (

        <div>

            <br/>
           <div className="movie-section">
               {
                   Object.keys(data).length===0?
                   (<div>...Loading</div>)
                   :
               
               (<>
               <div className="section-left">
                   <div className="movie-title">{data.Title}</div>
                       <div className="movie-rating">
                           <span>
                               IMDB Rating <i className="fa fa-star">:{data.imdbRating}</i>
                           </span>
                           <span>
                               IMDB Voting <i className="fas fa-thumbs-up">:{data.imdbVotes}</i>
                           </span> <span>
                               Runtime <i className="fas fa-file">:{data.Runtime}</i>
                           </span>
                           <span>
                              year <i className="fa fa-calendar-times">:{data.Year}</i>
                           </span>
                       </div>
<br />
                       <div className="movie-plot">{data.Plot}</div>
                       <br/>
                           <div className="movie-info">
                               <div>
                                   <span>Director</span>
                                   <span>{data.Director}</span>

                               </div>
                               <div>
                                   <span>Actor</span>
                                   <span>{data.Actors}</span>

                               </div>
                               <div>
                                   <span>Languages</span>
                                   <span>{data.Language}</span>

                               </div>
                               <div>
                                   <span>Awads</span>
                                   <span>{data.Awards}</span>

                               </div>
                           </div>
                      

                      
                   </div>
                  
                   <div className="section-right">
                          <img src={data.Poster} alt={data.Title}/>
                      </div>
                        </>)
}
                          </div>

                          <br/>     
                  
        </div>
        
    )
}

export default MovieDetails
