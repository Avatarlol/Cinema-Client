import React from "react";
import './MovieCard.css'

function MovieCard(props) {

    return ( 
        <div className="moviecard-container">
            <a>{props.movie.name}</a>
            <img src={props.movie.image}/>
        </div>
     );
}

export default MovieCard;