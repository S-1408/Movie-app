import React from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import MovieDetails from './components/MovieDetails/MovieDetails';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Home from './components/Home/Home';
import Header from "./components/Header/Header";
import MovieCard from "./components/MovieCard/MovieCard";
function App() {
  return (
    <div >
   
   <Router>
     <Header/>
     <div className="container">
<Switch>
<Route path='/' component={Home}/>
       <Route path='/movie/:imdbID' component={MovieDetails}/>
       <Route path='/' component={PageNotFound}/>
      
         
</Switch>
     </div>
  <Footer/>

   </Router>

    </div>
  );
}

export default App;
