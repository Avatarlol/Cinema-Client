import React from "react";
import './MoviesList.css';
import MovieCard from '../../../cards/moviecard/MovieCard'

function MoviesList(props) {

    
    

    return ( 
        <React.Fragment>

            <h3>Movies list</h3>
            <div className="movieslist-container">

                {props.movies.map(element => {
                    return(
                    <MovieCard key={element.id} movie={element}/>
                    )
                })}

            </div>

        </React.Fragment>
     );
}

export default MoviesList;
