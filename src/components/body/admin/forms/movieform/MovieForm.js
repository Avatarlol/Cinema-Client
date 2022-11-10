import React from "react";
import { useRef } from "react";
import { useCallback, useState, useEffect } from "react";
import './MovieForm.css'

function MovieForm() {

    const [genres, setGenres] = useState([])
    const nameRef = useRef('')
    const genreRef = useRef('')
    const lengthRef = useRef('')
    const imageRef = useRef('')

    const getGenres = useCallback(async () => {
        try {
            const response = await fetch('getGenres');
            if (!response.ok) {
              throw new Error('Something went wrong!');
            }
            const data = await response.json();
            setGenres(data);
          } catch (error) {}
      });

      useEffect(() => {
        getGenres();
      }, [])

      const loadImg = () => {
        const url = document.getElementById('url')
        const img = document.getElementById('img')
          img.src = url.value
      }

      const addMovie = (event) => {
        event.preventDefault();
        const newMovie = {
          name: nameRef.current.value,
          genre: genreRef.current.value,
          length: lengthRef.current.value,
          image: imageRef.current.value
        }
        console.log(newMovie);
      }

    return ( 
        <form>
            Movie name
            <br/>
            <input type='text' ref={nameRef}/>
            <br/><br/>
            Genre
            <br/>
            <select ref={genreRef}>
                {genres.map(element => {return(
                    <option key={element} value={element}>{element}</option>
                )})}
            </select>
            <br/><br/>
            Length in minutes
            <br/>
            <input type="number" style={{width: '80px'}} ref={lengthRef}/>
            <br/><br/>
            Image URL
            <br/>
            <img id='img'/>
            <input id='url' type='url' style={{width: '50%', maxWidth: '350px'}} onBlur={loadImg} ref={imageRef}/>
            <br/><br/>
            <button onClick={addMovie} > Submit </button>
        </form>
     );
}

export default MovieForm;