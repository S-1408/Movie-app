import React, { useEffect } from 'react'
import MovieListing from './../MovieListing/MovieListing';
import movieApi from '../../common/api/movie-api';
import {APIKey} from '../../common/api/movie-api-key'
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';
function Home() {
    const movieText ="Harry"
    const dispatch = useDispatch();
    useEffect(()=>{
       const fetchMovie = async ()=>{
            const response = await movieApi
            .get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
            .catch(err=>{
                console.log(err)
            })
            console.log('Api',response)
            dispatch(addMovies(response.data))
        };
        fetchMovie();

    },[dispatch])
    return (
        <div>
           
           <div className="banner-img">
               <MovieListing/>
           </div>
        </div>
    )
}

export default Home
