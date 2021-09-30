import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import movieApi from '../../common/api/movie-api';
import APIKey from '../../common/api/movie-api-key'
// fetch movies from the api  using middleware
export const fetchAsyncMovie =createAsyncThunk('movies/fetchAsyncMovie',async(term)=>{
    

    const response = await movieApi
    .get(`?apikey=${APIKey}&s=${term}&type=movie`)
    .catch(err=>{
        console.log(err)
    })
   return response.data

})
// fetch Movies shows from the api using middleware
export const fetchAsyncShow =createAsyncThunk('shows/fetchAsyncShows',async(term)=>{


    const response = await movieApi
    .get(`?apikey=${APIKey}&s=${term}&type=series`)
    .catch(err=>{
        console.log(err)
    })
    console.log("show",response)
   return response.data

})
// fetch Movie detail page
export const fetchAsyncShowDetails =createAsyncThunk('showsdetails/fetchAsyncShowDetails',async(id)=>{
  

    const response = await movieApi
    .get(`?apikey=${APIKey}&i=${id}&Plot=full`)
    .catch(err=>{
        console.log(err)
    })
    // console.log("show",response)
   return response.data

})

const initialState = {
    movies:{},
    shows:{},
    selectedMovieForShow:{},
    
}
// createSlice is a function that takes
// 1- initiaState 2- slicename 3- an object of reduces function
const movieSlice = createSlice({
    name:"movie",
    initialState,
    reducers:{
        // addMovies:(state,{payload})=>{
        //     state.movies = payload
        // },
        removeSelectedMovieOrShow:(state)=>{
            state.selectedMovieForShow={}
        }
    },
    extraReducers:{
        [fetchAsyncMovie.pending]:()=>{
            console.log("pending")
            
        },
        [fetchAsyncMovie.fulfilled]:(state,{payload})=>{
            console.log('fetched successfuly');
            return {...state,movies:payload}
        },
        [fetchAsyncMovie.rejected]:()=>{
            console.log('rejected')
        },
        [fetchAsyncShow.fulfilled]:(state,{payload})=>{
console.log('show fulfilled successfuly');
return {...state,shows:payload}
        },
        [fetchAsyncShowDetails.fulfilled]:(state,{payload})=>{
            console.log('show fulfilled successfuly');
            return {...state,selectedMovieForShow:payload}
                    },
    }
})

// export const{ addMovies} = movieSlice.actions;
export const{ removeSelectedMovieOrShow} = movieSlice.actions;

export const getAllMovies= (state)=>state.movies.movies;
export const getAllShows= (state)=>state.movies.shows;
export const getSelectedMovieForShow =(state)=>state.movies.selectedMovieForShow;
export default movieSlice.reducer;