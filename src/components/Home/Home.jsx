import React, { useEffect } from 'react'
import MovieListing from './../MovieListing/MovieListing';

import { useDispatch } from 'react-redux';
// import { addMovies } from '../../features/movies/movieSlice';
import { fetchAsyncMovie, fetchAsyncShow } from './../../features/movies/movieSlice';

function Home() {
    const dispatch = useDispatch();
    useEffect(()=>{
    //    const fetchMovie = async ()=>{
            // const response = await movieApi
            // .get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
            // .catch(err=>{
            //     console.log(err)
            // })
            // console.log('Api',response)
            // dispatch(addMovies(response.data))
        // };
        // fetchMovie();
        const movieText = "Harry"
        const showText ="friends"
        dispatch(fetchAsyncMovie(movieText));
        dispatch(fetchAsyncShow(showText));
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
