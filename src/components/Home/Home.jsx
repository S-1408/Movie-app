import React, { useEffect } from 'react'
import MovieListing from './../MovieListing/MovieListing';
import movieApi from '../../common/api/movie-api';
import {APIKey} from '../../common/api/movie-api-key'
function Home() {
    useEffect(()=>{
        const movieText ="Harry"
        const fetchMovie = async ()=>{
            const response = await movieApi
            .get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
            .catch(err=>{
                console.log(err)
            })
            console.log('Api',response)
        };
        fetchMovie();

    },[])
    return (
        <div>
           
           <div className="banner-img">
               <MovieListing/>
           </div>
        </div>
    )
}

export default Home
