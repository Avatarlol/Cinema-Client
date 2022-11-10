import React, { useCallback, useState, useEffect, useRef } from "react";
import './MovieForm.css'
import { isFormValid } from "../Form";

function MovieForm() {

    const [genres, setGenres] = useState([])
    const [error, setError] = useState('')
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
          } catch (error) {
            setError("There's an issue with the server.")
          }
      });

      useEffect(() => {
        getGenres();
      }, [])

      const loadImg = () => {
        const url = document.getElementById('url')
        const img = document.getElementById('img')
          img.src = url.value
      }

      const addMovieHandler = (e) => {
        e.preventDefault();
        setError('')

        try{
        const parent = document.getElementById('movie-form')
        const valid = isFormValid(parent)
          if(!valid){
            throw '1'
          }
        

        }catch(error){
          switch(error){
            case '1':{setError('Fill all the fields!'); break;}
            default: throw error;
          }
        }

        const newMovie = {
          name: nameRef.current.value,
          genre: genreRef.current.value,
          length: lengthRef.current.value,
          image: imageRef.current.value
        }
        console.log(newMovie);
      }

    return ( 
        <form id='movie-form'>
            <div className="error">{error}</div>
            <br/>
            Movie name
            <br/>
            <input id='movie-name' type='text' ref={nameRef} required={true}/>
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
            <input type="number" style={{width: '80px'}} min='10' max='3000' ref={lengthRef} required={true}/>
            <br/><br/>
            Image URL
            <br/>
            <input id='url' type='url' style={{width: '50%', maxWidth: '350px'}} onBlur={loadImg} ref={imageRef} required={true}/>
            <img id='img'/>
            <br/><br/>
            <button onClick={addMovieHandler} > Submit </button>
        </form>
     );
}

export default MovieForm;