import React, { useState } from "react";
import './Movies.css'

import MoviesList from './movieslist/MoviesList'
import MoviesFilters from "./moviesfilters/MoviesFilters";

function Movies() {

    const [movies, setMovies] = useState([])

    return ( 
        <div className="movies-container">

            <MoviesFilters setMovies={setMovies}/>
            <MoviesList movies={movies}/>
        
        </div>
     );
}

export default Movies;