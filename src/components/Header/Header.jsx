import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { fetchAsyncMovie,fetchAsyncShow } from './../../features/movies/movieSlice';
import { useDispatch } from 'react-redux';
function Header() {
    const [ term,setTerm]= useState('');
  const dispatch =useDispatch()
    const submitHandler =(e)=>{
        e.preventDefault();
        console.log(term)
        if(term=== '') return alert('please enter search term')
dispatch(fetchAsyncMovie(term))
dispatch(fetchAsyncShow(term))
setTerm('')
    }
    return (
       
           <div className="header">
              
               <div className="logo"> <Link to="/">Movie app  </Link></div>
             
<div className="search-box">
    <form onSubmit ={submitHandler}>
        <input type="text" value={term} placeholder="search movies or shows" onChange={(e)=>setTerm(e.target.value)} />
        <button type="submit" > <i className="fa fa-search"></i> </button>
    </form>
</div>
               <div className="user-image">
                   {/* <img src={} alt="user" /> */}
               </div>
           </div>
       
    )
}

export default Header
